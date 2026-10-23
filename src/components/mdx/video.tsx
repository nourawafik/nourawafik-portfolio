'use client';
import { useRef, useState, useEffect } from 'react';
import { Caption } from './caption';

interface VideoProps {
  src: string;
  poster?: string;
  srcDark?: string;
  posterDark?: string;
  caption?: string;
}

export function Video({ src, poster, srcDark, posterDark, caption }: VideoProps) {
  const lightRef = useRef<HTMLVideoElement>(null);
  const darkRef = useRef<HTMLVideoElement>(null);
  const [showPlay, setShowPlay] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');

    const update = (matches: boolean) => {
      if (matches) {
        lightRef.current?.pause();
        darkRef.current?.pause();
      }
      setShowPlay(matches);
    };

    const handler = (e: MediaQueryListEvent) => update(e.matches);
    mq.addEventListener('change', handler);
    // Async initial check keeps setState out of synchronous effect body
    queueMicrotask(() => update(mq.matches));

    return () => mq.removeEventListener('change', handler);
  }, []);

  const play = () => {
    lightRef.current?.play().catch(() => {});
    darkRef.current?.play().catch(() => {});
    setShowPlay(false);
  };

  return (
    <figure className="my-8" aria-label={caption ?? undefined}>
      <div className="relative rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.12)]">
        <video
          ref={lightRef}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={`w-full block${srcDark ? ' dark:hidden' : ''}`}
          aria-hidden
        />
        {srcDark && (
          <video
            ref={darkRef}
            src={srcDark}
            poster={posterDark}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="hidden dark:block w-full"
            aria-hidden
          />
        )}
        {showPlay && (
          <button
            onClick={play}
            aria-label="Play video"
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="w-14 h-14 rounded-full bg-background/90 flex items-center justify-center shadow-lg">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="ms-0.5"
                aria-hidden
              >
                <path d="M6.5 4.5l9 5.5-9 5.5V4.5z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      {caption && <Caption>{caption}</Caption>}
    </figure>
  );
}
