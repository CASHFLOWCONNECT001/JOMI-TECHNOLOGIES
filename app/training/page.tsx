import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { CtaSection } from "@/components/ui/cta-section";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { VideoRow } from "@/components/ui/video-row";
import { createPageMetadata } from "@/lib/seo";
import { TRAINING_CATEGORIES, TRAINING_UNITS } from "@/lib/training";

export const metadata: Metadata = createPageMetadata({
  title: "Training",
  description:
    "Computer and digital skills training at JOMI TECHNOLOGIES INSTITUTE — computer basics, Microsoft Office, programming, databases, networking, web and mobile development, graphic design, digital marketing, cybersecurity, and self-employment skills.",
  path: "/training",
  keywords: [
    "ICT training",
    "computer training Kenya",
    "programming course",
    "database training",
    "networking course",
    "Microsoft Office training",
    "digital marketing course",
    "graphic design course",
    "cybersecurity training",
    "self-employment skills",
  ],
});

const ICON_MAP: Record<string, React.ReactNode> = {
  training: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6" />
      <path d="M2 10l10-5 10 5-10 5L2 10z" />
      <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
    </svg>
  ),
  office: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 3v18" />
    </svg>
  ),
  typing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h12" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
    </svg>
  ),
  cpu: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 9h6v6H9zM2 12h4M18 12h4M12 2v4M12 18v4" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="6" rx="9" ry="3" />
      <path d="M3 6v6c0 1.66 4.03 3 9 3s9-1.34 9-3V6" />
      <path d="M3 12v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
    </svg>
  ),
  network: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="14" width="6" height="6" rx="1" />
      <rect x="16" y="14" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M12 8v6M5 14v-3h14v3" />
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M12 18h.01" />
    </svg>
  ),
  palette: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="10.5" r="2.5" />
      <circle cx="8.5" cy="7.5" r="2.5" />
      <circle cx="6.5" cy="12.5" r="2.5" />
      <path d="M12 22a10 10 0 110-20 10 10 0 018.5 15" />
    </svg>
  ),
  marketing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l18-6v14L3 13z" />
      <path d="M3 11v2a4 4 0 004 4h1l2 4" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M8 7V5a4 4 0 018 0v2" />
    </svg>
  ),
};

export default function TrainingPage() {
  return (
    <main className="section-y">
      <Container>
        {/* ---------- HERO ---------- */}
        <SectionWrapper elevated>
          <Reveal from="up" duration={700}>
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              Training
            </p>
          </Reveal>
          <Reveal from="up" delay={80} duration={800}>
            <h1 className="mt-2 text-3xl font-bold md:text-4xl">
              Practical IT skills. Real self-employment paths.
            </h1>
          </Reveal>
          <Reveal from="up" delay={180} duration={900}>
            <p className="mt-3 max-w-3xl text-foreground/82">
              Every course at JOMI TECHNOLOGIES INSTITUTE is designed with
              two outcomes in mind: competence, and income. Whether you want
              a job, a side income, or to build your own IT business — our
              training gets you there with hands-on, workplace-ready skills.
            </p>
          </Reveal>
        </SectionWrapper>

        {/* ---------- CATEGORY SECTIONS ---------- */}
        {TRAINING_CATEGORIES.map((category, ci) => {
          const units = TRAINING_UNITS.filter((u) => u.category === category);
          if (units.length === 0) return null;

          return (
            <section key={category} className={ci > 0 ? "mt-20" : "mt-14"}>
              <Reveal from="up" duration={700}>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-cyan)]">
                  {category}
                </p>
                <h2 className="mt-1 text-2xl font-semibold md:text-3xl">
                  {units.length} unit{units.length === 1 ? "" : "s"}
                </h2>
              </Reveal>

              <div className="mt-10 space-y-16">
                {units.map((unit, i) => (
                  <VideoRow
                    key={unit.slug}
                    slug={unit.slug}
                    number={String(i + 1).padStart(2, "0")}
                    direction={i % 2 === 0 ? "right" : "left"}
                    hue={unit.hue}
                    eyebrow={unit.category}
                    title={unit.title}
                    description={unit.description}
                    meta={`${unit.duration} · ${unit.level}`}
                    summaryFeatures={unit.summaryFeatures}
                    icon={ICON_MAP[unit.icon]}
                    videoSrc={`/videos/${unit.slug}.mp4`}
                    videoPoster={`/images/${unit.slug}-poster.jpg`}
                    ctaHref={`/training/${unit.slug}`}
                    ctaLabel="Explore Course"
                  />
                ))}
              </div>
            </section>
          );
        })}

        {/* ---------- CTA ---------- */}
        <Reveal from="up" delay={100} duration={900}>
          <CtaSection
            title="Ready to enrol or ask a question?"
            description="Talk to our admissions team. We'll help you choose the right course, confirm schedules, and get you started."
            primaryAction={{ href: "/contact", label: "Enroll Now" }}
            secondaryAction={{ href: "/services", label: "View Software Services" }}
          />
        </Reveal>
      </Container>
    </main>
  );
}