import NextLink from 'next/link';
import { ProjectImage } from '@/components/ui/project-image';
import { Container } from '@/components/layout/container';
import { CardRail } from '@/components/ui/card-rail';
import { caseStudies } from '@/content/case-studies';

interface WorkCard {
  slug: string;
  titleEn: string;
  titleAr: string;
  summaryEn: string;
  summaryAr: string;
  thumbAlt: string;
  thumbDark?: string;
  role: string;
  roleAr: string;
  platform: string;
  platformAr: string;
  timeline: string;
}

const workCards: WorkCard[] = [
  {
    slug: 'ulfa',
    titleEn: 'Ulfa',
    titleAr: 'ألفة',
    summaryEn:
      'A bilingual mobile app that brings people together with licensed mental health facilitators, in small circles and structured sessions.',
    summaryAr:
      'تطبيق موبايل بالعربي والإنجليزي، بيجمع الناس مع ميسرين متخصصين في الصحة النفسية، في دوائر صغيرة وجلسات منظمة.',
    thumbAlt: caseStudies[0].thumbAlt,
    thumbDark: '/work/ulfa-thumb-dark.png',
    role: caseStudies[0].role,
    roleAr: 'تصميم المنتج وإدارته',
    platform: caseStudies[0].platform,
    platformAr: 'تطبيق موبايل · عربي وإنجليزي',
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
    roleAr: 'مصممة منفردة',
    platform: caseStudies[1].platform,
    platformAr: '200+ مستخدم نشط',
    timeline: caseStudies[1].timeline,
  },
  {
    slug: 'duet',
    titleEn: 'Duet',
    titleAr: 'Duet',
    summaryEn:
      'A hiring platform with two AI assistants, one for companies and one for candidates, where every AI decision is explained.',
    summaryAr:
      'منصة توظيف بمساعدين أذكياء، واحد للشركات وواحد للمرشحين، وكل قرار من قرارات الذكاء الاصطناعي فيها مفسّر.',
    thumbAlt: caseStudies[2].thumbAlt,
    thumbDark: '/work/duet-thumb-dark.png',
    role: caseStudies[2].role,
    roleAr: 'مصممة منتجات',
    platform: caseStudies[2].platform,
    platformAr: 'ويب + موبايل',
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
      className="py-16 md:py-24"
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

        {/* Cards rail — horizontal scroll on mobile, 3-col grid on desktop */}
        <CardRail ariaLabel={t.eyebrow} mdClass="md:grid-cols-3 md:gap-6" count={workCards.length} showDots>
          {workCards.map((card, i) => {
            const href = ar ? `/ar/work/${card.slug}` : `/work/${card.slug}`;
            const title = ar ? card.titleAr : card.titleEn;
            const summary = ar ? card.summaryAr : card.summaryEn;

            return (
              <article
                key={card.slug}
                className="card-shadow relative group flex flex-col rounded-card bg-surface border border-border overflow-hidden max-md:shrink-0 max-md:[flex:0_0_84%] max-md:[scroll-snap-align:start]"
              >
                {/* Cover image — zooms on card hover */}
                <div className="overflow-hidden" style={{ height: '240px' }}>
                  <div className="w-full h-full motion-safe:transition-transform motion-safe:duration-[600ms] motion-safe:ease-[cubic-bezier(.2,.8,.2,1)] motion-safe:group-hover:scale-[1.05]">
                    <ProjectImage
                      slug={card.slug}
                      variant="thumb"
                      alt={card.thumbAlt}
                      priority={i === 0}
                      srcDark={card.thumbDark}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 p-6 flex-1">
                  {/* Tags */}
                  <ul className="flex flex-wrap gap-2 list-none" role="list">
                    {[
                      ar ? card.roleAr : card.role,
                      ar ? card.platformAr : card.platform,
                      card.timeline,
                    ].map((tag) => (
                      <li
                        key={tag}
                        className="px-2.5 py-0.5 rounded-tag bg-accent-soft text-on-accent-soft text-small"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  {/* Title — stretched link covers entire card via ::after */}
                  <NextLink
                    href={href}
                    className="focus-visible:outline-none after:absolute after:inset-0 after:z-[1] after:content-['']"
                  >
                    <h3 className="text-h3 font-bold text-foreground transition-colors duration-[350ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:text-accent">
                      {title}
                    </h3>
                  </NextLink>

                  {/* Summary */}
                  <p className={`text-body text-foreground-muted flex-1 ${ar ? 'leading-[1.8]' : 'leading-[1.65]'}`}>
                    {summary}
                  </p>

                  {/* Read link — decorative; the stretched link above is the real click target */}
                  <div className="inline-flex items-center gap-1.5 text-small text-accent mt-auto" aria-hidden>
                    {t.read}
                    <span
                      className="rtl:rotate-180 motion-safe:transition-transform motion-safe:duration-[350ms] motion-safe:group-hover:translate-x-[5px] rtl:motion-safe:group-hover:-translate-x-[5px]"
                      aria-hidden
                    >
                      →
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </CardRail>
      </Container>
    </section>
  );
}
