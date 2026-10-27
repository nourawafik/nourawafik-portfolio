import { Suspense } from 'react';
import type { Metadata } from 'next';
import { WorkLibrary } from '@/components/sections/work-library';
import { ContactSection } from '@/components/sections/contact-section';

export const metadata: Metadata = {
  title: 'أعمال نورا وفيق، مصممة منتجات وهويات بصرية',
  description:
    'تطبيقات جوال ومنصات ويب وأنظمة تصميم بالعربي والإنجليزي، في مجالات الصحة والتوظيف وغيرها.',
  alternates: {
    canonical: 'https://nourawafik.com/ar/work',
    languages: {
      en: 'https://nourawafik.com/work',
      ar: 'https://nourawafik.com/ar/work',
    },
  },
};

export default function ArWorkPage() {
  return (
    <>
      <Suspense>
        <WorkLibrary locale="ar" />
      </Suspense>
      <ContactSection locale="ar" />
    </>
  );
}
