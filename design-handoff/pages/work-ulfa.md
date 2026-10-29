# Case study: Ulfa (replaces Da'eratna / Supporting Circle)

The project gets a new name and a new design. Every screen was redrawn for the portfolio. Ulfa is one project page (the hub) plus four short case studies.

- Reference boards: `boards/19-work-ulfa-hub-ar.png` and `boards/20-work-ulfa-hub-en.png` (hub), then `21` participant app, `22` live session, `23` facilitator studio, `24` design system.
- Assets: `work/ulfa/` (65 files).

## 1. Remove the old project completely

The old name and old content must not appear anywhere on the site, in the metadata or in public files.

**Delete these:**
- `src/content/case-studies/dayratna.mdx`
- `public/work/dayratna/`
- `public/work/supporting-circle/`
- `public/work/dayratna-hero.png` and `public/work/dayratna-thumb.png`
- `scripts/og/dayratna.html` and `src/content/og/dayratna.png`

**Then update:**
- `src/content/case-studies.ts`
- `src/components/sections/selected-work.tsx`
- `scripts/og/render.sh`
- `PRODUCT.md` (the line that lists the three case studies)
- `.impeccable/design.json`
- In `design-handoff/`: `QUESTIONS.md` item 5 and `pages/home.md`. Replace every Da'eratna / دايرتنا / Supporting Circle with Ulfa / ألفة.

**Redirect:** add a permanent redirect from `/work/dayratna` to `/work/ulfa`, like `got-ai` to `duet`.

**Check:** when done, `grep -ri "dayratna\|daeratna\|supporting circle\|دايرتنا\|دائرتنا"` must return nothing outside `.git`.

**Don't reuse the old copy.** It has claims we no longer make (markets, team size, tech stack, status). Use only the copy in this file.

## 2. Names

| | EN | AR |
|---|---|---|
| Project | Ulfa | ألفة |
| Slug | `ulfa` | |
| Tagline (home card, meta description) | Bilingual mobile app for small-group mental health sessions | تطبيق بلغتين لجلسات الدعم النفسي في مجموعات صغيرة |

Card fields (`case-studies.ts`):
- role: "Product design and product management"
- platform: "Mobile app · Arabic and English"
- timeline: leave empty
- status: leave empty

Noura has not confirmed these two yet, so don't invent them.

## 3. Routes

| Route | Page |
|---|---|
| `/work/ulfa` | Hub (boards 19 and 20) |
| `/work/ulfa/participant-app` | Study 01 |
| `/work/ulfa/live-session` | Study 02 |
| `/work/ulfa/facilitator-studio` | Study 03 |
| `/work/ulfa/design-system` | Study 04 |

- The home "Selected work" card for Ulfa links to the hub.
- Add all five routes to the sitemap.
- Each study page ends with "Back to Ulfa" and a link to the next study. The last one links to the next project, Duet.
- Pick the cleanest way in the current MDX setup, for example `src/content/case-studies/ulfa/*.mdx` with a nested route.

## 4. Hub page (`/work/ulfa`)

Follow boards 19 and 20. Use the site tokens and components only, with no new colours, and keep the same dark mode rules as `pages/home-update-2.md`.

1. **Breadcrumb:** "Work / Ulfa" ("أعمالي / ألفة").
2. **H1:** "Ulfa" ("ألفة").
3. **Intro:**
   - EN: "A bilingual Arabic and English mobile app that brings people together with licensed mental health facilitators, in small circles and structured sessions."
   - AR: "تطبيق موبايل بالعربي والإنجليزي، بيجمع الناس مع ميسرين متخصصين في الصحة النفسية، في دوائر صغيرة وجلسات منظمة."
4. **Meta row:** three columns, each with a 2px top border in `ink`.

   | Label (EN / AR) | Value (EN / AR) |
   |---|---|
   | My role / دوري | Product design and product management / تصميم المنتج وإدارته |
   | Platform / المنصة | Mobile app · Arabic and English / تطبيق موبايل · عربي وإنجليزي |
   | Scope / النطاق | Participant and facilitator journeys / رحلة المشارك ورحلة الميسر |

5. **Hero image:** `ulfa-hero.png`, or `ulfa-hero-dark.png` in dark mode. 16:9, radius 32. Use it for the OG image too.
6. **Confidentiality note:** small, muted, with a lock icon.
   - EN: "The name and details are changed, and every screen here was redrawn for this case study."
   - AR: "الاسم والتفاصيل متغيرة، وكل الشاشات هنا اتعاد رسمها لدراسة الحالة دي."
7. **The challenge / التحدي:** H2 on the start side, text on the end side.
   - EN: "One product, two audiences: participants who need to feel safe from the first screen, and facilitators who need to run their schedule and earnings without friction. All of it in two languages, on a subject as sensitive as mental health."
   - AR: "منتج واحد ليه جمهورين: مشارك محتاج يحس بالأمان من أول شاشة، وميسر محتاج يدير مواعيده وفلوسه من غير ما يتعب. وكل ده بلغتين، وفي موضوع حساس زي الصحة النفسية."
8. **Three principle cards:** use the About trait-card style (numbered 1–3).

   | Title (EN / AR) | Text (EN / AR) |
   |---|---|
   | Calm and readable / هادي ومقروء | Quiet colors, with contrast above AA in light and dark. / ألوان هادية، وتباين فوق AA في الفاتح والغامق. |
   | Bilingual from day one / بلغتين من الأول | Every screen designed in Arabic and English, not translated later. / كل شاشة متصممة بالعربي والإنجليزي، مش مترجمة بعدين. |
   | Consent before you join / الموافقة قبل الدخول | Rules and privacy are read before the session, not inside it. / القواعد والخصوصية بتتقري قبل الجلسة، مش جواها. |

9. **Four studies / أربع دراسات:**
   - Subline: "Each study focuses on one part of the platform." / "كل دراسة بتركز على جزء من المنصة."
   - Layout: a 2×2 grid of project cards, with the same card, hover and motion as the home work cards. On mobile it becomes a horizontal rail with dots, like home.
   - Each card has a number ("01"…"04"), the image, the title, one line of text, and "Read the case study" / "اقرا الدراسة".

   | # | Image (4:3) | Title (EN / AR) | Line (EN / AR) |
   |---|---|---|---|
   | 01 | `ulfa-thumb.png` | Participant app / تطبيق المشارك | From exploring to joining to My sessions. / من الاستكشاف للانضمام لحد جلساتي. |
   | 02 | `ulfa-thumb-live.png` | Live session / الجلسة اللايف | From the waiting room to after the session. / من غرفة الانتظار لحد بعد الجلسة. |
   | 03 | `ulfa-thumb-studio.png` | Facilitator studio / استوديو الميسر | Calendar, workshop, wallet and payouts. / التقويم، والورشة، والمحفظة، والتحويل. |
   | 04 | `ulfa-thumb-ds.png` | Design system / نظام التصميم | 4 colors in light and dark. / 4 ألوان في الفاتح والغامق. |

   Thumbs 02–04 have no dark version. Use the same image in both modes.

10. **Next project card:**
    - Dark `ink` card: "Next project" / "المشروع اللي بعده", then "Duet" and its tagline, with a 56px yellow round arrow on the end side.
    - In dark mode, use the sunk `#0A2023` with a 1px `#2B4A4E` border.

The home card thumbnail for Ulfa is `ulfa-thumb.png` / `ulfa-thumb-dark.png`.

## 5. The four study pages

Same layout for all four:
- Breadcrumb "Work / Ulfa / {study}".
- H1, intro paragraph, then sections, each with an H3 caption and its images.
- Images are phone screenshots (390×844 at 2x): show them at their natural ratio with a 6px `#0E2A2D` device frame and radius 28, no cropping, same as Duet.
- Each row shows the EN screen first on `/` and the AR screen first on `/ar`.
- Use the `-dark` file as `srcDark` where one exists.
- On mobile, rows of screens become a horizontal rail.

### 01 Participant app (`/work/ulfa/participant-app`)

**H1:** "Participant app" / "تطبيق المشارك"

**Intro:**
- EN: "The participant journey, from finding a circle to joining a session. Same flow as the original product, with simpler cards, calmer colors and every screen in Arabic and English."
- AR: "رحلة المشارك، من إنك تلاقي دائرة لحد ما تدخل جلسة. نفس الفلو بتاع المنتج الأصلي، بكروت أبسط وألوان أهدى، وكل شاشة بالعربي والإنجليزي."

| Section (EN / AR) | Files (`{name}-en`, `-ar`, plus `-dark`) |
|---|---|
| Explore: a simpler card, the facilitator and their rating, and one clear action / استكشف: كارت أبسط، الميسر وتقييمه، وزرار واحد واضح | `explore` |
| Session details: the key facts in one box, the schedule in order, price and action fixed at the bottom / تفاصيل الجلسة: كل المعلومات المهمة في مربع واحد، والمواعيد بالترتيب، والسعر والزرار ثابتين تحت | `session` |
| Before you start: privacy, no recording, and leave anytime, all before you join / قبل ما تبدأ: الخصوصية، ومنع التسجيل، وإنك تقدر تخرج في أي وقت، قبل الدخول | `before-you-start` |
| Joined: a clear confirmation, what was paid, and add to calendar / تم الحجز: تأكيد واضح، والمدفوع، وإضافة للتقويم | `joined` |
| My sessions: session type and status on top, and "Join now" only for the live one / جلساتي: نوع الجلسة وحالتها فوق، و"ادخل دلوقتي" بس للجلسة الشغالة | `my-sessions` |

### 02 Live session (`/work/ulfa/live-session`)

**H1:** "Live session" / "الجلسة اللايف"

**Intro:**
- EN: "The waiting room and the session itself are dark by design: most sessions happen in the evening. You choose to join with mic and camera off, leaving is calm and never asks why, and after the session there is a simple check-in and a path to support."
- AR: "غرفة الانتظار والجلسة نفسها في الغامق عن قصد، لأن أغلب الجلسات بالليل. بتختار تدخل بمايك وكاميرا مقفولين، والخروج هادي ومحدش بيسألك ليه، وبعد الجلسة سؤال بسيط عن إحساسك وطريق للدعم."

| Section (EN / AR) | Files |
|---|---|
| Waiting room: a countdown, the session details, and how you join / غرفة الانتظار: عد تنازلي، وتفاصيل الجلسة، وإنت بتختار تدخل إزاي | `live-waiting-en`, `live-waiting-ar` (dark only) |
| In session: the facilitator on top and participants in a grid. Green ring for speaking, gold for a raised hand, labelled controls / الجلسة: الميسر فوق والمشاركين في شبكة. إطار أخضر للي بيتكلم، ودهبي للي رافع إيده، وكنترول بأسماء واضحة | `live-session-en`, `live-session-ar` (dark only) |
| Leaving: a calm confirmation, and you can come back while it runs / الخروج: تأكيد هادي، وتقدر ترجع طول ما الجلسة شغالة | `live-leave-en`, `live-leave-ar` (dark only) |
| After the session: how you feel now, a rating, a private note for the facilitator, and a support link / بعد الجلسة: إحساسك دلوقتي، والتقييم، وملاحظة للميسر بس، ولينك للدعم | `after-session` (with `-dark`) |

### 03 Facilitator studio (`/work/ulfa/facilitator-studio`)

**H1:** "Facilitator studio" / "استوديو الميسر"

**Intro:**
- EN: "Everything a facilitator needs, in four screens, built from the same components as the participant app. Session type colors match across the calendar, cards and charts. Warnings are calm instead of threatening, and fees show before you confirm."
- AR: "كل اللي الميسر محتاجه في أربع شاشات، بنفس مكونات تطبيق المشارك. ألوان أنواع الجلسات هي هي في التقويم والكروت والشارت. والتنبيهات هادية بدل التهديد، والرسوم بتبان قبل ما تأكد."

| Section (EN / AR) | Files |
|---|---|
| Calendar: dots for each session type, and the selected day's sessions with time and seats / التقويم: نقط لنوع كل جلسة، وجلسات اليوم المختار بالوقت وعدد المسجلين | `studio-calendar` |
| Manage a workshop: a short summary, weekly enrollment, and a calm note about being on time / إدارة الورشة: ملخص سريع، والتسجيل بالأسبوع، وتنبيه هادي عن الالتزام بالمواعيد | `studio-manage` |
| Wallet: what's ready, what's on the way, and a failed payout that says what to do / المحفظة: الجاهز للسحب، واللي في الطريق، والتحويل اللي فشل بيقولك تعمل إيه | `studio-wallet` |
| Request a payout: amount, destination, and the fee before you confirm with your PIN / طلب تحويل: المبلغ، وهيتحول فين، والرسوم قبل ما تأكد بالرقم السري | `studio-payout` |

### 04 Design system (`/work/ulfa/design-system`)

**H1:** "Design system" / "نظام التصميم"

**Intro:**
- EN: "People choose one of four colors, light or dark, and their language. Every screen takes its colors from the same tokens, so any choice applies across the whole app without redesigning a screen. That makes 8 contexts from one design."
- AR: "المستخدم بيختار لون من أربعة، وفاتح أو غامق، واللغة. كل الشاشات بتاخد ألوانها من نفس التوكنز، فأي اختيار بيمشي على التطبيق كله من غير ما نعيد تصميم شاشة. يعني 8 حالات من تصميم واحد."

| Section (EN / AR) | Files |
|---|---|
| The same screen in all 8 contexts / نفس الشاشة في الحالات الثمانية | Row 1: `ds-explore-{slate,forest,rose,ochre}-en`. Row 2: `ds-explore-{slate,forest,rose,ochre}-ar-dark`. 4 per row on desktop, a rail on mobile. No `srcDark` swap here: the light/dark pairs are the content. |
| Appearance: color, mode and language, with a live preview / المظهر: اللون والوضع واللغة، ومعاينة حية | `ds-appearance-en`, `ds-appearance-ar`, `ds-appearance-en-dark`, `ds-appearance-ar-dark` (fixed, no swap) |

Then a small table of colours, built as HTML (not an image) so it is readable and translatable. Values are in board 24.

| Theme | Light primary | White text on it | Dark primary | Dark text on it |
|---|---|---|---|---|
| Slate / أزرق | `#2E5E7E` | 7.0:1 | `#8DB8D6` | 8.9:1 |
| Forest / أخضر | `#2F6B57` | 6.2:1 | `#8CCDB4` | 10.3:1 |
| Rose / وردي | `#8E4A57` | 6.4:1 | `#E3A9B4` | 9.4:1 |
| Ochre / عسلي | `#7A5A16` | 6.4:1 | `#DDBB6E` | 10.2:1 |

Note under the table:
- EN: "Session type colors (workshop, ongoing, one-time) and Live stay the same in every theme, and every badge carries a word, not only a color."
- AR: "ألوان أنواع الجلسات (ورشة، أسبوعية، مرة واحدة) وحالة مباشر ثابتة في كل الثيمات، وكل شارة فيها كلمة، مش لون بس."

These colours live inside the screens and this table only. The site itself stays on Noura's tokens.

## 6. Arabic pages

Case study pages are English only for now. Build the EN pages now, and keep the AR copy above in the content files (or a TODO) so the Arabic pages can use it later without new writing.

## 7. Waiting on Noura

- Timeline and status for Ulfa: leave them out until she confirms.
