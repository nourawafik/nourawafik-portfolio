import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section aria-label="Introduction" className="py-20 md:py-32">
      <Container>
        <div className="flex flex-col gap-8 max-w-[760px]">
          <div className="flex flex-col gap-3">
            <h1 className="text-[2.5rem] font-medium leading-[1.1] tracking-[-0.02em] text-foreground md:text-[3.5rem]">
              Product Designer
            </h1>
            <p className="text-[1.125rem] leading-[1.65] text-foreground-muted">
              SaaS, healthtech, AI tools
            </p>
          </div>

          <p className="text-[1rem] leading-[1.65] text-foreground max-w-[560px]">
            Multi-role SaaS, bilingual systems, AI tooling. I build the design foundation and ship the
            product — from token architecture to production-ready specs. Based in Cairo, open to remote
            roles.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button href="/#work" variant="primary">
              See selected work
            </Button>
            <Button href="/#contact" variant="ghost">
              Get in touch
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
