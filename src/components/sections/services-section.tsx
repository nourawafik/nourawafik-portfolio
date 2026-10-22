import type { Offer } from '@/content/offers';

interface ServiceCard {
  id: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  featured?: boolean;
}

const cards: ServiceCard[] = [
  {
    id: 'launch',
    titleEn: 'Launch package',
    titleAr: 'باقة الإطلاق',
    descEn: 'Brand identity, a bilingual website and launch posts. Everything you need to go live.',
    descAr: 'هوية بصرية، وموقع بلغتين، وبوستات للإطلاق. كل اللي محتاجه عشان تطلع للناس.',
    featured: true,
  },
  {
    id: 'brand',
    titleEn: 'Brand identity',
    titleAr: 'هوية بصرية',
    descEn: 'Logo, colours, Arabic and English type, and a usage guide.',
    descAr: 'لوجو، وألوان، وخطوط عربي وإنجليزي، ودليل استخدام.',
  },
  {
    id: 'website',
    titleEn: 'Bilingual website',
    titleAr: 'موقع بلغتين',
    descEn: 'Design and build of an Arabic and English website that is fast and easy to update.',
    descAr: 'تصميم وتطوير موقع بالعربي والإنجليزي، سريع وسهل تعدليه.',
  },
  {
    id: 'product',
    titleEn: 'Product design',
    titleAr: 'تصميم منتجات',
    descEn: 'UX and UI for an app or SaaS, or an RTL review of an existing product.',
    descAr: 'تجربة وواجهات لتطبيق أو منصة SaaS، أو مراجعة RTL لمنتج موجود.',
  },
  {
    id: 'content',
    titleEn: 'Content subscription',
    titleAr: 'اشتراك محتوى',
    descEn: 'Social media design and copy, every month.',
    descAr: 'تصميم وكتابة محتوى السوشيال كل شهر.',
  },
  {
    id: 'support',
    titleEn: 'Design support',
    titleAr: 'دعم تصميم',
    descEn: 'A set number of design requests each month for your team.',
    descAr: 'عدد ثابت من طلبات التصميم كل شهر لفريقك.',
  },
];

const COPY = {
  en: {
    eyebrow: 'Services',
    h2: 'From a first logo to a full product',
    allInOne: 'All in one',
    quote: 'Get a quote',
    quoteSubjectPrefix: 'Quote request: ',
    offerUntil: (date: string) => `Offer until ${date}`,
  },
  ar: {
    eyebrow: 'الخدمات',
    h2: 'من أول هوية لحد منتج كامل',
    allInOne: 'كل حاجة في باقة',
    quote: 'اطلب عرض سعر',
    quoteSubjectPrefix: 'طلب عرض سعر: ',
    offerUntil: (date: string) => `عرض لحد ${date}`,
  },
} as const;

interface ServicesSectionProps {
  locale?: 'en' | 'ar';
  activeOffer?: Offer | null;
}

function QuoteLink({
  href,
  label,
  ar,
  featured,
}: {
  href: string;
  label: string;
  ar: boolean;
  featured?: boolean;
}) {
  return (
    <a
      href={href}
      className={`mt-auto inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold transition-opacity hover:opacity-80 ${
        featured ? 'text-highlight' : 'text-accent'
      }`}
    >
      {ar && <span aria-hidden>←</span>}
      {label}
      {!ar && <span aria-hidden>→</span>}
    </a>
  );
}

export function ServicesSection({ locale = 'en', activeOffer }: ServicesSectionProps) {
  const t = COPY[locale];
  const ar = locale === 'ar';

  const offerDate = activeOffer
    ? new Intl.DateTimeFormat(ar ? 'ar-EG' : 'en-GB', {
        day: 'numeric',
        month: 'long',
      }).format(new Date(activeOffer.endsAt))
    : null;

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-16 md:py-24"
    >
      <div className="mx-auto w-full px-6 md:px-12 max-w-[1200px]">
        <div className="flex flex-col gap-2 mb-10 md:mb-14">
          <p className="text-[0.9375rem] font-medium text-on-accent-soft">{t.eyebrow}</p>
          <h2
            id="services-heading"
            className={`text-h2 font-bold text-foreground ${ar ? 'leading-[1.4]' : 'leading-[1.2]'}`}
          >
            {t.h2}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card) => {
            const isOffer = activeOffer?.packageId === card.id;
            const title = ar ? card.titleAr : card.titleEn;
            const desc = ar ? card.descAr : card.descEn;
            const quoteSubject = encodeURIComponent(
              t.quoteSubjectPrefix + (ar ? card.titleAr : card.titleEn)
            );
            const quoteHref = `mailto:hello@nourawafik.com?subject=${quoteSubject}`;

            if (card.featured) {
              return (
                <article
                  key={card.id}
                  className="flex flex-col gap-4 rounded-card p-6 relative text-white bg-foreground dark:bg-sunk dark:ring-2 dark:ring-inset dark:ring-highlight"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-h3 font-bold text-white">{title}</h3>
                    <span className="shrink-0 rounded-pill px-2.5 py-0.5 bg-highlight text-foreground text-small font-medium">
                      {t.allInOne}
                    </span>
                  </div>
                  <p className="text-body flex-1" style={{ color: 'var(--muted-dark, #A9C2C4)' }}>
                    {desc}
                  </p>
                  <QuoteLink href={quoteHref} label={t.quote} ar={ar} featured />
                </article>
              );
            }

            return (
              <article
                key={card.id}
                className={`flex flex-col gap-4 rounded-card p-6 bg-surface border-2 transition-colors ${
                  isOffer ? 'border-coral' : 'border-border'
                }`}
              >
                {isOffer && offerDate && (
                  <span className="self-start rounded-pill px-2.5 py-0.5 bg-background border border-coral text-foreground text-small font-medium">
                    {t.offerUntil(offerDate)}
                  </span>
                )}
                <h3 className="text-h3 font-bold text-foreground">{title}</h3>
                <p className={`text-body text-foreground-muted flex-1 ${ar ? 'leading-[1.8]' : 'leading-[1.65]'}`}>
                  {desc}
                </p>
                <QuoteLink href={quoteHref} label={t.quote} ar={ar} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
