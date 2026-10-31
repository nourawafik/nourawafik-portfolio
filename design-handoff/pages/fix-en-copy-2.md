# Follow-up: use the exact strings, don't reword

I checked the live site after your deploy.
- The home page and Ulfa are correct.
- Duet and Praxa now have **reworded** text. It isn't the old text, but it isn't the copy-final text either, so your check (old strings gone) passed even though the new strings are wrong.
- Replace each "Live now" string with the "Must be" string below, character for character. Don't derive anything from the Arabic.

## `/work/duet` (EN)

| Live now | Must be |
|---|---|
| A hiring platform with a dedicated AI assistant for each side: Tempo for recruiters and Lyric for candidates. I worked as part of the design team on the experience across web and mobile, the AI interactions and the design system. | A hiring platform that gives each side its own AI assistant: Tempo for recruiters and Lyric for candidates. As part of the design team, I worked on the experience across web and mobile, the AI interactions and the design system. |
| Tempo never shows a score alone. The top reasons sit next to it in the same view, so a recruiter can always say why. | Tempo never shows a match score alone. The top reasons sit next to it on the same screen, so a recruiter can always explain why. |
| Recruiters can agree or disagree with any suggestion with a reason, and every decision is recorded. Disagreeing is treated as normal work, not an error. | Recruiters can agree or disagree with any suggestion and give a reason, and every decision is logged. Disagreeing is a normal part of the work, not an error. |
| A disagreement with its reason, saved to the record | The disagreement and its reason are saved to the log |
| Better-fit roles after a rejection | Better-fit roles after a no |
| Each assistant had to feel different to its users, built from the same design system. The base is shared: the same components and accessibility rules. Each assistant gets its own voice on top: colour, density, motion and tone of the writing. | Each assistant had to feel different to its users, while both were built on one design system. The base is shared: the same components and accessibility rules. Each assistant has its own voice: colour, information density, motion and writing style. |
| What the AI says is part of the design | AI words are part of the design |
| Two different sides in one product | Two sides, one product |
| Recruiters and candidates are sometimes on opposite sides of the same decision. Designing honestly for both means accepting that tension, not hiding it. | Sometimes recruiters and candidates want opposite things. Designing honestly for both means admitting that difference, not hiding it. |
| We started from wireframes drafted by the business side. They weren't designs, they were product thinking made visible, and they saved weeks of alignment. The work was turning that logic into a system that could ship. | We started from early wireframes drafted by the business team. They weren't designs but product thinking on paper, and they saved weeks of discussion. Our job was to turn them into a system that could be built. |

## `/work/praxa` (EN)

| Live now | Must be |
|---|---|
| A web platform US mental health clinics use to run their work: … and is used by more than 50 clinics. | A web platform mental health clinics in the US use to run their work: appointments, patients, providers, billing and claims, and reports. It serves four roles (admin, provider, patient and staff) and is used by more than 50 clinics. |
| …The provider accepts or edits each section individually, and nothing reaches… | AI drafts the diagnosis from the session and shows the source of each section. The provider accepts or edits each section on its own, and nothing reaches the record until every section is reviewed. |
| Providers can run the platform by voice. When a command matches more than one patient, Praxa asks which one instead of guessing. | Providers can use the platform by voice. When a command matches more than one patient, Praxa asks them to choose instead of guessing. |

## `/ar/work/duet`: one word

In Lyric's intro, change "يستخدم مسؤول التوظيف Tempo **طول** اليوم" to "يستخدم مسؤول التوظيف Tempo **طوال** اليوم". It's the copy-final wording, and it isn't dialect.

## Check

Fetch the live HTML of `/work/duet`, `/work/praxa` and `/ar/work/duet`. Confirm that every "Must be" string appears **exactly**. Report any string that doesn't.
