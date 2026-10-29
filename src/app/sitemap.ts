import type { MetadataRoute } from 'next';
import { stat } from 'fs/promises';
import path from 'path';
import { getStudySlugs } from '@/lib/mdx';

const BASE_URL = 'https://nourawafik.com';
const CONTENT_DIR = path.join(process.cwd(), 'src/content/case-studies');

const ULFA_STUDIES = ['participant-app', 'live-session', 'facilitator-studio', 'design-system'];

async function getMtime(slug: string): Promise<Date> {
  try {
    const s = await stat(path.join(CONTENT_DIR, `${slug}.mdx`));
    return s.mtime;
  } catch {
    return new Date();
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getStudySlugs();

  const caseStudies = await Promise.all(
    slugs.map(async (slug) => ({
      url: `${BASE_URL}/work/${slug}`,
      lastModified: await getMtime(slug),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  );

  const ulfaStudies = ULFA_STUDIES.map((study) => ({
    url: `${BASE_URL}/work/ulfa/${study}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const arCaseStudies = ['praxa', 'duet'].map((slug) => ({
    url: `${BASE_URL}/ar/work/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const arUlfaStudies = ULFA_STUDIES.map((study) => ({
    url: `${BASE_URL}/ar/work/ulfa/${study}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/ar`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/work`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/ar/work`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/work/ulfa`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/ar/work/ulfa`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    ...ulfaStudies,
    ...arUlfaStudies,
    {
      url: `${BASE_URL}/quote`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/ar/quote`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    ...caseStudies,
    ...arCaseStudies,
  ];
}
