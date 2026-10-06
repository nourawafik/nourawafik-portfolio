import type { Metadata } from 'next';
import { Hero } from '@/components/sections/hero';
import { SelectedWork } from '@/components/sections/selected-work';
import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://nourawafik.com',
    languages: {
      en: 'https://nourawafik.com',
      ar: 'https://nourawafik.com/ar',
    },
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <AboutSection />
      <ContactSection />
    </>
  );
}
