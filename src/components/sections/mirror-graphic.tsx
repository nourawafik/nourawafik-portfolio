// Hero graphic: the same profile card as finished UI, in English (LTR) and
// Arabic (RTL), side by side. Layout and the progress fill follow `dir`; the
// star, the play glyph and the Western numerals keep their orientation.
// RTL is designed, not mirrored.

const ICON = {
  clock: (
    <svg viewBox="0 0 16 16" aria-hidden>
      <circle cx="8" cy="8" r="6.25" />
      <path d="M8 4.75V8l2.25 1.5" />
    </svg>
  ),
  video: (
    <svg viewBox="0 0 16 16" aria-hidden>
      <rect x="1.75" y="4" width="9" height="8" rx="1.5" />
      <path d="M10.75 7l3.5-2v6l-3.5-2" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 16 16" aria-hidden>
      <path d="M8 14.25s4.5-4.1 4.5-7.5a4.5 4.5 0 1 0-9 0c0 3.4 4.5 7.5 4.5 7.5z" />
      <circle cx="8" cy="6.75" r="1.6" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 16 16" aria-hidden>
      <path d="M8 1.6l1.95 4 4.4.6-3.2 3.08.78 4.37L8 11.57l-3.93 2.08.78-4.37L1.65 6.2l4.4-.6z" />
    </svg>
  ),
  play: (
    <svg viewBox="0 0 16 16" aria-hidden>
      <path d="M5 3.2v9.6L12.6 8z" />
    </svg>
  ),
};

const CARD = {
  en: {
    dir: 'ltr',
    tag: 'LTR',
    initials: 'LH',
    name: 'Layla Hassan',
    role: 'Clinical psychologist',
    status: 'Available',
    reviews: '(126)',
    meta: ['50 min', 'Video call', 'Riyadh'],
    desc: 'Helps professionals work through burnout and anxiety with short-term CBT.',
    primary: 'Book session',
    secondary: 'View profile',
    media: 'Intro video',
  },
  ar: {
    dir: 'rtl',
    tag: 'RTL',
    initials: 'ل ح',
    name: 'ليلى حسن',
    role: 'أخصائية نفسية إكلينيكية',
    status: 'متاحة',
    reviews: '(126)',
    meta: ['50 دقيقة', 'مكالمة فيديو', 'الرياض'],
    desc: 'تساعد المهنيين على تجاوز الإرهاق والقلق من خلال العلاج المعرفي السلوكي قصير المدى.',
    primary: 'حجز جلسة',
    secondary: 'عرض الملف',
    media: 'فيديو تعريفي',
  },
} as const;

function ProfileCard({ lang }: { lang: keyof typeof CARD }) {
  const t = CARD[lang];
  return (
    <div className="pcard-col" dir={t.dir}>
      <span className="pcard-tag">{t.tag}</span>
      <div className={`pcard pcard-${lang}`} lang={lang}>
        <div className="pcard-head">
          <span className="pcard-avatar">{t.initials}</span>
          <div className="pcard-who">
            <span className="pcard-name">{t.name}</span>
            <span className="pcard-role">{t.role}</span>
          </div>
        </div>
        <span className="pcard-badge">
          <span className="pcard-dot" />
          {t.status}
        </span>
        <div className="pcard-rating">
          <span className="pcard-star">{ICON.star}</span>
          <span className="pcard-num">4.8</span>
          <span className="pcard-reviews">{t.reviews}</span>
        </div>
        <div className="pcard-meta">
          <span>
            {ICON.clock}
            {t.meta[0]}
          </span>
          <span>
            {ICON.video}
            {t.meta[1]}
          </span>
          <span>
            {ICON.pin}
            {t.meta[2]}
          </span>
        </div>
        <p className="pcard-desc">{t.desc}</p>
        <div className="pcard-media">
          <span className="pcard-play">{ICON.play}</span>
          <div className="pcard-media-body">
            <span className="pcard-media-label">{t.media}</span>
            <span className="pcard-track">
              <span className="pcard-fill" />
            </span>
          </div>
          <span className="pcard-pct">64%</span>
        </div>
        <div className="pcard-actions">
          <span className="pcard-btn pcard-primary">{t.primary}</span>
          {/* The one interactive state on show: hover, on the English secondary button */}
          <span className={`pcard-btn pcard-secondary${lang === 'en' ? ' is-hover' : ''}`}>
            {t.secondary}
          </span>
        </div>
      </div>
    </div>
  );
}

export function MirrorGraphic({ label, className }: { label: string; className?: string }) {
  return (
    <div className={className}>
      {/* Fixed physical order on both pages: English left, Arabic right. */}
      <div dir="ltr" role="img" aria-label={label} className="pcards-stage">
        <div className="pcards">
          <ProfileCard lang="en" />
          <span className="pcards-axis" aria-hidden />
          <ProfileCard lang="ar" />
        </div>
      </div>
    </div>
  );
}
