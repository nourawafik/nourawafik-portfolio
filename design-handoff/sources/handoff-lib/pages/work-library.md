# Work library (`/work`), "What I do" section, next-project card, Cloudflare test

Do the parts in order (1 to 6). Don't deploy to production. Section 6 is a preview deploy only.

**Reference boards:**

| Boards | What they show |
|---|---|
| `26`–`31` | `/work` page: EN, AR (filter "Calendars & scheduling" on), EN dark, AR dark (filter "Video calls" on), EN mobile, AR mobile dark (filter "AI assistants" on) |
| `32`–`36` | Home "What I do" section: EN, AR, AR dark, EN mobile, AR mobile dark |

The site keeps growing: Noura will keep adding projects (landing pages, brand identities, marketing and social media…). Build everything here as data first, so adding a project is one file plus images, with no layout work.

---

## 1. Data model

Create `src/content/work.ts`, the single source for the library, the home cards and the next-project card. It replaces the card fields scattered in `case-studies.ts` and `selected-work.tsx`, and keeps the existing `CaseStudy` fields.

```ts
type WorkType = 'mobile' | 'web' | 'site' | 'brand' | 'marketing';
type Industry = 'health' | 'hr';   // add new ones as projects arrive
type Feature  = 'ai' | 'video' | 'sched' | 'pay' | 'dash' | 'ds';

interface WorkItem {
  slug: string;              // 'ulfa', 'praxa', 'duet', or 'ulfa/live-session' for a study
  title: { en: string; ar: string };
  summary: { en: string; ar: string };   // one line on the card
  types: WorkType[];
  industry: Industry;
  features: Feature[];
  parent?: { slug: string; title: { en: string; ar: string } };  // set for studies only
  studiesCount?: number;     // Ulfa: 4
  thumb: string; thumbDark: string;      // 4:3
  order: number;             // library order = next-project order
  featured?: boolean;        // shown on home (max 3)
}
```

**Labels (EN / AR):**

| Group | Labels |
|---|---|
| Types | Mobile apps / تطبيقات موبايل · Web platforms / منصات ويب · Websites & landing pages / مواقع وصفحات هبوط · Brand identity / هوية بصرية · Marketing & social media / تسويق وسوشيال ميديا |
| Industries | Health / صحة · HR tech / تقنيات التوظيف |
| Features | AI assistants / مساعدات ذكاء اصطناعي · Video calls / مكالمات فيديو · Calendars & scheduling / تقويم وجدولة · Payments & wallets / مدفوعات ومحافظ · Dashboards & reports / داشبورد وتقارير · Design systems / أنظمة تصميم |

**Current items.** Copy the summaries exactly from the boards.

| slug | types | industry | features | parent | thumb |
|---|---|---|---|---|---|
| `ulfa` | mobile | health | none (its studies carry them) | | `ulfa-thumb` |
| `praxa` | web | health | ai, sched, dash | | `praxa-thumb` |
| `duet` | web, mobile | hr | ai, ds | | `duet-thumb` |
| `ulfa/live-session` | mobile | health | video | Ulfa | `ulfa-thumb-live` |
| `ulfa/facilitator-studio` | mobile | health | sched, pay, dash | Ulfa | `ulfa-thumb-studio` |
| `ulfa/design-system` | mobile | health | ds | Ulfa | `ulfa-thumb-ds` |

The Ulfa participant-app study is not a library item. It's reached from the Ulfa hub.

**New dark thumbs** are in `work/ulfa/`. Copy them to `public/work/ulfa/`:
- `ulfa-thumb-live-dark.png`
- `ulfa-thumb-studio-dark.png`
- `ulfa-thumb-ds-dark.png`

Also use them on the Ulfa hub cards in dark mode.

## 2. `/work` and `/ar/work` page

Follow boards 26–31.

**Layout, top to bottom:**
1. Eyebrow "Work" / "أعمالي".
2. H1:
   - EN: "Products, platforms and websites, in two languages"
   - AR: "منتجات ومنصات ومواقع، بلغتين"
3. Intro:
   - EN: "Projects I designed from the first idea to developer-ready screens. Filter by the type of work or the industry you care about."
   - AR: "مشاريع صممتها من أول فكرة لحد شاشات جاهزة للتنفيذ. اختار النوع أو المجال اللي يهمك."
4. Three filter rows: Type / النوع, Industry / المجال, Feature / الميزة. Each chip shows a count.
5. Result count:
   - EN: "3 results"
   - AR: نتيجة واحدة / نتيجتين / 3 نتايج
6. Grid of cards: 3 columns desktop, 2 tablet, 1 mobile.
7. The existing contact block, then the footer.

**Filter logic:**
- With no feature selected, show **projects only** (items without `parent`).
- When a feature is selected, search projects **and** studies. A study card shows "Part of Ulfa" / "جزء من ألفة" above its title, and its link says "Read the study" / "اقرا الدراسة".
- Filters combine with AND. Counts reflect the other active filters.
- **Hide any chip whose count is 0.** The "All" chip is always shown. So "Websites & landing pages", "Brand identity" and "Marketing & social media" stay hidden until they have work.

**Chips:**
- 44px tall, 2px `line` border, pill shape.
- The active chip is filled `ink` with `bg` text, and has `aria-pressed="true"`.
- The count is a small pill.
- On mobile, each row scrolls sideways, edge to edge.

**State and accessibility:**
- Keep the state in the URL (`/work?feature=sched&type=web`), so links are shareable and the back button works.
- No page reload.
- The result count is `aria-live="polite"`.

**Cards:**
- Same card as home: 4:3 image, tags, title, one line, link.
- Type tags are filled. The industry tag is outlined. The "4 studies" tag is outlined.
- Same hover and motion as home.

**Empty result:**
- This can happen with AND filters.
- Show Noon "confused" (`noon-confused.svg`) and a short line, "Nothing here yet. Try another filter." / "مفيش حاجة هنا لسه. جرب فلتر تاني.", plus a "Clear filters" / "امسح الفلاتر" button.

**Navigation:**
- Header "Work" / "أعمالي" and menu "Work" go to `/work`.
- Home "All work" goes to `/work`.

**SEO:**

| | EN | AR |
|---|---|---|
| Title | Work — Noura Wafik, product and brand designer | أعمال نورا وفيق، مصممة منتجات وهويات |
| Description | Mobile apps, web platforms and design systems in Arabic and English, for health, HR tech and more. | تطبيقات موبايل ومنصات ويب وأنظمة تصميم بالعربي والإنجليزي، في الصحة والتوظيف وغيرهم. |

Add `/work` and `/ar/work` to the sitemap.

## 3. Home: replace the packages section with "What I do"

Follow boards 32–36. Keep the offers and packages code, but don't render it.

**Header:**
- Eyebrow "What I do" / "بعمل إيه".
- H2 "From a first logo to a full product" / "من أول لوجو لحد منتج كامل".
- Line:
  - EN: "Everything in Arabic and English from the start. Every project gets a quote that fits what it needs."
  - AR: "كل حاجة بالعربي والإنجليزي من الأول. لكل مشروع عرض سعر على حسب احتياجه."
- A yellow "Get a quote" / "اطلب عرض سعر" button on the end side (full width on mobile).

**Four cards.** Each card has a 52px icon tile, a title, one line and a link.

| Card | Line (EN / AR) | Link |
|---|---|---|
| Brand identity / هوية بصرية | Logo, colours and type in Arabic and English, with a guide for using them. / لوجو وألوان وخطوط بالعربي والإنجليزي، ودليل لاستخدامهم. | `brand` |
| Websites & landing pages / مواقع وصفحات هبوط | Fast bilingual websites that are easy to update. / مواقع بلغتين، سريعة وسهل تحديثها. | `site` |
| Digital products / منتجات رقمية | Web and mobile apps, from the first flow to developer-ready screens. / تطبيقات ويب وموبايل، من أول فلو لحد شاشات جاهزة للتنفيذ. | `mobile` + `web` |
| Design systems / أنظمة تصميم | Components and tokens that keep a product consistent as it grows. / مكونات وتوكنز بتخلي المنتج متسق وهو بيكبر. | feature `ds` |

**Link rule:**
- If the filter has work, show "See the work · {count}" / "شوف الأعمال · {count}", linking to `/work` with that filter.
- If the filter has no work, show "Ask about it" / "اسأل عنها", opening `mailto:hello@nourawafik.com` with the subject `About: {card title}`.
- Compute the count from `work.ts`, so the cards update by themselves.

**Layout:**
- Desktop: 4 columns.
- Mobile: a horizontal rail with 80% cards and dots, like home.
- Nav "Services" / "الخدمات" still scrolls to this section (`#services`).

## 4. Next-project card on every project page

One shared component at the end of every project page: the Ulfa hub, Praxa, Duet and any future project.

- It shows the next **project** (no studies) in `order`. The last one loops to the first.
- Ulfa studies keep "Back to Ulfa" and "Next study". The last study (design system) also shows the next-project card.
- **Style (hub boards 19 and 20):**
  - Dark `ink` card with "Next project" / "المشروع اللي بعده", the title and the summary.
  - A 56px yellow round arrow on the end side.
  - In dark mode it's `#0A2023` with a 1px `#2B4A4E` border.

## 5. Adding a project later (write this into `PRODUCT.md`)

1. Add images to `public/work/{slug}/`: thumb and hero, each with a `-dark` version.
2. Add one entry to `work.ts`.
3. Add the MDX page. Done. Filters, counts, home cards and next-project links update by themselves.

## 6. Cloudflare preview (free plan only)

1. Run `npm run build:cf`. Report the compressed Worker size: it must be under 3 MiB on the Free plan. If it's over, stop and tell Noura before trying anything else.
2. Run `wrangler login`. Noura signs in herself in the browser. Never ask for or store tokens in the repo or in chat.
3. Deploy a **preview** to a `*.workers.dev` URL. Don't add routes or custom domains. Don't touch DNS for `nourawafik.com`.
4. **Never** upgrade the plan, add a payment method, or enable any paid product (Workers Paid, Images Paid, R2 over free, etc.). If something needs a paid feature, stop and ask Noura first.
5. Send Noura the preview URL, and check it:
   - On her Vodafone wifi (Netlify was blocked there).
   - On mobile data.
   - Light and dark, AR and EN.
