# Copy update: Duet page rewrite + SEO for all project pages

Approved facts for Duet, from Noura:
- She was a **designer on a team**, not the only designer.
- The product is **live**.
- It covers **web and mobile**.
- The team **started from wireframes drafted by the business side**.

Use only these facts. Remove everything else that was in the old text: "20 times a day", the 2026 pilot, "maintained by one designer", the timeline, and "in development".

## 1. `duet.mdx`: replace the whole file

**Frontmatter:**

```yaml
title: "Duet"
tagline: "Two-sided AI hiring platform with an assistant for each side"
role: "Product designer, design team"
timeline: ""
platform: "Web + mobile"
status: "Live"
slug: "duet"
description: "AI hiring platform UX: Tempo helps recruiters review candidates with explainable scores, Lyric helps candidates find roles and prepare. Web and mobile, one design system with two voices."
```

**Body.** Keep the existing images, video and captions where marked. The `AR:` lines go in MDX comments, like the Ulfa pages, for the Arabic pages later.

---

**Intro**

A hiring platform where both sides get their own AI assistant: Tempo for recruiters and Lyric for candidates. I worked on the product as part of the design team, across web and mobile, on the AI interaction patterns and the design system.

AR: منصة توظيف كل طرف فيها ليه مساعد ذكاء اصطناعي خاص بيه: Tempo للمسؤول عن التوظيف، وLyric للمتقدم. اشتغلت على المنتج ضمن فريق التصميم، على الويب والموبايل، في أنماط التعامل مع الذكاء الاصطناعي ونظام التصميم.

`<NdaNote />` (unchanged)

---

**Section: The problem / المشكلة**

Most AI hiring tools score candidates and stop there. Recruiters get a number they can't explain to a hiring manager, and candidates get silence. Duet gives each side an assistant built for its own job, and the hard part is that the two sides don't always want the same thing.

AR: أغلب أدوات التوظيف بالذكاء الاصطناعي بتدي المتقدم درجة وخلاص. المسؤول عن التوظيف بياخد رقم مش عارف يشرحه لمديره، والمتقدم مش بيوصله أي رد. Duet بيدي كل طرف مساعد مصمم لشغله هو، والصعب إن الطرفين مش دايما عايزين نفس الحاجة.

---

**Section: Tempo, for recruiters: AI decisions a recruiter can defend / Tempo للمسؤول عن التوظيف: قرارات يقدر يدافع عنها**

**Decision 01: No score without its reasons**
- EN: Tempo never shows a match score alone. The top reasons sit next to it in the same view, not behind a tooltip, so a recruiter can always say why.
- AR: Tempo مش بيعرض درجة لوحدها أبدا. أهم الأسباب جنبها في نفس الشاشة، مش مستخبية، فالمسؤول دايما يقدر يقول ليه.

Video (unchanged): `tempo-reasons`, caption "The score never arrives alone: the reasons come with it".

**Decision 02: Recruiter language, not model language**
- EN: Reasons are written the way recruiters talk: "5 of 7 required skills match", "7 years in payments". They can paste them straight into an update for the hiring manager.
- AR: الأسباب مكتوبة بلغة المسؤول عن التوظيف: "5 من 7 مهارات مطلوبة"، "7 سنين في المدفوعات". ويقدر ينسخها على طول في تحديث لمديره.

**Decision 03: Disagreeing is part of the flow**
- EN: Recruiters can agree or disagree with every suggestion, with a reason, in a few seconds. Each decision is saved to an audit trail, and disagreeing is treated as normal work, not an error.
- AR: المسؤول يقدر يوافق أو يعترض على أي اقتراح، ومعاه السبب، في ثواني. كل قرار بيتسجل، والاعتراض بيتعامل كجزء طبيعي من الشغل، مش غلطة.

Image grid (unchanged): `tempo-review`, `tempo-disagree` with their captions.

---

**Section: Lyric, for candidates: help at the hard moments / Lyric للمتقدم: مساعدة في اللحظات الصعبة**

Recruiters use Tempo all day and need density. Candidates open Lyric at stressful moments (applying, waiting, hearing no), so Lyric needs clarity and a calmer pace.

AR: المسؤول عن التوظيف بيستخدم Tempo طول اليوم ومحتاج معلومات كتير في مساحة صغيرة. المتقدم بيفتح Lyric في لحظات متوترة (وهو بيقدم، أو مستني، أو اترفض)، فـ Lyric محتاج يكون واضح وهادي.

**Decision 01: After a no, look forward**
- EN: Rejections arrive as formal notifications. Lyric's job afterwards is to point to roles that fit better, not to repeat the bad news.
- AR: الرفض بيوصل كإشعار رسمي. دور Lyric بعدها إنه يوري وظايف أنسب، مش إنه يعيد الخبر الوحش.

**Decision 02: Suggestions, not critique**
- EN: Lyric never says "your CV is weak". It says what recruiters for these roles look for, and asks if the candidate wants to add it. The candidate stays the author.
- AR: Lyric مش بيقول "السي في بتاعك ضعيف". بيقول أصحاب الوظايف دي بيدوروا على إيه، ويسأل المتقدم لو عايز يضيفه. والمتقدم هو اللي بيقرر.

**Decision 03: Prep for this role, not a template**
- EN: Interview prep is built from the actual job post and company, so it reads like help from someone who knows the situation.
- AR: التحضير للمقابلة متعمل من الوظيفة والشركة نفسها، فبيبان كأنه مساعدة من حد فاهم الموقف.

Phone row (unchanged): `lyric-roles`, `lyric-profile`, `lyric-prep` with their captions.

---

**Section: One design system, two voices / نظام تصميم واحد بصوتين**

Tempo and Lyric had to feel different to their users, but ship from one design system. The base is shared: the same components, tokens and accessibility rules. Each assistant gets its own voice on top: colour, density, motion and tone of the AI's writing. A new component is added once, with a Tempo and a Lyric treatment.

AR: Tempo وLyric كان لازم كل واحد فيهم يحسسه مستخدمه إنه مختلف، بس يطلعوا من نظام تصميم واحد. الأساس مشترك: نفس المكونات والتوكنز وقواعد الإتاحة. وفوقه كل مساعد ليه صوته: اللون، وكثافة المعلومات، والحركة، وطريقة كتابة الذكاء الاصطناعي. وأي مكون جديد بيتضاف مرة واحدة، بشكل لـ Tempo وشكل لـ Lyric.

Image (unchanged): `two-voices`, caption "Same components, two voices".

---

**Section: What I learned / اللي اتعلمته**

**01: AI output is design output**
- EN: The hardest decisions weren't screens. They were what the AI says, when it stays quiet, and what it shows first.
- AR: أصعب القرارات مكانتش شاشات، كانت الذكاء الاصطناعي هيقول إيه، وإمتى يسكت، وإيه اللي يظهر الأول.

**02: Two sides means designing for tension**
- EN: Recruiters and candidates are sometimes on opposite sides of the same decision. Designing honestly for both means accepting that tension, not hiding it.
- AR: المسؤول والمتقدم ساعات بيبقوا على طرفين عكس بعض في نفس القرار. التصميم بأمانة للاتنين معناه إنك تقبل التوتر ده، مش إنك تخبيه.

**03: Business wireframes are a head start**
- EN: We started from wireframes drafted by the business side. They weren't designs, they were product thinking made visible, and they saved weeks of alignment. The work was turning that logic into a system that could ship.
- AR: بدأنا من وايرفريمز عملها فريق البيزنس. مكانتش تصميم، كانت تفكير في المنتج على ورق، ووفرت أسابيع من الاتفاق. والشغل كان تحويل المنطق ده لنظام يتنفذ.

---

**Section: Status / الحالة**

- EN: Live on web and mobile. Company details and the AI architecture are confidential, and I'm happy to talk through the work in an interview.
- AR: شغال على الويب والموبايل. تفاصيل الشركة وطريقة بناء الذكاء الاصطناعي سرية، وأقدر أشرح الشغل في مقابلة.

## 2. SEO for every project page

Set these as `<title>` and meta description, with matching OG title and description. The keywords are the words clients and hiring managers search for.

| Page | Title | Description |
|---|---|---|
| `/work/ulfa` | Ulfa: bilingual mental health app UX, case study, Noura Wafik | Arabic and English mobile app design for small-group mental health sessions: participant app, live video sessions, facilitator studio and a themeable design system. |
| `/work/ulfa/participant-app` | Ulfa participant app: Arabic RTL mobile UX case study | Explore, book and join sessions in a bilingual mental health app, designed for clarity and consent in Arabic and English. |
| `/work/ulfa/live-session` | Ulfa live session: group video call UX case study | Waiting room, in-call controls and a calm leave flow for group video sessions, in Arabic and English. |
| `/work/ulfa/facilitator-studio` | Ulfa facilitator studio: calendar, dashboard and wallet UX | Scheduling calendar, workshop dashboard and payouts for facilitators, in a bilingual mobile app. |
| `/work/ulfa/design-system` | Ulfa design system: themes, dark mode and RTL tokens | Four colour themes in light and dark from one set of tokens, with WCAG AA contrast, for an Arabic and English app. |
| `/work/praxa` | Praxa: healthcare SaaS dashboard and AI UX case study | Web platform design for 50+ US mental health clinics: role-based dashboards, scheduling, patient records, AI the provider approves and voice control. |
| `/work/duet` | Duet: AI hiring platform UX case study, Noura Wafik | Explainable AI for recruiters and a supportive AI assistant for candidates, on web and mobile, with one design system and two voices. |

The Arabic pages, when built, use the AR taglines from `work.ts` plus "دراسة حالة، نورا وفيق".
