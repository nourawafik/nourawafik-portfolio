'use client';
import { Children, ReactNode, useEffect, useRef, useState } from 'react';
import { Caption } from './caption';

interface PhoneGridProps {
  columns?: 2 | 3 | 4;
  caption?: string;
  children: ReactNode;
}

export function PhoneGrid({ columns = 2, caption, children }: PhoneGridProps) {
  const count = Children.count(children);
  const cols = columns ?? (count <= 2 ? 2 : count === 3 ? 3 : 4);

  const gridCols =
    cols === 4 ? 'md:grid-cols-2 lg:grid-cols-4' :
    cols === 3 ? 'md:grid-cols-3' :
    'md:grid-cols-2';

  const [active, setActive] = useState(0);
  const railRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          const idx = items.indexOf(visible[0].target as HTMLDivElement);
          if (idx >= 0) setActive(idx);
        }
      },
      { root: rail, threshold: 0.5 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [count]);

  const childArray = Children.toArray(children);

  return (
    <figure className="my-8">
      <div
        ref={railRef}
        className={[
          'flex gap-6 overflow-x-auto -mx-4 px-4 pb-3',
          '[scroll-snap-type:x_mandatory] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          `md:grid ${gridCols} md:gap-6 md:justify-center md:overflow-visible md:mx-0 md:px-0 md:pb-0`,
        ].join(' ')}
      >
        {childArray.map((child, i) => (
          <div
            key={i}
            ref={(el) => { itemRefs.current[i] = el; }}
            className="max-md:shrink-0 max-md:[flex:0_0_68%] max-md:[scroll-snap-align:start] md:max-w-[260px] md:justify-self-center md:w-full"
          >
            {child}
          </div>
        ))}
      </div>
      {count > 1 && (
        <div className="flex justify-center gap-1.5 mt-3 md:hidden" aria-hidden>
          {childArray.map((_, i) => (
            <span
              key={i}
              className={`rounded-full h-2 transition-[width,background-color] duration-300 ${
                i === active ? 'w-[22px] bg-accent' : 'w-2 bg-border'
              }`}
            />
          ))}
        </div>
      )}
      {caption && <Caption>{caption}</Caption>}
    </figure>
  );
}
