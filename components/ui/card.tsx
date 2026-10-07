import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return <div className={cn("card-brand home-glass p-4 md:p-5 animate-fade-in-up", className)}>{children}</div>;
}
