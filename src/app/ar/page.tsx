export const revalidate = 3600;

import type { Metadata } from 'next';
import { Hero } from '@/components/sections/hero';
import { ServicesMarquee } from '@/components/sections/services-marquee';
import { SelectedWork } from '@/components/sections/selected-work';
import { ServicesSection } from '@/components/sections/services-section';
import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';
import { getActiveOffer } from '@/content/offers';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://nourawafik.com/ar',
    languages: {
      en: 'https://nourawafik.com',
      ar: 'https://nourawafik.com/ar',
    },
  },
};

export default function ArPage() {
  const activeOffer = getActiveOffer();

  return (
    <>
      <Hero locale="ar" />
      <ServicesMarquee locale="ar" />
      <SelectedWork locale="ar" />
      <ServicesSection locale="ar" activeOffer={activeOffer} />
      <AboutSection locale="ar" />
      <ContactSection locale="ar" />
    </>
  );
}
