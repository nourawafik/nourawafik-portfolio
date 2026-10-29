'use client';
import { useState, useCallback, useRef } from 'react';

const CopyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="9" y="9" width="11" height="11" rx="2"/>
    <path d="M5 15V5a2 2 0 0 1 2-2h10"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20,6 9,17 4,12"/>
  </svg>
);

interface CopyEmailButtonProps {
  email: string;
  locale?: 'en' | 'ar';
  className?: string;
  onCopied?: () => void;
}

export function CopyEmailButton({ email, locale = 'en', className = '', onCopied }: CopyEmailButtonProps) {
  const ar = locale === 'ar';
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(email);
      if (timer.current) clearTimeout(timer.current);
      setCopied(true);
      onCopied?.();
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch { /* ignore */ }
  }, [email, onCopied]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={ar ? 'انسخ الإيميل' : 'Copy email'}
      className={`inline-flex items-center gap-1.5 text-[0.8125rem] font-medium transition-colors border rounded-pill px-3 py-1 ${className}`}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
      {copied ? (ar ? 'تم النسخ' : 'Copied') : (ar ? 'انسخ الإيميل' : 'Copy email')}
    </button>
  );
}
