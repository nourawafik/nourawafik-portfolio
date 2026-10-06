'use client';
import { track } from '@vercel/analytics';
import { Container } from '@/components/layout/container';

const links = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/nourawafik',
    display: 'linkedin.com/in/nourawafik',
  },
];

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 md:py-32 border-t border-border">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:gap-24">
          <h2
            id="contact-heading"
            className="text-[0.8125rem] font-mono text-foreground-subtle shrink-0 md:w-32 md:pt-1"
          >
            Get in touch
          </h2>

          <div className="flex flex-col gap-6">
            <p className="text-[1rem] leading-[1.65] text-foreground-muted">
              For full-time opportunities or product design discussions:
            </p>

            <a
              href="mailto:hello@nourawafik.com"
              onClick={() => track('email_click')}
              className="text-[1.25rem] font-medium leading-[1.3] tracking-[-0.01em] text-foreground underline underline-offset-4 decoration-border-strong hover:decoration-foreground transition-[text-decoration-color] duration-150 self-start"
            >
              hello@nourawafik.com
            </a>

            <div className="flex flex-col gap-3">
              {links.map(({ label, href, display }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track('linkedin_click')}
                  className="group flex items-baseline gap-3 text-[1rem] text-foreground-muted hover:text-foreground transition-colors duration-150"
                >
                  <span className="font-mono text-[0.8125rem] text-foreground-subtle w-16 shrink-0">
                    {label}
                  </span>
                  <span className="underline underline-offset-4 decoration-border-strong group-hover:decoration-foreground transition-[text-decoration-color] duration-150">
                    {display}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
