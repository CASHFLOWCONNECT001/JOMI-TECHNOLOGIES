import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/cn";

type CtaSectionProps = {
  title: string;
  description: string;
  primaryAction: { href: string; label: string };
  secondaryAction?: { href: string; label: string };
  className?: string;
};

export function CtaSection({
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
}: CtaSectionProps) {
  return (
    <Card className={cn("mt-6 animate-fade-in-up", className)}>
      <h2 className="text-xl font-semibold md:text-2xl animate-fade-in-up">{title}</h2>
      <p className="mt-2 max-w-2xl text-foreground/82 animate-fade-in-up">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2 animate-fade-in-up">
        <ButtonLink href={primaryAction.href}>{primaryAction.label}</ButtonLink>
        {secondaryAction ? (
          <ButtonLink href={secondaryAction.href} variant="secondary">
            {secondaryAction.label}
          </ButtonLink>
        ) : null}
      </div>
    </Card>
  );
}
