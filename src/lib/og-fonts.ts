import { readFile } from 'fs/promises';
import path from 'path';

const FONTS_DIR = path.join(process.cwd(), 'public/fonts');

async function loadFont(file: string): Promise<ArrayBuffer> {
  const buf = await readFile(path.join(FONTS_DIR, file));
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer;
}

// Satori (next/og) needs TTF/OTF, not woff2 — these files exist only for OG images.

/** Latin headings and display. */
export const spaceGroteskFont = () => loadFont('space-grotesk-500.ttf');

/** Latin body. */
export const figtreeFont = () => loadFont('figtree-400.ttf');

/** Arabic headings and display. */
export const alexandriaFont = () => loadFont('alexandria-500.ttf');

/** Arabic body, labels and metadata. */
export const almaraiFont = () => loadFont('almarai-400.ttf');
