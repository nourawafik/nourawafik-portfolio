import Image from 'next/image';
import NextLink from 'next/link';
import { Container } from '@/components/layout/container';
import { CardRail } from '@/components/ui/card-rail';
import { ArrowIcon } from '@/components/ui/arrow-icon';
import { work, LABELS } from '@/content/work';

const featuredWork = work.filter(w => w.featured && !w.parent);

const COPY = {
  en: {
    eyebrow: 'Selected work',
    h2: 'Real projects for real clients',
    allWork: 'All work',
    read: 'Read the study',
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
            href={ar ? '/ar/work' : '/work'}
            className="hidden md:inline-flex items-center gap-1 text-small text-accent hover:underline underline-offset-4 shrink-0"
          >
            {t.allWork}
            <ArrowIcon size={14} />
          </NextLink>
        </div>

        {/* Cards rail — horizontal scroll on mobile, 3-col grid on desktop */}
        <CardRail ariaLabel={t.eyebrow} mdClass="md:grid-cols-3 md:gap-6" count={featuredWork.length} showDots>
          {featuredWork.map((item, i) => {
            const href    = ar ? `/ar/work/${item.slug}` : `/work/${item.slug}`;
            const title   = ar ? item.title.ar   : item.title.en;
            const summary = ar ? item.summary.ar : item.summary.en;
            const typeTags    = item.types.map(tp => ar ? LABELS.type[tp].ar : LABELS.type[tp].en);
            const industryTag = ar ? LABELS.industry[item.industry].ar : LABELS.industry[item.industry].en;

            return (
              <article
                key={item.slug}
                className="card-shadow relative group flex flex-col rounded-card bg-surface border border-border overflow-hidden max-md:shrink-0 max-md:[flex:0_0_84%] max-md:[scroll-snap-align:start]"
              >
                {/* Cover image — zooms on card hover */}
                <div className="overflow-hidden" style={{ height: '240px' }}>
                  <div className="w-full h-full motion-safe:transition-transform motion-safe:duration-[450ms] motion-safe:ease-[cubic-bezier(.2,.8,.2,1)] motion-safe:group-hover:scale-[1.05]">
                    <Image
                      src={item.thumb}
                      alt={item.thumbAlt}
                      width={1600}
                      height={1200}
                      sizes="(max-width: 768px) 100vw, 600px"
                      priority={i === 0}
                      className={`w-full h-full object-cover block${item.thumbDark ? ' dark:hidden' : ''}`}
                    />
                    {item.thumbDark && (
                      <Image
                        src={item.thumbDark}
                        alt=""
                        aria-hidden
                        width={1600}
                        height={1200}
                        sizes="(max-width: 768px) 100vw, 600px"
                        priority={i === 0}
                        className="w-full h-full object-cover hidden dark:block"
                      />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 p-6 flex-1">
                  {/* Tags — type + industry only, no timeline */}
                  <ul className="flex flex-wrap gap-2 list-none" role="list">
                    {typeTags.map(tag => (
                      <li key={tag} className="px-2.5 py-0.5 rounded-tag bg-accent-soft text-on-accent-soft text-small">
                        {tag}
                      </li>
                    ))}
                    <li className="px-2.5 py-0.5 rounded-tag border border-border text-foreground-muted text-small">
                      {industryTag}
                    </li>
                  </ul>

                  {/* Title — stretched link covers entire card via ::after */}
                  <NextLink
                    href={href}
                    className="focus-visible:outline-none after:absolute after:inset-0 after:z-[1] after:content-['']"
                  >
                    <h3 className="text-h3 font-bold text-foreground transition-colors duration-[250ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:text-accent">
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
                    <ArrowIcon
                      size={14}
                      className="motion-safe:transition-transform motion-safe:duration-[250ms] motion-safe:group-hover:translate-x-[5px] rtl:motion-safe:group-hover:-translate-x-[5px]"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </CardRail>

        {/* All work — mobile only */}
        <NextLink
          href={ar ? '/ar/work' : '/work'}
          className="md:hidden mt-6 flex items-center justify-center gap-1.5 w-full h-12 rounded-pill border-2 border-foreground text-foreground text-small font-medium hover:bg-foreground/5 transition-colors duration-150"
        >
          {t.allWork}
          <ArrowIcon size={14} />
        </NextLink>
      </Container>
    </section>
  );
}
