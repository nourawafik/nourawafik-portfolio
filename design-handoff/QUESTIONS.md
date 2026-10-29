# Design questions

Write one numbered item per question: what you need, the page or component, and a screenshot path if it helps. Noura takes these to the design chat; answers are written back here.

## Open

<!-- 1. ... -->

## Answered

1. **Audience switch + mirror graphic:** remove both. The hero has a new design (logo wakes up into Noon). Full spec in `pages/home.md`.
2. **Hero headline and subline:** final, no more placeholders.
   - EN: "Bring your idea to life." / "Brands, websites and digital products in Arabic and English, for startups launching and companies scaling across Egypt and the Gulf."
   - AR: "خلي فكرتك تشوف النور." / "هويات ومواقع ومنتجات رقمية بالعربي والإنجليزي، لشركات ناشئة بتبدأ وشركات بتكبر في مصر والخليج."
   - Do not add "Senior" or any title to the hero.
3. **Contact:** no form for now. A "Get a quote" / "اطلب عرض سعر" button that opens `mailto:hello@nourawafik.com` with a prefilled subject. No email service or API key needed.
4. **Home page layout (Step 6):** approved. Build it from `pages/home.md` with `boards/07-home-ar.png` and `boards/08-home-en.png`. Step 6 and then Step 8 (Ask Noura UI) can start.
5. **Case study rename:** Da'eratna / Supporting Circle / دايرتنا has been replaced by Ulfa / ألفة. Spec in `pages/work-ulfa.md`.
6. **Time-limited offers:** an offer bar above the header plus an offer treatment on the package card, driven by data with start and end dates. See `pages/home.md` sections 0 and 5. Keep the offers list empty until Noura adds one.
7. **Ask Noura launcher:** Noon sleeps while idle and wakes on hover/focus; an "Ask Noura" / "اسأل نورا" pill always sits next to it. See `pages/home.md` section 9 and `mascot/ask-noura-launcher-*.svg`.
8. **Mascot set:** `mascot/` now has 16 poses in the final style (plus the two launcher states), replacing the earlier files with the same names. Reference: `boards/09-noon-poses.png`.

## Still waiting on Noura (keep placeholders)

- Package prices: `[PRICE]`
- Profile photo: `[Photo of Noura]`
- Ask Noura AI provider and key (Noura adds the key in Vercel herself)

## Decisions made (covered by existing rules)
