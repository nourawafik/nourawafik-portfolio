from common import *
def system(dark=False):
    def col(v):
        t=v=='tempo'
        name='Tempo' if t else 'Lyric'; who='For recruiters' if t else 'For candidates'
        av=tempo_avatar(36) if t else lyric_avatar(36)
        c='var(--tempo)' if t else 'var(--lyric)'; soft='var(--tempo-soft)' if t else 'var(--lyric-soft)'; ink='var(--tempo-ink)' if t else 'var(--lyric-ink)'
        pad='10px 12px' if t else '16px 18px'; fs='13px' if t else '15px'; rad='10px' if t else '16px'
        btxt='var(--on-tempo)' if t else '#2A1206'
        rows=(''.join(f'<div style="display:flex;align-items:center;gap:10px;padding:{pad};border-bottom:1px solid var(--line);font-size:{fs}">{person(i,cl,26)}<span style="flex:1;font-weight:600">{n}</span><span class="chip t">{sc}</span></div>' for i,cl,n,sc in [('MC','#7A5AF8','Maya Chen','87'),('OR','#0E9384','Omar Reyes','81'),('LP','#DD2590','Lina Park','78'),('AH','#B54708','Ali Haddad','74')])) if t else \
             (''.join(f'<div style="display:flex;flex-direction:column;gap:4px;padding:{pad};border-bottom:1px solid var(--line)"><span style="font-size:{fs};font-weight:650">{n}</span><span class="mut" style="font-size:13px">{d}</span></div>' for n,d in [('Product Manager, Workflows','Your onboarding work maps to their #1 goal'),('Senior PM, Merchant tools','Same customers you served for 5 years')]))
        notes=[('Density','4 rows in the same space' if t else '2 roomy cards'),('Motion','120ms, instant' if t else '240ms, eased in'),('Tone','Short, factual, cites sources' if t else 'Warm, forward-looking, never grades'),('Colour','Indigo, focused' if t else 'Apricot, calm')]
        nn=''.join(f'<div style="display:flex;justify-content:space-between;gap:12px;padding:10px 0;border-bottom:1px dashed var(--line);font-size:14px"><span class="sub">{a}</span><span style="font-weight:600;text-align:end">{b}</span></div>' for a,b in notes)
        msg='Maya matches 5 of 7 required skills. Source: CV.' if t else 'These 2 roles fit what you told me even better.'
        return f'''<div style="flex:1;display:flex;flex-direction:column;gap:18px">
<div style="display:flex;align-items:center;gap:12px">{av}<div><div class="h" style="font-size:22px">{name}</div><div class="mut" style="font-size:14px">{who}</div></div></div>
<div class="card" style="overflow:hidden;border-radius:{rad}">{rows}</div>
<div style="display:flex;gap:10px;align-items:center"><span class="btn" style="background:{c};border-color:{c};color:{btxt};border-radius:{rad};height:{'36px' if t else '44px'};padding:0 {'14px' if t else '20px'}">{'Agree, advance' if t else 'Apply with Lyric'}</span><span class="btn" style="border-radius:{rad};height:{'36px' if t else '44px'}">{'Disagree' if t else 'Not now'}</span></div>
<div class="bub" style="background:{soft};color:var(--ink);border-radius:{rad};font-size:{fs};display:flex;gap:10px;align-items:flex-start">{(tempo_avatar(22) if t else lyric_avatar(22))}<span>{msg}</span></div>
<div>{nn}</div></div>'''
    shared=['Same components','Same spacing & radius scale','Same type family (Inter)','Same AA contrast rules','One token file, two themes']
    sh=''.join(f'<div style="display:flex;gap:8px;align-items:center;font-size:14px;font-weight:600"><span style="width:20px;height:20px;border-radius:50%;background:var(--ink);color:var(--bg);display:flex;align-items:center;justify-content:center"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">{ICON["check"]}</svg></span>{x}</div>' for x in shared)
    return f'''<div class="du{' dark' if dark else ''}" style="box-sizing:border-box;width:1600px;height:780px;padding:60px 72px;display:flex;flex-direction:column;gap:36px">
<div style="display:flex;justify-content:space-between;align-items:flex-end"><div><div style="font-size:14px;font-weight:700;letter-spacing:.08em;color:var(--subtle)">DESIGN SYSTEM</div><div class="h" style="font-size:44px;margin-top:6px">One system, two voices</div></div>{logo(40)}</div>
<div style="display:flex;gap:40px;flex:1">
{col('tempo')}
<div style="width:250px;display:flex;flex-direction:column;gap:14px;padding:24px;border-radius:20px;background:var(--sunk);align-self:flex-start"><div class="h" style="font-size:16px">Shared foundation</div>{sh}</div>
{col('lyric')}
</div></div>'''
