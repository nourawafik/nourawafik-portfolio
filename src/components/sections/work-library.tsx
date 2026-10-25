'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { Container } from '@/components/layout/container';
import { ArrowIcon } from '@/components/ui/arrow-icon';
import { work, LABELS, type WorkType, type Industry, type Feature, countItems } from '@/content/work';

const COPY = {
  en: {
    eyebrow: 'Work',
    h1: 'Products, platforms and websites, in two languages',
    intro: 'Projects I designed from the first idea to developer-ready screens. Filter by the type of work or the industry you care about.',
    all: 'All',
    results: (n: number) => n === 1 ? '1 result' : `${n} results`,
    partOf: (p: string) => `Part of ${p}`,
    readStudy: 'Read the study',
    readCase: 'Read the case study',
    studies: (n: number) => `${n} studies`,
    empty: "Nothing here yet. Try another filter.",
    clear: 'Clear filters',
    filterType: 'Type',
    filterIndustry: 'Industry',
    filterFeature: 'Feature',
  },
  ar: {
    eyebrow: 'أعمالي',
    h1: 'منتجات ومنصات ومواقع، بلغتين',
    intro: 'مشاريع صممتها من أول فكرة لحد شاشات جاهزة للتنفيذ. اختار النوع أو المجال اللي يهمك.',
    all: 'الكل',
    results: (n: number) => {
      if (n === 1) return 'نتيجة واحدة';
      if (n === 2) return 'نتيجتين';
      return `${n} نتايج`;
    },
    partOf: (p: string) => `جزء من ${p}`,
    readStudy: 'اقرا الدراسة',
    readCase: 'اقرا دراسة الحالة',
    studies: (n: number) => `${n} دراسات`,
    empty: 'مفيش حاجة هنا لسه. جرب فلتر تاني.',
    clear: 'امسح الفلاتر',
    filterType: 'النوع',
    filterIndustry: 'المجال',
    filterFeature: 'الميزة',
  },
} as const;

interface WorkLibraryProps {
  locale?: 'en' | 'ar';
}

export function WorkLibrary({ locale = 'en' }: WorkLibraryProps) {
  const t  = COPY[locale];
  const ar = locale === 'ar';
  const router       = useRouter();
  const searchParams = useSearchParams();

  const activeType     = (searchParams.get('type')     as WorkType | null);
  const activeIndustry = (searchParams.get('industry') as Industry | null);
  const activeFeature  = (searchParams.get('feature')  as Feature  | null);

  const setFilter = useCallback(
    (group: 'type' | 'industry' | 'feature', value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === null) {
        params.delete(group);
      } else {
        params.set(group, value);
      }
      router.replace(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  const clearFilters = useCallback(() => {
    router.replace('?', { scroll: false });
  }, [router]);

  const filtered = useMemo(() => {
    let result = activeFeature ? work : work.filter(w => !w.parent);
    if (activeType)     result = result.filter(w => w.types.includes(activeType));
    if (activeIndustry) result = result.filter(w => w.industry === activeIndustry);
    if (activeFeature)  result = result.filter(w => w.features.includes(activeFeature));
    return result;
  }, [activeType, activeIndustry, activeFeature]);

  const types:      WorkType[] = ['mobile', 'web', 'site', 'brand', 'marketing'];
  const industries: Industry[] = ['health', 'hr'];
  const features:   Feature[]  = ['ai', 'video', 'sched', 'pay', 'dash', 'ds'];

  const chipBase = 'inline-flex items-center gap-2 h-11 rounded-pill border-2 px-3.5 text-[0.875rem] font-medium transition-colors duration-150 cursor-pointer';
  const chipActive   = 'bg-foreground text-background border-foreground';
  const chipInactive = 'bg-transparent text-foreground border-line hover:border-foreground';

  function CountBadge({ n }: { n: number }) {
    return (
      <span className="text-[0.6875rem] px-1.5 py-0.5 rounded-full bg-accent-soft text-on-accent-soft leading-none">
        {n}
      </span>
    );
  }

  function ChipRow<T extends string>({
    label,
    values,
    group,
    active,
    getLabel,
    getCount,
  }: {
    label: string;
    values: T[];
    group: 'type' | 'industry' | 'feature';
    active: T | null;
    getLabel: (v: T) => string;
    getCount: (v: T) => number;
  }) {
    const allCount = (() => {
      let result = active !== null
        ? (activeFeature
            ? work
            : work.filter(w => !w.parent))
        : (activeFeature
            ? work
            : work.filter(w => !w.parent));
      // count with other active filters but NOT the current group's filter
      const tempType     = group === 'type'     ? null : activeType;
      const tempIndustry = group === 'industry' ? null : activeIndustry;
      const tempFeature  = group === 'feature'  ? null : activeFeature;
      let r = tempFeature ? work : work.filter(w => !w.parent);
      if (tempType)     r = r.filter(w => w.types.includes(tempType));
      if (tempIndustry) r = r.filter(w => w.industry === tempIndustry);
      if (tempFeature)  r = r.filter(w => w.features.includes(tempFeature));
      return r.length;
    })();

    const isAllActive = active === null;
    const visibleValues = values.filter(v => getCount(v) > 0);

    return (
      <div className="flex flex-col gap-2">
        <p className="text-[0.75rem] font-medium text-foreground-muted uppercase tracking-[0.05em]">{label}</p>
        <div
          className="flex gap-2 overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="group"
          aria-label={label}
        >
          <button
            onClick={() => setFilter(group, null)}
            aria-pressed={isAllActive}
            className={`${chipBase} shrink-0 ${isAllActive ? chipActive : chipInactive}`}
          >
            {t.all}
            <CountBadge n={allCount} />
          </button>
          {visibleValues.map(v => {
            const cnt     = getCount(v);
            const pressed = active === v;
            return (
              <button
                key={v}
                onClick={() => setFilter(group, pressed ? null : v)}
                aria-pressed={pressed}
                className={`${chipBase} shrink-0 ${pressed ? chipActive : chipInactive}`}
              >
                {getLabel(v)}
                <CountBadge n={cnt} />
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* ── Header ── */}
      <Container className="pt-16 pb-10 md:pt-24">
        <p className="text-[0.9375rem] font-medium text-on-accent-soft mb-2">{t.eyebrow}</p>
        <h1 className={`text-[2.5rem] font-medium leading-[1.1] tracking-[-0.02em] text-foreground md:text-[3.5rem] mb-5 ${ar ? 'leading-[1.3]' : ''}`}>
          {t.h1}
        </h1>
        <p className="text-[1.0625rem] leading-[1.65] text-foreground-muted max-w-[680px]">
          {t.intro}
        </p>
      </Container>

      {/* ── Filters ── */}
      <Container className="pb-8 md:pb-10">
        <div className="flex flex-col gap-6">
          <ChipRow
            label={t.filterType}
            values={types}
            group="type"
            active={activeType}
            getLabel={v => ar ? LABELS.type[v].ar : LABELS.type[v].en}
            getCount={v => countItems(v, activeIndustry, activeFeature)}
          />
          <ChipRow
            label={t.filterIndustry}
            values={industries}
            group="industry"
            active={activeIndustry}
            getLabel={v => ar ? LABELS.industry[v].ar : LABELS.industry[v].en}
            getCount={v => countItems(activeType, v, activeFeature)}
          />
          <ChipRow
            label={t.filterFeature}
            values={features}
            group="feature"
            active={activeFeature}
            getLabel={v => ar ? LABELS.feature[v].ar : LABELS.feature[v].en}
            getCount={v => countItems(activeType, activeIndustry, v)}
          />
        </div>
      </Container>

      {/* ── Result count ── */}
      <Container className="pb-6">
        <p
          aria-live="polite"
          aria-atomic="true"
          className="text-[0.875rem] text-foreground-muted"
        >
          {t.results(filtered.length)}
        </p>
      </Container>

      {/* ── Grid ── */}
      <Container className="pb-20 md:pb-28">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center gap-5 py-20 text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/mascot/noon-confused.svg" alt="" width={80} height={80} aria-hidden />
            <p className="text-[0.9375rem] text-foreground-muted">{t.empty}</p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-pill border-2 border-line text-[0.875rem] font-medium text-foreground hover:border-foreground transition-colors"
            >
              {t.clear}
            </button>
          </div>
        ) : (
          <ul
            className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            role="list"
          >
            {filtered.map(item => {
              const title   = ar ? item.title.ar   : item.title.en;
              const summary = ar ? item.summary.ar : item.summary.en;
              const isStudy = !!item.parent;
              const href    = isStudy
                ? `/work/ulfa/${item.slug.split('/')[1]}`
                : `/work/${item.slug}`;
              const readLabel = isStudy ? t.readStudy : t.readCase;
              const parentName = item.parent
                ? (ar ? item.parent.title.ar : item.parent.title.en)
                : null;

              const typeTags    = item.types.map(tp => ar ? LABELS.type[tp].ar : LABELS.type[tp].en);
              const industryTag = ar ? LABELS.industry[item.industry].ar : LABELS.industry[item.industry].en;

              return (
                <li key={item.slug}>
                  <article className="card-shadow relative group flex flex-col rounded-card bg-surface border border-border overflow-hidden h-full">
                    {/* Thumb 4:3 */}
                    <div className="overflow-hidden aspect-[4/3]">
                      <div className="w-full h-full motion-safe:transition-transform motion-safe:duration-[600ms] motion-safe:ease-[cubic-bezier(.2,.8,.2,1)] motion-safe:group-hover:scale-[1.05]">
                        <Image
                          src={item.thumb}
                          alt={item.thumbAlt}
                          width={800}
                          height={600}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                          className={`w-full h-full object-cover block${item.thumbDark ? ' dark:hidden' : ''}`}
                        />
                        {item.thumbDark && (
                          <Image
                            src={item.thumbDark}
                            alt=""
                            aria-hidden
                            width={800}
                            height={600}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                            className="w-full h-full object-cover hidden dark:block"
                          />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-4 p-6 flex-1">
                      {/* Tags */}
                      <ul className="flex flex-wrap gap-2 list-none" role="list">
                        {typeTags.map(tag => (
                          <li key={tag} className="px-2.5 py-0.5 rounded-tag bg-accent-soft text-on-accent-soft text-small">
                            {tag}
                          </li>
                        ))}
                        <li className="px-2.5 py-0.5 rounded-tag border border-border text-foreground-muted text-small">
                          {industryTag}
                        </li>
                        {item.studiesCount && (
                          <li className="px-2.5 py-0.5 rounded-tag border border-border text-foreground-muted text-small">
                            {t.studies(item.studiesCount)}
                          </li>
                        )}
                      </ul>

                      {/* "Part of Ulfa" on study cards */}
                      {parentName && (
                        <p className="text-[0.75rem] text-foreground-muted -mb-2">
                          {t.partOf(parentName)}
                        </p>
                      )}

                      {/* Title — stretched link */}
                      <NextLink
                        href={href}
                        className="focus-visible:outline-none after:absolute after:inset-0 after:z-[1] after:content-['']"
                      >
                        <h2 className="text-h3 font-bold text-foreground transition-colors duration-[350ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:text-accent">
                          {title}
                        </h2>
                      </NextLink>

                      {/* Summary */}
                      <p className={`text-body text-foreground-muted flex-1 ${ar ? 'leading-[1.8]' : 'leading-[1.65]'}`}>
                        {summary}
                      </p>

                      {/* Read link — decorative */}
                      <div className="inline-flex items-center gap-1.5 text-small text-accent mt-auto" aria-hidden>
                        {readLabel}
                        <ArrowIcon
                          size={14}
                          className="motion-safe:transition-transform motion-safe:duration-[350ms] motion-safe:group-hover:translate-x-[5px] rtl:motion-safe:group-hover:-translate-x-[5px]"
                        />
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        )}
      </Container>
    </>
  );
}
