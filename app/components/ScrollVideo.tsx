"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetTimeRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  useEffect(() => {
    const mobile =
      typeof window !== "undefined" &&
      (window.matchMedia("(hover: none) and (pointer: coarse)").matches ||
        /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    setIsMobile(mobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    let cancelled = false;
    fetch("/video/bg.mp4")
      .then((r) => r.blob())
      .then((b) => {
        if (cancelled) return;
        setBlobUrl(URL.createObjectURL(b));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [isMobile]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isMobile) {
      video.loop = true;
      video.muted = true;
      video.play().catch(() => {});
      return;
    }

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
        try {
          v.currentTime = current + diff * 0.1;
        } catch {}
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
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    if (video.readyState >= 1) onLoaded();
    video.addEventListener("loadedmetadata", onLoaded);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      video.removeEventListener("loadedmetadata", onLoaded);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile, blobUrl]);

  const src = !isMobile && blobUrl ? blobUrl : "/video/bg.mp4";

  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        autoPlay={isMobile}
        loop={isMobile}
        preload="auto"
        disablePictureInPicture
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
