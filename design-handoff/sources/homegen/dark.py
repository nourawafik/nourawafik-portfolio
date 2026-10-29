import re
P='/tmp/claude-0/-home-claude/a7376101-3103-5ad9-97ca-42e951e26fac/scratchpad/brand/project/'
def R(s,a,b,n=None):
    c=s.count(a)
    if c==0 or (n is not None and c!=n): raise SystemExit(f'{c} :: {a[:100]}')
    return s.replace(a,b)
BG='#0E2A2D';SURF='#17393D';SUNK='#0A2023';FG='#F6F4EE';MUT='#A9C2C4';SUB='#8FAAAD';LINE='#2B4A4E';ACC='#5BB5AF';ACCH='#7CC6C0';SOFT='#123F42'
for L in ['AR','EN']:
    s=open(P+f'Home-{L}.dc.html').read(); ar=L=='AR'
    s=s.replace('<title>Home, Arabic</title>','<title>Home, Arabic, dark</title>').replace('<title>Home, English</title>','<title>Home, English, dark</title>')
    # css vars for hover rules
    s=R(s,'.c-card{transition','.c-dark{--focus:#FFC845;--acc:#7CC6C0;--line:#2B4A4E;--fg:#F6F4EE}\n.c-card{transition',1)
    s=s.replace('box-shadow:0 1px 2px rgba(14,42,45,.06),0 10px 24px -14px rgba(14,42,45,.22)','box-shadow:0 1px 2px rgba(0,0,0,.25),0 10px 24px -14px rgba(0,0,0,.6)')
    s=s.replace('box-shadow:0 2px 4px rgba(14,42,45,.06),0 28px 48px -20px rgba(14,42,45,.38)','box-shadow:0 2px 4px rgba(0,0,0,.3),0 28px 48px -20px rgba(0,0,0,.75),0 0 0 1px #2B4A4E')
    # page root
    s=R(s,'style="width: 100%; min-height: 100%; background: #F6F4EE; color: #0E2A2D;',f'class="c-dark" style="width: 100%; min-height: 100%; background: {BG}; color: {FG};',1)
    # header logo: name strokes/fill -> FG, mark -> white-ish accent? on-dark: white mark
    hs=s.index('<header'); he=s.index('</header>')
    h=s[hs:he]
    h=h.replace('stroke="#0E2A2D" stroke-width="17"',f'stroke="{FG}" stroke-width="17"').replace('<g fill="#0E2A2D">',f'<g fill="{FG}">').replace('fill="#0E2A2D"><circle',f'fill="{FG}"><circle')
    h=h.replace('stroke="#0E7C7B" stroke-width="17"','stroke="#FFFFFF" stroke-width="17"')
    h=h.replace('style="color: #0E2A2D; text-decoration: none"',f'style="color: {FG}; text-decoration: none"')
    h=h.replace('color: #0E2A2D; text-decoration: none; border: 2px solid #D8D4C8',f'color: {FG}; text-decoration: none; border: 2px solid {LINE}')
    h=h.replace('border: 2px solid #D8D4C8; background: #FFFFFF',f'border: 2px solid {LINE}; background: {SURF}')
    h=h.replace('stroke="#0E2A2D" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M4 7',f'stroke="{FG}" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M4 7')
    # moon -> sun
    h=re.sub(r'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E2A2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14 A8 8 0 1 1 10 4 A6.5 6.5 0 0 0 20 14 Z"></path></svg>',
        f'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFC845" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2 V4 M12 20 V22 M2 12 H4 M20 12 H22 M4.9 4.9 L6.3 6.3 M17.7 17.7 L19.1 19.1 M4.9 19.1 L6.3 17.7 M17.7 6.3 L19.1 4.9"></path></svg>',h)
    h=h.replace('aria-label="الوضع الغامق"','aria-label="الوضع الفاتح"').replace('aria-label="Dark mode"','aria-label="Light mode"')
    s=s[:hs]+h+s[he:]
    # generic
    s=s.replace('color: #3E5558',f'color: {MUT}')
    s=s.replace('color: #6B675C',f'color: {SUB}')
    s=s.replace('color: #0B6B6A; background: #E6F4F3',f'color: {ACCH}; background: {SOFT}')
    s=s.replace('font-weight: 500; color: #0B6B6A">',f'font-weight: 500; color: {ACCH}">')  # eyebrows
    # secondary button
    s=R(s,'color: #0E7C7B; background: #FFFFFF; border: 2px solid #0E7C7B',f'color: {ACCH}; background: transparent; border: 2px solid {ACC}',1)
    # links & prices
    s=s.replace('font-weight: 600; color: #0E7C7B',f'font-weight: 600; color: {ACCH}').replace('stroke="#0E7C7B" stroke-width="2" stroke-linecap="round"',f'stroke="{ACCH}" stroke-width="2" stroke-linecap="round"')
    s=s.replace('font-weight: 700; color: #0E7C7B',f'font-weight: 700; color: {ACCH}')
    # cards
    s=s.replace('background: #FFFFFF; border-radius: 24px',f'background: {SURF}; border-radius: 24px')
    s=s.replace('background: #FFFFFF; border: 3px solid #FF6B5B',f'background: {SURF}; border: 3px solid #FF6B5B')
    s=R(s,'class="c-card c-svc c-feat" style="background: #0E2A2D; color: #FFFFFF;',f'class="c-card c-svc c-feat" style="background: {SUNK}; color: #FFFFFF; box-shadow: inset 0 0 0 2px #FFC845;',1)
    s=s.replace('.c-feat:hover{box-shadow:0 28px 52px -18px rgba(255,200,69,.45)}','.c-feat:hover{box-shadow:inset 0 0 0 2px #FFC845,0 28px 52px -18px rgba(255,200,69,.35)}')
    s=s.replace(f'background: #0E2A2D; display: flex; align-items: center; justify-content: center; color: #FFFFFF; font-size: 15px">',f'background: {SUNK}; display: flex; align-items: center; justify-content: center; color: #FFFFFF; font-size: 15px">')
    # marquee band
    s=R(s,'style="background: #0E2A2D; height: 72px;',f'style="background: {SUNK}; height: 72px; border-block: 1px solid {LINE};',1)
    # about band
    s=R(s,'aria-labelledby="about-title" style="background: #FFFFFF"',f'aria-labelledby="about-title" style="background: {SUNK}"',1)
    s=s.replace('class="c-card c-trait" style="background: #F6F4EE;',f'class="c-card c-trait" style="background: {SURF};')
    s=R(s,'border: 6px solid #FFFFFF; display: flex',f'border: 6px solid {SUNK}; display: flex',1)
    # footer
    s=R(s,'<footer style="background: #0E2A2D; color: #FFFFFF">',f'<footer style="background: {SUNK}; color: #FFFFFF; border-top: 1px solid {LINE}">',1)
    # dots
    s=s.replace('.m-menu,.m-dots{display:none}','.m-menu,.m-dots{display:none}')
    # launcher pill
    s=s.replace('background: #FFFFFF; color: #0E2A2D; border: 2px solid #0E2A2D; border-radius: 999px; padding: 8px 16px; font-size: 16px; font-weight: 700; box-shadow: 0 6px 16px rgba(14,42,45,.15)','background: #FFFFFF; color: #0E2A2D; border: 2px solid #FFFFFF; border-radius: 999px; padding: 8px 16px; font-size: 16px; font-weight: 700; box-shadow: 0 6px 16px rgba(0,0,0,.4)')
    s=s.replace('box-shadow: 0 0 0 2px #0E7C7B; display: flex','box-shadow: 0 0 0 2px #5BB5AF; display: flex')
    # menu button
    s=s.replace('border: 2px solid #D8D4C8; background: #FFFFFF; align-items: center',f'border: 2px solid {LINE}; background: {SURF}; align-items: center')
    # body link default color
    s=s.replace('a{color:#0E7C7B}a:hover{color:#0B6B6A}',f'a{{color:{ACCH}}}a:hover{{color:{FG}}}')
    open(P+f'Home-{L}-Dark.dc.html','w').write(s)
print('ok')
