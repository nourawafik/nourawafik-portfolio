import { Container } from '@/components/layout/container';
import { CaseStudyCard } from '@/components/ui/case-study-card';
import { caseStudies } from '@/content/case-studies';

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-heading" className="py-20 md:py-32 border-t border-border">
      <Container>
        <h2
          id="work-heading"
          className="text-[0.8125rem] font-mono text-foreground-muted mb-8 md:mb-12"
        >
          Selected Work
        </h2>

        <div className="divide-y divide-border border-b border-border">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.slug} {...study} index={i + 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}
