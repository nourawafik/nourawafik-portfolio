# English copy that still doesn't match `copy-final.md`

I checked the live HTML of nourawafik.com on 2026-10-31.
- The Arabic pages are correct.
- These English strings are still the old text.

Use the exact strings from `design-handoff/pages/copy-final.md` (section A-EN). Change only the text, nothing else.

## `/work/duet` (EN): every A-EN row is still old

| Where | Live now (old) | Should be |
|---|---|---|
| Intro | "A hiring platform where both sides get their own AI assistant… I worked on the product as part of the design team…" | A-EN "Intro" |
| Metadata | Role "Product designer, design team", no status | Role: Product designer on the design team · Platform: Web and mobile · Status: In use |
| Decision 01 | "…in the same view, not behind a tooltip, so a recruiter can always say why." | A-EN "Decision 01 text" |
| Decision 03 | "…with a reason, in a few seconds. Each decision is saved to an audit trail…" | A-EN "Decision 03 text" |
| Tempo captions | "Score and reasons in one view, in recruiter language" / "Disagreeing with a reason, saved to the audit trail" | A-EN "Tempo captions" |
| Lyric captions | "Better-fit roles after a rejection" / "Interview prep built from this role" | A-EN "Lyric captions" |
| One design system, two voices | "Tempo and Lyric had to feel different… tokens… A new component is added once…" | A-EN row |
| What I learned 01–03 | "AI output is design output" / "Two sides means designing for tension" / "Business wireframes are a head start" | A-EN rows 01–03 |

## `/work/praxa` (EN)

| Where | Live now | Should be |
|---|---|---|
| Intro | "A web platform US mental health clinics use to run their work… used by more than 50 clinics in the US." | A-EN "Intro" |
| AI section | "AI drafts the diagnosis from the session. Each section shows its source…" | A-EN "AI section" |
| Voice control | "Providers can run the dashboard by voice… Praxa asks which one instead of guessing." | A-EN "Voice control" |

## `/` (EN home)

| Where | Live now | Should be |
|---|---|---|
| Hero line | "…for startups and companies scaling across Egypt and the Gulf." | "…for startups and growing companies across Egypt and the Gulf." |
| "What I do" H2 | "From digital product to brand identity" | "From digital products to brand identity" |

## `/work/ulfa` (EN)

| Where | Live now | Should be |
|---|---|---|
| Principle 3 | "Rules and privacy policy are read before the session, not during it." | "Rules and privacy are read before the session, not during it." |

## Check after deploy

Fetch each page's HTML and search for every A-EN string. All of them must be found. Also confirm that none of the "Live now" strings above remain.
