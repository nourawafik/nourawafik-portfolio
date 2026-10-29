import { readFile, readdir } from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const ULFA_DIR = path.join(process.cwd(), 'src/content/case-studies/ulfa');

export interface UlfaStudyFrontmatter {
  title: string;
  titleAr?: string;
  seoTitle?: string;
  slug: string;
  parent: string;
  order: number;
  next: string | null;
  nextTitle: string | null;
  nextTitleAr?: string | null;
  description: string;
}

export async function getUlfaStudySlugs(): Promise<string[]> {
  const files = await readdir(ULFA_DIR);
  return files.filter((f) => f.endsWith('.mdx')).map((f) => f.replace('.mdx', ''));
}

export async function getUlfaStudySource(slug: string): Promise<string> {
  return readFile(path.join(ULFA_DIR, `${slug}.mdx`), 'utf8');
}

export async function getUlfaStudyFrontmatter(slug: string): Promise<UlfaStudyFrontmatter> {
  const source = await getUlfaStudySource(slug);
  const { data } = matter(source);
  return data as UlfaStudyFrontmatter;
}

export async function getUlfaStudyArIntro(slug: string): Promise<string | null> {
  const source = await getUlfaStudySource(slug);
  const match = source.match(/\{\/\*\s*AR:\s*([\s\S]*?)\s*\*\/\}/);
  return match ? match[1].trim() : null;
}
