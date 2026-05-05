"use client";

import { useEffect, useRef } from "react";

export default function ScrollVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetTimeRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();

    const tick = () => {
      const v = videoRef.current;
      if (!v || !v.duration) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      const current = v.currentTime;
      const target = targetTimeRef.current;
      const diff = target - current;
      if (Math.abs(diff) > 0.01) {
        v.currentTime = current + diff * 0.1;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      const v = videoRef.current;
      if (!v || !v.duration) return;
      const scrollTop = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, scrollTop / max)) : 0;
      targetTimeRef.current = progress * v.duration;
    };

    const onLoaded = () => {
      onScroll();
      rafRef.current = requestAnimationFrame(tick);
    };

    if (video.readyState >= 1) onLoaded();
    else video.addEventListener("loadedmetadata", onLoaded);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      video.removeEventListener("loadedmetadata", onLoaded);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      <video
        ref={videoRef}
        src="/video/bg.mp4"
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
