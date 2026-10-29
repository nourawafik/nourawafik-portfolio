'use client';

import { useState, useEffect, useRef, useId } from 'react';
import { useSearchParams } from 'next/navigation';
import NextLink from 'next/link';
import Script from 'next/script';
import { CopyEmailButton } from '@/components/ui/copy-email-button';

/* ─── Copy ──────────────────────────────────────────────────── */
const COPY = {
  en: {
    eyebrow: 'Get a quote',
    h1: 'Tell me about your project',
    lead: "A few details are enough to start. I'll read your request myself and reply by email.",
    stepsTitle: 'What happens next',
    steps: [
      'You send the details',
      'I review them and reply with any questions',
      'You get a quote that fits what the project needs',
    ],
    emailLine: 'Prefer email?',
    copyEmail: 'Copy email',
    emailCopied: 'Copied',

    labels: {
      name: 'Your name',
      email: 'Email',
      phone: 'Phone or WhatsApp',
      phoneOptional: '(optional)',
      phonePlaceholder: '+20 10 0000 0000',
      services: 'What do you need?',
      company: 'Company or project name',
      companyOptional: '(optional)',
      companyPlaceholder: 'Acme Studio',
      language: 'Language',
      languageOptional: '(optional)',
      start: 'When would you like to start?',
      startOptional: '(optional)',
      budget: 'Approximate budget',
      budgetOptional: '(optional)',
      budgetPlaceholder: 'Amount and currency',
      notes: 'Anything else I should know?',
      notesOptional: '(optional)',
      notesPlaceholder: 'Links, references, deadlines…',
    },

    serviceOptions: [
      { value: 'brand', label: 'Brand identity' },
      { value: 'site',  label: 'Website or landing page' },
      { value: 'app',   label: 'App or web platform' },
      { value: 'ds',    label: 'Design system' },
      { value: 'other', label: 'Something else' },
    ],
    languageOptions: [
      { value: 'ar',   label: 'Arabic' },
      { value: 'en',   label: 'English' },
      { value: 'both', label: 'Both' },
    ],
    startOptions: [
      { value: 'soon',   label: 'As soon as possible' },
      { value: 'month',  label: 'Within a month' },
      { value: 'later',  label: 'Later' },
      { value: 'unsure', label: 'Not sure yet' },
    ],

    submit: 'Send request',
    submitting: 'Sending…',
    privacy: 'Your details come only to me and are used only to reply to you.',

    errors: {
      nameEmpty: 'Enter your name',
      emailInvalid: 'Enter an email like name@company.com',
      noService: 'Choose at least one',
      phoneInvalid: 'Enter a phone number with digits only, e.g. +20 10 0000 0000',
    },

    errorBanner: 'Your request couldn\'t be sent. Please email me at hello@nourawafik.com.',

    success: {
      heading: (name: string) => `Thanks, ${name}. Your request is with me`,
      line: (email: string) =>
        `I'll read it and reply to ${email}. If you don't see my reply, check your spam folder.`,
      seeWork: 'See my work',
      backHome: 'Back to home',
    },
  },
  ar: {
    eyebrow: 'اطلب عرض سعر',
    h1: 'أخبرني عن مشروعك',
    lead: 'بعض التفاصيل تكفي للبداية. سأقرأ طلبك بنفسي وأرد عليك بالإيميل.',
    stepsTitle: 'ماذا يحدث بعد ذلك',
    steps: [
      'ترسل تفاصيل مشروعك',
      'أراجعها وأرد عليك بأي أسئلة',
      'يصلك عرض سعر يناسب احتياج المشروع',
    ],
    emailLine: 'تفضل الإيميل؟',
    copyEmail: 'انسخ الإيميل',
    emailCopied: 'تم النسخ',

    labels: {
      name: 'الاسم',
      email: 'الإيميل',
      phone: 'رقم الجوال أو واتساب',
      phoneOptional: '(اختياري)',
      phonePlaceholder: '+966 50 000 0000',
      services: 'ما الخدمة التي تحتاجها؟',
      company: 'اسم الشركة أو المشروع',
      companyOptional: '(اختياري)',
      companyPlaceholder: 'مثال: متجر الورد',
      language: 'اللغة',
      languageOptional: '(اختياري)',
      start: 'متى تريد أن تبدأ؟',
      startOptional: '(اختياري)',
      budget: 'الميزانية التقريبية',
      budgetOptional: '(اختياري)',
      budgetPlaceholder: 'المبلغ والعملة',
      notes: 'أي تفاصيل أخرى تريد إضافتها؟',
      notesOptional: '(اختياري)',
      notesPlaceholder: 'روابط، أمثلة تعجبك، مواعيد مهمة…',
    },

    serviceOptions: [
      { value: 'brand', label: 'هوية بصرية' },
      { value: 'site',  label: 'موقع أو صفحة هبوط' },
      { value: 'app',   label: 'تطبيق أو منصة ويب' },
      { value: 'ds',    label: 'نظام تصميم' },
      { value: 'other', label: 'شيء آخر' },
    ],
    languageOptions: [
      { value: 'ar',   label: 'عربي' },
      { value: 'en',   label: 'إنجليزي' },
      { value: 'both', label: 'الاثنين' },
    ],
    startOptions: [
      { value: 'soon',   label: 'في أقرب وقت' },
      { value: 'month',  label: 'خلال شهر' },
      { value: 'later',  label: 'لاحقا' },
      { value: 'unsure', label: 'غير محدد' },
    ],

    submit: 'أرسل الطلب',
    submitting: 'جار الإرسال…',
    privacy: 'بياناتك تصلني أنا فقط، وتستخدم للرد عليك فقط.',

    errors: {
      nameEmpty: 'اكتب اسمك',
      emailInvalid: 'اكتب إيميل صحيح، مثل name@company.com',
      noService: 'اختر خدمة واحدة على الأقل',
      phoneInvalid: 'اكتب رقما صحيحا بالأرقام فقط، مثل +20 10 0000 0000',
    },

    errorBanner: 'تعذر إرسال الطلب. راسلني مباشرة على hello@nourawafik.com.',

    success: {
      heading: (name: string) => `شكرا ${name}، وصلني طلبك`,
      line: (email: string) =>
        `سأقرأه وأرد عليك على ${email}. لو لم يظهر ردي، راجع مجلد الرسائل غير المرغوب فيها.`,
      seeWork: 'شاهد أعمالي',
      backHome: 'العودة للرئيسية',
    },
  },
} as const;

const EMAIL = 'hello@nourawafik.com';

/* ─── Styles ─────────────────────────────────────────────────── */
const inputClass =
  'h-[52px] w-full rounded-[14px] border-2 border-line bg-transparent px-4 text-[0.9375rem] text-foreground placeholder:text-foreground-muted outline-none transition-colors duration-150 focus:border-ink';
const inputFilledClass = 'border-ink';
const textareaClass =
  'w-full min-h-[112px] rounded-[14px] border-2 border-line bg-transparent px-4 py-3 text-[0.9375rem] text-foreground placeholder:text-foreground-muted outline-none transition-colors duration-150 focus:border-ink resize-y';
const labelClass = 'text-[0.9375rem] font-semibold text-foreground';
const optionalClass = 'text-[0.875rem] font-normal text-foreground-muted ms-1';
const errorClass = 'flex items-center gap-1.5 mt-1.5 text-[0.8125rem] font-medium';

function ErrorIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <circle cx="7" cy="7" r="6.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 4.5v3M7 9.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Main component ─────────────────────────────────────────── */
interface QuoteFormProps {
  locale: 'en' | 'ar';
}

export function QuoteForm({ locale }: QuoteFormProps) {
  const t  = COPY[locale];
  const ar = locale === 'ar';
  const searchParams = useSearchParams();

  const headingRef      = useRef<HTMLHeadingElement>(null);
  const successRef      = useRef<HTMLHeadingElement>(null);
  const firstErrRef     = useRef<HTMLElement | null>(null);
  const turnstileRef    = useRef<HTMLDivElement>(null);
  const widgetIdRef     = useRef<string | null>(null);
  const scriptReadyRef  = useRef(false);

  const nameId     = useId();
  const emailId    = useId();
  const phoneId    = useId();
  const companyId  = useId();
  const budgetId   = useId();
  const notesId    = useId();

  /* ── Field state ── */
  const [name,     setName]     = useState('');
  const [email,    setEmail]    = useState('');
  const [phone,    setPhone]    = useState('');
  const [services, setServices] = useState<string[]>([]);
  const [company,  setCompany]  = useState('');
  const [language, setLanguage] = useState('');
  const [start,    setStart]    = useState('');
  const [budget,   setBudget]   = useState('');
  const [notes,    setNotes]    = useState('');
  const [honeypot, setHoneypot] = useState('');

  /* ── UI state ── */
  const [touched,        setTouched]        = useState<Record<string, boolean>>({});
  const [submitting,     setSubmitting]     = useState(false);
  const [submitted,      setSubmitted]      = useState(false);
  const [sendError,      setSendError]      = useState(false);
  const [turnstileToken, setTurnstileToken] = useState('');
  const [turnstileReady, setTurnstileReady] = useState(false);

  /* ── URL pre-fill ── */
  useEffect(() => {
    const svc   = searchParams.get('service');
    const nts   = searchParams.get('notes');
    if (svc && t.serviceOptions.some(s => s.value === svc)) {
      setServices([svc]);
    }
    if (nts) setNotes(nts);
  }, [searchParams, t.serviceOptions]);

  /* ── Phone sanitizer / validator ── */
  const sanitizePhone = (raw: string) => raw.replace(/[^\d+\s]/g, '');
  const phoneDigits = (raw: string) => raw.replace(/[\s+]/g, '').replace(/\D/g, '');
  const phoneError = (() => {
    if (!phone.trim()) return '';
    const cleaned = phone.trim();
    if (!/^[+\d][\d\s]*$/.test(cleaned)) return t.errors.phoneInvalid;
    const digits = phoneDigits(cleaned);
    if (digits.length < 7 || digits.length > 15) return t.errors.phoneInvalid;
    return '';
  })();

  /* ── Validation ── */
  const nameError  = name.trim() === '' ? t.errors.nameEmpty : '';
  const emailError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ? t.errors.emailInvalid : '';
  const svcError   = services.length === 0 ? t.errors.noService : '';

  const isValid = !nameError && !emailError && !svcError && !phoneError;

  /* ── Service toggle ── */
  const toggleService = (val: string) => {
    setServices(prev =>
      prev.includes(val) ? prev.filter(s => s !== val) : [...prev, val]
    );
    setTouched(t => ({ ...t, services: true }));
  };

  /* ── Blur handler ── */
  const blur = (field: string) => setTouched(t => ({ ...t, [field]: true }));


  /* ── Submit ── */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, services: true });

    if (!isValid) {
      // focus first invalid field
      if (nameError)  { firstErrRef.current = document.getElementById(nameId);  }
      else if (emailError) { firstErrRef.current = document.getElementById(emailId); }
      else if (svcError)   { firstErrRef.current = document.querySelector('[data-services-group]') as HTMLElement; }
      (firstErrRef.current as HTMLElement | null)?.focus();
      return;
    }

    // Honeypot check is server-side only; don't silently block on client

    setSubmitting(true);
    setSendError(false);

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, services, company, language, start, budget, notes, locale, turnstileToken, website: honeypot }),
      });
      if (!res.ok) throw new Error('send failed');
      setSubmitted(true);
    } catch {
      setSendError(true);
      // Reset widget so the visitor can try again
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const ts = (window as any).turnstile;
      if (ts?.reset && widgetIdRef.current !== null) {
        ts.reset(widgetIdRef.current);
        setTurnstileToken('');
      }
    } finally {
      setSubmitting(false);
    }
  };

  /* Focus success heading after submit */
  useEffect(() => {
    if (submitted) successRef.current?.focus();
  }, [submitted]);

  /* Explicit Turnstile rendering */
  const mountWidget = () => {
    if (!turnstileRef.current || widgetIdRef.current !== null) return;
    const sitekey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ts = (window as any).turnstile;
    if (!ts?.render) return;
    widgetIdRef.current = ts.render(turnstileRef.current, {
      sitekey,
      language: locale,
      callback: (token: string) => setTurnstileToken(token),
      'expired-callback': () => setTurnstileToken(''),
      'error-callback': () => setTurnstileToken(''),
    });
    setTurnstileReady(true);
  };

  useEffect(() => {
    // Script may already be loaded (Next.js deduplicates <Script> on client nav)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((window as any).turnstile?.render) {
      scriptReadyRef.current = true;
      mountWidget();
    } else if (scriptReadyRef.current) {
      mountWidget();
    }
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const ts = (window as any).turnstile;
      if (ts?.remove && widgetIdRef.current !== null) {
        ts.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── Error color CSS var ── */
  const errorColor = 'var(--color-error, #C23B3B)';

  /* ─── Success state ─────────────────────────────────────────── */
  if (submitted) {
    return (
      <div className="py-16 md:py-24">
        <div className="mx-auto w-full px-4 md:px-12 max-w-[1200px]">
          <div className="max-w-[560px] mx-auto text-center flex flex-col items-center gap-8">
            <div
              className="w-[160px] h-[160px] rounded-[32px] flex items-center justify-center"
              style={{ backgroundColor: '#E6F4F3' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/mascot/noon-celebrate.svg" alt="" width={120} height={120} aria-hidden />
            </div>

            <div className="flex flex-col gap-4">
              <h1
                ref={successRef}
                tabIndex={-1}
                role="status"
                className={`text-h2 font-bold text-foreground outline-none ${ar ? 'leading-[1.4]' : 'leading-[1.2]'}`}
              >
                {t.success.heading(name)}
              </h1>
              <p className={`text-body text-foreground-muted ${ar ? 'leading-[1.8]' : 'leading-[1.6]'}`}>
                {t.success.line(email)}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <NextLink
                href={ar ? '/ar/work' : '/work'}
                className="inline-flex items-center justify-center h-12 px-6 rounded-pill text-[var(--ink-fixed)] font-semibold text-[0.9375rem]"
                style={{ backgroundColor: 'var(--highlight)' }}
              >
                {t.success.seeWork}
              </NextLink>
              <NextLink
                href={ar ? '/ar' : '/'}
                className="inline-flex items-center justify-center h-12 px-6 rounded-pill border-2 border-foreground text-foreground font-semibold text-[0.9375rem] hover:bg-foreground/5 transition-colors"
              >
                {t.success.backHome}
              </NextLink>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Info column (shared between desktop start + mobile bottom) ── */
  const stepsBlock = (
    <div className="flex flex-col gap-6">
      {/* Noon tile */}
      <div
        className="flex items-center justify-center rounded-[24px] h-[160px]"
        style={{ backgroundColor: '#E6F4F3' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/mascot/noon-point.svg" alt="" width={100} height={100} aria-hidden />
      </div>

      {/* Steps */}
      <div className="flex flex-col gap-4">
        <p className="text-[0.875rem] font-semibold text-foreground-muted uppercase tracking-[0.06em]">
          {t.stepsTitle}
        </p>
        <ol className="flex flex-col gap-3 list-none">
          {t.steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[0.75rem] font-bold text-[var(--ink-fixed)]"
                style={{ backgroundColor: 'var(--highlight)' }}
              >
                {i + 1}
              </span>
              <span className={`text-[0.9375rem] text-foreground-muted ${ar ? 'leading-[1.7]' : 'leading-[1.55]'}`}>
                {step}
              </span>
            </li>
          ))}
        </ol>
      </div>

      {/* Email line */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-[0.875rem] text-foreground-muted">{t.emailLine}</span>
        <a
          href={`mailto:${EMAIL}`}
          dir="ltr"
          className="text-[0.875rem] text-foreground underline underline-offset-4 hover:text-accent transition-colors"
        >
          {EMAIL}
        </a>
        <CopyEmailButton email={EMAIL} locale={locale} />
      </div>
    </div>
  );

  /* ─── Form card ──────────────────────────────────────────────── */
  const formCard = (
    <div className="rounded-[28px] border border-line p-[22px] md:p-9">
      {/* Send error banner */}
      {sendError && (
        <div
          role="alert"
          className="flex items-start gap-3 mb-6 p-4 rounded-[14px] text-[0.875rem]"
          style={{ backgroundColor: `${errorColor}18`, color: errorColor, border: `1px solid ${errorColor}40` }}
        >
          <ErrorIcon />
          <div className="flex-1 flex flex-wrap items-center gap-2">
            {t.errorBanner}
            <CopyEmailButton email={EMAIL} locale={locale} className="ms-1" />
          </div>
        </div>
      )}

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          {/* Honeypot – unguessable name so autofill ignores it */}
          <input
            type="text"
            name="nw_url_field"
            id="nw_url_field"
            value={honeypot}
            onChange={e => setHoneypot(e.target.value)}
            autoComplete="new-password"
            aria-hidden="true"
            tabIndex={-1}
            style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
          />

          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor={nameId} className={labelClass}>{t.labels.name}</label>
            <input
              id={nameId}
              type="text"
              autoComplete="name"
              value={name}
              onChange={e => setName(e.target.value)}
              onBlur={() => blur('name')}
              aria-required
              aria-invalid={!!(touched.name && nameError)}
              aria-describedby={touched.name && nameError ? `${nameId}-err` : undefined}
              className={`${inputClass} ${name ? inputFilledClass : ''}`}
            />
            {touched.name && nameError && (
              <p id={`${nameId}-err`} role="alert" className={errorClass} style={{ color: errorColor }}>
                <ErrorIcon />{nameError}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor={emailId} className={labelClass}>{t.labels.email}</label>
            <input
              id={emailId}
              type="email"
              autoComplete="email"
              dir="ltr"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onBlur={() => blur('email')}
              aria-required
              aria-invalid={!!(touched.email && emailError)}
              aria-describedby={touched.email && emailError ? `${emailId}-err` : undefined}
              className={`${inputClass} ${ar ? 'text-end' : ''} ${email ? inputFilledClass : ''}`}
            />
            {touched.email && emailError && (
              <p id={`${emailId}-err`} role="alert" className={errorClass} style={{ color: errorColor }}>
                <ErrorIcon />{emailError}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor={phoneId} className={labelClass}>
              {t.labels.phone}
              <span className={optionalClass}>{t.labels.phoneOptional}</span>
            </label>
            <input
              id={phoneId}
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              dir="ltr"
              placeholder={t.labels.phonePlaceholder}
              value={phone}
              onChange={e => setPhone(sanitizePhone(e.target.value))}
              onPaste={e => {
                e.preventDefault();
                setPhone(sanitizePhone(e.clipboardData.getData('text')));
              }}
              onBlur={() => blur('phone')}
              aria-invalid={!!(touched.phone && phoneError)}
              aria-describedby={touched.phone && phoneError ? `${phoneId}-err` : undefined}
              className={`${inputClass} ${ar ? 'text-end' : ''} ${phone ? inputFilledClass : ''}`}
            />
            {touched.phone && phoneError && (
              <p id={`${phoneId}-err`} role="alert" className={errorClass} style={{ color: errorColor }}>
                <ErrorIcon />{phoneError}
              </p>
            )}
          </div>

          {/* Services */}
          <div className="flex flex-col gap-2">
            <p className={labelClass}>{t.labels.services}</p>
            <div
              role="group"
              aria-label={t.labels.services}
              aria-required
              data-services-group
              className="flex flex-wrap gap-2"
            >
              {t.serviceOptions.map(opt => {
                const selected = services.includes(opt.value);
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => toggleService(opt.value)}
                    aria-pressed={selected}
                    className={`inline-flex items-center gap-2 h-11 rounded-pill px-4 text-[0.875rem] font-medium border transition-colors duration-150 ${
                      selected
                        ? 'bg-foreground text-background border-foreground'
                        : 'bg-transparent text-foreground border-line hover:border-foreground'
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded-[4px] border-2 flex items-center justify-center shrink-0 transition-colors ${
                        selected ? 'bg-background border-background' : 'border-current'
                      }`}
                      aria-hidden
                    >
                      {selected && (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                    {opt.label}
                  </button>
                );
              })}
            </div>
            {touched.services && svcError && (
              <p role="alert" className={errorClass} style={{ color: errorColor }}>
                <ErrorIcon />{svcError}
              </p>
            )}
          </div>

          {/* Company */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor={companyId} className={labelClass}>
              {t.labels.company}
              <span className={optionalClass}>{t.labels.companyOptional}</span>
            </label>
            <input
              id={companyId}
              type="text"
              placeholder={t.labels.companyPlaceholder}
              value={company}
              onChange={e => setCompany(e.target.value)}
              className={`${inputClass} ${company ? inputFilledClass : ''}`}
            />
          </div>

          {/* Language */}
          <div className="flex flex-col gap-2">
            <p className={labelClass}>
              {t.labels.language}
              <span className={optionalClass}>{t.labels.languageOptional}</span>
            </p>
            <div className="flex flex-wrap gap-2" role="group" aria-label={t.labels.language}>
              {t.languageOptions.map(opt => {
                const selected = language === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setLanguage(selected ? '' : opt.value)}
                    aria-pressed={selected}
                    className={`h-11 rounded-pill px-4 text-[0.875rem] font-medium border transition-colors duration-150 ${
                      selected
                        ? 'bg-foreground text-background border-foreground'
                        : 'bg-transparent text-foreground border-line hover:border-foreground'
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Start */}
          <div className="flex flex-col gap-2">
            <p className={labelClass}>
              {t.labels.start}
              <span className={optionalClass}>{t.labels.startOptional}</span>
            </p>
            <div className="flex flex-wrap gap-2" role="group" aria-label={t.labels.start}>
              {t.startOptions.map(opt => {
                const selected = start === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setStart(selected ? '' : opt.value)}
                    aria-pressed={selected}
                    className={`h-11 rounded-pill px-4 text-[0.875rem] font-medium border transition-colors duration-150 ${
                      selected
                        ? 'bg-foreground text-background border-foreground'
                        : 'bg-transparent text-foreground border-line hover:border-foreground'
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Budget */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor={budgetId} className={labelClass}>
              {t.labels.budget}
              <span className={optionalClass}>{t.labels.budgetOptional}</span>
            </label>
            <input
              id={budgetId}
              type="text"
              placeholder={t.labels.budgetPlaceholder}
              value={budget}
              onChange={e => setBudget(e.target.value)}
              className={`${inputClass} ${budget ? inputFilledClass : ''}`}
            />
          </div>

          {/* Notes */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor={notesId} className={labelClass}>
              {t.labels.notes}
              <span className={optionalClass}>{t.labels.notesOptional}</span>
            </label>
            <textarea
              id={notesId}
              placeholder={t.labels.notesPlaceholder}
              value={notes}
              maxLength={2000}
              onChange={e => setNotes(e.target.value)}
              className={`${textareaClass} ${notes ? 'border-ink' : ''}`}
            />
            {notes.length > 1500 && (
              <p className="text-[0.8125rem] text-foreground-muted text-end" aria-live="polite">
                {notes.length} / 2000
              </p>
            )}
          </div>

          {/* Turnstile — explicit rendering */}
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
            strategy="afterInteractive"
            onLoad={() => {
              scriptReadyRef.current = true;
              mountWidget();
            }}
          />
          <div ref={turnstileRef} />
          {!turnstileReady && (
            <p className="text-[0.8125rem] text-foreground-muted" aria-live="polite">
              {ar ? 'جار التحقق…' : 'Checking you\'re human…'}
            </p>
          )}

          {/* Submit */}
          <div className="flex flex-col gap-3 mt-2">
            <button
              type="submit"
              disabled={submitting}
              className="w-full h-14 rounded-pill text-[1rem] font-semibold text-[var(--ink-fixed)] transition-opacity hover:opacity-85 active:opacity-70 disabled:opacity-60 flex items-center justify-center gap-2"
              style={{ backgroundColor: 'var(--highlight)' }}
            >
              {submitting ? t.submitting : t.submit}
              {!submitting && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className={ar ? 'scale-x-[-1]' : ''}>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>

            <p className="flex items-center gap-1.5 text-[0.8125rem] text-foreground-muted justify-center">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                <rect x="1.5" y="6" width="10" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                <path d="M4 6V4a2.5 2.5 0 0 1 5 0v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              {t.privacy}
            </p>
          </div>
        </form>
    </div>
  );

  /* ─── Page layout ─────────────────────────────────────────────── */
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto w-full px-4 md:px-12 max-w-[1200px]">
        {/* Eyebrow + H1 + Lead (always on top) */}
        <div className="mb-10 md:mb-14">
          <p className="text-[0.9375rem] font-medium text-on-accent-soft mb-2">{t.eyebrow}</p>
          <h1
            ref={headingRef}
            className={`text-h2 font-bold text-foreground mb-4 ${ar ? 'leading-[1.4]' : 'leading-[1.2]'}`}
          >
            {t.h1}
          </h1>
          <p className={`text-body text-foreground-muted max-w-[520px] ${ar ? 'leading-[1.8]' : 'leading-[1.6]'}`}>
            {t.lead}
          </p>
        </div>

        {/* Desktop: 5/7 grid */}
        <div className="hidden md:grid gap-12" style={{ gridTemplateColumns: '5fr 7fr' }}>
          {/* Info column — sticky */}
          <div className="self-start sticky" style={{ top: '120px' }}>
            {stepsBlock}
          </div>

          {/* Form card */}
          {formCard}
        </div>

        {/* Mobile: form first, then steps */}
        <div className="md:hidden flex flex-col gap-10">
          {formCard}
          {stepsBlock}
        </div>
      </div>
    </div>
  );
}
