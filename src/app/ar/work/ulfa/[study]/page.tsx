import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { compileMDX } from 'next-mdx-remote/rsc';
import { Container } from '@/components/layout/container';
import { mdxComponents } from '@/components/mdx';
import { ArrowIcon } from '@/components/ui/arrow-icon';
import { NextProjectCard } from '@/components/ui/next-project-card';
import {
  getUlfaStudySlugs,
  getUlfaStudySource,
  getUlfaStudyFrontmatter,
  getUlfaStudyArIntro,
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
    const titleAr = fm.titleAr ?? fm.title;
    const pageTitle = `${titleAr} — ألفة: دراسة حالة، نورا وفيق`;
    return {
      title: pageTitle,
      description: fm.description,
      alternates: {
        canonical: `https://nourawafik.com/ar/work/ulfa/${study}`,
        languages: {
          en: `https://nourawafik.com/work/ulfa/${study}`,
          ar: `https://nourawafik.com/ar/work/ulfa/${study}`,
        },
      },
      openGraph: {
        title: pageTitle,
        description: fm.description,
        type: 'article',
        authors: ['Noura Wafik'],
        url: `https://nourawafik.com/ar/work/ulfa/${study}`,
      },
    };
  } catch {
    return {};
  }
}

export default async function ArUlfaStudyPage({
  params,
}: {
  params: Promise<{ study: string }>;
}) {
  const { study } = await params;

  const source = await getUlfaStudySource(study).catch(() => null);
  if (source === null) notFound();

  const [{ content, frontmatter }, arIntro] = await Promise.all([
    compileMDX<UlfaStudyFrontmatter>({
      source,
      options: { parseFrontmatter: true },
      components: mdxComponents,
    }),
    getUlfaStudyArIntro(study),
  ]);

  const titleAr = frontmatter.titleAr ?? frontmatter.title;
  const nextTitleAr = frontmatter.nextTitleAr ?? frontmatter.nextTitle;

  return (
    <article>
      {/* ── Breadcrumb ── */}
      <Container className="pt-8 pb-0">
        <nav aria-label="مسار التنقل">
          <ol className="flex items-center gap-1.5 text-[0.8125rem] text-foreground-muted list-none">
            <li>
              <Link href="/ar/work/ulfa" className="hover:text-foreground transition-colors duration-150">
                ألفة
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-foreground">{titleAr}</li>
          </ol>
        </nav>
      </Container>

      {/* ── Header ── */}
      <Container className="pt-8 pb-12">
        <div className="max-w-[760px]">
          <h1 className="text-[2.5rem] font-medium leading-[1.1] tracking-[-0.02em] text-foreground md:text-[3.5rem]">
            {titleAr}
          </h1>
          {arIntro && (
            <p className="mt-6 text-[1.0625rem] leading-[1.8] text-foreground-muted">
              {arIntro}
            </p>
          )}
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
              href="/ar/work/ulfa"
              className="inline-flex items-center gap-1.5 text-[0.875rem] text-foreground-muted hover:text-foreground transition-colors duration-150"
            >
              <ArrowIcon size={14} className="[transform:scaleX(-1)]" />
              رجوع لألفة
            </Link>
            {frontmatter.next && nextTitleAr && (
              <Link
                href={`/ar/work/ulfa/${frontmatter.next}`}
                className="inline-flex items-center gap-1.5 text-[0.875rem] text-foreground-muted hover:text-foreground transition-colors duration-150"
              >
                {nextTitleAr}
                <ArrowIcon size={14} />
              </Link>
            )}
          </div>
        </Container>
      </div>

      {/* ── Next project (last study only) ── */}
      {!frontmatter.next && (
        <Container className="mb-16 md:mb-24">
          <NextProjectCard currentSlug="ulfa" locale="ar" />
        </Container>
      )}
    </article>
  );
}
