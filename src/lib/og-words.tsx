import type { CSSProperties } from 'react';

interface WordsProps {
  text: string;
  dir?: 'ltr' | 'rtl';
  style: CSSProperties & { fontSize: number };
}

// Satori (next/og) has no bidi support: it reverses word order in Arabic and
// renders spaces far too wide. Laying each word out as its own flex item, in
// reading order for the direction, avoids both. Letters still join within a word.
export function Words({ text, dir = 'ltr', style }: WordsProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: dir === 'rtl' ? 'row-reverse' : 'row',
        columnGap: Math.round(style.fontSize * 0.28),
        ...style,
      }}
    >
      {text.split(' ').map((word, i) => (
        <span key={i}>{word}</span>
      ))}
    </div>
  );
}
