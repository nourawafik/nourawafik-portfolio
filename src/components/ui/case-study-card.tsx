import NextLink from 'next/link';
import { ProjectImage } from '@/components/ui/project-image';
import { cn } from '@/lib/utils';
import type { CaseStudy } from '@/types';

interface CaseStudyCardProps extends CaseStudy {
  index: number;
  className?: string;
}

export function CaseStudyCard({ slug, title, tagline, role, timeline, platform, thumbAlt, index, className }: CaseStudyCardProps) {
  return (
    <NextLink
      href={`/work/${slug}`}
      className={cn(
        'group flex flex-col gap-6 py-8 transition-colors duration-150 md:flex-row md:items-start md:justify-between md:gap-16',
        'hover:opacity-90',
        className
      )}
      aria-label={`View ${title} case study`}
    >
      {/* Text */}
      <div className="flex flex-col gap-3 md:flex-1">
        <span className="font-mono text-[0.8125rem] text-foreground-muted">
          {String(index).padStart(2, '0')}
        </span>

        <h3 className="text-[1.25rem] font-medium leading-[1.3] tracking-[-0.01em] text-foreground group-hover:opacity-80 transition-opacity duration-150">
          {title}
        </h3>

        <p className="text-[1rem] leading-[1.65] text-foreground-muted max-w-[520px]">
          {tagline}
        </p>

        <div className="flex flex-wrap items-center gap-y-1 mt-1">
          {[role, platform, timeline].map((tag, i) => (
            <span key={tag} className="font-mono text-[0.8125rem] text-foreground-muted flex items-center">
              {i > 0 && <span className="mx-2" aria-hidden>·</span>}
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Thumbnail */}
      <div className="w-full shrink-0 overflow-hidden rounded-card bg-surface border border-border md:w-72">
        <ProjectImage slug={slug} variant="thumb" alt={thumbAlt} priority={index === 1} />
      </div>
    </NextLink>
  );
}
