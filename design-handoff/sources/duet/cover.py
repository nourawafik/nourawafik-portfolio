import sys;sys.path.insert(0,'/tmp/claude-0/-home-claude/a7376101-3103-5ad9-97ca-42e951e26fac/scratchpad/duet')
from render import *
D='/tmp/claude-0/-home-claude/a7376101-3103-5ad9-97ca-42e951e26fac/scratchpad/duet/'
def cover(w,h,dark=False,dw=1150,dtop=None,pw=330,ptop=None,pill_bottom=70):
    s1='hi-s1d.png' if dark else 'hi-s1.png'; s2='hi-s2d.png' if dark else 'hi-s2.png'
    bg='#0E2A2D' if dark else '#F6F4EE'; arc='#123236' if dark else '#E9E5DA'
    k=w/1600
    dtop=h*0.5-470*k if dtop is None else dtop*k
    ptop=h*0.5-380*k if ptop is None else ptop*k
    return page(f'''<div style="width:{w}px;height:{h}px;position:relative;overflow:hidden;background:{bg}">
<svg width="100%" height="100%" style="position:absolute;inset:0"><defs><pattern id="a" width="{160*k}" height="{120*k}" patternUnits="userSpaceOnUse"><path d="M{24*k} {40*k} C{24*k} {96*k} {104*k} {96*k} {104*k} {40*k}" fill="none" stroke="{arc}" stroke-width="{12*k}" stroke-linecap="round"/></pattern>
<linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4B4FD8"/><stop offset="1" stop-color="#F0794A"/></linearGradient></defs>
<rect width="100%" height="100%" fill="url(#a)"/><rect x="{w*0.5}" y="{-h*0.15}" width="{w*0.65}" height="{h*1.3}" rx="{h*0.65}" fill="url(#g)" opacity=".95"/></svg>
<img src="file://{D}{s1}" style="position:absolute;left:{90*k}px;top:{dtop}px;width:{dw*k}px;border-radius:{18*k}px;box-shadow:0 {30*k}px {80*k}px -{20*k}px rgba(14,42,45,.45),0 0 0 1px rgba(14,42,45,.08)">
<img src="file://{D}{s2}" style="position:absolute;left:{w-90*k-pw*k}px;top:{ptop}px;width:{pw*k}px;border-radius:{40*k}px;box-shadow:0 {30*k}px {80*k}px -{20*k}px rgba(14,42,45,.5),0 0 0 {8*k}px #0E2A2D">
<div style="position:absolute;left:{90*k}px;bottom:{pill_bottom*k}px;display:flex;align-items:center;gap:{14*k}px;background:{'#17393D' if dark else '#FFFFFF'};border-radius:999px;padding:{12*k}px {22*k}px {12*k}px {14*k}px;box-shadow:0 {10*k}px {30*k}px -{10*k}px rgba(14,42,45,.35)">
<svg width="{40*k}" height="{40*k}" viewBox="0 0 32 32"><circle cx="12" cy="16" r="9" fill="#4B4FD8"/><circle cx="20" cy="16" r="9" fill="#F0794A"/><path d="M16 9.1 A9 9 0 0 1 16 22.9 A9 9 0 0 1 16 9.1 Z" fill="#1B1F3B" opacity=".85"/></svg>
<span style="font-family:Inter;font-weight:800;font-size:{34*k}px;letter-spacing:-.03em;color:{'#F6F4EE' if dark else '#1B1F3B'}">duet</span>
<span style="font-family:Inter;font-weight:500;font-size:{20*k}px;color:{'#A9C2C4' if dark else '#5B6078'};margin-inline-start:{6*k}px">Two-sided AI hiring</span></div>
</div>''',w,h)
if __name__=='__main__':
    shoot([(cover(1600,1200),1600,1200,D+'cover-thumb.png'),(cover(1600,900,dw=1040,dtop=70,pw=290,ptop=110,pill_bottom=56),1600,900,D+'cover-hero.png'),
           (cover(1600,1200,True),1600,1200,D+'cover-thumb-dark.png'),(cover(1600,900,True,dw=1040,dtop=70,pw=290,ptop=110,pill_bottom=56),1600,900,D+'cover-hero-dark.png')],scale=2)
    from PIL import Image
    Image.open(D+'cover-hero.png').resize((800,450)).save(D+'cv2.png'); Image.open(D+'cover-thumb-dark.png').resize((800,600)).save(D+'cv3.png')
