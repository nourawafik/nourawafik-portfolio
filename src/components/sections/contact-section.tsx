'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { NoonWaveOnYellow } from '@/components/ui/noon-wave-on-yellow';

const COPY = {
  en: {
    h2: 'Got an idea? Let\'s talk.',
    body: 'Send me a few lines about your project and I\'ll reply myself.',
    cta: 'Get a quote',
    ctaSubject: 'Project inquiry from nourawafik.com',
    ctaBody: "Hi Noura,\n\nI'd like a quote for:\n- What I need:\n- Company or project:\n- Language: Arabic / English / both\n- When I need it:\n\nThanks,",
    copyEmail: 'Copy email',
    toastCopied: 'Email copied',
  },
  ar: {
    h2: 'عندك فكرة؟ يلا نتكلم.',
    body: 'ابعتلي سطرين عن مشروعك، وهرد عليك بنفسي.',
    cta: 'اطلب عرض سعر',
    ctaSubject: 'طلب عرض سعر من الموقع',
    ctaBody: 'أهلا نورا،\n\nعايز عرض سعر لـ:\n- محتاج إيه:\n- الشركة أو المشروع:\n- اللغة: عربي / إنجليزي / الاتنين\n- محتاجه إمتى:\n\nشكرا،',
    copyEmail: 'انسخ الإيميل',
    toastCopied: 'اتنسخ الإيميل',
  },
} as const;

const EMAIL = 'hello@nourawafik.com';

interface ContactSectionProps {
  locale?: 'en' | 'ar';
}

export function ContactSection({ locale = 'en' }: ContactSectionProps) {
  const t  = COPY[locale];
  const ar = locale === 'ar';

  const [toastVisible, setToastVisible] = useState(false);
  const [waving, setWaving]             = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* IntersectionObserver → wave once per page view */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWaving(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* Copy email to clipboard */
  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      if (toastTimer.current) clearTimeout(toastTimer.current);
      setToastVisible(true);
      toastTimer.current = setTimeout(() => setToastVisible(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }, []);

  const quoteHref = `mailto:${EMAIL}?subject=${encodeURIComponent(t.ctaSubject)}&body=${encodeURIComponent(t.ctaBody)}`;

  return (
    <section
      ref={sectionRef}
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 md:py-32"
    >
      <div className="mx-auto w-full px-4 md:px-12 max-w-[1200px]">
        <div
          className="relative flex flex-col gap-8 md:flex-row md:items-center md:gap-12 rounded-[28px] md:rounded-[40px] p-7 md:px-14 md:py-16"
          style={{ backgroundColor: 'var(--highlight)', color: 'var(--ink-fixed)' }}
        >
          {/* Text + actions */}
          <div className="flex flex-col gap-5 flex-1">
            <h2
              id="contact-heading"
              className={`text-h2 font-extrabold ${ar ? 'leading-[1.4]' : 'leading-[1.2]'}`}
            >
              {t.h2}
            </h2>
            <p className={`text-[1.125rem] max-w-[440px] ${ar ? 'leading-[1.8]' : 'leading-[1.6]'}`}>
              {t.body}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-wrap">
              {/* Get a quote — mailto with template */}
              <a
                href={quoteHref}
                className="inline-flex items-center justify-center rounded-pill px-5 py-2.5 text-[0.875rem] font-medium text-white transition-opacity hover:opacity-80 active:opacity-70"
                style={{ backgroundColor: 'var(--ink-fixed)' }}
              >
                {t.cta}
              </a>

              {/* Email + copy button */}
              <div className="flex items-center gap-2">
                <span dir="ltr" className="text-body select-all">
                  {EMAIL}
                </span>
                <div className="relative">
                  <button
                    onClick={copyEmail}
                    aria-label={t.copyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-pill border border-current/30 text-[0.8125rem] font-medium hover:border-current/60 transition-colors"
                  >
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                      <rect x="4.5" y="4.5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                      <path d="M3 8.5H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5a1 1 0 0 1 1 1v1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    {t.copyEmail}
                  </button>

                  {/* Toast */}
                  {toastVisible && (
                    <span
                      role="status"
                      aria-live="polite"
                      className="toast-enter absolute bottom-full start-0 mb-2 whitespace-nowrap rounded-lg px-3 py-1.5 text-[0.8125rem] font-medium shadow-md"
                      style={{ backgroundColor: 'var(--ink-fixed)', color: 'var(--highlight)' }}
                    >
                      {t.toastCopied}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Noon wave illustration */}
          <div className="shrink-0 self-end md:self-auto">
            <NoonWaveOnYellow
              waving={waving}
              className="w-[150px] md:w-[220px] drop-shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
