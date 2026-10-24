# Home page (`/` and `/ar`)

Approved design: `boards/07-home-ar.png` and `boards/08-home-en.png` (desktop, 1440px). The two pages are structurally identical; AR is RTL. All colours, type and radii come from `tokens/` and `DESIGN.md`; values below are named by token.

Copy in this file is final unless it is in `[BRACKETS]`. Do not reword it. Arabic is Egyptian colloquial on purpose, no tashkeel.

## Section order

0. Offer bar (only while an offer is live)
1. Header
2. Hero
3. Services marquee
4. Selected work
5. Services
6. About
7. Contact
8. Footer
9. Ask Noura launcher (fixed, every page)

Content width 1280px max, 32px side padding on desktop, 16px on mobile. Vertical rhythm between sections: 96px desktop, 64px mobile.

---

## 0. Offer bar (time-limited)

Full-width bar above the header, `coral` background, `fg` text (never white on coral).

| | EN | AR |
|---|---|---|
| Label chip (dark pill, white text) | Limited-time offer | عرض لفترة محدودة |
| Text | `[OFFER]` on the `[PACKAGE]` package, until `[DATE]` | `[العرض]` على باقة `[اسم الباقة]`، لحد `[التاريخ]` |
| Link (bold, underlined, goes to `#services`) | Learn more | اعرف أكتر |
| Close button (icon only, 44px) | aria-label "Close announcement" | aria-label "اقفل الإعلان" |

The same offer also marks its package card in Services (see section 5).

**Behaviour:**
- Offers are data, not hard-coded markup. Suggested shape: `src/content/offers.ts` exporting an array of `{ id, packageId, startsAt, endsAt, text: { en, ar }, offerPrice, originalPrice }`. Leave the array empty until Noura adds a real offer.
- Show the bar and the card treatment only when `startsAt <= now < endsAt`. Check the date at request time or revalidate at least hourly, so an expired offer never stays live from a cached build.
- Closing the bar hides it for that visitor and that offer `id` (localStorage, wrapped in try/catch). A new offer `id` shows again.
- Dates are shown in the page's language (`Intl.DateTimeFormat`, `ar-EG` for `/ar`).

## 1. Header

- Start side: horizontal lockup, `logo/lockup-en.svg` on `/`, `logo/lockup-ar.svg` on `/ar`, about 170px wide. Links to home, with an aria-label "Noura Wafik, home" / "نورا وفيق، الصفحة الرئيسية".
- Centre: nav links (`fg`, 16px, 500): Work / أعمالي, Services / الخدمات, About / عني, Contact / تواصل. These are anchors to the sections.
- End side, in order: language switch pill ("عربي" on `/`, "EN" on `/ar`, with `lang` set on the link), dark-mode toggle (round 44px, moon icon, aria-label "Dark mode" / "الوضع الغامق"), highlight button "Get a quote" / "اطلب عرض سعر".
- Mobile (under 768px): lockup + highlight button + a menu button; nav, language and theme move into the menu. Your call on the menu pattern, using existing tokens.

## 2. Hero

Two columns on desktop (text on the start side, art on the end side), stacked on mobile with the text first.

**Text column**
- Tags row (tag component): Brand · Websites · Digital products · Content / براند · مواقع · منتجات رقمية · محتوى
- H1 (Display step; desktop 72px EN / 64px AR, mobile 40 / 36; 800):
  - EN: **Bring your idea to life.**
  - AR: **خلي فكرتك تشوف النور.**
  - Line break after "idea" / "فكرتك" on desktop. The full stop is a `highlight` yellow dot (decorative, the logo's dot).
- Subline (Body L, 20px, `muted`, max 560px):
  - EN: Brands, websites and digital products in Arabic and English, for startups launching and companies scaling across Egypt and the Gulf.
  - AR: هويات ومواقع ومنتجات رقمية بالعربي والإنجليزي، لشركات ناشئة بتبدأ وشركات بتكبر في مصر والخليج.
- Buttons: highlight "Get a quote" / "اطلب عرض سعر" (mailto, see Contact), secondary "See my work" / "شوف أعمالي" (to `#work`).

**Art card**
- 520px tall, radius 40, `accent` background with the noon-arcs pattern (`patterns/noon-arcs.svg`, arcs in `accent-hover`).
- Centre: Noon waking up from the logo. Start from `mascot/logo-wakes-up-animated.svg`: the mark sits still, the dot grows into Noon's head, the face appears, the arm waves twice, then it settles back. On this card the body is white, the head yellow, with glowing yellow rays around the head (the "idea" moment, `mascot/noon-idea.svg`). Loop about every 6s.
- Three floating stickers (3px `fg` border, slight rotation, gentle float animation):
  - "Hi!" / "أهلا!" (white, top start corner)
  - "Open for new projects" / "متاحة لمشاريع جديدة" with a small `success` dot (yellow, bottom end corner)
  - "English + عربي" / "عربي + English" (coral, start side)
- The Noon SVG gets `role="img"` and aria-label "Noon, the brand mascot, waking up from the logo with a glowing head" / "نون، شخصية البراند، بتصحى من اللوجو وراسها بتنور". Stickers are decorative text and can stay as text.
- `prefers-reduced-motion`: no loop. Show the final state (Noon with glowing head) and stop the sticker float.

## 3. Services marquee

72px dark (`fg` light-mode value `#0E2A2D`) band, white 28px/800 text, yellow dots between items, scrolling slowly (about 30s per loop) in the reading direction. Items: Brand identity · Bilingual websites · Product design · Social content / هوية بصرية · مواقع بلغتين · تصميم منتجات · محتوى سوشيال. `aria-hidden="true"` (the same content is in Services). Static under reduced motion.

## 4. Selected work (`#work`)

- Eyebrow (15px, `on-accent-soft`): Selected work / أعمال مختارة
- H2: **Real work for real lives** / **أعمال حقيقية، لحياة حقيقية**
- End-side link: "All work" / "كل الأعمال" with a direction-aware arrow.
- Three project cards (card component), in this order: Ulfa (AR name: ألفة), KemeClinic, Duet. Image area 240px tall on top (use each case study's existing cover image), then tags, title, one-line summary, "Read the case study" / "اقرأ دراسة الحالة" + arrow.
- Summaries used in the design (check each against its MDX case study and keep the case study's facts if they differ; do not add numbers that are not in the case study):
  - Ulfa: A bilingual mobile app that brings people together with licensed mental health facilitators, in small circles and structured sessions. / تطبيق موبايل بالعربي والإنجليزي، بيجمع الناس مع ميسرين متخصصين في الصحة النفسية، في دوائر صغيرة وجلسات منظمة.
  - KemeClinic: A telehealth platform for US therapy clinics, with four portals for four kinds of users. / منصة علاج نفسي عن بعد لعيادات أمريكية، بأربع بوابات لأربع أنواع مستخدمين.
  - Duet: A hiring platform with two AI assistants, one for companies and one for candidates, where every AI decision is explained. / منصة توظيف بمساعدين أذكياء، واحد للشركات وواحد للمتقدمين، وقرارات الذكاء الاصطناعي فيها واضحة ومفهومة.
- Grid: 3 columns desktop, 1 on mobile.

## 5. Services (`#services`)

- Eyebrow: Services / الخدمات
- H2: **From a first logo to a full product** / **من أول هوية لحد منتج كامل**
- Six cards, 3 columns desktop (2 tablet, 1 mobile). Prices stay `[PRICE]` until Noura sends them.

| Card | EN | AR | Price |
|---|---|---|---|
| 1 (featured: `fg` dark bg, white title, `muted` dark-mode text, yellow price, yellow "Most popular" / "الأكتر طلبا" chip) | **Launch package**: Brand identity, a bilingual website and launch posts. Everything you need to go live. | **باقة الإطلاق**: هوية بصرية، وموقع بلغتين، وبوستات للإطلاق. كل اللي محتاجه عشان تطلع للناس. | `[PRICE]` |
| 2 | **Brand identity**: Logo, colours, Arabic and English type, and a usage guide. | **هوية بصرية**: لوجو، وألوان، وخطوط عربي وإنجليزي، ودليل استخدام. | `[PRICE]` |
| 3 | **Bilingual website**: Design and build of an Arabic and English website that is fast and easy to update. | **موقع بلغتين**: تصميم وتطوير موقع بالعربي والإنجليزي، سريع وسهل تعدليه. | `[PRICE]` |
| 4 | **Product design**: UX and UI for an app or SaaS, or an RTL review of an existing product. | **تصميم منتجات**: تجربة وواجهات لتطبيق أو منصة SaaS، أو مراجعة RTL لمنتج موجود. | `[PRICE]` |
| 5 | **Content subscription**: Social media design and copy, every month. | **اشتراك محتوى**: تصميم وكتابة محتوى السوشيال كل شهر. | `[PRICE] / month` · `[PRICE] / شهريا` |
| 6 | **Design support**: A set number of design requests each month for your team. | **دعم تصميم**: عدد ثابت من طلبات التصميم كل شهر لفريقك. | `[PRICE] / month` · `[PRICE] / شهريا` |

**Card with a live offer** (the board shows it on Brand identity as an example only): 3px `coral` border, coral chip above the title "Offer until `[DATE]`" / "عرض لحد `[التاريخ]`" (dark text), price row shows the offer price in `accent` and the original price struck through (`<del>`, `subtle`, 15px). When no offer is live, the card is a normal card.

## 6. About (`#about`)

White (`surface`) full-width band.
- Start side: photo slot, square, radius 40, `[Photo of Noura]` placeholder on `accent-soft` until Noura sends a photo. A 96px teal circle with the white mark + yellow dot overlaps its bottom end corner (6px white ring).
- Eyebrow: About / عني
- H2: **Hi, I'm Noura.** / **أهلا، أنا نورا.** (yellow full stop as in the hero)
- Body L:
  - EN: A brand and product designer based in Cairo. I work end to end, from research and brand identity to developer-ready screens. I also know code and marketing, so the design can be built and reaches the right audience.
  - AR: مصممة براند ومنتجات رقمية من القاهرة. بشتغل على الشغل من أوله لآخره: من البحث وهوية البراند لحد الواجهات الجاهزة للتطوير، وكمان بفهم في الكود والتسويق، فالتصميم بيطلع قابل للتنفيذ وموجه للجمهور الصحيح.
- Three small cards (`bg` paper, radius 20):
  - Truly bilingual / بلغتين بجد: Arabic designed from the start, not translated from English. / تصميم عربي من الأساس، مش ترجمة لتصميم إنجليزي.
  - Idea to launch / من الفكرة للتنفيذ: Brand, UI, build and marketing in one place. / براند وواجهات وتطوير وتسويق في مكان واحد.
  - Design systems / أنظمة تصميم: Every project ships with a system that grows with you. / كل مشروع بيطلع بنظام يكبر معاك.

## 7. Contact (`#contact`)

One yellow (`highlight`) block, radius 40, dark text.
- H2 (800): **Got an idea? Let's talk.** / **عندك فكرة؟ يلا نتكلم.**
- Body L: Send me a few lines about your project and I'll reply myself. / ابعتلي سطرين عن مشروعك، وهرد عليك بنفسي.
- Dark button (`fg` bg, white text) "Get a quote" / "اطلب عرض سعر" → `mailto:hello@nourawafik.com?subject=Quote%20request` (AR subject: `طلب عرض سعر`, URL-encoded).
- Plain email link `hello@nourawafik.com`, underlined (on `/ar` give it `dir="ltr"`).
- End side: Noon waving, dark body, white head (`mascot/noon-on-yellow.svg` style), arm waving. Static under reduced motion.
- No form, no email service, no API key.

## 8. Footer

Dark band (`#0E2A2D`), white lockup (`logo/lockup-en-on-dark.svg` / `lockup-ar-on-dark.svg`), links (white, underlined): LinkedIn, Behance, Instagram, CV / السيرة الذاتية (CV links to the existing `public/resume.pdf`; do not touch the file). Use the profile URLs the current site already has; do not guess new ones. Copyright: © 2026 Noura Wafik / © 2026 نورا وفيق (`muted` dark-mode value). In dark mode the footer stays as it is.

## 9. Ask Noura launcher

Fixed to the bottom end corner of every page: bottom-right on `/`, bottom-left on `/ar`, 24px from the edges.

- A 72px round `accent` button, 4px white ring + 2px accent outline, with Noon inside, plus a white pill next to it on the inner side that always reads "Ask Noura" / "اسأل نورا" (2px `fg` border, 16px/700). The pill keeps it clear that the assistant is available even while Noon is asleep.
- **Idle:** Noon asleep, eyes closed, two "z" letters drifting up (`mascot/ask-noura-launcher-sleep.svg`).
- **Hover or keyboard focus:** Noon wakes up, eyes open, arm waving (`mascot/ask-noura-launcher-awake.svg`). Focus ring: 3px `focus` outline, 3px offset.
- **Touch:** no hover, so the first tap opens the panel straight away; Noon is awake inside the panel.
- Button aria-label: "Open Ask Noura" / "افتح اسأل نورا". The pill is `aria-hidden` (the label already says it).
- Inside the panel: Noon waving in the welcome message, "Noon is thinking" / "نون بتفكر" (`mascot/noon-think.svg`) while a reply loads. Full panel spec: `HANDOFF.md` section 7.
- Reduced motion: no z drift, no wave.
- Build the UI only. The AI backend waits for Noura's provider choice and key.

## Mascot set

`mascot/` now has the full final set (body = the logo, head = the dot, arm = the N's last stroke): wave, wink, draw, explain, think, idea, celebrate, sleep, search, wow, point, work, confused, love, read, announce, plus the two launcher states. Reference: `boards/09-noon-poses.png`. On the site, use them for the 404 (think or confused), empty and loading states (think), and Ask Noura (wave, think). Never put Noon in the profile photo slot or in the CV.

## Accessibility checklist for this page

- One H1 (the hero headline). Sections use H2, cards H3.
- Every section has `aria-labelledby` pointing to its heading.
- All touch targets at least 44px.
- Arrows and the launcher position mirror on `/ar`.
- Every animation stops under `prefers-reduced-motion`.
- Links in body text are underlined.
