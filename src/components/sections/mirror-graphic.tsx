import type { CSSProperties } from 'react';
import { cn } from '@/lib/utils';

// One abstract screen, defined once in LTR coordinates (% of the panel).
// The RTL panel derives every position from these: start-anchored bars move to
// the end edge, the progress fill re-anchors to the right, and the play glyph
// moves but keeps pointing right. RTL is designed, not mirrored.
type Bar = {
  x: number;
  y: number;
  w: number;
  h: number;
  tone: 'strong' | 'muted' | 'line' | 'button';
  shape?: 'play';
  order: number; // stagger step for the mirror moment
};

const BARS: Bar[] = [
  { x: 0, y: 0, w: 12, h: 9, tone: 'muted', order: 0 }, // logo mark
  { x: 60, y: 2.5, w: 40, h: 4, tone: 'strong', order: 0 }, // nav
  { x: 0, y: 22, w: 74, h: 9, tone: 'muted', order: 1 }, // title
  { x: 0, y: 37, w: 90, h: 4, tone: 'strong', order: 2 }, // text line
  { x: 0, y: 45, w: 64, h: 4, tone: 'strong', order: 2 }, // text line
  { x: 0, y: 60, w: 8, h: 9, tone: 'muted', shape: 'play', order: 3 }, // play glyph — never flips
  { x: 14, y: 63.5, w: 86, h: 2, tone: 'line', order: 3 }, // progress track
  { x: 14, y: 63.5, w: 50, h: 2, tone: 'muted', order: 3 }, // progress fill — fills from reading start
  { x: 0, y: 81, w: 36, h: 13, tone: 'button', order: 4 }, // primary button
];

const TONE: Record<Bar['tone'], string> = {
  strong: 'bg-border-strong',
  muted: 'bg-foreground-muted',
  line: 'bg-border',
  button: '',
};

function Panel({ dir }: { dir: 'ltr' | 'rtl' }) {
  const rtl = dir === 'rtl';
  return (
    <div className="flex-1 rounded-card bg-sunk p-[9%]">
      <div className="relative aspect-square [container-type:inline-size] md:aspect-[5/6]">
        {BARS.map((bar, i) => {
          const x = rtl ? 100 - bar.x - bar.w : bar.x;
          const style: CSSProperties & Record<string, string> = {
            left: `${x}%`,
            top: `${bar.y}%`,
            width: `${bar.w}%`,
            height: `${bar.h}%`,
          };
          if (rtl) {
            // Distance back to the LTR position, in container widths, for the mirror moment.
            style['--mirror-from'] = String(bar.x - x);
            style['--mirror-delay'] = `${bar.order * 20}ms`;
          }
          return (
            <span
              key={i}
              className={cn(
                'absolute',
                rtl && 'mirror-move',
                bar.shape === 'play' ? '[clip-path:polygon(0_0,100%_50%,0_100%)]' : '',
                bar.tone === 'button' ? 'rounded-control' : '',
                bar.tone === 'button' ? (rtl ? 'bg-accent' : 'bg-border-strong') : TONE[bar.tone]
              )}
              style={style}
            />
          );
        })}
      </div>
    </div>
  );
}

// Plays the mirror once per visit, before first paint, and never under reduced
// motion. Without JS, on repeat visits or with reduced motion the final LTR | RTL
// pair is simply what renders.
const PLAY_ONCE = `(function(){try{var d=document.documentElement;if(sessionStorage.getItem('nw-mirror'))return;sessionStorage.setItem('nw-mirror','1');if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.setAttribute('data-mirror','play');setTimeout(function(){d.removeAttribute('data-mirror')},2400)}catch(e){}})()`;

export function MirrorGraphic({ label, className }: { label: string; className?: string }) {
  return (
    <div className={className}>
      <script dangerouslySetInnerHTML={{ __html: PLAY_ONCE }} />
      {/* Fixed physical order on both pages: it's a diagram of LTR vs RTL, not text. */}
      <div dir="ltr" role="img" aria-label={label} className="flex items-stretch gap-4 md:gap-6">
        <Panel dir="ltr" />
        <span aria-hidden className="w-px shrink-0 bg-border-strong" />
        <Panel dir="rtl" />
      </div>
    </div>
  );
}
