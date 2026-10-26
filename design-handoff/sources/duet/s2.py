import sys;sys.path.insert(0,"/tmp/claude-0/-home-claude/a7376101-3103-5ad9-97ca-42e951e26fac/scratchpad")
from sbar import sbar
from common import *
def phone(inner,dark=False,tab='Discover'):
    return f'''<div class="du{' dark' if dark else ''}" style="width:390px;height:844px;display:flex;flex-direction:column;background:var(--bg)">
{sbar(44,24)}
{inner}
<div style="height:78px;border-top:1px solid var(--line);background:var(--panel);display:flex;justify-content:space-around;align-items:flex-start;padding-top:10px">
{''.join(f'<div style="display:flex;flex-direction:column;align-items:center;gap:4px;font-size:11px;font-weight:600;color:{"var(--lyric-ink)" if on else "var(--subtle)"}"><span class="ri" style="width:28px;height:28px;color:inherit">{ic(i)}</span>{n}</div>' for i,n,on in [(a,b,b==tab) for a,b in [("search","Discover"),("brief","Applications"),("mic","Prep"),("users","Profile")]])}
</div></div>'''
def lyric_roles(dark=False):
    roles=[('Product Manager, Workflows','Brightdesk','Remote · Full time',91,'Your onboarding work maps to their #1 goal'),
           ('Senior PM, Merchant tools','Ledgerline','Dubai · Hybrid',88,'Same customers you served for 5 years'),
           ('PM, Payouts','Farah Pay','Cairo · On site',84,'Asks for API products, your strongest skill')]
    cards=''.join(f'''<div class="card" style="padding:16px;display:flex;flex-direction:column;gap:10px">
<div style="display:flex;justify-content:space-between;gap:10px"><div><div style="font-size:16px;font-weight:700;letter-spacing:-.01em">{t}</div><div class="mut" style="font-size:13px;margin-top:2px">{c} · {loc}</div></div><span class="chip l" style="flex-shrink:0">{f}% fit</span></div>
<div style="display:flex;gap:8px;align-items:flex-start;font-size:13px;line-height:1.45;color:var(--ink)"><span style="color:var(--lyric-ink);margin-top:1px">{lyric_avatar(16)}</span>{why}</div>
<div style="display:flex;gap:8px"><span class="btn" style="height:34px;flex:1;justify-content:center;background:var(--lyric);border-color:var(--lyric);color:#2A1206">Apply with Lyric</span><span class="btn" style="height:34px;width:34px;padding:0;justify-content:center">{ic('heart')}</span></div></div>''' for t,c,loc,f,why in roles)
    inner=f'''<div style="flex:1;overflow:hidden;padding:8px 18px 0;display:flex;flex-direction:column;gap:14px">
<div style="display:flex;align-items:center;justify-content:space-between"><div><div class="sub" style="font-size:13px">Good morning</div><div class="h" style="font-size:24px">Hi, Alex</div></div>{person('AK','#0E9384',40)}</div>
<div style="display:flex;gap:10px;align-items:flex-start;padding:14px;border-radius:16px;background:var(--lyric-soft)">{lyric_avatar(32)}<div style="font-size:14px;line-height:1.5"><b>Lyric</b><br>You said you want product work closer to customers. These 3 roles fit that even better than your last applications.</div></div>
{cards}
</div>'''
    return phone(inner,dark)
