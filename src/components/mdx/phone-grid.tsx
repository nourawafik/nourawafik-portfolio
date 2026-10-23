import { Children, ReactNode } from 'react';

interface PhoneGridProps {
  columns?: 2 | 3;
  children: ReactNode;
}

export function PhoneGrid({ columns = 3, children }: PhoneGridProps) {
  return (
    <div
      className={[
        'my-8',
        'flex gap-4 overflow-x-auto -mx-4 px-4 pb-3',
        '[scroll-snap-type:x_mandatory] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
        columns === 3
          ? 'md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:mx-0 md:px-0 md:pb-0'
          : 'md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:mx-0 md:px-0 md:pb-0',
      ].join(' ')}
    >
      {Children.map(children, (child) => (
        <div className="max-md:shrink-0 max-md:[flex:0_0_72%] max-md:[scroll-snap-align:start]">
          {child}
        </div>
      ))}
    </div>
  );
}
