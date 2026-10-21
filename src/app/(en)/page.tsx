import { Hero } from '@/components/sections/hero';
import { ServicesMarquee } from '@/components/sections/services-marquee';
import { SelectedWork } from '@/components/sections/selected-work';
import { ServicesSection } from '@/components/sections/services-section';
import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';
import { getActiveOffer } from '@/content/offers';

export default function HomePage() {
  const activeOffer = getActiveOffer();

  return (
    <>
      <Hero />
      <ServicesMarquee />
      <SelectedWork />
      <ServicesSection activeOffer={activeOffer} />
      <AboutSection />
      <ContactSection />
    </>
  );
}
