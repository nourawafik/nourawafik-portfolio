import type { Metadata } from 'next';
import { Alexandria, Almarai, Figtree, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Providers } from '@/components/providers';
import { Nav } from '@/components/layout/nav';
import { Footer } from '@/components/layout/footer';
import '../globals.css';

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
});

// Arabic fallbacks for Arabic words inside English pages (e.g. "دايرتنا · Da'eratna").
// Not preloaded: the browser only fetches them when Arabic glyphs actually render.
const alexandria = Alexandria({
  variable: '--font-alexandria',
  subsets: ['arabic'],
  display: 'swap',
  preload: false,
});

const almarai = Almarai({
  variable: '--font-almarai',
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
  preload: false,
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
});

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Noura Wafik',
  jobTitle: 'Senior Product Designer',
  url: 'https://nourawafik.com',
  email: 'hello@nourawafik.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cairo',
    addressCountry: 'EG',
  },
  sameAs: ['https://linkedin.com/in/nourawafik'],
  knowsLanguage: ['en', 'ar'],
  knowsAbout: [
    'Product Design',
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
    default: 'Noura Wafik — Senior Product Designer | Bilingual Design Systems',
    template: '%s — Noura Wafik',
  },
  description:
    'Bilingual product designer based in Cairo, designing data-heavy SaaS, healthtech platforms, and AI tools across the Gulf, Egypt, and the US. Currently open to full-time roles.',
  authors: [{ name: 'Noura Wafik' }],
  creator: 'Noura Wafik',
  openGraph: {
    title: 'Noura Wafik — Senior Product Designer | Bilingual Design Systems',
    description:
      'Designing data-heavy SaaS, healthtech, and AI tools. Bilingual (Arabic/English). Based in Cairo, working with a UAE-based team on products for the Gulf, Egypt, and the US.',
    type: 'website',
    locale: 'en_US',
    url: 'https://nourawafik.com',
    siteName: 'Noura Wafik',
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
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${figtree.variable} ${spaceGrotesk.variable} ${alexandria.variable} ${almarai.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c') }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Providers>
          <Nav />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
