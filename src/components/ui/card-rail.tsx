'use client';

import { useRef, useState, useEffect } from 'react';

interface CardRailProps {
  ariaLabel: string;
  children: React.ReactNode;
  /** Desktop grid classes, e.g. "md:grid-cols-3 md:gap-6" */
  mdClass: string;
  count: number;
  showDots?: boolean;
}

export function CardRail({ ariaLabel, children, mdClass, count, showDots }: CardRailProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const items = Array.from(rail.children) as HTMLElement[];
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = items.indexOf(entry.target as HTMLElement);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { root: rail, threshold: 0.5 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div
        ref={railRef}
        role="region"
        aria-label={ariaLabel}
        tabIndex={0}
        className={[
          'flex gap-[14px] overflow-x-auto [scroll-snap-type:x_mandatory]',
          '-mx-4 px-4 pb-[18px] pt-2',
          '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          'md:grid md:overflow-visible md:mx-0 md:px-0 md:pb-0 md:pt-0',
          mdClass,
        ].join(' ')}
      >
        {children}
      </div>
      {showDots && (
        <div className="flex md:hidden justify-center gap-2 mt-4" aria-hidden>
          {Array.from({ length: count }, (_, i) => (
            <span
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'w-[22px] bg-accent' : 'w-2 bg-border'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
