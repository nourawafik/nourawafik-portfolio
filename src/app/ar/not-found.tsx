import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';

export default function NotFoundAr() {
  return (
    <section className="flex-1 flex items-center justify-center py-24">
      <Container>
        <div className="max-w-[480px] flex flex-col gap-8">
          <p className="font-mono text-[0.8125rem] text-foreground-muted">404</p>
          <h1 className="text-[2.5rem] font-medium leading-[1.1] tracking-[-0.02em] text-foreground">
            الصفحة غير موجودة
          </h1>
          <p className="text-[1rem] leading-[1.65] text-foreground-muted">
            الصفحة اللي بتدوّر عليها مش موجودة أو تم نقلها.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/ar" variant="ghost">العودة للرئيسية</Button>
            <Button href="/ar#work" variant="ghost">تصفح أعمالي</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
