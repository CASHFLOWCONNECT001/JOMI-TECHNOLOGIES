import { cn } from "@/lib/cn";

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  elevated?: boolean;
  fullWidth?: boolean;
};

export function SectionWrapper({ children, className, elevated = false, fullWidth = false }: SectionWrapperProps) {
  return (
    <section
      className={cn(
        "rounded-2xl p-5 md:p-6 animate-fade-in-up home-glass",
        elevated ? "card-brand" : "section-accent",
        fullWidth && "mx-0 sm:-mx-4 md:-mx-6 lg:-mx-8",
        className,
      )}
    >
      {children}
    </section>
  );
}
