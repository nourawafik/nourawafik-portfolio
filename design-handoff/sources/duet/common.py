# shared pieces for Duet screens
CSS = r'''
.du{--bg:#FBFAF8;--panel:#FFFFFF;--sunk:#F3F2F7;--ink:#1B1F3B;--muted:#5B6078;--subtle:#8A8FA6;--line:#E7E5EE;
--tempo:#4B4FD8;--on-tempo:#FFFFFF;--tempo-ink:#3A3DB8;--tempo-soft:#EEEEFD;--lyric:#F0794A;--lyric-ink:#A8431A;--lyric-soft:#FFF0E8;
--ok:#1F7A52;--on-ok:#FFFFFF;--ok-soft:#E5F4EC;--warn:#8A5A00;--warn-soft:#FFF3D6;--no:#B42318;--no-soft:#FDECEA;
font-family:'Inter',sans-serif;color:var(--ink);background:var(--bg);-webkit-font-smoothing:antialiased;font-feature-settings:"cv11","ss01"}
.du.dark{--bg:#12142A;--panel:#1A1D38;--sunk:#0D0F21;--ink:#ECECF6;--muted:#A6A9C4;--subtle:#7C80A0;--line:#2B2F52;
--tempo:#8E91FF;--on-tempo:#12142A;--tempo-ink:#B4B6FF;--tempo-soft:#262A5C;--lyric:#FF9A70;--lyric-ink:#FFB592;--lyric-soft:#3A2530;
--ok:#6FD3A0;--on-ok:#0D0F21;--ok-soft:#173A2C;--warn:#F2C45A;--warn-soft:#3A3115;--no:#FF8C7F;--no-soft:#3F1E1B}
.du *{box-sizing:border-box}
.du .app{display:flex;height:100%;background:var(--bg)}
.du .rail{width:68px;border-inline-end:1px solid var(--line);display:flex;flex-direction:column;align-items:center;gap:10px;padding:18px 0;background:var(--panel)}
.du .ri{width:40px;height:40px;border-radius:12px;display:flex;align-items:center;justify-content:center;color:var(--subtle)}
.du .ri.on{background:var(--tempo-soft);color:var(--tempo-ink)}
.du .ri svg{width:20px;height:20px;stroke:currentColor;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.du .main{flex:1;display:flex;flex-direction:column;min-width:0}
.du .top{height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 28px;border-bottom:1px solid var(--line);background:var(--panel)}
.du .crumb{font-size:14px;color:var(--muted)} .du .crumb b{color:var(--ink);font-weight:600}
.du .btn{height:36px;padding:0 14px;border-radius:10px;font-size:14px;font-weight:600;display:inline-flex;align-items:center;gap:8px;border:1px solid var(--line);background:var(--panel);color:var(--ink)}
.du .btn.pri{background:var(--ink);color:var(--bg);border-color:var(--ink)}
.du .btn.tempo{background:var(--tempo);border-color:var(--tempo);color:var(--on-tempo)}
.du .btn svg{width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.du .chip{display:inline-flex;align-items:center;gap:6px;height:24px;padding:0 10px;border-radius:999px;font-size:12px;font-weight:600;background:var(--sunk);color:var(--muted)}
.du .chip.t{background:var(--tempo-soft);color:var(--tempo-ink)} .du .chip.l{background:var(--lyric-soft);color:var(--lyric-ink)}
.du .chip.ok{background:var(--ok-soft);color:var(--ok)} .du .chip.w{background:var(--warn-soft);color:var(--warn)}
.du .card{background:var(--panel);border:1px solid var(--line);border-radius:16px}
.du .av{border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;flex-shrink:0}
.du .h{font-weight:700;letter-spacing:-.01em}
.du .mut{color:var(--muted)} .du .sub{color:var(--subtle)}
.du .bar{height:6px;border-radius:999px;background:var(--sunk);overflow:hidden}.du .bar i{display:block;height:100%;border-radius:999px;background:var(--tempo)}
.du .assist{width:340px;border-inline-start:1px solid var(--line);background:var(--panel);display:flex;flex-direction:column}
.du .bub{padding:12px 14px;border-radius:14px;font-size:14px;line-height:1.5}
'''
def logo(size=28, word=True, ink='var(--ink)'):
    s=size
    mark=f'<svg width="{s}" height="{s}" viewBox="0 0 32 32" aria-hidden="true"><circle cx="12" cy="16" r="9" fill="var(--tempo)"/><circle cx="20" cy="16" r="9" fill="var(--lyric)"/><path d="M16 9.1 A9 9 0 0 1 16 22.9 A9 9 0 0 1 16 9.1 Z" fill="var(--ink)" opacity=".85"/></svg>'
    if not word: return mark
    return f'<span style="display:inline-flex;align-items:center;gap:8px">{mark}<span style="font-weight:800;font-size:{int(s*0.75)}px;letter-spacing:-.03em;color:{ink}">duet</span></span>'
ICON={
'home':'<path d="M3 11 L12 4 L21 11 V20 H14 V14 H10 V20 H3 Z"/>',
'users':'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20 C3 15.5 6 14 9 14 C12 14 15 15.5 15.5 20"/><path d="M16 4.6 A3.5 3.5 0 0 1 16 11.4"/><path d="M18 14.3 C20.4 15 21.4 17 21.5 20"/>',
'brief':'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7 V5 H16 V7"/>',
'chart':'<path d="M4 20 V10 M10 20 V4 M16 20 V13 M22 20 H2"/>',
'cog':'<circle cx="12" cy="12" r="3"/><path d="M12 2 V5 M12 19 V22 M2 12 H5 M19 12 H22 M4.9 4.9 L7 7 M17 17 L19.1 19.1 M4.9 19.1 L7 17 M17 7 L19.1 4.9"/>',
'spark':'<path d="M12 3 L13.8 9.2 L20 11 L13.8 12.8 L12 19 L10.2 12.8 L4 11 L10.2 9.2 Z"/>',
'check':'<path d="M5 12.5 L10 17 L19 7"/>','x':'<path d="M6 6 L18 18 M18 6 L6 18"/>',
'copy':'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8 V5 A1 1 0 0 0 15 4 H5 A1 1 0 0 0 4 5 V15 A1 1 0 0 0 5 16 H8"/>',
'send':'<path d="M4 12 L20 4 L14 20 L11 13 Z"/>','cal':'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10 H21 M8 3 V7 M16 3 V7"/>',
'plus':'<path d="M12 5 V19 M5 12 H19"/>','arrow':'<path d="M5 12 H19 M13 6 L19 12 L13 18"/>','search':'<circle cx="11" cy="11" r="7"/><path d="M20 20 L16 16"/>',
'flag':'<path d="M5 21 V4 H17 L15 8.5 L17 13 H5"/>','doc':'<path d="M6 3 H14 L19 8 V21 H6 Z"/><path d="M14 3 V8 H19"/>','heart':'<path d="M12 20 C5 15 3 11.5 3 8.5 A4.5 4.5 0 0 1 12 6.5 A4.5 4.5 0 0 1 21 8.5 C21 11.5 19 15 12 20 Z"/>',
'mic':'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11 A7 7 0 0 0 19 11 M12 18 V21"/>','bulb':'<path d="M9 18 H15 M10 21 H14"/><path d="M12 3 A6 6 0 0 0 8 13.5 C9 14.5 9 15.5 9 16 H15 C15 15.5 15 14.5 16 13.5 A6 6 0 0 0 12 3 Z"/>',
}
def ic(n,cls=''): return f'<svg viewBox="0 0 24 24">{ICON[n]}</svg>'
def tempo_avatar(s=32):
    return f'<span class="av" style="width:{s}px;height:{s}px;background:var(--tempo)"><svg width="{int(s*.55)}" height="{int(s*.55)}" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"><path d="M4 12 H7 L9 7 L12 17 L15 9 L17 12 H20"/></svg></span>'
def lyric_avatar(s=32):
    return f'<span class="av" style="width:{s}px;height:{s}px;background:var(--lyric)"><svg width="{int(s*.55)}" height="{int(s*.55)}" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"><path d="M4 14 C7 6 10 6 12 12 C14 18 17 18 20 10"/></svg></span>'
def person(initials,color,s=40): return f'<span class="av" style="width:{s}px;height:{s}px;background:{color};font-size:{int(s*.38)}px">{initials}</span>'
FONTS='/tmp/claude-0/-home-claude/a7376101-3103-5ad9-97ca-42e951e26fac/scratchpad/fonts/node_modules/@fontsource/'
