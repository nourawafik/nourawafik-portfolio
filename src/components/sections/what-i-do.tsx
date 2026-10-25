import NextLink from 'next/link';
import { work, countItems } from '@/content/work';
import { ArrowIcon } from '@/components/ui/arrow-icon';

const COPY = {
  en: {
    eyebrow: 'What I do',
    h2: 'From a first logo to a full product',
    line: 'Everything in Arabic and English from the start. Every project gets a quote that fits what it needs.',
    cta: 'Get a quote',
    seeWork: (n: number) => `See the work · ${n}`,
    askAbout: 'Ask about it',
  },
  ar: {
    eyebrow: 'بعمل إيه',
    h2: 'من أول لوجو لحد منتج كامل',
    line: 'كل حاجة بالعربي والإنجليزي من الأول. لكل مشروع عرض سعر على حسب احتياجه.',
    cta: 'اطلب عرض سعر',
    seeWork: (n: number) => `شوف الأعمال · ${n}`,
    askAbout: 'اسأل عنها',
  },
} as const;

function BrandIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="2"/>
      <path d="M14 6v16M6 14h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="14" cy="14" r="2.5" fill="currentColor"/>
    </svg>
  );
}

function SiteIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <rect x="3" y="5" width="22" height="18" rx="3" stroke="currentColor" strokeWidth="2"/>
      <path d="M3 10h22" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 7.5h.5M11 7.5h.5M14 7.5h.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 15h12M8 19h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function ProductIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <rect x="3" y="5" width="14" height="18" rx="3" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 22h11a3 3 0 0 0 3-3V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="10" cy="21" r="1.25" fill="currentColor"/>
    </svg>
  );
}

function DSIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <rect x="3" y="3" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="2"/>
      <rect x="16" y="3" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="2"/>
      <rect x="3" y="16" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="2"/>
      <rect x="16" y="16" width="9" height="9" rx="4.5" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

interface Card {
  titleEn: string; titleAr: string;
  lineEn: string;  lineAr: string;
  icon: React.ReactNode;
  workHref: string | null;
  count: number;
  mailSubjectEn: string; mailSubjectAr: string;
}

function buildCards(): Card[] {
  const brandCount   = countItems('brand',  null, null);
  const siteCount    = countItems('site',   null, null);
  const digitalCount = work.filter(w => !w.parent && (w.types.includes('mobile') || w.types.includes('web'))).length;
  const dsCount      = countItems(null, null, 'ds');

  return [
    {
      titleEn: 'Brand identity',
      titleAr: 'هوية بصرية',
      lineEn:  'Logo, colours and type in Arabic and English, with a guide for using them.',
      lineAr:  'لوجو وألوان وخطوط بالعربي والإنجليزي، ودليل لاستخدامهم.',
      icon:    <BrandIcon />,
      workHref:     brandCount > 0 ? '/work?type=brand' : null,
      count:        brandCount,
      mailSubjectEn: 'About: Brand identity',
      mailSubjectAr: 'عن: هوية بصرية',
    },
    {
      titleEn: 'Websites & landing pages',
      titleAr: 'مواقع وصفحات هبوط',
      lineEn:  'Fast bilingual websites that are easy to update.',
      lineAr:  'مواقع بلغتين، سريعة وسهل تحديثها.',
      icon:    <SiteIcon />,
      workHref:     siteCount > 0 ? '/work?type=site' : null,
      count:        siteCount,
      mailSubjectEn: 'About: Websites & landing pages',
      mailSubjectAr: 'عن: مواقع وصفحات هبوط',
    },
    {
      titleEn: 'Digital products',
      titleAr: 'منتجات رقمية',
      lineEn:  'Web and mobile apps, from the first flow to developer-ready screens.',
      lineAr:  'تطبيقات ويب وموبايل، من أول فلو لحد شاشات جاهزة للتنفيذ.',
      icon:    <ProductIcon />,
      workHref:     digitalCount > 0 ? '/work' : null,
      count:        digitalCount,
      mailSubjectEn: 'About: Digital products',
      mailSubjectAr: 'عن: منتجات رقمية',
    },
    {
      titleEn: 'Design systems',
      titleAr: 'أنظمة تصميم',
      lineEn:  'Components and tokens that keep a product consistent as it grows.',
      lineAr:  'مكونات وتوكنز بتخلي المنتج متسق وهو بيكبر.',
      icon:    <DSIcon />,
      workHref:     dsCount > 0 ? '/work?feature=ds' : null,
      count:        dsCount,
      mailSubjectEn: 'About: Design systems',
      mailSubjectAr: 'عن: أنظمة تصميم',
    },
  ];
}

interface WhatIDoProps {
  locale?: 'en' | 'ar';
}

export function WhatIDo({ locale = 'en' }: WhatIDoProps) {
  const t  = COPY[locale];
  const ar = locale === 'ar';
  const cards = buildCards();

  const quoteSubject = encodeURIComponent(ar ? 'طلب عرض سعر' : 'Quote request');
  const quoteHref    = `mailto:hello@nourawafik.com?subject=${quoteSubject}`;

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-16 md:py-24"
    >
      <div className="mx-auto w-full px-4 md:px-12 max-w-[1200px]">
        {/* Header */}
        <div className={`flex flex-col gap-3 mb-10 md:mb-14 md:flex-row md:items-end md:justify-between`}>
          <div className="flex flex-col gap-2">
            <p className="text-[0.9375rem] font-medium text-on-accent-soft">{t.eyebrow}</p>
            <h2
              id="services-heading"
              className={`text-h2 font-bold text-foreground ${ar ? 'leading-[1.4]' : 'leading-[1.2]'}`}
            >
              {t.h2}
            </h2>
            <p className={`text-body text-foreground-muted max-w-[560px] ${ar ? 'leading-[1.8]' : 'leading-[1.65]'}`}>
              {t.line}
            </p>
          </div>
          <a
            href={quoteHref}
            className="self-start md:self-end inline-flex items-center justify-center rounded-pill px-5 py-3 text-[0.9375rem] font-semibold text-on-highlight transition-opacity hover:opacity-85 active:opacity-70 shrink-0 md:ms-8"
            style={{ backgroundColor: 'var(--highlight)' }}
          >
            {t.cta}
          </a>
        </div>

        {/* Cards — 4 col desktop, mobile rail */}
        <div
          className="flex gap-5 overflow-x-auto -mx-4 px-4 pb-3 [scroll-snap-type:x_mandatory] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-4 md:gap-5 md:overflow-visible md:mx-0 md:px-0 md:pb-0"
          role="list"
        >
          {cards.map(card => {
            const title = ar ? card.titleAr : card.titleEn;
            const line  = ar ? card.lineAr  : card.lineEn;
            const mailSubject = encodeURIComponent(ar ? card.mailSubjectAr : card.mailSubjectEn);
            const linkHref = card.workHref ?? `mailto:hello@nourawafik.com?subject=${mailSubject}`;
            const linkLabel = card.workHref ? t.seeWork(card.count) : t.askAbout;
            const isExternal = linkHref.startsWith('mailto');

            return (
              <article
                key={card.titleEn}
                role="listitem"
                className="card-shadow relative group flex flex-col gap-4 rounded-card p-6 bg-surface border border-border max-md:shrink-0 max-md:[flex:0_0_80%] max-md:[scroll-snap-align:start]"
              >
                {/* Icon tile */}
                <div className="w-13 h-13 rounded-xl flex items-center justify-center bg-accent-soft text-accent"
                  style={{ width: '52px', height: '52px' }}>
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className={`text-h3 font-bold text-foreground ${ar ? 'leading-[1.4]' : 'leading-[1.2]'}`}>
                  {title}
                </h3>

                {/* Line */}
                <p className={`text-body text-foreground-muted flex-1 ${ar ? 'leading-[1.8]' : 'leading-[1.65]'}`}>
                  {line}
                </p>

                {/* Link */}
                {isExternal ? (
                  <a
                    href={linkHref}
                    className="mt-auto inline-flex items-center gap-1.5 text-small text-foreground-muted hover:text-accent transition-colors duration-150 relative z-[1] after:absolute after:inset-[-24px] after:z-[-1] after:content-['']"
                  >
                    {linkLabel}
                    <ArrowIcon size={14} />
                  </a>
                ) : (
                  <NextLink
                    href={linkHref}
                    className="mt-auto inline-flex items-center gap-1.5 text-small text-accent relative z-[1] after:absolute after:inset-[-24px] after:z-[-1] after:content-['']"
                  >
                    {linkLabel}
                    <ArrowIcon
                      size={14}
                      className="motion-safe:transition-transform motion-safe:duration-[350ms] motion-safe:group-hover:translate-x-[5px] rtl:motion-safe:group-hover:-translate-x-[5px]"
                    />
                  </NextLink>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
