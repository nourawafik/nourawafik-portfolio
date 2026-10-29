'use client';
import { Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NextLink from 'next/link';
import { getOtherLocalePath } from '@/lib/lang-path';

interface LangLinkProps {
  fromLocale: 'en' | 'ar';
  className?: string;
  lang: string;
  hrefLang: string;
  label: string;
  onClick?: () => void;
  'aria-label'?: string;
}

function LangLinkInner({ fromLocale, className, lang, hrefLang, label, onClick, 'aria-label': ariaLabel }: LangLinkProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.size > 0 ? `?${searchParams.toString()}` : '';
  const href = getOtherLocalePath(pathname, search, fromLocale);
  return (
    <NextLink
      href={href}
      className={className}
      lang={lang}
      hrefLang={hrefLang}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {label}
    </NextLink>
  );
}

export function LangLink(props: LangLinkProps) {
  const fallbackHref = props.fromLocale === 'en' ? '/ar' : '/';
  return (
    <Suspense
      fallback={
        <NextLink
          href={fallbackHref}
          className={props.className}
          lang={props.lang}
          hrefLang={props.hrefLang}
          aria-label={props['aria-label']}
        >
          {props.label}
        </NextLink>
      }
    >
      <LangLinkInner {...props} />
    </Suspense>
  );
}
