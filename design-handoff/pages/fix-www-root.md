# Bug: `https://www.nourawafik.com` (root only) opens a 404

## What happens
- `https://www.nourawafik.com/` redirects to the literal URL `https://nourawafik.com/:path*`, which is a 404.
- Deep links work: `https://www.nourawafik.com/work/praxa` goes to `https://nourawafik.com/work/praxa`.

## Cause
In `next.config.ts`, the www→apex redirect is:
```ts
{ source: "/:path*", has: [{ type: "host", value: "www.nourawafik.com" }], destination: "https://nourawafik.com/:path*", permanent: true }
```
On the root path, `:path*` is empty. On OpenNext/Cloudflare, the empty parameter isn't substituted, so the placeholder stays in the Location header.

## Fix
Add a rule for the root **before** the catch-all, and keep the catch-all for deep links:
```ts
{ source: "/", has: [{ type: "host", value: "www.nourawafik.com" }], destination: "https://nourawafik.com/", permanent: true },
{ source: "/:path*", has: [{ type: "host", value: "www.nourawafik.com" }], destination: "https://nourawafik.com/:path*", permanent: true },
```

## Check after deploy
Each of these must return a 301 to the apex URL shown, with no `:path*` anywhere:

| From | To |
|---|---|
| `https://www.nourawafik.com` | `https://nourawafik.com/` |
| `https://www.nourawafik.com/` | `https://nourawafik.com/` |
| `https://www.nourawafik.com/ar` | `https://nourawafik.com/ar` |
| `https://www.nourawafik.com/work/praxa` | `https://nourawafik.com/work/praxa` |

Test with `curl -sI <url>`, and also check the old redirects (`/work/dayratna` etc.) still work.

## Also
Check the other redirects in `next.config.ts` for the same empty-`:path*` problem, and fix them the same way.
