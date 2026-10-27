"use client";

import { useCallback, useEffect, useState } from "react";

export type HeroSlide = { src: string; alt: string };

interface HeroCarouselProps {
  slides: HeroSlide[];
  interval?: number;
}

export function HeroCarousel({ slides, interval = 3000 }: HeroCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const goTo = useCallback(
    (n: number) => setIndex(((n % count) + count) % count),
    [count]
  );
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearInterval(id);
  }, [paused, count, interval]);

  return (
    <div
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
        if (e.key === "ArrowRight") { e.preventDefault(); next(); }
      }}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="TechSwiftTrix Agency highlights"
    >
      {/* Image only — no overlays */}
      <div
        className="relative w-full overflow-hidden rounded-2xl border border-white/30 bg-black/30 shadow-2xl"
        style={{ aspectRatio: "16 / 9" }}
      >
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            loading={i === 0 ? "eager" : "lazy"}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === index ? 1 : 0 }}
            aria-hidden={i !== index}
          />
        ))}
      </div>

      {/* Controls — BELOW the image */}
      <div className="mt-3 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-2.5 w-2.5 rounded-full border border-white/60 transition ${
                i === index ? "bg-white" : "bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}