"use client";

import { useEffect, useRef } from "react";

export default function ScrollVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let lastScrollY = window.scrollY;
    let direction: 1 | -1 | 0 = 0;
    let idleTimer: ReturnType<typeof setTimeout> | null = null;
    let rafId: number | null = null;
    let lastT = performance.now();

    const onLoaded = () => {
      video.pause();
      video.currentTime = 0;
    };

    if (video.readyState >= 1) onLoaded();
    else video.addEventListener("loadedmetadata", onLoaded);

    const tick = (t: number) => {
      const dt = (t - lastT) / 1000;
      lastT = t;
      if (direction === -1 && video.duration) {
        const next = video.currentTime - dt;
        video.currentTime = next <= 0 ? video.duration + next : next;
      }
      rafId = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      const y = window.scrollY;
      const dy = y - lastScrollY;
      lastScrollY = y;
      if (dy === 0) return;

      if (dy > 0) {
        if (direction !== 1) {
          direction = 1;
          video.playbackRate = 1;
          video.play().catch(() => {});
        }
      } else {
        if (direction !== -1) {
          direction = -1;
          video.pause();
        }
      }

      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        direction = 0;
        video.pause();
      }, 120);
    };

    rafId = requestAnimationFrame(tick);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      video.removeEventListener("loadedmetadata", onLoaded);
      if (rafId) cancelAnimationFrame(rafId);
      if (idleTimer) clearTimeout(idleTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      <video
        ref={videoRef}
        src="/video/bg.mp4"
        muted
        playsInline
        // @ts-expect-error iOS attr
        webkit-playsinline="true"
        preload="auto"
        loop
        disablePictureInPicture
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
    </div>
  );
}
