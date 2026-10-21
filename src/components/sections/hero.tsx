import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const COPY = {
  en: {
    label: 'Introduction',
    h1: '[HEADLINE]',
    sub: '[SUBLINE]',
    primary: { label: 'See my work', href: '/#work' },
    cta: {
      label: 'Get a quote',
      href: 'mailto:hello@nourawafik.com?subject=Quote%20Request',
    },
  },
  ar: {
    label: 'مقدمة',
    h1: '[HEADLINE]',
    sub: '[SUBLINE]',
    primary: { label: 'شوف أعمالي', href: '/ar#work' },
    cta: {
      label: 'اطلب عرض سعر',
      href: 'mailto:hello@nourawafik.com?subject=طلب%20عرض%20سعر',
    },
  },
} as const;

export function Hero({ locale = 'en' }: { locale?: keyof typeof COPY }) {
  const t = COPY[locale];
  const ar = locale === 'ar';

  return (
    <section
      aria-label={t.label}
      className="flex min-h-[calc(100svh-3.5rem)] items-center py-12 md:py-24"
    >
      <Container>
        <div className="flex flex-col gap-8 max-w-[48rem]">
          <h1
            className={cn(
              'text-h1 font-bold text-foreground text-balance',
              ar ? 'leading-[1.35]' : 'leading-[1.15] tracking-[-0.02em]'
            )}
          >
            {t.h1}
          </h1>

          <p
            className={cn(
              'text-body-lg text-foreground-muted max-w-[36rem]',
              ar ? 'leading-[1.8]' : 'leading-[1.6]'
            )}
          >
            {t.sub}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button href={t.cta.href} variant="highlight" external>
              {t.cta.label}
            </Button>
            <Button href={t.primary.href} variant="secondary">
              {t.primary.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
