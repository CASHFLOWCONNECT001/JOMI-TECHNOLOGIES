import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { RouteBreadcrumbs } from "@/components/navigation/route-breadcrumbs";
import { Container } from "@/components/ui/container";
import { CtaSection } from "@/components/ui/cta-section";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { VideoRow } from "@/components/ui/video-row";
import { getSoftwareService, SOFTWARE_SERVICES } from "@/lib/services";
import { createPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return SOFTWARE_SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getSoftwareService(slug);

  if (!service) {
    return createPageMetadata({
      title: "Service",
      description:
        "Explore software and systems services from JOMI TECHNOLOGIES INSTITUTE — ERP, CRM, e-commerce, POS, school systems, LMS platforms, and custom web and mobile applications.",
      path: `/services/${slug}`,
      keywords: [
        "JOMI TECHNOLOGIES INSTITUTE services",
        "software services",
        "ERP systems",
        "CRM systems",
        "custom software",
      ],
    });
  }

  return createPageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${slug}`,
    keywords: [
      service.title,
      service.short,
      "JOMI TECHNOLOGIES INSTITUTE",
      ...service.features.slice(0, 4),
    ],
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getSoftwareService(slug);
  if (!service) notFound();

  const hue = service.hue;

  const serviceIndex = SOFTWARE_SERVICES.findIndex(
    (s) => s.slug === service.slug
  );
  const direction: "right" | "left" =
    serviceIndex % 2 === 0 ? "right" : "left";
  const numberLabel = String(serviceIndex + 1).padStart(2, "0");

  return (
    <main className="section-y">
      <Container>
        {/* ---------- BREADCRUMBS ---------- */}
        <RouteBreadcrumbs
          crumbs={[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { href: `/services/${service.slug}`, label: service.title },
          ]}
        />

        {/* ---------- HERO — VIDEO ROW ---------- */}
        <SectionWrapper elevated className="mt-4">
          <VideoRow
            slug={service.slug}
            number={numberLabel}
            direction={direction}
            hue={hue}
            eyebrow="Software & Systems"
            title={service.title}
            description={service.longDescription}
            meta={service.short}
            summaryFeatures={service.summaryFeatures}
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="6" y="6" width="12" height="12" rx="2" />
                <path d="M9 9h6v6H9zM2 12h4M18 12h4M12 2v4M12 18v4" />
              </svg>
            }
            videoSrc={`/videos/${service.slug}.mp4`}
            videoPoster={`/images/${service.slug}-poster.jpg`}
            ctaHref="/contact"
            ctaLabel="Start a Conversation"
          />
        </SectionWrapper>

        {/* ---------- FEATURES + DELIVERABLES ---------- */}
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
                  What&apos;s included
                </h2>
              </div>
              <ul className="mt-5 space-y-3">
                {service.features.map((f) => (
                  <li
                    key={f}
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
                    <span className="font-medium">{f}</span>
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
                  What you receive
                </h2>
              </div>
              <ul className="mt-5 space-y-3">
                {service.deliverables.map((d) => (
                  <li
                    key={d}
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
                    <span className="font-medium">{d}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal from="up" delay={160} duration={700}>
            <div className="mt-10 flex items-center gap-3">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold"
                style={{
                  background: `hsl(${hue} 70% 55% / 0.15)`,
                  color: `hsl(${hue} 70% 45%)`,
                }}
              >
                03
              </span>
              <h2 className="text-xl font-semibold md:text-2xl">
                Ideal for
              </h2>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {service.idealFor.map((item) => (
                <span
                  key={item}
                  className="pill-brand"
                  style={{
                    borderColor: `hsl(${hue} 60% 55% / 0.35)`,
                    background: `hsl(${hue} 60% 55% / 0.08)`,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </SectionWrapper>

        {/* ---------- CTA ---------- */}
        <Reveal from="up" delay={100} duration={900}>
          <CtaSection
            title={`Interested in ${service.title}?`}
            description="Talk to our team about your project. We'll scope the work, walk you through timelines, and give you a clear path forward."
            primaryAction={{ href: "/contact", label: "Start a Conversation" }}
            secondaryAction={{ href: "/services", label: "Back to Services" }}
          />
        </Reveal>

        <Reveal from="up" delay={160} duration={700}>
          <div className="mt-6 text-center">
            <Link
              href="/services"
              className="text-sm font-medium text-[var(--color-brand-cyan)] hover:underline"
            >
              ← Back to all services
            </Link>
          </div>
        </Reveal>
      </Container>
    </main>
  );
}