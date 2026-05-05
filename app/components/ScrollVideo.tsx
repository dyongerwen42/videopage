"use client";

import { useEffect, useRef, useState } from "react";

const DESKTOP_FRAMES = 180;
const MOBILE_FRAMES = 120;

function frameUrl(i: number, mobile: boolean) {
  const n = String(i + 1).padStart(3, "0");
  return `/${mobile ? "frames-sm" : "frames"}/f_${n}.jpg`;
}

type Frame = HTMLImageElement | ImageBitmap;

export default function ScrollVideo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<(Frame | undefined)[]>([]);
  const targetRef = useRef(0);
  const drawnRef = useRef(-1);
  const rafRef = useRef<number | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const mobile =
      window.matchMedia("(max-width: 768px)").matches ||
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const FRAME_COUNT = mobile ? MOBILE_FRAMES : DESKTOP_FRAMES;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = mobile ? "low" : "high";

    const dpr = mobile ? 1 : Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      drawnRef.current = -1;
      drawAt(targetRef.current);
    };

    const drawFrame = (frame: Frame) => {
      const cw = canvas.width;
      const ch = canvas.height;
      const iw = (frame as HTMLImageElement).naturalWidth || (frame as ImageBitmap).width;
      const ih = (frame as HTMLImageElement).naturalHeight || (frame as ImageBitmap).height;
      if (!iw || !ih) return;
      const scale = Math.max(cw / iw, ch / ih);
      const w = iw * scale;
      const h = ih * scale;
      const x = (cw - w) / 2;
      const y = (ch - h) / 2;
      ctx.drawImage(frame as CanvasImageSource, x, y, w, h);
    };

    const findClosest = (i: number): Frame | null => {
      const exact = framesRef.current[i];
      if (exact) return exact;
      for (let d = 1; d < 20; d++) {
        const a = framesRef.current[i - d];
        if (a) return a;
        const b = framesRef.current[i + d];
        if (b) return b;
      }
      return null;
    };

    const drawAt = (idx: number) => {
      const i = Math.max(0, Math.min(FRAME_COUNT - 1, Math.round(idx)));
      if (i === drawnRef.current) return;
      const frame = findClosest(i);
      if (!frame) return;
      drawFrame(frame);
      drawnRef.current = i;
    };

    const supportsBitmap = typeof createImageBitmap === "function";

    framesRef.current = new Array(FRAME_COUNT);
    let loaded = 0;

    const loadFrame = async (i: number) => {
      try {
        if (supportsBitmap) {
          const res = await fetch(frameUrl(i, mobile));
          const blob = await res.blob();
          const bmp = await createImageBitmap(blob);
          framesRef.current[i] = bmp;
        } else {
          await new Promise<void>((res) => {
            const img = new Image();
            img.decoding = "async";
            img.onload = () => {
              framesRef.current[i] = img;
              res();
            };
            img.onerror = () => res();
            img.src = frameUrl(i, mobile);
          });
        }
      } catch {}
      loaded++;
      setProgress(loaded / FRAME_COUNT);
      if (i === 0) drawAt(0);
    };

    (async () => {
      await loadFrame(0);
      const concurrency = mobile ? 3 : 6;
      let next = 1;
      const workers = Array.from({ length: concurrency }, async () => {
        while (next < FRAME_COUNT) {
          const idx = next++;
          await loadFrame(idx);
        }
      });
      await Promise.all(workers);
    })();

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      targetRef.current = p * (FRAME_COUNT - 1);
    };

    const tick = () => {
      drawAt(targetRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    resize();
    onScroll();
    rafRef.current = requestAnimationFrame(tick);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      framesRef.current.forEach((f) => {
        if (f && "close" in f) (f as ImageBitmap).close();
      });
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
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {progress < 1 && (
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
