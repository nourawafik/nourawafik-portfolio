export const revalidate = 3600;

import { Hero } from '@/components/sections/hero';
import { ServicesMarquee } from '@/components/sections/services-marquee';
import { SelectedWork } from '@/components/sections/selected-work';
import { WhatIDo } from '@/components/sections/what-i-do';
import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesMarquee />
      <SelectedWork />
      <WhatIDo />
      <AboutSection />
      <ContactSection />
    </>
  );
}
