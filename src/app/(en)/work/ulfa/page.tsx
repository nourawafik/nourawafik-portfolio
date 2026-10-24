import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { caseStudies } from '@/content/case-studies';

export const metadata: Metadata = {
  title: 'Ulfa — Noura Wafik',
  description:
    'A bilingual Arabic and English mobile app that brings people together with licensed mental health facilitators, in small circles and structured sessions.',
  alternates: { canonical: 'https://nourawafik.com/work/ulfa' },
  openGraph: {
    title: 'Ulfa — Noura Wafik',
    description:
      'A bilingual Arabic and English mobile app that brings people together with licensed mental health facilitators, in small circles and structured sessions.',
    type: 'article',
    authors: ['Noura Wafik'],
    url: 'https://nourawafik.com/work/ulfa',
    images: [{ url: 'https://nourawafik.com/work/ulfa/ulfa-hero.png', width: 1600, height: 900 }],
  },
};

const PRINCIPLES = [
  {
    n: '1',
    titleEn: 'Calm and readable',
    textEn: 'Quiet colors, with contrast above AA in light and dark.',
  },
  {
    n: '2',
    titleEn: 'Bilingual from day one',
    textEn: 'Every screen designed in Arabic and English, not translated later.',
  },
  {
    n: '3',
    titleEn: 'Consent before you join',
    textEn: 'Rules and privacy are read before the session, not inside it.',
  },
];

const STUDIES = [
  {
    n: '01',
    slug: 'participant-app',
    thumb: '/work/ulfa/ulfa-thumb.png',
    titleEn: 'Participant app',
    lineEn: 'From exploring to joining to My sessions.',
  },
  {
    n: '02',
    slug: 'live-session',
    thumb: '/work/ulfa/ulfa-thumb-live.png',
    titleEn: 'Live session',
    lineEn: 'From the waiting room to after the session.',
  },
  {
    n: '03',
    slug: 'facilitator-studio',
    thumb: '/work/ulfa/ulfa-thumb-studio.png',
    titleEn: 'Facilitator studio',
    lineEn: 'Calendar, workshop, wallet and payouts.',
  },
  {
    n: '04',
    slug: 'design-system',
    thumb: '/work/ulfa/ulfa-thumb-ds.png',
    titleEn: 'Design system',
    lineEn: '4 colors in light and dark.',
  },
];

const duet = caseStudies.find((s) => s.slug === 'duet')!;

export default function UlfaHubPage() {
  return (
    <article>
      {/* ── Breadcrumb ── */}
      <Container className="pt-8 pb-0">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-[0.8125rem] text-foreground-muted list-none">
            <li>
              <Link href="/#work" className="hover:text-foreground transition-colors duration-150">
                Work
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-foreground">Ulfa</li>
          </ol>
        </nav>
      </Container>

      {/* ── H1 + intro ── */}
      <Container className="pt-8 pb-10 md:pb-12">
        <div className="max-w-[680px]">
          <h1 className="text-[2.5rem] font-medium leading-[1.1] tracking-[-0.02em] text-foreground md:text-[3.5rem] mb-5">
            Ulfa
          </h1>
          <p className="text-[1.125rem] leading-[1.65] text-foreground-muted">
            A bilingual Arabic and English mobile app that brings people together with licensed
            mental health facilitators, in small circles and structured sessions.
          </p>
        </div>
      </Container>

      {/* ── Meta row ── */}
      <Container className="pb-12 md:pb-16">
        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { label: 'My role', value: 'Product design and product management' },
            { label: 'Platform', value: 'Mobile app · Arabic and English' },
            { label: 'Scope', value: 'Participant and facilitator journeys' },
          ].map(({ label, value }) => (
            <div key={label} className="border-t-2 border-foreground pt-3">
              <dt className="font-mono text-[0.8125rem] text-foreground-muted mb-1">{label}</dt>
              <dd className="text-[0.875rem] font-medium text-foreground">{value}</dd>
            </div>
          ))}
        </dl>
      </Container>

      {/* ── Hero image ── */}
      <Container className="mb-8">
        <div className="relative w-full overflow-hidden rounded-[32px]" style={{ aspectRatio: '16/9' }}>
          <Image
            src="/work/ulfa/ulfa-hero.png"
            alt="Ulfa bilingual mental health app — participant and facilitator screens"
            fill
            className="object-cover dark:hidden"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <Image
            src="/work/ulfa/ulfa-hero-dark.png"
            alt="Ulfa bilingual mental health app — participant and facilitator screens"
            fill
            className="object-cover hidden dark:block"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      </Container>

      {/* ── Confidentiality note ── */}
      <Container className="mb-16 md:mb-24">
        <aside className="flex items-start gap-2 text-[0.8125rem] leading-[1.55] text-foreground-muted max-w-[560px]">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="currentColor"
            className="mt-[1px] shrink-0 opacity-60"
            aria-hidden
          >
            <rect x="2" y="6" width="10" height="7" rx="1.5" />
            <path d="M4.5 6V4.5a2.5 2.5 0 0 1 5 0V6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
          <span>
            The name and details are changed, and every screen here was redrawn for this case study.
          </span>
        </aside>
      </Container>

      {/* ── The challenge ── */}
      <Container className="mb-16 md:mb-24">
        <div className="grid md:grid-cols-[240px_1fr] gap-8 md:gap-16 items-start">
          <h2 className="text-[1.75rem] font-medium leading-[1.2] tracking-[-0.02em] text-foreground md:text-[2rem]">
            The challenge
          </h2>
          <p className="text-[1rem] leading-[1.75] text-foreground-muted">
            One product, two audiences: participants who need to feel safe from the first screen,
            and facilitators who need to run their schedule and earnings without friction. All of it
            in two languages, on a subject as sensitive as mental health.
          </p>
        </div>
      </Container>

      {/* ── Principle cards ── */}
      <Container className="mb-20 md:mb-28">
        <div className="grid sm:grid-cols-3 gap-4">
          {PRINCIPLES.map(({ n, titleEn, textEn }) => (
            <div
              key={n}
              className="rounded-xl border border-border bg-surface p-6 flex flex-col gap-3"
            >
              <span className="font-mono text-[0.75rem] text-foreground-muted">{n}</span>
              <p className="text-[0.9375rem] font-medium text-foreground leading-[1.4]">{titleEn}</p>
              <p className="text-[0.875rem] leading-[1.6] text-foreground-muted">{textEn}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* ── Four studies ── */}
      <Container className="mb-20 md:mb-28">
        <div className="mb-8 md:mb-10">
          <h2 className="text-[1.75rem] font-medium leading-[1.2] tracking-[-0.02em] text-foreground md:text-[2.25rem] mb-2">
            Four studies
          </h2>
          <p className="text-[0.9375rem] text-foreground-muted">
            Each study focuses on one part of the platform.
          </p>
        </div>

        {/* Mobile: horizontal rail. Desktop: 2×2 grid */}
        <div
          className={[
            'flex gap-5 overflow-x-auto -mx-4 px-4 pb-3',
            '[scroll-snap-type:x_mandatory] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
            'md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:mx-0 md:px-0 md:pb-0',
          ].join(' ')}
          role="list"
          aria-label="Case studies"
        >
          {STUDIES.map(({ n, slug, thumb, titleEn, lineEn }) => (
            <article
              key={slug}
              role="listitem"
              className="card-shadow relative group flex flex-col rounded-card bg-surface border border-border overflow-hidden max-md:shrink-0 max-md:[flex:0_0_84%] max-md:[scroll-snap-align:start]"
            >
              {/* Thumb */}
              <div className="overflow-hidden" style={{ height: '240px' }}>
                <div className="w-full h-full relative motion-safe:transition-transform motion-safe:duration-[600ms] motion-safe:ease-[cubic-bezier(.2,.8,.2,1)] motion-safe:group-hover:scale-[1.05]">
                  <Image
                    src={thumb}
                    alt={`${titleEn} — Ulfa`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 84vw, 600px"
                  />
                </div>
              </div>
              {/* Content */}
              <div className="flex flex-col gap-3 p-6 flex-1">
                <span className="font-mono text-[0.75rem] text-foreground-muted">{n}</span>
                <Link
                  href={`/work/ulfa/${slug}`}
                  className="focus-visible:outline-none after:absolute after:inset-0 after:z-[1] after:content-['']"
                >
                  <h3 className="text-[1.0625rem] font-semibold text-foreground transition-colors duration-[350ms] group-hover:text-accent">
                    {titleEn}
                  </h3>
                </Link>
                <p className="text-[0.875rem] leading-[1.6] text-foreground-muted flex-1">{lineEn}</p>
                <div
                  className="inline-flex items-center gap-1.5 text-small text-accent mt-auto"
                  aria-hidden
                >
                  Read the case study
                  <span className="motion-safe:transition-transform motion-safe:duration-[350ms] motion-safe:group-hover:translate-x-[5px]">
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>

      {/* ── Next project card ── */}
      <Container className="mb-16 md:mb-24">
        <Link
          href="/work/duet"
          className="group relative flex items-center justify-between rounded-2xl bg-[#0E2A2D] dark:bg-[#0A2023] dark:border dark:border-[#2B4A4E] px-8 py-8 md:px-10 overflow-hidden hover:opacity-90 transition-opacity duration-200"
          aria-label="Next project: Duet"
        >
          <div className="flex flex-col gap-1.5">
            <p className="font-mono text-[0.75rem] text-white/50">Next project</p>
            <p className="text-[1.375rem] font-semibold text-white leading-[1.3]">{duet.title}</p>
            <p className="text-[0.875rem] text-white/60 leading-[1.55]">{duet.tagline}</p>
          </div>
          <div className="shrink-0 ms-6 w-14 h-14 rounded-full bg-[#F5C518] flex items-center justify-center motion-safe:transition-transform motion-safe:duration-[350ms] motion-safe:group-hover:translate-x-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden
            >
              <path
                d="M4 10h12M11 5l5 5-5 5"
                stroke="#0E2A2D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>
      </Container>
    </article>
  );
}
