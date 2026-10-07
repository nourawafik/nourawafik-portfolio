'use client';
import { track } from '@vercel/analytics';
import { Container } from '@/components/layout/container';

export function ArContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 md:py-32 border-t border-border"
    >
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:gap-24">
          <h2
            id="contact-heading"
            className="text-[0.8125rem] font-sans text-foreground-muted shrink-0 md:w-32 md:pt-1"
          >
            تواصل
          </h2>

          <div className="flex flex-col gap-6 max-w-[560px]">
            <h3 className="text-[1.5rem] font-medium leading-[1.2] text-foreground">
              للوظائف والمشاريع
            </h3>
            <p className="text-[1rem] leading-[1.65] text-foreground-muted">
              متاحة حالياً للوظائف بدوام كامل.
            </p>
            <a
              href="mailto:hello@nourawafik.com"
              onClick={() => track('email_click')}
              className="text-[1.25rem] font-medium leading-[1.3] text-foreground hover:opacity-70 transition-opacity duration-150 w-fit"
            >
              hello@nourawafik.com
            </a>
            <div className="flex flex-col gap-2">
              <a
                href="https://linkedin.com/in/nourawafik"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('linkedin_click')}
                className="group flex items-center gap-2 text-[0.875rem] text-foreground-muted hover:text-foreground transition-colors duration-150 w-fit"
              >
                <span className="text-foreground-muted">لينكدإن</span>
                <span className="group-hover:underline underline-offset-2">
                  linkedin.com/in/nourawafik
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
