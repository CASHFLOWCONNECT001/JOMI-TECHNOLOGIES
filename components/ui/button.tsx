import Link from "next/link";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
};

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  target,
  rel,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition animate-fade-in-up animate-brand-pulse",
        variant === "primary"
          ? "btn-brand"
          : "border border-foreground/15 text-foreground hover:border-[var(--color-brand-cyan)] hover:bg-foreground/5",
        className,
      )}
    >
      {children}
    </Link>
  );
}
