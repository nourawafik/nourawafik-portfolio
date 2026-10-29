# Case study: Praxa (replaces KemeClinic)

The project gets a new name and a full redesign. Every screen was redrawn for the portfolio. This is one case study page, not a hub.

- Reference board: `boards/25-work-praxa.png`.
- Assets: `work/praxa/` (22 files).

## 1. Remove the old project completely

**Delete these:**
- `src/content/case-studies/kemeclinic.mdx`
- `public/work/Kemeclinic/`
- `public/work/kemeclinic-hero.png` and `public/work/kemeclinic-thumb.png`

**Then update:**
- `src/content/case-studies.ts`
- `src/components/sections/selected-work.tsx`
- `PRODUCT.md`
- `.impeccable/design.json`
- `design-handoff/pages/home.md`

Replace KemeClinic with Praxa everywhere.

**Redirect:** add a permanent redirect from `/work/kemeclinic` to `/work/praxa`.

**Check:** when done, `grep -rIi "kemeclinic\|keme clinic"` (text files only, outside `.git` and `design-handoff/`) must return nothing.

**Don't reuse any of the old copy.** It has claims we no longer make: user counts, component counts, feature-area counts, tech stack, mobile, and the "What I'd do differently" section. Use only the copy in this file.

## 2. Names and card

| Field | Value |
|---|---|
| Title | Praxa |
| Slug | `praxa` |
| Tagline | Clinic platform for four roles, with AI the provider approves |
| Arabic tagline (for later) | منصة للعيادات بأربع أدوار، وذكاء اصطناعي المعالج بيوافق عليه |
| role | Sole product designer |
| platform | Web |
| status | Live in the US |
| timeline | leave empty |
| thumb | `praxa-thumb.png` / `praxa-thumb-dark.png` (4:3) |
| hero / OG | `praxa-hero.png` / `praxa-hero-dark.png` (16:9) |
| thumbAlt | Praxa provider dashboard with an AI diagnosis draft |
| heroAlt | Praxa clinic platform, provider view and AI draft review |

**Meta description:** "A web platform US mental health clinics use to run their day, for admins, providers, patients and staff. Live in the US across 50+ clinics."

The only facts Noura approved for publishing are: sole designer, web only, live in the US, 50+ clinics. Don't add any other numbers or dates.

## 3. Page content (`/work/praxa`)

Same layout as the Duet page:
- Intro, then the confidentiality note, then sections.
- Each section has a short paragraph and its images.

**Desktop screenshots:**
- Size: 1440×960 at 2x. Show them at their natural ratio with radius 14, a 1px `line` border and the usual image shadow.
- Don't use a device frame or a browser frame.
- Use `srcDark` for every image, since each has a `-dark` file.

**Intro:**
- EN: "A web platform US mental health clinics use to run their day: appointments, patients, providers, billing and claims, and reports. It serves four roles (admin, provider, patient and staff) and is live in the US across more than 50 clinics. I'm the only designer on the product."
- AR (for later): "منصة ويب بتستخدمها عيادات الصحة النفسية في أمريكا عشان تدير يومها: المواعيد، والمرضى، والمعالجين، والفواتير والتأمين، والتقارير. بتخدم أربع أدوار (أدمن، ومعالج، ومريض، وموظفين)، وشغالة في أمريكا في أكتر من 50 عيادة. وأنا المصممة الوحيدة على المنتج."

**Confidentiality note** (small, muted, with a lock icon, same as Duet):
- EN: "The name and details are changed, and every screen here was redrawn for this case study. Names and numbers inside the screens are illustrative."
- AR: "الاسم والتفاصيل متغيرة، وكل الشاشات هنا اتعاد رسمها لدراسة الحالة دي. الأسماء والأرقام اللي جوه الشاشات للتوضيح بس."

### Sections

| # | Section title (EN / AR) | Paragraph (EN / AR) | Images and captions (EN) |
|---|---|---|---|
| 1 | One product, four roles / منتج واحد لأربع أدوار | Admins and providers share the same navigation, components and data, but each lands on a different home. The admin sees the whole operation and what needs attention. The provider sees today's sessions and the next patient. / الأدمن والمعالج بيستخدموا نفس التنقل والمكونات والبيانات، بس كل واحد بيفتح على صفحة رئيسية مختلفة. الأدمن بيشوف الشغل كله واللي محتاج انتباهه، والمعالج بيشوف جلسات النهارده والمريض الجاي. | `admin.png`: "Admin home: today's numbers, and what needs attention with the next step". `provider.png`: "Provider home: today's schedule, the next patient, and AI drafts waiting for approval". 2 columns on desktop, stacked on mobile. |
| 2 | Appointments / المواعيد | The week is colored by visit type, with a line for the current time. The appointment details sit beside the calendar, so scheduling never leaves the page. / الأسبوع ملون حسب نوع الزيارة، وفيه خط للوقت الحالي، وتفاصيل الموعد جنب التقويم، فالجدولة مش بتسيب الصفحة. | `appointments.png`: "Week view with the appointment details beside it" |
| 3 | Patient profile / ملف المريض | Everything a provider checks before a session, on one screen: next appointment, diagnoses, medications and notes in order. Anything written by AI is labelled and shows who approved it. / كل اللي المعالج بيبص عليه قبل الجلسة في شاشة واحدة: الموعد الجاي، والتشخيص، والأدوية، والملاحظات بالترتيب. وأي حاجة كتبها الذكاء الاصطناعي عليها علامة ومكتوب مين وافق عليها. | `patient.png`: "Profile overview, with AI content labelled as approved" |
| 4 | AI the provider approves / ذكاء اصطناعي المعالج بيوافق عليه | AI drafts the diagnosis from the session. Each section shows its source, the provider accepts or edits it section by section, and nothing reaches the chart until every section is reviewed. / الذكاء الاصطناعي بيكتب مسودة التشخيص من الجلسة. كل جزء بيبين مصدره، والمعالج بيقبل أو بيعدل جزء جزء، ومفيش حاجة بتدخل الملف قبل ما كل الأجزاء تتراجع. | `aidx.png`: "Every section shows its source, and approval waits until all are reviewed" |
| 5 | Voice control / التحكم بالصوت | Providers can run the dashboard by voice. When a command matches more than one patient, Praxa asks which one instead of guessing. / المعالج يقدر يتحكم في الداشبورد بصوته. ولو الأمر ينطبق على أكتر من مريض، Praxa بيسأله يختار مين بدل ما يخمن. | Video (`<Video>` component): `voice-command.mp4` / `voice-command-dark.mp4`, posters `voice-command-poster.png` / `voice-command-dark-poster.png`, `aspect-ratio: 1440/960`. Caption: "“Open Sarah Johnson’s profile”: two matches, the provider says “one”, the profile opens". Then `voice2.png`: "Two matches: numbered, and everything else fades back" |
| 6 | Reports / التقارير | Completed appointments per week, the mix of visit types, and clinics compared side by side. / المواعيد المكتملة كل أسبوع، وأنواع الزيارات، ومقارنة العيادات جنب بعض. | `reports.png`: "Weekly trend, visit types, and clinics compared" |

Then the usual next-project card. The order of the case studies is up to the current setup (`order` field).

## 4. Product identity (reference only, used inside the screens)

- Colors: primary `#13684F`, dark `#6FD0AE`, paper `#F4F5F3`, ink `#17201D`.
- Font: Plus Jakarta Sans.
- Do not use these in the site UI. The site stays on Noura's tokens.
