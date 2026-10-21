'use client';

import { useState } from 'react';
import type { Offer } from '@/content/offers';

interface OfferBarProps {
  offer: Offer;
  locale?: 'en' | 'ar';
}

export function OfferBar({ offer, locale = 'en' }: OfferBarProps) {
  const ar = locale === 'ar';
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    try {
      return !localStorage.getItem(`offer-dismissed-${offer.id}`);
    } catch {
      return true;
    }
  });

  if (!visible) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(`offer-dismissed-${offer.id}`, '1');
    } catch {
      // ignore
    }
    setVisible(false);
  };

  const endsAt = new Intl.DateTimeFormat(ar ? 'ar-EG' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(offer.endsAt));

  const text = ar ? offer.text.ar : offer.text.en;

  return (
    <div
      role="region"
      aria-label={ar ? 'إعلان عرض' : 'Announcement'}
      className="relative z-40 flex items-center justify-center gap-3 px-4 py-2 bg-coral text-foreground text-small"
    >
      <span className="shrink-0 rounded-pill bg-foreground text-background text-[0.75rem] font-medium px-2 py-0.5">
        {ar ? 'عرض لفترة محدودة' : 'Limited-time offer'}
      </span>
      <p className="text-center">
        {text}{' '}
        {ar ? `لحد ${endsAt}` : `until ${endsAt}`}
        {'. '}
        <a href="#services" className="font-bold underline underline-offset-2">
          {ar ? 'اعرف أكتر' : 'Learn more'}
        </a>
      </p>
      <button
        onClick={dismiss}
        aria-label={ar ? 'اقفل الإعلان' : 'Close announcement'}
        className="absolute end-4 flex items-center justify-center w-11 h-11 text-foreground hover:opacity-70 transition-opacity"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
