"use client";

import { useEffect, useRef, useState } from "react";

type BackgroundVideoProps = {
  src: string;
  poster?: string;
  overlay?: number;
  className?: string;
};

export function BackgroundVideo({
  src,
  poster,
  overlay = 0.65,
  className = "",
}: BackgroundVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduceMotion) return;
    const onCanPlay = () => setReady(true);
    el.addEventListener("canplay", onCanPlay);
    el.play().catch(() => {});
    return () => el.removeEventListener("canplay", onCanPlay);
  }, [reduceMotion]);

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-0 overflow-hidden ${className}`}
    >
      {poster ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${poster})` }}
        />
      ) : null}

      {!reduceMotion ? (
        <video
          ref={ref}
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={src.replace(/\.mp4$/, ".webm")} type="video/webm" />
          <source src={src} type="video/mp4" />
        </video>
      ) : null}

      {overlay > 0 ? (
        <div
          className="absolute inset-0"
          style={{ background: `rgba(6, 21, 58, ${overlay})` }}
        />
      ) : null}
    </div>
  );
}