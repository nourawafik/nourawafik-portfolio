import type { Offer } from '@/content/offers';

interface ServiceCard {
  id: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  priceEn: string;
  priceAr: string;
  featured?: boolean;
}

const cards: ServiceCard[] = [
  {
    id: 'launch',
    titleEn: 'Launch package',
    titleAr: 'باقة الإطلاق',
    descEn: 'Brand identity, a bilingual website and launch posts. Everything you need to go live.',
    descAr: 'هوية بصرية، وموقع بلغتين، وبوستات للإطلاق. كل اللي محتاجه عشان تطلع للناس.',
    priceEn: '[PRICE]',
    priceAr: '[PRICE]',
    featured: true,
  },
  {
    id: 'brand',
    titleEn: 'Brand identity',
    titleAr: 'هوية بصرية',
    descEn: 'Logo, colours, Arabic and English type, and a usage guide.',
    descAr: 'لوجو، وألوان، وخطوط عربي وإنجليزي، ودليل استخدام.',
    priceEn: '[PRICE]',
    priceAr: '[PRICE]',
  },
  {
    id: 'website',
    titleEn: 'Bilingual website',
    titleAr: 'موقع بلغتين',
    descEn: 'Design and build of an Arabic and English website that is fast and easy to update.',
    descAr: 'تصميم وتطوير موقع بالعربي والإنجليزي، سريع وسهل تعدليه.',
    priceEn: '[PRICE]',
    priceAr: '[PRICE]',
  },
  {
    id: 'product',
    titleEn: 'Product design',
    titleAr: 'تصميم منتجات',
    descEn: 'UX and UI for an app or SaaS, or an RTL review of an existing product.',
    descAr: 'تجربة وواجهات لتطبيق أو منصة SaaS، أو مراجعة RTL لمنتج موجود.',
    priceEn: '[PRICE]',
    priceAr: '[PRICE]',
  },
  {
    id: 'content',
    titleEn: 'Content subscription',
    titleAr: 'اشتراك محتوى',
    descEn: 'Social media design and copy, every month.',
    descAr: 'تصميم وكتابة محتوى السوشيال كل شهر.',
    priceEn: '[PRICE] / month',
    priceAr: '[PRICE] / شهريا',
  },
  {
    id: 'support',
    titleEn: 'Design support',
    titleAr: 'دعم تصميم',
    descEn: 'A set number of design requests each month for your team.',
    descAr: 'عدد ثابت من طلبات التصميم كل شهر لفريقك.',
    priceEn: '[PRICE] / month',
    priceAr: '[PRICE] / شهريا',
  },
];

const COPY = {
  en: {
    eyebrow: 'Services',
    h2: 'From a first logo to a full product',
    popular: 'Most popular',
    offerUntil: (date: string) => `Offer until ${date}`,
  },
  ar: {
    eyebrow: 'الخدمات',
    h2: 'من أول هوية لحد منتج كامل',
    popular: 'الأكتر طلبا',
    offerUntil: (date: string) => `عرض لحد ${date}`,
  },
} as const;

interface ServicesSectionProps {
  locale?: 'en' | 'ar';
  activeOffer?: Offer | null;
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
            const price = ar ? card.priceAr : card.priceEn;

            if (card.featured) {
              return (
                <article
                  key={card.id}
                  className="flex flex-col gap-4 rounded-card p-6 relative"
                  style={{ backgroundColor: 'var(--fg)', color: 'white' }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-h3 font-bold text-white">{title}</h3>
                    <span className="shrink-0 rounded-pill px-2.5 py-0.5 bg-highlight text-foreground text-small font-medium">
                      {t.popular}
                    </span>
                  </div>
                  <p className="text-body flex-1" style={{ color: 'var(--muted-dark, #A9C2C4)' }}>
                    {desc}
                  </p>
                  <p className="text-h3 font-bold text-highlight mt-auto">{price}</p>
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
                {isOffer && activeOffer ? (
                  <p className="mt-auto flex items-baseline gap-2">
                    <span className="text-h3 font-bold text-accent">{activeOffer.offerPrice}</span>
                    <del className="text-small text-foreground-subtle">{activeOffer.originalPrice}</del>
                  </p>
                ) : (
                  <p className="text-h3 font-bold text-accent mt-auto">{price}</p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
