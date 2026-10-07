import { cn } from '@/lib/utils';

type TextSize = 'lg' | 'base' | 'sm' | 'mono';
type TextAs = 'p' | 'span' | 'div' | 'label' | 'time';

interface TextProps {
  as?: TextAs;
  size?: TextSize;
  muted?: boolean;
  subtle?: boolean;
  children: React.ReactNode;
  className?: string;
}

const sizeClasses: Record<TextSize, string> = {
  lg: 'text-[1.125rem] leading-[1.65]',
  base: 'text-[1rem] leading-[1.65]',
  sm: 'text-[0.875rem] leading-[1.5]',
  mono: 'text-[0.8125rem] leading-[1.5] font-mono tracking-[0]',
};

export function Text({ as: Tag = 'p', size = 'base', muted, subtle, children, className }: TextProps) {
  return (
    <Tag
      className={cn(
        sizeClasses[size],
        muted && 'text-foreground-muted',
        subtle && 'text-foreground-muted',
        !muted && !subtle && 'text-foreground',
        className
      )}
    >
      {children}
    </Tag>
  );
}
