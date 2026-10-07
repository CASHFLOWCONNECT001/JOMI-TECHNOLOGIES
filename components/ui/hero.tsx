
import { BrandLogo } from "@/components/branding/brand-logo";
import { cn } from "@/lib/cn";

type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  className?: string;
  showLogo?: boolean;
  children?: React.ReactNode;
};

export function Hero({
  eyebrow,
  title,
  description,
  className,
  showLogo = false,
  children,
}: HeroProps) {
  return (
    <div className={cn("animate-fade-in-up", className)}>
      {showLogo ? <BrandLogo className="h-20 w-20 md:h-24 md:w-24 animate-brand-pulse" circular priority /> : null}
      {eyebrow ? (
        <p className="mt-4 inline-block rounded-full border border-foreground/20 px-3 py-1 text-sm font-bold tracking-[0.14em] text-[var(--color-brand-blue)] uppercase dark:text-[var(--color-brand-aqua)] animate-fade-in-up">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl animate-fade-in-up">{title}</h1>
      <p className="mt-3 max-w-2xl text-foreground/85 md:text-lg animate-fade-in-up">{description}</p>
      {children}
    </div>
  );
}
