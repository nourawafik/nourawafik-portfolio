import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') ?? '';
  if (host === 'www.nourawafik.com') {
    const url = req.nextUrl.clone();
    url.host = 'nourawafik.com';
    url.port = '';
    return NextResponse.redirect(url, { status: 301 });
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
