from common import *
def screen_review(dark=False):
    reasons=[
     ('5 of 7 required skills match','Payments infrastructure, API products, PCI scope, pricing, B2B onboarding','CV'),
     ('7 years in payments','Two roles at payment companies since 2018, both on merchant-facing products','LinkedIn'),
     ('Held this exact title before','Senior PM, Payments at a Series B company of similar size','CV'),
    ]
    rs=''.join(f'''<div style="display:flex;gap:12px;padding:14px 16px;border:1px solid var(--line);border-radius:12px;background:var(--panel)">
<span style="width:24px;height:24px;border-radius:50%;background:var(--ok-soft);color:var(--ok);display:flex;align-items:center;justify-content:center;flex-shrink:0"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">{ICON['check']}</svg></span>
<div style="flex:1;min-width:0"><div style="font-size:15px;font-weight:650">{t}</div><div class="mut" style="font-size:13px;line-height:1.45;margin-top:3px">{d}</div></div>
<span class="chip" style="align-self:flex-start">{src}</span></div>''' for t,d,src in reasons)
    return f'''<div class="du{' dark' if dark else ''}" style="width:1440px;height:900px">
<div class="app">
<div class="rail">{logo(30,False)}<div style="height:14px"></div>
<div class="ri">{ic('home')}</div><div class="ri on">{ic('users')}</div><div class="ri">{ic('brief')}</div><div class="ri">{ic('chart')}</div><div style="flex:1"></div><div class="ri">{ic('cog')}</div></div>
<div class="main">
<div class="top"><div class="crumb">Requisitions &nbsp;/&nbsp; Senior PM, Payments &nbsp;/&nbsp; <b>Candidate review</b></div>
<div style="display:flex;gap:10px"><span class="btn">{ic('cal')}Schedule</span><span class="btn pri">{ic('send')}Share with hiring manager</span></div></div>
<div style="padding:24px 28px;display:flex;flex-direction:column;gap:18px;overflow:hidden">
<div class="card" style="padding:22px 24px;display:flex;align-items:center;gap:18px">
{person('MC','#7A5AF8',56)}
<div style="flex:1"><div class="h" style="font-size:22px">Maya Chen</div><div class="mut" style="font-size:14px;margin-top:2px">Senior PM at Northwind Pay &nbsp;·&nbsp; Cairo, remote</div>
<div style="display:flex;gap:8px;margin-top:10px"><span class="chip">Stage: Onsite</span><span class="chip">Applied 4 days ago</span><span class="chip t">{tempo_avatar(14)}Reviewed by Tempo</span></div></div>
<div style="display:flex;align-items:center;gap:16px;padding:14px 18px;border-radius:14px;background:var(--tempo-soft)">
<div style="text-align:center"><div class="h" style="font-size:34px;line-height:1;color:var(--tempo-ink)">87</div><div style="font-size:11px;font-weight:700;letter-spacing:.06em;color:var(--tempo-ink);margin-top:4px">MATCH</div></div>
<div style="width:1px;align-self:stretch;background:var(--tempo)"></div>
<div style="font-size:13px;line-height:1.5;color:var(--tempo-ink);max-width:190px"><b>Strong fit.</b> Skills, years in payments and a past title all line up. One gap to check below.</div></div>
</div>
<div style="display:grid;grid-template-columns:1.35fr 1fr;gap:18px">
<div style="display:flex;flex-direction:column;gap:10px">
<div style="display:flex;align-items:center;justify-content:space-between"><div class="h" style="font-size:15px">Why Tempo suggests advancing</div><span class="sub" style="font-size:12px">Top 3 reasons, always shown with the score</span></div>
{rs}
</div>
<div style="display:flex;flex-direction:column;gap:10px">
<div class="h" style="font-size:15px">Worth checking</div>
<div style="padding:14px 16px;border-radius:12px;background:var(--warn-soft);color:var(--warn);font-size:14px;line-height:1.5"><b>No direct reports yet.</b> This role manages 2 PMs. Ask about mentoring or leading without the title.</div>
<div class="h" style="font-size:15px;margin-top:6px">From her application</div>
<div style="padding:14px 16px;border-radius:12px;border:1px solid var(--line);font-size:14px;line-height:1.55;font-style:italic" class="mut">“I rebuilt merchant onboarding so a new store could take its first payment the same day.”<div class="sub" style="font-style:normal;font-size:12px;margin-top:6px">Cover letter</div></div>
</div>
</div>
<div class="card" style="padding:16px 20px;display:flex;align-items:center;gap:12px">
<div style="flex:1;font-size:15px;font-weight:600">Do you agree with Tempo?<div class="mut" style="font-size:13px;font-weight:400;margin-top:2px">Your answer is saved to the audit trail and teaches Tempo.</div></div>
<span class="btn" style="color:var(--no);border-color:var(--no)">{ic('x')}Disagree</span>
<span class="btn" style="background:var(--ok);border-color:var(--ok);color:var(--on-ok)">{ic('check')}Agree, advance</span>
<span class="btn">{ic('copy')}Copy summary</span>
</div>
<div style="display:flex;flex-direction:column;gap:10px">
<div class="h" style="font-size:15px">Also new for this role</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
<div class="card" style="padding:14px 16px;display:flex;align-items:center;gap:12px">{person('OR','#0E9384',36)}<div style="flex:1;min-width:0"><div style="font-size:14px;font-weight:650">Omar Reyes</div><div class="mut" style="font-size:12px;margin-top:2px">6 of 7 skills · 4 years in payments · no fintech title</div></div><span class="chip t">81</span></div>
<div class="card" style="padding:14px 16px;display:flex;align-items:center;gap:12px">{person('LP','#DD2590',36)}<div style="flex:1;min-width:0"><div style="font-size:14px;font-weight:650">Lina Park</div><div class="mut" style="font-size:12px;margin-top:2px">4 of 7 skills · 9 years in lending · led a team of 3</div></div><span class="chip t">78</span></div>
</div></div>
</div></div>
<div class="assist">
<div style="height:64px;display:flex;align-items:center;gap:10px;padding:0 18px;border-bottom:1px solid var(--line)">{tempo_avatar(32)}<div><div style="font-size:15px;font-weight:700">Tempo</div><div class="sub" style="font-size:12px">Recruiter assistant</div></div></div>
<div style="padding:12px 18px;font-size:12px;line-height:1.45;background:var(--sunk);color:var(--muted)">Tempo only sees this requisition. It can't see candidates' chats with Lyric.</div>
<div style="flex:1;padding:18px;display:flex;flex-direction:column;gap:12px">
<div class="bub" style="background:var(--tempo-soft);color:var(--ink);max-width:92%">Maya is the strongest of 3 new high-fit candidates for this role. Want a short summary for Daniel?</div>
<div class="bub" style="background:var(--ink);color:var(--bg);align-self:flex-end;max-width:80%">Yes, keep it short.</div>
<div class="bub" style="background:var(--panel);border:1px solid var(--line);max-width:96%"><div class="sub" style="font-size:11px;font-weight:700;letter-spacing:.06em;margin-bottom:6px">READY TO SEND</div>Maya matches 5 of 7 required skills, has 7 years in payments, and was a Senior PM, Payments before. One gap: no direct reports yet. I suggest moving her to the final round.<div style="display:flex;gap:8px;margin-top:10px"><span class="chip t">{ic('copy').replace('<svg ','<svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" ')}Copy</span><span class="chip">Edit</span></div></div>
</div>
<div style="padding:12px 18px;display:flex;flex-wrap:wrap;gap:6px"><span class="chip">Compare with Omar Reyes</span><span class="chip">Draft interview questions</span></div>
<div style="padding:0 18px 18px"><div style="height:44px;border:1px solid var(--line);border-radius:12px;display:flex;align-items:center;justify-content:space-between;padding:0 6px 0 14px"><span class="sub" style="font-size:14px">Ask Tempo…</span><span style="width:32px;height:32px;border-radius:9px;background:var(--tempo);display:flex;align-items:center;justify-content:center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">{ICON['send']}</svg></span></div></div>
</div>
</div></div>'''
