import Image from 'next/image';
import { Caption } from './caption';

interface PhoneImageProps {
  src?: string;
  srcDark?: string;
  alt: string;
  altAr?: string;
  caption?: string;
}

export function PhoneImage({ src, srcDark, alt, caption }: PhoneImageProps) {
  return (
    <figure className="flex flex-col gap-0">
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: '390 / 844',
          borderRadius: '28px',
          border: '6px solid #0E2A2D',
        }}
      >
        {src && (
          <Image
            src={src}
            alt={alt}
            fill
            className={`object-contain${srcDark ? ' dark:hidden' : ''}`}
            sizes="(min-width: 1024px) 33vw, 80vw"
          />
        )}
        {srcDark && (
          <Image
            src={srcDark}
            alt={alt}
            fill
            className="object-contain hidden dark:block"
            sizes="(min-width: 1024px) 33vw, 80vw"
          />
        )}
      </div>
      {caption && <Caption>{caption}</Caption>}
    </figure>
  );
}
