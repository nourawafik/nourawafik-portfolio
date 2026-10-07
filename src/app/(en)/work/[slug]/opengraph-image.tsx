import { ImageResponse } from 'next/og';
import { alexandriaFont, figtreeFont, spaceGroteskFont } from '@/lib/og-fonts';
import { getStudySlugs, getFrontmatter } from '@/lib/mdx';
import { Words } from '@/lib/og-words';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export async function generateStaticParams() {
  const slugs = await getStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [fm, figtree, spaceGrotesk, alexandria] = await Promise.all([
    getFrontmatter(slug),
    figtreeFont(),
    spaceGroteskFont(),
    alexandriaFont(),
  ]);

  const title = fm.title.length > 55 ? fm.title.slice(0, 52) + '…' : fm.title;
  const tagline = fm.tagline.length > 90 ? fm.tagline.slice(0, 87) + '…' : fm.tagline;

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          backgroundColor: '#F4F2EE',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', gap: 24, fontFamily: 'Figtree', fontWeight: 400, fontSize: 13, color: '#636258', letterSpacing: '0.06em' }}>
          <span>Case Study</span>
          <span>Noura Wafik</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Titles can mix scripts (دايرتنا · Da'eratna) — per-word layout keeps spacing even */}
          <Words
            text={title}
            style={{
              fontFamily: 'Space Grotesk, Alexandria',
              fontWeight: 500,
              fontSize: 64,
              color: '#13140F',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
            }}
          />
          <div style={{ fontFamily: 'Figtree', fontWeight: 400, fontSize: 28, color: '#636258', lineHeight: 1.5 }}>
            {tagline}
          </div>
        </div>

        <div style={{ display: 'flex', fontFamily: 'Figtree', fontWeight: 400, fontSize: 13, color: '#636258', letterSpacing: '0.04em' }}>
          nourawafik.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Figtree', data: figtree, weight: 400, style: 'normal' },
        { name: 'Space Grotesk', data: spaceGrotesk, weight: 500, style: 'normal' },
        { name: 'Alexandria', data: alexandria, weight: 500, style: 'normal' },
      ],
    }
  );
}
