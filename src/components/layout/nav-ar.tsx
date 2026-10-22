'use client';

import { useState, useEffect, useRef } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
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
  const { resolvedTheme, setTheme } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);
  const openBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = 'hidden';

    const menu = menuRef.current;
    if (menu) {
      const first = menu.querySelector<HTMLElement>('button, a[href]');
      first?.focus();
    }

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        openBtnRef.current?.focus();
        return;
      }
      if (e.key !== 'Tab' || !menuRef.current) return;
      const focusable = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
        )
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

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
          {/* Start: hamburger (mobile) + logo */}
          <div className="flex items-center gap-2">
            <button
              ref={openBtnRef}
              className="md:hidden flex items-center justify-center w-9 h-9 -ms-1.5 text-foreground-muted hover:text-foreground transition-colors"
              onClick={() => setOpen(true)}
              aria-label="فتح القائمة"
              aria-expanded={open}
              aria-controls="nav-ar-mobile-menu"
            >
              <Menu size={20} />
            </button>
            <NextLink
              href="/ar"
              onClick={close}
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
          </div>

          {/* Desktop end group */}
          <div className="hidden md:flex items-center gap-4">
            <ul className="flex items-center gap-5 list-none" role="list">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <NextLink href={href} className={itemClass}>{label}</NextLink>
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

          {/* Mobile end: lang switch only */}
          <NextLink
            href="/"
            hrefLang="en"
            aria-label="English version"
            className={`md:hidden ${langClass}`}
            lang="en"
          >
            EN
          </NextLink>
        </nav>
      </Container>

      {/* Full-screen mobile menu */}
      {open && (
        <div
          ref={menuRef}
          id="nav-ar-mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="قائمة التنقل"
          className="md:hidden fixed inset-0 z-[100] flex flex-col bg-background overflow-y-auto"
        >
          {/* Menu header row */}
          <div className="flex items-center justify-between h-14 px-4 border-b border-border shrink-0">
            <button
              onClick={close}
              aria-label="إغلاق القائمة"
              className="flex items-center justify-center w-9 h-9 -ms-1.5 text-foreground-muted hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>
            <NextLink
              href="/ar"
              onClick={close}
              className="flex items-center hover:opacity-70 transition-opacity"
              aria-label="نورا وفيق، الصفحة الرئيسية"
            >
              <Image src="/logo/lockup-ar.svg" alt="" width={130} height={32} className="dark:hidden" aria-hidden />
              <Image src="/logo/lockup-ar-on-dark.svg" alt="" width={130} height={32} className="hidden dark:block" aria-hidden />
            </NextLink>
          </div>

          {/* Nav links */}
          <nav aria-label="التنقل على الجوال" className="flex flex-col px-4 pt-2">
            {navLinks.map(({ href, label }) => (
              <NextLink
                key={href}
                href={href}
                onClick={close}
                className="py-4 text-[1.625rem] font-bold text-foreground border-b border-border/40 hover:text-accent transition-colors duration-150 last:border-0"
              >
                {label}
              </NextLink>
            ))}
          </nav>

          {/* Language + theme controls */}
          <div className="flex flex-col gap-4 px-4 py-5 mt-3 border-t border-border">
            {/* Language segmented control */}
            <div className="flex items-center gap-4">
              <span className="text-small text-foreground-muted w-20 shrink-0">اللغة</span>
              <div className="flex rounded-control border border-border overflow-hidden text-small font-medium">
                <span className="px-5 py-2.5 bg-foreground text-background" aria-current="page">عربي</span>
                <NextLink
                  href="/"
                  onClick={close}
                  hrefLang="en"
                  lang="en"
                  className="px-5 py-2.5 text-foreground-muted hover:text-foreground transition-colors"
                >
                  EN
                </NextLink>
              </div>
            </div>

            {/* Theme segmented control */}
            {resolvedTheme && (
              <div className="flex items-center gap-4">
                <span className="text-small text-foreground-muted w-20 shrink-0">المظهر</span>
                <div className="flex rounded-control border border-border overflow-hidden text-small font-medium">
                  <button
                    onClick={() => setTheme('light')}
                    className={`px-5 py-2.5 transition-colors ${
                      resolvedTheme === 'light'
                        ? 'bg-foreground text-background'
                        : 'text-foreground-muted hover:text-foreground'
                    }`}
                    aria-pressed={resolvedTheme === 'light'}
                  >
                    فاتح
                  </button>
                  <button
                    onClick={() => setTheme('dark')}
                    className={`px-5 py-2.5 transition-colors ${
                      resolvedTheme === 'dark'
                        ? 'bg-foreground text-background'
                        : 'text-foreground-muted hover:text-foreground'
                    }`}
                    aria-pressed={resolvedTheme === 'dark'}
                  >
                    غامق
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex-1 min-h-8" />

          {/* CTA area */}
          <div className="flex flex-col items-center gap-3 px-4 pt-4 pb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/mascot/noon-wave.svg" alt="" width={72} height={72} aria-hidden />
            <p className="text-[0.9375rem] font-medium text-foreground-muted">جاهزة تبدأ؟</p>
            <a
              href="mailto:hello@nourawafik.com?subject=طلب%20عرض%20سعر"
              className="w-full flex items-center justify-center rounded-pill text-[1rem] font-semibold text-foreground transition-opacity hover:opacity-85 active:opacity-70"
              style={{ height: '56px', backgroundColor: 'var(--highlight)' }}
            >
              اطلب عرض سعر
            </a>
            <a
              href="mailto:hello@nourawafik.com"
              dir="ltr"
              className="text-small text-foreground-muted underline underline-offset-4 hover:text-foreground transition-colors"
            >
              hello@nourawafik.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
