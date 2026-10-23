import type { MDXComponents } from 'mdx/types';
import { Section } from './section';
import { Decision } from './decision';
import { Quote } from './quote';
import { ImageGrid } from './image-grid';
import { ImageWithCaption } from './image-with-caption';
import { Caption } from './caption';
import { Video } from './video';
import { NdaNote } from './nda-note';
import { PhoneImage } from './phone-image';
import { PhoneGrid } from './phone-grid';

// Prose element overrides constrain to 680px reading width.
// Custom block components (ImageGrid, Section) manage their own width.
export const mdxComponents: MDXComponents = {
  // ── Prose overrides ───────────────────────────────────────────────
  p: ({ children }) => (
    <p className="max-w-[680px] mx-auto text-[1rem] leading-[1.65] text-foreground-muted my-5">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="max-w-[680px] mx-auto my-5 list-disc pl-5 space-y-1.5 text-[1rem] leading-[1.65] text-foreground-muted">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="max-w-[680px] mx-auto my-5 list-decimal pl-5 space-y-1.5 text-[1rem] leading-[1.65] text-foreground-muted">
      {children}
    </ol>
  ),
  strong: ({ children }) => (
    <strong className="font-medium text-foreground">{children}</strong>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-foreground underline underline-offset-4 decoration-border-strong hover:decoration-foreground transition-[text-decoration-color] duration-150"
    >
      {children}
    </a>
  ),
  hr: () => <hr className="max-w-[680px] mx-auto border-border my-10" />,
  code: ({ children }) => (
    <code className="font-mono text-[0.8125rem] bg-surface border border-border px-1.5 py-0.5">
      {children}
    </code>
  ),

  // ── Custom components ─────────────────────────────────────────────
  Section,
  Decision,
  Quote,
  ImageGrid,
  ImageWithCaption,
  Caption,
  Video,
  NdaNote,
  PhoneImage,
  PhoneGrid,
};
