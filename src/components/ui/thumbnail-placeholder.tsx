interface ThumbnailPlaceholderProps {
  label?: string;
}

export function ThumbnailPlaceholder({ label }: ThumbnailPlaceholderProps) {
  return (
    <div className="relative aspect-video w-full bg-surface border border-border flex items-center justify-center">
      {label && (
        <span className="font-mono text-[0.8125rem] text-foreground-muted">{label}</span>
      )}
    </div>
  );
}
