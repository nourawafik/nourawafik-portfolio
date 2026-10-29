# Final copy, product-first order, launch and domain

This replaces section A of `fix-launch.md` for everything it covers. Noura reviewed every Arabic string, and the tables below are **final**: use them exactly, word for word.

**Order of work:**
1. `fix-form.md` (form typing bug, fields, copy-icon button, sending code)
2. This file, parts A–C
3. Part D, the launch

Don't deploy to production before part D.

**Rules for every string:**
- No tashkeel (no shadda, no tanween, no harakat).
- No Egyptian dialect.
- Replace the old strings. Don't keep the old ones next to the new.

**Searches to run when done:**
- No Egyptian dialect: search `src/` for `بيت|بتت|عايز|إيه|مش |لحد|اللي|دلوقتي|كمان|يلا|بتاع|اتعاد|بيدي|جوه|شوف |اقرا |الأدمن|الداشبورد|الترند|وظايف|تمبليت|اللايف|موبايل`. Nothing user-facing may match.
- No tashkeel: search for `[ً-ْ]`. Nothing may match.

---

## A. Final Arabic copy

**What "(no change)" and "DELETE" mean:**
- "(no change)" means keep the current text.
- "DELETE" means remove the element.

**Rules that go with the tables:**
- **Hero:** delete the small tag row above the H1 (it repeats the marquee).
- **Marquee:** the items become تصميم منتجات · مواقع بلغتين · هوية بصرية · أنظمة تصميم. "Social content" is removed. EN: Product design · Bilingual websites · Brand identity · Design systems.
- **About:** the three trait cards become the three cards in the table. Cards 2 and 3 are facts, so style the first part (before the `·`) as the card title and the rest as the line under it.
  - EN card 2: "50+ clinics · use Praxa, a platform I helped design, in the US".
  - EN card 3: "6+ years · designing digital products and brand identities for markets in Egypt, the Gulf and the US".
  - EN card 1: "Arabic and English · Arabic designed from the start, not a translation of an English interface."
  - The years number stays computed from `DESIGNING_SINCE`.
- **Duet:** delete the whole "Status" section ("الحالة"), **in AR and in EN**. EN loses "…I'm happy to talk through the work in an interview." too.
- **Ulfa study pages in AR:**
  - Render `introAr` and the `captionAr` captions only.
  - **No English paragraph or English caption** may appear.
  - The meta description is `introAr`, shortened to under 160 characters.
- **Image alts on AR pages:** in Arabic, using the caption text where one exists.
- **Praxa, role wording:** Noura changed the Arabic. Don't change the English Praxa role or intro until she confirms.

### الصفحة الرئيسية

| Where | Final Arabic |
|---|---|
| الكلمات الصغيرة فوق العنوان | **DELETE.**  |
| العنوان | (no change) اجعل فكرتك ترى النور. |
| تحت العنوان | منتجات رقمية ومواقع وهويات بصرية بالعربي والإنجليزي، للشركات الناشئة والشركات التي تتوسع في مصر والخليج. |
| الشريط المتحرك | تصميم منتجات · مواقع بلغتين · هوية بصرية · أنظمة تصميم |
| عنوان الأعمال | مشاريع حقيقية لعملاء حقيقيين |
| كارت Duet | منصة توظيف بطرفين، فيها مساعد ذكاء اصطناعي لمسؤول التوظيف وآخر للمتقدم. |
| عنوان «ماذا أقدم» | من المنتج الرقمي إلى الهوية البصرية |
| ترتيب الكروت | منتجات رقمية · أنظمة تصميم · مواقع وصفحات هبوط · هوية بصرية |
| كارت أنظمة التصميم | مكونات وقواعد ثابتة تحافظ على شكل المنتج، وقابلة للتوسع. |
| كارت الهوية والمواقع والمنتجات | (no change) شعار وألوان وخطوط… / مواقع بلغتين… / تطبيقات ويب وجوال… |
| أول جملة في «عني» | مصممة منتجات رقمية وهويات بصرية من القاهرة، بخبرة أكثر من 6 سنوات. |
| باقي «عني» | أجمع بين التفكير التصميمي والخبرة التقنية وفهم التسويق لتطوير هويات بصرية وتجارب رقمية متكاملة، من البحث وتحديد الاحتياجات إلى تصميم واجهات جاهزة للتطوير. أحرص على أن يكون كل تصميم قابلا للتنفيذ، ومتسقا مع أهداف المشروع، ومصمما ليلائم جمهوره. |
| كارت 1 في «عني» | التصميم باللغة العربية والإنجليزية · تصميم عربي من الأساس، وليس مجرد ترجمة لواجهة إنجليزية. |
| كارت 2 في «عني» | أكثر من 50 عيادة · تستخدم منصة Praxa التي ساهمت في تصميمها، في الولايات المتحدة. |
| كارت 3 في «عني» | أكثر من 6 سنوات · في تصميم المنتجات الرقمية والهويات البصرية، عبر أسواق مصر والخليج والولايات المتحدة. |
| التواصل | (no change) هل لديك فكرة؟ لنتحدث. · أرسل لي سطرين عن مشروعك وسأرد عليك بنفسي. |
| زرار الإيميل | انسخ الإيميل |
| وصف صور المشاريع (لقارئ الشاشة) | ألفة: شاشة الاستكشاف · Praxa: لوحة تحكم المعالج ومسودة الذكاء الاصطناعي · Duet: شاشة مسؤول التوظيف بالدرجة وأسبابها |

### صفحة الأعمال

| Where | Final Arabic |
|---|---|
| العنوان | (no change) منتجات ومنصات ومواقع، بلغتين |
| المقدمة | مشاريع صممتها من الفكرة الأولى حتى الشاشات الجاهزة للتنفيذ. ابحث عما تحتاجه، أو اختر نوع العمل. |
| زرار الفلاتر | تصفية |
| وصف جوجل | تطبيقات جوال ومنصات ويب وأنظمة تصميم بالعربي والإنجليزي، في مجالات الصحة والتوظيف وغيرها. |
| عنوان جوجل | أعمال نورا وفيق، مصممة منتجات وهويات بصرية |
| لما مفيش نتايج | (no change) لم أجد "{الكلمة}" في أعمالي حتى الآن · جرب كلمة أخرى، أو اختر موضوعا من هذه: |

### ألفة: الصفحة الرئيسية للمشروع

| Where | Final Arabic |
|---|---|
| المقدمة | تطبيق جوال بالعربي والإنجليزي، يجمع الناس مع ميسرين متخصصين في الصحة النفسية، في دوائر صغيرة وجلسات منظمة. |
| دوري / المنصة / النطاق | تصميم المنتج · تطبيق جوال · عربي وإنجليزي · رحلة المشارك ورحلة الميسر |
| ملاحظة السرية | تم تغيير الاسم والتفاصيل، وأعيد رسم الشاشات لدراسة الحالة هذه. |
| التحدي | منتج واحد لجمهورين: مشارك يحتاج أن يشعر بالأمان من أول شاشة، وميسر يحتاج أن يدير مواعيده وجلساته وأرباحه بسهولة. وكل ذلك بلغتين، في موضوع حساس مثل الصحة النفسية. |
| مبدأ 1 | هادئ وسهل القراءة · ألوان هادئة، وتباين يتجاوز معيار AA في الوضعين الفاتح والداكن. |
| مبدأ 2 | بلغتين من البداية · كل شاشة مصممة بالعربي والإنجليزي، وليست مترجمة لاحقا. |
| مبدأ 3 | الموافقة قبل الدخول · تقرأ القواعد وسياسة الخصوصية قبل الجلسة، لا أثناءها. |
| عنوان الدراسات | أربع دراسات · كل دراسة تركز على جزء من التطبيق. |
| تطبيق المشارك | من الاستكشاف والانضمام حتى صفحة جلساتي. |
| الجلسة اللايف | الجلسة المباشرة · من غرفة الانتظار حتى ما بعد الجلسة. |
| استوديو الميسر | التقويم، وإدارة الجلسات، والمحفظة، وتحويل الأرباح. |
| نظام التصميم | 4 ألوان في الوضعين الفاتح والداكن. |
| رابط الكروت | اقرأ الدراسة |
| وصف جوجل | تصميم تطبيق جوال بالعربي والإنجليزي لجلسات الصحة النفسية في مجموعات صغيرة: تطبيق المشارك، والجلسات المباشرة، واستوديو الميسر، ونظام التصميم. |

### دراسات ألفة الأربعة

| Study | `introAr` |
|---|---|
| تطبيق المشارك | رحلة المشارك، من العثور على دائرة حتى الانضمام إلى جلسة. الرحلة نفسها في المنتج الأصلي، ببطاقات أبسط وألوان أهدأ، وكل شاشة بالعربي والإنجليزي. |
| الجلسة المباشرة | غرفة الانتظار والجلسة نفسها بتصميم داكن عن قصد، لأن أغلب الجلسات في المساء. يدخل المشارك والميكروفون والكاميرا مغلقان إذا أراد، ويغادر دون أن يسأله أحد عن السبب، وبعد الجلسة سؤال بسيط عن شعوره وطريق للحصول على الدعم. |
| استوديو الميسر | كل ما يحتاجه الميسر في أربع شاشات، بمكونات تطبيق المشارك نفسها. لكل نوع جلسة لون واحد في التقويم والبطاقات والرسوم البيانية. التنبيهات هادئة وليست تهديدية، والرسوم تظهر قبل تأكيد التحويل. |
| نظام التصميم | يختار المستخدم لونا من أربعة، والوضع الفاتح أو الداكن، واللغة. كل الشاشات تأخذ ألوانها من متغيرات التصميم نفسها (Tokens)، فينطبق أي اختيار على التطبيق كله دون إعادة تصميم أي شاشة. أي 8 حالات من تصميم واحد. |

**Image captions (`captionAr`, in MDX order):**

| Study | English now | Final Arabic |
|---|---|---|
| المشارك | Explore: a simpler card, the facilitator and their rating, and one clear action | الاستكشاف: بطاقة أبسط، والميسر وتقييمه، وزر واحد واضح |
| المشارك | Session details: the key facts in one box, the schedule in order, price and action fixed at the bottom | تفاصيل الجلسة: أهم المعلومات في مربع واحد، والمواعيد بالترتيب، والسعر والزر ثابتان في الأسفل |
| المشارك | Before you start: privacy, no recording, and leave anytime, all before you join | قبل البدء: الخصوصية، ولا تسجيل، والمغادرة متاحة في أي وقت، كل ذلك قبل الانضمام |
| المشارك | Joined: a clear confirmation, what was paid, and add to calendar | تم الانضمام: تأكيد واضح، والمبلغ المدفوع، وإضافة للتقويم |
| المشارك | My sessions: session type and status on top, and Join now only for the live one | جلساتي: نوع الجلسة وحالتها في الأعلى، وزر "انضم الآن" للجلسة المباشرة فقط |
| المباشرة | Waiting room: a countdown, the session details, and how you join | غرفة الانتظار: عد تنازلي، وتفاصيل الجلسة، وطريقة الدخول |
| المباشرة | In session: the facilitator on top and participants in a grid. Green ring for speaking, gold for a raised hand, labelled controls | أثناء الجلسة: الميسر في الأعلى والمشاركون تحته. إطار أخضر لمن يتحدث، وذهبي لمن رفع يده، وكل زر مكتوب اسمه |
| المباشرة | Leaving: a calm confirmation, and you can come back while it runs | المغادرة: تأكيد هادئ، ويمكن العودة ما دامت الجلسة مستمرة |
| المباشرة | After the session: how you feel now, a rating, a private note for the facilitator, and a support link | بعد الجلسة: شعورك الآن، وتقييم، وملاحظة خاصة للميسر، ورابط للدعم |
| الاستوديو | Calendar: dots for each session type, and the selected day's sessions with time and seats | التقويم: نقطة لكل نوع جلسة، وجلسات اليوم المختار بالوقت وعدد المقاعد |
| الاستوديو | Manage a workshop: a short summary, weekly enrollment, and a calm note about being on time | إدارة الورشة: ملخص قصير، والتسجيل كل أسبوع، وتنبيه هادئ عن الالتزام بالموعد |
| الاستوديو | Wallet: what's ready, what's on the way, and a failed payout that says what to do | المحفظة: الرصيد المتاح، والمبالغ في الطريق، وتحويل لم ينجح مع توضيح ما يجب فعله |
| الاستوديو | Request a payout: amount, destination, and the fee before you confirm with your PIN | طلب تحويل: المبلغ، والحساب، والرسوم قبل التأكيد بالرمز السري |
| النظام | The same screen in all 8 contexts | الشاشة نفسها في الحالات الثماني |
| النظام | Appearance: color, mode and language, with a live preview | المظهر: اللون والوضع واللغة، مع معاينة مباشرة |
| النظام | Session type colors (workshop, ongoing, one-time) and Live stay the same in every theme, and every badge carries a word, not only a color. | ألوان أنواع الجلسات (ورشة، مستمرة، مرة واحدة) وشارة "مباشر" ثابتة في كل الثيمات، وكل شارة عليها كلمة وليس لونا فقط. |
| النظام | جدول الألوان: Theme · Light primary · White text · Dark primary · Dark text | الثيم · اللون الأساسي (فاتح) · مع نص أبيض · اللون الأساسي (داكن) · مع نص داكن. الأسماء: أزرق رمادي، أخضر، وردي، عسلي |

### Praxa

| Where | Final Arabic |
|---|---|
| المقدمة | منصة ويب تدير بها عيادات الصحة النفسية في الولايات المتحدة أعمالها: المواعيد، والمرضى، والمعالجين، والفواتير والتأمين، والتقارير. تخدم أربعة أدوار (الإدارة، والمعالج، والمريض، والموظفون)، وتستخدمها أكثر من 50 عيادة. |
| دوري / المنصة / الحالة | مصممة المنتج · ويب · مستخدمة حاليا في الولايات المتحدة |
| ملاحظة السرية | تم تغيير الاسم والتفاصيل، وأعيد رسم الشاشات لدراسة الحالة هذه. الأسماء والأرقام داخل الشاشات للتوضيح فقط. |
| منتج واحد لأربعة أدوار | تستخدم الإدارة والمعالج التنقل والمكونات والبيانات نفسها، لكن لكل منهما صفحة رئيسية مختلفة. ترى الإدارة العمل كله وما يحتاج انتباها، ويرى المعالج جلسات اليوم والمريض التالي. |
| تعليقا الصورتين | الإدارة: أرقام اليوم وما يحتاج انتباها · المعالج: جدول اليوم والمريض التالي ومسودات الذكاء الاصطناعي |
| المواعيد | الأسبوع ملون حسب نوع الزيارة، وفيه خط يوضح الوقت الحالي، وتفاصيل الموعد بجانب التقويم، فتتم الجدولة دون مغادرة الصفحة. · التعليق: عرض الأسبوع مع تفاصيل الموعد بجانبه |
| ملف المريض | كل ما يراجعه المعالج قبل الجلسة في شاشة واحدة: الموعد القادم، والتشخيص، والأدوية، والملاحظات بالترتيب. وكل ما كتبه الذكاء الاصطناعي عليه علامة توضح من وافق عليه. · التعليق: نظرة عامة على الملف، مع ما كتبه الذكاء الاصطناعي بعد الموافقة عليه |
| عنوان الذكاء الاصطناعي | ذكاء اصطناعي يوافق عليه المعالج |
| نص الذكاء الاصطناعي | يكتب الذكاء الاصطناعي مسودة التشخيص من الجلسة، ويوضح مصدر كل جزء. يقبل المعالج كل جزء أو يعدله على حدة، ولا يدخل شيء إلى الملف قبل مراجعة كل الأجزاء. · التعليق: كل جزء يوضح مصدره، والموافقة تنتظر مراجعة كل الأجزاء |
| التقارير | المواعيد المكتملة كل أسبوع، وأنواع الزيارات، ومقارنة العيادات جنبا إلى جنب. · التعليق: المواعيد كل أسبوع، وأنواع الزيارات، ومقارنة العيادات |
| التحكم بالصوت | يستطيع المعالج استخدام المنصة بصوته. وإذا انطبق الأمر على أكثر من مريض، يطلب منه Praxa أن يختار بدلا من أن يخمن. |
| تعليق الفيديو | أمر صوتي لفتح ملف مريضة اسمها مكرر: يعرض Praxa نتيجتين مرقمتين، ويختار المعالج الأولى فيفتح الملف |
| تعليق الصورة الأخيرة | نتيجتان بأرقام واضحة، وباقي الشاشة يخفت |
| وصف جوجل | منصة ويب لعيادات الصحة النفسية في أمريكا: لوحات تحكم حسب الدور، وجدولة، وملفات مرضى، وذكاء اصطناعي يوافق عليه المعالج، وتحكم بالصوت. |

### Duet

| Where | Final Arabic |
|---|---|
| المقدمة | منصة توظيف تقدم مساعد ذكاء اصطناعي مخصصا لكل طرف: Tempo لمسؤول التوظيف، وLyric للمتقدم. ساهمت ضمن فريق التصميم في تطوير التجربة على الويب والجوال، وتصميم تفاعلات الذكاء الاصطناعي ونظام التصميم. |
| دوري / المنصة / الحالة | مصممة منتج ضمن فريق التصميم · ويب وجوال · مستخدمة حاليا |
| ملاحظة السرية | تم تغيير الأسماء وبيانات الشركة، وأعيد رسم الشاشات لدراسة الحالة هذه. العمل الأصلي محمي باتفاقية سرية. |
| المشكلة | أغلب أدوات التوظيف بالذكاء الاصطناعي تعطي المتقدم درجة وتكتفي بذلك. يحصل مسؤول التوظيف على رقم لا يستطيع شرحه لمديره، ولا يصل المتقدم أي رد. يعطي Duet كل طرف مساعدا مصمما لعمله، والصعوبة أن الطرفين لا يريدان الشيء نفسه دائما. |
| عنوان Tempo | Tempo لمسؤول التوظيف: قرارات يستطيع الدفاع عنها |
| 01 | لا درجة بدون أسباب · لا يعرض Tempo الدرجة وحدها أبدا. أهم الأسباب بجانبها في الشاشة نفسها، فيستطيع المسؤول دائما أن يشرح السبب. |
| تعليق الفيديو | الدرجة لا تظهر وحدها، الأسباب تأتي معها |
| 02 | لغة مسؤول التوظيف، لا لغة النظام · الأسباب مكتوبة كما يتحدث مسؤولو التوظيف: "5 من 7 مهارات مطلوبة"، "7 سنوات في مجال المدفوعات". ويستطيع نسخها مباشرة في تحديث لمديره. |
| 03 | الاعتراض جزء من العمل · يستطيع المسؤول أن يوافق أو يعترض على أي اقتراح مع ذكر السبب، وكل قرار يسجل. الاعتراض جزء طبيعي من العمل، وليس خطأ. |
| تعليقا الصورتين | الدرجة والأسباب في شاشة واحدة · الاعتراض وسببه يحفظ في السجل |
| عنوان Lyric ومقدمته | Lyric للمتقدم: مساعدة في اللحظات الصعبة · يستخدم مسؤول التوظيف Tempo طوال اليوم ويحتاج معلومات كثيرة في مساحة صغيرة. أما المتقدم فيفتح Lyric في لحظات متوترة: عند التقديم، أو الانتظار، أو بعد الرفض. لذلك يحتاج Lyric أن يكون واضحا وهادئا. |
| 01 | بعد الرفض، ننظر للأمام · يصل الرفض كإشعار رسمي. ودور Lyric بعده أن يعرض وظائف أنسب، لا أن يكرر الخبر السيئ. |
| 02 | اقتراحات، لا انتقاد · لا يقول Lyric "سيرتك الذاتية ضعيفة"، بل يوضح ما يبحث عنه أصحاب هذه الوظائف، ويسأل المتقدم إن كان يريد إضافته. والقرار للمتقدم. |
| 03 | تحضير لهذه الوظيفة، لا قالب جاهز · التحضير للمقابلة مبني على الوظيفة والشركة نفسها، فيبدو كمساعدة من شخص يفهم الموقف. |
| تعليقات شاشات Lyric | وظائف أنسب بعد الرفض · اقتراحات لتحسين الملف · تحضير للمقابلة مبني على الوظيفة |
| نظام تصميم واحد بصوتين | كان لازما أن يشعر مستخدم كل مساعد بأنه مختلف، مع أن الاثنين مبنيان على نظام تصميم واحد. الأساس مشترك: المكونات وقواعد الإتاحة نفسها. ولكل مساعد صوته الخاص: اللون، وكثافة المعلومات، والحركة، وأسلوب الكتابة. · التعليق: المكونات نفسها، بصوتين |
| ما تعلمته 01 | كلام الذكاء الاصطناعي جزء من التصميم · أصعب القرارات لم تكن الشاشات، بل ماذا يقول الذكاء الاصطناعي، ومتى يصمت، وماذا يظهر أولا. |
| ما تعلمته 02 | طرفان مختلفان في منتج واحد · أحيانا يريد مسؤول التوظيف والمتقدم عكس بعضهما. التصميم الصادق مع الطرفين يعترف بهذا الاختلاف ولا يخفيه. |
| ما تعلمته 03 | مخططات فريق الأعمال بداية جيدة · بدأنا من مخططات أولية أعدها فريق الأعمال. لم تكن تصميما، بل تفكيرا في المنتج على الورق، ووفرت أسابيع من النقاش. وكان عملنا تحويلها إلى نظام قابل للتنفيذ. |
| قسم "الحالة" | **DELETE.** . الحالة مكتوبة فوق، والسرية في الملاحظة اللي تحت الصورة. ونفس الكلام يتشال من الإنجليزي. |

### صفحة طلب عرض السعر ونصوص صغيرة

| Where | Final Arabic |
|---|---|
| عنوان الصفحة في جوجل | اطلب عرض سعر، نورا وفيق |
| "اختياري" جنب الحقول | رقم الجوال أو واتساب (اختياري)، بمسافة قبل القوس في كل الحقول |
| المقدمة | (no change) بعض التفاصيل تكفي للبداية. سأقرأ طلبك بنفسي وأرد عليك بالإيميل. |
| الخطوات | (no change) ترسل تفاصيل مشروعك · أراجعها وأرد عليك بأي أسئلة · يصلك عرض سعر يناسب احتياج المشروع |
| زرار الإيميل | انسخ الإيميل، في المكانين |
| رسالة الشكر | (no change) شكرا {الاسم}، وصلني طلبك · سأقرأه وأرد عليك على {الإيميل}… |
| قائمة الجوال | (no change) جاهز للبدء؟ |
| الفوتر | (no change) LinkedIn · السيرة الذاتية |

---

## B. Products first: "What I do" cards and links

Noura's decision: the site leads with digital products. Brand identity and websites are offered too, but they show their work through the work library, not the quote form.

**Card order:** Digital products → Design systems → Websites & landing pages → Brand identity. Use the same order in EN.

**Every card links to `/work` (or `/ar/work`) with its filter. No card opens the quote form or `mailto`.**

| Card | Link |
|---|---|
| Digital products | `/work?type=mobile` is wrong (it hides web). Use `/work`. |
| Design systems | `/work?feature=ds` |
| Websites & landing pages | `/work?type=site` |
| Brand identity | `/work?type=brand` |

**Cards with no work yet (brand, site):**
- The link still goes to the filtered library.
- The library shows its empty state for that filter.
  - Heading: "No work here yet" / "لا توجد أعمال هنا حتى الآن".
  - Line: "New projects are on the way. In the meantime, tell me what you need." / "مشاريع جديدة في الطريق. حتى ذلك الحين، أخبرني بما تحتاجه."
  - The yellow button goes to `/quote?service=brand` (or `site`).
- A type chip hidden at count 0 must still work when it comes in the URL. Show it as the active chip, so the visitor sees which filter is on.

**The day a brand or website project is added to `work.ts`:**
- Its chip appears by itself.
- The card shows the work.
- Nothing else changes.

Check that this is true with a temporary test item, then remove the test item.

**aria-labels:** "{title}, see the work" / "{title}، شاهد الأعمال" on all four cards.

## C. Turnstile and email: tested at launch, not on the preview

Noura decided not to test the form on the `workers.dev` preview:
- The Turnstile widget only needs the hostnames `nourawafik.com` and `www.nourawafik.com`.
- Build everything from `fix-form.md` §3.
- On the preview, Turnstile is expected to fail. That's fine; don't ask Noura to add the preview host.
- The form is tested on the live domain in part D.

## D. Launch: connect nourawafik.com (Noura approved)

The old site runs on **Vercel**. The domain is registered at Cloudflare. **Email must keep working the whole time.**

### Before touching DNS

1. Everything in `fix-form.md` and in parts A–C is done.
2. Noura has checked the latest `workers.dev` preview and said it's OK.
3. Read the current DNS records for `nourawafik.com` in Cloudflare and list them for Noura.
   - **Never touch the MX records** (`route1/2/3.mx.cloudflare.net`) or the email TXT records (SPF, DKIM, DMARC). They carry `hello@nourawafik.com`.

### Switch

4. Deploy the Worker to production (`npm run deploy:cf` or the repo's equivalent), still on the free plan.
5. Attach `nourawafik.com` **and** `www.nourawafik.com` to the Worker as Custom Domains. Use `wrangler.jsonc` `routes` with `custom_domain: true`, or the dashboard.
   - Cloudflare replaces the A/CNAME records that point to Vercel.
   - If it asks to delete conflicting records, list exactly which ones first. Delete only A, AAAA or CNAME records for `@` and `www` that point to Vercel.
6. **Check:**
   - `https://nourawafik.com` and `/ar` load the new site.
   - `www` redirects to the apex.
   - HTTPS is valid.
   - The old links redirect: `/work/kemeclinic` → `/work/praxa`, `/work/got-ai` → `/work/duet`, `/work/dayratna` → `/work/ulfa`.
   - `/sitemap.xml` and `/robots.txt` are served.
   - `/resume.pdf` opens.

### Right after

7. **Form test on the live domain:**
   - Noura runs `npx wrangler secret put TURNSTILE_SECRET_KEY` herself, if she hasn't already.
   - Send one AR and one EN request. Noura confirms both arrived and that Reply goes to the visitor.
8. **Email check:** Noura sends a test email to `hello@nourawafik.com` from another account and confirms it arrives.
9. **Tell Noura to do these herself:**
   - Remove `nourawafik.com` from the old Vercel project, so Vercel stops serving it.
   - Submit `https://nourawafik.com/sitemap.xml` in Google Search Console.
   - Update the links on LinkedIn and in her CV when she's ready.
10. Update `docs/HANDBOOK.md`: the site is live on Cloudflare, Vercel is retired, and the launch date.

**If anything fails:** stop and tell Noura what failed. Don't change any other DNS record to fix it. To roll back, detach the custom domain, and the old records can be restored from the list made in step 3.
