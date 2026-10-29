/**
 * Post-build patch: replace the dynamic require of 'cloudflare:email' in
 * handler.mjs with a static ESM import.
 *
 * opennextjs-cloudflare's esbuild compiles
 *   const cfMod = `cloudflare:email`; await import(cfMod)
 * to something like:
 *   c3="cloudflare:email", {EmailMessage:p2} = await Promise.resolve().then(
 *     () => e.x(c3, () => require(c3), !0)
 *   )
 * which fails at runtime because require() of virtual modules isn't supported.
 *
 * This script:
 *  1. Prepends a static ESM import of cloudflare:email
 *  2. Replaces the Promise.resolve().then(require) call with a direct reference
 *
 * See scripts/patch-cf-email.mjs for details.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const handlerPath = join(root, '.open-next/server-functions/default/handler.mjs');

let src = readFileSync(handlerPath, 'utf8');

// Match the destructured EmailMessage dynamic require, whatever variable names
// the minifier chose. The pattern is always:
//   {EmailMessage:<id>}=await Promise.resolve().then(()=><dynReqHelper>(<strVar>,()=>require(<strVar>),!0))
// We capture the local variable name (<id>) so we can keep it.
// The helper call is e.x(var, ()=>require(var), !0) — note the dot in e.x
const re = /\{EmailMessage:(\w+)\}=await Promise\.resolve\(\)\.then\(\(\)=>[^(]+\([^,]+,\(\)=>require\([^)]+\),!0\)\)/;

if (!re.test(src)) {
  console.error('patch-cf-email: pattern not found in handler.mjs — skipping');
  console.error('Context around cloudflare:email:', src.slice(src.indexOf('cloudflare:email') - 100, src.indexOf('cloudflare:email') + 300));
  process.exit(0);
}

src = src.replace(re, (_, v) => `{EmailMessage:${v}}={EmailMessage:__cfEmailMessage}`);

// Prepend the static import (after any existing top-of-file comments/imports)
const staticImport = `import { EmailMessage as __cfEmailMessage } from 'cloudflare:email';\n`;
src = staticImport + src;

writeFileSync(handlerPath, src, 'utf8');
console.log('patch-cf-email: patched handler.mjs ✓');
