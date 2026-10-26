import NextLink from 'next/link';
import { work, countItems } from '@/content/work';

const COPY = {
  en: {
    eyebrow: 'What I do',
    h2: 'From a first logo to a full product',
    line: 'Everything in Arabic and English from the start. Every project gets a quote that fits what it needs.',
    cta: 'Get a quote',
  },
  ar: {
    eyebrow: 'ماذا أقدم',
    h2: 'من الشعار إلى المنتج الكامل',
    line: 'كل شيء بالعربي والإنجليزي من البداية، ولكل مشروع عرض سعر يناسب احتياجه.',
    cta: 'اطلب عرض سعر',
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

  return [
    {
      titleEn: 'Brand identity',
      titleAr: 'هوية بصرية',
      lineEn:  'Logo, colours and type in Arabic and English, with a guide for using them.',
      lineAr:  'شعار وألوان وخطوط بالعربي والإنجليزي، مع دليل لاستخدامها.',
      illustration: '/mascot/noon-brand.svg',
      href: brandCount > 0
        ? (ar ? '/ar/work?type=brand' : '/work?type=brand')
        : (ar ? '/ar/quote?service=brand' : '/quote?service=brand'),
      ariaLabelEn: brandCount > 0 ? 'Brand identity, see the work' : 'Brand identity, get a quote',
      ariaLabelAr: brandCount > 0 ? 'هوية بصرية، شاهد الأعمال' : 'هوية بصرية، اطلب عرض سعر',
    },
    {
      titleEn: 'Websites & landing pages',
      titleAr: 'مواقع وصفحات هبوط',
      lineEn:  'Fast bilingual websites that are easy to update.',
      lineAr:  'مواقع بلغتين، سريعة وسهلة التحديث.',
      illustration: '/mascot/noon-site.svg',
      href: siteCount > 0
        ? (ar ? '/ar/work?type=site' : '/work?type=site')
        : (ar ? '/ar/quote?service=site' : '/quote?service=site'),
      ariaLabelEn: siteCount > 0 ? 'Websites & landing pages, see the work' : 'Websites & landing pages, get a quote',
      ariaLabelAr: siteCount > 0 ? 'مواقع وصفحات هبوط، شاهد الأعمال' : 'مواقع وصفحات هبوط، اطلب عرض سعر',
    },
    {
      titleEn: 'Digital products',
      titleAr: 'منتجات رقمية',
      lineEn:  'Web and mobile apps, from the first flow to developer-ready screens.',
      lineAr:  'تطبيقات ويب وجوال، من أول تصور لرحلة المستخدم حتى شاشات جاهزة للتنفيذ.',
      illustration: '/mascot/noon-product.svg',
      href: digitalCount > 0 ? (ar ? '/ar/work' : '/work') : (ar ? '/ar/quote' : '/quote'),
      ariaLabelEn: 'Digital products, see the work',
      ariaLabelAr: 'منتجات رقمية، شاهد الأعمال',
    },
    {
      titleEn: 'Design systems',
      titleAr: 'أنظمة تصميم',
      lineEn:  'Components and tokens that keep a product consistent as it grows.',
      lineAr:  'مكونات وتوكنز تحافظ على اتساق المنتج وهو يكبر.',
      illustration: '/mascot/noon-ds.svg',
      href: dsCount > 0
        ? (ar ? '/ar/work?feature=ds' : '/work?feature=ds')
        : (ar ? '/ar/quote' : '/quote'),
      ariaLabelEn: dsCount > 0 ? 'Design systems, see the work' : 'Design systems, get a quote',
      ariaLabelAr: dsCount > 0 ? 'أنظمة تصميم، شاهد الأعمال' : 'أنظمة تصميم، اطلب عرض سعر',
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

  const quoteHref = ar ? '/ar/quote' : '/quote';

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
          <NextLink
            href={quoteHref}
            className="self-start md:self-end inline-flex items-center justify-center rounded-pill px-5 py-3 text-[0.9375rem] font-semibold text-on-highlight transition-opacity hover:opacity-85 active:opacity-70 shrink-0 md:ms-8"
            style={{ backgroundColor: 'var(--highlight)' }}
          >
            {t.cta}
          </NextLink>
        </div>

        {/* Cards — 4 col desktop, vertical list mobile */}
        <ul
          className="flex flex-col gap-3 md:grid md:grid-cols-4 md:gap-5"
          role="list"
        >
          {cards.map(card => {
            const title    = ar ? card.titleAr    : card.titleEn;
            const line     = ar ? card.lineAr     : card.lineEn;
            const ariaLabel = ar ? card.ariaLabelAr : card.ariaLabelEn;
            const isExternal = false;

            const cardContent = (
              <>
                {/* Illustration tile — desktop: full-width 120px | mobile: 84×84 */}
                <div
                  className="flex items-center justify-center overflow-hidden shrink-0 rounded-[18px] h-[84px] w-[84px] p-1.5 md:w-full md:h-[120px] md:p-3 md:mb-4"
                  style={{ backgroundColor: '#E6F4F3' }}
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
                <div className="flex flex-col gap-1.5 md:gap-2">
                  <h3 className={`font-bold text-foreground text-[1.125rem] leading-[1.2] md:text-h3 ${ar ? 'md:leading-[1.4]' : ''}`}>
                    {title}
                  </h3>
                  <p className={`text-foreground-muted text-[0.875rem] leading-[1.55] md:text-body ${ar ? 'md:leading-[1.8]' : 'md:leading-[1.65]'}`}>
                    {line}
                  </p>
                </div>
              </>
            );

            const cardClass = [
              'card-shadow group bg-surface border border-border',
              'grid grid-cols-[84px_1fr] gap-4 p-[14px_16px] rounded-[24px]',
              'md:flex md:flex-col md:p-5 md:rounded-card md:h-full',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
            ].join(' ');

            return (
              <li key={card.titleEn} role="listitem" className="md:h-full">
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
