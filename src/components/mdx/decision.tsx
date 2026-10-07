interface DecisionProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

export function Decision({ number, title, children }: DecisionProps) {
  return (
    <div className="max-w-[680px] mx-auto border-l-2 border-border pl-6 my-8">
      <div className="flex items-baseline gap-4 mb-3">
        <span className="font-mono text-[0.8125rem] text-foreground-muted shrink-0">{number}</span>
        <h3 className="text-[1.25rem] font-medium leading-[1.3] tracking-[-0.01em] text-foreground">
          {title}
        </h3>
      </div>
      <div className="text-[1rem] leading-[1.65] text-foreground-muted [&>p]:mt-0 [&>p]:mb-0 [&>p]:max-w-none [&>p]:mx-0">
        {children}
      </div>
    </div>
  );
}
