from common import *
def screen_disagree(dark=False):
    hist=[('You','disagreed','Lina Park · Senior PM, Payments','"Lending, not payments. Tempo over-weighted years."','2h ago','no'),
          ('Sara M.','agreed','Omar Reyes · Senior PM, Payments','Moved to onsite','Yesterday','ok'),
          ('You','agreed','Maya Chen · Senior PM, Payments','Moved to onsite','Mon','ok'),
          ('Daniel K.','disagreed','Ali Haddad · Staff Engineer','"Strong, but team needs Go, not Java."','Sep 28','no')]
    hs=''.join(f'''<div style="display:flex;gap:12px;padding:14px 0;border-bottom:1px solid var(--line)">
<span style="width:28px;height:28px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:var(--{k}-soft);color:var(--{k})"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">{ICON['check' if k=='ok' else 'x']}</svg></span>
<div style="flex:1;min-width:0;font-size:13px;line-height:1.45"><b>{who}</b> {verb} with Tempo<div class="mut">{c}</div><div style="margin-top:3px">{note}</div></div><span class="sub" style="font-size:12px;white-space:nowrap">{t}</span></div>''' for who,verb,c,note,t,k in hist)
    opts=[('Tempo over-weighted something',True),('Missing context Tempo can’t see',False),('Team or role needs changed',False),('Something else',False)]
    os=''.join(f'<span style="height:36px;padding:0 14px;border-radius:10px;font-size:14px;font-weight:600;display:inline-flex;align-items:center;gap:8px;border:1.5px solid {"var(--tempo)" if on else "var(--line)"};background:{"var(--tempo-soft)" if on else "var(--panel)"};color:{"var(--tempo-ink)" if on else "var(--ink)"}">{"<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\">"+ICON["check"]+"</svg>" if on else ""}{t}</span>' for t,on in opts)
    return f'''<div class="du{' dark' if dark else ''}" style="width:1440px;height:900px">
<div class="app">
<div class="rail">{logo(30,False)}<div style="height:14px"></div>
<div class="ri">{ic('home')}</div><div class="ri on">{ic('users')}</div><div class="ri">{ic('brief')}</div><div class="ri">{ic('chart')}</div><div style="flex:1"></div><div class="ri">{ic('cog')}</div></div>
<div class="main">
<div class="top"><div class="crumb">Requisitions &nbsp;/&nbsp; Senior PM, Payments &nbsp;/&nbsp; <b>Candidate review</b></div>
<div style="display:flex;gap:10px"><span class="btn">{ic('cal')}Schedule</span><span class="btn pri">{ic('send')}Share with hiring manager</span></div></div>
<div style="padding:24px 28px;display:flex;flex-direction:column;gap:18px">
<div class="card" style="padding:18px 22px;display:flex;align-items:center;gap:16px">
{person('LP','#DD2590',48)}
<div style="flex:1"><div class="h" style="font-size:20px">Lina Park</div><div class="mut" style="font-size:14px;margin-top:2px">Lead PM at Crescent Lending · Riyadh, hybrid</div></div>
<div style="display:flex;align-items:center;gap:14px;padding:12px 16px;border-radius:14px;background:var(--tempo-soft)"><div style="text-align:center"><div class="h" style="font-size:28px;line-height:1;color:var(--tempo-ink)">78</div><div style="font-size:10px;font-weight:700;letter-spacing:.06em;color:var(--tempo-ink);margin-top:4px">MATCH</div></div><div style="width:1px;align-self:stretch;background:var(--tempo)"></div>
<div style="font-size:13px;line-height:1.5;color:var(--tempo-ink);max-width:250px"><b>Good fit.</b> 9 years in lending, led a team of 3, 4 of 7 skills match.</div></div>
</div>
<div class="card" style="padding:24px;display:flex;flex-direction:column;gap:18px;border:1.5px solid var(--tempo)">
<div style="display:flex;align-items:flex-start;gap:12px">{tempo_avatar(32)}<div><div class="h" style="font-size:18px">You disagree with Tempo. Tell it why.</div><div class="mut" style="font-size:14px;margin-top:4px">Takes 10 seconds. It goes to the audit trail with your name, and Tempo adjusts similar suggestions.</div></div></div>
<div style="display:flex;flex-wrap:wrap;gap:8px">{os}</div>
<div style="display:flex;flex-direction:column;gap:8px"><div style="font-size:13px;font-weight:600">Which part? <span class="sub" style="font-weight:400">Pick the reason Tempo got wrong</span></div>
<div style="display:flex;gap:8px"><span class="chip" style="height:30px;font-size:13px;text-decoration:line-through;background:var(--tempo-soft);color:var(--tempo-ink);box-shadow:inset 0 0 0 1.5px var(--tempo)">9 years in lending</span><span class="chip" style="height:30px;font-size:13px">Led a team of 3</span><span class="chip" style="height:30px;font-size:13px">4 of 7 skills match</span></div></div>
<div style="display:flex;flex-direction:column;gap:8px"><div style="font-size:13px;font-weight:600">Note for the record <span class="sub" style="font-weight:400">Optional</span></div>
<div style="min-height:64px;border:1px solid var(--line);border-radius:12px;padding:12px 14px;font-size:14px;line-height:1.5">Lending, not payments. Different customers and compliance. Years should count less here.<span style="display:inline-block;width:1.5px;height:16px;background:var(--tempo);vertical-align:-3px;margin-inline-start:2px"></span></div></div>
<div style="display:flex;align-items:center;justify-content:space-between;padding-top:4px">
<div class="mut" style="font-size:13px;display:flex;align-items:center;gap:8px"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">{ICON['flag']}</svg>Lina stays in your pipeline. Nothing is sent to her.</div>
<div style="display:flex;gap:10px"><span class="btn">Cancel</span><span class="btn tempo">Save my decision</span></div></div>
</div>
<div style="display:flex;flex-direction:column;gap:10px">
<div class="h" style="font-size:15px">What Tempo does next</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px">
<div class="card" style="padding:14px 16px;font-size:13px;line-height:1.5"><div style="font-weight:650;font-size:14px;margin-bottom:4px">1. Weighs lending less</div><span class="mut">For this role only. Other roles stay as they are.</span></div>
<div class="card" style="padding:14px 16px;font-size:13px;line-height:1.5"><div style="font-weight:650;font-size:14px;margin-bottom:4px">2. Re-checks 2 similar picks</div><span class="mut">You'll see what changed and why before anything moves.</span></div>
<div class="card" style="padding:14px 16px;font-size:13px;line-height:1.5"><div style="font-weight:650;font-size:14px;margin-bottom:4px">3. Keeps your note</div><span class="mut">Your words show up next to Lina's score for your team.</span></div>
</div></div>
</div></div>
<div class="assist">
<div style="height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 18px;border-bottom:1px solid var(--line)"><div style="font-size:15px;font-weight:700">Decision history</div><span class="chip">This team</span></div>
<div style="padding:16px 18px;display:grid;grid-template-columns:1fr 1fr;gap:10px">
<div style="padding:12px;border-radius:12px;background:var(--sunk)"><div class="h" style="font-size:22px">12</div><div class="mut" style="font-size:12px">agreed this week</div></div>
<div style="padding:12px;border-radius:12px;background:var(--sunk)"><div class="h" style="font-size:22px">3</div><div class="mut" style="font-size:12px">disagreed, each with a reason</div></div></div>
<div style="padding:0 18px;flex:1">{hs}</div>
<div style="padding:14px 18px;font-size:12px;line-height:1.5;background:var(--sunk);color:var(--muted)">Every decision keeps who, when and why. Export it for hiring reviews.</div>
</div>
</div></div>'''
