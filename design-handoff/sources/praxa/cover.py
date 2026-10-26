from kit import shoot, FONTS, FL
D='/tmp/claude-0/-home-claude/a7376101-3103-5ad9-97ca-42e951e26fac/scratchpad/praxa/out/'
def cover(w,h,dark=False):
    k=w/1600; bg='#0E2A2D' if dark else '#F6F4EE'; arc='#123236' if dark else '#E9E5DA'; s='-dark' if dark else ''
    fonts=''.join(f'<link rel="stylesheet" href="file://{FONTS}{f}">' for f in FL)
    dw=(1120 if h/w>0.7 else 960)*k; dtop=(h-dw*960/1440)/2-(30 if h/w>0.7 else 46)*k
    return f'''<!doctype html><html><head>{fonts}</head><body style="margin:0"><div style="width:{w}px;height:{h}px;position:relative;overflow:hidden;background:{bg}">
<svg width="100%" height="100%" style="position:absolute;inset:0"><defs><pattern id="a" width="{160*k}" height="{120*k}" patternUnits="userSpaceOnUse"><path d="M{24*k} {40*k} C{24*k} {96*k} {104*k} {96*k} {104*k} {40*k}" fill="none" stroke="{arc}" stroke-width="{12*k}" stroke-linecap="round"/></pattern></defs>
<rect width="100%" height="100%" fill="url(#a)"/><circle cx="{w*0.62}" cy="{h*0.52}" r="{h*0.62}" fill="{'#17463D' if dark else '#CFE5DB'}"/></svg>
<img src="file://{D}provider{s}.png" style="position:absolute;left:{90*k}px;top:{dtop}px;width:{dw}px;border-radius:{16*k}px;box-shadow:0 {30*k}px {80*k}px -{20*k}px rgba(14,42,45,.45),0 0 0 1px rgba(14,42,45,.08)">
<div style="position:absolute;left:{w-90*k-420*k}px;top:{h*0.5-330*k}px;width:{420*k}px;height:{640*k}px;border-radius:{16*k}px;overflow:hidden;box-shadow:0 {30*k}px {80*k}px -{20*k}px rgba(14,42,45,.5),0 0 0 1px rgba(14,42,45,.1)"><img src="file://{D}aidx{s}.png" style="position:absolute;width:{1440*420/600*k}px;left:-{840*420/600*k}px;top:0"></div>
<div style="position:absolute;left:{90*k}px;bottom:{56*k}px;display:flex;align-items:center;gap:{12*k}px;background:{'#17393D' if dark else '#FFFFFF'};border-radius:999px;padding:{12*k}px {22*k}px {12*k}px {14*k}px;box-shadow:0 {10*k}px {30*k}px -{10*k}px rgba(14,42,45,.35)">
<svg width="{36*k}" height="{36*k}" viewBox="0 0 28 28"><rect width="28" height="28" rx="8" fill="#13684F"/><path d="M9 20 V8 H15 A4 4 0 0 1 15 16 H9" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="19.5" cy="19.5" r="2" fill="#fff"/></svg>
<span style="font-family:'Plus Jakarta Sans';font-weight:800;font-size:{30*k}px;letter-spacing:-.02em;color:{'#F6F4EE' if dark else '#17201D'}">Praxa</span><span style="font-family:'Plus Jakarta Sans';font-weight:500;font-size:{19*k}px;color:{'#A9C2C4' if dark else '#4A5752'};margin-inline-start:{6*k}px">Clinic operations, four roles</span></div>
</div></body></html>'''
shoot([(cover(1600,1200),1600,1200,D+'praxa-thumb.png'),(cover(1600,900),1600,900,D+'praxa-hero.png'),(cover(1600,1200,True),1600,1200,D+'praxa-thumb-dark.png'),(cover(1600,900,True),1600,900,D+'praxa-hero-dark.png')],2)
