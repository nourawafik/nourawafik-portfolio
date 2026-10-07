import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="flex-1 flex items-center justify-center py-24">
      <Container>
        <div className="max-w-[480px] flex flex-col gap-8">
          <p className="font-mono text-[0.8125rem] text-foreground-muted">404</p>
          <h1 className="text-[2.5rem] font-medium leading-[1.1] tracking-[-0.02em] text-foreground">
            Page not found
          </h1>
          <p className="text-[1rem] leading-[1.65] text-foreground-muted">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/" variant="ghost">Back to homepage</Button>
            <Button href="/#work" variant="ghost">View work</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
