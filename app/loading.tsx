export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="flex flex-col items-center gap-3">
        <span
          className="h-12 w-12 animate-spin rounded-full border-4 border-[var(--color-brand-blue)]/25 border-t-[var(--color-brand-blue)] dark:border-[var(--color-brand-aqua)]/25 dark:border-t-[var(--color-brand-aqua)]"
          aria-hidden="true"
        />
        <p className="text-sm text-foreground/75">Loading page...</p>
      </div>
    </div>
  );
}
