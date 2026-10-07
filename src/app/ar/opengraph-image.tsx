import { ImageResponse } from 'next/og';
import { alexandriaFont, almaraiFont } from '@/lib/og-fonts';
import { Words } from '@/lib/og-words';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const [almarai, alexandria] = await Promise.all([almaraiFont(), alexandriaFont()]);

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          width: '100%',
          height: '100%',
          backgroundColor: '#F4F2EE',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', fontFamily: 'Almarai', fontWeight: 400, fontSize: 13, color: '#636258', textAlign: 'right' }}>
          nourawafik.com
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-end' }}>
          <Words
            dir="rtl"
            text="نورا وفيق"
            style={{ fontFamily: 'Alexandria', fontWeight: 500, fontSize: 80, color: '#13140F', lineHeight: 1.3 }}
          />
          <Words
            dir="rtl"
            text="مصممة منتجات رقمية"
            style={{ fontFamily: 'Almarai', fontWeight: 400, fontSize: 36, color: '#636258', lineHeight: 1.6 }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row-reverse', gap: 24 }}>
          {['مصممة منتجات', 'القاهرة'].map((item) => (
            <Words
              key={item}
              dir="rtl"
              text={item}
              style={{ fontFamily: 'Almarai', fontWeight: 400, fontSize: 13, color: '#636258' }}
            />
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Almarai', data: almarai, weight: 400, style: 'normal' },
        { name: 'Alexandria', data: alexandria, weight: 500, style: 'normal' },
      ],
    }
  );
}
