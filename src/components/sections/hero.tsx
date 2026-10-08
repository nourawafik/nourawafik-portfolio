import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MirrorGraphic } from './mirror-graphic';

const COPY = {
  en: {
    label: 'Introduction',
    h1: 'I design product systems that work in Arabic and English',
    subhead: 'Senior product designer — from research to shipped, web and mobile',
    body: 'Multi-role SaaS platforms, healthtech products and AI tools, for teams in Saudi Arabia, Egypt and the US. Based in Cairo.',
    primary: { label: 'View work', href: '/#work' },
    secondary: { label: 'Get in touch', href: '/#contact' },
    graphic: 'The same interface layout shown left-to-right and right-to-left, mirrored across a central axis.',
  },
  ar: {
    label: 'مقدمة',
    h1: 'أصمم أنظمة منتجات تعمل بالعربية والإنجليزية',
    subhead: 'مصممة منتجات أولى — من البحث إلى الإطلاق، على الويب والتطبيقات',
    body: 'أعمل على منصات SaaS متعددة الأدوار ومنتجات الصحة الرقمية وأدوات الذكاء الاصطناعي، لفرق في السعودية ومصر والولايات المتحدة.',
    primary: { label: 'عرض الأعمال', href: '/ar#work' },
    secondary: { label: 'التواصل', href: '/ar#contact' },
    graphic: 'التخطيط نفسه من اليسار إلى اليمين ومن اليمين إلى اليسار، معكوسًا حول محور في المنتصف.',
  },
} as const;

export function Hero({ locale = 'en' }: { locale?: keyof typeof COPY }) {
  const t = COPY[locale];
  const ar = locale === 'ar';

  return (
    <section
      aria-label={t.label}
      className="flex min-h-[calc(100svh-3.5rem)] items-center py-6 md:py-16"
    >
      <Container>
        {/* Graphic bottom-aligns with the buttons on desktop: support text and graphic share one band, the H1 rises above it. */}
        <div className="grid gap-8 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:items-end md:gap-16">
          <div className="flex flex-col">
            <h1
              className={cn(
                'text-hero font-semibold text-foreground text-balance',
                ar ? 'leading-[1.3]' : 'leading-[1.05] tracking-[-0.03em]'
              )}
            >
              {t.h1}
            </h1>
            <p
              className={cn(
                'mt-8 text-subtitle text-foreground md:mt-10',
                ar ? 'leading-[1.85]' : 'leading-[1.4]'
              )}
            >
              {t.subhead}
            </p>
            <p
              className={cn(
                'mt-3 max-w-[34rem] text-body text-foreground-muted',
                ar ? 'leading-[1.85]' : 'leading-[1.65]'
              )}
            >
              {t.body}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href={t.primary.href} variant="primary">
                {t.primary.label}
              </Button>
              <Button href={t.secondary.href} variant="ghost">
                {t.secondary.label}
              </Button>
            </div>
          </div>

          <MirrorGraphic label={t.graphic} className="w-full md:max-w-[30rem] md:justify-self-end" />
        </div>
      </Container>
    </section>
  );
}
