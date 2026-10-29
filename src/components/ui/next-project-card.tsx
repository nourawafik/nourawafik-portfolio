import Link from 'next/link';
import { ArrowIcon } from '@/components/ui/arrow-icon';
import { getNextProject } from '@/content/work';

interface NextProjectCardProps {
  currentSlug: string;
  locale?: 'en' | 'ar';
}

export function NextProjectCard({ currentSlug, locale = 'en' }: NextProjectCardProps) {
  const ar = locale === 'ar';
  const next = getNextProject(currentSlug);
  if (!next) return null;

  const title   = ar ? next.title.ar   : next.title.en;
  const summary = ar ? next.summary.ar : next.summary.en;
  const label   = ar ? 'المشروع التالي' : 'Next project';
  const href    = ar ? `/ar/work/${next.slug}` : `/work/${next.slug}`;

  return (
    <Link
      href={href}
      className="group relative flex items-center justify-between rounded-2xl bg-[#0E2A2D] dark:bg-[#0A2023] dark:border dark:border-[#2B4A4E] px-8 py-8 md:px-10 overflow-hidden hover:opacity-90 transition-opacity duration-200"
      aria-label={`${label}: ${title}`}
    >
      <div className="flex flex-col gap-1.5">
        <p className="text-[0.75rem] text-white/50">{label}</p>
        <p className="text-[1.375rem] font-semibold text-white leading-[1.3]">{title}</p>
        <p className="text-[0.875rem] text-white/60 leading-[1.55]">{summary}</p>
      </div>
      <div
        className="shrink-0 ms-6 w-14 h-14 rounded-full bg-highlight flex items-center justify-center motion-safe:transition-transform motion-safe:duration-[350ms] motion-safe:group-hover:translate-x-1 rtl:motion-safe:group-hover:-translate-x-1"
        style={{ color: 'var(--ink-fixed)' }}
      >
        <ArrowIcon size={20} />
      </div>
    </Link>
  );
}
