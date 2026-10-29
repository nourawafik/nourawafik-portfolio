import Image from 'next/image';
import { Caption } from './caption';

interface DesktopScreenshotProps {
  src: string;
  srcDark?: string;
  alt: string;
  caption?: string;
}

export function DesktopScreenshot({ src, srcDark, alt, caption }: DesktopScreenshotProps) {
  return (
    <figure className="my-8">
      <div className="card-shadow rounded-[14px] overflow-hidden border border-border">
        <Image
          src={src}
          alt={alt}
          width={1440}
          height={960}
          className={`w-full h-auto block${srcDark ? ' dark:hidden' : ''}`}
          sizes="(min-width: 1024px) 1100px, 100vw"
        />
        {srcDark && (
          <Image
            src={srcDark}
            alt=""
            aria-hidden
            width={1440}
            height={960}
            className="hidden dark:block w-full h-auto"
            sizes="(min-width: 1024px) 1100px, 100vw"
          />
        )}
      </div>
      {caption && <Caption>{caption}</Caption>}
    </figure>
  );
}
