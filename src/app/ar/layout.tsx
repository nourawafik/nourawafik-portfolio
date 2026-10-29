import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import { Providers } from '@/components/providers';
import { NavAr } from '@/components/layout/nav-ar';
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

const personJsonLdAr = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'نورا وفيق',
  jobTitle: 'مصممة منتجات وهويات بصرية',
  url: 'https://nourawafik.com/ar',
  email: 'hello@nourawafik.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'القاهرة',
    addressCountry: 'EG',
  },
  sameAs: visibleSocial.map(s => s.href),
  knowsLanguage: ['ar', 'en'],
  knowsAbout: [
    'تصميم المنتجات',
    'الهوية البصرية',
    'تصميم SaaS',
    'الصحة الرقمية',
    'تجربة الذكاء الاصطناعي',
    'أنظمة التصميم',
    'التصميم ثنائي اللغة',
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://nourawafik.com'),
  title: 'نورا وفيق، مصممة منتجات وهويات بصرية بالعربي والإنجليزي',
  description:
    'هويات بصرية ومواقع ومنتجات رقمية مصممة بالعربي والإنجليزي من البداية. مصممة منتجات وهويات من القاهرة، للشركات في مصر والخليج.',
  authors: [{ name: 'Noura Wafik' }],
  creator: 'Noura Wafik',
  openGraph: {
    title: 'نورا وفيق، مصممة منتجات وهويات بصرية بالعربي والإنجليزي',
    description:
      'هويات بصرية ومواقع ومنتجات رقمية مصممة بالعربي والإنجليزي من البداية. مصممة منتجات وهويات من القاهرة، للشركات في مصر والخليج.',
    type: 'website',
    locale: 'ar_EG',
    url: 'https://nourawafik.com/ar',
    siteName: 'Noura Wafik',
    images: [{
      url: 'https://nourawafik.com/ar/opengraph-image.png',
      width: 1200,
      height: 630,
      alt: 'نورا وفيق — اجعل فكرتك ترى النور. مصممة منتجات رقمية وهويات بصرية، بالعربي والإنجليزي.',
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

export default function ArLayout({ children }: { children: React.ReactNode }) {
  const activeOffer = getActiveOffer();

  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={rubik.variable}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLdAr).replace(/</g, '\\u003c') }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Providers>
          {activeOffer && <OfferBar offer={activeOffer} locale="ar" />}
          <NavAr />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer locale="ar" />
          {process.env.NEXT_PUBLIC_ASK_NOURA === 'true' && <AskNoura locale="ar" />}
        </Providers>
      </body>
    </html>
  );
}
