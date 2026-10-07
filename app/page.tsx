import type { Metadata } from "next";

import { BackgroundVideo } from "@/components/ui/background-video";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { CtaSection } from "@/components/ui/cta-section";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { createPageMetadata } from "@/lib/seo";
import { AfricaBackground } from "@/components/ui/africa-background";
import { getPublicCompanyStats } from "@/lib/api";

export const metadata: Metadata = createPageMetadata({
  title: "JOMI TECHNOLOGIES INSTITUTE — ICT Training & Software Systems",
  description:
    "JOMI TECHNOLOGIES INSTITUTE is a computer and digital skills training institution and software systems provider. We offer training in computer basics, computer packages, Microsoft Office applications, typing, internet and email use, digital literacy and essential ICT skills — plus ERP, CRM, e-commerce websites, POS, school management systems, LMS platforms, and custom software for businesses.",
  path: "/",
  keywords: [
    "JOMI TECHNOLOGIES INSTITUTE",
    "ICT training institute",
    "computer training",
    "computer packages",
    "Microsoft Office training",
    "typing and data entry",
    "internet and email",
    "digital literacy",
    "essential ICT skills",
    "ERP systems",
    "CRM systems",
    "e-commerce websites",
    "online stores",
    "POS and inventory",
    "school management system",
    "learning management system",
    "custom web and mobile apps",
    "hosting and IT support",
    "digital transformation",
    "software and systems",
  ],
});

/* -------------------------------------------------------------------------- */
/*  DATA                                                                      */
/* -------------------------------------------------------------------------- */

const trainingPrograms = [
  {
    title: "Computer Basics & Packages",
    description:
      "Foundational computer literacy covering hardware, software, files, folders, and the essential computer packages every learner needs.",
  },
  {
    title: "Microsoft Office Suite",
    description:
      "Hands-on training in Word, Excel, PowerPoint, Access, and Publisher — from beginner to advanced, practical and workplace-ready.",
  },
  {
    title: "Typing & Data Entry",
    description:
      "Speed and accuracy training in typing, data entry, and document preparation for employment, business, and office environments.",
  },
  {
    title: "Internet, Email & Digital Literacy",
    description:
      "Safe and effective use of the internet, email, online forms, cloud tools, and everyday digital services.",
  },
  {
    title: "Advanced ICT Skills",
    description:
      "Progressive training in productivity tools, digital collaboration, cybersecurity awareness, and other essential ICT skills.",
  },
];

const softwareSolutions = [
  {
    title: "ERP Systems",
    description:
      "Enterprise Resource Planning systems that unify finance, inventory, HR, procurement, and operations into one platform.",
  },
  {
    title: "CRM Systems",
    description:
      "Customer Relationship Management platforms for leads, sales pipelines, support, and long-term customer retention.",
  },
  {
    title: "E-commerce Websites",
    description:
      "Online stores and marketplaces with product catalogs, cart, checkout, payment gateways, and order management.",
  },
  {
    title: "POS & Inventory",
    description:
      "Point of Sale and inventory management systems for retail, hospitality, and multi-branch operations.",
  },
  {
    title: "School & LMS Platforms",
    description:
      "School Management Systems, Student Information Systems, and Learning Management Systems for modern institutions.",
  },
  {
    title: "Custom Web & Mobile Apps",
    description:
      "Business websites, web portals, and Android, iOS, and cross-platform mobile applications built to scale.",
  },
  {
    title: "Hosting & IT Support",
    description:
      "Domains, hosting, SSL, email, cloud storage, backups, networks, cybersecurity, and ongoing IT support.",
  },
];

const softwareProcess = [
  {
    title: "Discover",
    description: "Clarify goals, audience, constraints, and measurable outcomes.",
  },
  {
    title: "Architect",
    description: "Define solution design, delivery phases, and technical scope.",
  },
  {
    title: "Build",
    description:
      "Ship iteratively with quality checks, visibility, and accountable milestones.",
  },
  {
    title: "Scale",
    description:
      "Optimize performance, growth loops, and operational continuity.",
  },
];

const trainingProcess = [
  {
    title: "Enroll",
    description:
      "Choose a program, confirm your schedule, and register with our admissions team.",
  },
  {
    title: "Learn",
    description:
      "Attend structured, hands-on sessions guided by experienced instructors.",
  },
  {
    title: "Practice",
    description:
      "Apply skills through real exercises, projects, and workplace scenarios.",
  },
  {
    title: "Certify",
    description:
      "Complete assessments and receive certification ready for work or business.",
  },
];

const whyChooseUs = [
  {
    title: "Practical, hands-on learning",
    description:
      "Every course is built around doing — not just theory — so learners leave with skills they can use immediately.",
  },
  {
    title: "Industry-relevant curriculum",
    description:
      "Training aligned to what employers, businesses, and modern institutions actually need.",
  },
  {
    title: "Enterprise-grade systems",
    description:
      "Software built with the same rigor we teach — reliable, secure, and scalable.",
  },
  {
    title: "Local support, global standards",
    description:
      "Accessible training and support for students, professionals, entrepreneurs, businesses, and organizations.",
  },
];

const audiences = [
  "Students",
  "Professionals",
  "Entrepreneurs",
  "Businesses",
  "Organizations",
  "Individuals building digital capability",
];

/* -------------------------------------------------------------------------- */
/*  PAGE                                                                      */
/* -------------------------------------------------------------------------- */

export default async function Home() {
  const stats = await getPublicCompanyStats();

  return (
    <AfricaBackground>
      <Container className="space-y-5 !pb-0">
        {/* ---------------------------------------------------------------- */}
        {/* HERO WITH FULLY VISIBLE VIDEO                                     */}
        {/* ---------------------------------------------------------------- */}
        <SectionWrapper className="home-glass relative overflow-hidden">
          <BackgroundVideo
            src="/videos/home-hero.mp4"
            poster="/images/home-hero-poster.jpg"
            overlay={0}
          />

          <div className="relative z-10">
            <div className="grid gap-5 lg:grid-cols-[1.35fr_0.9fr] lg:items-start">
              <div>
                <p
                  className="inline-flex rounded-full border border-white/40 bg-black/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm"
                  style={{ textShadow: "0 1px 3px rgba(0,0,0,0.7)" }}
                >
                  Training • Software • Systems
                </p>

                <h1
                  className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-5xl"
                  style={{ textShadow: "0 2px 8px rgba(0,0,0,0.75)" }}
                >
                  Practical ICT training and modern software systems — for
                  learners, businesses, and institutions.
                </h1>

                {/* Description in a white card */}
                <div className="mt-4 max-w-3xl rounded-2xl border border-white/30 bg-white p-5 shadow-xl">
                  <p className="text-sm text-[#06153A] md:text-base">
                    <strong className="font-semibold">
                      JOMI TECHNOLOGIES INSTITUTE
                    </strong>{" "}
                    is a computer and digital skills training institution and
                    software systems provider. We equip learners with essential
                    technology skills — and build the software that powers
                    modern organizations: ERP, CRM, e-commerce websites, POS,
                    school management systems, LMS platforms, and custom web
                    and mobile applications.
                  </p>
                </div>

                {/* Bright buttons — matching shape, different colours */}
                <div className="mt-5 flex flex-wrap gap-2">
                  <ButtonLink
                    href="/training"
                    className="!rounded-[var(--radius-cta)] !border !border-[#7BEA24] !bg-[#7BEA24] !px-4 !py-2 !text-sm !font-bold !text-[#06153A] !no-underline shadow-lg transition hover:!border-[#D8F51A] hover:!bg-[#D8F51A]"
                  >
                    Explore Training
                  </ButtonLink>
                  <ButtonLink
                    href="/services"
                    className="!rounded-[var(--radius-cta)] !border !border-[#2ED8F3] !bg-[#2ED8F3] !px-4 !py-2 !text-sm !font-bold !text-[#06153A] !no-underline shadow-lg transition hover:!border-[#6CEEF5] hover:!bg-[#6CEEF5]"
                  >
                    See Software Solutions
                  </ButtonLink>
                  <ButtonLink
                    href="/contact"
                    className="!rounded-[var(--radius-cta)] !border !border-[#D8F51A] !bg-[#D8F51A] !px-4 !py-2 !text-sm !font-bold !text-[#06153A] !no-underline shadow-lg transition hover:!border-[#7BEA24] hover:!bg-[#7BEA24]"
                  >
                    Talk to Us
                  </ButtonLink>
                </div>
              </div>

              {/* 3 hero cards — SOLID WHITE with dark text */}
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <Card className="border border-white/30 border-l-4 border-l-[var(--color-brand-blue)] !bg-white shadow-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-blue)]">
                    Training Institute
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[#06153A]">
                    Computer & Digital Skills
                  </p>
                  <p className="mt-2 text-sm text-[#06153A]/75">
                    Computer basics, Microsoft Office, typing, internet and
                    email, digital literacy, and essential ICT skills.
                  </p>
                </Card>

                <Card className="border border-white/30 border-l-4 border-l-[var(--color-brand-blue)] !bg-white shadow-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-blue)]">
                    Software & Systems
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[#06153A]">
                    ERP • CRM • E-commerce
                  </p>
                  <p className="mt-2 text-sm text-[#06153A]/75">
                    POS, school and LMS platforms, custom web and mobile apps,
                    hosting and IT support.
                  </p>
                </Card>

                <Card className="border border-white/30 border-l-4 border-l-[var(--color-brand-blue)] !bg-white shadow-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-blue)]">
                    For Everyone
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[#06153A]">
                    Learners to Enterprises
                  </p>
                  <p className="mt-2 text-sm text-[#06153A]/75">
                    Students, professionals, entrepreneurs, businesses, and
                    organizations building digital capability.
                  </p>
                </Card>
              </div>
            </div>

            {/* 3 stat tiles — SOLID WHITE with dark text */}
            <div className="mt-5 border-t border-white/30 pt-4">
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-white/30 bg-white p-3 shadow-xl animate-fade-in-up">
                  <p className="text-2xl font-bold text-[var(--color-brand-blue)]">
                    {stats.projectsDelivered}
                  </p>
                  <p className="mt-1 text-sm text-[#06153A]/80">
                    {stats.projectsDescription}
                  </p>
                </div>
                <div
                  className="rounded-xl border border-white/30 bg-white p-3 shadow-xl animate-fade-in-up"
                  style={{ animationDelay: "50ms" }}
                >
                  <p className="text-2xl font-bold text-[var(--color-brand-blue)]">
                    {stats.serviceAreasCount}
                  </p>
                  <p className="mt-1 text-sm text-[#06153A]/80">
                    {stats.serviceAreasDescription}
                  </p>
                </div>
                <div
                  className="rounded-xl border border-white/30 bg-white p-3 shadow-xl animate-fade-in-up"
                  style={{ animationDelay: "100ms" }}
                >
                  <p className="text-2xl font-bold text-[var(--color-brand-blue)]">
                    {stats.approachLabel}
                  </p>
                  <p className="mt-1 text-sm text-[#06153A]/80">
                    {stats.approachDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* ---------------------------------------------------------------- */}
        {/* TWO ARMS — TRAINING + SOFTWARE                                    */}
        {/* ---------------------------------------------------------------- */}
        <SectionWrapper className="home-glass">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-blue)] dark:text-[var(--color-brand-aqua)]">
            Two arms, one institute
          </p>
          <h2 className="mt-2 text-xl font-semibold md:text-2xl">
            Training that builds people. Software that builds businesses.
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-foreground/84 md:text-base">
            JOMI TECHNOLOGIES INSTITUTE operates as both a training institution
            and a software and systems provider — delivering practical,
            accessible, and relevant technology education alongside
            enterprise-grade digital solutions.
          </p>

          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            <Card className="home-glass">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/70">
                Training Institute
              </p>
              <h3 className="mt-2 text-lg font-semibold md:text-xl">
                Computer & Digital Skills Training
              </h3>
              <p className="mt-2 text-sm text-foreground/82">
                Structured, hands-on training for students, professionals,
                entrepreneurs, and individuals seeking to improve their digital
                capabilities.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/84">
                {trainingPrograms.map((p) => (
                  <li key={p.title} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-brand-blue)] dark:bg-[var(--color-brand-aqua)]" />
                    <span>
                      <strong className="font-semibold">{p.title}</strong> —{" "}
                      {p.description}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <ButtonLink href="/training" variant="secondary">
                  View Training Programs
                </ButtonLink>
              </div>
            </Card>

            <Card className="home-glass">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/70">
                Software & Systems
              </p>
              <h3 className="mt-2 text-lg font-semibold md:text-xl">
                Software, Systems & Digital Solutions
              </h3>
              <p className="mt-2 text-sm text-foreground/82">
                Custom-built systems and websites for businesses, schools,
                retail, hospitality, and organizations of every size.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/84">
                {softwareSolutions.map((s) => (
                  <li key={s.title} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-brand-blue)] dark:bg-[var(--color-brand-aqua)]" />
                    <span>
                      <strong className="font-semibold">{s.title}</strong> —{" "}
                      {s.description}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <ButtonLink href="/services" variant="secondary">
                  View Software Solutions
                </ButtonLink>
              </div>
            </Card>
          </div>
        </SectionWrapper>

        {/* ---------------------------------------------------------------- */}
        {/* WHY CHOOSE US                                                     */}
        {/* ---------------------------------------------------------------- */}
        <SectionWrapper className="home-glass">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-blue)] dark:text-[var(--color-brand-aqua)]">
            Why choose us
          </p>
          <h2 className="mt-2 text-xl font-semibold md:text-2xl">
            Practical. Accessible. Relevant.
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-foreground/84 md:text-base">
            We focus on real outcomes — building confidence, competence, and
            digital readiness in an increasingly technology-driven world.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {whyChooseUs.map((item) => (
              <Card key={item.title} className="home-glass">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-foreground/82">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </SectionWrapper>

        {/* ---------------------------------------------------------------- */}
        {/* PROCESS — SOFTWARE + TRAINING                                     */}
        {/* ---------------------------------------------------------------- */}
        <SectionWrapper className="home-glass">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-blue)] dark:text-[var(--color-brand-aqua)]">
            How we work
          </p>
          <h2 className="mt-2 text-xl font-semibold md:text-2xl">
            Two tracks. Same standard.
          </h2>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <div>
              <h3 className="text-base font-semibold">
                Software delivery process
              </h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {softwareProcess.map((step, index) => (
                  <Card key={step.title} className="home-glass">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground/70">
                      Step {index + 1}
                    </p>
                    <h4 className="mt-2 text-base font-semibold">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-sm text-foreground/82">
                      {step.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold">Training journey</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {trainingProcess.map((step, index) => (
                  <Card key={step.title} className="home-glass">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground/70">
                      Step {index + 1}
                    </p>
                    <h4 className="mt-2 text-base font-semibold">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-sm text-foreground/82">
                      {step.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* ---------------------------------------------------------------- */}
        {/* AUDIENCE                                                          */}
        {/* ---------------------------------------------------------------- */}
        <SectionWrapper className="home-glass">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-blue)] dark:text-[var(--color-brand-aqua)]">
            Who we serve
          </p>
          <h2 className="mt-2 text-xl font-semibold md:text-2xl">
            Built for learners and organizations alike.
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-foreground/84 md:text-base">
            From individuals taking their first steps in computing, to
            businesses deploying ERP, CRM, and e-commerce systems — JOMI
            TECHNOLOGIES INSTITUTE supports every stage of the digital journey.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {audiences.map((audience) => (
              <span
                key={audience}
                className="rounded-full border border-foreground/20 px-3 py-1 text-xs font-medium text-foreground/80"
              >
                {audience}
              </span>
            ))}
          </div>
        </SectionWrapper>

        {/* ---------------------------------------------------------------- */}
        {/* FINAL CTA — SPLIT INTENT                                          */}
        {/* ---------------------------------------------------------------- */}
        <SectionWrapper className="home-glass">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card className="home-glass border-l-4 border-l-[var(--color-brand-blue)] dark:border-l-[var(--color-brand-aqua)]">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/70">
                I want to learn
              </p>
              <h3 className="mt-2 text-lg font-semibold md:text-xl">
                Enroll in a training program
              </h3>
              <p className="mt-2 text-sm text-foreground/82">
                Start with computer basics, Microsoft Office, typing, internet
                and email, digital literacy, or advanced ICT skills.
              </p>
              <div className="mt-4">
                <ButtonLink href="/training/contact">Enroll Now</ButtonLink>
              </div>
            </Card>

            <Card className="home-glass border-l-4 border-l-[var(--color-brand-blue)] dark:border-l-[var(--color-brand-aqua)]">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/70">
                I need software
              </p>
              <h3 className="mt-2 text-lg font-semibold md:text-xl">
                Request a software solution
              </h3>
              <p className="mt-2 text-sm text-foreground/82">
                Tell us about your business and we will recommend the right
                ERP, CRM, e-commerce, POS, school system, or custom platform.
              </p>
              <div className="mt-4">
                <ButtonLink href="/contact" variant="secondary">
                  Request a Quote
                </ButtonLink>
              </div>
            </Card>
          </div>
        </SectionWrapper>

        <CtaSection
          className="home-glass"
          title="Ready to build skills, systems, or both?"
          description="Talk to JOMI TECHNOLOGIES INSTITUTE about training, software, or a combined roadmap across web, mobile, ERP, CRM, and scalable delivery execution."
          primaryAction={{ href: "/services", label: "Explore Services" }}
          secondaryAction={{ href: "/contact", label: "Start a Conversation" }}
        />
      </Container>
    </AfricaBackground>
  );
}