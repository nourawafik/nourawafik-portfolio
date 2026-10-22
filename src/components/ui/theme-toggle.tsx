'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
  locale?: 'en' | 'ar';
}

export function ThemeToggle({ className, locale = 'en' }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();

  if (!resolvedTheme) {
    return <div className="w-8 h-8" aria-hidden />;
  }

  const isDark = resolvedTheme === 'dark';
  const label = isDark
    ? (locale === 'ar' ? 'الوضع الفاتح' : 'Light mode')
    : (locale === 'ar' ? 'الوضع الغامق' : 'Dark mode');

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={label}
      className={cn(
        'w-8 h-8 flex items-center justify-center text-foreground-muted hover:text-foreground transition-colors duration-150 cursor-pointer',
        className
      )}
    >
      {isDark
        ? <Sun size={16} className="text-highlight" />
        : <Moon size={16} />
      }
    </button>
  );
}
