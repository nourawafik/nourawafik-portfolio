// Hero audience switch: one paragraph per audience, per locale.
// A segment is plain text, or `{ code }` for a token or file name that renders
// in <code> (isolated LTR, so it reads correctly inside Arabic text).

export type AudienceSegment = string | { code: string };

export type Audience = {
  id: 'anyone' | 'recruiters' | 'directors' | 'founders' | 'product' | 'engineers';
  label: string;
  body: AudienceSegment[];
};

export const AUDIENCES: Record<'en' | 'ar', Audience[]> = {
  en: [
    {
      id: 'anyone',
      label: 'For anyone',
      body: [
        "Hello, I'm Noura. I design products that work as well in Arabic as they do in English. The Arabic version usually comes last and gets half the attention — that's the part I'm trying to change.",
      ],
    },
    {
      id: 'recruiters',
      label: 'Recruiters',
      body: [
        "I design SaaS products and design systems, and most of my work is bilingual. I live in Cairo and work remotely with teams in the Gulf. I'm not in a hurry, but I read every serious message and reply to it.",
      ],
    },
    {
      id: 'directors',
      label: 'Design Directors',
      body: [
        "I build the system before the screen. Every colour in it is contrast-checked, and behind every decision there's an alternative I rejected and can tell you why. If a project arrives with no direction, I come out of it with a written brief before I open Figma.",
      ],
    },
    {
      id: 'founders',
      label: 'Founders & Clients',
      body: [
        'Before I draw a single screen, I want to understand what your product sells, to whom, and where people stop using it. And what I hand over are files your developer builds from directly, not pictures they have to redraw.',
      ],
    },
    {
      id: 'product',
      label: 'Product Managers',
      body: [
        "I like knowing what we're not building as clearly as what we are. And I'll tell you when a design decision doesn't matter, so we don't spend a week on it — sometimes the fastest answer is the right one.",
      ],
    },
    {
      id: 'engineers',
      label: 'Engineers',
      body: [
        'I hand over tokens, not pictures: ',
        { code: '--line-strong' },
        ', not "the darker grey border". Every state is already in the file — focus, disabled, empty, error — so you don\'t have to come back and ask. And there\'s a ',
        { code: 'design.md' },
        ' your AI reads before you do.',
      ],
    },
  ],
  ar: [
    {
      id: 'anyone',
      label: 'للجميع',
      body: [
        'أهلا، أنا نورا. أصمم منتجات تعمل بالعربية والإنجليزية بنفس الجودة. النسخة العربية عادة تأتي أخيرا وبنصف اهتمام، وهذا ما أحاول تغييره.',
      ],
    },
    {
      id: 'recruiters',
      label: 'مسؤولي التوظيف',
      body: [
        'أصمم منتجات SaaS وأنظمة تصميم، وأغلب شغلي بلغتين. أعيش في القاهرة وأعمل عن بعد مع فرق في الخليج. لست في عجلة، لكنني أقرأ كل رسالة جادة وأرد عليها.',
      ],
    },
    {
      id: 'directors',
      label: 'مديري التصميم',
      body: [
        'أبني النظام قبل الشاشة. كل لون فيه مفحوص للتباين، وخلف كل قرار بديل رفضته وأستطيع أن أخبرك لماذا. وإذا وصلني مشروع بلا اتجاه، أخرج منه ببريف مكتوب قبل أن أفتح فيجما.',
      ],
    },
    {
      id: 'founders',
      label: 'المؤسسين والعملاء',
      body: [
        'قبل أن أرسم شاشة واحدة، أريد أن أفهم ماذا يبيع منتجك، ولمن، وأين يتوقف الناس عن استخدامه. وما أسلّمه ملفات يبني منها مطورك مباشرة، لا صورا يعيد رسمها.',
      ],
    },
    {
      id: 'product',
      label: 'مديري المنتجات',
      body: [
        'أحب أن أعرف ما لن نبنيه بنفس وضوح ما سنبنيه. وسأقول لك حين يكون القرار التصميمي غير مهم، حتى لا نضيع عليه أسبوعا — أحيانا أسرع حل هو الحل الصحيح.',
      ],
    },
    {
      id: 'engineers',
      label: 'المطورين',
      body: [
        'أسلّم توكنز لا صورا: ',
        { code: '--line-strong' },
        ' بدل «الحد الرمادي الغامق». الحالات كلها موجودة في الملف — فوكس، معطّل، فاضي، خطأ — فلا تضطر أن تعود لتسألني. ومعها ',
        { code: 'design.md' },
        ' يقرأه الـ AI عندك قبل أن تقرأه أنت.',
      ],
    },
  ],
};
