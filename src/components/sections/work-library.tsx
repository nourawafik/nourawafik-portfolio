'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { useCallback, useMemo, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { Container } from '@/components/layout/container';
import { ArrowIcon } from '@/components/ui/arrow-icon';
import { work, LABELS, type WorkType, type Industry, type Feature, countItems } from '@/content/work';

/* ─── Arabic text normalization ─── */
function normalizeText(s: string): string {
  return s
    .toLowerCase()
    .replace(/[أإآ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .replace(/ـ/g, '')
    .replace(/[ً-ٟ]/g, '');
}

function matchesQuery(item: (typeof work)[0], q: string): boolean {
  const norm = normalizeText(q);
  const fields = [
    item.title.en, item.title.ar,
    item.summary.en, item.summary.ar,
    ...(item.keywords ?? []),
  ];
  return fields.some(f => normalizeText(f).includes(norm));
}

/* ─── Copy ─── */
const COPY = {
  en: {
    eyebrow: 'Work',
    h1: 'Products, platforms and websites, in two languages',
    intro: 'Projects I designed from the first idea to developer-ready screens. Filter by the type of work or the industry you care about.',
    all: 'All',
    searchPlaceholder: 'Search work, e.g. calendar',
    searchLabel: 'Search work',
    filtersBtn: 'Filters',
    clearAll: 'Clear all',
    clearSearch: 'Clear search',
    clearFilters: 'Clear filters',
    filterIndustry: 'Industry',
    filterFeature: 'Feature',
    results: (n: number, q?: string) => {
      const count = n === 1 ? '1 result' : `${n} results`;
      return q ? `${count} for "${q}"` : count;
    },
    partOf: (p: string) => `Part of ${p}`,
    readStudy: 'Read the study',
    readCase: 'Read the case study',
    studies: (n: number) => `${n} studies`,
    noResultsFor: (q: string) => `Nothing for "${q}" in my work yet`,
    noResultsFilters: 'No work matches these filters yet',
    noResultsTry: 'Try another word, or pick one of these:',
    askLine: "Looking for something that isn't here? Ask me, and I'll tell you how I'd approach it.",
    askBtn: 'Ask me about it',
    showResults: (n: number) => n === 1 ? 'Show 1 result' : `Show ${n} results`,
    suggestionChips: [
      { label: 'Calendars', feature: 'sched' as Feature },
      { label: 'AI assistants', feature: 'ai' as Feature },
      { label: 'Video calls', feature: 'video' as Feature },
      { label: 'Dashboards', feature: 'dash' as Feature },
      { label: 'Design systems', feature: 'ds' as Feature },
    ],
  },
  ar: {
    eyebrow: 'أعمالي',
    h1: 'منتجات ومنصات ومواقع، بلغتين',
    intro: 'مشاريع صممتها من أول فكرة لحد شاشات جاهزة للتنفيذ. اختار النوع أو المجال اللي يهمك.',
    all: 'الكل',
    searchPlaceholder: 'دور في الأعمال، مثلا: تقويم',
    searchLabel: 'دور في الأعمال',
    filtersBtn: 'فلاتر',
    clearAll: 'امسح الكل',
    clearSearch: 'امسح البحث',
    clearFilters: 'امسح الفلاتر',
    filterIndustry: 'المجال',
    filterFeature: 'الميزة',
    results: (n: number, q?: string) => {
      let count: string;
      if (n === 1) count = 'نتيجة واحدة';
      else if (n === 2) count = 'نتيجتين';
      else count = `${n} نتايج`;
      return q ? `${count} لـ "${q}"` : count;
    },
    partOf: (p: string) => `جزء من ${p}`,
    readStudy: 'اقرا الدراسة',
    readCase: 'اقرا دراسة الحالة',
    studies: (n: number) => `${n} دراسات`,
    noResultsFor: (q: string) => `ملقتش "${q}" في أعمالي لسه`,
    noResultsFilters: 'مفيش أعمال بالفلاتر دي لسه',
    noResultsTry: 'جرب كلمة تانية، أو دور بموضوع من دول:',
    askLine: 'بتدور على حاجة مش هنا؟ ابعتلي وأقولك أقدر أعملها إزاي.',
    askBtn: 'اسألني عنها',
    showResults: (n: number) => {
      if (n === 1) return 'اعرض نتيجة واحدة';
      if (n === 2) return 'اعرض نتيجتين';
      return `اعرض ${n} نتايج`;
    },
    suggestionChips: [
      { label: 'تقويم', feature: 'sched' as Feature },
      { label: 'ذكاء اصطناعي', feature: 'ai' as Feature },
      { label: 'مكالمات فيديو', feature: 'video' as Feature },
      { label: 'داشبورد', feature: 'dash' as Feature },
      { label: 'أنظمة تصميم', feature: 'ds' as Feature },
    ],
  },
} as const;

interface WorkLibraryProps {
  locale?: 'en' | 'ar';
}

export function WorkLibrary({ locale = 'en' }: WorkLibraryProps) {
  const t   = COPY[locale];
  const ar  = locale === 'ar';
  const router       = useRouter();
  const searchParams = useSearchParams();

  const activeType     = searchParams.get('type')     as WorkType | null;
  const activeIndustry = searchParams.get('industry') as Industry | null;
  const activeFeature  = searchParams.get('feature')  as Feature  | null;

  const [inputValue, setInputValue]   = useState(() => searchParams.get('q') ?? '');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);

  /* Debounce input → URL (200ms) */
  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (inputValue.trim()) {
        params.set('q', inputValue.trim());
      } else {
        params.delete('q');
      }
      router.replace(`?${params.toString()}`, { scroll: false });
    }, 200);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  const setFilter = useCallback(
    (group: 'type' | 'industry' | 'feature', value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === null) params.delete(group);
      else params.set(group, value);
      router.replace(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  const clearFilters = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('type');
    params.delete('industry');
    params.delete('feature');
    params.delete('q');
    router.replace(`?${params.toString()}`, { scroll: false });
    setInputValue('');
    setFiltersOpen(false);
  }, [router, searchParams]);

  const clearOnlyFilters = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('type');
    params.delete('industry');
    params.delete('feature');
    router.replace(`?${params.toString()}`, { scroll: false });
    setFiltersOpen(false);
  }, [router, searchParams]);

  const clearSearch = useCallback(() => {
    setInputValue('');
    const params = new URLSearchParams(searchParams.toString());
    params.delete('q');
    router.replace(`?${params.toString()}`, { scroll: false });
  }, [router, searchParams]);

  /* Esc closes sheet and clears search */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (filtersOpen) {
          setFiltersOpen(false);
        }
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [filtersOpen]);

  /* Focus trap for mobile sheet */
  useEffect(() => {
    if (!filtersOpen || !sheetRef.current) return;
    const sheet = sheetRef.current;
    const focusable = sheet.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    first?.focus();
    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener('keydown', trap);
    return () => document.removeEventListener('keydown', trap);
  }, [filtersOpen]);

  /* Prevent body scroll when sheet open */
  useEffect(() => {
    document.body.style.overflow = filtersOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [filtersOpen]);

  const searchQuery = inputValue.trim();

  const filtered = useMemo(() => {
    const showStudies = !!searchQuery || !!activeFeature;
    let result = showStudies ? [...work] : work.filter(w => !w.parent);
    if (activeType)     result = result.filter(w => w.types.includes(activeType));
    if (activeIndustry) result = result.filter(w => w.industry === activeIndustry);
    if (activeFeature)  result = result.filter(w => w.features.includes(activeFeature));
    if (searchQuery)    result = result.filter(item => matchesQuery(item, searchQuery));
    return result;
  }, [searchQuery, activeType, activeIndustry, activeFeature]);

  const types:      WorkType[] = ['mobile', 'web', 'site', 'brand', 'marketing'];
  const industries: Industry[] = ['health', 'hr'];
  const features:   Feature[]  = ['ai', 'video', 'sched', 'pay', 'dash', 'ds'];

  const visibleTypes = types.filter(v => countItems(v, activeIndustry, activeFeature) > 0);
  const activeFilterCount = (activeIndustry ? 1 : 0) + (activeFeature ? 1 : 0);
  const hasAnyFilter = !!(searchQuery || activeType || activeIndustry || activeFeature);

  /* Mailto for empty state */
  const askMailto = (() => {
    const subject = searchQuery
      ? encodeURIComponent(ar ? `بدور على: ${searchQuery}` : `Looking for: ${searchQuery}`)
      : encodeURIComponent(ar ? 'سؤال عن أعمالك' : 'Question about your work');
    return `mailto:hello@nourawafik.com?subject=${subject}`;
  })();

  const chipBase = 'inline-flex items-center gap-1.5 h-10 rounded-pill border px-3.5 text-[0.875rem] font-medium transition-colors duration-150 cursor-pointer shrink-0';
  const chipActive   = 'bg-foreground text-background border-foreground';
  const chipInactive = 'bg-transparent text-foreground border-line hover:border-foreground';

  function CountBadge({ n }: { n: number }) {
    return (
      <span className="text-[0.6875rem] px-1.5 py-0.5 rounded-full bg-accent-soft text-on-accent-soft leading-none tabular-nums">
        {n}
      </span>
    );
  }

  /* Filter panel chips (for desktop panel + mobile sheet) */
  function FilterChips({ group, values, active, getLabel, getCount }: {
    group: 'industry' | 'feature';
    values: (Industry | Feature)[];
    active: string | null;
    getLabel: (v: string) => string;
    getCount: (v: string) => number;
  }) {
    const heading = group === 'industry' ? t.filterIndustry : t.filterFeature;
    return (
      <div>
        <p className="text-[0.75rem] font-medium text-foreground-muted uppercase tracking-[0.05em] mb-2.5">{heading}</p>
        <div className="flex flex-wrap gap-2" role="group" aria-label={heading}>
          {values.map(v => {
            const cnt     = getCount(v);
            const pressed = active === v;
            return (
              <button
                key={v}
                onClick={() => setFilter(group, pressed ? null : v)}
                aria-pressed={pressed}
                className={`${chipBase} ${pressed ? chipActive : chipInactive}`}
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
        <h1 className={`text-[2.5rem] font-medium leading-[1.1] tracking-[-0.02em] text-foreground md:text-[3.5rem] mb-5${ar ? ' leading-[1.3]' : ''}`}>
          {t.h1}
        </h1>
        <p className="text-[1.0625rem] leading-[1.65] text-foreground-muted max-w-[680px]">
          {t.intro}
        </p>
      </Container>

      {/* ── Toolbar ── */}
      <Container className="pb-4">
        {/* Desktop: one row */}
        <div className="hidden md:flex items-center gap-3">
          {/* Search field (340px) */}
          <div className="relative w-[340px] shrink-0">
            <svg
              className="absolute start-3.5 top-1/2 -translate-y-1/2 text-foreground-muted pointer-events-none"
              width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden
            >
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={e => { if (e.key === 'Escape') { setInputValue(''); } }}
              placeholder={t.searchPlaceholder}
              aria-label={t.searchLabel}
              className={[
                'w-full h-11 ps-9 pe-9 rounded-pill border-2 bg-transparent text-[0.875rem] text-foreground placeholder:text-foreground-muted outline-none transition-colors duration-150',
                inputValue ? 'border-ink' : 'border-line',
                'box-sizing-border',
              ].join(' ')}
              style={{ boxSizing: 'border-box' }}
            />
            {inputValue && (
              <button
                onClick={() => setInputValue('')}
                className="absolute end-3 top-1/2 -translate-y-1/2 text-foreground-muted hover:text-foreground p-1"
                aria-label="Clear search"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="M2 2l8 8M10 2L2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>

          {/* Type chips */}
          <div className="flex items-center gap-2" role="group" aria-label={ar ? 'نوع العمل' : 'Work type'}>
            <button
              onClick={() => setFilter('type', null)}
              aria-pressed={activeType === null}
              className={`${chipBase} ${activeType === null ? chipActive : chipInactive}`}
            >
              {t.all}
            </button>
            {visibleTypes.map(v => (
              <button
                key={v}
                onClick={() => setFilter('type', activeType === v ? null : v)}
                aria-pressed={activeType === v}
                className={`${chipBase} ${activeType === v ? chipActive : chipInactive}`}
              >
                {ar ? LABELS.type[v].ar : LABELS.type[v].en}
              </button>
            ))}
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Filters button */}
          <button
            onClick={() => setFiltersOpen(o => !o)}
            aria-expanded={filtersOpen}
            aria-controls="filters-panel"
            className={[
              'relative inline-flex items-center gap-2 h-10 px-4 rounded-pill border font-medium text-[0.875rem] transition-colors duration-150',
              filtersOpen ? 'bg-foreground text-background border-foreground' : 'border-line hover:border-foreground text-foreground',
            ].join(' ')}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M1 3h12M3 7h8M5 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {t.filtersBtn}
            {activeFilterCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-accent text-[0.625rem] font-bold leading-none flex items-center justify-center text-background tabular-nums">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile: stacked */}
        <div className="flex flex-col gap-3 md:hidden">
          {/* Search field full-width */}
          <div className="relative">
            <svg
              className="absolute start-3.5 top-1/2 -translate-y-1/2 text-foreground-muted pointer-events-none"
              width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden
            >
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={e => { if (e.key === 'Escape') { setInputValue(''); } }}
              placeholder={t.searchPlaceholder}
              aria-label={t.searchLabel}
              className={[
                'w-full h-11 ps-9 pe-9 rounded-pill border-2 bg-transparent text-[0.875rem] text-foreground placeholder:text-foreground-muted outline-none transition-colors duration-150',
                inputValue ? 'border-ink' : 'border-line',
              ].join(' ')}
              style={{ boxSizing: 'border-box' }}
            />
            {inputValue && (
              <button
                onClick={() => setInputValue('')}
                className="absolute end-3 top-1/2 -translate-y-1/2 text-foreground-muted hover:text-foreground p-1"
                aria-label="Clear search"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="M2 2l8 8M10 2L2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>

          {/* Scrolling row: Filters btn + type chips */}
          <div
            className="flex items-center gap-2 overflow-x-auto -mx-4 px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="group"
          >
            {/* Filters button first */}
            <button
              onClick={() => setFiltersOpen(o => !o)}
              aria-expanded={filtersOpen}
              aria-controls="filters-sheet"
              className={[
                'relative inline-flex items-center gap-2 h-10 px-4 rounded-pill border font-medium text-[0.875rem] shrink-0 transition-colors duration-150',
                filtersOpen ? 'bg-foreground text-background border-foreground' : 'border-line hover:border-foreground text-foreground',
              ].join(' ')}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M1 3h12M3 7h8M5 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              {t.filtersBtn}
              {activeFilterCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-accent text-[0.625rem] font-bold leading-none flex items-center justify-center text-background tabular-nums">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {/* Type chips */}
            <button
              onClick={() => setFilter('type', null)}
              aria-pressed={activeType === null}
              className={`${chipBase} ${activeType === null ? chipActive : chipInactive}`}
            >
              {t.all}
            </button>
            {visibleTypes.map(v => (
              <button
                key={v}
                onClick={() => setFilter('type', activeType === v ? null : v)}
                aria-pressed={activeType === v}
                className={`${chipBase} ${activeType === v ? chipActive : chipInactive}`}
              >
                {ar ? LABELS.type[v].ar : LABELS.type[v].en}
              </button>
            ))}
          </div>
        </div>
      </Container>

      {/* ── Desktop filter panel ── */}
      {filtersOpen && (
        <Container className="pb-2 hidden md:block">
          <div id="filters-panel" className="filter-panel-open rounded-[20px] border border-line bg-surface p-5 flex items-start gap-8">
            <FilterChips
              group="industry"
              values={industries}
              active={activeIndustry}
              getLabel={v => ar ? LABELS.industry[v as Industry].ar : LABELS.industry[v as Industry].en}
              getCount={v => countItems(activeType, v as Industry, activeFeature)}
            />
            <FilterChips
              group="feature"
              values={features}
              active={activeFeature}
              getLabel={v => ar ? LABELS.feature[v as Feature].ar : LABELS.feature[v as Feature].en}
              getCount={v => countItems(activeType, activeIndustry, v as Feature)}
            />
            <div className="flex-1" />
            {(activeIndustry || activeFeature) && (
              <button
                onClick={clearOnlyFilters}
                className="text-[0.875rem] font-medium text-foreground-muted hover:text-foreground transition-colors shrink-0 mt-5"
              >
                {t.clearAll}
              </button>
            )}
          </div>
        </Container>
      )}

      {/* ── Result count + active-filter pills ── */}
      <Container className="pb-6">
        <div className="flex flex-wrap items-center gap-2">
          <p
            aria-live="polite"
            aria-atomic="true"
            className="text-[0.875rem] text-foreground-muted"
          >
            {t.results(filtered.length, searchQuery || undefined)}
          </p>

          {activeIndustry && (
            <button
              onClick={() => setFilter('industry', null)}
              className="inline-flex items-center gap-1.5 h-7 px-2.5 rounded-tag bg-accent-soft text-on-accent-soft text-[0.8125rem] font-medium"
              aria-label={`Remove filter: ${ar ? LABELS.industry[activeIndustry].ar : LABELS.industry[activeIndustry].en}`}
            >
              {ar ? LABELS.industry[activeIndustry].ar : LABELS.industry[activeIndustry].en}
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                <path d="M2 2l6 6M8 2L2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          )}
          {activeFeature && (
            <button
              onClick={() => setFilter('feature', null)}
              className="inline-flex items-center gap-1.5 h-7 px-2.5 rounded-tag bg-accent-soft text-on-accent-soft text-[0.8125rem] font-medium"
              aria-label={`Remove filter: ${ar ? LABELS.feature[activeFeature].ar : LABELS.feature[activeFeature].en}`}
            >
              {ar ? LABELS.feature[activeFeature].ar : LABELS.feature[activeFeature].en}
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                <path d="M2 2l6 6M8 2L2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          )}
        </div>
      </Container>

      {/* ── Grid ── */}
      <Container className="pb-20 md:pb-28">
        <div key={`${activeType}-${activeIndustry}-${activeFeature}-${searchParams.get('q') ?? ''}`} className="grid-fade-in">
        {filtered.length === 0 ? (
          /* No-results card */
          <div
            role="status"
            className="rounded-[24px] border border-line bg-surface overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              {/* Art tile */}
              <div
                className="flex items-center justify-center md:w-[220px] shrink-0 py-8 md:py-12"
                style={{ backgroundColor: '#E6F4F3' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/mascot/noon-confused.svg"
                  alt=""
                  aria-hidden
                  className="w-[150px] md:w-[200px] h-auto"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 p-6 md:p-8 md:justify-center">
                {searchQuery && (
                  <p className="text-[0.8125rem] text-foreground-muted">
                    {ar ? `مفيش نتايج لـ "${searchQuery}"` : `No results for "${searchQuery}"`}
                  </p>
                )}
                <h2 className="text-[1.25rem] font-semibold text-foreground leading-[1.3]">
                  {searchQuery ? t.noResultsFor(searchQuery) : t.noResultsFilters}
                </h2>
                <p className="text-[0.9375rem] text-foreground-muted">{t.noResultsTry}</p>

                {/* Suggestion chips */}
                <div className="flex flex-wrap gap-2">
                  {t.suggestionChips.map(({ label, feature }) => (
                    <button
                      key={feature}
                      onClick={() => {
                        setInputValue('');
                        setFilter('feature', feature);
                      }}
                      className={`${chipBase} border-line hover:border-foreground`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <p className="text-[0.875rem] text-foreground-muted leading-[1.7]">{t.askLine}</p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={askMailto}
                    className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-pill bg-highlight text-[var(--ink-fixed)] font-medium text-[0.9375rem] hover:opacity-90 transition-opacity w-full sm:w-auto"
                  >
                    {t.askBtn}
                  </a>
                  <button
                    onClick={hasAnyFilter ? (searchQuery ? clearSearch : clearOnlyFilters) : clearFilters}
                    className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-pill border-2 border-line text-[0.875rem] font-medium text-foreground hover:border-foreground transition-colors w-full sm:w-auto"
                  >
                    {searchQuery ? t.clearSearch : t.clearFilters}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {filtered.map(item => {
              const title   = ar ? item.title.ar   : item.title.en;
              const summary = ar ? item.summary.ar : item.summary.en;
              const isStudy = !!item.parent;
              const href    = ar
                ? (isStudy ? `/ar/work/ulfa/${item.slug.split('/')[1]}` : `/ar/work/${item.slug}`)
                : (isStudy ? `/work/ulfa/${item.slug.split('/')[1]}` : `/work/${item.slug}`);
              const readLabel  = isStudy ? t.readStudy : t.readCase;
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

                      {parentName && (
                        <p className="text-[0.75rem] text-foreground-muted -mb-2">{t.partOf(parentName)}</p>
                      )}

                      <NextLink
                        href={href}
                        className="focus-visible:outline-none after:absolute after:inset-0 after:z-[1] after:content-['']"
                      >
                        <h2 className="text-h3 font-bold text-foreground transition-colors duration-[350ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:text-accent">
                          {title}
                        </h2>
                      </NextLink>

                      <p className={`text-body text-foreground-muted flex-1 ${ar ? 'leading-[1.8]' : 'leading-[1.65]'}`}>
                        {summary}
                      </p>

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
        </div>
      </Container>

      {/* ── Mobile bottom sheet ── */}
      {filtersOpen && (
        <>
          {/* Scrim */}
          <div
            className="filter-sheet-scrim fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setFiltersOpen(false)}
            aria-hidden
          />
          {/* Sheet */}
          <div
            ref={sheetRef}
            id="filters-sheet"
            role="dialog"
            aria-label={t.filtersBtn}
            aria-modal="true"
            className="filter-sheet fixed bottom-0 start-0 end-0 z-50 md:hidden bg-background rounded-t-[28px] pt-3 pb-safe-or-6"
          >
            {/* Grab handle */}
            <div className="flex justify-center mb-4">
              <div className="w-8 h-1 rounded-full bg-foreground-muted/30" aria-hidden />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-6 mb-5">
              <p className="text-[1.0625rem] font-semibold text-foreground">{t.filtersBtn}</p>
              {(activeIndustry || activeFeature) && (
                <button
                  onClick={() => {
                    clearOnlyFilters();
                  }}
                  className="text-[0.875rem] font-medium text-foreground-muted hover:text-foreground transition-colors"
                >
                  {t.clearAll}
                </button>
              )}
            </div>

            {/* Filter groups */}
            <div className="flex flex-col gap-6 px-6 mb-6">
              <FilterChips
                group="industry"
                values={industries}
                active={activeIndustry}
                getLabel={v => ar ? LABELS.industry[v as Industry].ar : LABELS.industry[v as Industry].en}
                getCount={v => countItems(activeType, v as Industry, activeFeature)}
              />
              <FilterChips
                group="feature"
                values={features}
                active={activeFeature}
                getLabel={v => ar ? LABELS.feature[v as Feature].ar : LABELS.feature[v as Feature].en}
                getCount={v => countItems(activeType, activeIndustry, v as Feature)}
              />
            </div>

            {/* Show results button */}
            <div className="px-6">
              <button
                onClick={() => setFiltersOpen(false)}
                className="w-full h-12 rounded-pill bg-highlight text-[var(--ink-fixed)] font-semibold text-[0.9375rem]"
              >
                {t.showResults(filtered.length)}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
