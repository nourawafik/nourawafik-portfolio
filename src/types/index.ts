export type Locale = 'en' | 'ar';

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  timeline: string;
  platform: string;
  status: string;
  thumbAlt: string;
  heroAlt: string;
}

export interface CaseStudyFrontmatter {
  title: string;
  tagline: string;
  role: string;
  timeline: string;
  platform: string;
  surfaces?: string;
  status: string;
  order: number;
  slug: string;
  description: string;
}

export interface ProjectStub {
  slug: string;
  title: string;
  order: number;
}
