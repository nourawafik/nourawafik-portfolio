import NextLink from 'next/link';
import Image from 'next/image';

const currentYear = new Date().getFullYear();

interface SocialLink {
  label: string;
  href: string;
  download?: boolean;
}

const socialLinks: Record<'en' | 'ar', SocialLink[]> = {
  en: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/nourawafik' },
    { label: 'Behance', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'CV', href: '/resume.pdf', download: true },
  ],
  ar: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/nourawafik' },
    { label: 'Behance', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'السيرة الذاتية', href: '/resume.pdf', download: true },
  ],
};

interface FooterProps {
  locale?: 'en' | 'ar';
}

export function Footer({ locale = 'en' }: FooterProps) {
  const ar = locale === 'ar';
  const links = socialLinks[locale];

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

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-small" style={{ color: 'var(--muted-dark, #A9C2C4)' }}>
            {links.map(({ label, href, download }) => (
              <a
                key={label}
                href={href}
                {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                {...(download ? { download: true } : {})}
                className="underline underline-offset-4 hover:text-white transition-colors duration-150"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <p dir="ltr" className="pb-8 text-small" style={{ color: 'var(--muted-dark, #A9C2C4)' }}>
          © {currentYear} {ar ? 'نورا وفيق' : 'Noura Wafik'}
        </p>
      </div>
    </footer>
  );
}
