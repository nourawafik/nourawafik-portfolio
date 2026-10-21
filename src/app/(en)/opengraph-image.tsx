import { ImageResponse } from 'next/og';
import { rubikFont } from '@/lib/og-fonts';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const [rubik400, rubik700] = await Promise.all([rubikFont(400), rubikFont(700)]);

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          backgroundColor: '#F6F4EE',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontFamily: 'Rubik',
            fontWeight: 400,
            fontSize: 13,
            color: '#3E5558',
            letterSpacing: '0.06em',
          }}
        >
          nourawafik.com
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              fontFamily: 'Rubik',
              fontWeight: 700,
              fontSize: 80,
              color: '#0E2A2D',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Noura Wafik
          </div>
          <div
            style={{
              fontFamily: 'Rubik',
              fontWeight: 400,
              fontSize: 36,
              color: '#3E5558',
              lineHeight: 1.4,
            }}
          >
            Brand &amp; Product Designer
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 24,
            fontFamily: 'Rubik',
            fontWeight: 400,
            fontSize: 13,
            color: '#3E5558',
            letterSpacing: '0.04em',
          }}
        >
          <span>Bilingual (Arabic/English)</span>
          <span>Based in Cairo</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Rubik', data: rubik400, weight: 400, style: 'normal' },
        { name: 'Rubik', data: rubik700, weight: 700, style: 'normal' },
      ],
    }
  );
}
