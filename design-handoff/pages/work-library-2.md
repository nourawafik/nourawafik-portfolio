# Work library 2: Arabic project pages, search, compact filters, "What I do" with Noon, contact

Follow-up to `pages/work-library.md` (done in `4c37e0e`). Do the parts in order. Don't deploy to production. When done, run the site locally and send Noura the links, then refresh the Cloudflare preview under the same rules as `work-library.md` §6 (free plan only, `*.workers.dev`, no DNS, no domain).

**Reference boards** (26–36 are replaced, 37–38 are new):

| Boards | What they show |
|---|---|
| `26`–`31` | `/work`: EN; AR with the Filters panel open (feature "Calendars & scheduling"); EN dark with search "calendar"; AR dark (feature "Video calls"); EN mobile; AR mobile dark with the filter sheet open (feature "AI assistants") |
| `32`–`36` | Home "What I do" with Noon: EN, AR, AR dark, EN mobile, AR mobile dark |
| `37`–`38` | Search with no results: AR desktop ("لوجو"), EN mobile dark ("logo") |

New files:
- `mascot/noon-brand.svg`, `noon-site.svg`, `noon-product.svg`, `noon-ds.svg`: the four "What I do" illustrations, animated. Copy them to `public/mascot/`.

---

## 0. Finish `pages/copy-duet-and-seo.md` first

It isn't applied yet: `duet.mdx` still says "Product Designer (in-house)" and "Core flows complete, in development". Apply that whole file (Duet rewrite plus the SEO titles and descriptions for every project page) before the steps below.

## 1. Arabic project pages (fixes the 404s)

Today every project link on `/ar` and `/ar/work` goes to a 404, because the case-study pages exist in English only.

**Build these routes:**

| Route | Arabic copy comes from |
|---|---|
| `/ar/work/ulfa` | `pages/work-ulfa.md` (the hub, AR copy) |
| `/ar/work/ulfa/[study]` (4 studies) | the `AR:` MDX comments already in `src/content/case-studies/ulfa/*.mdx` |
| `/ar/work/praxa` | `pages/work-praxa.md` (AR lines) |
| `/ar/work/duet` | `pages/copy-duet-and-seo.md` (AR lines) |

**Rules:**
- **Same template as EN, in RTL:**
  - `dir="rtl"` and the Arabic font.
  - Arrows flip with `scaleX(-1)`.
  - Phone rails follow the reading direction.
  - Use the Arabic screenshots wherever an `-ar` image exists. Ulfa has full AR sets, so use them.
- **Shared data:**
  - One source per project, with EN and AR side by side, the same way `work.ts` does it.
  - Don't copy the MDX into a second tree.
  - If an AR line is missing, stop and tell me. Don't translate it yourself.
- **Language switch:** the switch on a project page goes to the same page in the other language, not to the home page.
- **SEO:**
  - `hreflang` alternates (`en`, `ar`, `x-default` → EN) on every project page.
  - AR titles: the AR tagline from `work.ts` plus "دراسة حالة، نورا وفيق".
  - Add all `/ar/work/...` routes to the sitemap.
- **Check:** every card and link under `/ar` opens an Arabic page, with no 404 anywhere.

## 2. `/work`: search and compact filters (replaces §2 "filter rows" of `work-library.md`)

The three chip rows took too much space. Follow boards 26–31.

### Toolbar, top to bottom

**Desktop:**
1. One row:
   - Search field (340px).
   - Type chips.
   - A spacer.
   - The **Filters** button on the end side.
2. Under it, the result count and the active-filter pills.

**Mobile:**
1. The search field, full width.
2. One row that scrolls sideways, edge to edge: the Filters button first, then the type chips.
3. The count and pills.

**Search field:**
- 44px tall, pill shape, 2px `line` border. The border becomes `ink` when the field has text.
- Search icon at the start.
- Placeholder:
  - EN: "Search work, e.g. calendar"
  - AR: "دور في الأعمال، مثلا: تقويم"
- An ✕ button clears it when it has text. `Esc` clears it too.
- `type="search"`, plus an `aria-label`: "Search work" / "دور في الأعمال".
- `box-sizing: border-box`. On mobile it must not run off the screen (it did on my first board).

**Type chips:**
- Same chip as before: "All" plus each type with work, no counts.
- **Hide any type with 0 items.**
- **"Web platforms" / "منصات ويب" must show.** Praxa and Duet are both `web`, so it's 2. Noura saw it missing on the site, so find out why it was hidden and fix it.

**Filters button:**
- 40px pill: filter icon, then "Filters" / "فلاتر".
- When filters are active, a small accent badge shows how many (Industry plus Feature).
- `aria-expanded` reflects the panel or sheet state.

**Desktop panel (board 27):**
- Opens inline, under the toolbar.
- Card background, 1px `line` border, radius 20.
- Inside: the "Industry" / "المجال" and "Feature" / "الميزة" chip groups, with counts.
- "Clear all" / "امسح الكل" on the end side.

**Mobile bottom sheet (board 31):**
- A scrim, then a sheet with radius 28 at the top and a grab handle.
- Title "Filters" / "فلاتر" and "Clear all" / "امسح الكل".
- The same two groups.
- A full-width yellow button:
  - EN: "Show 2 results"
  - AR: "اعرض نتيجتين"
- Focus is trapped inside. `Esc` and a tap on the scrim close it.

**Active-filter pills:**
- Each active Industry or Feature filter shows as a `tag` pill with an ✕, next to the result count.
- Tapping it removes that filter.

**Result count:**
- Same plural rules as before.
- With a search, add the query:
  - EN: `2 results for "calendar"`
  - AR: `نتيجتين لـ "تقويم"`
- Keep `aria-live="polite"`.

### Search logic

- Search covers projects **and** studies, the same as when a feature is active.
- It matches the title, the summary (EN and AR), and a new `keywords` field.
- Search is combined with the type and filter selections (AND).
- Keep the query in the URL (`/work?q=calendar`) with the other filters. Debounce it by about 200ms. No page reload.
- **Normalize the query and the text before matching:**
  - Lower-case.
  - Treat أ إ آ ا as one letter, ة and ه as one letter, and ى and ي as one letter.
  - Strip tatweel and tashkeel.
- Partial words match: "تقو" finds "تقويم", and "sched" finds "scheduling".

Add `keywords: string[]` to `WorkItem`, and use exactly these:

| slug | keywords |
|---|---|
| `praxa` | calendar, scheduling, appointments, dashboard, reports, ai, voice, clinic, saas, healthcare, تقويم, مواعيد, داشبورد, تقارير, ذكاء, صوت, عيادة |
| `duet` | ai, hiring, recruiter, candidate, design system, توظيف, ذكاء, مساعد |
| `ulfa` | mobile app, mental health, bilingual, arabic, rtl, تطبيق, صحة نفسية |
| `ulfa/live-session` | video call, zoom, meeting, live session, مكالمة فيديو, زوم, اجتماع, جلسة |
| `ulfa/facilitator-studio` | calendar, scheduling, wallet, payments, payouts, dashboard, تقويم, جدولة, محفظة, مدفوعات, تحويل |
| `ulfa/design-system` | design system, tokens, themes, dark mode, نظام تصميم, ثيمات, توكنز |

### No results (boards 37–38)

This replaces the empty state in `work-library.md`. When the search or filters return nothing, the grid becomes one card.

**Card:**
- Card background, 1px `line` border, radius 24.
- **Desktop:** two columns; the art sits on the start side.
- **Mobile:** stacked; the buttons are full width.

**Art:**
- `noon-confused.svg` on a `#E6F4F3` tile, radius 24, in **both** modes.
- 200px wide on desktop, 150px on mobile.

**Copy:**

| | EN | AR |
|---|---|---|
| Count line | No results for "{q}" | مفيش نتايج لـ "{q}" |
| Heading, with a search | Nothing for "{q}" in my work yet | ملقتش "{q}" في أعمالي لسه |
| Heading, filters only | No work matches these filters yet | مفيش أعمال بالفلاتر دي لسه |
| Line | Try another word, or pick one of these: | جرب كلمة تانية، أو دور بموضوع من دول: |
| Suggestion chips | Calendars · AI assistants · Video calls · Dashboards · Design systems | تقويم · ذكاء اصطناعي · مكالمات فيديو · داشبورد · أنظمة تصميم |
| Ask line | Looking for something that isn't here? Ask me, and I'll tell you how I'd approach it. | بتدور على حاجة مش هنا؟ ابعتلي وأقولك أقدر أعملها إزاي. |
| Primary button (yellow) | Ask me about it | اسألني عنها |
| Secondary button (outline) | Clear search, or Clear filters when there's no query | امسح البحث / امسح الفلاتر |

**Behaviour:**
- **Suggestion chips:** each one clears the search and sets that feature (`sched`, `ai`, `video`, `dash`, `ds`).
- **"Ask me about it":** opens `mailto:hello@nourawafik.com`.
  - Subject with a search: `Looking for: {q}` / `بدور على: {q}`.
  - Subject without one: `Question about your work` / `سؤال عن أعمالك`.
- The card has `role="status"`, so the change is announced.

## 3. Home "What I do": Noon illustrations, whole card clickable

Follow boards 32–36. This replaces the icon tiles and the link line from `work-library.md` §3.

**Illustrations:**

| Card | File |
|---|---|
| Brand identity / هوية بصرية | `noon-brand.svg` |
| Websites & landing pages / مواقع وصفحات هبوط | `noon-site.svg` |
| Digital products / منتجات رقمية | `noon-product.svg` |
| Design systems / أنظمة تصميم | `noon-ds.svg` |

**Tile:**
- Same size and position as the old icon tile on the boards.
- Background `#E6F4F3` in **both** light and dark: the line art disappears on a dark tile.

**Animations:**

The SVG files already carry their own CSS animations, and each one has a `prefers-reduced-motion` still frame. Use them as they are, either inline or as `<img>`. Don't re-time them.

| Card | What moves |
|---|---|
| Brand | Noon winks every 4s. The pen travels left to right and the red line is drawn exactly from the pen tip, then the pen goes back to her hand (5s loop). |
| Websites | The lines on the laptop screen type in one after another, with a blinking cursor (5s loop). |
| Digital products | The three shapes inside the phone pop in one by one, then the yellow sparkles above appear (5s loop). |
| Design systems | The yellow block drops onto the red circle, the stack squashes together, then the yellow sparkles appear (5s loop). |

**Cards are fully clickable (no link text):**
- Remove "See the work · {count}" and "Ask about it" from the cards.
- Each card becomes one `<a>`, with no nested links or buttons inside.
- Hover: the card lifts (same as the work cards).
- Visible focus ring.

**Where each card goes:**

| Card | Link |
|---|---|
| Brand identity | `mailto:hello@nourawafik.com?subject=About: Brand identity` (AR subject: `عن: هوية بصرية`) |
| Websites & landing pages | `mailto:hello@nourawafik.com?subject=About: Websites & landing pages` (AR subject: `عن: مواقع وصفحات هبوط`) |
| Digital products | `/work` (`/ar/work`), since every current project is a digital product |
| Design systems | `/work?feature=ds` (`/ar/work?feature=ds`) |

- Compute "has work" from `work.ts`. When brand or site work is added later, those two cards switch to `/work?type=brand` and `/work?type=site` by themselves.
- **`aria-label` on each card:** the title plus where it goes.
  - Work link: "Digital products, see the work" / "منتجات رقمية، شوف الأعمال".
  - Mailto: "Brand identity, email Noura about it" / "هوية بصرية، ابعت لنورا عنها".

## 4. Contact section

Noura found three problems:
- Noon doesn't move.
- "Get a quote" goes to email.
- The email next to it goes to email too.

So both controls did the same thing.

**"Get a quote" / "اطلب عرض سعر"** opens `mailto:` with a subject and a short template, so the first email already has what Noura needs. URL-encode the subject and body.

| | EN | AR |
|---|---|---|
| Subject | Project inquiry from nourawafik.com | طلب عرض سعر من الموقع |
| Body | Hi Noura,<br><br>I'd like a quote for:<br>- What I need:<br>- Company or project:<br>- Language: Arabic / English / both<br>- When I need it:<br><br>Thanks, | أهلا نورا،<br><br>عايز عرض سعر لـ:<br>- محتاج إيه:<br>- الشركة أو المشروع:<br>- اللغة: عربي / إنجليزي / الاتنين<br>- محتاجه إمتى:<br><br>شكرا، |

**The email becomes "Copy email":**
- Show `hello@nourawafik.com` as text, with a copy button ("Copy email" / "انسخ الإيميل", with a copy icon) beside it.
- On click, copy it to the clipboard and show a small toast for 2s: "Email copied" / "اتنسخ الإيميل". The toast is `role="status"`.
- If the clipboard API fails, fall back to opening `mailto:`.

**Noon waves:**
- When the contact section first scrolls into view (IntersectionObserver, about 40% visible), `noon-wave.svg` waves: rotate her about ±8° from the bottom center, 2 cycles in about 1.2s, then rest.
- It runs once per page view.
- With reduced motion, no animation.

## 5. Check before sending Noura the links

Check at 1440 and 390, light and dark, EN and AR:

- [ ] Every project link under `/ar` and `/ar/work` opens an Arabic page. No 404s.
- [ ] The language switch on a project page lands on the same page.
- [ ] "Web platforms" / "منصات ويب" shows on `/work`.
- [ ] Search: "calendar", "تقويم", "تقو", "زوم" and "dark mode" all return results. "logo" shows the empty card.
- [ ] Filters panel (desktop) and sheet (mobile): open, close, Clear all, the badge count, and the pills.
- [ ] The URL keeps `q`, `type`, `industry` and `feature`, and back/forward works.
- [ ] "What I do": all four cards are clickable, the animations run, and they stop with reduced motion.
- [ ] Contact: the quote email opens with the template, copy shows the toast, and Noon waves once.
