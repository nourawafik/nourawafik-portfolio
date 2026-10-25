export function getOtherLocalePath(
  pathname: string,
  search: string,
  fromLocale: 'en' | 'ar'
): string {
  const qs = search || '';
  if (fromLocale === 'en') {
    return '/ar' + (pathname === '/' ? '' : pathname) + qs;
  }
  const withoutAr = pathname.replace(/^\/ar/, '') || '/';
  return withoutAr + qs;
}
