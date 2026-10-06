import type { Metadata } from 'next';
import { IBM_Plex_Sans_Arabic, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Providers } from '@/components/providers';
import { NavAr } from '@/components/layout/nav-ar';
import { Footer } from '@/components/layout/footer';
import '../globals.css';

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: '--font-ibm-plex-arabic',
  subsets: ['arabic'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nourawafik.com'),
  title: 'نورا وفيق — مصممة منتجات',
  description:
    'مصممة منتجات تشتغل على منصات SaaS وتطبيقات صحية ومنتجات ذكاء اصطناعي — بالعربي والإنجليزي. متاحة للوظائف بدوام كامل.',
  authors: [{ name: 'Noura Wafik' }],
  creator: 'Noura Wafik',
  openGraph: {
    title: 'نورا وفيق — مصممة منتجات',
    description:
      'أصمم منتجات SaaS وتطبيقات صحية ومنتجات AI بالعربي والإنجليزي. مقري القاهرة، شغلي مع شركة إماراتية على منتجات للسعودية ومصر والولايات المتحدة.',
    type: 'website',
    locale: 'ar_EG',
    url: 'https://nourawafik.com/ar',
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

export default function ArLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${ibmPlexSansArabic.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground font-[var(--font-ibm-plex-arabic)]">
        <Providers>
          <NavAr />
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
