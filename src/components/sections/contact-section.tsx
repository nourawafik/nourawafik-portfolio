const COPY = {
  en: {
    h2: 'Got an idea? Let\'s talk.',
    body: 'Send me a few lines about your project and I\'ll reply myself.',
    cta: 'Get a quote',
    ctaHref: 'mailto:hello@nourawafik.com?subject=Quote%20request',
    email: 'hello@nourawafik.com',
  },
  ar: {
    h2: 'عندك فكرة؟ يلا نتكلم.',
    body: 'ابعتلي سطرين عن مشروعك، وهرد عليك بنفسي.',
    cta: 'اطلب عرض سعر',
    ctaHref: 'mailto:hello@nourawafik.com?subject=طلب%20عرض%20سعر',
    email: 'hello@nourawafik.com',
  },
} as const;

interface ContactSectionProps {
  locale?: 'en' | 'ar';
}

export function ContactSection({ locale = 'en' }: ContactSectionProps) {
  const t = COPY[locale];
  const ar = locale === 'ar';

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 md:py-32"
    >
      <div className="mx-auto w-full px-4 md:px-12 max-w-[1200px]">
        <div
          className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12 rounded-[28px] md:rounded-[40px] p-7 md:px-14 md:py-16"
          style={{ backgroundColor: 'var(--highlight)', color: '#0E2A2D' }}
        >
          {/* Text + actions */}
          <div className="flex flex-col gap-5 flex-1">
            <h2
              id="contact-heading"
              className={`text-h2 font-extrabold text-foreground ${ar ? 'leading-[1.4]' : 'leading-[1.2]'}`}
            >
              {t.h2}
            </h2>
            <p className={`text-[1.125rem] text-foreground max-w-[440px] ${ar ? 'leading-[1.8]' : 'leading-[1.6]'}`}>
              {t.body}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-wrap">
              {/* Dark button */}
              <a
                href={t.ctaHref}
                className="inline-flex items-center justify-center rounded-pill px-5 py-2.5 text-[0.875rem] font-medium text-white transition-opacity hover:opacity-80 active:opacity-70"
                style={{ backgroundColor: 'var(--fg)' }}
              >
                {t.cta}
              </a>
              {/* Plain email link */}
              <a
                href="mailto:hello@nourawafik.com"
                dir="ltr"
                className="text-body text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity"
              >
                {t.email}
              </a>
            </div>
          </div>

          {/* Noon waving */}
          <div className="shrink-0 self-end md:self-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/mascot/noon-on-yellow.svg"
              alt=""
              width={140}
              height={140}
              aria-hidden
              className="drop-shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
