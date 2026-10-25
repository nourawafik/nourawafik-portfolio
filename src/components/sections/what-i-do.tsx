import NextLink from 'next/link';
import { work, countItems } from '@/content/work';

const COPY = {
  en: {
    eyebrow: 'What I do',
    h2: 'From a first logo to a full product',
    line: 'Everything in Arabic and English from the start. Every project gets a quote that fits what it needs.',
    cta: 'Get a quote',
    ctaSubject: 'Project inquiry from nourawafik.com',
    ctaBody: "Hi Noura,\n\nI'd like a quote for:\n- What I need:\n- Company or project:\n- Language: Arabic / English / both\n- When I need it:\n\nThanks,",
  },
  ar: {
    eyebrow: 'بعمل إيه',
    h2: 'من أول لوجو لحد منتج كامل',
    line: 'كل حاجة بالعربي والإنجليزي من الأول. لكل مشروع عرض سعر على حسب احتياجه.',
    cta: 'اطلب عرض سعر',
    ctaSubject: 'طلب عرض سعر من الموقع',
    ctaBody: 'أهلا نورا،\n\nعايز عرض سعر لـ:\n- محتاج إيه:\n- الشركة أو المشروع:\n- اللغة: عربي / إنجليزي / الاتنين\n- محتاجه إمتى:\n\nشكرا،',
  },
} as const;

interface Card {
  titleEn: string; titleAr: string;
  lineEn: string;  lineAr: string;
  illustration: string;
  href: string;
  ariaLabelEn: string; ariaLabelAr: string;
}

function buildCards(locale: 'en' | 'ar'): Card[] {
  const ar = locale === 'ar';
  const brandCount   = countItems('brand',  null, null);
  const siteCount    = countItems('site',   null, null);
  const digitalCount = work.filter(w => !w.parent && (w.types.includes('mobile') || w.types.includes('web'))).length;
  const dsCount      = countItems(null, null, 'ds');

  const mailSubjectBrand = encodeURIComponent(ar ? 'عن: هوية بصرية'           : 'About: Brand identity');
  const mailSubjectSite  = encodeURIComponent(ar ? 'عن: مواقع وصفحات هبوط'   : 'About: Websites & landing pages');

  return [
    {
      titleEn: 'Brand identity',
      titleAr: 'هوية بصرية',
      lineEn:  'Logo, colours and type in Arabic and English, with a guide for using them.',
      lineAr:  'لوجو وألوان وخطوط بالعربي والإنجليزي، ودليل لاستخدامهم.',
      illustration: '/mascot/noon-brand.svg',
      href: brandCount > 0
        ? (ar ? '/ar/work?type=brand' : '/work?type=brand')
        : `mailto:hello@nourawafik.com?subject=${mailSubjectBrand}`,
      ariaLabelEn: brandCount > 0 ? 'Brand identity, see the work' : 'Brand identity, email Noura about it',
      ariaLabelAr: brandCount > 0 ? 'هوية بصرية، شوف الأعمال' : 'هوية بصرية، ابعت لنورا عنها',
    },
    {
      titleEn: 'Websites & landing pages',
      titleAr: 'مواقع وصفحات هبوط',
      lineEn:  'Fast bilingual websites that are easy to update.',
      lineAr:  'مواقع بلغتين، سريعة وسهل تحديثها.',
      illustration: '/mascot/noon-site.svg',
      href: siteCount > 0
        ? (ar ? '/ar/work?type=site' : '/work?type=site')
        : `mailto:hello@nourawafik.com?subject=${mailSubjectSite}`,
      ariaLabelEn: siteCount > 0 ? 'Websites & landing pages, see the work' : 'Websites & landing pages, email Noura about it',
      ariaLabelAr: siteCount > 0 ? 'مواقع وصفحات هبوط، شوف الأعمال' : 'مواقع وصفحات هبوط، ابعت لنورا عنها',
    },
    {
      titleEn: 'Digital products',
      titleAr: 'منتجات رقمية',
      lineEn:  'Web and mobile apps, from the first flow to developer-ready screens.',
      lineAr:  'تطبيقات ويب وموبايل، من أول فلو لحد شاشات جاهزة للتنفيذ.',
      illustration: '/mascot/noon-product.svg',
      href: digitalCount > 0 ? (ar ? '/ar/work' : '/work') : `mailto:hello@nourawafik.com`,
      ariaLabelEn: 'Digital products, see the work',
      ariaLabelAr: 'منتجات رقمية، شوف الأعمال',
    },
    {
      titleEn: 'Design systems',
      titleAr: 'أنظمة تصميم',
      lineEn:  'Components and tokens that keep a product consistent as it grows.',
      lineAr:  'مكونات وتوكنز بتخلي المنتج متسق وهو بيكبر.',
      illustration: '/mascot/noon-ds.svg',
      href: dsCount > 0
        ? (ar ? '/ar/work?feature=ds' : '/work?feature=ds')
        : `mailto:hello@nourawafik.com`,
      ariaLabelEn: dsCount > 0 ? 'Design systems, see the work' : 'Design systems, email Noura about it',
      ariaLabelAr: dsCount > 0 ? 'أنظمة تصميم، شوف الأعمال' : 'أنظمة تصميم، ابعت لنورا عنها',
    },
  ];
}

interface WhatIDoProps {
  locale?: 'en' | 'ar';
}

export function WhatIDo({ locale = 'en' }: WhatIDoProps) {
  const t  = COPY[locale];
  const ar = locale === 'ar';
  const cards = buildCards(locale);

  const quoteHref = `mailto:hello@nourawafik.com?subject=${encodeURIComponent(t.ctaSubject)}&body=${encodeURIComponent(t.ctaBody)}`;

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-16 md:py-24"
    >
      <div className="mx-auto w-full px-4 md:px-12 max-w-[1200px]">
        {/* Header */}
        <div className="flex flex-col gap-3 mb-10 md:mb-14 md:flex-row md:items-end md:justify-between">
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
        <ul
          className="flex gap-5 overflow-x-auto -mx-4 px-4 pb-3 [scroll-snap-type:x_mandatory] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-4 md:gap-5 md:overflow-visible md:mx-0 md:px-0 md:pb-0"
          role="list"
        >
          {cards.map(card => {
            const title    = ar ? card.titleAr    : card.titleEn;
            const line     = ar ? card.lineAr     : card.lineEn;
            const ariaLabel = ar ? card.ariaLabelAr : card.ariaLabelEn;
            const isExternal = card.href.startsWith('mailto');

            const cardContent = (
              <>
                {/* Illustration tile */}
                <div
                  className="w-full rounded-[16px] flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: '#E6F4F3', aspectRatio: '1' }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.illustration}
                    alt=""
                    aria-hidden
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2 mt-4">
                  <h3 className={`text-h3 font-bold text-foreground ${ar ? 'leading-[1.4]' : 'leading-[1.2]'}`}>
                    {title}
                  </h3>
                  <p className={`text-body text-foreground-muted ${ar ? 'leading-[1.8]' : 'leading-[1.65]'}`}>
                    {line}
                  </p>
                </div>
              </>
            );

            const cardClass = [
              'card-shadow group flex flex-col rounded-card p-5 bg-surface border border-border',
              'max-md:shrink-0 max-md:[flex:0_0_80%] max-md:[scroll-snap-align:start]',
              'motion-safe:transition-transform motion-safe:duration-[350ms] motion-safe:ease-[cubic-bezier(.2,.8,.2,1)]',
              'motion-safe:hover:-translate-y-1',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
            ].join(' ');

            return (
              <li key={card.titleEn} role="listitem">
                {isExternal ? (
                  <a
                    href={card.href}
                    aria-label={ariaLabel}
                    className={cardClass}
                  >
                    {cardContent}
                  </a>
                ) : (
                  <NextLink
                    href={card.href}
                    aria-label={ariaLabel}
                    className={cardClass}
                  >
                    {cardContent}
                  </NextLink>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
