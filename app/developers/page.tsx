import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { CtaSection } from "@/components/ui/cta-section";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { CodeBulbRunner } from "@/components/ui/code-bulb-runner";
import {
  getPublishedDeveloperResources,
  type DeveloperResourceItem,
} from "@/lib/api";
import { createPageMetadata } from "@/lib/seo";
import { ResourceLibraryFilter } from "./resource-library-filter";

export const metadata: Metadata = createPageMetadata({
  title: "Developers",
  description:
    "Explore JOMI TECHNOLOGIES INSTITUTE developer resources, API integration patterns, and clear implementation guidance. Interactive code examples with live execution for ERP, CRM, e-commerce, training systems, and custom software.",
  path: "/developers",
  keywords: [
    "JOMI TECHNOLOGIES INSTITUTE developers",
    "developer resources",
    "api integration guide",
    "software implementation support",
    "rest api documentation",
    "ERP development",
    "CRM development",
    "e-commerce development",
    "code samples",
    "technical documentation",
  ],
});

function classifyResource(resource: DeveloperResourceItem) {
  if (resource.type === "code-sample") {
    return "code-samples";
  }
  if (resource.type === "integration") {
    return "api-integration-guides";
  }
  if (resource.type === "documentation") {
    return "technical-documentation";
  }
  return "structured-developer-resources";
}

function groupResources(resources: DeveloperResourceItem[]) {
  return {
    codeSamples: resources.filter(
      (resource) => classifyResource(resource) === "code-samples"
    ),
    apiIntegrationGuides: resources.filter(
      (resource) => classifyResource(resource) === "api-integration-guides"
    ),
    technicalDocumentation: resources.filter(
      (resource) => classifyResource(resource) === "technical-documentation"
    ),
    structuredDeveloperResources: resources.filter(
      (resource) => classifyResource(resource) === "structured-developer-resources"
    ),
  };
}

export default async function DevelopersPage() {
  const resources = await getPublishedDeveloperResources();
  const grouped = groupResources(resources);

  return (
    <main className="section-y">
      <Container>
        <SectionWrapper elevated fullWidth className="min-w-0">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            Developers
          </p>
          <h1 className="mt-2 text-2xl font-bold md:text-3xl">
            Developer Resources
          </h1>
          <p className="mt-3 max-w-3xl text-foreground/82">
            Structured developer resources for engineering teams integrating
            with JOMI TECHNOLOGIES INSTITUTE. This page is organized to
            strengthen technical authority, accelerate integrations, and
            support delivery partnerships across ERP, CRM, e-commerce, training
            systems, and custom software.
          </p>

          <div className="mt-6 grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            <div className="card-premium min-w-0 p-4">
              <h2 className="text-base font-semibold">Code Samples</h2>
              <p className="mt-2 text-sm text-foreground/82">
                Practical implementation references teams can apply quickly in
                real delivery environments.
              </p>
            </div>
            <div className="card-premium min-w-0 p-4">
              <h2 className="text-base font-semibold">API Integration Guides</h2>
              <p className="mt-2 text-sm text-foreground/82">
                Clear integration workflows for endpoint consumption,
                validation, and deployment readiness.
              </p>
            </div>
            <div className="card-premium min-w-0 p-4">
              <h2 className="text-base font-semibold">
                Technical Documentation
              </h2>
              <p className="mt-2 text-sm text-foreground/82">
                Architecture and implementation documentation designed for
                maintainability and partnership alignment.
              </p>
            </div>
          </div>

          <div className="mt-8 min-w-0">
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="text-lg font-semibold">
                Interactive Code Examples
              </h2>
              <p className="text-xs text-foreground/55">
                Press <strong>Run</strong> to execute each snippet
              </p>
            </div>
            <p className="mt-2 max-w-3xl text-sm text-foreground/82">
              Each example demonstrates a real pattern used in JOMI TECHNOLOGIES
              INSTITUTE projects — service checks, ERP totals, CRM lead scoring,
              training enrolment, and e-commerce checkout. Watch the bulb light
              up on successful execution.
            </p>

            <div className="mt-4">
              <CodeBulbRunner />
            </div>
          </div>

          <div className="mt-8 min-w-0">
            <h2 className="text-lg font-semibold">
              Published Developer Resource Library
            </h2>

            {resources.length > 0 ? (
              <ResourceLibraryFilter
                resources={resources}
                grouped={grouped}
              />
            ) : (
              <div className="card-premium mt-4 rounded-xl p-4 text-sm text-foreground/70">
                No developer resources are currently published. Check back soon
                for updates.
              </div>
            )}
          </div>

          <CtaSection
            title="Need technical guidance?"
            description="Talk to our engineering team about custom integration requirements or specific technical scope for your project."
            primaryAction={{ href: "/contact", label: "Talk to our Team" }}
            secondaryAction={{
              href: "/services/other-digital-services",
              label: "Define Custom Scope",
            }}
          />
        </SectionWrapper>
      </Container>
    </main>
  );
}