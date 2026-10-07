import Link from "next/link";

import { RouteBreadcrumbs } from "@/components/navigation/route-breadcrumbs";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";

type ScaffoldRoutePageProps = {
  title: string;
  description?: string;
  highlights?: string[];
  relatedLinks?: Array<{ href: string; label: string }>;
};

const defaultDescription =
  "This route is now connected to the shared branded UI system. Detailed service and business content will be completed in subsequent phases.";

export function ScaffoldRoutePage({
  title,
  description = defaultDescription,
  highlights,
  relatedLinks,
}: ScaffoldRoutePageProps) {
  const defaultBenefits = [
    "Clear delivery scope aligned to business goals and timelines.",
    "Consistent quality standards across implementation and validation.",
    "Actionable outcomes that support growth, stability, and measurable ROI.",
  ];

  const deliveryProcess = [
    "Discovery and requirement alignment",
    "Solution planning and implementation",
    "Validation, quality review, and optimization",
    "Launch support with continuous improvements",
  ];

  return (
    <main className="section-y">
      <Container>
        <RouteBreadcrumbs />
        <SectionWrapper elevated>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="mt-3 max-w-3xl text-foreground/82">{description}</p>

          {highlights?.length ? (
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              <Card>
                <h2 className="text-lg font-semibold">Overview</h2>
                <p className="mt-2 text-sm text-foreground/82">{description}</p>
              </Card>
              <Card>
                <h2 className="text-lg font-semibold">What&apos;s Included</h2>
                <ul className="mt-2 space-y-1.5 text-sm text-foreground/84">
                  {highlights.map((highlight) => (
                    <li key={highlight}>
                      <span className="icon-accent">●</span> {highlight}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ) : null}

          <div className="mt-5">
            <h2 className="text-lg font-semibold">Benefits</h2>
            <div className="mt-2 grid gap-2.5 md:grid-cols-3">
              {defaultBenefits.map((benefit) => (
                <Card key={benefit} className="p-3.5">
                  <p className="text-sm text-foreground/84">{benefit}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <h2 className="text-lg font-semibold">Delivery Process</h2>
            <div className="mt-2 grid gap-2.5 md:grid-cols-2">
              {deliveryProcess.map((step, index) => (
                <div
                  key={step}
                  className="card-brand home-glass px-4 py-3"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-aqua)]">
                    Step {index + 1}
                  </p>
                  <p className="mt-1 text-sm text-foreground/86">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {relatedLinks?.length ? (
            <div className="mt-6">
              <h2 className="text-lg font-semibold">Related Paths</h2>
              <div className="mt-2 flex flex-wrap gap-2">
              {relatedLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                    className="btn-secondary px-3 py-1.5 text-xs font-medium"
                >
                  {item.label}
                </Link>
              ))}
              </div>
            </div>
          ) : null}

          <div className="mt-6 flex flex-wrap gap-2">
            <ButtonLink href="/contact">Start a Project</ButtonLink>
            <ButtonLink href="/developers" variant="secondary">
              Developer Resources
            </ButtonLink>
          </div>
        </SectionWrapper>
      </Container>
    </main>
  );
}
