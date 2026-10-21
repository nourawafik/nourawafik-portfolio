import Image from 'next/image';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="flex-1 flex items-center justify-center py-24">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center max-w-[480px] mx-auto">
          <Image
            src="/mascot/noon-think.svg"
            alt=""
            width={160}
            height={160}
            aria-hidden
          />

          <div className="flex flex-col gap-4">
            <p className="text-small text-foreground-subtle tabular-nums">404</p>
            <h1 className="text-h1 font-bold leading-[1.15] tracking-[-0.02em] text-foreground">
              Page not found
            </h1>
            <p className="text-body text-foreground-muted leading-[1.65]">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/" variant="primary">Back to homepage</Button>
            <Button href="/#work" variant="secondary">View work</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
