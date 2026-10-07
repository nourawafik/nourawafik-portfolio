import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

// Teach tailwind-merge the custom type-scale tokens from globals.css. Without
// this it reads e.g. `text-hero` as a text colour and drops it when it meets
// `text-foreground` in the same cn() call.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        { text: ['hero', 'display', 'h1', 'h2', 'h3', 'body-lg', 'body', 'small', 'mono'] },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
