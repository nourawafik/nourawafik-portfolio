# Launch 2: cropped images, years of experience, docs and backup

Do this after `fix-launch.md`, or together with it. Don't deploy to production.

## 1. Images still cropped

I checked every `<img>` and `<video>` on the case pages: rendered box ratio against the file ratio, wherever `object-fit: cover` is used.

**`/ar/work/duet` is cropped.** That page was hand-built with fixed `aspect-[3/2]` boxes, `fill` and `object-cover`, so it skipped the fix from `fix-review-1.md` C1. `/work/duet` (EN) is fine.

| Image | File ratio | Box ratio | Result |
|---|---|---|---|
| `tempo-review`, `tempo-disagree` | 1.60 | 1.50 | top and bottom cut |
| `two-voices` | 2.05 | 1.50 | about a quarter of the width cut off |

**Fix:**
- On the AR Duet page, use the same `ImageWithCaption` component as EN: natural ratio, `width:100%; height:auto`, no `object-cover`.
- Do the same for anything else on `/ar/work/*` that uses `fill` + a fixed aspect for screenshots.

**The Ulfa hub study cards** (`/work/ulfa` and `/ar/work/ulfa`, "Four studies") show 4:3 thumbs in a box of about 2.24:1, so the phones lose their bottom half.
- Make the card image **4:3**, the same as the library cards. Keep `object-cover` there; at the right ratio nothing is lost.

**Check:** rerun the ratio check on every route. No image with `object-fit: cover` may differ from its box by more than 2%, except the decorative hero backgrounds.

## 2. Years of experience

Noura has been designing since 2020. Show it as **6+ years**, computed from `const DESIGNING_SINCE = 2020`, so it updates by itself each year. Put the constant in `src/content/profile.ts`.

**About body, start of the first sentence:**
- EN: "A brand and product designer based in Cairo, with {n}+ years of experience. I work end to end, …" (the rest unchanged).
- AR: "مصممة هويات بصرية ومنتجات رقمية من القاهرة، بخبرة أكثر من {n} سنوات. أعمل على المشروع من بدايته لنهايته: …" (the rest as in `fix-launch.md` A3).
  - Use "سنوات" for 3–10 and "سنة" for 11 and up.

Don't add the number anywhere else for now.

## 3. Project docs and backup

1. Add `docs/HANDBOOK.md` (it's in `design-handoff/docs/HANDBOOK.md`; move it to `docs/`). It holds every rule, approved fact, setup step and open item.
   - Link to it from the top of `README.md`.
   - Replace the default create-next-app README with a short one: what the site is, `npm run dev`, `npm run build:cf`, and links to `docs/HANDBOOK.md`, `DESIGN.md` and `PRODUCT.md`.
2. Add a line to `AGENTS.md`: "Before any change, read `docs/HANDBOOK.md`. Update it in the same commit when a rule, fact or setup step changes."
3. Commit `design-handoff/` (pages, boards, mascot, sources), so nothing exists only on one machine.
   - Don't commit `.review-snapshot.tgz`.
   - Don't commit any personal photo except the approved About photo already in `public/`.
4. **Backup:** the `rebrand` branch has never been pushed; it has no upstream. With Noura's OK, push it to the private GitHub repo: `git push -u origin rebrand`.
   - Don't merge to `main`.
   - Don't change the repo's visibility.
