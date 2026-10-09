'use client';

import { useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { AUDIENCES, type AudienceSegment } from '@/content/audience-copy';
import { cn } from '@/lib/utils';

const TABLIST_LABEL = { en: 'Audience', ar: 'الجمهور' } as const;

function Segment({ segment }: { segment: AudienceSegment }) {
  if (typeof segment === 'string') return segment;
  // dir="ltr" isolates the token so `--line-strong` doesn't reorder inside Arabic text
  return (
    <code dir="ltr" className="font-mono text-[0.9em]">
      {segment.code}
    </code>
  );
}

// Tabs above the hero H1 (passed as children), the selected audience's paragraph
// below it. All panels share one grid cell, so the hero is always as tall as the
// longest paragraph and switching never moves the page.
export function AudienceSwitch({ locale, children }: { locale: 'en' | 'ar'; children: ReactNode }) {
  const items = AUDIENCES[locale];
  const ar = locale === 'ar';
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  // Arrows move and activate at once; in RTL the left arrow goes forward.
  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const last = items.length - 1;
    const forward = ar ? 'ArrowLeft' : 'ArrowRight';
    const back = ar ? 'ArrowRight' : 'ArrowLeft';
    let next: number | null = null;
    if (event.key === forward) next = active === last ? 0 : active + 1;
    else if (event.key === back) next = active === 0 ? last : active - 1;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = last;
    if (next === null) return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <>
      <div
        role="tablist"
        aria-label={TABLIST_LABEL[locale]}
        onKeyDown={onKeyDown}
        className="mb-8 flex flex-wrap gap-x-3 gap-y-1"
      >
        {items.map((item, i) => {
          const selected = i === active;
          return (
            <button
              key={item.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              id={`audience-tab-${item.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`audience-panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={cn(
                // color/border only: transitioning outline-color would fade the focus ring in from ink
                'cursor-pointer border-b-2 py-1.5 transition-[color,border-color] duration-150',
                ar ? 'text-[0.8125rem] leading-[1.85]' : 'text-[0.875rem] leading-[1.5]',
                selected
                  ? 'border-foreground text-foreground'
                  : 'border-transparent text-foreground-muted hover:text-foreground'
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {children}

      <div className="mt-8 grid md:mt-10">
        {items.map((item, i) => {
          const selected = i === active;
          return (
            <div
              key={item.id}
              id={`audience-panel-${item.id}`}
              role="tabpanel"
              aria-labelledby={`audience-tab-${item.id}`}
              tabIndex={selected ? 0 : -1}
              // Visibility flips instantly (the outgoing paragraph never overlaps the
              // incoming one in the shared cell); only the incoming panel fades in.
              className={cn(
                '[grid-area:1/1] transition-opacity duration-200 ease-out motion-reduce:transition-none',
                selected ? 'visible opacity-100' : 'invisible opacity-0'
              )}
            >
              <p
                className={cn(
                  'max-w-[36rem] text-body text-foreground md:text-subtitle',
                  ar ? 'leading-[1.85]' : 'leading-[1.6]'
                )}
              >
                {item.body.map((segment, j) => (
                  <Segment key={j} segment={segment} />
                ))}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
