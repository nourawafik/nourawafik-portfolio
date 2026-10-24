import { Children, ReactNode } from 'react';
import { Caption } from './caption';

interface PhoneGridProps {
  columns?: 2 | 3 | 4;
  caption?: string;
  children: ReactNode;
}

export function PhoneGrid({ columns = 2, caption, children }: PhoneGridProps) {
  const count = Children.count(children);
  const cols = columns ?? (count <= 2 ? 2 : count === 3 ? 3 : 4);
  const gridCols = cols === 4 ? 'md:grid-cols-4' : cols === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2';

  return (
    <figure className="my-8">
      <div
        className={[
          'flex gap-4 overflow-x-auto -mx-4 px-4 pb-3',
          '[scroll-snap-type:x_mandatory] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          `md:grid ${gridCols} md:gap-4 md:overflow-visible md:mx-0 md:px-0 md:pb-0`,
        ].join(' ')}
      >
        {Children.map(children, (child) => (
          <div className="max-md:shrink-0 max-md:[flex:0_0_72%] max-md:[scroll-snap-align:start]">
            {child}
          </div>
        ))}
      </div>
      {caption && <Caption>{caption}</Caption>}
    </figure>
  );
}
