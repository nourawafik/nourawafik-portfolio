import type { CSSProperties } from 'react';

// One abstract screen, defined once in LTR coordinates (% of the screen box).
// The RTL column derives every position from these: start-anchored bars move
// to the end edge and the progress fill re-anchors to the right, while the play
// glyph moves but keeps pointing right. RTL is designed, not mirrored.
type Bar = {
  x: number;
  y: number;
  w: number;
  h: number;
  tone: 'ink' | 'strong' | 'line' | 'btn';
  shape?: 'play';
  order: number; // stagger step for the mirror moment
};

const BARS: Bar[] = [
  { x: 0, y: 0, w: 11, h: 8, tone: 'ink', order: 0 }, // logo mark
  { x: 60, y: 2.5, w: 40, h: 3.5, tone: 'strong', order: 0 }, // nav
  { x: 0, y: 19, w: 74, h: 8, tone: 'ink', order: 1 }, // title
  { x: 0, y: 33, w: 92, h: 3.5, tone: 'strong', order: 2 }, // text lines
  { x: 0, y: 40, w: 66, h: 3.5, tone: 'strong', order: 2 },
  { x: 0, y: 47, w: 80, h: 3.5, tone: 'strong', order: 2 },
  { x: 0, y: 62, w: 7, h: 7, tone: 'ink', shape: 'play', order: 3 }, // play glyph — never flips
  { x: 12, y: 64.75, w: 88, h: 1.5, tone: 'line', order: 3 }, // progress track
  { x: 12, y: 64.75, w: 50, h: 1.5, tone: 'ink', order: 3 }, // progress fill — fills from reading start
  { x: 0, y: 84, w: 36, h: 14, tone: 'btn', order: 4 }, // primary button
];

// A spec-sheet column: direction label with arrow, dashed redline on the
// reading-start edge, and the screen itself.
function Column({ dir }: { dir: 'ltr' | 'rtl' }) {
  const rtl = dir === 'rtl';
  return (
    <div className={`mirror-col mirror-col-${dir}`}>
      <div className="mirror-label" aria-hidden>
        <span>{rtl ? 'RTL' : 'LTR'}</span>
        <span className="mirror-arrow" />
      </div>
      <div className="mirror-panel">
        <span className="mirror-guide" aria-hidden />
        <div className="mirror-screen">
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
                className={`mirror-${bar.tone}${rtl ? ' mirror-move' : ''}`}
                data-shape={bar.shape}
                style={style}
              />
            );
          })}
        </div>
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
      <div dir="ltr" role="img" aria-label={label} className="mirror">
        <Column dir="ltr" />
        <span aria-hidden className="mirror-axis" />
        <Column dir="rtl" />
      </div>
    </div>
  );
}
