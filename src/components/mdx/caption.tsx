interface CaptionProps {
  children: React.ReactNode;
}

export function Caption({ children }: CaptionProps) {
  return (
    <p className="font-mono text-[0.8125rem] text-foreground-muted leading-[1.5] mt-2">
      {children}
    </p>
  );
}
