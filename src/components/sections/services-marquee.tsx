const ITEMS_EN = ['Product design', 'Bilingual websites', 'Brand identity', 'Design systems'];
const ITEMS_AR = ['تصميم منتجات', 'مواقع بلغتين', 'هوية بصرية', 'أنظمة تصميم'];

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
      className="overflow-hidden h-[56px] md:h-[72px] bg-[#0E2A2D] dark:bg-sunk dark:border-y dark:border-line"
    >
      <div
        dir={locale === 'ar' ? 'rtl' : 'ltr'}
        className={`flex items-center h-full motion-reduce:flex-nowrap whitespace-nowrap w-max ${locale === 'ar' ? 'motion-safe:animate-marquee-rtl' : 'motion-safe:animate-marquee'}`}
      >
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center text-white font-extrabold text-[1.25rem] md:text-[1.75rem] shrink-0">
            {item}
            <Dot />
          </span>
        ))}
      </div>
    </div>
  );
}
