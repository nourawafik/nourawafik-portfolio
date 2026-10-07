import { ImageResponse } from 'next/og';
import { figtreeFont, spaceGroteskFont } from '@/lib/og-fonts';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const [figtree, spaceGrotesk] = await Promise.all([figtreeFont(), spaceGroteskFont()]);

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
        <div style={{ display: 'flex', fontFamily: 'Figtree', fontWeight: 400, fontSize: 13, color: '#636258', letterSpacing: '0.06em' }}>
          nourawafik.com
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 500,
              fontSize: 80,
              color: '#13140F',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Noura Wafik
          </div>
          <div style={{ display: 'flex', fontFamily: 'Figtree', fontWeight: 400, fontSize: 36, color: '#636258', lineHeight: 1.4 }}>
            Product Designer
          </div>
        </div>

        <div style={{ display: 'flex', gap: 24, fontFamily: 'Figtree', fontWeight: 400, fontSize: 13, color: '#636258', letterSpacing: '0.04em' }}>
          <span>Bilingual (Arabic/English)</span>
          <span>Based in Cairo</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Figtree', data: figtree, weight: 400, style: 'normal' },
        { name: 'Space Grotesk', data: spaceGrotesk, weight: 500, style: 'normal' },
      ],
    }
  );
}
