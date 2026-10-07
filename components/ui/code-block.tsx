import { cn } from "@/lib/cn";

type CodeBlockProps = {
  code: string;
  className?: string;
};

export function CodeBlock({ code, className }: CodeBlockProps) {
  return (
    <pre className={cn("code-block-brand mt-5 overflow-x-auto p-3 text-sm", className)}>
      {code}
    </pre>
  );
}
