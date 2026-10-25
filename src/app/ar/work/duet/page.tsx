import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { NextProjectCard } from '@/components/ui/next-project-card';

export const metadata: Metadata = {
  title: 'Duet: دراسة حالة، نورا وفيق',
  description:
    'منصة توظيف بالذكاء الاصطناعي لطرفين: Tempo للمسؤول عن التوظيف بتفسيرات يقدر يدافع عنها، وLyric للمتقدم بمساعدة في اللحظات الصعبة.',
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
      'منصة توظيف كل طرف فيها ليه مساعد ذكاء اصطناعي خاص بيه: Tempo للمسؤول وLyric للمتقدم، على الويب والموبايل.',
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
            منصة توظيف كل طرف فيها ليه مساعد ذكاء اصطناعي خاص بيه: Tempo للمسؤول عن التوظيف، وLyric للمتقدم. اشتغلت على المنتج ضمن فريق التصميم، على الويب والموبايل، في أنماط التعامل مع الذكاء الاصطناعي ونظام التصميم.
          </p>
        </div>
      </Container>

      {/* ── Meta row ── */}
      <Container className="pb-12 md:pb-16">
        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { label: 'دوري', value: 'مصممة منتج، فريق التصميم' },
            { label: 'المنصة', value: 'ويب + موبايل' },
            { label: 'الحالة', value: 'شغال' },
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
          <span>الأسماء والتفاصيل وبيانات الشركة متغيرة، وكل الشاشات هنا اتعاد رسمها لدراسة الحالة دي. الشغل الأصلي تحت NDA.</span>
        </aside>
      </Container>

      {/* ── The problem ── */}
      <Container className="mb-16 md:mb-24">
        <div className="grid md:grid-cols-[240px_1fr] gap-8 md:gap-16 items-start">
          <h2 className="text-[1.75rem] font-medium leading-[1.3] tracking-[-0.02em] text-foreground md:text-[2rem]">
            المشكلة
          </h2>
          <p className="text-[1rem] leading-[1.8] text-foreground-muted">
            أغلب أدوات التوظيف بالذكاء الاصطناعي بتدي المتقدم درجة وخلاص. المسؤول عن التوظيف بياخد رقم مش عارف يشرحه لمديره، والمتقدم مش بيوصله أي رد. Duet بيدي كل طرف مساعد مصمم لشغله هو، والصعب إن الطرفين مش دايما عايزين نفس الحاجة.
          </p>
        </div>
      </Container>

      {/* ── Tempo section ── */}
      <Container className="mb-4 md:mb-6">
        <h2 className="text-[1.75rem] font-medium leading-[1.3] tracking-[-0.02em] text-foreground md:text-[2rem]">
          Tempo للمسؤول عن التوظيف: قرارات يقدر يدافع عنها
        </h2>
      </Container>

      {/* Decision 01 */}
      <Container className="mb-8">
        <div className="border-s-2 border-accent ps-6">
          <p className="text-[0.75rem] text-foreground-muted mb-1">01</p>
          <h3 className="text-[1.125rem] font-semibold text-foreground mb-3">مفيش درجة بدون أسباب</h3>
          <p className="text-[1rem] leading-[1.8] text-foreground-muted">
            Tempo مش بيعرض درجة لوحدها أبدا. أهم الأسباب جنبها في نفس الشاشة، مش مستخبية، فالمسؤول دايما يقدر يقول ليه.
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
            aria-label="الدرجة مش بتوصل لوحدها: الأسباب جياها"
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
            aria-label="الدرجة مش بتوصل لوحدها: الأسباب جياها"
            className="w-full rounded-[14px] border border-border shadow-[0_2px_12px_rgba(0,0,0,0.25)] hidden dark:block"
          />
          <figcaption className="mt-2 text-[0.8125rem] text-foreground-muted text-center">الدرجة مش بتوصل لوحدها: الأسباب جياها</figcaption>
        </figure>
      </Container>

      {/* Decision 02 */}
      <Container className="mb-8">
        <div className="border-s-2 border-accent ps-6">
          <p className="text-[0.75rem] text-foreground-muted mb-1">02</p>
          <h3 className="text-[1.125rem] font-semibold text-foreground mb-3">لغة المسؤول، مش لغة الموديل</h3>
          <p className="text-[1rem] leading-[1.8] text-foreground-muted">
            الأسباب مكتوبة بلغة المسؤول عن التوظيف: &quot;5 من 7 مهارات مطلوبة&quot;، &quot;7 سنين في المدفوعات&quot;. ويقدر ينسخها على طول في تحديث لمديره.
          </p>
        </div>
      </Container>

      {/* Decision 03 */}
      <Container className="mb-8">
        <div className="border-s-2 border-accent ps-6">
          <p className="text-[0.75rem] text-foreground-muted mb-1">03</p>
          <h3 className="text-[1.125rem] font-semibold text-foreground mb-3">الاعتراض جزء من الشغل</h3>
          <p className="text-[1rem] leading-[1.8] text-foreground-muted">
            المسؤول يقدر يوافق أو يعترض على أي اقتراح، ومعاه السبب، في ثواني. كل قرار بيتسجل، والاعتراض بيتعامل كجزء طبيعي من الشغل، مش غلطة.
          </p>
        </div>
      </Container>

      <Container className="mb-16 md:mb-24">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { src: '/work/duet/tempo-review.png', srcDark: '/work/duet/tempo-review-dark.png', alt: 'Tempo: الدرجة والأسباب في شاشة واحدة', caption: 'الدرجة والأسباب في شاشة واحدة، بلغة المسؤول' },
            { src: '/work/duet/tempo-disagree.png', srcDark: '/work/duet/tempo-disagree-dark.png', alt: 'Tempo: الاعتراض على اقتراح الذكاء الاصطناعي', caption: 'الاعتراض بياخد عشر ثواني ويتسجل في الأرشيف' },
          ].map(({ src, srcDark, alt, caption }) => (
            <figure key={src} className="m-0">
              <div className="relative w-full overflow-hidden rounded-[14px] border border-border shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.25)]" style={{ aspectRatio: '3/2' }}>
                <Image src={src} alt={alt} fill className="object-cover dark:hidden" sizes="(max-width: 768px) 100vw, 600px" />
                <Image src={srcDark} alt={alt} fill className="object-cover hidden dark:block" sizes="(max-width: 768px) 100vw, 600px" />
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
          المسؤول عن التوظيف بيستخدم Tempo طول اليوم ومحتاج معلومات كتير في مساحة صغيرة. المتقدم بيفتح Lyric في لحظات متوترة (وهو بيقدم، أو مستني، أو اترفض)، فـ Lyric محتاج يكون واضح وهادي.
        </p>
      </Container>

      {/* Decision 01 */}
      <Container className="mb-8">
        <div className="border-s-2 border-accent ps-6">
          <p className="text-[0.75rem] text-foreground-muted mb-1">01</p>
          <h3 className="text-[1.125rem] font-semibold text-foreground mb-3">بعد الرفض، نبص للأمام</h3>
          <p className="text-[1rem] leading-[1.8] text-foreground-muted">
            الرفض بيوصل كإشعار رسمي. دور Lyric بعدها إنه يوري وظايف أنسب، مش إنه يعيد الخبر الوحش.
          </p>
        </div>
      </Container>

      {/* Decision 02 */}
      <Container className="mb-8">
        <div className="border-s-2 border-accent ps-6">
          <p className="text-[0.75rem] text-foreground-muted mb-1">02</p>
          <h3 className="text-[1.125rem] font-semibold text-foreground mb-3">اقتراحات، مش انتقاد</h3>
          <p className="text-[1rem] leading-[1.8] text-foreground-muted">
            Lyric مش بيقول &quot;السي في بتاعك ضعيف&quot;. بيقول أصحاب الوظايف دي بيدوروا على إيه، ويسأل المتقدم لو عايز يضيفه. والمتقدم هو اللي بيقرر.
          </p>
        </div>
      </Container>

      {/* Decision 03 */}
      <Container className="mb-8">
        <div className="border-s-2 border-accent ps-6">
          <p className="text-[0.75rem] text-foreground-muted mb-1">03</p>
          <h3 className="text-[1.125rem] font-semibold text-foreground mb-3">تحضير للوظيفة دي، مش تمبليت</h3>
          <p className="text-[1rem] leading-[1.8] text-foreground-muted">
            التحضير للمقابلة متعمل من الوظيفة والشركة نفسها، فبيبان كأنه مساعدة من حد فاهم الموقف.
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
            { src: '/work/duet/lyric-roles.png', srcDark: '/work/duet/lyric-roles-dark.png', alt: 'Lyric: وظايف مشابهة بعد الرفض', caption: 'بعد الرفض، Lyric بيبص للأمام' },
            { src: '/work/duet/lyric-profile.png', srcDark: '/work/duet/lyric-profile-dark.png', alt: 'Lyric: اقتراحات لتحسين البروفايل', caption: 'اقتراحات، مش انتقاد' },
            { src: '/work/duet/lyric-prep.png', srcDark: '/work/duet/lyric-prep-dark.png', alt: 'Lyric: تحضير مقابلة مخصص للوظيفة', caption: 'تحضير مبني من الوظيفة دي، مش تمبليت' },
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
            Tempo وLyric كان لازم كل واحد فيهم يحسسه مستخدمه إنه مختلف، بس يطلعوا من نظام تصميم واحد. الأساس مشترك: نفس المكونات والتوكنز وقواعد الإتاحة. وفوقه كل مساعد ليه صوته: اللون، وكثافة المعلومات، والحركة، وطريقة كتابة الذكاء الاصطناعي. وأي مكون جديد بيتضاف مرة واحدة، بشكل لـ Tempo وشكل لـ Lyric.
          </p>
        </div>
        <figure className="m-0">
          <div className="relative w-full overflow-hidden rounded-[14px] border border-border shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.25)]" style={{ aspectRatio: '3/2' }}>
            <Image src="/work/duet/two-voices.png" alt="نظام التصميم: نفس المكونات بمعالجتين للون" fill className="object-cover dark:hidden" sizes="(max-width: 768px) 100vw, 900px" />
            <Image src="/work/duet/two-voices-dark.png" alt="نظام التصميم: نفس المكونات بمعالجتين للون" fill className="object-cover hidden dark:block" sizes="(max-width: 768px) 100vw, 900px" />
          </div>
          <figcaption className="mt-2 text-[0.8125rem] text-foreground-muted text-center">نفس المكونات، صوتين</figcaption>
        </figure>
      </Container>

      {/* ── What I learned ── */}
      <Container className="mb-4 md:mb-6">
        <h2 className="text-[1.75rem] font-medium leading-[1.3] tracking-[-0.02em] text-foreground md:text-[2rem]">
          اللي اتعلمته
        </h2>
      </Container>

      {[
        { n: '01', title: 'ناتج الذكاء الاصطناعي هو ناتج التصميم', text: 'أصعب القرارات مكانتش شاشات، كانت الذكاء الاصطناعي هيقول إيه، وإمتى يسكت، وإيه اللي يظهر الأول.' },
        { n: '02', title: 'طرفين يعني تصميم للتوتر', text: 'المسؤول والمتقدم ساعات بيبقوا على طرفين عكس بعض في نفس القرار. التصميم بأمانة للاتنين معناه إنك تقبل التوتر ده، مش إنك تخبيه.' },
        { n: '03', title: 'وايرفريمات البيزنس بداية كويسة', text: 'بدأنا من وايرفريمز عملها فريق البيزنس. مكانتش تصميم، كانت تفكير في المنتج على ورق، ووفرت أسابيع من الاتفاق. والشغل كان تحويل المنطق ده لنظام يتنفذ.' },
      ].map(({ n, title, text }) => (
        <Container key={n} className="mb-8">
          <div className="border-s-2 border-accent ps-6">
            <p className="text-[0.75rem] text-foreground-muted mb-1">{n}</p>
            <h3 className="text-[1.125rem] font-semibold text-foreground mb-3">{title}</h3>
            <p className="text-[1rem] leading-[1.8] text-foreground-muted">{text}</p>
          </div>
        </Container>
      ))}

      {/* ── Status ── */}
      <Container className="mb-16 md:mb-24">
        <div className="grid md:grid-cols-[240px_1fr] gap-8 md:gap-16 items-start">
          <h2 className="text-[1.75rem] font-medium leading-[1.3] tracking-[-0.02em] text-foreground md:text-[2rem]">
            الحالة
          </h2>
          <p className="text-[1rem] leading-[1.8] text-foreground-muted">
            شغال على الويب والموبايل. تفاصيل الشركة وطريقة بناء الذكاء الاصطناعي سرية، وأقدر أشرح الشغل في مقابلة.
          </p>
        </div>
      </Container>

      {/* ── Next project card ── */}
      <Container className="mb-16 md:mb-24">
        <NextProjectCard currentSlug="duet" locale="ar" />
      </Container>
    </article>
  );
}
