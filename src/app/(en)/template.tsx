'use client';
import { useEffect, useRef } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;

    const revealEls = el.querySelectorAll<HTMLElement>('.reveal');
    if (!revealEls.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={mainRef} className="page-enter contents">
      {children}
    </div>
  );
}
