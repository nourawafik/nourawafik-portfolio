'use client';

import { useState } from 'react';
import NextLink from 'next/link';
import { Menu, X } from 'lucide-react';
import { Container } from './container';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const navLinks = [
  { href: '/ar#work', label: 'أعمالي' },
  { href: '/ar#about', label: 'نبذة عني' },
  { href: '/ar#contact', label: 'تواصل' },
];

const itemClass =
  'text-[0.875rem] text-foreground-muted hover:text-foreground transition-colors duration-150';
const langClass =
  'font-mono text-[0.8125rem] text-foreground-muted hover:text-foreground transition-colors duration-150';

export function NavAr() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:px-4 focus:py-2 focus:text-sm focus:bg-foreground focus:text-background"
      >
        انتقال إلى المحتوى الرئيسي
      </a>
      <Container>
        <nav className="flex h-14 items-center justify-between" aria-label="التنقل الرئيسي">
          <NextLink
            href="/ar"
            className="text-[0.875rem] font-medium text-foreground hover:opacity-70 transition-opacity duration-150"
            aria-label="نورا وفيق — الصفحة الرئيسية"
          >
            نورا وفيق
          </NextLink>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6 list-none" role="list">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <NextLink href={href} className={itemClass}>
                    {label}
                  </NextLink>
                </li>
              ))}
              <li>
                <NextLink href="/" hrefLang="en" aria-label="English version" className={langClass}>
                  EN
                </NextLink>
              </li>
            </ul>
            <ThemeToggle />
          </div>

          {/* Mobile: hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-8 h-8 text-foreground-muted hover:text-foreground transition-colors duration-150"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={open}
            aria-controls="nav-ar-mobile-menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div id="nav-ar-mobile-menu" className="md:hidden border-t border-border bg-background">
          <Container>
            <ul className="flex flex-col list-none py-4 gap-1" role="list">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <NextLink
                    href={href}
                    className={`block py-2 ${itemClass}`}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </NextLink>
                </li>
              ))}
              <li>
                <NextLink
                  href="/"
                  hrefLang="en"
                  className={`block py-2 ${langClass}`}
                  onClick={() => setOpen(false)}
                >
                  EN
                </NextLink>
              </li>
              <li className="mt-2 pt-3 border-t border-border">
                <ThemeToggle />
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
