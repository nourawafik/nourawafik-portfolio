import NextLink from 'next/link';
import { ProjectImage } from '@/components/ui/project-image';
import { cn } from '@/lib/utils';
import type { CaseStudy } from '@/types';

interface CaseStudyCardProps extends CaseStudy {
  index: number;
  className?: string;
  locale?: 'en' | 'ar';
}

const READ_LABEL = { en: 'Read the case study', ar: 'اقرأ دراسة الحالة' } as const;

export function CaseStudyCard({
  slug,
  title,
  tagline,
  role,
  timeline,
  platform,
  thumbAlt,
  index,
  className,
  locale = 'en',
}: CaseStudyCardProps) {
  const ar = locale === 'ar';
  const href = ar ? `/ar/work/${slug}` : `/work/${slug}`;

  return (
    <article
      className={cn(
        'group flex flex-col gap-6 py-10 md:flex-row md:items-start md:justify-between md:gap-16',
        className
      )}
    >
      {/* Text */}
      <div className="flex flex-col gap-4 md:flex-1">
        <span className="text-small text-foreground-subtle tabular-nums" aria-hidden>
          {String(index).padStart(2, '0')}
        </span>

        <NextLink
          href={href}
          className="group/link focus-visible:outline-none"
          aria-label={`${title} — ${READ_LABEL[locale]}`}
        >
          <h3 className="text-h3 font-medium text-foreground group-hover/link:text-accent transition-colors duration-150">
            {title}
          </h3>
        </NextLink>

        <p className="text-body text-foreground-muted max-w-[520px] leading-[1.65]">
          {tagline}
        </p>

        <ul className="flex flex-wrap gap-2 list-none mt-1" role="list">
          {[role, platform, timeline].map((tag) => (
            <li
              key={tag}
              className="px-3 py-0.5 rounded-tag bg-accent-soft text-on-accent-soft text-small"
            >
              {tag}
            </li>
          ))}
        </ul>

        <NextLink
          href={href}
          className="mt-2 inline-flex items-center gap-1.5 text-small text-accent hover:underline underline-offset-4 focus-visible:outline-none group/arrow"
          tabIndex={-1}
          aria-hidden
        >
          {READ_LABEL[locale]}
          <span
            className="transition-transform duration-150 group-hover/arrow:translate-x-0.5 rtl:rotate-180 rtl:group-hover/arrow:-translate-x-0.5"
            aria-hidden
          >
            →
          </span>
        </NextLink>
      </div>

      {/* Thumbnail */}
      <NextLink
        href={href}
        className="block w-full shrink-0 overflow-hidden rounded-card bg-surface border border-border md:w-72 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
        tabIndex={-1}
        aria-hidden
      >
        <ProjectImage slug={slug} variant="thumb" alt={thumbAlt} priority={index === 1} />
      </NextLink>
    </article>
  );
}
