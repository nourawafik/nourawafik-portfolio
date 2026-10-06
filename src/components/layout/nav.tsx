'use client';

import { useState } from 'react';
import NextLink from 'next/link';
import { Menu, X } from 'lucide-react';
import { Container } from './container';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const navLinks = [
  { href: '/#work', label: 'Work' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
];

const itemClass =
  'text-[0.875rem] text-foreground-muted hover:text-foreground transition-colors duration-150';
const langClass =
  'text-[0.8125rem] text-foreground-muted hover:text-foreground transition-colors duration-150';

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:px-4 focus:py-2 focus:text-sm focus:bg-foreground focus:text-background"
      >
        Skip to main content
      </a>
      <Container>
        <nav className="flex h-14 items-center justify-between" aria-label="Main navigation">
          <NextLink
            href="/"
            className="text-[0.875rem] font-medium text-foreground hover:opacity-70 transition-opacity duration-150"
            aria-label="Noura Wafik — home"
          >
            Noura Wafik
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
                <NextLink href="/ar" hrefLang="ar" aria-label="النسخة العربية" className={langClass}>
                  عربي
                </NextLink>
              </li>
            </ul>
            <ThemeToggle />
          </div>

          {/* Mobile: hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-8 h-8 text-foreground-muted hover:text-foreground transition-colors duration-150"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="nav-mobile-menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div id="nav-mobile-menu" className="md:hidden border-t border-border bg-background">
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
                  href="/ar"
                  hrefLang="ar"
                  className={`block py-2 ${langClass}`}
                  onClick={() => setOpen(false)}
                >
                  عربي
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
