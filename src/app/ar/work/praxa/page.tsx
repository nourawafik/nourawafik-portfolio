import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { NextProjectCard } from '@/components/ui/next-project-card';

export const metadata: Metadata = {
  title: 'Praxa: دراسة حالة، نورا وفيق',
  description:
    'منصة ويب بتستخدمها عيادات الصحة النفسية في أمريكا: لوحات تحكم بالأدوار، والجدولة، وملفات المرضى، وذكاء اصطناعي المعالج بيوافق عليه، والتحكم بالصوت.',
  alternates: {
    canonical: 'https://nourawafik.com/ar/work/praxa',
    languages: {
      en: 'https://nourawafik.com/work/praxa',
      ar: 'https://nourawafik.com/ar/work/praxa',
    },
  },
  openGraph: {
    title: 'Praxa: دراسة حالة، نورا وفيق',
    description:
      'منصة ويب لعيادات الصحة النفسية في أمريكا: الأدمن والمعالج والمريض والموظفين، وذكاء اصطناعي المعالج بيوافق عليه.',
    type: 'article',
    authors: ['Noura Wafik'],
    url: 'https://nourawafik.com/ar/work/praxa',
    images: [{ url: 'https://nourawafik.com/work/praxa/praxa-hero.png', width: 1600, height: 900 }],
  },
};

const SECTIONS = [
  {
    id: 'roles',
    titleAr: 'منتج واحد لأربع أدوار',
    textAr:
      'الأدمن والمعالج بيستخدموا نفس التنقل والمكونات والبيانات، بس كل واحد بيفتح على صفحة رئيسية مختلفة. الأدمن بيشوف الشغل كله واللي محتاج انتباهه، والمعالج بيشوف جلسات النهارده والمريض الجاي.',
    images: [
      { src: '/work/praxa/admin.png', srcDark: '/work/praxa/admin-dark.png', alt: 'الصفحة الرئيسية للأدمن: أرقام اليوم وما يحتاج انتباها', caption: 'الأدمن: أرقام اليوم وما يحتاج انتباها' },
      { src: '/work/praxa/provider.png', srcDark: '/work/praxa/provider-dark.png', alt: 'الصفحة الرئيسية للمعالج: جدول اليوم والمريض الجاي ومسودات الذكاء الاصطناعي', caption: 'المعالج: جدول اليوم والمريض الجاي ومسودات الذكاء الاصطناعي' },
    ],
    columns: 2,
  },
  {
    id: 'appointments',
    titleAr: 'المواعيد',
    textAr:
      'الأسبوع ملون حسب نوع الزيارة، وفيه خط للوقت الحالي، وتفاصيل الموعد جنب التقويم، فالجدولة مش بتسيب الصفحة.',
    images: [
      { src: '/work/praxa/appointments.png', srcDark: '/work/praxa/appointments-dark.png', alt: 'عرض الأسبوع مع تفاصيل الموعد جنبه', caption: 'عرض الأسبوع مع تفاصيل الموعد جنبه' },
    ],
    columns: 1,
  },
  {
    id: 'patient',
    titleAr: 'ملف المريض',
    textAr:
      'كل اللي المعالج بيبص عليه قبل الجلسة في شاشة واحدة: الموعد الجاي، والتشخيص، والأدوية، والملاحظات بالترتيب. وأي حاجة كتبها الذكاء الاصطناعي عليها علامة ومكتوب مين وافق عليها.',
    images: [
      { src: '/work/praxa/patient.png', srcDark: '/work/praxa/patient-dark.png', alt: 'نظرة عامة على الملف، مع محتوى الذكاء الاصطناعي الموافق عليه', caption: 'نظرة عامة على الملف، مع محتوى الذكاء الاصطناعي الموافق عليه' },
    ],
    columns: 1,
  },
  {
    id: 'ai',
    titleAr: 'ذكاء اصطناعي المعالج بيوافق عليه',
    textAr:
      'الذكاء الاصطناعي بيكتب مسودة التشخيص من الجلسة. كل جزء بيبين مصدره، والمعالج بيقبل أو بيعدل جزء جزء، ومفيش حاجة بتدخل الملف قبل ما كل الأجزاء تتراجع.',
    images: [
      { src: '/work/praxa/aidx.png', srcDark: '/work/praxa/aidx-dark.png', alt: 'كل جزء بيبين مصدره، والموافقة بتستنى لحد ما كل الأجزاء تتراجع', caption: 'كل جزء بيبين مصدره، والموافقة بتستنى لحد ما كل الأجزاء تتراجع' },
    ],
    columns: 1,
  },
  {
    id: 'reports',
    titleAr: 'التقارير',
    textAr:
      'المواعيد المكتملة كل أسبوع، وأنواع الزيارات، ومقارنة العيادات جنب بعض.',
    images: [
      { src: '/work/praxa/reports.png', srcDark: '/work/praxa/reports-dark.png', alt: 'الترند الأسبوعي، وأنواع الزيارات، ومقارنة العيادات', caption: 'الترند الأسبوعي، وأنواع الزيارات، ومقارنة العيادات' },
    ],
    columns: 1,
  },
];

export default function ArPraxaPage() {
  return (
    <article>
      {/* ── Breadcrumb ── */}
      <Container className="pt-8 pb-0">
        <nav aria-label="مسار التنقل">
          <ol className="flex items-center gap-1.5 text-[0.8125rem] text-foreground-muted list-none">
            <li>
              <Link href="/ar/work" className="hover:text-foreground transition-colors duration-150">
                أعمالي
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-foreground">Praxa</li>
          </ol>
        </nav>
      </Container>

      {/* ── H1 + intro ── */}
      <Container className="pt-8 pb-10 md:pb-12">
        <div className="max-w-[680px]">
          <h1 className="text-[2.5rem] font-medium leading-[1.3] tracking-[-0.02em] text-foreground md:text-[3.5rem] mb-5">
            Praxa
          </h1>
          <p className="text-[1.125rem] leading-[1.8] text-foreground-muted">
            منصة ويب بتستخدمها عيادات الصحة النفسية في أمريكا عشان تدير يومها: المواعيد، والمرضى، والمعالجين، والفواتير والتأمين، والتقارير. بتخدم أربع أدوار (أدمن، ومعالج، ومريض، وموظفين)، وشغالة في أمريكا في أكتر من 50 عيادة. وأنا المصممة الوحيدة على المنتج.
          </p>
        </div>
      </Container>

      {/* ── Meta row ── */}
      <Container className="pb-12 md:pb-16">
        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { label: 'دوري', value: 'مصممة المنتج الوحيدة' },
            { label: 'المنصة', value: 'ويب' },
            { label: 'الحالة', value: 'شغال في أمريكا' },
          ].map(({ label, value }) => (
            <div key={label} className="border-t-2 border-foreground pt-3">
              <dt className="text-[0.8125rem] text-foreground-muted mb-1">{label}</dt>
              <dd className="text-[0.875rem] font-medium text-foreground leading-[1.6]">{value}</dd>
            </div>
          ))}
        </dl>
      </Container>

      {/* ── Hero image ── */}
      <Container className="mb-8">
        <div className="relative w-full overflow-hidden rounded-[32px]" style={{ aspectRatio: '16/9' }}>
          <Image
            src="/work/praxa/praxa-hero.png"
            alt="Praxa — لوحة تحكم المعالج ومراجعة مسودة الذكاء الاصطناعي"
            fill
            className="object-cover dark:hidden"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <Image
            src="/work/praxa/praxa-hero-dark.png"
            alt="Praxa — لوحة تحكم المعالج ومراجعة مسودة الذكاء الاصطناعي"
            fill
            className="object-cover hidden dark:block"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      </Container>

      {/* ── Confidentiality note ── */}
      <Container className="mb-16 md:mb-24">
        <aside className="flex items-start gap-2 text-[0.8125rem] leading-[1.7] text-foreground-muted max-w-[560px]">
          <svg
            width="14" height="14" viewBox="0 0 14 14" fill="currentColor"
            className="mt-[1px] shrink-0 opacity-60" aria-hidden
          >
            <rect x="2" y="6" width="10" height="7" rx="1.5" />
            <path d="M4.5 6V4.5a2.5 2.5 0 0 1 5 0V6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
          <span>الاسم والتفاصيل متغيرة، وكل الشاشات هنا اتعاد رسمها لدراسة الحالة دي. الأسماء والأرقام اللي جوه الشاشات للتوضيح بس.</span>
        </aside>
      </Container>

      {/* ── Sections ── */}
      {SECTIONS.map(({ id, titleAr, textAr, images, columns }) => (
        <Container key={id} className="mb-16 md:mb-24">
          <div className="mb-6">
            <h2 className="text-[1.5rem] font-medium leading-[1.3] tracking-[-0.015em] text-foreground md:text-[1.75rem] mb-3">
              {titleAr}
            </h2>
            <p className="text-[1rem] leading-[1.8] text-foreground-muted max-w-[720px]">{textAr}</p>
          </div>
          <div className={columns === 2 ? 'grid md:grid-cols-2 gap-4' : 'flex flex-col gap-4'}>
            {images.map(({ src, srcDark, alt, caption }) => (
              <figure key={src} className="m-0">
                <div className="relative w-full overflow-hidden rounded-[14px] border border-border shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.25)]" style={{ aspectRatio: '3/2' }}>
                  <Image src={src} alt={alt} fill className="object-cover dark:hidden" sizes="(max-width: 768px) 100vw, 800px" />
                  <Image src={srcDark} alt={alt} fill className="object-cover hidden dark:block" sizes="(max-width: 768px) 100vw, 800px" />
                </div>
                <figcaption className="mt-2 text-[0.8125rem] text-foreground-muted text-center">{caption}</figcaption>
              </figure>
            ))}
          </div>
        </Container>
      ))}

      {/* ── Voice control section (has video) ── */}
      <Container className="mb-16 md:mb-24">
        <div className="mb-6">
          <h2 className="text-[1.5rem] font-medium leading-[1.3] tracking-[-0.015em] text-foreground md:text-[1.75rem] mb-3">
            التحكم بالصوت
          </h2>
          <p className="text-[1rem] leading-[1.8] text-foreground-muted max-w-[720px]">
            المعالج يقدر يتحكم في الداشبورد بصوته. ولو الأمر ينطبق على أكتر من مريض، Praxa بيسأله يختار مين بدل ما يخمن.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <figure className="m-0">
            <video
              src="/work/praxa/voice-command.mp4"
              poster="/work/praxa/voice-command-poster.png"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={`"Open Sarah Johnson's profile": مطابقتان، المعالج يقول "one"، الملف يفتح`}
              className="w-full rounded-[14px] border border-border shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.25)] dark:hidden"
              style={{ aspectRatio: '1440/960' }}
            />
            <video
              src="/work/praxa/voice-command-dark.mp4"
              poster="/work/praxa/voice-command-dark-poster.png"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={`"Open Sarah Johnson's profile": مطابقتان، المعالج يقول "one"، الملف يفتح`}
              className="w-full rounded-[14px] border border-border shadow-[0_2px_12px_rgba(0,0,0,0.25)] hidden dark:block"
              style={{ aspectRatio: '1440/960' }}
            />
            <figcaption className="mt-2 text-[0.8125rem] text-foreground-muted text-center">
              &quot;Open Sarah Johnson&apos;s profile&quot;: مطابقتان، المعالج يقول &quot;one&quot;، الملف يفتح
            </figcaption>
          </figure>
          <figure className="m-0">
            <div className="relative w-full overflow-hidden rounded-[14px] border border-border shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.25)]" style={{ aspectRatio: '3/2' }}>
              <Image src="/work/praxa/voice2.png" alt="مطابقتان: بالأرقام، وكل حاجة تانية بتتلاشى" fill className="object-cover dark:hidden" sizes="(max-width: 768px) 100vw, 800px" />
              <Image src="/work/praxa/voice2-dark.png" alt="مطابقتان: بالأرقام، وكل حاجة تانية بتتلاشى" fill className="object-cover hidden dark:block" sizes="(max-width: 768px) 100vw, 800px" />
            </div>
            <figcaption className="mt-2 text-[0.8125rem] text-foreground-muted text-center">مطابقتان: بالأرقام، وكل حاجة تانية بتتلاشى</figcaption>
          </figure>
        </div>
      </Container>

      {/* ── Next project card ── */}
      <Container className="mb-16 md:mb-24">
        <NextProjectCard currentSlug="praxa" locale="ar" />
      </Container>
    </article>
  );
}
