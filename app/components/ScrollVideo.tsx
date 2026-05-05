"use client";

import { useEffect, useRef, useState } from "react";

const DESKTOP_FRAMES = 180;
const MOBILE_FRAMES = 120;

function frameUrl(i: number, mobile: boolean) {
  const n = String(i + 1).padStart(3, "0");
  return `/${mobile ? "frames-sm" : "frames"}/f_${n}.jpg`;
}

export default function ScrollVideo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const targetRef = useRef(0);
  const currentRef = useRef(0);
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
    ctx.imageSmoothingQuality = "high";

    const dpr = mobile ? 1 : Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      draw(currentRef.current);
    };

    const drawFrame = (img: HTMLImageElement) => {
      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      if (!iw || !ih) return;
      const scale = Math.max(cw / iw, ch / ih);
      const w = iw * scale;
      const h = ih * scale;
      const x = (cw - w) / 2;
      const y = (ch - h) / 2;
      ctx.drawImage(img, x, y, w, h);
    };

    const draw = (idx: number) => {
      const i = Math.max(0, Math.min(FRAME_COUNT - 1, Math.round(idx)));
      const img = imagesRef.current[i];
      if (img && img.complete && img.naturalWidth > 0) {
        drawFrame(img);
      } else {
        for (let d = 1; d < 10; d++) {
          const a = imagesRef.current[i - d];
          if (a && a.complete && a.naturalWidth > 0) {
            drawFrame(a);
            return;
          }
          const b = imagesRef.current[i + d];
          if (b && b.complete && b.naturalWidth > 0) {
            drawFrame(b);
            return;
          }
        }
      }
    };

    let loaded = 0;
    imagesRef.current = new Array(FRAME_COUNT);
    const loadFrame = (i: number) =>
      new Promise<void>((res) => {
        const img = new Image();
        img.decoding = "async";
        img.onload = () => {
          loaded++;
          setProgress(loaded / FRAME_COUNT);
          if (i === 0) draw(0);
          res();
        };
        img.onerror = () => {
          loaded++;
          setProgress(loaded / FRAME_COUNT);
          res();
        };
        img.src = frameUrl(i, mobile);
        imagesRef.current[i] = img;
      });

    (async () => {
      await loadFrame(0);
      const concurrency = mobile ? 4 : 8;
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

    const lerp = mobile ? 0.35 : 0.18;
    const tick = () => {
      const diff = targetRef.current - currentRef.current;
      if (Math.abs(diff) > 0.05) {
        currentRef.current += diff * lerp;
        draw(currentRef.current);
      }
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
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
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
