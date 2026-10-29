FONTS='/tmp/claude-0/-home-claude/a7376101-3103-5ad9-97ca-42e951e26fac/scratchpad/fonts/node_modules/@fontsource/'
CSS=r'''
.uf{--bg:#FBF7F1;--panel:#FFFFFF;--sunk:#F3ECE2;--ink:#241B2F;--muted:#5E5468;--subtle:#857B8F;--line:#E9E0D4;
--p:#5B3A73;--p-ink:#4A2E5E;--p-soft:#EFE7F4;--on-p:#FFFFFF;--sa:#E9A23B;--sa-soft:#FCEFD8;--sa-ink:#7A4F05;
--sg:#5E8B6E;--sg-soft:#E5EFE7;--sg-ink:#33603F;--live:#B4232A;--live-soft:#FBE7E6;
font-family:'Inter',sans-serif;color:var(--ink);background:var(--bg);-webkit-font-smoothing:antialiased}
.uf.dark{--bg:#19131F;--panel:#241C2C;--sunk:#120D17;--ink:#F4EEF7;--muted:#C1B6CB;--subtle:#9B8FA7;--line:#3A2F44;
--p:#C3A8E0;--p-ink:#D6C2EC;--p-soft:#3A2A48;--on-p:#19131F;--sa:#F0B65C;--sa-soft:#3D2F17;--sa-ink:#F6CD88;
--sg:#8FBF9C;--sg-soft:#1F3427;--sg-ink:#A9D4B4;--live:#FF8A80;--live-soft:#43201F}
.uf[dir=rtl]{font-family:'IBM Plex Sans Arabic',sans-serif}
.uf *{box-sizing:border-box}
.uf .dsp{font-family:'Fraunces',serif;font-weight:600;letter-spacing:-.01em}
.uf[dir=rtl] .dsp{font-family:'Readex Pro',sans-serif;font-weight:600;letter-spacing:0}
.uf .mut{color:var(--muted)}.uf .sub{color:var(--subtle)}
.uf .card{background:var(--panel);border:1px solid var(--line);border-radius:20px}
.uf .chip{display:inline-flex;align-items:center;gap:6px;height:26px;padding:0 11px;border-radius:999px;font-size:12px;font-weight:600;background:var(--sunk);color:var(--muted);white-space:nowrap}
.uf .b-ws{background:var(--p-soft);color:var(--p-ink)}.uf .b-on{background:var(--sg-soft);color:var(--sg-ink)}.uf .b-one{background:var(--sa-soft);color:var(--sa-ink)}
.uf .btn{height:44px;padding:0 18px;border-radius:999px;font-size:15px;font-weight:600;display:inline-flex;align-items:center;justify-content:center;gap:8px;border:1.5px solid var(--line);background:var(--panel);color:var(--ink)}
.uf .btn.pri{background:var(--p);border-color:var(--p);color:var(--on-p)}
.uf svg.i{width:20px;height:20px;stroke:currentColor;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.uf .av{border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0;background:var(--p-soft);color:var(--p-ink)}
'''
IC={'bell':'<path d="M6 16 V11 A6 6 0 0 1 18 11 V16 L20 18 H4 Z"/><path d="M10 21 H14"/>','home':'<path d="M3 11 L12 4 L21 11 V20 H14 V14 H10 V20 H3 Z"/>',
'search':'<circle cx="11" cy="11" r="7"/><path d="M20 20 L16 16"/>','cal':'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10 H21 M8 3 V7 M16 3 V7"/>',
'user':'<circle cx="12" cy="8" r="4"/><path d="M4 21 C5 16 8.5 14 12 14 C15.5 14 19 16 20 21"/>','clock':'<circle cx="12" cy="12" r="9"/><path d="M12 7 V12 L15 14"/>',
'globe':'<circle cx="12" cy="12" r="9"/><path d="M3 12 H21 M12 3 C15 6 15 18 12 21 C9 18 9 6 12 3"/>','users':'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20 C3 15.5 6 14 9 14 C12 14 15 15.5 15.5 20"/><path d="M16 4.6 A3.5 3.5 0 0 1 16 11.4"/><path d="M18 14.3 C20.4 15 21.4 17 21.5 20"/>',
'shield':'<path d="M12 3 L20 6 V12 C20 16.5 16.5 19.5 12 21 C7.5 19.5 4 16.5 4 12 V6 Z"/><path d="M8.5 12 L11 14.5 L15.5 9.5"/>','chev':'<path d="M9 6 L15 12 L9 18"/>',
'heart':'<path d="M12 20 C5 15 3 11.5 3 8.5 A4.5 4.5 0 0 1 12 6.5 A4.5 4.5 0 0 1 21 8.5 C21 11.5 19 15 12 20 Z"/>','arrow':'<path d="M5 12 H19 M13 6 L19 12 L13 18"/>',
'lock':'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11 V8 A4 4 0 0 1 16 8 V11"/>','video':'<rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10 L21 7 V17 L16 14"/>',
'norec':'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/><path d="M5 19 L19 5"/>','door':'<path d="M5 21 V4 H15 V21"/><path d="M15 12 H21 M18 9 L21 12 L18 15"/>','filter':'<path d="M4 6 H20 M7 12 H17 M10 18 H14"/>','x':'<path d="M6 6 L18 18 M18 6 L6 18"/>','check':'<path d="M5 12.5 L10 17 L19 7"/>','info':'<circle cx="12" cy="12" r="9"/><path d="M12 11 V16 M12 8 V8.2"/>'}
def ic(n,s=20,style=''): return f'<svg class="i" viewBox="0 0 24 24" style="width:{s}px;height:{s}px;{style}">{IC[n]}</svg>'
def mark(s=28,c1='var(--p)',c2='var(--sa)'):
    import math
    dots=''.join(f'<circle cx="{16+10*math.cos(math.radians(a)):.2f}" cy="{16+10*math.sin(math.radians(a)):.2f}" r="3.2" fill="{c2 if i==0 else c1}"/>' for i,a in enumerate([-90,-18,54,126,198]))
    return f'<svg width="{s}" height="{s}" viewBox="0 0 32 32" aria-hidden="true">{dots}</svg>'
def logo(s=26,rtl=False):
    word='ألفة' if rtl else 'ulfa'
    fam="'Readex Pro'" if rtl else "'Fraunces'"
    return f'<span style="display:inline-flex;align-items:center;gap:8px">{mark(s)}<span style="font-family:{fam},serif;font-weight:600;font-size:{int(s*.82)}px;color:var(--ink);letter-spacing:-.01em">{word}</span></span>'
def av(ini,s=36,bg=None,fg=None):
    st=f'background:{bg};color:{fg};' if bg else ''
    return f'<span class="av" style="width:{s}px;height:{s}px;font-size:{int(s*.38)}px;{st}">{ini}</span>'
def art(kind,s=72):
    # abstract calm illustrations from overlapping circles
    P='var(--p)';S='var(--sa)';G='var(--sg)';PS='var(--p-soft)';SS='var(--sa-soft)';GS='var(--sg-soft)'
    shapes={
     'worry':f'<circle cx="30" cy="40" r="18" fill="{PS}"/><circle cx="44" cy="34" r="14" fill="none" stroke="{P}" stroke-width="3"/><circle cx="50" cy="52" r="6" fill="{S}"/>',
     'loss':f'<circle cx="36" cy="38" r="20" fill="{GS}"/><path d="M20 50 C30 36 44 36 54 50" fill="none" stroke="{G}" stroke-width="3" stroke-linecap="round"/><circle cx="54" cy="24" r="5" fill="{S}"/>',
     'pressure':f'<rect x="16" y="20" width="40" height="40" rx="20" fill="{SS}"/><circle cx="36" cy="40" r="10" fill="{S}"/><circle cx="36" cy="40" r="20" fill="none" stroke="{P}" stroke-width="3" stroke-dasharray="4 6"/>',
     'parent':f'<circle cx="30" cy="38" r="16" fill="{PS}"/><circle cx="46" cy="46" r="10" fill="{SS}"/><circle cx="46" cy="46" r="10" fill="none" stroke="{S}" stroke-width="3"/>',
     'change':f'<path d="M14 54 C24 30 48 30 58 18" fill="none" stroke="{G}" stroke-width="3" stroke-linecap="round"/><circle cx="20" cy="50" r="8" fill="{GS}"/><circle cx="56" cy="20" r="7" fill="{S}"/>',
     'alone':f'<circle cx="36" cy="40" r="22" fill="{PS}"/><circle cx="36" cy="40" r="7" fill="{P}"/><circle cx="58" cy="22" r="4" fill="{S}"/><circle cx="16" cy="24" r="3" fill="{P}" opacity=".5"/>'}
    return f'<svg width="{s}" height="{s}" viewBox="0 0 72 72" aria-hidden="true">{shapes[kind]}</svg>'
def phone(inner,dark=False,rtl=False,tab=0,labels=None):
    labels=labels or (['الرئيسية','استكشف','جلساتي','حسابي'] if rtl else ['Home','Explore','Sessions','Me'])
    icons=['home','search','cal','user']
    nav=''.join(f'<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;font-size:11px;font-weight:600;color:{"var(--p)" if i==tab else "var(--subtle)"}">{ic(icons[i],22)}{labels[i]}</div>' for i in range(4))
    return f'''<div class="uf{' dark' if dark else ''}" dir="{'rtl' if rtl else 'ltr'}" style="width:390px;height:844px;display:flex;flex-direction:column;background:var(--bg);overflow:hidden">
<div dir="ltr" style="height:44px;flex-shrink:0;display:flex;align-items:center;justify-content:space-between;padding:0 26px;font-size:15px;font-weight:600;font-family:Inter"><span>9:41</span><span style="width:24px;height:11px;border-radius:3px;border:1.5px solid var(--ink)"></span></div>
<div style="flex:1;overflow:hidden;position:relative">{inner}</div>
<div style="height:80px;flex-shrink:0;border-top:1px solid var(--line);background:var(--panel);display:flex;padding:10px 8px 0">{nav}</div></div>'''
