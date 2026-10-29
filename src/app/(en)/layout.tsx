import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import { Providers } from '@/components/providers';
import { Nav } from '@/components/layout/nav';
import { Footer } from '@/components/layout/footer';
import { OfferBar } from '@/components/ui/offer-bar';
import { AskNoura } from '@/components/ui/ask-noura';
import { getActiveOffer } from '@/content/offers';
import { visibleSocial } from '@/content/social';
import '../globals.css';

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin', 'arabic'],
  weight: ['400', '500', '700', '800'],
  display: 'swap',
});

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Noura Wafik',
  jobTitle: 'Product and brand designer',
  url: 'https://nourawafik.com',
  email: 'hello@nourawafik.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cairo',
    addressCountry: 'EG',
  },
  sameAs: visibleSocial.map(s => s.href),
  knowsLanguage: ['en', 'ar'],
  knowsAbout: [
    'Product Design',
    'Brand Design',
    'SaaS Design',
    'Healthtech',
    'AI UX Design',
    'Design Systems',
    'Bilingual Design',
    'Arabic UX',
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://nourawafik.com'),
  title: {
    default: 'Noura Wafik — Product and brand designer, Arabic and English',
    template: '%s — Noura Wafik',
  },
  description:
    'Brand identities, websites and digital products designed in Arabic and English from the start. A product and brand designer in Cairo, for companies in Egypt and the Gulf.',
  authors: [{ name: 'Noura Wafik' }],
  creator: 'Noura Wafik',
  openGraph: {
    title: 'Noura Wafik — Product and brand designer, Arabic and English',
    description:
      'Brand identities, websites and digital products designed in Arabic and English from the start. A product and brand designer in Cairo, for companies in Egypt and the Gulf.',
    type: 'website',
    locale: 'en_US',
    url: 'https://nourawafik.com',
    siteName: 'Noura Wafik',
    images: [{
      url: 'https://nourawafik.com/opengraph-image.png',
      width: 1200,
      height: 630,
      alt: 'Noura Wafik — Bring your idea to life. Digital products and brand identities, designed in Arabic and English.',
    }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    languages: {
      en: 'https://nourawafik.com',
      ar: 'https://nourawafik.com/ar',
    },
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  const activeOffer = getActiveOffer();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={rubik.variable}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c') }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Providers>
          {activeOffer && <OfferBar offer={activeOffer} locale="en" />}
          <Nav />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          {process.env.NEXT_PUBLIC_ASK_NOURA === 'true' && <AskNoura locale="en" />}
        </Providers>
      </body>
    </html>
  );
}
