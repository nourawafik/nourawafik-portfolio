# nourawafik.com

Noura Wafik's personal brand and design portfolio — brand identities, websites and digital products in Arabic and English, deployed on Cloudflare Workers.

→ **[docs/HANDBOOK.md](docs/HANDBOOK.md)** — rules, approved facts, setup, hosting and open items  
→ **[DESIGN.md](DESIGN.md)** — design system: tokens, typography, Noon mascot  
→ **[PRODUCT.md](PRODUCT.md)** — how to add a project

## Development

```bash
npm run dev
```

## Build and preview (Cloudflare Workers)

```bash
npm run build:cf   # build the Worker
npm run preview:cf # local preview at localhost:8787
```

Deploy previews to `*.workers.dev` only. See the handbook for the launch checklist.
