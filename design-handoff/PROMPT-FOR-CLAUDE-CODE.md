Paste this into Claude Code, opened in the `nourawafik-portfolio` folder:

---

We're rebranding nourawafik.com. Everything you need is in `design-handoff/`.

1. Read `design-handoff/HANDOFF.md`, then `design-handoff/DESIGN.md`, then look at the PNGs in `design-handoff/boards/`. Also read `AGENTS.md`: this Next.js version differs from what you know, so check `node_modules/next/dist/docs/` before writing code.
2. Create a new branch called `rebrand`.
3. Propose a short plan following section 4 of HANDOFF.md and wait for my OK before changing code.
4. Then work step by step, committing after each step. Run `npm run build` and `npm run lint` before each commit and show me the result.
5. Don't invent copy, prices or numbers; use placeholders like `[PRICE]`. Don't touch `public/resume.pdf`. Don't deploy to production without asking me.
6. If you need a design decision the files don't cover, add it to `design-handoff/QUESTIONS.md` and tell me.
