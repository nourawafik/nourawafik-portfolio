from common import *
from s2 import phone
def lyric_profile(dark=False):
    sug=[('Add your SQL work','Most PM roles you saved ask for it. Your Northwind project used it.',True),
         ('Name the launch you led','“Same-day merchant onboarding” is clearer than “onboarding revamp”.',False),
         ('Add Arabic as a language','3 of your saved roles are in Riyadh and Dubai.',False)]
    cards=''.join(f'''<div class="card" style="padding:16px;display:flex;flex-direction:column;gap:10px;{'box-shadow:0 0 0 1.5px var(--lyric)' if hl else ''}">
<div style="font-size:16px;font-weight:700;letter-spacing:-.01em">{t}</div><div class="mut" style="font-size:13px;line-height:1.5">{d}</div>
<div style="display:flex;gap:8px"><span class="btn" style="height:34px;background:var(--lyric);border-color:var(--lyric);color:#2A1206">{ic('plus')}Add it</span><span class="btn" style="height:34px">Not for me</span></div></div>''' for t,d,hl in sug)
    inner=f'''<div style="flex:1;overflow:hidden;padding:8px 18px 0;display:flex;flex-direction:column;gap:14px">
<div style="display:flex;align-items:center;gap:12px"><span class="ri" style="width:36px;height:36px;border:1px solid var(--line);border-radius:12px;color:var(--ink)"><svg viewBox="0 0 24 24" style="transform:scaleX(-1)">{ICON['arrow']}</svg></span><div class="h" style="font-size:20px">Your profile</div></div>
<div class="card" style="padding:16px;display:flex;gap:14px;align-items:center">{person('AK','#0E9384',52)}<div style="flex:1"><div style="font-size:16px;font-weight:700">Alex Karim</div><div class="mut" style="font-size:13px">Product Manager · Cairo</div>
<div style="display:flex;align-items:center;gap:8px;margin-top:8px"><div class="bar" style="flex:1"><i style="width:72%;background:var(--lyric)"></i></div><span style="font-size:12px;font-weight:600;color:var(--lyric-ink)">3 ideas</span></div></div></div>
<div style="display:flex;gap:10px;align-items:flex-start;padding:14px;border-radius:16px;background:var(--lyric-soft)">{lyric_avatar(32)}<div style="font-size:14px;line-height:1.5"><b>Lyric</b><br>For the roles you're applying to, recruiters often look for these. Add what's true for you. You decide.</div></div>
{cards}
</div>'''
    return phone(inner,dark,'Profile')
def lyric_prep(dark=False):
    qs=[('Tell us about a payments launch that went wrong.','Asked in 4 of 5 recent interviews for similar roles'),
        ('How would you price an instant payout feature?','From their job post: “own pricing for payouts”'),
        ('Why Brightdesk, and why now?','They grew from 2 to 9 countries this year')]
    qq=''.join(f'''<div class="card" style="padding:14px 16px;display:flex;flex-direction:column;gap:6px"><div style="font-size:15px;font-weight:650;line-height:1.4">{q}</div><div style="display:flex;gap:6px;align-items:center;font-size:12px;color:var(--lyric-ink)">{lyric_avatar(14)}<span>{w}</span></div></div>''' for q,w in qs)
    inner=f'''<div style="flex:1;overflow:hidden;padding:8px 18px 0;display:flex;flex-direction:column;gap:14px">
<div style="display:flex;align-items:center;gap:12px"><span class="ri" style="width:36px;height:36px;border:1px solid var(--line);border-radius:12px;color:var(--ink)"><svg viewBox="0 0 24 24" style="transform:scaleX(-1)">{ICON['arrow']}</svg></span><div><div class="h" style="font-size:20px">Interview prep</div><div class="sub" style="font-size:12px">Product Manager, Workflows · Brightdesk</div></div></div>
<div style="padding:16px;border-radius:16px;background:var(--ink);color:var(--bg);display:flex;flex-direction:column;gap:8px"><div style="display:flex;align-items:center;gap:8px;font-size:12px;font-weight:700;letter-spacing:.06em;opacity:.8">{ic('cal').replace('<svg ','<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" ')}THURSDAY · 11:00</div><div style="font-size:17px;font-weight:700">Panel with the product team</div><div style="font-size:13px;opacity:.8">45 min · Video call</div></div>
<div style="display:flex;gap:10px;align-items:flex-start;padding:14px;border-radius:16px;background:var(--lyric-soft)">{lyric_avatar(32)}<div style="font-size:14px;line-height:1.5"><b>Lyric</b><br>I built this from their job post, their news and questions people got for similar roles.</div></div>
<div class="h" style="font-size:15px">Likely questions</div>
{qq}
<span class="btn" style="height:44px;justify-content:center;background:var(--lyric);border-color:var(--lyric);color:#2A1206">{ic('mic')}Practice out loud with Lyric</span>
</div>'''
    return phone(inner,dark,'Prep')
