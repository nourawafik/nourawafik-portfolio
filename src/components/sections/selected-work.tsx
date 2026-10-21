import NextLink from 'next/link';
import { ProjectImage } from '@/components/ui/project-image';
import { Container } from '@/components/layout/container';
import { caseStudies } from '@/content/case-studies';

interface WorkCard {
  slug: string;
  titleEn: string;
  titleAr: string;
  summaryEn: string;
  summaryAr: string;
  thumbAlt: string;
  role: string;
  platform: string;
  timeline: string;
}

const workCards: WorkCard[] = [
  {
    slug: 'dayratna',
    titleEn: 'Supporting Circle',
    titleAr: 'دايرتنا',
    summaryEn:
      'An Arabic mental-health platform for Saudi Arabia and Egypt, with a design system built from scratch: two languages, two platforms, light and dark.',
    summaryAr:
      'منصة عربية للدعم النفسي في السعودية ومصر، بنظام تصميم من الصفر بلغتين وعلى منصتين وبوضعين.',
    thumbAlt: caseStudies[0].thumbAlt,
    role: caseStudies[0].role,
    platform: caseStudies[0].platform,
    timeline: caseStudies[0].timeline,
  },
  {
    slug: 'kemeclinic',
    titleEn: 'KemeClinic',
    titleAr: 'KemeClinic',
    summaryEn:
      'A telehealth platform for US therapy clinics, with four portals for four kinds of users.',
    summaryAr: 'منصة علاج نفسي عن بعد لعيادات أمريكية، بأربع بوابات لأربع أنواع مستخدمين.',
    thumbAlt: caseStudies[1].thumbAlt,
    role: caseStudies[1].role,
    platform: caseStudies[1].platform,
    timeline: caseStudies[1].timeline,
  },
  {
    slug: 'got-ai',
    titleEn: 'Got-AI',
    titleAr: 'Got-AI',
    summaryEn:
      'A hiring platform with two AI assistants, one for companies and one for candidates, where every AI decision is explained.',
    summaryAr:
      'منصة توظيف بمساعدين أذكياء، واحد للشركات وواحد للمتقدمين، وقرارات الذكاء الاصطناعي فيها واضحة ومفهومة.',
    thumbAlt: caseStudies[2].thumbAlt,
    role: caseStudies[2].role,
    platform: caseStudies[2].platform,
    timeline: caseStudies[2].timeline,
  },
];

const COPY = {
  en: {
    eyebrow: 'Selected work',
    h2: 'Real work for real lives',
    allWork: 'All work',
    read: 'Read the case study',
  },
  ar: {
    eyebrow: 'أعمال مختارة',
    h2: 'أعمال حقيقية، لحياة حقيقية',
    allWork: 'كل الأعمال',
    read: 'اقرأ دراسة الحالة',
  },
} as const;

interface SelectedWorkProps {
  locale?: 'en' | 'ar';
}

export function SelectedWork({ locale = 'en' }: SelectedWorkProps) {
  const t = COPY[locale];
  const ar = locale === 'ar';

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="py-20 md:py-32"
    >
      <Container>
        {/* Header row */}
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div className="flex flex-col gap-2">
            <p className="text-[0.9375rem] font-medium text-on-accent-soft">{t.eyebrow}</p>
            <h2
              id="work-heading"
              className={`text-h2 font-bold text-foreground ${ar ? 'leading-[1.4]' : 'leading-[1.2]'}`}
            >
              {t.h2}
            </h2>
          </div>
          <NextLink
            href={ar ? '/ar#work' : '/#work'}
            className="hidden md:inline-flex items-center gap-1 text-small text-accent hover:underline underline-offset-4 shrink-0"
          >
            {t.allWork}
            <span className="rtl:rotate-180" aria-hidden>→</span>
          </NextLink>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workCards.map((card, i) => {
            const href = ar ? `/ar/work/${card.slug}` : `/work/${card.slug}`;
            const title = ar ? card.titleAr : card.titleEn;
            const summary = ar ? card.summaryAr : card.summaryEn;

            return (
              <article key={card.slug} className="group flex flex-col gap-4">
                {/* Image */}
                <NextLink
                  href={href}
                  className="block overflow-hidden rounded-card bg-surface border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)]"
                  tabIndex={-1}
                  aria-hidden
                >
                  <div style={{ height: '240px' }} className="overflow-hidden">
                    <ProjectImage
                      slug={card.slug}
                      variant="thumb"
                      alt={card.thumbAlt}
                      priority={i === 0}
                    />
                  </div>
                </NextLink>

                {/* Tags */}
                <ul className="flex flex-wrap gap-2 list-none" role="list">
                  {[card.role, card.platform, card.timeline].map((tag) => (
                    <li
                      key={tag}
                      className="px-2.5 py-0.5 rounded-tag bg-accent-soft text-on-accent-soft text-small"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                {/* Title */}
                <NextLink href={href} className="focus-visible:outline-none group/link">
                  <h3 className="text-h3 font-medium text-foreground group-hover/link:text-accent transition-colors duration-150">
                    {title}
                  </h3>
                </NextLink>

                {/* Summary */}
                <p className={`text-body text-foreground-muted ${ar ? 'leading-[1.8]' : 'leading-[1.65]'}`}>
                  {summary}
                </p>

                {/* Read link */}
                <NextLink
                  href={href}
                  className="inline-flex items-center gap-1.5 text-small text-accent hover:underline underline-offset-4 focus-visible:outline-none group/arrow mt-auto"
                  tabIndex={-1}
                  aria-hidden
                >
                  {t.read}
                  <span className="rtl:rotate-180 transition-transform duration-150 group-hover/arrow:translate-x-0.5 rtl:group-hover/arrow:-translate-x-0.5" aria-hidden>
                    →
                  </span>
                </NextLink>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

