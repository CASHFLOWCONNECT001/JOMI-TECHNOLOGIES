import type { Metadata } from "next";
import Link from "next/link";

import { BrandLogo } from "@/components/branding/brand-logo";
import { RouteBreadcrumbs } from "@/components/navigation/route-breadcrumbs";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { stagger } from "@/lib/animation";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "JOMI TECHNOLOGIES INSTITUTE is a computer and digital skills training institution and software systems provider. We equip learners with practical ICT skills and build enterprise-grade software — ERP, CRM, e-commerce, POS, school systems, LMS, and custom web and mobile apps.",
  path: "/about",
  keywords: [
    "about JOMI TECHNOLOGIES INSTITUTE",
    "ICT training institution",
    "software and systems provider",
    "computer training",
    "digital literacy",
    "ERP development",
    "CRM development",
    "e-commerce development",
    "custom software",
    "digital transformation Africa",
  ],
});

const CORE_VALUES = [
  {
    title: "Trust",
    description:
      "Honest communication, clear commitments, and consistent delivery.",
    hue: 210,
  },
  {
    title: "Innovation",
    description:
      "Modern tools and methods, applied with purpose — never for show.",
    hue: 195,
  },
  {
    title: "Excellence",
    description:
      "We hold a high bar for every course, system, and interaction.",
    hue: 175,
  },
  {
    title: "Customer-centricity",
    description:
      "Learners and clients come first. Their goals shape our work.",
    hue: 155,
  },
  {
    title: "Scalability",
    description:
      "Everything we build is designed to grow with the people who use it.",
    hue: 135,
  },
  {
    title: "Accountability",
    description:
      "We own our outcomes — good or bad — and correct course quickly.",
    hue: 90,
  },
  {
    title: "Collaboration",
    description:
      "We work as one team: instructors, engineers, clients, and learners.",
    hue: 45,
  },
  {
    title: "Confidentiality",
    description:
      "Your data, your business, your plans — handled with discretion.",
    hue: 25,
  },
  {
    title: "Professionalism",
    description:
      "Timely, respectful, and competent in every engagement.",
    hue: 0,
  },
  {
    title: "Ownership",
    description:
      "We take responsibility end-to-end, not just for our slice.",
    hue: 340,
  },
  {
    title: "Security",
    description:
      "Systems and data protected at every layer, by design.",
    hue: 300,
  },
  {
    title: "Compliance",
    description:
      "We work within the rules, standards, and expectations of the industry.",
    hue: 270,
  },
  {
    title: "Zero Tolerance for Mediocrity",
    description:
      "If it isn't right, it isn't finished. Simple as that.",
    hue: 240,
  },
];

const PILLARS = [
  {
    title: "Training Institute",
    description:
      "Computer basics, computer packages, Microsoft Office, typing, internet and email, digital literacy, and advanced ICT skills — delivered through structured, hands-on learning.",
    hue: 210,
  },
  {
    title: "Software & Systems",
    description:
      "ERP, CRM, e-commerce websites, POS and inventory, school and LMS platforms, custom web and mobile apps, hosting, cloud, IT support, and cybersecurity.",
    hue: 175,
  },
  {
    title: "Support & Partnership",
    description:
      "Ongoing IT support, hosting, maintenance, and advisory for the institutions and businesses we serve — long after the first delivery.",
    hue: 45,
  },
];

export default function Page() {
  return (
    <main className="section-y">
      <Container>
        <RouteBreadcrumbs />

        {/* HERO */}
        <SectionWrapper elevated>
          <div className="relative">
            <Reveal from="up" duration={700}>
              <p className="eyebrow">
                <span className="eyebrow-dot" />
                About Us
              </p>
            </Reveal>

            <div className="mt-2 flex flex-wrap items-start justify-between gap-4">
              <Reveal from="up" delay={80} duration={800}>
                <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
                  Training that builds people. Software that builds businesses.
                </h1>
              </Reveal>

              <div className="hidden md:block">
                <Reveal from="scale" delay={150}>
                  <BrandLogo className="h-24 w-24 md:h-28 md:w-28" circular />
                </Reveal>
              </div>
            </div>

            <Reveal from="up" delay={200} duration={900}>
              <p className="mt-4 max-w-3xl text-sm text-foreground/84 md:text-base">
                <strong>JOMI TECHNOLOGIES INSTITUTE</strong> is a computer and
                digital skills training institution and a software and systems
                provider, dedicated to equipping learners and businesses with
                practical knowledge and essential technology skills for
                education, employment, business, and everyday life.
              </p>
            </Reveal>

            <Reveal from="up" delay={280} duration={900}>
              <p className="mt-3 max-w-3xl text-sm text-foreground/82 md:text-base">
                We provide training in computer basics, computer packages,
                Microsoft Office applications, typing, internet and email use,
                digital literacy, and other essential ICT skills — alongside
                software and systems such as ERP, CRM, e-commerce websites, POS,
                school and LMS platforms, and custom web and mobile apps.
              </p>
            </Reveal>

            <div className="mt-4 flex justify-center md:hidden">
              <Reveal from="scale" delay={100}>
                <BrandLogo className="h-24 w-24" circular />
              </Reveal>
            </div>
          </div>
        </SectionWrapper>

        {/* MISSION + VISION */}
        <SectionWrapper className="mt-5" elevated>
          <Reveal from="up" duration={700}>
            <h2 className="text-xl font-semibold md:text-2xl">
              Mission & Vision
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-foreground/84 md:text-base">
              Two commitments that guide every course we teach and every system
              we build.
            </p>
          </Reveal>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Reveal from="up" delay={100}>
              <div className="service-card h-full rounded-[var(--radius-card)] border p-5" style={{ "--hue": 210 } as React.CSSProperties}>
                <span
                  aria-hidden
                  className="service-blob pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-[0.08] blur-2xl"
                  style={{ background: "hsl(210 85% 55%)" }}
                />
                <h3 className="service-title relative text-base font-semibold">
                  Our Mission
                </h3>
                <p className="relative mt-2 text-sm text-foreground/82">
                  To empower learners, professionals, entrepreneurs, and
                  organizations by delivering practical, accessible, and
                  relevant technology education — and enterprise-grade software
                  foundations that accelerate digital growth.
                </p>
              </div>
            </Reveal>

            <Reveal from="up" delay={180}>
              <div className="service-card h-full rounded-[var(--radius-card)] border p-5" style={{ "--hue": 175 } as React.CSSProperties}>
                <span
                  aria-hidden
                  className="service-blob pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-[0.08] blur-2xl"
                  style={{ background: "hsl(175 85% 55%)" }}
                />
                <h3 className="service-title relative text-base font-semibold">
                  Our Vision
                </h3>
                <p className="relative mt-2 text-sm text-foreground/82">
                  To become a leading training institute and software and
                  systems company in Africa — building confidence, competence,
                  and digital readiness in an increasingly technology-driven
                  world, across multiple industries.
                </p>
              </div>
            </Reveal>
          </div>
        </SectionWrapper>

        {/* TWO ARMS */}
        <SectionWrapper className="mt-5" elevated>
          <Reveal from="up" duration={700}>
            <h2 className="text-xl font-semibold md:text-2xl">
              Two arms, one institute
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-foreground/84 md:text-base">
              JOMI TECHNOLOGIES INSTITUTE operates across two complementary
              tracks — and supports both long after the first delivery.
            </p>
          </Reveal>

          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} from="up" delay={stagger(i, 80, 320)}>
                <div
                  className="service-card h-full rounded-[var(--radius-card)] border p-5"
                  style={{ "--hue": p.hue } as React.CSSProperties}
                >
                  <span
                    aria-hidden
                    className="service-ring pointer-events-none absolute inset-0 rounded-[var(--radius-card)]"
                    style={{
                      padding: "1px",
                      background: `conic-gradient(from var(--angle, 0deg), transparent 0deg, hsl(${p.hue} 85% 60% / 0.9) 120deg, transparent 240deg)`,
                      WebkitMask:
                        "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />
                  <span
                    aria-hidden
                    className="service-blob pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-[0.08] blur-2xl"
                    style={{ background: `hsl(${p.hue} 85% 55%)` }}
                  />
                  <span
                    className="service-icon relative flex h-10 w-10 items-center justify-center rounded-xl text-[color:#001026]"
                    style={{
                      background: `linear-gradient(135deg, hsl(${p.hue} 78% 58%), hsl(${
                        (p.hue + 30) % 360
                      } 78% 64%))`,
                      boxShadow: `0 8px 22px -10px hsl(${p.hue} 80% 55% / 0.7)`,
                    }}
                  >
                    <span className="h-5 w-5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 3v18M3 12h18" />
                      </svg>
                    </span>
                  </span>
                  <h3 className="service-title relative mt-3 text-base font-semibold">
                    {p.title}
                  </h3>
                  <p className="relative mt-2 text-sm text-foreground/82">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </SectionWrapper>

        {/* TRUST + WHY */}
        <SectionWrapper className="mt-5" elevated>
          <Reveal from="up" duration={700}>
            <h2 className="text-xl font-semibold md:text-2xl">
              Trust and transparency
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-foreground/84 md:text-base">
              We believe in radical visibility. From course progress to code
              quality, deployment timelines, and ongoing support, we maintain a
              transparent partnership with every learner and every client —
              ensuring alignment at every stage.
            </p>
          </Reveal>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Practical, hands-on learning",
                description:
                  "Every course is built around doing — so learners leave with skills they can use immediately.",
                hue: 210,
              },
              {
                title: "Industry-relevant curriculum",
                description:
                  "Training and systems aligned to what employers, businesses, and modern institutions actually need.",
                hue: 90,
              },
              {
                title: "Local support, global standards",
                description:
                  "Accessible training and support built to the standards expected of enterprise systems.",
                hue: 25,
              },
            ].map((item, i) => (
              <Reveal key={item.title} from="up" delay={stagger(i, 80, 240)}>
                <div
                  className="service-card h-full rounded-[var(--radius-card)] border p-5"
                  style={{ "--hue": item.hue } as React.CSSProperties}
                >
                  <span
                    aria-hidden
                    className="service-blob pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-[0.08] blur-2xl"
                    style={{ background: `hsl(${item.hue} 85% 55%)` }}
                  />
                  <h3 className="service-title relative text-base font-semibold">
                    {item.title}
                  </h3>
                  <p className="relative mt-2 text-sm text-foreground/82">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </SectionWrapper>

        {/* CORE VALUES */}
        <SectionWrapper className="mt-5" elevated>
          <Reveal from="up" duration={700}>
            <h2 className="text-xl font-semibold md:text-2xl">Core Values</h2>
            <p className="mt-2 max-w-3xl text-sm text-foreground/82 md:text-base">
              These principles guide every decision we make — from course
              design and architectural choices to how we treat every learner,
              client, and partner.
            </p>
          </Reveal>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_VALUES.map((value, i) => (
              <Reveal
                key={value.title}
                from="up"
                delay={stagger(i, 45, 480)}
              >
                <div
                  className="service-card rounded-[var(--radius-card)] border p-4"
                  style={{ "--hue": value.hue } as React.CSSProperties}
                >
                  <span
                    aria-hidden
                    className="service-blob pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-[0.08] blur-2xl"
                    style={{ background: `hsl(${value.hue} 85% 55%)` }}
                  />
                  <p
                    className="service-title relative text-sm font-semibold"
                    style={{ color: `hsl(${value.hue} 75% 55%)` }}
                  >
                    {value.title}
                  </p>
                  <p className="relative mt-1.5 text-xs text-foreground/80">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </SectionWrapper>

        {/* CTA */}
        <SectionWrapper className="mt-5" elevated>
          <Reveal from="up" duration={800}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="max-w-2xl">
                <h2 className="text-lg font-semibold md:text-xl">
                  Want to work with us, or learn with us?
                </h2>
                <p className="mt-2 text-sm text-foreground/82">
                  Whether you are enrolling in a course or commissioning a
                  system, the next step is the same — a short conversation.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/training"
                  className="btn-brand inline-flex items-center rounded-[var(--radius-cta)] px-4 py-2 text-sm font-semibold"
                >
                  Explore Training
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary inline-flex items-center rounded-[var(--radius-cta)] border border-foreground/20 px-4 py-2 text-sm font-medium"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </Reveal>
        </SectionWrapper>
      </Container>
    </main>
  );
}