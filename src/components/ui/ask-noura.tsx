'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
}

const COPY = {
  en: {
    launcherLabel: 'Open Ask Noura',
    pill: 'Ask Noura',
    panelTitle: 'Ask Noura',
    panelSubtitle: 'AI assistant · May make mistakes',
    close: 'Close',
    inputLabel: 'Your message',
    inputPlaceholder: 'Ask me anything…',
    send: 'Send',
    typing: 'Noon is thinking',
    welcome: 'Hi! I\'m Noon — Noura\'s AI assistant. Ask me about her services, work or anything else.',
    chips: ['See my work', 'Get a quote', 'What do you do?'],
  },
  ar: {
    launcherLabel: 'افتح اسأل نورا',
    pill: 'اسأل نورا',
    panelTitle: 'اسأل نورا',
    panelSubtitle: 'مساعد ذكاء اصطناعي · قد يخطئ',
    close: 'إغلاق',
    inputLabel: 'رسالتك',
    inputPlaceholder: 'اسألني أي حاجة…',
    send: 'إرسال',
    typing: 'نون بتفكر',
    welcome: 'أهلا! أنا نون — المساعد الذكاء الاصطناعي لنورا. اسأل عن خدماتها أو أعمالها أو أي حاجة تانية.',
    chips: ['شوف أعمالها', 'اطلب عرض سعر', 'بتعمل إيه؟'],
  },
} as const;

interface AskNouraProps {
  locale?: 'en' | 'ar';
}

export function AskNoura({ locale = 'en' }: AskNouraProps) {
  const t = COPY[locale];
  const ar = locale === 'ar';

  const [open, setOpen] = useState(false);
  const [awake, setAwake] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 'welcome', role: 'assistant', text: t.welcome },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const msgCounter = useRef(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open, messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const id = `msg-${++msgCounter.current}`;
    setMessages((prev) => [...prev, { id, role: 'user', text }]);
    setInput('');
    setTyping(true);
    // Backend not wired yet — show placeholder reply
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `reply-${++msgCounter.current}`,
          role: 'assistant',
          text: ar
            ? 'شكراً على سؤالك! الـ AI backend لسه بيتجهز. تواصل مع نورا على hello@nourawafik.com.'
            : "Thanks for your message! The AI backend is not yet connected. Reach Noura directly at hello@nourawafik.com.",
        },
      ]);
    }, 1500);
  };

  return (
    <>
      {/* Launcher */}
      <div
        className={`fixed bottom-6 z-50 flex items-center gap-3 ${ar ? 'flex-row-reverse left-6' : 'flex-row right-6'}`}
      >
        {/* Pill (always visible) */}
        <span
          className="rounded-pill px-3 py-1 bg-background border-2 border-foreground text-[0.875rem] font-bold text-foreground select-none"
          aria-hidden
        >
          {t.pill}
        </span>

        {/* Launcher button */}
        <button
          onClick={() => setOpen(true)}
          onMouseEnter={() => setAwake(true)}
          onMouseLeave={() => setAwake(false)}
          onFocus={() => setAwake(true)}
          onBlur={() => setAwake(false)}
          aria-label={t.launcherLabel}
          className="relative w-[72px] h-[72px] rounded-full bg-accent flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
          style={{
            boxShadow: '0 0 0 4px white, 0 0 0 6px var(--accent)',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={awake ? '/mascot/ask-noura-launcher-awake.svg' : '/mascot/ask-noura-launcher-sleep.svg'}
            alt=""
            width={48}
            height={48}
            aria-hidden
            className="motion-reduce:hidden"
          />
          {/* Reduced motion: always show awake */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/mascot/ask-noura-launcher-awake.svg"
            alt=""
            width={48}
            height={48}
            aria-hidden
            className="hidden motion-reduce:block"
          />
        </button>
      </div>

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label={t.panelTitle}
          aria-modal="true"
          className={`fixed bottom-6 z-50 flex flex-col rounded-card shadow-2xl overflow-hidden bg-surface border border-border ${ar ? 'left-6' : 'right-6'}`}
          style={{ width: '360px', maxWidth: 'calc(100vw - 48px)', height: '540px', maxHeight: 'calc(100svh - 120px)' }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 shrink-0" style={{ backgroundColor: 'var(--accent)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/mascot/noon-wave.svg"
              alt=""
              width={40}
              height={40}
              aria-hidden
              className="rounded-full bg-white/20 p-1"
            />
            <div className="flex-1 min-w-0">
              <p className="text-body font-bold text-white leading-tight">{t.panelTitle}</p>
              <p className="text-small text-white/70 leading-tight truncate">{t.panelSubtitle}</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label={t.close}
              className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/20 transition-colors text-white"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M11 3L3 11M3 3l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 min-h-0">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`rounded-card px-3 py-2 text-small max-w-[80%] ${
                    msg.role === 'user'
                      ? 'rounded-ee-none text-white'
                      : 'rounded-es-none text-foreground bg-background'
                  }`}
                  style={msg.role === 'user' ? { backgroundColor: 'var(--accent)' } : undefined}
                  dir={ar ? 'rtl' : 'ltr'}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className="flex items-center gap-2" role="status" aria-live="polite">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/mascot/noon-think.svg" alt="" width={24} height={24} aria-hidden />
                <span className="text-small text-foreground-muted">{t.typing}</span>
                <span className="flex gap-0.5" aria-hidden>
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-foreground-muted motion-safe:animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick-reply chips (only when last message is from assistant) */}
          {messages[messages.length - 1]?.role === 'assistant' && !typing && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {t.chips.map((chip) => (
                <button
                  key={chip}
                  onClick={() => sendMessage(chip)}
                  className="rounded-pill px-3 py-1 text-small border border-border text-foreground-muted hover:border-accent hover:text-accent transition-colors duration-150"
                >
                  {chip}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
            className="flex gap-2 px-4 py-3 border-t border-border shrink-0"
          >
            <label htmlFor="ask-noura-input" className="sr-only">{t.inputLabel}</label>
            <input
              id="ask-noura-input"
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.inputPlaceholder}
              dir={ar ? 'rtl' : 'ltr'}
              className="flex-1 min-w-0 rounded-control border-2 border-border bg-background px-3 py-2 text-small text-foreground placeholder:text-foreground-subtle focus-visible:outline-none focus-visible:border-accent transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label={t.send}
              className="w-10 h-10 rounded-full bg-accent text-on-accent flex items-center justify-center disabled:opacity-40 hover:bg-accent-hover transition-colors shrink-0"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden
                className={ar ? 'rotate-180' : ''}
              >
                <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
