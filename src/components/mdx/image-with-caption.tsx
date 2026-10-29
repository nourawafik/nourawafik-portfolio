import Image from 'next/image';
import { ThumbnailPlaceholder } from '@/components/ui/thumbnail-placeholder';
import { Caption } from './caption';

interface ImageWithCaptionProps {
  src?: string;
  srcDark?: string;
  alt: string;
  caption?: string;
}

export function ImageWithCaption({ src, srcDark, alt, caption }: ImageWithCaptionProps) {
  const sizes = '(min-width: 1024px) 1100px, 100vw';

  return (
    <figure className="my-8">
      {src ? (
        <div className="card-shadow overflow-hidden rounded-[16px] border border-border">
          <Image
            src={src}
            alt={alt}
            width={2880}
            height={1620}
            style={{ width: '100%', height: 'auto' }}
            className={`block${srcDark ? ' dark:hidden' : ''}`}
            sizes={sizes}
          />
          {srcDark && (
            <Image
              src={srcDark}
              alt={alt}
              width={2880}
              height={1620}
              style={{ width: '100%', height: 'auto' }}
              className="hidden dark:block"
              sizes={sizes}
            />
          )}
        </div>
      ) : (
        <ThumbnailPlaceholder label={alt} />
      )}
      {caption && <Caption>{caption}</Caption>}
    </figure>
  );
}
