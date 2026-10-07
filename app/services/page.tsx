import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { CtaSection } from "@/components/ui/cta-section";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { VideoRow } from "@/components/ui/video-row";
import { SOFTWARE_SERVICES } from "@/lib/services";
import { createPageMetadata } from "@/lib/seo";
import { TRAINING_UNITS } from "@/lib/training";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore JOMI TECHNOLOGIES INSTITUTE services — ICT training in computer basics, Microsoft Office, programming, databases, networking, and self-employment skills, plus software and systems including ERP, CRM, e-commerce websites, POS, school management, LMS platforms, and custom web and mobile apps.",
  path: "/services",
  keywords: [
    "JOMI TECHNOLOGIES INSTITUTE services",
    "ICT training services",
    "computer training",
    "programming training",
    "database training",
    "networking training",
    "digital marketing training",
    "ERP systems",
    "CRM systems",
    "e-commerce development",
    "mobile app development",
    "POS systems",
    "school management system",
    "LMS platform",
  ],
});

const ICON_MAP: Record<string, React.ReactNode> = {
  database: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="6" rx="9" ry="3" />
      <path d="M3 6v6c0 1.66 4.03 3 9 3s9-1.34 9-3V6" />
      <path d="M3 12v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  cart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
    </svg>
  ),
  store: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l1.5-5h15L21 9M3 9v10a1 1 0 001 1h16a1 1 0 001-1V9M3 9h18" />
      <path d="M9 22V12h6v10" />
    </svg>
  ),
  school: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10l9-5 9 5-9 5-9-5z" />
      <path d="M7 12v5c0 1 2.24 2 5 2s5-1 5-2v-5" />
      <path d="M21 10v6" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="3" />
      <path d="M11 18h2" />
      <path d="M9 6h6" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  sparkles: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
      <path d="M19 15l.7 1.8L21.5 18l-1.8.7L19 20.5l-.7-1.8L16.5 18l1.8-.7L19 15z" />
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
  marketing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l18-6v14L3 13z" />
      <path d="M3 11v2a4 4 0 004 4h1l2 4" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M8 7V5a4 4 0 018 0v2" />
    </svg>
  ),
};

export default function Page() {
  return (
    <main className="section-y">
      <Container>
        {/* ---------- HERO ---------- */}
        <SectionWrapper elevated>
          <Reveal from="up" duration={700}>
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              Services
            </p>
          </Reveal>
          <Reveal from="up" delay={80} duration={800}>
            <h1 className="mt-2 text-3xl font-bold md:text-4xl">
              Training that builds people. Software that builds businesses.
            </h1>
          </Reveal>
          <Reveal from="up" delay={180} duration={900}>
            <p className="mt-3 max-w-3xl text-foreground/82">
              JOMI TECHNOLOGIES INSTITUTE operates as both a computer and
              digital skills training institution and a software and systems
              provider. We deliver practical, accessible, and relevant
              technology education — with self-employment paths built into
              every programme — alongside enterprise-grade digital solutions
              for learners, professionals, entrepreneurs, businesses, and
              organizations.
            </p>
          </Reveal>
        </SectionWrapper>

        {/* ---------- TRAINING TRACK ---------- */}
        <section className="mt-14">
          <Reveal from="up" duration={700}>
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-cyan)]">
                  Training Track
                </p>
                <h2 className="mt-1 text-2xl font-semibold md:text-3xl">
                  Computer &amp; Digital Skills Training
                </h2>
              </div>
              <Link
                href="/training"
                className="text-sm font-medium text-[var(--color-brand-cyan)] hover:underline"
              >
                View all training →
              </Link>
            </div>
          </Reveal>

          <Reveal from="up" delay={120} duration={800}>
            <p className="mt-3 max-w-3xl text-sm text-foreground/80">
              Structured, hands-on training for students, professionals,
              entrepreneurs, and individuals seeking to improve their
              digital capabilities — every unit includes a self-employment
              path.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-12 min-[901px]:grid-cols-2 min-[901px]:gap-[60px]">
            {TRAINING_UNITS.slice(0, 6).map((unit, i) => (
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

        <Reveal from="fade" duration={700}>
          <div className="divider-gradient my-16" />
        </Reveal>

        {/* ---------- SOFTWARE TRACK ---------- */}
        <section>
          <Reveal from="up" duration={700}>
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-cyan)]">
                  Software &amp; Systems Track
                </p>
                <h2 className="mt-1 text-2xl font-semibold md:text-3xl">
                  Software, Systems &amp; Digital Solutions
                </h2>
              </div>
              <Link
                href="/services/all"
                className="text-sm font-medium text-[var(--color-brand-cyan)] hover:underline"
              >
                View all software →
              </Link>
            </div>
          </Reveal>

          <Reveal from="up" delay={120} duration={800}>
            <p className="mt-3 max-w-3xl text-sm text-foreground/80">
              Custom-built systems and websites for businesses, schools,
              retail, hospitality, and organizations of every size.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-12 min-[901px]:grid-cols-2 min-[901px]:gap-[60px]">
            {SOFTWARE_SERVICES.map((s, i) => (
              <VideoRow
                key={s.slug}
                slug={s.slug}
                number={String(i + 1).padStart(2, "0")}
                direction={i % 2 === 0 ? "right" : "left"}
                hue={s.hue}
                eyebrow={s.short}
                title={s.title}
                description={s.description}
                summaryFeatures={s.summaryFeatures}
                icon={ICON_MAP[s.icon]}
                videoSrc={`/videos/${s.slug}.mp4`}
                videoPoster={`/images/${s.slug}-poster.jpg`}
                ctaHref={`/services/${s.slug}`}
                ctaLabel="Explore Service"
              />
            ))}
          </div>
        </section>

        {/* ---------- CTA ---------- */}
        <Reveal from="up" delay={100} duration={900}>
          <CtaSection
            title="Not sure which track fits your goal?"
            description="Book a discovery session with our team. We'll help you choose between training, a software solution, or a combined roadmap across both."
            primaryAction={{
              href: "/contact",
              label: "Book a Discovery Call",
            }}
            secondaryAction={{
              href: "/developers",
              label: "View Developer Resources",
            }}
          />
        </Reveal>
      </Container>
    </main>
  );
}