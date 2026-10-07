import Link from "next/link";

type Crumb = {
  href: string;
  label: string;
};

type RouteBreadcrumbsProps = {
  crumbs?: Crumb[];
  className?: string;
};

/**
 * If `crumbs` are not provided, the component will auto-build them
 * from the current pathname via a lightweight client fallback.
 */
export function RouteBreadcrumbs({
  crumbs,
  className = "",
}: RouteBreadcrumbsProps) {
  const trail: Crumb[] = crumbs ?? [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className={`mb-4 text-sm ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-1.5 text-foreground/65">
        {trail.map((crumb, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-1.5">
              {isLast ? (
                <span
                  aria-current="page"
                  className="font-medium text-foreground"
                >
                  {crumb.label}
                </span>
              ) : (
                <>
                  <Link
                    href={crumb.href}
                    className="breadcrumb-link relative transition-colors hover:text-[var(--color-brand-cyan)]"
                  >
                    {crumb.label}
                  </Link>
                  <span
                    aria-hidden
                    className="text-foreground/35 select-none"
                  >
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>

      <style>{`
        .breadcrumb-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 1px;
          background: var(--color-brand-cyan);
          transition: width 300ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .breadcrumb-link:hover::after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
}