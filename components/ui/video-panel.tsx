"use client";

import { useEffect, useRef, useState } from "react";

type VideoPanelProps = {
  src: string;
  poster?: string;
  hue: number;
  direction?: "right" | "left";
  icon?: React.ReactNode;
  className?: string;
};

export function VideoPanel({
  src,
  poster,
  hue,
  direction = "right",
  icon,
  className = "",
}: VideoPanelProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try to autoplay as soon as the component mounts
    const tryPlay = () => {
      video.play().catch(() => {
        // Browser blocked autoplay — will retry when scrolled into view
      });
    };

    tryPlay();

    // Play when the panel enters the viewport, pause when it leaves
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const hue2 = (hue + 30) % 360;

  return (
    <div
      className={`group/video relative aspect-[4/3] w-full overflow-hidden rounded-[18px] border border-foreground/15 bg-[#0B1220] shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 min-[901px]:aspect-[16/11] min-[901px]:rounded-[22px] ${className}`}
    >
      {/* Fallback gradient with icon — always underneath */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, hsl(${hue} 60% 22%), hsl(${hue2} 60% 14%))`,
        }}
      >
        <div
          className="flex h-20 w-20 items-center justify-center rounded-[20px] text-[color:#001026] transition-transform duration-500 group-hover/video:scale-105 min-[641px]:h-24 min-[641px]:w-24 min-[641px]:rounded-3xl"
          style={{
            background: `linear-gradient(135deg, hsl(${hue} 78% 58%), hsl(${hue2} 78% 64%))`,
            boxShadow: `0 20px 48px -18px hsl(${hue} 80% 55% / 0.85)`,
          }}
        >
          <div className="h-10 w-10 min-[641px]:h-12 min-[641px]:w-12">
            {icon}
          </div>
        </div>
      </div>

      {/* Optional poster image (higher priority than gradient) */}
      {poster ? (
        <div
          aria-hidden
          className="absolute inset-0 z-[2] bg-cover bg-center"
          style={{ backgroundImage: `url(${poster})` }}
        />
      ) : null}

      {/* Video — autoplays muted and loops */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        poster={poster}
        onCanPlay={() => setReady(true)}
        className={`absolute inset-0 z-[3] h-full w-full object-cover transition-opacity duration-700 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src={src.replace(/\.mp4$/, ".webm")} type="video/webm" />
        <source src={src} type="video/mp4" />
      </video>

      {/* Static status chip — bottom-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-3 left-3 z-[4] flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-950/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-100 backdrop-blur-md"
        style={{ lineHeight: 1 }}
      >
        <span className="relative flex h-2 w-2 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <span>Now Playing</span>
      </div>

      {/* Triangle accent — corner */}
      <svg
        aria-hidden
        viewBox="0 0 100 100"
        className={`pointer-events-none absolute top-0 z-[4] h-11 w-11 transition-transform duration-500 min-[641px]:h-14 min-[641px]:w-14 ${
          direction === "right"
            ? "right-0 rotate-90 group-hover/video:scale-110"
            : "left-0 -rotate-90 group-hover/video:scale-110"
        }`}
        style={{
          color: `hsl(${hue} 85% 60%)`,
          filter: `drop-shadow(0 4px 12px hsl(${hue} 80% 50% / 0.6))`,
        }}
      >
        <polygon points="100,0 100,100 0,0" fill="currentColor" />
      </svg>
    </div>
  );
}