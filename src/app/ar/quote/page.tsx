import type { Metadata } from 'next';
import { Suspense } from 'react';
import { QuoteForm } from '@/components/forms/quote-form';

export const metadata: Metadata = {
  title: 'اطلب عرض سعر',
  description:
    'أخبرني عن مشروعك. هويات بصرية ومواقع وتطبيقات وأنظمة تصميم، مصممة بالعربي والإنجليزي.',
  alternates: {
    languages: {
      en: 'https://nourawafik.com/quote',
      ar: 'https://nourawafik.com/ar/quote',
    },
  },
  openGraph: {
    title: 'اطلب عرض سعر — نورا وفيق',
    description:
      'أخبرني عن مشروعك. هويات بصرية ومواقع وتطبيقات وأنظمة تصميم، مصممة بالعربي والإنجليزي.',
    url: 'https://nourawafik.com/ar/quote',
    locale: 'ar_EG',
  },
};

export default function QuotePageAr() {
  return (
    <Suspense>
      <QuoteForm locale="ar" />
    </Suspense>
  );
}
