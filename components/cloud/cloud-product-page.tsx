import Image from "next/image";

import { RouteBreadcrumbs } from "@/components/navigation/route-breadcrumbs";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";

type CloudProductPageProps = {
  name: string;
  heroText: string;
  description: string;
  overview: string;
  liveUrl: string;
  liveLabel?: string;
};

export function CloudProductPage({
  name,
  heroText,
  description,
  overview,
  liveUrl,
  liveLabel = "Open live site",
}: CloudProductPageProps) {
  return (
    <main className="section-y">
      <Container>
        <RouteBreadcrumbs />
        <SectionWrapper elevated>
          <div className="grid gap-5 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-aqua)]">
                JOMI TECHNOLOGIES INSTITUTE Cloud
              </p>
              <h1 className="mt-2 text-3xl font-bold md:text-4xl">{name}</h1>
              <p className="mt-3 text-lg text-foreground/90">{heroText}</p>
              <p className="mt-3 max-w-2xl text-sm text-foreground/82">{description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <ButtonLink href={liveUrl} target="_blank" rel="noopener noreferrer">
                  {liveLabel}
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Request Demo
                </ButtonLink>
                <ButtonLink href="/JOMI-TECHNOLOGIES-cloud" variant="secondary">
                  Explore Cloud Suite
                </ButtonLink>
              </div>
            </div>
            <Card className="p-4">
              <div className="relative h-56 overflow-hidden rounded-xl border border-[var(--color-brand-blue)]/20 bg-[var(--color-brand-blue)]/8">
                <Image
                  src="/assets/branding/logo.jpeg"
                  alt={`${name} product visual`}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-xs text-foreground/72">Logo and product image section</p>
            </Card>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <Card className="p-4 md:col-span-2">
              <h2 className="text-lg font-semibold">Product Overview</h2>
              <p className="mt-2 text-sm leading-relaxed text-foreground/85">{overview}</p>
            </Card>
            <Card className="p-4">
              <h2 className="text-lg font-semibold">Core Focus</h2>
              <ul className="mt-2 space-y-1.5 text-sm text-foreground/85">
                <li>Cloud reliability</li>
                <li>Scalable operations</li>
                <li>Secure user workflows</li>
              </ul>
            </Card>
          </div>
        </SectionWrapper>
      </Container>
    </main>
  );
}
