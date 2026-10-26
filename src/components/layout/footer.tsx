import NextLink from 'next/link';
import Image from 'next/image';
import { LangLink } from '@/components/ui/lang-link';
import { visibleSocial } from '@/content/social';

const currentYear = new Date().getFullYear();

const cvLink = {
  en: { label: 'CV',               href: '/resume.pdf' },
  ar: { label: 'السيرة الذاتية',   href: '/resume.pdf' },
};

interface FooterProps {
  locale?: 'en' | 'ar';
}

export function Footer({ locale = 'en' }: FooterProps) {
  const ar = locale === 'ar';
  const cv = cvLink[locale];

  return (
    <footer className="mt-auto bg-[#0E2A2D] dark:bg-sunk dark:border-t dark:border-line">
      <div className="mx-auto w-full px-6 md:px-12 max-w-[1200px]">
        <div className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          {/* Logo — always on-dark variant */}
          <NextLink
            href={ar ? '/ar' : '/'}
            className="flex items-center hover:opacity-70 transition-opacity duration-150"
            aria-label={ar ? 'نورا وفيق — الصفحة الرئيسية' : 'Noura Wafik — home'}
          >
            <Image
              src={ar ? '/logo/lockup-ar-on-dark.svg' : '/logo/lockup-en-on-dark.svg'}
              alt={ar ? 'نورا وفيق' : 'noura wafik'}
              width={110}
              height={28}
            />
          </NextLink>

          {/* Social links + CV + lang switch */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-small" style={{ color: 'var(--muted-dark, #A9C2C4)' }}>
            {visibleSocial.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-white transition-colors duration-150"
              >
                {label}
              </a>
            ))}
            <a
              href={cv.href}
              download
              className="underline underline-offset-4 hover:text-white transition-colors duration-150"
            >
              {cv.label}
            </a>
            <LangLink
              fromLocale={locale}
              hrefLang={ar ? 'en' : 'ar'}
              lang={ar ? 'en' : 'ar'}
              aria-label={ar ? 'English version' : 'النسخة العربية'}
              label={ar ? 'EN' : 'عربي'}
              className="rounded-pill border border-[#A9C2C4]/40 px-2.5 py-1 hover:text-white hover:border-[#A9C2C4] transition-colors duration-150"
            />
          </div>
        </div>

        <p dir="ltr" className="pb-8 text-small" style={{ color: 'var(--muted-dark, #A9C2C4)' }}>
          © {currentYear} {ar ? 'نورا وفيق' : 'Noura Wafik'}
        </p>
      </div>
    </footer>
  );
}
