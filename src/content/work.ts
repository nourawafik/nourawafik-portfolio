export type WorkType = 'mobile' | 'web' | 'site' | 'brand' | 'marketing';
export type Industry  = 'health' | 'hr';
export type Feature   = 'ai' | 'video' | 'sched' | 'pay' | 'dash' | 'ds';

export interface WorkItem {
  slug: string;
  title:   { en: string; ar: string };
  summary: { en: string; ar: string };
  thumbAlt: string;
  types:    WorkType[];
  industry: Industry;
  features: Feature[];
  keywords?: string[];
  parent?: { slug: string; title: { en: string; ar: string } };
  studiesCount?: number;
  thumb:     string;
  thumbDark: string;
  order:     number;
  featured?: boolean;
}

export const LABELS = {
  type: {
    mobile:    { en: 'Mobile apps',                 ar: 'تطبيقات الجوال' },
    web:       { en: 'Web platforms',               ar: 'منصات ويب' },
    site:      { en: 'Websites & landing pages',    ar: 'مواقع وصفحات هبوط' },
    brand:     { en: 'Brand identity',              ar: 'هوية بصرية' },
    marketing: { en: 'Marketing & social media',    ar: 'تسويق وسوشيال ميديا' },
  },
  industry: {
    health: { en: 'Health',    ar: 'الصحة' },
    hr:     { en: 'HR tech',   ar: 'تقنيات التوظيف' },
  },
  feature: {
    ai:    { en: 'AI assistants',          ar: 'مساعدات ذكاء اصطناعي' },
    video: { en: 'Video calls',            ar: 'مكالمات فيديو' },
    sched: { en: 'Calendars & scheduling', ar: 'التقويم والجدولة' },
    pay:   { en: 'Payments & wallets',     ar: 'المدفوعات والمحافظ' },
    dash:  { en: 'Dashboards & reports',   ar: 'لوحات التحكم والتقارير' },
    ds:    { en: 'Design systems',         ar: 'أنظمة التصميم' },
  },
} as const;

export const work: WorkItem[] = [
  {
    slug: 'ulfa',
    title:   { en: 'Ulfa',  ar: 'ألفة' },
    summary: {
      en: 'A bilingual mobile app that brings people together with mental health facilitators, in small circles and structured sessions.',
      ar: 'تطبيق جوال بالعربي والإنجليزي، يجمع الناس مع ميسرين متخصصين في الصحة النفسية، في دوائر صغيرة وجلسات منظمة.',
    },
    thumbAlt:  'Ulfa app — Explore screen showing session circles in Arabic',
    types:     ['mobile'],
    industry:  'health',
    features:  [],
    keywords:  ['mobile app', 'mental health', 'bilingual', 'arabic', 'rtl', 'تطبيق', 'صحة نفسية', 'جوال'],
    studiesCount: 4,
    thumb:     '/work/ulfa/ulfa-thumb.png',
    thumbDark: '/work/ulfa/ulfa-thumb-dark.png',
    order:     1,
    featured:  true,
  },
  {
    slug: 'praxa',
    title:   { en: 'Praxa', ar: 'Praxa' },
    summary: {
      en: 'A clinic platform for four roles — admin, provider, patient and staff — with AI the provider reviews and approves before it reaches the chart.',
      ar: 'منصة عيادات لأربعة أدوار: الإدارة والمعالج والمريض والموظفون، مع ذكاء اصطناعي يراجعه المعالج ويوافق عليه قبل أن يدخل ملف المريض.',
    },
    thumbAlt:  'Praxa provider dashboard with an AI diagnosis draft',
    types:     ['web'],
    industry:  'health',
    features:  ['ai', 'sched', 'dash'],
    keywords:  ['calendar', 'scheduling', 'appointments', 'dashboard', 'reports', 'ai', 'voice', 'clinic', 'saas', 'healthcare', 'تقويم', 'مواعيد', 'داشبورد', 'تقارير', 'ذكاء', 'صوت', 'عيادة', 'لوحة تحكم'],
    thumb:     '/work/praxa/praxa-thumb.png',
    thumbDark: '/work/praxa/praxa-thumb-dark.png',
    order:     2,
    featured:  true,
  },
  {
    slug: 'duet',
    title:   { en: 'Duet', ar: 'Duet' },
    summary: {
      en: 'A two-sided hiring platform with an AI assistant for recruiters and another for candidates.',
      ar: 'منصة توظيف بطرفين، فيها مساعد ذكاء اصطناعي لمسؤول التوظيف وآخر للمتقدم.',
    },
    thumbAlt:  'Duet — recruiter view showing candidate score with reasons',
    types:     ['web', 'mobile'],
    industry:  'hr',
    features:  ['ai', 'ds'],
    keywords:  ['ai', 'hiring', 'recruiter', 'candidate', 'design system', 'توظيف', 'ذكاء', 'مساعد'],
    thumb:     '/work/duet/duet-thumb.png',
    thumbDark: '/work/duet/duet-thumb-dark.png',
    order:     3,
    featured:  true,
  },
  {
    slug: 'ulfa/live-session',
    title:   { en: 'Live session',         ar: 'الجلسة المباشرة' },
    summary: {
      en: 'The waiting room and the live session itself, designed for evening use.',
      ar: 'غرفة الانتظار والجلسة المباشرة، بتصميم داكن مريح للاستخدام في المساء.',
    },
    thumbAlt:  'Ulfa live session — dark waiting room screen',
    types:     ['mobile'],
    industry:  'health',
    features:  ['video'],
    keywords:  ['video call', 'zoom', 'meeting', 'live session', 'مكالمة فيديو', 'زوم', 'اجتماع', 'جلسة', 'مباشرة'],
    parent:    { slug: 'ulfa', title: { en: 'Ulfa', ar: 'ألفة' } },
    thumb:     '/work/ulfa/ulfa-thumb-live.png',
    thumbDark: '/work/ulfa/ulfa-thumb-live-dark.png',
    order:     4,
  },
  {
    slug: 'ulfa/facilitator-studio',
    title:   { en: 'Facilitator studio',   ar: 'استوديو الميسر' },
    summary: {
      en: 'Calendar, workshop management, wallet and payouts.',
      ar: 'التقويم وإدارة الورش والمحفظة وتحويل الأرباح.',
    },
    thumbAlt:  'Ulfa facilitator studio — calendar and earnings screen',
    types:     ['mobile'],
    industry:  'health',
    features:  ['sched', 'pay', 'dash'],
    keywords:  ['calendar', 'scheduling', 'wallet', 'payments', 'payouts', 'dashboard', 'تقويم', 'جدولة', 'محفظة', 'مدفوعات', 'تحويل', 'لوحة تحكم'],
    parent:    { slug: 'ulfa', title: { en: 'Ulfa', ar: 'ألفة' } },
    thumb:     '/work/ulfa/ulfa-thumb-studio.png',
    thumbDark: '/work/ulfa/ulfa-thumb-studio-dark.png',
    order:     5,
  },
  {
    slug: 'ulfa/design-system',
    title:   { en: 'Design system',        ar: 'نظام التصميم' },
    summary: {
      en: 'Four colour themes in light and dark, with AA contrast in every one.',
      ar: 'أربعة ألوان في الوضعين الفاتح والداكن، بتباين بمستوى AA في كل منها.',
    },
    thumbAlt:  'Ulfa design system — four colour themes side by side',
    types:     ['mobile'],
    industry:  'health',
    features:  ['ds'],
    keywords:  ['design system', 'tokens', 'themes', 'dark mode', 'نظام تصميم', 'ثيمات', 'توكنز'],
    parent:    { slug: 'ulfa', title: { en: 'Ulfa', ar: 'ألفة' } },
    thumb:     '/work/ulfa/ulfa-thumb-ds.png',
    thumbDark: '/work/ulfa/ulfa-thumb-ds-dark.png',
    order:     6,
  },
];

export function getNextProject(currentSlug: string): WorkItem | null {
  const projects = work.filter(w => !w.parent).sort((a, b) => a.order - b.order);
  const idx = projects.findIndex(p => p.slug === currentSlug);
  if (idx === -1) return null;
  return projects[(idx + 1) % projects.length];
}

export function countItems(
  type: WorkType | null,
  industry: Industry | null,
  feature: Feature | null
): number {
  let result = feature !== null ? work : work.filter(w => !w.parent);
  if (type)     result = result.filter(w => w.types.includes(type));
  if (industry) result = result.filter(w => w.industry === industry);
  if (feature)  result = result.filter(w => w.features.includes(feature));
  return result.length;
}
