import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  narrow?: boolean;
}

export function Container({ children, className, as: Tag = 'div', narrow }: ContainerProps) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full px-4 md:px-12',
        narrow ? 'max-w-[680px]' : 'max-w-[1200px]',
        className
      )}
    >
      {children}
    </Tag>
  );
}
