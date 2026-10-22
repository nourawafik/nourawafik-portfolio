const ITEMS_EN = ['Brand identity', 'Bilingual websites', 'Product design', 'Social content'];
const ITEMS_AR = ['هوية بصرية', 'مواقع بلغتين', 'تصميم منتجات', 'محتوى سوشيال'];

function Dot() {
  return (
    <span className="inline-block w-2 h-2 rounded-full bg-highlight mx-6 shrink-0" aria-hidden />
  );
}

interface ServicesMarqueeProps {
  locale?: 'en' | 'ar';
}

export function ServicesMarquee({ locale = 'en' }: ServicesMarqueeProps) {
  const items = locale === 'ar' ? ITEMS_AR : ITEMS_EN;
  const doubled = [...items, ...items];

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden bg-[#0E2A2D] dark:bg-sunk dark:border-y dark:border-line"
      style={{ height: '72px' }}
    >
      <div className="flex items-center h-full motion-safe:animate-marquee motion-reduce:flex-nowrap whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center text-white font-extrabold text-[1.75rem] shrink-0">
            {item}
            <Dot />
          </span>
        ))}
      </div>
    </div>
  );
}
