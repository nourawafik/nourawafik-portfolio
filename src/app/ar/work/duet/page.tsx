import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { NextProjectCard } from '@/components/ui/next-project-card';

export const metadata: Metadata = {
  title: 'Duet: دراسة حالة، نورا وفيق',
  description:
    'منصة توظيف تقدم مساعد ذكاء اصطناعي لكل طرف: Tempo لمسؤول التوظيف بقرارات يستطيع الدفاع عنها، وLyric للمتقدم بمساعدة في اللحظات الصعبة.',
  alternates: {
    canonical: 'https://nourawafik.com/ar/work/duet',
    languages: {
      en: 'https://nourawafik.com/work/duet',
      ar: 'https://nourawafik.com/ar/work/duet',
    },
  },
  openGraph: {
    title: 'Duet: دراسة حالة، نورا وفيق',
    description:
      'منصة توظيف تقدم مساعد ذكاء اصطناعي مخصصا لكل طرف: Tempo لمسؤول التوظيف، وLyric للمتقدم، على الويب والجوال.',
    type: 'article',
    authors: ['Noura Wafik'],
    url: 'https://nourawafik.com/ar/work/duet',
    images: [{ url: 'https://nourawafik.com/work/duet/duet-hero.png', width: 1600, height: 900 }],
  },
};

export default function ArDuetPage() {
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
            <li className="text-foreground">Duet</li>
          </ol>
        </nav>
      </Container>

      {/* ── H1 + intro ── */}
      <Container className="pt-8 pb-10 md:pb-12">
        <div className="max-w-[680px]">
          <h1 className="text-[2.5rem] font-medium leading-[1.3] tracking-[-0.02em] text-foreground md:text-[3.5rem] mb-5">
            Duet
          </h1>
          <p className="text-[1.125rem] leading-[1.8] text-foreground-muted">
            منصة توظيف تقدم مساعد ذكاء اصطناعي مخصصا لكل طرف: Tempo لمسؤول التوظيف، وLyric للمتقدم. ساهمت ضمن فريق التصميم في تطوير التجربة على الويب والجوال، وتصميم تفاعلات الذكاء الاصطناعي ونظام التصميم.
          </p>
        </div>
      </Container>

      {/* ── Meta row ── */}
      <Container className="pb-12 md:pb-16">
        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[
            { label: 'دوري', value: 'مصممة منتج ضمن فريق التصميم' },
            { label: 'المنصة', value: 'ويب وجوال · مستخدمة حاليا' },
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
            src="/work/duet/duet-hero.png"
            alt="Duet — شاشات Tempo وLyric"
            fill
            className="object-cover dark:hidden"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <Image
            src="/work/duet/duet-hero-dark.png"
            alt="Duet — شاشات Tempo وLyric"
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
          <span>تم تغيير الأسماء وبيانات الشركة، وأعيد رسم الشاشات لدراسة الحالة هذه. العمل الأصلي محمي باتفاقية سرية.</span>
        </aside>
      </Container>

      {/* ── The problem ── */}
      <Container className="mb-16 md:mb-24">
        <div className="grid md:grid-cols-[240px_1fr] gap-8 md:gap-16 items-start">
          <h2 className="text-[1.75rem] font-medium leading-[1.3] tracking-[-0.02em] text-foreground md:text-[2rem]">
            المشكلة
          </h2>
          <p className="text-[1rem] leading-[1.8] text-foreground-muted">
            أغلب أدوات التوظيف بالذكاء الاصطناعي تعطي المتقدم درجة وتكتفي بذلك. يحصل مسؤول التوظيف على رقم لا يستطيع شرحه لمديره، ولا يصل المتقدم أي رد. يعطي Duet كل طرف مساعدا مصمما لعمله، والصعوبة أن الطرفين لا يريدان الشيء نفسه دائما.
          </p>
        </div>
      </Container>

      {/* ── Tempo section ── */}
      <Container className="mb-4 md:mb-6">
        <h2 className="text-[1.75rem] font-medium leading-[1.3] tracking-[-0.02em] text-foreground md:text-[2rem]">
          Tempo لمسؤول التوظيف: قرارات يستطيع الدفاع عنها
        </h2>
      </Container>

      {/* Decision 01 */}
      <Container className="mb-8">
        <div className="border-s-2 border-accent ps-6">
          <p className="text-[0.75rem] text-foreground-muted mb-1">01</p>
          <h3 className="text-[1.125rem] font-semibold text-foreground mb-3">لا درجة بدون أسباب</h3>
          <p className="text-[1rem] leading-[1.8] text-foreground-muted">
            لا يعرض Tempo الدرجة وحدها أبدا. أهم الأسباب بجانبها في الشاشة نفسها، فيستطيع المسؤول دائما أن يشرح السبب.
          </p>
        </div>
      </Container>

      <Container className="mb-8">
        <figure className="m-0">
          <video
            src="/work/duet/tempo-reasons.mp4"
            poster="/work/duet/tempo-reasons-poster.png"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="الدرجة لا تظهر وحدها، الأسباب تأتي معها"
            className="w-full rounded-[14px] border border-border shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:hidden"
          />
          <video
            src="/work/duet/tempo-reasons-dark.mp4"
            poster="/work/duet/tempo-reasons-dark-poster.png"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="الدرجة لا تظهر وحدها، الأسباب تأتي معها"
            className="w-full rounded-[14px] border border-border shadow-[0_2px_12px_rgba(0,0,0,0.25)] hidden dark:block"
          />
          <figcaption className="mt-2 text-[0.8125rem] text-foreground-muted text-center">الدرجة لا تظهر وحدها، الأسباب تأتي معها</figcaption>
        </figure>
      </Container>

      {/* Decision 02 */}
      <Container className="mb-8">
        <div className="border-s-2 border-accent ps-6">
          <p className="text-[0.75rem] text-foreground-muted mb-1">02</p>
          <h3 className="text-[1.125rem] font-semibold text-foreground mb-3">لغة مسؤول التوظيف، لا لغة النظام</h3>
          <p className="text-[1rem] leading-[1.8] text-foreground-muted">
            الأسباب مكتوبة كما يتحدث مسؤولو التوظيف: &quot;5 من 7 مهارات مطلوبة&quot;، &quot;7 سنوات في مجال المدفوعات&quot;. ويستطيع نسخها مباشرة في تحديث لمديره.
          </p>
        </div>
      </Container>

      {/* Decision 03 */}
      <Container className="mb-8">
        <div className="border-s-2 border-accent ps-6">
          <p className="text-[0.75rem] text-foreground-muted mb-1">03</p>
          <h3 className="text-[1.125rem] font-semibold text-foreground mb-3">الاعتراض جزء من العمل</h3>
          <p className="text-[1rem] leading-[1.8] text-foreground-muted">
            يستطيع المسؤول أن يوافق أو يعترض على أي اقتراح مع ذكر السبب، وكل قرار يسجل. الاعتراض جزء طبيعي من العمل، وليس خطأ.
          </p>
        </div>
      </Container>

      <Container className="mb-16 md:mb-24">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { src: '/work/duet/tempo-review.png', srcDark: '/work/duet/tempo-review-dark.png', alt: 'Tempo: الدرجة والأسباب في شاشة واحدة', caption: 'الدرجة والأسباب في شاشة واحدة' },
            { src: '/work/duet/tempo-disagree.png', srcDark: '/work/duet/tempo-disagree-dark.png', alt: 'Tempo: الاعتراض على اقتراح الذكاء الاصطناعي', caption: 'الاعتراض وسببه يحفظ في السجل' },
          ].map(({ src, srcDark, alt, caption }) => (
            <figure key={src} className="m-0">
              <div className="overflow-hidden rounded-[14px] border border-border shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.25)]">
                <Image src={src} alt={alt} width={1600} height={1000} style={{ width: '100%', height: 'auto' }} className="block dark:hidden" sizes="(max-width: 768px) 100vw, 600px" />
                <Image src={srcDark} alt={alt} width={1600} height={1000} style={{ width: '100%', height: 'auto' }} className="hidden dark:block" sizes="(max-width: 768px) 100vw, 600px" />
              </div>
              <figcaption className="mt-2 text-[0.8125rem] text-foreground-muted text-center">{caption}</figcaption>
            </figure>
          ))}
        </div>
      </Container>

      {/* ── Lyric section ── */}
      <Container className="mb-4 md:mb-6">
        <h2 className="text-[1.75rem] font-medium leading-[1.3] tracking-[-0.02em] text-foreground md:text-[2rem]">
          Lyric للمتقدم: مساعدة في اللحظات الصعبة
        </h2>
      </Container>

      <Container className="mb-8">
        <p className="text-[1rem] leading-[1.8] text-foreground-muted max-w-[720px]">
          يستخدم مسؤول التوظيف Tempo طول اليوم ويحتاج معلومات كثيرة في مساحة صغيرة. أما المتقدم فيفتح Lyric في لحظات متوترة: عند التقديم، أو الانتظار، أو بعد الرفض. لذلك يحتاج Lyric أن يكون واضحا وهادئا.
        </p>
      </Container>

      {/* Decision 01 */}
      <Container className="mb-8">
        <div className="border-s-2 border-accent ps-6">
          <p className="text-[0.75rem] text-foreground-muted mb-1">01</p>
          <h3 className="text-[1.125rem] font-semibold text-foreground mb-3">بعد الرفض، ننظر للأمام</h3>
          <p className="text-[1rem] leading-[1.8] text-foreground-muted">
            يصل الرفض كإشعار رسمي. ودور Lyric بعده أن يعرض وظائف أنسب، لا أن يكرر الخبر السيئ.
          </p>
        </div>
      </Container>

      {/* Decision 02 */}
      <Container className="mb-8">
        <div className="border-s-2 border-accent ps-6">
          <p className="text-[0.75rem] text-foreground-muted mb-1">02</p>
          <h3 className="text-[1.125rem] font-semibold text-foreground mb-3">اقتراحات، لا انتقاد</h3>
          <p className="text-[1rem] leading-[1.8] text-foreground-muted">
            لا يقول Lyric &quot;سيرتك الذاتية ضعيفة&quot;، بل يوضح ما يبحث عنه أصحاب هذه الوظائف، ويسأل المتقدم إن كان يريد إضافته. والقرار للمتقدم.
          </p>
        </div>
      </Container>

      {/* Decision 03 */}
      <Container className="mb-8">
        <div className="border-s-2 border-accent ps-6">
          <p className="text-[0.75rem] text-foreground-muted mb-1">03</p>
          <h3 className="text-[1.125rem] font-semibold text-foreground mb-3">تحضير لهذه الوظيفة، لا قالب جاهز</h3>
          <p className="text-[1rem] leading-[1.8] text-foreground-muted">
            التحضير للمقابلة مبني على الوظيفة والشركة نفسها، فيبدو كمساعدة من شخص يفهم الموقف.
          </p>
        </div>
      </Container>

      <Container className="mb-16 md:mb-24">
        <div
          className={[
            'flex gap-4 overflow-x-auto -mx-4 px-4 pb-3',
            '[scroll-snap-type:x_mandatory] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
            'md:grid md:grid-cols-3 md:overflow-visible md:mx-0 md:px-0 md:pb-0',
          ].join(' ')}
        >
          {[
            { src: '/work/duet/lyric-roles.png', srcDark: '/work/duet/lyric-roles-dark.png', alt: 'Lyric: وظائف أنسب بعد الرفض', caption: 'وظائف أنسب بعد الرفض' },
            { src: '/work/duet/lyric-profile.png', srcDark: '/work/duet/lyric-profile-dark.png', alt: 'Lyric: اقتراحات لتحسين الملف', caption: 'اقتراحات لتحسين الملف' },
            { src: '/work/duet/lyric-prep.png', srcDark: '/work/duet/lyric-prep-dark.png', alt: 'Lyric: تحضير مقابلة مبني على الوظيفة', caption: 'تحضير للمقابلة مبني على الوظيفة' },
          ].map(({ src, srcDark, alt, caption }) => (
            <figure
              key={src}
              className="m-0 max-md:shrink-0 max-md:[flex:0_0_75%] max-md:[scroll-snap-align:start]"
            >
              <div
                className="relative w-full overflow-hidden border-[6px] border-[#0E2A2D] rounded-[28px]"
                style={{ aspectRatio: '390/844' }}
              >
                <Image src={src} alt={alt} fill className="object-cover dark:hidden" sizes="(max-width: 768px) 75vw, 400px" />
                <Image src={srcDark} alt={alt} fill className="object-cover hidden dark:block" sizes="(max-width: 768px) 75vw, 400px" />
              </div>
              <figcaption className="mt-2 text-[0.8125rem] text-foreground-muted text-center">{caption}</figcaption>
            </figure>
          ))}
        </div>
      </Container>

      {/* ── One design system, two voices ── */}
      <Container className="mb-16 md:mb-24">
        <div className="mb-6">
          <h2 className="text-[1.75rem] font-medium leading-[1.3] tracking-[-0.02em] text-foreground md:text-[2rem] mb-3">
            نظام تصميم واحد بصوتين
          </h2>
          <p className="text-[1rem] leading-[1.8] text-foreground-muted max-w-[720px]">
            كان لازما أن يشعر مستخدم كل مساعد بأنه مختلف، مع أن الاثنين مبنيان على نظام تصميم واحد. الأساس مشترك: المكونات وقواعد الإتاحة نفسها. ولكل مساعد صوته الخاص: اللون، وكثافة المعلومات، والحركة، وأسلوب الكتابة.
          </p>
        </div>
        <figure className="m-0">
          <div className="overflow-hidden rounded-[14px] border border-border shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.25)]">
            <Image src="/work/duet/two-voices.png" alt="نظام التصميم: نفس المكونات بمعالجتين للون" width={2050} height={1000} style={{ width: '100%', height: 'auto' }} className="block dark:hidden" sizes="(max-width: 768px) 100vw, 900px" />
            <Image src="/work/duet/two-voices-dark.png" alt="نظام التصميم: نفس المكونات بمعالجتين للون" width={2050} height={1000} style={{ width: '100%', height: 'auto' }} className="hidden dark:block" sizes="(max-width: 768px) 100vw, 900px" />
          </div>
          <figcaption className="mt-2 text-[0.8125rem] text-foreground-muted text-center">المكونات نفسها، بصوتين</figcaption>
        </figure>
      </Container>

      {/* ── What I learned ── */}
      <Container className="mb-4 md:mb-6">
        <h2 className="text-[1.75rem] font-medium leading-[1.3] tracking-[-0.02em] text-foreground md:text-[2rem]">
          ما تعلمته
        </h2>
      </Container>

      {[
        { n: '01', title: 'كلام الذكاء الاصطناعي جزء من التصميم', text: 'أصعب القرارات لم تكن الشاشات، بل ماذا يقول الذكاء الاصطناعي، ومتى يصمت، وماذا يظهر أولا.' },
        { n: '02', title: 'طرفان مختلفان في منتج واحد', text: 'أحيانا يريد مسؤول التوظيف والمتقدم عكس بعضهما. التصميم الصادق مع الطرفين يعترف بهذا الاختلاف ولا يخفيه.' },
        { n: '03', title: 'مخططات فريق الأعمال بداية جيدة', text: 'بدأنا من مخططات أولية أعدها فريق الأعمال. لم تكن تصميما، بل تفكيرا في المنتج على الورق، ووفرت أسابيع من النقاش. وكان عملنا تحويلها إلى نظام قابل للتنفيذ.' },
      ].map(({ n, title, text }) => (
        <Container key={n} className="mb-8">
          <div className="border-s-2 border-accent ps-6">
            <p className="text-[0.75rem] text-foreground-muted mb-1">{n}</p>
            <h3 className="text-[1.125rem] font-semibold text-foreground mb-3">{title}</h3>
            <p className="text-[1rem] leading-[1.8] text-foreground-muted">{text}</p>
          </div>
        </Container>
      ))}

      {/* ── Next project card ── */}
      <Container className="mb-16 md:mb-24">
        <NextProjectCard currentSlug="duet" locale="ar" />
      </Container>
    </article>
  );
}
