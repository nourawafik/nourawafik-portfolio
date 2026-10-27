import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { NextProjectCard } from '@/components/ui/next-project-card';

export const metadata: Metadata = {
  title: 'Praxa: دراسة حالة، نورا وفيق',
  description:
    'منصة ويب لعيادات الصحة النفسية في أمريكا: لوحات تحكم حسب الدور، وجدولة، وملفات مرضى، وذكاء اصطناعي يوافق عليه المعالج، وتحكم بالصوت.',
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
      'منصة ويب لعيادات الصحة النفسية في الولايات المتحدة: لوحات تحكم حسب الدور، وذكاء اصطناعي يوافق عليه المعالج، وتحكم بالصوت.',
    type: 'article',
    authors: ['Noura Wafik'],
    url: 'https://nourawafik.com/ar/work/praxa',
    images: [{ url: 'https://nourawafik.com/work/praxa/praxa-hero.png', width: 1600, height: 900 }],
  },
};

const SECTIONS = [
  {
    id: 'roles',
    titleAr: 'منتج واحد لأربعة أدوار',
    textAr:
      'تستخدم الإدارة والمعالج التنقل والمكونات والبيانات نفسها، لكن لكل منهما صفحة رئيسية مختلفة. ترى الإدارة العمل كله وما يحتاج انتباها، ويرى المعالج جلسات اليوم والمريض التالي.',
    images: [
      { src: '/work/praxa/admin.png', srcDark: '/work/praxa/admin-dark.png', alt: 'الإدارة: أرقام اليوم وما يحتاج انتباها', caption: 'الإدارة: أرقام اليوم وما يحتاج انتباها' },
      { src: '/work/praxa/provider.png', srcDark: '/work/praxa/provider-dark.png', alt: 'المعالج: جدول اليوم والمريض التالي ومسودات الذكاء الاصطناعي', caption: 'المعالج: جدول اليوم والمريض التالي ومسودات الذكاء الاصطناعي' },
    ],
    columns: 2,
  },
  {
    id: 'appointments',
    titleAr: 'المواعيد',
    textAr:
      'الأسبوع ملون حسب نوع الزيارة، وفيه خط يوضح الوقت الحالي، وتفاصيل الموعد بجانب التقويم، فتتم الجدولة دون مغادرة الصفحة.',
    images: [
      { src: '/work/praxa/appointments.png', srcDark: '/work/praxa/appointments-dark.png', alt: 'عرض الأسبوع مع تفاصيل الموعد بجانبه', caption: 'عرض الأسبوع مع تفاصيل الموعد بجانبه' },
    ],
    columns: 1,
  },
  {
    id: 'patient',
    titleAr: 'ملف المريض',
    textAr:
      'كل ما يراجعه المعالج قبل الجلسة في شاشة واحدة: الموعد القادم، والتشخيص، والأدوية، والملاحظات بالترتيب. وكل ما كتبه الذكاء الاصطناعي عليه علامة توضح من وافق عليه.',
    images: [
      { src: '/work/praxa/patient.png', srcDark: '/work/praxa/patient-dark.png', alt: 'نظرة عامة على الملف، مع ما كتبه الذكاء الاصطناعي بعد الموافقة عليه', caption: 'نظرة عامة على الملف، مع ما كتبه الذكاء الاصطناعي بعد الموافقة عليه' },
    ],
    columns: 1,
  },
  {
    id: 'ai',
    titleAr: 'ذكاء اصطناعي يوافق عليه المعالج',
    textAr:
      'يكتب الذكاء الاصطناعي مسودة التشخيص من الجلسة، ويوضح مصدر كل جزء. يقبل المعالج كل جزء أو يعدله على حدة، ولا يدخل شيء إلى الملف قبل مراجعة كل الأجزاء.',
    images: [
      { src: '/work/praxa/aidx.png', srcDark: '/work/praxa/aidx-dark.png', alt: 'كل جزء يوضح مصدره، والموافقة تنتظر مراجعة كل الأجزاء', caption: 'كل جزء يوضح مصدره، والموافقة تنتظر مراجعة كل الأجزاء' },
    ],
    columns: 1,
  },
  {
    id: 'reports',
    titleAr: 'التقارير',
    textAr:
      'المواعيد المكتملة كل أسبوع، وأنواع الزيارات، ومقارنة العيادات جنبا إلى جنب.',
    images: [
      { src: '/work/praxa/reports.png', srcDark: '/work/praxa/reports-dark.png', alt: 'المواعيد كل أسبوع، وأنواع الزيارات، ومقارنة العيادات', caption: 'المواعيد كل أسبوع، وأنواع الزيارات، ومقارنة العيادات' },
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
            منصة ويب تدير بها عيادات الصحة النفسية في الولايات المتحدة أعمالها: المواعيد، والمرضى، والمعالجين، والفواتير والتأمين، والتقارير. تخدم أربعة أدوار (الإدارة، والمعالج، والمريض، والموظفون)، وتستخدمها أكثر من 50 عيادة.
          </p>
        </div>
      </Container>

      {/* ── Meta row ── */}
      <Container className="pb-12 md:pb-16">
        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { label: 'دوري', value: 'مصممة المنتج' },
            { label: 'المنصة', value: 'ويب' },
            { label: 'الحالة', value: 'مستخدمة حاليا في الولايات المتحدة' },
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
          <span>تم تغيير الاسم والتفاصيل، وأعيد رسم الشاشات لدراسة الحالة هذه. الأسماء والأرقام داخل الشاشات للتوضيح فقط.</span>
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
            يستطيع المعالج استخدام المنصة بصوته. وإذا انطبق الأمر على أكثر من مريض، يطلب منه Praxa أن يختار بدلا من أن يخمن.
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
              aria-label="أمر صوتي لفتح ملف مريضة اسمها مكرر: يعرض Praxa نتيجتين مرقمتين، ويختار المعالج الأولى فيفتح الملف"
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
              aria-label="أمر صوتي لفتح ملف مريضة اسمها مكرر: يعرض Praxa نتيجتين مرقمتين، ويختار المعالج الأولى فيفتح الملف"
              className="w-full rounded-[14px] border border-border shadow-[0_2px_12px_rgba(0,0,0,0.25)] hidden dark:block"
              style={{ aspectRatio: '1440/960' }}
            />
            <figcaption className="mt-2 text-[0.8125rem] text-foreground-muted text-center">
              أمر صوتي لفتح ملف مريضة اسمها مكرر: يعرض Praxa نتيجتين مرقمتين، ويختار المعالج الأولى فيفتح الملف
            </figcaption>
          </figure>
          <figure className="m-0">
            <div className="relative w-full overflow-hidden rounded-[14px] border border-border shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.25)]" style={{ aspectRatio: '3/2' }}>
              <Image src="/work/praxa/voice2.png" alt="نتيجتان بأرقام واضحة، وباقي الشاشة يخفت" fill className="object-cover dark:hidden" sizes="(max-width: 768px) 100vw, 800px" />
              <Image src="/work/praxa/voice2-dark.png" alt="نتيجتان بأرقام واضحة، وباقي الشاشة يخفت" fill className="object-cover hidden dark:block" sizes="(max-width: 768px) 100vw, 800px" />
            </div>
            <figcaption className="mt-2 text-[0.8125rem] text-foreground-muted text-center">نتيجتان بأرقام واضحة، وباقي الشاشة يخفت</figcaption>
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
