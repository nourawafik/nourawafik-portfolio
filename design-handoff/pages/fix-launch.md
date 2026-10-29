# Launch: simple Arabic, quote form, social links, review fixes

The last handoff before launch. I reviewed `3b44143`:
- Built it and opened all 18 routes at 1440 and 390, in light and dark.
- All internal links return 200.
- The language switch keeps the page.
- No horizontal overflow and no broken images.

The issues found are in §D, with screenshots in `boards/review-2/`. New boards: `39`–`45` (quote page).

Do the parts in order (A to F). Don't deploy to production. When done, refresh the `workers.dev` preview (free plan only, no domain, no DNS) and send Noura the links.

**Hard rules:**
- No paid Cloudflare product, plan upgrade or payment method. If any step asks for one, stop and ask Noura.
- No secrets or keys in the repo or in chat. Noura adds them herself.
- Arabic is written with no tashkeel (no shadda, no harakat).

---

## A. Arabic copy: simple, clear Arabic everywhere

The Arabic was in Egyptian dialect. It changes to simple, clear Arabic that anyone in Egypt and the Gulf reads easily: warm, not formal, no dialect words.
- Noura speaks in the first person (feminine, e.g. "مصممة").
- The visitor is addressed with the general masculine form ("اطلب", "أرسل").

Replace every string below exactly. Where a table gives a key, it's the key in that file's `COPY` object.

**Search:** after replacing, search `src/` for `بيت|بتت|عايز|إيه|مش |لحد|اللي|دلوقتي|كمان|يلا|بتاع|اتعمل|بيدي|جوه|شوف |اقرا ` and fix anything left. Also strip any `ّ` (shadda), for example "مفسّر" and "تدوّر".

### A1. Shared terms (use them everywhere)

| Before | After |
|---|---|
| موبايل (in labels) | الجوال (e.g. "تطبيقات الجوال", "ويب وجوال") |
| الجلسة اللايف | الجلسة المباشرة |
| الوضع الغامق / غامق | الوضع الداكن / داكن |
| داشبورد (in labels) | لوحات التحكم |
| اقرا / شوف | اقرأ / شاهد |
| المشروع اللي بعده | المشروع التالي |
| أدمن | الإدارة |

### A2. `content/work.ts`

**Labels:**

| Key | AR |
|---|---|
| `type.mobile` | تطبيقات الجوال |
| `type.web` | منصات ويب |
| `type.site` | مواقع وصفحات هبوط |
| `type.brand` | هوية بصرية |
| `type.marketing` | تسويق وسوشيال ميديا |
| `industry.health` | الصحة |
| `industry.hr` | تقنيات التوظيف |
| `feature.ai` | مساعدات ذكاء اصطناعي |
| `feature.video` | مكالمات فيديو |
| `feature.sched` | التقويم والجدولة |
| `feature.pay` | المدفوعات والمحافظ |
| `feature.dash` | لوحات التحكم والتقارير |
| `feature.ds` | أنظمة التصميم |

**Items:**

| Item | `title.ar` | `summary.ar` |
|---|---|---|
| `ulfa` | ألفة | تطبيق جوال بالعربي والإنجليزي، يجمع الناس مع ميسرين متخصصين في الصحة النفسية، في دوائر صغيرة وجلسات منظمة. |
| `praxa` | Praxa | منصة عيادات لأربعة أدوار: الإدارة والمعالج والمريض والموظفون، مع ذكاء اصطناعي يراجعه المعالج ويوافق عليه قبل أن يدخل ملف المريض. |
| `duet` | Duet | منصة توظيف فيها مساعد ذكاء اصطناعي للشركات وآخر للمتقدمين، وكل قرار يتخذه الذكاء الاصطناعي فيها مشروح بأسبابه. |
| `ulfa/live-session` | الجلسة المباشرة | غرفة الانتظار والجلسة المباشرة، بتصميم داكن مريح للاستخدام في المساء. |
| `ulfa/facilitator-studio` | استوديو الميسر | التقويم وإدارة الورش والمحفظة وتحويل الأرباح. |
| `ulfa/design-system` | نظام التصميم | أربعة ألوان في الوضعين الفاتح والداكن، بتباين بمستوى AA في كل منها. |

**Keywords:** add `جوال`, `مباشرة` and `لوحة تحكم` next to the existing Arabic keywords of the items they fit: Ulfa → `جوال`; live session → `مباشرة`; Praxa and the studio → `لوحة تحكم`. Keep the old words too, so both spellings are found.

**Fix the EN Duet summary.** Today it says "one for companies and one for candidates". Use the approved line:
- `summary.en`: "A two-sided hiring platform with an AI assistant for recruiters and another for candidates."
- AR matches the table above.

### A3. Home

**`hero.tsx`:**

| Key | AR |
|---|---|
| tags | هوية بصرية · مواقع · منتجات رقمية · محتوى |
| `h1Line1` / `h1Line2` | اجعل فكرتك / ترى النور |
| `sub` | هويات بصرية ومواقع ومنتجات رقمية بالعربي والإنجليزي، للشركات الناشئة التي تبدأ والشركات التي تكبر في مصر والخليج. |
| `cta` | اطلب عرض سعر → `/ar/quote` (EN → `/quote`) |
| `secondary` | شاهد أعمالي → `/ar/work` (EN "See my work" → `/work`) |
| `noonAlt` | نون، شخصية العلامة، تستيقظ من الشعار ورأسها يضيء |
| stickers | أهلا! · متاحة لمشاريع جديدة · عربي + English |

**`services-marquee.tsx` (`ITEMS_AR`):** هوية بصرية · مواقع بلغتين · تصميم منتجات · محتوى السوشيال ميديا

**`selected-work.tsx`:**

| Key | AR |
|---|---|
| `eyebrow` | أعمال مختارة |
| `h2` | أعمال حقيقية، لحياة حقيقية |
| `allWork` | كل الأعمال |
| `read` | اقرأ دراسة الحالة |

The cards change too; see §D1.

**`what-i-do.tsx`:**

| Key | AR |
|---|---|
| `eyebrow` | ماذا أقدم |
| `h2` | من الشعار إلى المنتج الكامل |
| `line` | كل شيء بالعربي والإنجليزي من البداية، ولكل مشروع عرض سعر يناسب احتياجه. |
| `cta` | اطلب عرض سعر → `/ar/quote` |
| Brand identity | هوية بصرية · شعار وألوان وخطوط بالعربي والإنجليزي، مع دليل لاستخدامها. |
| Websites | مواقع وصفحات هبوط · مواقع بلغتين، سريعة وسهلة التحديث. |
| Digital products | منتجات رقمية · تطبيقات ويب وجوال، من أول تصور لرحلة المستخدم حتى شاشات جاهزة للتنفيذ. |
| Design systems | أنظمة تصميم · مكونات وتوكنز تحافظ على اتساق المنتج وهو يكبر. |
| aria, work link | {title}، شاهد الأعمال |
| aria, quote link | {title}، اطلب عرض سعر |

Cards that have no work (brand, websites) now go to `/quote?service=brand` and `/quote?service=site`, with that service pre-selected (`/ar/quote?...` in AR), not to `mailto`.

**`about-section.tsx`:**

| Key | AR |
|---|---|
| `eyebrow` | عني |
| `h2Line1` | أهلا، أنا نورا |
| `body` | مصممة هويات بصرية ومنتجات رقمية من القاهرة. أعمل على المشروع من بدايته لنهايته: من البحث والهوية البصرية حتى الواجهات الجاهزة للتطوير. ولأن لدي خبرة في البرمجة والتسويق، يخرج التصميم قابلا للتنفيذ وموجها للجمهور الصحيح. |
| trait 1 | بلغتين من البداية · تصميم عربي من الأساس، وليس ترجمة لتصميم إنجليزي. |
| trait 2 | من الفكرة إلى الإطلاق · هوية وواجهات وتطوير وتسويق في مكان واحد. |
| trait 3 | أنظمة تصميم · كل مشروع يخرج بنظام يكبر معك. |

**`contact-section.tsx`:**

| Key | AR |
|---|---|
| `h2` | لديك فكرة؟ لنتحدث. |
| `body` | أرسل لي تفاصيل مشروعك، وسأرد عليك بنفسي. |
| `cta` | اطلب عرض سعر → `/ar/quote` |
| `copyEmail` | انسخ الإيميل |
| `toastCopied` | تم نسخ الإيميل |

Remove `ctaSubject` and `ctaBody` here and in `what-i-do.tsx`. The quote page replaces them.

### A4. `/ar/work` (`work-library.tsx`)

| Key | AR |
|---|---|
| `eyebrow` | أعمالي |
| `h1` | منتجات ومنصات ومواقع، بلغتين |
| `intro` | مشاريع صممتها من أول فكرة حتى شاشات جاهزة للتنفيذ. ابحث عما تحتاجه، أو اختر نوع العمل. |
| `all` | الكل |
| `searchPlaceholder` | ابحث في الأعمال، مثلا: تقويم |
| `searchLabel` | ابحث في الأعمال |
| `filtersBtn` | الفلاتر |
| `clearAll` | مسح الكل |
| `clearSearch` | مسح البحث |
| `clearFilters` | مسح الفلاتر |
| `filterIndustry` / `filterFeature` | المجال / الميزة |
| count | 1: نتيجة واحدة · 2: نتيجتان · 3–10: `{n} نتائج` · 11+: `{n} نتيجة` |
| count with search | `{count} عن "{q}"` |
| `partOf` | جزء من {p} |
| `readStudy` / `readCase` | اقرأ الدراسة / اقرأ دراسة الحالة |
| `studies` | {n} دراسات |
| `noResultsFor` | لم أجد "{q}" في أعمالي حتى الآن |
| `noResultsFilters` | لا توجد أعمال بهذه الفلاتر حتى الآن |
| `noResultsTry` | جرب كلمة أخرى، أو اختر موضوعا من هذه: |
| `askLine` | تبحث عن شيء غير موجود هنا؟ أرسل لي طلبك وسأخبرك كيف يمكنني تنفيذه. |
| `askBtn` | اطلب عرض سعر |
| show button | اعرض نتيجة واحدة / اعرض نتيجتين / اعرض {n} نتائج |
| suggestion chips | تقويم · ذكاء اصطناعي · مكالمات فيديو · لوحات تحكم · أنظمة تصميم |
| count line, empty | لا توجد نتائج عن "{q}" |
| aria `Work type` | نوع العمل |

The empty-state button now goes to `/quote` (`/ar/quote`), with the notes field pre-filled:
- EN: `Looking for: {q}`
- AR: `أبحث عن: {q}`

The EN `askLine` matches: "Looking for something that isn't here? Send me a request and I'll tell you how I'd approach it." `askBtn` EN: "Get a quote".

### A5. Layout, nav, footer, small UI

| Where | AR |
|---|---|
| `nav-ar.tsx` mobile menu prompt "جاهزة تبدأ؟" (it addressed the visitor as female) | جاهز للبدء؟ |
| `nav-ar.tsx` theme labels | فاتح / داكن |
| `nav-ar.tsx` and `nav.tsx` "Get a quote" (both, desktop and menu) | → `/ar/quote` and `/quote`, not `mailto` |
| `theme-toggle.tsx` | الوضع الفاتح / الوضع الداكن |
| `next-project-card.tsx` | المشروع التالي |
| `ar/not-found.tsx` | الصفحة غير موجودة · الصفحة التي تبحث عنها غير موجودة أو تم نقلها. · العودة للرئيسية · تصفح أعمالي → `/ar/work` |
| `ar/work/ulfa/[study]` back link | العودة إلى ألفة |

`ask-noura.tsx`, `offer-bar.tsx` and `services-section.tsx` aren't rendered. Leave them; they get rewritten when they're turned on.

### A6. Project pages

#### Duet (`ar/work/duet/page.tsx`)

| Part | AR |
|---|---|
| meta description | منصة توظيف بالذكاء الاصطناعي لطرفين: Tempo يساعد مسؤول التوظيف بأسباب واضحة يستطيع الدفاع عنها، وLyric يساعد المتقدم في اللحظات الصعبة. |
| OG description | منصة توظيف لكل طرف فيها مساعد ذكاء اصطناعي خاص به: Tempo لمسؤول التوظيف وLyric للمتقدم، على الويب والجوال. |
| intro | منصة توظيف لكل طرف فيها مساعد ذكاء اصطناعي خاص به: Tempo لمسؤول التوظيف، وLyric للمتقدم. عملت على المنتج ضمن فريق التصميم، على الويب والجوال، في أنماط التعامل مع الذكاء الاصطناعي وفي نظام التصميم. |
| metadata | دوري: مصممة منتج ضمن فريق التصميم · المنصة: ويب وجوال · الحالة: يعمل حاليا |
| hero alt | Duet، شاشات Tempo وLyric |
| NDA note | تم تغيير الأسماء والتفاصيل وبيانات الشركة، وأعيد رسم كل الشاشات لدراسة الحالة هذه. العمل الأصلي محمي باتفاقية سرية. |
| المشكلة | أغلب أدوات التوظيف بالذكاء الاصطناعي تعطي المتقدم درجة وتتوقف. يحصل مسؤول التوظيف على رقم لا يستطيع شرحه لمديره، ولا يصل المتقدم أي رد. يعطي Duet كل طرف مساعدا مصمما لعمله هو، والصعوبة أن الطرفين لا يريدان الشيء نفسه دائما. |
| Tempo heading | Tempo لمسؤول التوظيف: قرارات يستطيع الدفاع عنها |
| 01 | **لا درجة بدون أسباب.** لا يعرض Tempo الدرجة وحدها أبدا. أهم الأسباب بجانبها في الشاشة نفسها، وليست مخفية، فيستطيع المسؤول دائما أن يشرح السبب. |
| video caption + aria | الدرجة لا تظهر وحدها: الأسباب تأتي معها |
| 02 | **لغة مسؤول التوظيف، لا لغة النموذج.** الأسباب مكتوبة بالطريقة التي يتحدث بها مسؤولو التوظيف: "5 من 7 مهارات مطلوبة"، "7 سنوات في المدفوعات". ويستطيع نسخها مباشرة في تحديث لمديره. |
| 03 | **الاعتراض جزء من العمل.** يستطيع المسؤول أن يوافق أو يعترض على أي اقتراح، مع ذكر السبب، في ثوان. كل قرار يسجل، والاعتراض يعامل كجزء طبيعي من العمل، لا كخطأ. |
| `tempo-review` | alt: Tempo: الدرجة والأسباب في شاشة واحدة · caption: الدرجة والأسباب في شاشة واحدة، بلغة مسؤول التوظيف |
| `tempo-disagree` | alt: Tempo: الاعتراض على اقتراح الذكاء الاصطناعي · caption: الاعتراض يستغرق ثوان ويسجل في الأرشيف |
| Lyric heading | Lyric للمتقدم: مساعدة في اللحظات الصعبة |
| Lyric intro | يستخدم مسؤول التوظيف Tempo طوال اليوم ويحتاج معلومات كثيرة في مساحة صغيرة. أما المتقدم فيفتح Lyric في لحظات متوترة (وهو يقدم، أو ينتظر، أو بعد الرفض)، لذلك يحتاج Lyric أن يكون واضحا وهادئا. |
| 01 | **بعد الرفض، ننظر للأمام.** يصل الرفض كإشعار رسمي. دور Lyric بعده أن يعرض وظائف أنسب، لا أن يكرر الخبر السيئ. |
| 02 | **اقتراحات، لا انتقاد.** لا يقول Lyric "سيرتك الذاتية ضعيفة"، بل يوضح ما يبحث عنه أصحاب هذه الوظائف، ويسأل المتقدم إن كان يريد إضافته. والقرار للمتقدم. |
| 03 | **تحضير لهذه الوظيفة، لا قالب جاهز.** التحضير للمقابلة مبني على الوظيفة والشركة نفسها، فيبدو كمساعدة من شخص يفهم الموقف. |
| `lyric-roles` | alt: Lyric: وظائف مشابهة بعد الرفض · caption: بعد الرفض، Lyric ينظر للأمام |
| `lyric-profile` | alt: Lyric: اقتراحات لتحسين الملف الشخصي · caption: اقتراحات، لا انتقاد |
| `lyric-prep` | alt: Lyric: تحضير للمقابلة خاص بالوظيفة · caption: تحضير مبني على هذه الوظيفة، لا قالب جاهز |
| Design system | **نظام تصميم واحد بصوتين.** كان على Tempo وLyric أن يشعر كل منهما مستخدمه بأنه مختلف، مع أنهما يخرجان من نظام تصميم واحد. الأساس مشترك: المكونات والتوكنز وقواعد الإتاحة نفسها. وفوقه لكل مساعد صوته: اللون، وكثافة المعلومات، والحركة، وأسلوب كتابة الذكاء الاصطناعي. وأي مكون جديد يضاف مرة واحدة، بشكل لـ Tempo وشكل لـ Lyric. |
| `two-voices` | alt: نظام التصميم: المكونات نفسها بمعالجتين للون · caption: المكونات نفسها، بصوتين |
| ما تعلمته 01 | **مخرجات الذكاء الاصطناعي جزء من التصميم.** أصعب القرارات لم تكن الشاشات، بل ماذا يقول الذكاء الاصطناعي، ومتى يصمت، وماذا يظهر أولا. |
| 02 | **طرفان يعني تصميما يراعي التعارض.** أحيانا يقف مسؤول التوظيف والمتقدم على طرفين متعاكسين في القرار نفسه. التصميم الأمين للطرفين يعني أن نقبل هذا التعارض، لا أن نخفيه. |
| 03 | **وايرفريمات فريق الأعمال بداية جيدة.** بدأنا من وايرفريمات أعدها فريق الأعمال. لم تكن تصميما، بل تفكيرا في المنتج على الورق، ووفرت أسابيع من النقاش للوصول إلى اتفاق. وكان عملنا تحويل هذا المنطق إلى نظام قابل للتنفيذ. |
| الحالة | يعمل حاليا على الويب والجوال. تفاصيل الشركة وطريقة بناء الذكاء الاصطناعي سرية، ويسعدني شرح العمل في مقابلة. |

**EN fix:** the `tempo-disagree` caption becomes "Disagreeing takes seconds and lands in the audit trail". "ten seconds" is a number we can't back up.

Update the `AR:` comments in `duet.mdx` to match, or delete them, since the AR page is the source now.

#### Praxa (`ar/work/praxa/page.tsx`)

| Part | AR |
|---|---|
| meta description | منصة ويب تستخدمها عيادات الصحة النفسية في أمريكا: لوحات تحكم حسب الدور، وجدولة، وملفات مرضى، وذكاء اصطناعي يوافق عليه المعالج، وتحكم بالصوت. |
| OG description | منصة ويب لعيادات الصحة النفسية في أمريكا: الإدارة والمعالج والمريض والموظفون، مع ذكاء اصطناعي يوافق عليه المعالج. |
| intro | منصة ويب تستخدمها عيادات الصحة النفسية في أمريكا لإدارة يومها: المواعيد، والمرضى، والمعالجين، والفواتير والتأمين، والتقارير. تخدم أربعة أدوار (الإدارة، والمعالج، والمريض، والموظفون)، وتعمل في أكثر من 50 عيادة في أمريكا. وأنا المصممة الوحيدة للمنتج. |
| metadata | دوري: المصممة الوحيدة للمنتج · المنصة: ويب · الحالة: يعمل حاليا في أمريكا |
| hero alt | Praxa، لوحة تحكم المعالج ومراجعة مسودة الذكاء الاصطناعي |
| NDA note | تم تغيير الاسم والتفاصيل، وأعيد رسم كل الشاشات لدراسة الحالة هذه. الأسماء والأرقام داخل الشاشات للتوضيح فقط. |
| منتج واحد لأربعة أدوار | تستخدم الإدارة والمعالج التنقل والمكونات والبيانات نفسها، لكن كلا منهما يفتح على صفحة رئيسية مختلفة. ترى الإدارة العمل كله وما يحتاج انتباها، ويرى المعالج جلسات اليوم والمريض التالي. |
| admin / provider captions (alt = "الصفحة الرئيسية لـ" + caption) | الإدارة: أرقام اليوم وما يحتاج انتباها · المعالج: جدول اليوم والمريض التالي ومسودات الذكاء الاصطناعي |
| المواعيد | الأسبوع ملون حسب نوع الزيارة، وفيه خط يوضح الوقت الحالي، وتفاصيل الموعد بجانب التقويم، فتتم الجدولة دون مغادرة الصفحة. · caption: عرض الأسبوع مع تفاصيل الموعد بجانبه |
| ملف المريض | كل ما يراجعه المعالج قبل الجلسة في شاشة واحدة: الموعد القادم، والتشخيص، والأدوية، والملاحظات بالترتيب. وكل ما كتبه الذكاء الاصطناعي عليه علامة توضح من وافق عليه. · caption: نظرة عامة على الملف، مع محتوى الذكاء الاصطناعي الذي تمت الموافقة عليه |
| ذكاء اصطناعي يوافق عليه المعالج | يكتب الذكاء الاصطناعي مسودة التشخيص من الجلسة. يوضح كل جزء مصدره، ويقبل المعالج كل جزء أو يعدله على حدة، ولا يدخل شيء إلى الملف قبل مراجعة كل الأجزاء. · caption: كل جزء يوضح مصدره، والموافقة تنتظر حتى تتم مراجعة كل الأجزاء |
| التقارير | المواعيد المكتملة كل أسبوع، وأنواع الزيارات، ومقارنة العيادات جنبا إلى جنب. · caption: الاتجاه الأسبوعي، وأنواع الزيارات، ومقارنة العيادات |
| التحكم بالصوت | يستطيع المعالج التحكم في لوحة التحكم بصوته. وإذا انطبق الأمر على أكثر من مريض، يطلب منه Praxa أن يختار بدلا من أن يخمن. |
| video caption + aria | "Open Sarah Johnson's profile": نتيجتان، يقول المعالج "one"، فيفتح الملف |
| `voice2` | alt and caption: نتيجتان بأرقام واضحة، وكل ما عداهما يخفت |

#### Ulfa hub (`ar/work/ulfa/page.tsx`)

| Part | AR |
|---|---|
| meta description | تصميم تطبيق جوال بالعربي والإنجليزي لجلسات الصحة النفسية في مجموعات صغيرة: تطبيق المشارك، والجلسات المباشرة، واستوديو الميسر، ونظام التصميم. |
| OG description | تصميم تطبيق جوال بالعربي والإنجليزي لجلسات الصحة النفسية في مجموعات صغيرة. |
| intro | the `ulfa` summary from A2 |
| metadata | دوري: تصميم المنتج وإدارته · المنصة: تطبيق جوال · عربي وإنجليزي · النطاق: رحلة المشارك ورحلة الميسر |
| hero alt | ألفة، شاشات تطبيق المشارك والميسر |
| NDA note | تم تغيير الاسم والتفاصيل، وأعيد رسم كل الشاشات لدراسة الحالة هذه. |
| التحدي | منتج واحد لجمهورين: مشارك يحتاج أن يشعر بالأمان من أول شاشة، وميسر يحتاج أن يدير مواعيده وأرباحه بسهولة. وكل ذلك بلغتين، وفي موضوع حساس مثل الصحة النفسية. |
| principles | هادئ وسهل القراءة · ألوان هادئة، وتباين أعلى من AA في الوضعين الفاتح والداكن. / بلغتين من البداية · كل شاشة مصممة بالعربي والإنجليزي، وليست مترجمة لاحقا. / الموافقة قبل الدخول · تقرأ القواعد والخصوصية قبل الجلسة، لا أثناءها. |
| studies heading | أربع دراسات · كل دراسة تركز على جزء من المنصة. |
| study cards | تطبيق المشارك · من الاستكشاف والانضمام حتى صفحة جلساتي. / الجلسة المباشرة · من غرفة الانتظار حتى ما بعد الجلسة. / استوديو الميسر · التقويم، والورشة، والمحفظة، وتحويل الأرباح. / نظام التصميم · 4 ألوان في الوضعين الفاتح والداكن. |
| card link | اقرأ الدراسة |

#### Ulfa studies: Arabic body (screenshot `review-2/01`)

**What's wrong:** `/ar/work/ulfa/[study]` renders the English MDX. The Arabic intro sits above the English one, and every caption is in English.

**Fix:**
- Add `introAr` to each study's frontmatter.
- Add a `captionAr` prop to every `<PhoneGrid>`.
- The AR route passes `locale="ar"` through the MDX components: it renders `introAr` and `captionAr`, and **no English paragraph**.

| Study | `introAr` |
|---|---|
| participant-app | رحلة المشارك، من العثور على دائرة حتى الانضمام إلى جلسة. الرحلة نفسها في المنتج الأصلي، ببطاقات أبسط وألوان أهدأ، وكل شاشة بالعربي والإنجليزي. |
| live-session | غرفة الانتظار والجلسة نفسها بتصميم داكن عن قصد، لأن أغلب الجلسات في المساء. يختار المشارك الدخول والميكروفون والكاميرا مغلقان، والخروج هادئ ولا يسأله أحد عن السبب، وبعد الجلسة سؤال بسيط عن شعوره وطريق للحصول على الدعم. |
| facilitator-studio | كل ما يحتاجه الميسر في أربع شاشات، مبنية من مكونات تطبيق المشارك نفسها. ألوان أنواع الجلسات واحدة في التقويم والبطاقات والرسوم البيانية. والتنبيهات هادئة لا تهديدية، والرسوم تظهر قبل التأكيد. |
| design-system | يختار المستخدم لونا من أربعة، والوضع الفاتح أو الداكن، واللغة. تأخذ كل الشاشات ألوانها من التوكنز نفسها، فيطبق أي اختيار على التطبيق كله دون إعادة تصميم أي شاشة. أي 8 حالات من تصميم واحد. |

`captionAr`, in MDX order:

| Study | Captions |
|---|---|
| participant-app | 1. الاستكشاف: بطاقة أبسط، والميسر وتقييمه، وإجراء واحد واضح<br>2. تفاصيل الجلسة: أهم المعلومات في مربع واحد، والجدول بالترتيب، والسعر والزر ثابتان في الأسفل<br>3. قبل البدء: الخصوصية، وعدم التسجيل، وإمكانية المغادرة في أي وقت، كل ذلك قبل الانضمام<br>4. تم الانضمام: تأكيد واضح، والمبلغ المدفوع، وإضافة الجلسة للتقويم<br>5. جلساتي: نوع الجلسة وحالتها في الأعلى، وزر "انضم الآن" للجلسة المباشرة فقط |
| live-session | 1. غرفة الانتظار: عد تنازلي، وتفاصيل الجلسة، وطريقة الانضمام<br>2. أثناء الجلسة: الميسر في الأعلى والمشاركون في شبكة. إطار أخضر لمن يتحدث، وذهبي لمن رفع يده، وأزرار تحكم مكتوب عليها اسمها<br>3. المغادرة: تأكيد هادئ، ويمكن العودة ما دامت الجلسة مستمرة<br>4. بعد الجلسة: الشعور الآن، وتقييم، وملاحظة خاصة للميسر، ورابط للدعم |
| facilitator-studio | 1. التقويم: نقطة لكل نوع جلسة، وجلسات اليوم المختار بالوقت والمقاعد<br>2. إدارة الورشة: ملخص قصير، والتسجيل الأسبوعي، وتنبيه هادئ عن الالتزام بالموعد<br>3. المحفظة: المتاح، وما في الطريق، وتحويل لم ينجح مع توضيح ما يجب فعله<br>4. طلب تحويل: المبلغ، والوجهة، والرسوم قبل التأكيد بالرمز السري |
| design-system | 1. المظهر: اللون والوضع واللغة، مع معاينة مباشرة |

**Alt text:** translate each `PhoneImage` alt the same way. Example: "Appearance settings in Arabic dark" → "إعدادات المظهر بالعربي، الوضع الداكن".

**`ulfa-color-table.tsx` in AR:**
- Headers: الثيم · الأساسي (فاتح) · مع نص أبيض · الأساسي (داكن) · مع نص داكن.
- Names: أزرق رمادي · أخضر · وردي · عسلي.

Delete the old `AR:` comments in the four MDX files once `introAr` exists.

---

## B. Quote page: `/quote` and `/ar/quote` (boards 39–45)

Every "Get a quote" / "اطلب عرض سعر" goes here:
- the header and the mobile menu
- the hero
- "What I do"
- contact
- the empty state on `/work`

This replaces all the `mailto:` quote links. Today they send different subjects and bodies.

### B1. Layout and copy

**Layout:**
- **Desktop:** a 5/7 grid. The start column holds:
  - the eyebrow, H1 and lead;
  - a Noon tile (`noon-point.svg` on `#E6F4F3`) with the "What happens next" steps;
  - "Prefer email?" with the address and a copy button.

  The column is sticky at `top: 120px`. The form card sits on the end side.
- **Mobile:** the heading, then the form, then the steps, then the email line.
- The form card is radius 28, 1px `line` border, padding 36px (22/18 on mobile).
- Inputs:
  - 52px tall, radius 14, 2px `line` border. The border is `ink` once filled.
  - The textarea is at least 112px tall.
  - Labels are 15px, weight 600. Optional fields show "(optional)" / "(اختياري)" in `subtle`.
- Choice pills are 44px:
  - Services are multi-select, with a checkbox inside.
  - Language and start time are single-select.
  - Selected is `ink` fill with `bg` text.
- Submit: a 56px yellow full-width button with the arrow. Under it, the privacy line with a lock icon.

**Copy:**

| Element | EN | AR |
|---|---|---|
| Eyebrow | Get a quote | اطلب عرض سعر |
| H1 | Tell me about your project | أخبرني عن مشروعك |
| Lead | A few details are enough to start. I'll read your request myself and reply by email. | بعض التفاصيل تكفي للبداية. سأقرأ طلبك بنفسي وأرد عليك بالإيميل. |
| Steps title | What happens next | ماذا يحدث بعد ذلك |
| Steps | 1 You send the details · 2 I review them and reply with any questions · 3 You get a quote that fits what the project needs | ترسل تفاصيل مشروعك · أراجعها وأرد عليك بأي أسئلة · يصلك عرض سعر يناسب احتياج المشروع |
| Name* | Your name | الاسم |
| Email* | Email | الإيميل |
| Phone | Phone or WhatsApp (optional) · placeholder +20 10 0000 0000 | رقم الجوال أو واتساب (اختياري) · placeholder +966 50 000 0000 |
| Services* | What do you need? · Brand identity · Website or landing page · App or web platform · Design system · Something else | ما الخدمة التي تحتاجها؟ · هوية بصرية · موقع أو صفحة هبوط · تطبيق أو منصة ويب · نظام تصميم · شيء آخر |
| Company | Company or project name (optional) · placeholder Acme Studio | اسم الشركة أو المشروع (اختياري) · placeholder مثال: متجر الورد |
| Language | Language (optional) · Arabic · English · Both | اللغة (اختياري) · عربي · إنجليزي · الاثنين |
| Start | When would you like to start? (optional) · As soon as possible · Within a month · Later · Not sure yet | متى تريد أن تبدأ؟ (اختياري) · في أقرب وقت · خلال شهر · لاحقا · غير محدد |
| Budget | Approximate budget (optional) · placeholder Amount and currency | الميزانية التقريبية (اختياري) · placeholder المبلغ والعملة |
| Notes | Anything else I should know? (optional) · placeholder Links, references, deadlines… | أي تفاصيل أخرى تريد إضافتها؟ (اختياري) · placeholder روابط، أمثلة تعجبك، مواعيد مهمة… |
| Submit | Send request | أرسل الطلب |
| Sending | Sending… | جار الإرسال… |
| Privacy | Your details come only to me and are used only to reply to you. | بياناتك تصلني أنا فقط، وتستخدم للرد عليك فقط. |
| Email line | Prefer email? hello@nourawafik.com · Copy email | تفضل الإيميل؟ hello@nourawafik.com · انسخ الإيميل |

**Field rules:**
- The email and phone inputs are `dir="ltr"`, and right-aligned in AR.
- The phone field is `type="tel"`, `autocomplete="tel"`.
- Name and email use `autocomplete="name"` and `autocomplete="email"`.

**Validation:**
- Check on submit, then on blur.
- The message sits under the field with an icon, `role="alert"`. The red is `#C23B3B` in light and `#FF8A80` in dark (board 41). Move focus to the first invalid field.

| Field | EN | AR |
|---|---|---|
| Name empty | Enter your name | اكتب اسمك |
| Email invalid | Enter an email like name@company.com | اكتب إيميل صحيح، مثل name@company.com |
| No service | Choose at least one | اختر خدمة واحدة على الأقل |

**URL pre-fill:**
- `?service=brand|site|app|ds|other` pre-selects that service.
- `?notes=` pre-fills the notes field (used by the `/work` empty state).

**Success (boards 44–45):**
- The form is replaced in place by a card: `noon-celebrate.svg` on `#E6F4F3`, the heading, the line, and two buttons.
- Focus moves to the heading, which has `role="status"`.

| | EN | AR |
|---|---|---|
| Heading | Thanks, {name}. Your request is with me | شكرا {name}، وصلني طلبك |
| Line | I'll read it and reply to {email}. If you don't see my reply, check your spam folder. | سأقرأه وأرد عليك على {email}. لو لم يظهر ردي، راجع مجلد الرسائل غير المرغوب فيها. |
| Buttons | See my work (yellow) · Back to home (outline) | شاهد أعمالي · العودة للرئيسية |

**Send error:** show a banner above the submit button. Keep everything the visitor typed.
- EN: "Your request couldn't be sent. Please email me at hello@nourawafik.com." with a "Copy email" button.
- AR: "تعذر إرسال الطلب. راسلني مباشرة على hello@nourawafik.com" with "انسخ الإيميل".

**SEO:**

| | EN | AR |
|---|---|---|
| Title | Get a quote — Noura Wafik | اطلب عرض سعر، نورا وفيق |
| Description | Tell me about your brand, website or product, in Arabic, English or both. | أخبرني عن هويتك البصرية أو موقعك أو منتجك، بالعربي أو الإنجليزي أو الاثنين. |

Add `/quote` and `/ar/quote` to the sitemap. The language switch on this page keeps it.

### B2. Sending (free, Cloudflare only)

**Already in place:** `nourawafik.com` already receives mail through **Cloudflare Email Routing** (its MX records are `route1/2/3.mx.cloudflare.net`). Sending a Worker email to a **verified destination address** is free on the Workers Free plan. Read the current docs before coding: Email Routing → "Send emails from Workers", and the Email Service `send_email` binding.

**Server:**
- A `POST` route (`/api/quote`) in the app, running on the OpenNext Worker.
- **Validate on the server** too:
  - name: 1–100 characters
  - email: valid format
  - services: 1+ from the list
  - each optional field: max 200 characters; notes: max 2000
  - a hidden honeypot field (`website`) must be empty
- **Turnstile** (free): render the widget in managed mode before the submit button, in the page language. Verify the token on the server with `siteverify`.
  - Site key: `NEXT_PUBLIC_TURNSTILE_SITE_KEY`.
  - Secret: `TURNSTILE_SECRET_KEY`, a Worker secret that Noura adds herself.
- **The email itself:** use a `send_email` binding, `QUOTE_EMAIL`, with `destination_address` set to the destination address that's verified in Noura's Email Routing.
  - From: `website@nourawafik.com`.
  - Reply-To: the visitor's email, so Noura can just press reply.
  - Subject: `طلب عرض سعر جديد / New quote request: {name}`.
  - Plain-text body: every field with its label, the page language, and the time in Africa/Cairo.
- **Nothing is stored:** no database and no logs of the content.

**Stop and ask Noura** before:
- Creating the Turnstile widget. She creates it in her dashboard (free), for `nourawafik.com` plus the `workers.dev` preview host, and adds the secret with `wrangler secret put`.
- Choosing the verified destination address. She confirms which one it is.
- Any step that says it needs Workers Paid, Email Sending onboarding with a cost, or a payment method. If sending to a verified address turns out to need anything paid, stop. Don't switch to another provider without her OK.

**Test:** on the `workers.dev` preview, send one request in AR and one in EN. Noura confirms she received both, and that Reply goes to the visitor's address.

## C. Social links: one list, each one shown or hidden

Move the footer and JSON-LD links into `src/content/social.ts`:

```ts
export const social = [
  { id: 'linkedin',  label: 'LinkedIn',  href: 'https://linkedin.com/in/nourawafik', visible: true  },
  { id: 'behance',   label: 'Behance',   href: 'https://www.behance.net/nourawafik', visible: false },
  { id: 'instagram', label: 'Instagram', href: '',                                    visible: false },
];
```

- The footer renders only `visible` links, plus the CV ("السيرة الذاتية" / "CV").
- JSON-LD `sameAs` uses the same `visible` links.
- Turning Behance on later is a one-line change.

## D. Review fixes

### D1. Home project cards use `work.ts` (screenshot `review-2/02`)

`selected-work.tsx` still has its own card data, from `case-studies.ts`:
- The Duet card shows a **"present–2025"** tag. No year may be published.
- Praxa shows "مصممة منفردة".
- The AR summaries are the old Egyptian ones.

**Fix:**
- Build the home cards from `work.ts` (`featured`), with the same tags as the library cards.
- Remove the `timeline` tag everywhere. Also clear `timeline: "2025–present"` in `case-studies.ts`.

### D2. Ulfa study pages: back and next are swapped in AR

On `/ar/work/ulfa/[study]`:
- "العودة إلى ألفة" sits on the left and the next study on the right.
- In RTL, **back goes on the start side (right)** and **next on the end side (left)**, with the arrows as they are now.

### D3. About section on mobile (screenshot `review-2/03`)

The three trait cards scroll sideways and get cut off with no hint. **Below `md`, stack them** in one column, 12px gap.

### D4. Contact block on mobile

Noon sits under the button with about 200px of empty yellow around it.
- On mobile, put Noon **above** the heading, 120px wide, aligned to the start side.
- Block padding 24px.

### D5. Site title and description (all pages)

They still say "Currently open to full-time roles" / "متاحة للوظائف بدوام كامل", and the AR OG text mentions working for a UAE company. That doesn't fit the business and shouldn't be public.

| | EN | AR |
|---|---|---|
| Title | Noura Wafik — Product and brand designer, Arabic and English | نورا وفيق، مصممة منتجات وهويات بصرية بالعربي والإنجليزي |
| Description and OG | Brand identities, websites and digital products designed in Arabic and English from the start. A product and brand designer in Cairo, for companies in Egypt and the Gulf. | هويات بصرية ومواقع ومنتجات رقمية مصممة بالعربي والإنجليزي من البداية. مصممة منتجات وهويات من القاهرة، للشركات في مصر والخليج. |
| `/work` | (keep) | Title: أعمال نورا وفيق، مصممة منتجات وهويات بصرية · Description: تطبيقات جوال ومنصات ويب وأنظمة تصميم بالعربي والإنجليزي، في مجالات الصحة والتوظيف وغيرها. |

JSON-LD: `jobTitle: 'Product and brand designer'`.

## E. Things not to change

- `public/resume.pdf`.
- The Noon SVG animations and their timing.
- The EN copy, except the four fixes:
  - the Duet summary
  - the `tempo-disagree` caption
  - `askLine` / `askBtn`
  - the meta titles and descriptions

## F. Check

At 1440 and 390, light and dark, EN and AR:

- [ ] No Egyptian dialect left in AR. The search in §A comes back empty, and there's no shadda.
- [ ] The AR study pages show no English paragraphs or captions.
- [ ] Back and next on the AR study pages are on the correct sides.
- [ ] No year or timeline tag on any card.
- [ ] Every "Get a quote" goes to `/quote` or `/ar/quote`.
- [ ] Pre-fill works from "What I do" and from the `/work` empty state.
- [ ] The form validates, shows the success card, and Noura gets both test emails with a working Reply.
- [ ] The footer shows LinkedIn and the CV only.
- [ ] Mobile: the about traits are stacked, and the contact block matches §D4.
- [ ] The title and description no longer mention job hunting.
