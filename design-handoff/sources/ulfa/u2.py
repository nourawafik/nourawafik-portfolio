import sys;sys.path.insert(0,"/tmp/claude-0/-home-claude/a7376101-3103-5ad9-97ca-42e951e26fac/scratchpad")
from sbar import sbar
from uc import IC
PAL={
'slate':dict(p='#2E5E7E',pH='#264F6A',ps='#E8F0F5',pi='#24506C',onp='#FFFFFF'),
'forest':dict(p='#2F6B57',pH='#285B4A',ps='#E7F1EC',pi='#255746',onp='#FFFFFF'),
'rose':dict(p='#8E4A57',pH='#7A3D49',ps='#F5EAEC',pi='#7A3D49',onp='#FFFFFF'),
'ochre':dict(p='#7A5A16',pH='#664A10',ps='#F5EEDC',pi='#664A10',onp='#FFFFFF'),
}
DK={'slate':('#8DB8D6','#1E3340','#A9CBE2'),'forest':('#8CCDB4','#173329','#A6DCC7'),'rose':('#E3A9B4','#3A2227','#EDBFC8'),'ochre':('#DDBB6E','#352B14','#E8CC8C')}
def themes():
    o=''
    for n,P in PAL.items(): o+=f'.u.{n}{{--p:{P["p"]};--ps:{P["ps"]};--pi:{P["pi"]};--onp:#FFFFFF}}'
    for n,(a,b,c) in DK.items(): o+=f'.u.{n}.dark{{--p:{a};--ps:{b};--pi:{c};--onp:#0D1316}}'
    return o
def css(pal='slate'):
    P=PAL[pal]
    return f'''
.u{{--bg:#F7F7F5;--panel:#FFFFFF;--sunk:#F0F1EF;--ink:#1E2A30;--muted:#4F5B62;--subtle:#6F7A80;--line:#E2E5E4;
--p:{P['p']};--ps:{P['ps']};--pi:{P['pi']};--onp:{P['onp']};
--ws:#5A4A8C;--ws-bg:#EEEBF6;--on:#2F7A55;--on-bg:#E6F3EC;--one:#8A5A00;--one-bg:#FFF3D6;--live:#B42318;--live-bg:#FDECEA;--star:#C98A12;
font-family:'Inter',sans-serif;color:var(--ink);background:var(--bg);-webkit-font-smoothing:antialiased}}
.u.dark{{--bg:#121A1E;--panel:#1A242A;--sunk:#0D1316;--ink:#EEF2F3;--muted:#B4BFC4;--subtle:#93A0A6;--line:#2A363C;
--p:#8DB8D6;--ps:#1E3340;--pi:#A9CBE2;--onp:#0D1316;--ws:#C3B6F0;--ws-bg:#2B2640;--on:#86D3AB;--on-bg:#173326;--one:#F2C45A;--one-bg:#3A3115;--live:#FF8C7F;--live-bg:#3F1E1B;--star:#F2C45A}}
.u.forest.dark{{--p:#8CCDB4;--ps:#173329;--pi:#A6DCC7}}
.u[dir=rtl]{{font-family:'IBM Plex Sans Arabic',sans-serif}}
.u *{{box-sizing:border-box}}
.u .col>*{{flex-shrink:0}}
.u .t{{font-family:'Fraunces',serif;font-weight:600;letter-spacing:-.005em}}
.u[dir=rtl] .t{{font-family:'Readex Pro',sans-serif;font-weight:600;letter-spacing:0}}
.u .m{{color:var(--muted)}}.u .s{{color:var(--subtle)}}
.u .card{{background:var(--panel);border:1px solid var(--line);border-radius:16px}}
.u .chip{{display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 12px;border-radius:999px;font-size:13px;font-weight:500;background:var(--sunk);color:var(--muted);white-space:nowrap}}
.u .badge{{display:inline-flex;align-items:center;gap:5px;height:24px;padding:0 10px;border-radius:8px;font-size:12px;font-weight:600}}
.u .ws{{background:var(--ws-bg);color:var(--ws)}}.u .on{{background:var(--on-bg);color:var(--on)}}.u .one{{background:var(--one-bg);color:var(--one)}}.u .live{{background:var(--live-bg);color:var(--live)}}
.u .btn{{height:44px;padding:0 18px;border-radius:12px;font-size:15px;font-weight:600;display:inline-flex;align-items:center;justify-content:center;gap:8px;border:1.5px solid var(--line);background:var(--panel);color:var(--ink)}}
.u .btn.p{{background:var(--p);border-color:var(--p);color:var(--onp)}}
.u .ib{{width:42px;height:42px;border-radius:12px;border:1px solid var(--line);background:var(--panel);display:flex;align-items:center;justify-content:center;color:var(--ink);position:relative}}
.u svg.i{{fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}}
.u .av{{border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0}}
'''+themes()
IC2=dict(IC); IC2.update({'dots':'<circle cx="6" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="18" cy="12" r="1.2"/>','star':'<path d="M12 3.5 L14.6 8.9 L20.5 9.6 L16.1 13.6 L17.3 19.5 L12 16.6 L6.7 19.5 L7.9 13.6 L3.5 9.6 L9.4 8.9 Z"/>',
'mic-off':'<path d="M9 9 V11 A3 3 0 0 0 14 13.2 M15 10 V6 A3 3 0 0 0 9.2 5.1"/><path d="M5 11 A7 7 0 0 0 16.5 16.4 M19 11 A7 7 0 0 1 18.6 13.3 M12 18 V21 M3 3 L21 21"/>','mic':'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11 A7 7 0 0 0 19 11 M12 18 V21"/>',
'cam-off':'<path d="M3 3 L21 21"/><path d="M15 8 V7 A1 1 0 0 0 14 6 H8.5 M4.5 6.3 A1 1 0 0 0 3 7 V17 A1 1 0 0 0 4 18 H14 A1 1 0 0 0 15 17 V14 L21 17 V7 L17 9"/>','hand':'<path d="M8 13 V6.5 A1.5 1.5 0 0 1 11 6.5 V12 M11 11 V4.5 A1.5 1.5 0 0 1 14 4.5 V11 M14 11 V5.5 A1.5 1.5 0 0 1 17 5.5 V13 C17 18 14.5 21 11 21 C8 21 6.5 19 5 16 L3.6 13.4 A1.4 1.4 0 0 1 6 12 L8 15"/>',
'leave':'<path d="M14 4 H6 A1 1 0 0 0 5 5 V19 A1 1 0 0 0 6 20 H14"/><path d="M10 12 H21 M17 8 L21 12 L17 16"/>','plus':'<path d="M12 5 V19 M5 12 H19"/>','tag':'<path d="M3 12 V4 H11 L20 13 L12 21 Z"/><circle cx="7.5" cy="7.5" r="1.2"/>','seat':'<path d="M7 4 V12 H17 M7 12 L6 20 M17 12 L18 20 M5 12 H19"/>'})
def i2(n,s=20,style=''): return f'<svg class="i" viewBox="0 0 24 24" style="width:{s}px;height:{s}px;{style}">{IC2[n]}</svg>'
def star(s=14): return f'<svg viewBox="0 0 24 24" style="width:{s}px;height:{s}px;fill:var(--star);stroke:none">{IC2["star"]}</svg>'
def frame(inner,pal='slate',dark=False,rtl=False,nav=None,status_dark=False,navtab=1):
    labels=['الرئيسية','استكشف','جلساتي','حسابي'] if rtl else ['Home','Explore','My sessions','Profile']
    icons=['home','search','cal','user']
    navh=''
    if nav!=False:
        items=''.join(f'<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;font-size:11px;font-weight:600;color:{"var(--p)" if i==navtab else "var(--subtle)"}">{i2(icons[i],22)}{labels[i]}</div>' for i in range(4))
        navh=f'<div style="height:82px;flex-shrink:0;border-top:1px solid var(--line);background:var(--panel);display:flex;padding:10px 6px 0">{items}</div>'
    return f'''<div class="u {pal}{' dark' if dark else ''}" dir="{'rtl' if rtl else 'ltr'}" style="width:390px;height:844px;display:flex;flex-direction:column;background:var(--bg);overflow:hidden;position:relative">
{sbar()}
<div style="flex:1;overflow:hidden;position:relative;display:flex;flex-direction:column">{inner}</div>{navh}</div>'''
