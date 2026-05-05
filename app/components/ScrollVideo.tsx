"use client";

import { useEffect, useRef, useState } from "react";

const DESKTOP_FRAMES = 180;
const MOBILE_FRAMES = 60;

function frameUrl(i: number, mobile: boolean) {
  const n = String(i + 1).padStart(3, "0");
  return `/${mobile ? "frames-sm" : "frames"}/f_${n}.jpg`;
}

export default function ScrollVideo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef(0);
  const drawnRef = useRef(-1);
  const rafRef = useRef<number | null>(null);
  const [mode, setMode] = useState<"mobile" | "desktop" | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const mobile =
      window.matchMedia("(max-width: 768px)").matches ||
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setMode(mobile ? "mobile" : "desktop");
    const FRAME_COUNT = mobile ? MOBILE_FRAMES : DESKTOP_FRAMES;

    if (mobile) {
      // Mobile: DOM stack of <img>, GPU-composited, browser handles smoothness
      const stack = stackRef.current;
      if (!stack) return;

      const imgs: HTMLImageElement[] = [];
      let loaded = 0;
      for (let i = 0; i < FRAME_COUNT; i++) {
        const img = document.createElement("img");
        img.src = frameUrl(i, true);
        img.alt = "";
        img.decoding = "async";
        img.style.cssText =
          "position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;visibility:hidden;will-change:visibility;";
        img.onload = () => {
          loaded++;
          setProgress(loaded / FRAME_COUNT);
        };
        stack.appendChild(img);
        imgs.push(img);
      }
      imgs[0].style.visibility = "visible";

      const show = (idx: number) => {
        const i = Math.max(0, Math.min(FRAME_COUNT - 1, Math.round(idx)));
        if (i === drawnRef.current) return;
        if (drawnRef.current >= 0 && imgs[drawnRef.current]) {
          imgs[drawnRef.current].style.visibility = "hidden";
        }
        if (imgs[i]) imgs[i].style.visibility = "visible";
        drawnRef.current = i;
      };

      const onScroll = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
        targetRef.current = p * (FRAME_COUNT - 1);
      };

      const tick = () => {
        show(targetRef.current);
        rafRef.current = requestAnimationFrame(tick);
      };

      onScroll();
      rafRef.current = requestAnimationFrame(tick);
      window.addEventListener("scroll", onScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", onScroll);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        stack.innerHTML = "";
      };
    }

    // Desktop: canvas with ImageBitmap pre-decode + smooth lerp
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const frames: (ImageBitmap | HTMLImageElement | undefined)[] = new Array(
      FRAME_COUNT,
    );

    const resize = () => {
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      drawnRef.current = -1;
    };

    const drawFrame = (frame: ImageBitmap | HTMLImageElement) => {
      const cw = canvas.width;
      const ch = canvas.height;
      const iw = (frame as HTMLImageElement).naturalWidth || (frame as ImageBitmap).width;
      const ih = (frame as HTMLImageElement).naturalHeight || (frame as ImageBitmap).height;
      if (!iw || !ih) return;
      const scale = Math.max(cw / iw, ch / ih);
      const w = iw * scale;
      const h = ih * scale;
      ctx.drawImage(frame as CanvasImageSource, (cw - w) / 2, (ch - h) / 2, w, h);
    };

    const drawAt = (idx: number) => {
      const i = Math.max(0, Math.min(FRAME_COUNT - 1, Math.round(idx)));
      if (i === drawnRef.current) return;
      let frame = frames[i];
      if (!frame) {
        for (let d = 1; d < 20 && !frame; d++) {
          frame = frames[i - d] || frames[i + d];
        }
      }
      if (!frame) return;
      drawFrame(frame);
      drawnRef.current = i;
    };

    let loaded = 0;
    const loadFrame = async (i: number) => {
      try {
        const res = await fetch(frameUrl(i, false));
        const blob = await res.blob();
        frames[i] = await createImageBitmap(blob);
      } catch {}
      loaded++;
      setProgress(loaded / FRAME_COUNT);
      if (i === 0) drawAt(0);
    };

    (async () => {
      await loadFrame(0);
      const concurrency = 6;
      let next = 1;
      await Promise.all(
        Array.from({ length: concurrency }, async () => {
          while (next < FRAME_COUNT) {
            const idx = next++;
            await loadFrame(idx);
          }
        }),
      );
    })();

    let smoothed = 0;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      targetRef.current = p * (FRAME_COUNT - 1);
    };

    const tick = () => {
      smoothed += (targetRef.current - smoothed) * 0.18;
      drawAt(smoothed);
      rafRef.current = requestAnimationFrame(tick);
    };

    resize();
    onScroll();
    smoothed = targetRef.current;
    rafRef.current = requestAnimationFrame(tick);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      frames.forEach((f) => f && "close" in f && (f as ImageBitmap).close());
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      <picture>
        <source media="(max-width: 768px)" srcSet="/frames-sm/poster.jpg" />
        <img
          src="/frames/poster.jpg"
          alt=""
          aria-hidden
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </picture>
      {mode === "mobile" && (
        <div ref={stackRef} className="absolute inset-0" aria-hidden />
      )}
      {mode === "desktop" && (
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      )}
      {progress > 0 && progress < 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-white/20 overflow-hidden">
          <div
            className="h-full bg-white/80 transition-[width] duration-150"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
        </div>
      )}
    </div>
  );
}
