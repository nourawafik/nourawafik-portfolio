import { readFile } from 'fs/promises';
import path from 'path';

const FONTS_DIR = path.join(process.cwd(), 'public/fonts');

async function loadFont(file: string): Promise<ArrayBuffer> {
  const buf = await readFile(path.join(FONTS_DIR, file));
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer;
}

// Satori (next/og) needs TTF/OTF. Latin subset covers English OG images;
// Arabic case studies use pre-rendered PNGs (staticImage fallback).
export const rubikFont = (weight: 400 | 700 = 400) =>
  loadFont(`rubik-${weight}.ttf`);
