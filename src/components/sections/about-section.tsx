import Image from 'next/image';

const COPY = {
  en: {
    eyebrow: 'About',
    h2Line1: 'Hi, I\'m Noura',
    body: 'A brand and product designer based in Cairo. I work end to end, from research and brand identity to developer-ready screens. I also know code and marketing, so the design can be built and reaches the right audience.',
    traits: [
      {
        title: 'Truly bilingual',
        desc: 'Arabic designed from the start, not translated from English.',
      },
      {
        title: 'Idea to launch',
        desc: 'Brand, UI, build and marketing in one place.',
      },
      {
        title: 'Design systems',
        desc: 'Every project ships with a system that grows with you.',
      },
    ],
  },
  ar: {
    eyebrow: 'عني',
    h2Line1: 'أهلا، أنا نورا',
    body: 'مصممة براند ومنتجات رقمية من القاهرة. بشتغل على الشغل من أوله لآخره: من البحث وهوية البراند لحد الواجهات الجاهزة للتطوير، وكمان بفهم في الكود والتسويق، فالتصميم بيطلع قابل للتنفيذ وموجه للجمهور الصحيح.',
    traits: [
      {
        title: 'بلغتين بجد',
        desc: 'تصميم عربي من الأساس، مش ترجمة لتصميم إنجليزي.',
      },
      {
        title: 'من الفكرة للتنفيذ',
        desc: 'براند وواجهات وتطوير وتسويق في مكان واحد.',
      },
      {
        title: 'أنظمة تصميم',
        desc: 'كل مشروع بيطلع بنظام يكبر معاك.',
      },
    ],
  },
} as const;

interface AboutSectionProps {
  locale?: 'en' | 'ar';
}

export function AboutSection({ locale = 'en' }: AboutSectionProps) {
  const t = COPY[locale];
  const ar = locale === 'ar';

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 md:py-32 bg-surface dark:bg-sunk"
    >
      <div className="mx-auto w-full px-6 md:px-12 max-w-[1200px]">
        <div className="flex flex-col gap-12 md:flex-row md:gap-16 md:items-start">
          {/* Photo slot */}
          <div className="relative shrink-0 w-full max-w-[320px] mx-auto md:mx-0 md:w-[320px]">
            <div
              className="rounded-[40px] overflow-hidden"
              style={{ aspectRatio: '1 / 1' }}
            >
              <Image
                src="/images/noura-about.webp"
                alt={ar ? 'صورة نورا وفيق' : 'Photo of Noura Wafik'}
                width={320}
                height={320}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Logo mark circle overlapping bottom-end corner */}
            <div
              className="absolute bottom-0 end-0 translate-x-2 translate-y-2 w-24 h-24 rounded-full bg-accent flex items-center justify-center ring-[6px] ring-surface dark:ring-sunk"
            >
              <Image
                src="/logo/mark-on-dark.svg"
                alt=""
                width={48}
                height={48}
                className="w-10 h-10 object-contain"
                aria-hidden
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6 flex-1">
            <p className="text-[0.9375rem] font-medium text-on-accent-soft">{t.eyebrow}</p>
            <h2
              id="about-heading"
              className={`text-h2 font-bold text-foreground ${ar ? 'leading-[1.4]' : 'leading-[1.2]'}`}
            >
              {t.h2Line1}
              <span className="text-highlight" aria-hidden>.</span>
            </h2>
            <p className={`text-[1.125rem] text-foreground-muted max-w-[560px] ${ar ? 'leading-[1.8]' : 'leading-[1.6]'}`}>
              {t.body}
            </p>

            {/* Trait cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
              {t.traits.map((trait) => (
                <div key={trait.title} className="card-shadow-trait flex flex-col gap-2 rounded-[20px] bg-background p-5">
                  <h3 className="text-body font-medium text-foreground">{trait.title}</h3>
                  <p className={`text-small text-foreground-muted ${ar ? 'leading-[1.7]' : 'leading-[1.5]'}`}>
                    {trait.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
