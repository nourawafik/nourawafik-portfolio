import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';

const TAGS = {
  en: ['Brand', 'Websites', 'Digital products', 'Content'],
  ar: ['هوية بصرية', 'مواقع', 'منتجات رقمية', 'محتوى'],
} as const;

const COPY = {
  en: {
    h1Line1: 'Bring your idea',
    h1Line2: 'to life',
    sub: 'Brands, websites and digital products in Arabic and English, for startups launching and companies scaling across Egypt and the Gulf.',
    cta: { label: 'Get a quote', href: '/quote' },
    secondary: { label: 'See my work', href: '/work' },
    noonAlt: 'Noon, the brand mascot, waking up from the logo with a glowing head',
    stickers: {
      hi: 'Hi!',
      open: 'Open for new projects',
      bilingual: 'English + عربي',
    },
  },
  ar: {
    h1Line1: 'اجعل فكرتك',
    h1Line2: 'ترى النور',
    sub: 'منتجات رقمية ومواقع وهويات بصرية بالعربي والإنجليزي، للشركات الناشئة والشركات التي تتوسع في مصر والخليج.',
    cta: { label: 'اطلب عرض سعر', href: '/ar/quote' },
    secondary: { label: 'شاهد أعمالي', href: '/ar/work' },
    noonAlt: 'نون، شخصية العلامة، تستيقظ من الشعار ورأسها يضيء',
    stickers: {
      hi: 'أهلا!',
      open: 'متاحة لمشاريع جديدة',
      bilingual: 'عربي + English',
    },
  },
} as const;

export function Hero({ locale = 'en' }: { locale?: keyof typeof COPY }) {
  const t = COPY[locale];
  const tags = TAGS[locale];
  const ar = locale === 'ar';

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="py-16 md:py-24"
    >
      <Container>
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16">
          {/* Text column */}
          <div className="flex flex-col gap-6 md:flex-1 md:max-w-[560px]">
            {/* H1 */}
            <h1
              id="hero-heading"
              className={`font-extrabold text-foreground ${ar ? 'text-[2.25rem] md:text-[4rem] leading-[1.3] md:leading-[1.15]' : 'text-[2.5rem] md:text-[4.5rem] leading-[1.15] md:leading-[1.1] tracking-[-0.02em]'}`}
            >
              {t.h1Line1}
              <br className="hidden md:block" />
              {' '}{t.h1Line2}
              <span className="text-highlight" aria-hidden>.</span>
            </h1>

            {/* Subline */}
            <p
              className={`text-[1.125rem] md:text-[1.25rem] text-foreground-muted max-w-[34rem] ${ar ? 'leading-[1.8]' : 'leading-[1.6]'}`}
            >
              {t.sub}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button href={t.cta.href} variant="highlight">
                {t.cta.label}
              </Button>
              <Button href={t.secondary.href} variant="secondary">
                {t.secondary.label}
              </Button>
            </div>
          </div>

          {/* Art card */}
          <div
            className="relative w-full md:w-[480px] md:shrink-0 max-md:h-[380px] md:h-[480px] max-md:rounded-[32px] md:rounded-[40px] overflow-hidden"
            style={{
              backgroundColor: 'var(--teal-fixed)',
              backgroundImage: 'url(/patterns/noon-arcs.svg)',
              backgroundSize: '80px 60px',
              backgroundRepeat: 'repeat',
            }}
          >
            {/* Noon animated logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <picture>
                <source media="(prefers-reduced-motion: reduce)" srcSet="/mascot/hero-noon-static.svg" />
                <img
                  src="/mascot/hero-noon-animated.svg"
                  alt={t.noonAlt}
                  width={340}
                  height={340}
                />
              </picture>
            </div>

            {/* Sticker: Hi! — top start corner */}
            <div
              className="absolute top-6 start-6 px-3 py-1.5 bg-white text-small font-medium rounded-pill border-[3px] motion-safe:animate-float"
              style={{ '--sticker-rotate': '-3deg', animationDelay: '0s', color: 'var(--ink-fixed)', borderColor: 'var(--ink-fixed)' } as React.CSSProperties}
              aria-hidden
            >
              {t.stickers.hi}
            </div>

            {/* Sticker: Open for new projects — bottom end corner */}
            <div
              className="absolute bottom-6 end-6 px-3 py-1.5 bg-highlight text-small font-medium rounded-pill border-[3px] motion-safe:animate-float flex items-center gap-1.5"
              style={{ '--sticker-rotate': '2deg', animationDelay: '0.8s', color: 'var(--ink-fixed)', borderColor: 'var(--ink-fixed)' } as React.CSSProperties}
              aria-hidden
            >
              <span className="w-2 h-2 rounded-full bg-success shrink-0" />
              {t.stickers.open}
            </div>

            {/* Sticker: English + عربي — start side, middle */}
            <div
              className="absolute top-1/2 start-4 -translate-y-1/2 px-3 py-1.5 bg-coral text-small font-medium rounded-pill border-[3px] motion-safe:animate-float"
              style={{ '--sticker-rotate': '-6deg', animationDelay: '1.6s', color: 'var(--ink-fixed)', borderColor: 'var(--ink-fixed)' } as React.CSSProperties}
              aria-hidden
            >
              {t.stickers.bilingual}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
