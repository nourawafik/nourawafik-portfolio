'use client';
import { track } from '@vercel/analytics';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 md:py-32 border-t border-border">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:gap-24">
          <h2
            id="about-heading"
            className="text-[0.8125rem] font-mono text-foreground-subtle shrink-0 md:w-32 md:pt-1"
          >
            About
          </h2>

          <div className="flex flex-col gap-6 max-w-[560px]">
            <p className="text-[1rem] leading-[1.65] text-foreground-muted">
              I&apos;m Noura — a product designer based in Cairo. I have 6+ years of design
              experience, with recent years dedicated to product design across brand, visual, and
              digital product work. I work end-to-end: research, information architecture, interaction
              design, and design systems.
            </p>

            <p className="text-[1rem] leading-[1.65] text-foreground-muted">
              I&apos;m bilingual (Arabic and English) and I design products for healthtech, AI tools,
              and wellness platforms across the Gulf, Egypt, and the US. Recent work includes leading
              design across multi-platform bilingual products, mentoring junior designers on
              system-led workflows, and building AI-readable design systems using design.md and
              Storybook for engineering handoff.
            </p>

            <p className="text-[1rem] leading-[1.65] text-foreground-muted">
              Currently open to full-time remote roles · Open to relocation (UAE).
            </p>

            <div className="flex flex-wrap gap-3">
              <Button href="/resume.pdf" variant="primary" size="sm" download onClick={() => track('resume_download')}>
                Download resume
              </Button>
              <Button
                href="https://linkedin.com/in/nourawafik"
                variant="ghost"
                size="sm"
                external
                onClick={() => track('linkedin_click')}
              >
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
