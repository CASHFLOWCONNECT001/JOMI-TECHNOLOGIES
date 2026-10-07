"use client";

import { useRef, useState } from "react";

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
  const [hovering, setHovering] = useState(false);
  const [ready, setReady] = useState(false);

  function play() {
    setHovering(true);
    videoRef.current?.play().catch(() => {});
  }

  function pause() {
    setHovering(false);
    videoRef.current?.pause();
  }

  const hue2 = (hue + 30) % 360;

  return (
    <div
      className={`group/video relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-card)] border border-foreground/15 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 min-[901px]:aspect-[16/11] ${className}`}
      onMouseEnter={play}
      onMouseLeave={pause}
      onTouchStart={play}
    >
      {/* Fallback gradient with icon — shown always underneath */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, hsl(${hue} 60% 22%), hsl(${hue2} 60% 14%))`,
        }}
      >
        <div
          className="flex h-24 w-24 items-center justify-center rounded-3xl text-[color:#001026] transition-transform duration-500 group-hover/video:scale-105"
          style={{
            background: `linear-gradient(135deg, hsl(${hue} 78% 58%), hsl(${hue2} 78% 64%))`,
            boxShadow: `0 20px 48px -18px hsl(${hue} 80% 55% / 0.85)`,
          }}
        >
          <div className="h-12 w-12">{icon}</div>
        </div>
      </div>

      {/* Optional poster image (higher priority than gradient) */}
      {poster ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${poster})` }}
        />
      ) : null}

      {/* Video — plays on hover */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        poster={poster}
        onCanPlay={() => setReady(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src={src.replace(/\.mp4$/, ".webm")} type="video/webm" />
        <source src={src} type="video/mp4" />
      </video>

      {/* Play indicator — grey dot when idle, green pulsing dot on hover */}
      <div
        className={`pointer-events-none absolute bottom-3 left-3 flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] backdrop-blur-md transition-all duration-300 ${
          hovering
            ? "border-emerald-400/40 bg-emerald-950/60 text-emerald-100"
            : "border-white/20 bg-black/50 text-white/90"
        }`}
      >
        <span
          aria-hidden
          className={`relative flex h-2 w-2 items-center justify-center ${
            hovering ? "" : ""
          }`}
        >
          <span
            className={`absolute inline-flex h-full w-full rounded-full ${
              hovering
                ? "animate-ping bg-emerald-400 opacity-75"
                : "bg-white/50"
            }`}
          />
          <span
            className={`relative inline-flex h-2 w-2 rounded-full ${
              hovering ? "bg-emerald-400" : "bg-white/70"
            }`}
          />
        </span>
        {hovering ? "Now Playing" : "Hover to Play"}
      </div>

      {/* Triangle accent */}
      <svg
        aria-hidden
        viewBox="0 0 100 100"
        className={`pointer-events-none absolute top-0 h-14 w-14 transition-transform duration-500 group-hover/video:scale-110 ${
          direction === "right"
            ? "right-0 rotate-90"
            : "left-0 -rotate-90"
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