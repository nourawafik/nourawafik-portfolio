interface CaptionProps {
  children: React.ReactNode;
}

export function Caption({ children }: CaptionProps) {
  return (
    <p className="text-[0.875rem] text-foreground-muted leading-[1.5] mt-2">
      {children}
    </p>
  );
}
