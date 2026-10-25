import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { NextProjectCard } from '@/components/ui/next-project-card';
import { ArrowIcon } from '@/components/ui/arrow-icon';

export const metadata: Metadata = {
  title: 'ألفة: دراسة حالة، نورا وفيق',
  description:
    'تصميم تطبيق موبايل بالعربي والإنجليزي لجلسات الصحة النفسية في مجموعات صغيرة: تطبيق المشارك، والجلسات اللايف، واستوديو الميسر، ونظام تصميم.',
  alternates: {
    canonical: 'https://nourawafik.com/ar/work/ulfa',
    languages: {
      en: 'https://nourawafik.com/work/ulfa',
      ar: 'https://nourawafik.com/ar/work/ulfa',
    },
  },
  openGraph: {
    title: 'ألفة: دراسة حالة، نورا وفيق',
    description:
      'تصميم تطبيق موبايل بالعربي والإنجليزي لجلسات الصحة النفسية في مجموعات صغيرة.',
    type: 'article',
    authors: ['Noura Wafik'],
    url: 'https://nourawafik.com/ar/work/ulfa',
    images: [{ url: 'https://nourawafik.com/work/ulfa/ulfa-hero.png', width: 1600, height: 900 }],
  },
};

const PRINCIPLES = [
  {
    n: '1',
    title: 'هادي ومقروء',
    text: 'ألوان هادية، وتباين فوق AA في الفاتح والغامق.',
  },
  {
    n: '2',
    title: 'بلغتين من الأول',
    text: 'كل شاشة متصممة بالعربي والإنجليزي، مش مترجمة بعدين.',
  },
  {
    n: '3',
    title: 'الموافقة قبل الدخول',
    text: 'القواعد والخصوصية بتتقري قبل الجلسة، مش جواها.',
  },
];

const STUDIES = [
  {
    n: '01',
    slug: 'participant-app',
    thumb: '/work/ulfa/ulfa-thumb.png',
    thumbDark: '/work/ulfa/ulfa-thumb-dark.png',
    title: 'تطبيق المشارك',
    line: 'من الاستكشاف للانضمام لحد جلساتي.',
  },
  {
    n: '02',
    slug: 'live-session',
    thumb: '/work/ulfa/ulfa-thumb-live.png',
    thumbDark: '/work/ulfa/ulfa-thumb-live-dark.png',
    title: 'الجلسة اللايف',
    line: 'من غرفة الانتظار لحد بعد الجلسة.',
  },
  {
    n: '03',
    slug: 'facilitator-studio',
    thumb: '/work/ulfa/ulfa-thumb-studio.png',
    thumbDark: '/work/ulfa/ulfa-thumb-studio-dark.png',
    title: 'استوديو الميسر',
    line: 'التقويم، والورشة، والمحفظة، والتحويل.',
  },
  {
    n: '04',
    slug: 'design-system',
    thumb: '/work/ulfa/ulfa-thumb-ds.png',
    thumbDark: '/work/ulfa/ulfa-thumb-ds-dark.png',
    title: 'نظام التصميم',
    line: '4 ألوان في الفاتح والغامق.',
  },
];

export default function ArUlfaHubPage() {
  return (
    <article>
      {/* ── Breadcrumb ── */}
      <Container className="pt-8 pb-0">
        <nav aria-label="مسار التنقل">
          <ol className="flex items-center gap-1.5 text-[0.8125rem] text-foreground-muted list-none">
            <li>
              <Link href="/ar/work" className="hover:text-foreground transition-colors duration-150">
                أعمالي
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-foreground">ألفة</li>
          </ol>
        </nav>
      </Container>

      {/* ── H1 + intro ── */}
      <Container className="pt-8 pb-10 md:pb-12">
        <div className="max-w-[680px]">
          <h1 className="text-[2.5rem] font-medium leading-[1.3] tracking-[-0.02em] text-foreground md:text-[3.5rem] mb-5">
            ألفة
          </h1>
          <p className="text-[1.125rem] leading-[1.8] text-foreground-muted">
            تطبيق موبايل بالعربي والإنجليزي، بيجمع الناس مع ميسرين متخصصين في الصحة النفسية، في دوائر صغيرة وجلسات منظمة.
          </p>
        </div>
      </Container>

      {/* ── Meta row ── */}
      <Container className="pb-12 md:pb-16">
        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { label: 'دوري', value: 'تصميم المنتج وإدارته' },
            { label: 'المنصة', value: 'تطبيق موبايل · عربي وإنجليزي' },
            { label: 'النطاق', value: 'رحلة المشارك ورحلة الميسر' },
          ].map(({ label, value }) => (
            <div key={label} className="border-t-2 border-foreground pt-3">
              <dt className="text-[0.8125rem] text-foreground-muted mb-1">{label}</dt>
              <dd className="text-[0.875rem] font-medium text-foreground leading-[1.6]">{value}</dd>
            </div>
          ))}
        </dl>
      </Container>

      {/* ── Hero image ── */}
      <Container className="mb-8">
        <div className="relative w-full overflow-hidden rounded-[32px]" style={{ aspectRatio: '16/9' }}>
          <Image
            src="/work/ulfa/ulfa-hero.png"
            alt="ألفة — شاشات تطبيق المشارك والميسر"
            fill
            className="object-cover dark:hidden"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <Image
            src="/work/ulfa/ulfa-hero-dark.png"
            alt="ألفة — شاشات تطبيق المشارك والميسر"
            fill
            className="object-cover hidden dark:block"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      </Container>

      {/* ── Confidentiality note ── */}
      <Container className="mb-16 md:mb-24">
        <aside className="flex items-start gap-2 text-[0.8125rem] leading-[1.7] text-foreground-muted max-w-[560px]">
          <svg
            width="14" height="14" viewBox="0 0 14 14" fill="currentColor"
            className="mt-[1px] shrink-0 opacity-60" aria-hidden
          >
            <rect x="2" y="6" width="10" height="7" rx="1.5" />
            <path d="M4.5 6V4.5a2.5 2.5 0 0 1 5 0V6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
          <span>الاسم والتفاصيل متغيرة، وكل الشاشات هنا اتعاد رسمها لدراسة الحالة دي.</span>
        </aside>
      </Container>

      {/* ── The challenge ── */}
      <Container className="mb-16 md:mb-24">
        <div className="grid md:grid-cols-[240px_1fr] gap-8 md:gap-16 items-start">
          <h2 className="text-[1.75rem] font-medium leading-[1.3] tracking-[-0.02em] text-foreground md:text-[2rem]">
            التحدي
          </h2>
          <p className="text-[1rem] leading-[1.8] text-foreground-muted">
            منتج واحد ليه جمهورين: مشارك محتاج يحس بالأمان من أول شاشة، وميسر محتاج يدير مواعيده وفلوسه من غير ما يتعب. وكل ده بلغتين، وفي موضوع حساس زي الصحة النفسية.
          </p>
        </div>
      </Container>

      {/* ── Principle cards ── */}
      <Container className="mb-20 md:mb-28">
        <div className="grid sm:grid-cols-3 gap-4">
          {PRINCIPLES.map(({ n, title, text }) => (
            <div key={n} className="rounded-xl border border-border bg-surface p-6 flex flex-col gap-3">
              <span className="text-[0.75rem] text-foreground-muted">{n}</span>
              <p className="text-[0.9375rem] font-medium text-foreground leading-[1.4]">{title}</p>
              <p className="text-[0.875rem] leading-[1.7] text-foreground-muted">{text}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* ── Four studies ── */}
      <Container className="mb-20 md:mb-28">
        <div className="mb-8 md:mb-10">
          <h2 className="text-[1.75rem] font-medium leading-[1.3] tracking-[-0.02em] text-foreground md:text-[2.25rem] mb-2">
            أربع دراسات
          </h2>
          <p className="text-[0.9375rem] text-foreground-muted">
            كل دراسة بتركز على جزء من المنصة.
          </p>
        </div>

        <div
          className={[
            'flex gap-5 overflow-x-auto -mx-4 px-4 pb-3',
            '[scroll-snap-type:x_mandatory] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
            'md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:mx-0 md:px-0 md:pb-0',
          ].join(' ')}
          role="list"
          aria-label="دراسات الحالة"
        >
          {STUDIES.map(({ n, slug, thumb, thumbDark, title, line }) => (
            <article
              key={slug}
              role="listitem"
              className="card-shadow relative group flex flex-col rounded-card bg-surface border border-border overflow-hidden max-md:shrink-0 max-md:[flex:0_0_84%] max-md:[scroll-snap-align:start]"
            >
              <div className="overflow-hidden" style={{ height: '240px' }}>
                <div className="w-full h-full relative motion-safe:transition-transform motion-safe:duration-[600ms] motion-safe:ease-[cubic-bezier(.2,.8,.2,1)] motion-safe:group-hover:scale-[1.05]">
                  <Image
                    src={thumb}
                    alt={`${title} — ألفة`}
                    fill
                    className="object-cover dark:hidden"
                    sizes="(max-width: 768px) 84vw, 600px"
                  />
                  <Image
                    src={thumbDark}
                    alt={`${title} — ألفة`}
                    fill
                    className="object-cover hidden dark:block"
                    sizes="(max-width: 768px) 84vw, 600px"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 p-6 flex-1">
                <span className="text-[0.75rem] text-foreground-muted">{n}</span>
                <Link
                  href={`/ar/work/ulfa/${slug}`}
                  className="focus-visible:outline-none after:absolute after:inset-0 after:z-[1] after:content-['']"
                >
                  <h3 className="text-[1.0625rem] font-semibold text-foreground transition-colors duration-[350ms] group-hover:text-accent leading-[1.4]">
                    {title}
                  </h3>
                </Link>
                <p className="text-[0.875rem] leading-[1.7] text-foreground-muted flex-1">{line}</p>
                <div className="inline-flex items-center gap-1.5 text-small text-accent mt-auto" aria-hidden>
                  اقرا الدراسة
                  <ArrowIcon
                    size={14}
                    className="[transform:scaleX(-1)] motion-safe:transition-transform motion-safe:duration-[350ms] motion-safe:group-hover:-translate-x-[5px]"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>

      {/* ── Next project card ── */}
      <Container className="mb-16 md:mb-24">
        <NextProjectCard currentSlug="ulfa" locale="ar" />
      </Container>
    </article>
  );
}
