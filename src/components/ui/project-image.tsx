import Image from 'next/image';

const VARIANT_CONFIG = {
  thumb: { width: 1600, height: 1200, sizes: '(max-width: 768px) 100vw, 600px' },
  hero:  { width: 1600, height: 900,  sizes: '(max-width: 1200px) 100vw, 1200px' },
} as const;

interface ProjectImageProps {
  slug: string;
  variant: 'thumb' | 'hero';
  alt: string;
  priority?: boolean;
  srcDark?: string;
}

export function ProjectImage({ slug, variant, alt, priority = false, srcDark }: ProjectImageProps) {
  const { width, height, sizes } = VARIANT_CONFIG[variant];
  const lightSrc = `/work/${slug}-${variant}.png`;

  if (!srcDark) {
    return (
      <Image
        src={lightSrc}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className="w-full h-auto block"
      />
    );
  }

  return (
    <>
      <Image
        src={lightSrc}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className="w-full h-auto block dark:hidden"
      />
      <Image
        src={srcDark}
        alt=""
        aria-hidden
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className="w-full h-auto hidden dark:block"
      />
    </>
  );
}
