import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { compileMDX } from 'next-mdx-remote/rsc';
import readingTime from 'reading-time';
import { Container } from '@/components/layout/container';
import { ProjectImage } from '@/components/ui/project-image';
import { MetadataGrid } from '@/components/mdx/metadata-grid';
import { mdxComponents } from '@/components/mdx';
import { getStudySlugs, getFrontmatter, getSource, getNextProject } from '@/lib/mdx';
import { caseStudies } from '@/content/case-studies';
import type { CaseStudyFrontmatter } from '@/types';

export async function generateStaticParams() {
  const slugs = await getStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const fm = await getFrontmatter(slug);
    return {
      title: fm.title,
      description: fm.description,
      alternates: {
        canonical: `https://nourawafik.com/work/${slug}`,
      },
      openGraph: {
        title: fm.title,
        description: fm.description,
        type: 'article',
        authors: ['Noura Wafik'],
        url: `https://nourawafik.com/work/${slug}`,
      },
      twitter: {
        card: 'summary_large_image',
        title: fm.title,
        description: fm.description,
      },
    };
  } catch {
    return {};
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const source = await getSource(slug).catch(() => null);
  if (source === null) notFound();

  const { content, frontmatter } = await compileMDX<CaseStudyFrontmatter>({
    source,
    options: { parseFrontmatter: true },
    components: mdxComponents,
  });

  const stats = readingTime(source);
  const nextProject = await getNextProject(slug);
  const heroAlt = caseStudies.find(s => s.slug === slug)?.heroAlt ?? frontmatter.title;

  const creativeWorkJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: frontmatter.title,
    description: frontmatter.description,
    author: {
      '@type': 'Person',
      name: 'Noura Wafik',
    },
    dateCreated: frontmatter.timeline,
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd).replace(/</g, '\\u003c') }}
      />
      {/* ── Header ── */}
      <Container className="pt-16 pb-12 md:pt-24">
        <div className="max-w-[760px]">
          <h1 className="text-[2.5rem] font-medium leading-[1.1] tracking-[-0.02em] text-foreground md:text-[3.5rem] mb-4">
            {frontmatter.title}
          </h1>
          <p className="text-[1.125rem] leading-[1.65] text-foreground-muted mb-2">
            {frontmatter.tagline}
          </p>
          <p className="font-mono text-[0.8125rem] text-foreground-subtle mb-10">
            {stats.text}
          </p>
          <MetadataGrid
            role={frontmatter.role}
            timeline={frontmatter.timeline}
            platform={frontmatter.platform}
            surfaces={frontmatter.surfaces}
            status={frontmatter.status}
          />
        </div>
      </Container>

      {/* ── Hero image ── */}
      <Container className="mb-16 md:mb-24">
        <ProjectImage slug={slug} variant="hero" alt={heroAlt} priority={true} />
      </Container>

      {/* ── MDX content ── */}
      <Container>
        <div className="mb-16 md:mb-24">{content}</div>
      </Container>

      {/* ── Next project ── */}
      {nextProject && (
        <div className="border-t border-border">
          <Container>
            <Link
              href={`/work/${nextProject.slug}`}
              className="group block py-12 hover:opacity-80 transition-opacity duration-150 md:py-16"
              aria-label={`Next project: ${nextProject.title}`}
            >
              <p className="font-mono text-[0.8125rem] text-foreground-subtle mb-3">
                Next project
              </p>
              <p className="text-[1.25rem] font-medium leading-[1.3] tracking-[-0.01em] text-foreground">
                {nextProject.title} <span aria-hidden="true">→</span>
              </p>
            </Link>
          </Container>
        </div>
      )}
    </article>
  );
}
