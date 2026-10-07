import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";
import { VideoPanel } from "@/components/ui/video-panel";

type VideoRowProps = {
  slug: string;
  number?: string;
  direction: "right" | "left";
  hue: number;
  eyebrow: string;
  title: string;
  description: string;
  meta?: string;
  summaryFeatures?: string[];
  icon: React.ReactNode;
  videoSrc: string;
  videoPoster?: string;
  ctaHref: string;
  ctaLabel?: string;
  contactHref?: string;
};

export function VideoRow({
  slug,
  number,
  direction,
  hue,
  eyebrow,
  title,
  description,
  meta,
  summaryFeatures,
  icon,
  videoSrc,
  videoPoster,
  ctaHref,
  ctaLabel = "Explore Service",
  contactHref = "/contact",
}: VideoRowProps) {
  const videoOnRight = direction === "right";
  const hue2 = (hue + 30) % 360;

  return (
    <Reveal from="up" duration={800}>
      <div
        className="mx-auto grid w-full max-w-[1200px] items-center gap-8 px-5 md:gap-10 min-[901px]:grid-cols-2 min-[901px]:gap-[60px]"
        style={{ "--hue": hue } as React.CSSProperties}
      >
        {/* Video side */}
        <div
          className={`relative ${
            videoOnRight ? "min-[901px]:order-2" : "min-[901px]:order-1"
          }`}
        >
          <VideoPanel
            src={videoSrc}
            poster={videoPoster}
            hue={hue}
            direction={direction}
            icon={icon}
          />
        </div>

        {/* Text side */}
        <div
          className={`${
            videoOnRight ? "min-[901px]:order-1" : "min-[901px]:order-2"
          }`}
        >
          {/* Number badge + eyebrow */}
          <div className="flex items-center gap-3">
            {number ? (
              <span
                aria-hidden
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold shadow-lg"
                style={{
                  background: `linear-gradient(135deg, hsl(${hue} 78% 58%), hsl(${hue2} 78% 64%))`,
                  color: "#001026",
                  boxShadow: `0 8px 22px -10px hsl(${hue} 80% 55% / 0.75)`,
                }}
              >
                {number}
              </span>
            ) : null}
            <p
              className="text-xs font-semibold uppercase tracking-[0.16em]"
              style={{ color: `hsl(${hue} 78% 58%)` }}
            >
              {eyebrow}
            </p>
          </div>

          {/* Title */}
          <h3 className="mt-4 text-2xl font-bold leading-[1.1] tracking-tight md:text-4xl">
            {title}
          </h3>

          {/* Meta */}
          {meta ? (
            <p
              className="mt-2 text-sm font-semibold"
              style={{ color: `hsl(${hue} 70% 55%)` }}
            >
              {meta}
            </p>
          ) : null}

          {/* Description */}
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-foreground/82 md:text-base md:leading-[1.75]">
            {description}
          </p>

          {/* Summary feature bullets — two columns */}
          {summaryFeatures && summaryFeatures.length > 0 ? (
            <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {summaryFeatures.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-foreground/85"
                >
                  <span
                    aria-hidden
                    className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: `hsl(${hue} 70% 55% / 0.15)`,
                      color: `hsl(${hue} 70% 45%)`,
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-2.5 w-2.5"
                    >
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {/* Dual CTAs */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-[var(--radius-cta)] px-5 py-2.5 text-sm font-semibold shadow-lg transition-all hover:-translate-y-0.5"
              style={{
                background: `linear-gradient(135deg, hsl(${hue} 78% 58%), hsl(${hue2} 78% 64%))`,
                color: "#001026",
                boxShadow: `0 12px 28px -12px hsl(${hue} 80% 55% / 0.75)`,
              }}
            >
              {ctaLabel}
              <span aria-hidden>→</span>
            </Link>
            <Link
              href={contactHref}
              className="inline-flex items-center gap-2 rounded-[var(--radius-cta)] border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground/85 transition-all hover:-translate-y-0.5 hover:border-[var(--color-brand-cyan)]/60 hover:bg-[var(--color-brand-cyan)]/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
}