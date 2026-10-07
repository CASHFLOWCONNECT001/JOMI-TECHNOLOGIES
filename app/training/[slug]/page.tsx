import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { RouteBreadcrumbs } from "@/components/navigation/route-breadcrumbs";
import { Container } from "@/components/ui/container";
import { CtaSection } from "@/components/ui/cta-section";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { VideoRow } from "@/components/ui/video-row";
import { createPageMetadata } from "@/lib/seo";
import { getTrainingUnit, TRAINING_UNITS } from "@/lib/training";

export function generateStaticParams() {
  return TRAINING_UNITS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const unit = getTrainingUnit(slug);

  if (!unit) {
    return createPageMetadata({
      title: "Course",
      description:
        "Explore ICT training programmes from JOMI TECHNOLOGIES INSTITUTE — computer basics, Microsoft Office, programming, databases, networking, graphic design, digital marketing, and self-employment skills.",
      path: `/training/${slug}`,
      keywords: [
        "ICT training",
        "computer course",
        "JOMI TECHNOLOGIES INSTITUTE training",
        "self-employment skills",
      ],
    });
  }

  return createPageMetadata({
    title: unit.title,
    description: unit.description,
    path: `/training/${slug}`,
    keywords: [
      unit.title,
      unit.short,
      "JOMI TECHNOLOGIES INSTITUTE training",
      ...unit.outcomes.slice(0, 4),
    ],
  });
}

export default async function TrainingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const unit = getTrainingUnit(slug);
  if (!unit) notFound();

  const hue = unit.hue;

  const unitIndex = TRAINING_UNITS.findIndex((t) => t.slug === unit.slug);
  const direction: "right" | "left" = unitIndex % 2 === 0 ? "right" : "left";
  const numberLabel = String(unitIndex + 1).padStart(2, "0");

  return (
    <main className="section-y">
      <Container>
        {/* ---------- BREADCRUMBS ---------- */}
        <RouteBreadcrumbs
          crumbs={[
            { href: "/", label: "Home" },
            { href: "/training", label: "Training" },
            { href: `/training/${unit.slug}`, label: unit.title },
          ]}
        />

        {/* ---------- HERO — VIDEO ROW ---------- */}
        <SectionWrapper elevated className="mt-4">
          <VideoRow
            slug={unit.slug}
            number={numberLabel}
            direction={direction}
            hue={hue}
            eyebrow={unit.category}
            title={unit.title}
            description={unit.longDescription}
            meta={`${unit.duration} · ${unit.level}`}
            summaryFeatures={unit.summaryFeatures}
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6" />
                <path d="M2 10l10-5 10 5-10 5L2 10z" />
                <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
              </svg>
            }
            videoSrc={`/videos/${unit.slug}.mp4`}
            videoPoster={`/images/${unit.slug}-poster.jpg`}
            ctaHref="/contact"
            ctaLabel="Enroll Now"
          />
        </SectionWrapper>

        {/* ---------- OUTCOMES + SELF-EMPLOYMENT ---------- */}
        <SectionWrapper className="mt-5" elevated>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal from="up" duration={700}>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold"
                  style={{
                    background: `hsl(${hue} 70% 55% / 0.15)`,
                    color: `hsl(${hue} 70% 45%)`,
                  }}
                >
                  01
                </span>
                <h2 className="text-xl font-semibold md:text-2xl">
                  What you will learn
                </h2>
              </div>
              <ul className="mt-5 space-y-3">
                {unit.outcomes.map((o) => (
                  <li
                    key={o}
                    className="flex items-start gap-2.5 text-sm text-foreground/84 md:text-[15px]"
                  >
                    <span
                      className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
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
                    <span className="font-medium">{o}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal from="up" delay={80} duration={700}>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold"
                  style={{
                    background: `hsl(${hue} 70% 55% / 0.15)`,
                    color: `hsl(${hue} 70% 45%)`,
                  }}
                >
                  02
                </span>
                <h2 className="text-xl font-semibold md:text-2xl">
                  Self-employment paths
                </h2>
              </div>
              <p className="mt-2 text-sm text-foreground/75">
                After completing this unit, you can earn independently through:
              </p>
              <ul className="mt-5 space-y-3">
                {unit.selfEmployment.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-2.5 text-sm text-foreground/84 md:text-[15px]"
                  >
                    <span
                      className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
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
                    <span className="font-medium">{s}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </SectionWrapper>

        {/* ---------- CTA ---------- */}
        <Reveal from="up" delay={100} duration={900}>
          <CtaSection
            title={`Enrol in ${unit.title}`}
            description="Talk to our admissions team. We'll help you confirm schedules, fees, and get you started on the right course."
            primaryAction={{ href: "/contact", label: "Enroll Now" }}
            secondaryAction={{ href: "/training", label: "Back to Training" }}
          />
        </Reveal>

        <Reveal from="up" delay={160} duration={700}>
          <div className="mt-6 text-center">
            <Link
              href="/training"
              className="text-sm font-medium text-[var(--color-brand-cyan)] hover:underline"
            >
              ← Back to all training
            </Link>
          </div>
        </Reveal>
      </Container>
    </main>
  );
}