# Fix: Arabic services marquee runs in the English direction

**What's wrong:**
- On `/ar`, the dark marquee strip (هوية بصرية ● مواقع بلغتين ● تصميم منتجات ● محتوى سوشيال) scrolls right to left, the same as English.
- The design (`boards/10-home-ar-dark.png` and the Home-AR board) scrolls it **left to right**. In Arabic the next word should come in from the left, in the reading direction.

**The cause** is in `services-marquee.tsx`:
- The track is forced to `dir="ltr"`.
- It always uses `marquee` (`0 → -50%`).

**Fix:**

1. Add a second keyframe to `globals.css`, plus a token next to `--animate-marquee`:

```css
@keyframes marquee-rtl {
  from { transform: translateX(0); }
  to   { transform: translateX(50%); }
}
--animate-marquee-rtl: marquee-rtl 35s linear infinite;
```

2. In `services-marquee.tsx`, when `locale === 'ar'`:
   - The track gets `dir="rtl"` and `motion-safe:animate-marquee-rtl`.
   - Keep `w-max`, the doubled items and the dots.
   - EN stays exactly as it is.

**Check:**
- On `/ar`, light and dark, desktop and mobile, the words move left to right.
- The loop is seamless, with no jump or gap at the reset (keep the RTL gap fix from `01c5b91`).
- With reduced motion it doesn't move.
