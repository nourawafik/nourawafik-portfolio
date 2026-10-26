import os
from playwright.sync_api import sync_playwright
FONTS='/tmp/claude-0/-home-claude/a7376101-3103-5ad9-97ca-42e951e26fac/scratchpad/fonts/node_modules/@fontsource/'
FL=['plus-jakarta-sans/400.css','plus-jakarta-sans/500.css','plus-jakarta-sans/600.css','plus-jakarta-sans/700.css','plus-jakarta-sans/800.css','jetbrains-mono/400.css','jetbrains-mono/500.css']
CSS='''
.px{--bg:#F4F5F3;--panel:#FFFFFF;--sunk:#EEF0EE;--line:#E1E5E2;--ink:#17201D;--muted:#4A5752;--subtle:#66726D;
--p:#13684F;--ph:#0F5843;--ps:#E3F1EB;--pi:#0E5440;--onp:#FFFFFF;
--ai:#245E8F;--ai-bg:#E7F0F8;--ok:#1E7A4C;--ok-bg:#E5F3EB;--warn:#8F5600;--warn-bg:#FFF2DC;--err:#B3261E;--err-bg:#FCEBE9;--info:#245E8F;--info-bg:#E7F0F8;
--c1:#13684F;--c2:#7FB8A4;--c3:#245E8F;--shadow:0 1px 2px rgba(23,32,29,.05),0 8px 24px -16px rgba(23,32,29,.18);
font-family:'Plus Jakarta Sans',sans-serif;color:var(--ink);background:var(--bg);-webkit-font-smoothing:antialiased;font-size:14px}
.px.dark{--bg:#0E1412;--panel:#151D1A;--sunk:#0B100E;--line:#26302C;--ink:#E9EFEC;--muted:#B0BDB7;--subtle:#8D9B95;
--p:#6FD0AE;--ph:#86DABB;--ps:#163029;--pi:#9CE0C6;--onp:#0B100E;
--ai:#8EC1EA;--ai-bg:#17283A;--ok:#7DD3A6;--ok-bg:#15291F;--warn:#F2C26B;--warn-bg:#33270F;--err:#FF9A8F;--err-bg:#3A1A17;--info:#8EC1EA;--info-bg:#17283A;
--c1:#6FD0AE;--c2:#2F6B58;--c3:#8EC1EA;--shadow:0 1px 2px rgba(0,0,0,.3),0 8px 24px -16px rgba(0,0,0,.7)}
.px *{box-sizing:border-box}
.px .card{background:var(--panel);border:1px solid var(--line);border-radius:14px}
.px .m{color:var(--muted)}.px .s{color:var(--subtle)}
.px .h{font-weight:700;letter-spacing:-.01em}
.px .num{font-variant-numeric:tabular-nums}
.px .mono{font-family:'JetBrains Mono',monospace}
.px .btn{height:38px;padding:0 14px;border-radius:10px;font-size:13.5px;font-weight:600;display:inline-flex;align-items:center;justify-content:center;gap:7px;border:1px solid var(--line);background:var(--panel);color:var(--ink);white-space:nowrap}
.px .btn.p{background:var(--p);border-color:var(--p);color:var(--onp)}
.px .btn.g{background:transparent;border-color:transparent;color:var(--muted)}
.px .pill{display:inline-flex;align-items:center;gap:5px;height:22px;padding:0 8px;border-radius:999px;font-size:12px;font-weight:600;white-space:nowrap}
.px .ok{background:var(--ok-bg);color:var(--ok)}.px .warn{background:var(--warn-bg);color:var(--warn)}.px .err{background:var(--err-bg);color:var(--err)}.px .info{background:var(--info-bg);color:var(--info)}.px .neu{background:var(--sunk);color:var(--muted)}
.px .aitag{background:var(--ai-bg);color:var(--ai)}
.px svg.i{fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0}
.px table{border-collapse:collapse;width:100%}
.px th{font-size:12px;font-weight:600;color:var(--subtle);text-align:start;padding:10px 14px;border-bottom:1px solid var(--line);background:var(--sunk)}
.px td{padding:12px 14px;border-bottom:1px solid var(--line);font-size:13.5px}
'''
IC={'home':'<path d="M4 11 L12 4 L20 11 V20 H14 V14 H10 V20 H4 Z"/>','cal':'<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10 H20 M9 3 V7 M15 3 V7"/>',
'users':'<circle cx="9" cy="9" r="3.2"/><path d="M3.5 19 C4 15.5 6.5 14 9 14 C11.5 14 14 15.5 14.5 19"/><circle cx="16.5" cy="8" r="2.6"/><path d="M15.5 13.2 C18.5 13.2 20.5 14.8 20.8 18"/>',
'user':'<circle cx="12" cy="8.5" r="3.6"/><path d="M5 20 C5.6 15.8 8.6 14 12 14 C15.4 14 18.4 15.8 19 20"/>','steth':'<path d="M6 3 V9 A4 4 0 0 0 14 9 V3"/><path d="M10 13 V15 A4.5 4.5 0 0 0 19 15 V13"/><circle cx="19" cy="11" r="2"/>',
'building':'<rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M9 7 H10 M14 7 H15 M9 11 H10 M14 11 H15 M10 21 V16 H14 V21"/>','note':'<path d="M6 3 H14 L19 8 V21 H6 Z"/><path d="M14 3 V8 H19 M9 13 H16 M9 17 H14"/>',
'bill':'<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10 H21 M7 15 H10"/>','chart':'<path d="M4 20 V4 M4 20 H20"/><path d="M8 16 V12 M12 16 V8 M16 16 V10"/>',
'gear':'<circle cx="12" cy="12" r="3"/><path d="M12 3 V5 M12 19 V21 M3 12 H5 M19 12 H21 M5.6 5.6 L7 7 M17 17 L18.4 18.4 M5.6 18.4 L7 17 M17 7 L18.4 5.6"/>','help':'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5 A2.5 2.5 0 1 1 12 12 V13.5 M12 16.8 V17"/>',
'search':'<circle cx="11" cy="11" r="6.5"/><path d="M16 16 L20 20"/>','bell':'<path d="M6 16 V11 A6 6 0 0 1 18 11 V16 L19.5 18 H4.5 Z"/><path d="M10 20.5 A2 2 0 0 0 14 20.5"/>','mic':'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11 A6.5 6.5 0 0 0 18.5 11 M12 17.5 V21"/>',
'moon':'<path d="M20 14 A8 8 0 1 1 10 4 A6.5 6.5 0 0 0 20 14 Z"/>','chev':'<path d="M9 6 L15 12 L9 18"/>','chevd':'<path d="M6 9 L12 15 L18 9"/>','plus':'<path d="M12 5 V19 M5 12 H19"/>','x':'<path d="M6 6 L18 18 M18 6 L6 18"/>',
'check':'<path d="M5 12.5 L10 17 L19 7.5"/>','edit':'<path d="M4 20 H8 L19 9 L15 5 L4 16 Z"/>','video':'<rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10 L21 7 V17 L16 14"/>','clock':'<circle cx="12" cy="12" r="9"/><path d="M12 7 V12 L15 14"/>',
'spark':'<path d="M12 3 L13.8 9.2 L20 11 L13.8 12.8 L12 19 L10.2 12.8 L4 11 L10.2 9.2 Z"/>','alert':'<circle cx="12" cy="12" r="9"/><path d="M12 7.5 V13 M12 16.3 V16.5"/>','filter':'<path d="M4 5 H20 L14 12.5 V19 L10 17 V12.5 Z"/>','doc':'<path d="M7 3 H14 L18 7 V21 H7 Z"/><path d="M14 3 V7 H18"/>',
'arrow':'<path d="M5 12 H19 M13 6 L19 12 L13 18"/>','link':'<path d="M10 14 L14 10 M8.5 11 L6.5 13 A3.5 3.5 0 0 0 11.5 18 L13.5 16 M15.5 13 L17.5 11 A3.5 3.5 0 0 0 12.5 6 L10.5 8"/>','pill':'<rect x="3" y="8.5" width="18" height="7" rx="3.5" transform="rotate(-35 12 12)"/><path d="M9.5 8 L14.5 16"/>',
'ticket':'<path d="M4 7 H20 V10 A2 2 0 0 0 20 14 V17 H4 V14 A2 2 0 0 0 4 10 Z"/>','shield':'<path d="M12 3 L19 6 V11 C19 15.5 16 19 12 21 C8 19 5 15.5 5 11 V6 Z"/>','up':'<path d="M7 14 L12 9 L17 14"/>','down':'<path d="M7 10 L12 15 L17 10"/>','dots':'<circle cx="6" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="18" cy="12" r="1.2"/>'}
def i(n,s=18,st=''): return f'<svg class="i" viewBox="0 0 24 24" style="width:{s}px;height:{s}px;{st}">{IC[n]}</svg>'
TONE=[('#D7E9E1','#1F5E4B'),('#DCE6F2','#24507A'),('#F2E3D5','#7A4A1F'),('#E9E2F0','#5A4677'),('#F3DCDC','#7E2E2E'),('#E4E8D6','#4F5A1E')]
TONED=[('#1F3A31','#9CE0C6'),('#1C2C3D','#A7CBEA'),('#3A2C1E','#EBC59C'),('#2E2639','#CDB8E6'),('#3A2121','#F1B1B1'),('#2C311C','#CFD99E')]
def av(ini,k=0,s=32,dark=False):
    bg,fg=(TONED if dark else TONE)[k%6]
    return f'<span style="width:{s}px;height:{s}px;border-radius:50%;background:{bg};color:{fg};display:inline-flex;align-items:center;justify-content:center;font-size:{s*0.38:.0f}px;font-weight:700;flex-shrink:0">{ini}</span>'
def logo(dark):
    p='#6FD0AE' if dark else '#13684F'
    return f'<div style="display:flex;align-items:center;gap:9px"><svg width="28" height="28" viewBox="0 0 28 28"><rect width="28" height="28" rx="8" fill="{p}"/><path d="M9 20 V8 H15 A4 4 0 0 1 15 16 H9" fill="none" stroke="{"#0B100E" if dark else "#fff"}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="19.5" cy="19.5" r="2" fill="{"#0B100E" if dark else "#fff"}"/></svg><span style="font-weight:800;font-size:18px;letter-spacing:-.02em">Praxa</span></div>'
NAV=[('home','Overview'),('cal','Appointments'),('users','Patients'),('steth','Providers'),('building','Clinics'),('note','Notes'),('bill','Billing & claims'),('chart','Reports')]
def shell(inner,dark=False,active='Overview',role='Admin',who=('DR','Dana Reyes'),w=1440,h=960,voice=False):
    nav=''.join(f'<div style="display:flex;align-items:center;gap:10px;height:38px;padding:0 12px;border-radius:9px;font-weight:{600 if n==active else 500};{"background:var(--ps);color:var(--pi)" if n==active else "color:var(--muted)"}">{i(ic,18)}{n}</div>' for ic,n in NAV if not (role=='Provider' and n in ('Clinics','Providers')))
    side=f'''<aside style="width:236px;flex-shrink:0;background:var(--panel);border-inline-end:1px solid var(--line);padding:18px 14px;display:flex;flex-direction:column;gap:22px">
{logo(dark)}
<div style="display:flex;align-items:center;gap:8px;padding:8px 10px;border:1px solid var(--line);border-radius:10px;font-size:13px">{i('building',16,'color:var(--subtle)')}<div style="flex:1;min-width:0"><div class="s" style="font-size:11px">Clinic</div><div style="font-weight:600;white-space:nowrap">{'All clinics' if role=='Admin' else 'Northside Clinic'}</div></div>{i('chevd',16,'color:var(--subtle)')}</div>
<nav style="display:flex;flex-direction:column;gap:2px">{nav}</nav>
<div style="margin-top:auto;display:flex;flex-direction:column;gap:2px">{''.join(f'<div style="display:flex;align-items:center;gap:10px;height:36px;padding:0 12px;color:var(--muted);font-weight:500">{i(a,18)}{b}</div>' for a,b in [('gear','Settings'),('help','Support')])}</div></aside>'''
    top=f'''<header style="height:64px;flex-shrink:0;display:flex;align-items:center;gap:12px;padding:0 24px;border-bottom:1px solid var(--line);background:var(--panel)">
<div style="flex:1;max-width:460px;height:40px;border-radius:10px;background:var(--sunk);display:flex;align-items:center;gap:10px;padding:0 12px;color:var(--subtle)">{i('search',18)}<span style="flex:1">Search patients, appointments, notes</span><span class="mono" style="font-size:11px;border:1px solid var(--line);border-radius:6px;padding:2px 6px">⌘K</span></div>
<div style="flex:1"></div>
<span style="height:40px;padding:0 14px 0 12px;border-radius:999px;display:flex;align-items:center;gap:8px;font-weight:600;font-size:13px;{"background:var(--p);color:var(--onp)" if voice else "background:var(--ps);color:var(--pi)"}">{i('mic',18)}{'Listening…' if voice else 'Voice'}</span>
<span class="btn g" style="width:40px;padding:0;position:relative">{i('bell',20)}<span style="position:absolute;top:8px;right:10px;width:8px;height:8px;border-radius:50%;background:var(--err);border:2px solid var(--panel)"></span></span>
<span class="btn g" style="width:40px;padding:0">{i('moon',19)}</span>
<div style="display:flex;align-items:center;gap:10px;padding-inline-start:8px;border-inline-start:1px solid var(--line)">{av(who[0],1,34,dark)}<div style="line-height:1.25"><div style="font-weight:600;font-size:13px">{who[1]}</div><div class="s" style="font-size:12px">{role}</div></div></div></header>'''
    return f'''<div class="px{' dark' if dark else ''}" style="width:{w}px;height:{h}px;display:flex;overflow:hidden;position:relative">{side}<div style="flex:1;display:flex;flex-direction:column;min-width:0">{top}<main style="flex:1;overflow:hidden;padding:24px 28px;display:flex;flex-direction:column;gap:18px;position:relative">{inner}</main></div></div>'''
def page(body,w=1440,h=960):
    fonts=''.join(f'<link rel="stylesheet" href="file://{FONTS}{f}">' for f in FL)
    return f'<!doctype html><html><head><meta charset="utf-8">{fonts}<style>body{{margin:0}}{CSS}</style></head><body><div style="width:{w}px;height:{h}px;overflow:hidden">{body}</div></body></html>'
def shoot(items,scale=2):
    with sync_playwright() as p:
        b=p.chromium.launch()
        for html,w,h,out in items:
            open('/tmp/_px.html','w').write(html)
            pg=b.new_page(viewport={'width':w,'height':h},device_scale_factor=scale); pg.goto('file:///tmp/_px.html'); pg.wait_for_timeout(500)
            pg.screenshot(path=out); pg.close()
        b.close()
