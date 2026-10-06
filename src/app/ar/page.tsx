import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { ProjectImage } from '@/components/ui/project-image';
import { ArContactSection } from '@/components/sections/ar-contact-section';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://nourawafik.com/ar',
    languages: {
      en: 'https://nourawafik.com',
      ar: 'https://nourawafik.com/ar',
    },
  },
};

function ArHero() {
  return (
    <section aria-label="مقدمة" className="py-20 md:py-32">
      <Container>
        <div className="flex flex-col gap-8 max-w-[760px]">
          <div className="flex flex-col gap-3">
            <h1 className="text-[2.5rem] font-medium leading-[1.1] tracking-[-0.02em] text-foreground md:text-[3.5rem]">
              نورا وفيق
            </h1>
            <p className="text-[1.125rem] leading-[1.65] text-foreground-muted">
              مصممة منتجات رقمية
            </p>
          </div>

          <p className="text-[1rem] leading-[1.65] text-foreground max-w-[560px]">
            منتجات SaaS متعددة الأدوار، أنظمة ثنائية اللغة، وأدوات الذكاء الاصطناعي. أبني الأساس
            التصميمي وأوصل المنتج للإنتاج — من بنية التوكنز إلى المواصفات الجاهزة للتطوير. مقيمة في
            القاهرة، متاحة للعمل عن بُعد.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button href="/ar#work" variant="primary">
              تصفحوا أعمالي
            </Button>
            <Button href="/ar#contact" variant="ghost">
              تواصلوا معي
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

const arProjects = [
  {
    slug: 'dayratna',
    title: 'دايرتنا',
    body: 'منصة عربية للدعم النفسي تخدم السعودية ومصر. بنيت نظام التصميم من الصفر — يخدم اللغتين العربية والإنجليزية، الويب والموبايل، الوضعين الفاتح والغامق. أقود التصميم مع مصممة جونيور بتشتغل على نسخة الويب تحت إشرافي.',
    thumbAlt: "Da'eratna platform — circle detail screen in Arabic showing categories and theme picker",
  },
  {
    slug: 'kemeclinic',
    title: 'KemeClinic',
    body: 'منصة طبية أمريكية للعلاج النفسي عن بُعد. أصمم وحدي كل الواجهات لأربعة أنواع مستخدمين (إدارة، أطباء، مرضى، موظفين). المنتج حالياً في الإنتاج بيخدم أكتر من 200 مستخدم نشط.',
    thumbAlt: 'KemeClinic provider dashboard',
  },
  {
    slug: 'got-ai',
    title: 'Got-AI',
    body: 'منصة توظيف بمساعدة الذكاء الاصطناعي. بنيت تجربة المستخدم لاثنين من المساعدين الذكيين — واحد للـ recruiters وواحد للـ candidates. التحدي الأكبر كان تصميم قرارات AI تقدر الشركات تشرحها قانونياً.',
    thumbAlt: 'Got-AI Finn recruiter view showing candidate score with reasoning',
  },
];

function ArWork() {
  return (
    <section id="work" aria-labelledby="work-heading" className="py-20 md:py-32 border-t border-border">
      <Container>
        <h2
          id="work-heading"
          className="text-[1.5rem] font-medium leading-[1.2] tracking-[-0.015em] text-foreground mb-4"
        >
          لمحة عن أعمالي الحالية
        </h2>
        <p className="text-[1rem] leading-[1.65] text-foreground-muted max-w-[560px] mb-16">
          أشتغل دلوقتي على ثلاث منتجات في مجالات مختلفة. كل واحد منهم بيحل مشكلة مختلفة، لكن
          كلهم بيشتركوا في نفس الفلسفة: التصميم الجاد للمستخدمين الجادين.
        </p>

        <ul className="flex flex-col divide-y divide-border list-none" role="list">
          {arProjects.map((project, i) => (
            <li key={project.slug}>
              <div className="py-10 md:py-14">
                <div className="flex flex-col gap-6 md:flex-row md:gap-16">
                  <div className="flex flex-col gap-4 flex-1">
                    <p className="font-mono text-[0.8125rem] text-foreground-muted">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="text-[1.25rem] font-medium leading-[1.3] tracking-[-0.01em] text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-[1rem] leading-[1.65] text-foreground-muted max-w-[480px]">
                      {project.body}
                    </p>
                    <Link
                      href={`/work/${project.slug}`}
                      className="text-[0.875rem] text-foreground-muted hover:text-foreground transition-colors duration-150 w-fit"
                    >
                      اقرأوا الـ case study ←
                    </Link>
                  </div>
                  <div className="md:w-[380px] shrink-0 overflow-hidden rounded-card bg-surface border border-border">
                    <ProjectImage slug={project.slug} variant="thumb" alt={project.thumbAlt} priority={i === 0} />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function ArAbout() {
  return (
    <section id="about" aria-labelledby="about-ar-heading" className="py-20 md:py-32 border-t border-border">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:gap-24">
          <h2
            id="about-ar-heading"
            className="text-[0.8125rem] font-mono text-foreground-muted shrink-0 md:w-32 md:pt-1"
          >
            نبذة عني
          </h2>

          <div className="flex flex-col gap-6 max-w-[560px]">
            <p className="text-[1rem] leading-[1.65] text-foreground-muted">
              أنا نورة — مصممة منتجات مقيمة في القاهرة. لديّ أكثر من 6 سنوات من الخبرة في
              التصميم، تخصصت خلالها تدريجياً في تصميم المنتجات الرقمية بعد خبرة في التصميم البصري
              والجرافيك. أعمل على المنتج بالكامل: البحث، وهندسة المعلومات، وتصميم التفاعل، وأنظمة
              التصميم.
            </p>

            <p className="text-[1rem] leading-[1.65] text-foreground-muted">
              أتحدث العربية والإنجليزية، وأصمم منتجات في مجالات الصحة الرقمية وأدوات الذكاء
              الاصطناعي ومنصات العافية في منطقة الخليج ومصر والولايات المتحدة. تشمل أعمالي الأخيرة
              قيادة تصميم منتجات متعددة المنصات وثنائية اللغة، وتوجيه مصممين مبتدئين، وبناء أنظمة
              تصميم قابلة للقراءة بالذكاء الاصطناعي باستخدام design.md وStorybook لتسليم المواصفات
              للمطورين.
            </p>

            <p className="text-[1rem] leading-[1.65] text-foreground-muted">
              متاحة للأدوار الكاملة عن بُعد، ومنفتحة على الانتقال إلى الإمارات.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function ArPage() {
  return (
    <>
      <ArHero />
      <ArWork />
      <ArAbout />
      <ArContactSection />
    </>
  );
}
