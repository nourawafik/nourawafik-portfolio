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
  // Sized for full-width single images (~1100px on desktop).
  // Grid images load slightly larger than their column width — acceptable for a portfolio.
  const sizes = '(min-width: 1024px) 1100px, 100vw';

  return (
    <figure className="flex flex-col gap-0">
      {src ? (
        <div className="relative aspect-video w-full overflow-hidden">
          {/* Light image — default, hidden in dark mode only when a dark variant exists */}
          <Image
            src={src}
            alt={alt}
            fill
            className={`object-cover${srcDark ? ' dark:hidden' : ''}`}
            sizes={sizes}
          />
          {/* Dark image — only rendered when srcDark is provided, hidden in light mode */}
          {srcDark && (
            <Image
              src={srcDark}
              alt={alt}
              fill
              className="object-cover hidden dark:block"
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
