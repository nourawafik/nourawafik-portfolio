import Image from 'next/image';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';

export default function NotFoundAr() {
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
            <h1 className="text-h1 font-bold leading-[1.35] text-foreground">
              الصفحة غير موجودة
            </h1>
            <p className="text-body text-foreground-muted leading-[1.8]">
              الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/ar" variant="primary">العودة للرئيسية</Button>
            <Button href="/ar/work" variant="secondary">تصفح أعمالي</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
