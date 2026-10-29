import { Suspense } from 'react';
import type { Metadata } from 'next';
import { WorkLibrary } from '@/components/sections/work-library';
import { ContactSection } from '@/components/sections/contact-section';

export const metadata: Metadata = {
  title: 'Work — Noura Wafik, product and brand designer',
  description:
    'Mobile apps, web platforms and design systems in Arabic and English, for health, HR tech and more.',
  alternates: {
    canonical: 'https://nourawafik.com/work',
    languages: {
      en: 'https://nourawafik.com/work',
      ar: 'https://nourawafik.com/ar/work',
    },
  },
};

export default function WorkPage() {
  return (
    <>
      <Suspense>
        <WorkLibrary locale="en" />
      </Suspense>
      <ContactSection />
    </>
  );
}
