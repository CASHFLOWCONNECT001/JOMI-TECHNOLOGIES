import type { Metadata } from "next";
import Link from "next/link";

import { RouteBreadcrumbs } from "@/components/navigation/route-breadcrumbs";
import { Container } from "@/components/ui/container";
import { CtaSection } from "@/components/ui/cta-section";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { stagger } from "@/lib/animation";
import { CLIENT_PROJECTS, type ClientProject } from "@/lib/client-work";
import { FLAGSHIP_PRODUCTS, type Product } from "@/lib/products";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Portfolio",
  description:
    "Explore JOMI TECHNOLOGIES INSTITUTE flagships — CashFlowHubs, NetOppsTrix, JOMI Mall, and SepiSwift — plus selected client work across ERP, CRM, POS, school systems, LMS platforms, and custom web and mobile applications.",
  path: "/portfolio",
  keywords: [
    "JOMI TECHNOLOGIES INSTITUTE portfolio",
    "flagship products",
    "CashFlowHubs",
    "NetOppsTrix",
    "JOMI Mall",
    "SepiSwift",
    "custom software portfolio",
    "ERP CRM POS systems",
    "school management system",
    "LMS platform",
    "client projects",
  ],
});

/* -------------------------------------------------------------------------- */
/*  STATS                                                                     */
/* -------------------------------------------------------------------------- */

const STATS = [
  {
    value: "60+",
    label: "Projects Delivered",
    hint: "Custom websites, CRMs, POS systems, and private platforms built for clients across multiple industries.",
    hue: 200,
  },
  {
    value: "4",
    label: "Flagship Products",
    hint: "In-house products we designed, built, and run — CashFlowHubs, NetOppsTrix, JOMI Mall, and SepiSwift.",
    hue: 150,
  },
  {
    value: "3",
    label: "Counties & Markets",
    hint: "Live deployments across Kenya and East Africa, including Machakos, Makueni, and Kitui.",
    hue: 45,
  },
  {
    value: "100+",
    label: "Features Shipped",
    hint: "Distinct modules, workflows, and integrations deployed across our product line and client systems.",
    hue: 300,
  },
];

/* -------------------------------------------------------------------------- */
/*  FLAGSHIP CARD                                                             */
/* -------------------------------------------------------------------------- */

function FlagshipCard({ product, index }: { product: Product; index: number }) {
  const hue = product.hue;
  const hue2 = (hue + 30) % 360;

  return (
    <Reveal from="up" delay={stagger(index, 90, 360)}>
      <article
        className="service-card relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border p-5"
        style={{ "--hue": hue } as React.CSSProperties}
      >
        <span
          aria-hidden
          className="service-ring pointer-events-none absolute inset-0 rounded-[var(--radius-card)]"
          style={{
            padding: "1px",
            background: `conic-gradient(from var(--angle, 0deg), transparent 0deg, hsl(${hue} 85% 60% / 0.9) 120deg, transparent 240deg)`,
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
        <span
          aria-hidden
          className="service-blob pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-[0.10] blur-3xl"
          style={{ background: `hsl(${hue} 85% 55%)` }}
        />

        <div className="relative flex items-start justify-between gap-3">
          <span
            className="service-icon flex h-12 w-12 items-center justify-center rounded-xl text-base font-bold text-[color:#001026]"
            style={{
              background: `linear-gradient(135deg, hsl(${hue} 78% 58%), hsl(${hue2} 78% 64%))`,
              boxShadow: `0 8px 22px -10px hsl(${hue} 80% 55% / 0.7)`,
            }}
          >
            {product.initials}
          </span>
          <span
            className="rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em]"
            style={{
              borderColor: `hsl(${hue} 70% 60% / 0.35)`,
              color: `hsl(${hue} 80% 70%)`,
            }}
          >
            {product.category}
          </span>
        </div>

        <div className="service-title relative mt-4">
          <h3 className="text-lg font-semibold leading-tight">
            {product.name}
          </h3>
          <p
            className="mt-1 text-xs font-medium"
            style={{ color: `hsl(${hue} 75% 62%)` }}
          >
            {product.tagline}
          </p>
        </div>

        <p className="relative mt-3 text-sm leading-relaxed text-foreground/82">
          {product.description}
        </p>

        <ul className="relative mt-4 space-y-1.5">
          {product.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-xs text-foreground/78"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: `hsl(${hue} 75% 58%)` }}
              />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="relative mt-5 flex flex-wrap gap-2 pt-4">
          {product.liveUrl ? (
            <a
              href={product.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand inline-flex items-center rounded-[var(--radius-cta)] px-3.5 py-2 text-xs font-semibold"
            >
              Visit Product ↗
            </a>
          ) : null}
          <Link
            href="/contact"
            className="inline-flex items-center rounded-[var(--radius-cta)] border border-foreground/20 px-3.5 py-2 text-xs font-medium text-foreground/82 transition hover:bg-foreground/5"
          >
            Request a Demo
          </Link>
        </div>
      </article>
    </Reveal>
  );
}

/* -------------------------------------------------------------------------- */
/*  CLIENT PROJECT CARD                                                       */
/* -------------------------------------------------------------------------- */

function ClientCard({
  project,
  index,
}: {
  project: ClientProject;
  index: number;
}) {
  const hue = project.hue;
  const hue2 = (hue + 30) % 360;

  return (
    <Reveal from="up" delay={stagger(index, 70, 420)}>
      <article
        className="service-card relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border p-5"
        style={{ "--hue": hue } as React.CSSProperties}
      >
        <span
          aria-hidden
          className="service-ring pointer-events-none absolute inset-0 rounded-[var(--radius-card)]"
          style={{
            padding: "1px",
            background: `conic-gradient(from var(--angle, 0deg), transparent 0deg, hsl(${hue} 85% 60% / 0.85) 120deg, transparent 240deg)`,
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
        <span
          aria-hidden
          className="service-blob pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-[0.09] blur-3xl"
          style={{ background: `hsl(${hue} 85% 55%)` }}
        />

        <div className="relative flex items-start justify-between gap-3">
          <span
            className="service-icon flex h-10 w-10 items-center justify-center rounded-xl text-[color:#001026]"
            style={{
              background: `linear-gradient(135deg, hsl(${hue} 78% 58%), hsl(${hue2} 78% 64%))`,
              boxShadow: `0 8px 22px -10px hsl(${hue} 80% 55% / 0.7)`,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M3 7h18v12H3z" />
              <path d="M8 7V5a4 4 0 018 0v2" />
            </svg>
          </span>

          {project.isPublic ? (
            <span
              className="rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em]"
              style={{
                borderColor: `hsl(${hue} 70% 60% / 0.4)`,
                color: `hsl(${hue} 80% 70%)`,
              }}
            >
              Public
            </span>
          ) : (
            <span className="rounded-full border border-foreground/20 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-foreground/55">
              Confidential
            </span>
          )}
        </div>

        <div className="service-title relative mt-4">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.16em]"
            style={{ color: `hsl(${hue} 75% 62%)` }}
          >
            {project.industry}
          </p>
          <h3 className="mt-1 text-base font-semibold leading-tight">
            {project.name}
          </h3>
        </div>

        <p className="relative mt-3 flex-1 text-sm leading-relaxed text-foreground/80">
          {project.description}
        </p>

        <div className="relative mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-foreground/15 bg-foreground/[0.03] px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-foreground/62"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="relative mt-5 flex flex-wrap gap-2 pt-3">
          {project.isPublic && project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-[var(--radius-cta)] border border-foreground/20 px-3 py-1.5 text-xs font-medium transition hover:bg-foreground/5"
            >
              Visit Site ↗
            </a>
          ) : (
            <Link
              href="/contact"
              className="inline-flex items-center rounded-[var(--radius-cta)] border border-foreground/20 px-3 py-1.5 text-xs font-medium transition hover:bg-foreground/5"
            >
              Details on Request
            </Link>
          )}
        </div>
      </article>
    </Reveal>
  );
}

/* -------------------------------------------------------------------------- */
/*  PAGE                                                                      */
/* -------------------------------------------------------------------------- */

export default function PortfolioPage() {
  return (
    <main className="section-y overflow-hidden">
      <Container>
        <RouteBreadcrumbs />

        {/* HERO */}
        <SectionWrapper elevated>
          <Reveal from="up" duration={700}>
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              Work Archive
            </p>
          </Reveal>

          <Reveal from="up" delay={80} duration={800}>
            <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
              Products we built. Client work we delivered.
            </h1>
          </Reveal>

          <Reveal from="up" delay={180} duration={900}>
            <p className="mt-4 max-w-3xl text-sm text-foreground/84 md:text-base">
              A sharper view of what JOMI TECHNOLOGIES INSTITUTE actually ships
              — our own flagship products running in production today, plus
              selected client engagements across ERP, CRM, POS, e-commerce,
              school systems, LMS platforms, and custom web and mobile
              applications.
            </p>
          </Reveal>

          <Reveal from="up" delay={280} duration={900}>
            <p className="mt-3 max-w-3xl text-sm text-foreground/78 md:text-base">
              Some client systems cannot be named or shown publicly — those
              are described here under confidentiality, and full details are
              available on request. Everything you see in the Flagships
              section was designed, engineered, and deployed by our team, and
              runs on live domains right now.
            </p>
          </Reveal>
        </SectionWrapper>

        {/* STATS */}
        <SectionWrapper className="mt-5" elevated>
          <Reveal from="up" duration={700}>
            <h2 className="text-xl font-semibold md:text-2xl">
              Archive at a glance
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-foreground/84 md:text-base">
              A snapshot of our product line, client work, and geographic
              reach — updated as new systems ship.
            </p>
          </Reveal>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} from="up" delay={stagger(i, 70, 280)}>
                <div
                  className="service-card relative overflow-hidden rounded-[var(--radius-card)] border p-4"
                  style={{ "--hue": stat.hue } as React.CSSProperties}
                >
                  <span
                    aria-hidden
                    className="service-blob pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-[0.10] blur-2xl"
                    style={{ background: `hsl(${stat.hue} 85% 55%)` }}
                  />
                  <p
                    className="relative text-2xl font-semibold md:text-3xl"
                    style={{ color: `hsl(${stat.hue} 75% 58%)` }}
                  >
                    {stat.value}
                  </p>
                  <p className="relative mt-1 text-sm font-medium text-foreground/85">
                    {stat.label}
                  </p>
                  <p className="relative mt-2 text-xs leading-relaxed text-foreground/62">
                    {stat.hint}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </SectionWrapper>

        {/* OUR FLAGSHIPS */}
        <SectionWrapper className="mt-5" elevated>
          <Reveal from="up" duration={700}>
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              Our Flagships
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Products we designed, built, and run.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-foreground/82 md:text-base">
              Beyond client work and training, JOMI TECHNOLOGIES INSTITUTE
              builds its own software. Each flagship below was engineered from
              scratch, deployed to production, and is available today — and
              every one is fully customizable for your organization.
            </p>
          </Reveal>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {FLAGSHIP_PRODUCTS.map((product, i) => (
              <FlagshipCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </SectionWrapper>

        {/* CLIENT WORK */}
        <SectionWrapper className="mt-5" elevated>
          <Reveal from="up" duration={700}>
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              Client Work
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Selected projects from a 60+ delivery archive.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-foreground/82 md:text-base">
              Custom websites, CRMs, POS systems, and private platforms built
              for clients across retail, education, hospitality, finance,
              health, logistics, and professional services. Some engagements
              are under confidentiality — those are described here without
              names, and full details are available on request.
            </p>
          </Reveal>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {CLIENT_PROJECTS.map((project, i) => (
              <ClientCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </SectionWrapper>

        {/* CTA */}
        <Reveal from="up" delay={100} duration={900}>
          <CtaSection
            title="Ready to run one of our flagships — or build something new?"
            description="Whether you want CashFlowHubs, NetOppsTrix, JOMI Mall, or SepiSwift customized for your organization, or a fully bespoke system designed from scratch, the next step is a short discovery call."
            primaryAction={{
              href: "/contact",
              label: "Book a Discovery Call",
            }}
            secondaryAction={{ href: "/services", label: "Review Services" }}
          />
        </Reveal>
      </Container>
    </main>
  );
}