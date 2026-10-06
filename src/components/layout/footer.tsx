'use client';
import { track } from '@vercel/analytics';
import { Container } from './container';

const currentYear = new Date().getFullYear();

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/nourawafik',
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <Container>
        <div className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="mailto:hello@nourawafik.com"
            onClick={() => track('email_click')}
            className="text-[0.875rem] text-foreground-muted hover:text-foreground transition-colors duration-150"
          >
            hello@nourawafik.com
          </a>

          <ul className="flex items-center gap-6 list-none" role="list">
            {socialLinks.map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track('linkedin_click')}
                  className="text-[0.875rem] text-foreground-muted hover:text-foreground transition-colors duration-150"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p dir="ltr" className="pb-6 font-mono text-[0.8125rem] text-foreground-muted">
          © {currentYear} Noura Wafik · Built with Next.js, deployed on Vercel
        </p>
      </Container>
    </footer>
  );
}
