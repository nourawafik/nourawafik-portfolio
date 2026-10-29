import { getCloudflareContext } from '@opennextjs/cloudflare';
import { NextRequest, NextResponse } from 'next/server';

interface QuotePayload {
  name: string;
  email: string;
  phone?: string;
  services: string[];
  company?: string;
  language?: string;
  start?: string;
  budget?: string;
  notes?: string;
  locale: 'en' | 'ar';
  turnstileToken?: string;
  website?: string; // honeypot
}

function encodeSubject(subject: string): string {
  const bytes = new TextEncoder().encode(subject);
  const b64 = btoa(String.fromCharCode(...bytes));
  return `=?UTF-8?B?${b64}?=`;
}

function foldBase64(b64: string): string {
  return b64.match(/.{1,76}/g)?.join('\r\n') ?? b64;
}

function buildEmailBody(data: QuotePayload): string {
  const lines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    `Services: ${data.services.join(', ')}`,
    data.company ? `Company: ${data.company}` : null,
    data.language ? `Language: ${data.language}` : null,
    data.start ? `Start: ${data.start}` : null,
    data.budget ? `Budget: ${data.budget}` : null,
    data.notes ? `\nNotes:\n${data.notes}` : null,
    `\nLocale: ${data.locale}`,
  ].filter(Boolean) as string[];

  return lines.join('\n');
}

export async function POST(req: NextRequest) {
  let data: QuotePayload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: 'bad_request' }, { status: 400 });
  }

  // Honeypot check
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  // Basic server-side validation
  if (!data.name?.trim() || !data.email?.trim() || !data.services?.length) {
    return NextResponse.json({ error: 'invalid' }, { status: 422 });
  }

  const ctx = await getCloudflareContext();
  const env = ctx.env as Record<string, unknown>;
  const secret = env['TURNSTILE_SECRET_KEY'] as string | undefined;

  if (!secret) {
    return NextResponse.json({ error: 'misconfigured' }, { status: 500 });
  }
  if (!data.turnstileToken) {
    return NextResponse.json({ error: 'turnstile_required' }, { status: 403 });
  }
  const verifyRes = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret,
        response: data.turnstileToken,
        remoteip: req.headers.get('cf-connecting-ip') ?? '',
      }),
    },
  );
  const result = await verifyRes.json() as { success: boolean };
  if (!result.success) {
    return NextResponse.json({ error: 'turnstile_failed' }, { status: 403 });
  }

  // Send email via Cloudflare send_email binding
  const sender = env['QUOTE_EMAIL'] as { send: (msg: unknown) => Promise<void> } | undefined;

  if (sender) {
    try {
      const body = buildEmailBody(data);
      const from = '"Noura Wafik website" <website@nourawafik.com>';
      const fromAddr = 'website@nourawafik.com';
      const to   = 'noura.wafik.nada@gmail.com';
      const subject = `Quote request from ${data.name}`;

      const encodedSubject = encodeSubject(subject);
      // Body may contain Arabic; base64-encode the UTF-8 bytes and fold at 76 chars
      const bodyB64 = foldBase64(btoa(unescape(encodeURIComponent(body))));
      const messageId = `<${crypto.randomUUID()}@nourawafik.com>`;
      const date = new Date().toUTCString();

      const replyToEmail = /^[^\s@<>,"]+@[^\s@<>,"]+\.[^\s@<>,"]+$/.test(data.email.trim()) ? data.email.trim() : null;

      const raw = [
        `Date: ${date}`,
        `From: ${from}`,
        `To: ${to}`,
        ...(replyToEmail ? [`Reply-To: <${replyToEmail}>`] : []),
        `Message-ID: ${messageId}`,
        `Subject: ${encodedSubject}`,
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: base64',
        '',
        bodyB64,
      ].join('\r\n');

      console.log('QUOTE_EMAIL: step=import');
      // Dynamic import via variable so esbuild won't fail at build time.
      // scripts/patch-cf-email.mjs rewrites this to a static ESM import in
      // the compiled handler.mjs so the Workers runtime can resolve it natively.
      const cfMod = `cloudflare:email`;
      const { EmailMessage } = await import(cfMod) as { EmailMessage: new (f: string, t: string, r: string) => unknown };
      console.log('QUOTE_EMAIL: step=constructor');
      const message = new EmailMessage(fromAddr, to, raw);
      console.log('QUOTE_EMAIL: step=send');
      await sender.send(message);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error('QUOTE_EMAIL.send failed:', msg);
      return NextResponse.json({ error: 'email_send_failed' }, { status: 500 });
    }
  }

  return NextResponse.json({ ok: true });
}
