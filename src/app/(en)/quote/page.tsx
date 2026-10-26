import type { Metadata } from 'next';
import { Suspense } from 'react';
import { QuoteForm } from '@/components/forms/quote-form';

export const metadata: Metadata = {
  title: 'Get a quote',
  description:
    'Tell me about your project. Brand identities, websites, apps and design systems — designed in Arabic and English.',
  alternates: {
    languages: {
      en: 'https://nourawafik.com/quote',
      ar: 'https://nourawafik.com/ar/quote',
    },
  },
  openGraph: {
    title: 'Get a quote — Noura Wafik',
    description:
      'Tell me about your project. Brand identities, websites, apps and design systems — designed in Arabic and English.',
    url: 'https://nourawafik.com/quote',
  },
};

export default function QuotePage() {
  return (
    <Suspense>
      <QuoteForm locale="en" />
    </Suspense>
  );
}
