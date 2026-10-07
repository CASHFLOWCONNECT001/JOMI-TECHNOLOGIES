"use client";

import { useState } from "react";
import type { DeveloperResourceItem } from "@/lib/api";
import { CodeExampleSwitcher } from "@/components/ui/code-example-switcher";

type FilterType = "all" | "code-samples" | "api-integration-guides" | "technical-documentation" | "structured-developer-resources";

function ResourceCard({ resource }: { resource: DeveloperResourceItem }) {
  const hasCodeExamples = resource.codeExamples && Object.values(resource.codeExamples).some(code => code && code.trim());
  
  return (
    <article className="card-brand home-glass min-w-0 overflow-hidden rounded-xl border border-foreground/10 p-4 sm:p-6">
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-foreground/58">{resource.type}</p>
          <h3 className="mt-2 text-lg font-semibold">{resource.title}</h3>
          <p className="mt-2 text-sm text-foreground/78">{resource.summary}</p>
        </div>
        
        {resource.tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {resource.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-foreground/15 bg-foreground/5 px-3 py-1 text-xs text-foreground/70"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        {resource.content ? (
          <div className="rounded-lg bg-foreground/5 p-4 text-sm text-foreground/80 leading-relaxed">
            <p className="whitespace-pre-wrap">{resource.content}</p>
          </div>
        ) : null}

        {hasCodeExamples ? (
          <div className="mt-2 min-w-0">
            <CodeExampleSwitcher examples={resource.codeExamples} />
          </div>
        ) : null}

        <div className="flex flex-wrap gap-2 pt-2">
          {resource.resourceUrl ? (
            <a
              href={resource.resourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-3 py-1.5 text-xs font-medium"
            >
              Open Resource
            </a>
          ) : null}
          {resource.repositoryUrl ? (
            <a
              href={resource.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-3 py-1.5 text-xs font-medium"
            >
              View Repository
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

interface GroupedResources {
  codeSamples: DeveloperResourceItem[];
  apiIntegrationGuides: DeveloperResourceItem[];
  technicalDocumentation: DeveloperResourceItem[];
  structuredDeveloperResources: DeveloperResourceItem[];
}

export function ResourceLibraryFilter({
  resources,
  grouped,
}: {
  resources: DeveloperResourceItem[];
  grouped: GroupedResources;
}) {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("all");

  const getFilteredResources = () => {
    switch (selectedFilter) {
      case "code-samples":
        return grouped.codeSamples;
      case "api-integration-guides":
        return grouped.apiIntegrationGuides;
      case "technical-documentation":
        return grouped.technicalDocumentation;
      case "structured-developer-resources":
        return grouped.structuredDeveloperResources;
      default:
        return resources;
    }
  };

  const filters: { id: FilterType; label: string; count: number }[] = [
    { id: "all", label: "All Resources", count: resources.length },
    { id: "code-samples", label: "Code Samples", count: grouped.codeSamples.length },
    { id: "api-integration-guides", label: "API Integration Guides", count: grouped.apiIntegrationGuides.length },
    { id: "technical-documentation", label: "Technical Documentation", count: grouped.technicalDocumentation.length },
    { id: "structured-developer-resources", label: "Structured Resources", count: grouped.structuredDeveloperResources.length },
  ];

  const filteredResources = getFilteredResources();

  return (
    <div className="min-w-0">
      {/* Filter Navbar – horizontally scrollable on mobile */}
      <div className="-mx-1 mt-4 border-b border-foreground/10 pb-4">
        <div className="flex min-w-0 gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`whitespace-nowrap rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                selectedFilter === filter.id
                  ? "border-foreground/30 bg-foreground/10 text-foreground"
                  : "border-foreground/15 text-foreground/70 hover:border-foreground/25 hover:bg-foreground/5"
              }`}
            >
              {filter.label}
              <span className="ml-2 text-xs text-foreground/60">({filter.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Filtered Resources */}
      <div className="mt-6">
        {filteredResources.length > 0 ? (
          <div className="grid min-w-0 gap-4 md:grid-cols-2">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        ) : (
          <div className="card-brand home-glass rounded-xl p-4 text-sm text-foreground/70">
            No resources found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
