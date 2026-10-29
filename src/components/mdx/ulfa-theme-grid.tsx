import Image from 'next/image';
import { Caption } from './caption';

const THEMES = ['slate', 'forest', 'rose', 'ochre'] as const;

export function UlfaThemeGrid() {
  return (
    <figure className="my-10">
      <div className="space-y-3">
        {/* Row 1: EN light */}
        <div className="grid grid-cols-4 gap-2 md:gap-3">
          {THEMES.map((theme) => (
            <div key={`en-${theme}`} className="relative aspect-[390/844] rounded-[14px] overflow-hidden border-[3px] border-[#0E2A2D]">
              <Image
                src={`/work/ulfa/ds-explore-${theme}-en.png`}
                alt={`Explore screen — ${theme} theme, light, English`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 23vw, 15vw"
              />
            </div>
          ))}
        </div>
        {/* Row 2: AR dark */}
        <div className="grid grid-cols-4 gap-2 md:gap-3">
          {THEMES.map((theme) => (
            <div key={`ar-dark-${theme}`} className="relative aspect-[390/844] rounded-[14px] overflow-hidden border-[3px] border-[#0E2A2D]">
              <Image
                src={`/work/ulfa/ds-explore-${theme}-ar-dark.png`}
                alt={`Explore screen — ${theme} theme, dark, Arabic`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 23vw, 15vw"
              />
            </div>
          ))}
        </div>
      </div>
      <Caption>The same screen in all 8 contexts</Caption>
    </figure>
  );
}
