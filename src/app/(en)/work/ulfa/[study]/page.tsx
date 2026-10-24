import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { compileMDX } from 'next-mdx-remote/rsc';
import { Container } from '@/components/layout/container';
import { mdxComponents } from '@/components/mdx';
import {
  getUlfaStudySlugs,
  getUlfaStudySource,
  getUlfaStudyFrontmatter,
  type UlfaStudyFrontmatter,
} from '@/lib/ulfa';

export async function generateStaticParams() {
  const slugs = await getUlfaStudySlugs();
  return slugs.map((study) => ({ study }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ study: string }>;
}): Promise<Metadata> {
  const { study } = await params;
  try {
    const fm = await getUlfaStudyFrontmatter(study);
    return {
      title: `${fm.title} — Ulfa`,
      description: fm.description,
      alternates: { canonical: `https://nourawafik.com/work/ulfa/${study}` },
      openGraph: {
        title: `${fm.title} — Ulfa`,
        description: fm.description,
        type: 'article',
        authors: ['Noura Wafik'],
        url: `https://nourawafik.com/work/ulfa/${study}`,
      },
    };
  } catch {
    return {};
  }
}

export default async function UlfaStudyPage({
  params,
}: {
  params: Promise<{ study: string }>;
}) {
  const { study } = await params;

  const source = await getUlfaStudySource(study).catch(() => null);
  if (source === null) notFound();

  const { content, frontmatter } = await compileMDX<UlfaStudyFrontmatter>({
    source,
    options: { parseFrontmatter: true },
    components: mdxComponents,
  });

  return (
    <article>
      {/* ── Breadcrumb ── */}
      <Container className="pt-8 pb-0">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-[0.8125rem] text-foreground-muted list-none">
            <li>
              <Link href="/work/ulfa" className="hover:text-foreground transition-colors duration-150">
                Ulfa
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-foreground">{frontmatter.title}</li>
          </ol>
        </nav>
      </Container>

      {/* ── Header ── */}
      <Container className="pt-8 pb-12">
        <div className="max-w-[760px]">
          <h1 className="text-[2.5rem] font-medium leading-[1.1] tracking-[-0.02em] text-foreground md:text-[3.5rem]">
            {frontmatter.title}
          </h1>
        </div>
      </Container>

      {/* ── MDX content ── */}
      <Container>
        <div className="mb-16 md:mb-24">{content}</div>
      </Container>

      {/* ── Footer nav ── */}
      <div className="border-t border-border">
        <Container>
          <div className="flex items-center justify-between py-10 md:py-12">
            <Link
              href="/work/ulfa"
              className="text-[0.875rem] text-foreground-muted hover:text-foreground transition-colors duration-150"
            >
              ← Back to Ulfa
            </Link>
            {frontmatter.next && (
              <Link
                href={`/work/ulfa/${frontmatter.next}`}
                className="text-[0.875rem] text-foreground-muted hover:text-foreground transition-colors duration-150"
              >
                {frontmatter.nextTitle} →
              </Link>
            )}
            {!frontmatter.next && (
              <Link
                href="/work/duet"
                className="text-[0.875rem] text-foreground-muted hover:text-foreground transition-colors duration-150"
              >
                Next project: Duet →
              </Link>
            )}
          </div>
        </Container>
      </div>
    </article>
  );
}
