export function NdaNote() {
  return (
    <aside className="my-6 max-w-[680px] mx-auto flex items-start gap-3 rounded-lg bg-surface border border-border px-4 py-3">
      <svg
        aria-hidden
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="shrink-0 mt-0.5 text-foreground-muted"
      >
        <path d="M8 1a3.5 3.5 0 0 0-3.5 3.5V6H3.5A1.5 1.5 0 0 0 2 7.5v6A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 12.5 6h-1V4.5A3.5 3.5 0 0 0 8 1zm2 5H6V4.5a2 2 0 1 1 4 0V6z" />
      </svg>
      <p className="text-[0.875rem] leading-[1.6] text-foreground-muted m-0">
        Names, people and company details are changed, and every screen shown here was redrawn for this case study. The original work is under NDA.
      </p>
    </aside>
  );
}
