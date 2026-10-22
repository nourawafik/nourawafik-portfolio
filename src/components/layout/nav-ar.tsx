'use client';

import { useState } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Container } from './container';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const navLinks = [
  { href: '/ar#work', label: 'أعمالي' },
  { href: '/ar#services', label: 'الخدمات' },
  { href: '/ar#about', label: 'عني' },
  { href: '/ar#contact', label: 'تواصل' },
];

const itemClass =
  'text-[0.875rem] font-medium text-foreground-muted hover:text-foreground transition-colors duration-150';
const langClass =
  'text-[0.8125rem] font-medium text-foreground-muted hover:text-foreground transition-colors duration-150 rounded-pill border border-border px-2.5 py-1';

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
        <nav className="flex h-14 items-center justify-between gap-4" aria-label="التنقل الرئيسي">
          <NextLink
            href="/ar"
            onClick={() => setOpen(false)}
            className="flex items-center hover:opacity-70 transition-opacity duration-150 shrink-0"
            aria-label="نورا وفيق، الصفحة الرئيسية"
          >
            <Image
              src="/logo/lockup-ar.svg"
              alt="نورا وفيق"
              width={130}
              height={32}
              className="dark:hidden"
            />
            <Image
              src="/logo/lockup-ar-on-dark.svg"
              alt="نورا وفيق"
              width={130}
              height={32}
              className="hidden dark:block"
            />
          </NextLink>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <ul className="flex items-center gap-5 list-none" role="list">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <NextLink href={href} className={itemClass}>
                    {label}
                  </NextLink>
                </li>
              ))}
            </ul>
            <NextLink href="/" hrefLang="en" aria-label="English version" className={langClass} lang="en">
              EN
            </NextLink>
            <ThemeToggle locale="ar" />
            <a
              href="mailto:hello@nourawafik.com?subject=طلب%20عرض%20سعر"
              className="inline-flex items-center justify-center rounded-pill px-4 py-2 text-[0.875rem] font-medium text-foreground transition-opacity hover:opacity-85 active:opacity-70 shrink-0"
              style={{ backgroundColor: 'var(--highlight)' }}
            >
              اطلب عرض سعر
            </a>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="mailto:hello@nourawafik.com?subject=طلب%20عرض%20سعر"
              className="inline-flex items-center justify-center rounded-pill px-3 py-1.5 text-[0.8125rem] font-medium text-foreground"
              style={{ backgroundColor: 'var(--highlight)' }}
            >
              اطلب عرض سعر
            </a>
            <button
              className="flex items-center justify-center w-8 h-8 text-foreground-muted hover:text-foreground transition-colors duration-150"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
              aria-expanded={open}
              aria-controls="nav-ar-mobile-menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </Container>

      {open && (
        <div
          id="nav-ar-mobile-menu"
          className="md:hidden absolute inset-x-0 top-full border-y border-border bg-background"
        >
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
                  className={`block py-2 ${itemClass}`}
                  onClick={() => setOpen(false)}
                  lang="en"
                >
                  EN
                </NextLink>
              </li>
              <li className="mt-2 pt-3 border-t border-border">
                <ThemeToggle locale="ar" />
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
