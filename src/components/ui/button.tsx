import NextLink from 'next/link';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'ghost';
type ButtonSize = 'sm' | 'md';

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-foreground text-background hover:opacity-80',
  ghost: 'bg-transparent text-foreground border border-border hover:bg-surface hover:border-border-strong',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-[0.875rem]',
  md: 'px-5 py-2.5 text-[0.875rem]',
};

const baseClasses =
  'inline-flex items-center justify-center font-medium transition-[opacity,background-color,border-color] duration-150 cursor-pointer disabled:cursor-not-allowed disabled:opacity-40';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton extends ButtonBaseProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> {
  href?: never;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  external?: boolean;
  download?: boolean;
  onClick?: () => void;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children } = props;

  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if ('href' in props && props.href) {
    const { href, external, download, onClick } = props;
    if (external || download) {
      return (
        <a
          href={href}
          className={classes}
          onClick={onClick}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          {...(download ? { download: true } : {})}
        >
          {children}
        </a>
      );
    }
    return (
      <NextLink href={href} className={classes} onClick={onClick}>
        {children}
      </NextLink>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...buttonProps } =
    props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
