"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetTimeRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [src, setSrc] = useState<string>("/video/bg.mp4");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let createdUrl: string | null = null;
    fetch("/video/bg.mp4")
      .then((r) => r.blob())
      .then((b) => {
        if (cancelled) return;
        createdUrl = URL.createObjectURL(b);
        setSrc(createdUrl);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
      if (createdUrl) URL.revokeObjectURL(createdUrl);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const unlock = () => {
      video.play().then(() => video.pause()).catch(() => {});
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("click", unlock);
    };
    window.addEventListener("touchstart", unlock, { once: true, passive: true });
    window.addEventListener("click", unlock, { once: true });

    const tick = () => {
      const v = videoRef.current;
      if (!v || !v.duration || isNaN(v.duration)) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      const current = v.currentTime;
      const target = targetTimeRef.current;
      const diff = target - current;
      if (Math.abs(diff) > 0.02) {
        try {
          v.currentTime = current + diff * 0.15;
        } catch {}
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      const v = videoRef.current;
      if (!v || !v.duration || isNaN(v.duration)) return;
      const scrollTop = window.scrollY || window.pageYOffset;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, scrollTop / max)) : 0;
      targetTimeRef.current = progress * v.duration;
    };

    const onLoaded = () => {
      setReady(true);
      onScroll();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    if (video.readyState >= 1 && video.duration) onLoaded();
    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("canplay", onLoaded);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("click", unlock);
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("canplay", onLoaded);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [src]);

  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        // @ts-expect-error - iOS-specific attribute
        webkit-playsinline="true"
        preload="auto"
        autoPlay
        disablePictureInPicture
        crossOrigin="anonymous"
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
