'use client';
import { track } from '@vercel/analytics';
import NextLink from 'next/link';
import Image from 'next/image';
import { Container } from './container';

const currentYear = new Date().getFullYear();

interface FooterProps {
  locale?: 'en' | 'ar';
}

export function Footer({ locale = 'en' }: FooterProps) {
  const ar = locale === 'ar';

  return (
    <footer className="border-t border-border mt-auto">
      <Container>
        <div className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          {/* Logo */}
          <NextLink
            href={ar ? '/ar' : '/'}
            className="flex items-center hover:opacity-70 transition-opacity duration-150"
            aria-label={ar ? 'نورا وفيق — الصفحة الرئيسية' : 'Noura Wafik — home'}
          >
            <Image
              src={ar ? '/logo/lockup-ar.svg' : '/logo/lockup-en.svg'}
              alt={ar ? 'نورا وفيق' : 'noura wafik'}
              width={110}
              height={28}
              className="dark:hidden"
            />
            <Image
              src={ar ? '/logo/lockup-ar-on-dark.svg' : '/logo/lockup-en-on-dark.svg'}
              alt={ar ? 'نورا وفيق' : 'noura wafik'}
              width={110}
              height={28}
              className="hidden dark:block"
            />
          </NextLink>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-small text-foreground-muted">
            <a
              href="mailto:hello@nourawafik.com"
              onClick={() => track('email_click')}
              className="hover:text-foreground transition-colors duration-150"
            >
              hello@nourawafik.com
            </a>
            <a
              href="https://linkedin.com/in/nourawafik"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('linkedin_click')}
              className="hover:text-foreground transition-colors duration-150"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <p dir="ltr" className="pb-8 text-small text-foreground-subtle">
          © {currentYear} Noura Wafik
        </p>
      </Container>
    </footer>
  );
}
