import { getCloudflareContext } from '@opennextjs/cloudflare';
import { createMimeMessage } from 'mimetext/browser';
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
      const from = 'website@nourawafik.com';
      const to   = 'noura.wafik.nada@gmail.com';

      const mime = createMimeMessage();
      mime.setSender(from);
      mime.setRecipient(to);
      mime.setSubject(`Quote request from ${data.name}`);
      mime.addMessage({ contentType: 'text/plain; charset=utf-8', data: body });

      // cloudflare:email is a Workers-only virtual module; variable import prevents
      // esbuild from trying to resolve it at bundle time
      const cfEmailMod = `cloudflare:email`;
      const { EmailMessage } = await import(cfEmailMod) as { EmailMessage: new (f: string, t: string, r: string) => unknown };
      const message = new EmailMessage(from, to, mime.asRaw());
      await sender.send(message);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error('QUOTE_EMAIL.send failed:', msg);
      return NextResponse.json({ error: 'email_send_failed' }, { status: 500 });
    }
  }

  return NextResponse.json({ ok: true });
}
