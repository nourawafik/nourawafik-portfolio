import re
import gen_work as G
from gen_work import *

KW={'praxa':'calendar scheduling appointments dashboard reports ai voice clinic saas healthcare تقويم مواعيد داشبورد تقارير ذكاء صوت عيادة',
 'duet':'ai hiring recruiter candidate design system توظيف ذكاء مساعد',
 'ulfa':'mobile app mental health bilingual arabic rtl تطبيق صحة نفسية',
 'ulfa-live':'video call zoom meeting live session مكالمة فيديو جلسة',
 'ulfa-studio':'calendar scheduling wallet payments payouts dashboard تقويم جدولة محفظة مدفوعات تحويل',
 'ulfa-ds':'design system tokens themes dark mode نظام تصميم ثيمات توكنز'}
def results(ty='all',ind='all',ft='all',q=''):
    pool=PROJ if (ft=='all' and not q) else PROJ+STUDIES
    out=[]
    for p in pool:
        if ty!='all' and ty not in p['type']: continue
        if ind!='all' and p['ind']!=ind: continue
        if ft!='all' and ft not in p['feat']: continue
        if q:
            hay=(' '.join(p['t'])+' '+' '.join(p['d'])+' '+KW.get(p['k'],'')).lower()
            if q.lower() not in hay: continue
        out.append(p)
    return out
def count(kind,key):
    if key=='all': return len(PROJ)
    return len(results(**{ {'type':'ty','ind':'ind','feat':'ft'}[kind]: key }))

SRCH='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16 L20 20"/></svg>'
FILT='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7 H14 M18 7 H20 M4 17 H6 M10 17 H20"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/></svg>'
X='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6 L18 18 M18 6 L6 18"/></svg>'

def chip(lab,n,on,T,h=40,f=15):
    st=f'background:{T["ink"]};color:{T["bg"]};border-color:{T["ink"]}' if on else f'background:transparent;color:{T["ink"]};border-color:{T["line"]}'
    nb='' if n is None else f'<span style="font-size:12px;font-weight:600;opacity:.7">{n}</span>'
    return (f'<button type="button" aria-pressed="{"true" if on else "false"}" style="flex-shrink:0;height:{h}px;padding:0 14px;border-radius:999px;'
            f'border:2px solid;{st};font:500 {f}px Rubik,sans-serif;display:inline-flex;align-items:center;gap:7px;white-space:nowrap">{lab}{nb}</button>')

def groups(T,L,rtl,active_feat,h,f):
    ind=''.join(chip(lab[L],count('ind',k) if k!='all' else None,k=='all',T,h,f) for k,lab in INDS)
    fe=''.join(chip(lab[L],count('feat',k) if k!='all' else None,k==active_feat,T,h,f) for k,lab in FEATS)
    lab=lambda t,mt=0: f'<div style="font-size:14px;font-weight:600;color:{T["subtle"]};margin-top:{mt}px">{t}</div>'
    return (f'<div style="display:flex;flex-direction:column;gap:10px">{lab("المجال" if rtl else "Industry")}<div style="display:flex;gap:8px;flex-wrap:wrap">{ind}</div>'
            f'{lab("الميزة" if rtl else "Feature",6)}<div style="display:flex;gap:8px;flex-wrap:wrap">{fe}</div></div>')

BASE={('en',0,0):'Home-EN',('ar',0,0):'Home-AR',('en',1,0):'Home-EN-Dark',('ar',1,0):'Home-AR-Dark',('en',0,1):'Home-EN-Mobile',('ar',1,1):'Home-AR-Mobile-Dark',('ar',0,1):'Home-AR-Mobile',('en',1,1):'Home-EN-Mobile-Dark'}


def _confused():
    t=open('/home/claude/nourawafik/nourawafik-portfolio/public/mascot/noon-confused.svg').read()
    t=re.sub(r'<metadata>.*?</metadata>','',t,flags=re.S)
    return re.sub(r'width="280" height="255"','width="100%" height="100%"',t,1)
SUGG=[('sched',('Calendars','تقويم')),('ai',('AI assistants','ذكاء اصطناعي')),('video',('Video calls','مكالمات فيديو')),('dash',('Dashboards','داشبورد')),('ds',('Design systems','أنظمة تصميم'))]
def empty(T,rtl,dark,mob,q):
    L=1 if rtl else 0
    sg=''.join(f'<a href="#" style="height:36px;padding:0 14px;border-radius:999px;border:2px solid {T["line"]};color:{T["ink"]};font-size:14px;font-weight:500;display:inline-flex;align-items:center;text-decoration:none">{lab[L]}</a>' for k,lab in SUGG)
    t1=(f'ملقتش "{q}" في أعمالي لسه' if rtl else f'Nothing for “{q}” in my work yet') if q else ('مفيش أعمال بالفلاتر دي لسه' if rtl else 'No work matches these filters yet')
    t2=('جرب كلمة تانية، أو دور بموضوع من دول:' if rtl else 'Try another word, or pick one of these:')
    ask=('بتدور على حاجة مش هنا؟ ابعتلي وأقولك أقدر أعملها إزاي.' if rtl else "Looking for something that isn't here? Ask me, and I'll tell you how I'd approach it.")
    b1=('اسألني عنها' if rtl else 'Ask me about it')
    b2=('امسح البحث' if rtl else 'Clear search') if q else ('امسح الفلاتر' if rtl else 'Clear filters')
    btns=(f'<div style="display:flex;gap:10px;flex-wrap:wrap;{"flex-direction:column" if mob else ""}">'
          f'<a href="#" style="height:48px;padding:0 22px;border-radius:999px;background:#FFC845;color:#0E2A2D;font-weight:700;font-size:16px;display:inline-flex;align-items:center;justify-content:center;text-decoration:none">{b1}</a>'
          f'<button type="button" style="height:48px;padding:0 22px;border-radius:999px;border:2px solid {T["ink"]};background:transparent;color:{T["ink"]};font:600 16px Rubik,sans-serif">{b2}</button></div>')
    art=(f'<div style="width:{150 if mob else 200}px;aspect-ratio:280/255;flex-shrink:0;background:#E6F4F3;border-radius:24px;padding:14px;box-sizing:content-box">{_confused()}</div>')
    return (f'<section role="status" style="display:flex;{"flex-direction:column;align-items:flex-start" if mob else "align-items:center"};gap:{24 if mob else 40}px;'
            f'padding:{"24px 20px" if mob else "40px 48px"};border-radius:24px;background:{T["card"]};border:1px solid {T["line"]}">{art}'
            f'<div style="display:flex;flex-direction:column;gap:14px;flex:1">'
            f'<h2 style="margin:0;font-size:{24 if mob else 30}px;font-weight:800;line-height:1.3">{t1}</h2>'
            f'<p style="margin:0;font-size:16px;color:{T["muted"]}">{t2}</p><div style="display:flex;gap:8px;flex-wrap:wrap">{sg}</div>'
            f'<p style="margin:8px 0 0;font-size:16px;color:{T["muted"]}">{ask}</p>{btns}</div></section>')

def library(lang,dark,mob,active_type='all',active_feat='all',q='',panel=False,sheet=False):
    rtl=lang=='ar'; L=1 if rtl else 0; T=tok(dark)
    helmet,root,header,footer,contact=parts(BASE[(lang,int(dark),int(mob))])
    items=results(active_type,'all',active_feat,q)
    nact=active_feat!='all'; open_=panel or sheet
    pad='16px' if mob else '32px'
    types=''.join(chip(lab[L],None,k==active_type,T) for k,lab in TYPES if count('type',k)>0)
    badge=(f'<span style="min-width:20px;height:20px;border-radius:999px;background:{T["acc"]};color:{"#0E2A2D" if dark else "#FFFFFF"};'
           f'font-size:12px;font-weight:700;display:inline-flex;align-items:center;justify-content:center">1</span>') if nact else ''
    fbtn=(f'<button type="button" aria-expanded="{"true" if open_ else "false"}" style="flex-shrink:0;height:40px;padding:0 14px;border-radius:999px;'
          f'border:2px solid {T["ink"] if (open_ or nact) else T["line"]};background:{T["tag"] if open_ else "transparent"};color:{T["ink"]};'
          f'font:500 15px Rubik,sans-serif;display:inline-flex;align-items:center;gap:8px">{FILT}{"فلاتر" if rtl else "Filters"}{badge}</button>')
    ph="دور في الأعمال، مثلا: تقويم" if rtl else "Search work, e.g. calendar"
    clear=f'<span style="display:flex;color:{T["muted"]}">{X}</span>' if q else ''
    search=(f'<label style="display:flex;align-items:center;gap:10px;height:44px;padding:0 14px;border-radius:999px;border:2px solid {T["ink"] if q else T["line"]};'
            f'background:{T["card"]};color:{T["subtle"]};{"width:100%" if mob else "width:340px"};box-sizing:border-box;flex-shrink:0">{SRCH}'
            f'<span style="flex:1;font-size:15px;color:{T["ink"] if q else T["subtle"]}">{q or ph}</span>{clear}</label>')
    pn=''
    if panel:
        pn=(f'<div style="padding:20px 22px;border-radius:20px;background:{T["card"]};border:1px solid {T["line"]};display:flex;gap:24px;align-items:flex-start">'
            f'<div style="flex:1">{groups(T,L,rtl,active_feat,36,14)}</div><a href="#" style="font-size:14px;font-weight:600;color:{T["acc"]};text-decoration:underline;text-underline-offset:3px;white-space:nowrap">{"امسح الكل" if rtl else "Clear all"}</a></div>')
    n=len(items)
    cnt=(f'{n} نتايج' if n>2 else ('نتيجتين' if n==2 else 'نتيجة واحدة')) if rtl else f'{n} result{"s" if n!=1 else ""}'
    if q: cnt+=(f' لـ "{q}"' if rtl else f' for “{q}”')
    pills=''
    if nact:
        lab=dict(FEATS)[active_feat][L]
        pills=(f'<span style="display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 10px 0 12px;border-radius:999px;background:{T["tag"]};'
               f'color:{T["tagi"]};font-size:14px;font-weight:500">{lab}<span style="display:flex">{X}</span></span>')
    if mob:
        toolbar=f'{search}<div role="group" style="display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;margin-inline:-16px;padding:2px 16px">{fbtn}{types}</div>'
    else:
        toolbar=f'<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">{search}<div role="group" style="display:flex;gap:8px;flex-wrap:wrap">{types}</div><div style="flex:1"></div>{fbtn}</div>'
    h1="منتجات ومنصات ومواقع، بلغتين" if rtl else "Products, platforms and websites, in two languages"
    intro=("مشاريع صممتها من أول فكرة لحد شاشات جاهزة للتنفيذ. دور على اللي يهمك، أو اختار نوع الشغل." if rtl
           else "Projects I designed from the first idea to developer-ready screens. Search for what you need, or pick a type of work.")
    cards=''.join(card(p,T,rtl,dark,mob) for p in items)
    grid=f'<section style="display:grid;grid-template-columns:{"1fr" if mob else "repeat(3,1fr)"};gap:{"20px" if mob else "28px"}">{cards}</section>'
    if n==0:
        cnt=(f'مفيش نتايج لـ "{q}"' if rtl else f'No results for “{q}”') if q else ('مفيش نتايج' if rtl else 'No results')
        grid=empty(T,rtl,dark,mob,q)
    body=(f'{root}\n{header}\n<main style="max-width:1280px;margin:0 auto;padding:{"16px" if mob else "40px"} {pad} {"64px" if mob else "96px"};display:flex;flex-direction:column;gap:{"24px" if mob else "32px"}">'
          f'<section style="display:flex;flex-direction:column;gap:14px"><div style="font-size:15px;font-weight:500;color:{T["acc"] if dark else T["tagi"]}">{"أعمالي" if rtl else "Work"}</div>'
          f'<h1 style="margin:0;font-size:{40 if mob else 64}px;font-weight:800;line-height:1.15">{h1}</h1>'
          f'<p style="margin:0;font-size:{17 if mob else 20}px;line-height:1.7;color:{T["muted"]};max-width:760px">{intro}</p></section>'
          f'<section aria-label="{"فلترة الأعمال" if rtl else "Filter work"}" style="display:flex;flex-direction:column;gap:14px">{toolbar}{pn}'
          f'<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap"><span aria-live="polite" style="font-size:15px;color:{T["muted"]}">{cnt}</span>{pills}</div></section>'
          f'{grid}</main>\n{contact}\n{footer}\n</div>')
    if sheet:
        sh=(f'<div style="position:fixed;inset:0;background:rgba(6,20,22,.55);z-index:50"></div>'
            f'<div role="dialog" aria-label="{"فلاتر" if rtl else "Filters"}" style="position:fixed;left:0;right:0;bottom:0;z-index:51;background:{T["card"]};border-radius:28px 28px 0 0;padding:12px 20px 24px;display:flex;flex-direction:column;gap:16px">'
            f'<span style="align-self:center;width:44px;height:5px;border-radius:9px;background:{T["line"]}"></span>'
            f'<div style="display:flex;align-items:center"><div style="flex:1;font-size:20px;font-weight:700">{"فلاتر" if rtl else "Filters"}</div><a href="#" style="font-size:14px;font-weight:600;color:{T["acc"]}">{"امسح الكل" if rtl else "Clear all"}</a></div>'
            f'{groups(T,L,rtl,active_feat,38,14)}<button type="button" style="height:52px;border-radius:999px;border:0;background:#FFC845;color:#0E2A2D;font:700 16px Rubik,sans-serif;margin-top:6px">{("اعرض "+cnt) if rtl else ("Show "+cnt)}</button></div>')
        body=body[:body.rindex('</div>')]+sh+'</div>'
    return helmet,body

# ---------- What I do with Noon ----------
NOONF={'brand':'/home/claude/nourawafik/nourawafik-portfolio/public/mascot/noon-draw.svg','site':'/home/claude/nourawafik/nourawafik-portfolio/public/mascot/noon-work.svg',
       'product':B+'noon2/noon-phone.svg','ds':B+'noon2/noon-build.svg'}
def noon(k,dark):
    t=open(NOONF[k]).read(); t=re.sub(r'<metadata>.*?</metadata>','',t,flags=re.S)
    t=t.replace(' width="280" height="255"',' width="100%" height="100%"')
    if k=='site':
        old='<path d="M34 20 H70 M34 30 H84 M34 40 H58" stroke="#0E7C7B" stroke-width="4" stroke-linecap="round"/>'
        assert old in t
        new=('<style>@keyframes nw-ty1{0%{stroke-dashoffset:36}12%,88%{stroke-dashoffset:0}96%,100%{stroke-dashoffset:36}}'
             '@keyframes nw-ty2{0%,12%{stroke-dashoffset:50}30%,88%{stroke-dashoffset:0}96%,100%{stroke-dashoffset:50}}'
             '@keyframes nw-ty3{0%,30%{stroke-dashoffset:24}42%,88%{stroke-dashoffset:0}96%,100%{stroke-dashoffset:24}}'
             '@keyframes nw-cur{0%,100%{opacity:1}50%{opacity:0}}'
             '.nw-t1{stroke-dasharray:36;animation:nw-ty1 5s linear infinite}.nw-t2{stroke-dasharray:50;animation:nw-ty2 5s linear infinite}.nw-t3{stroke-dasharray:24;animation:nw-ty3 5s linear infinite}'
             '.nw-cur{animation:nw-cur .8s steps(1) infinite}'
             '@media (prefers-reduced-motion: reduce){.nw-t1,.nw-t2,.nw-t3,.nw-cur{animation:none}}</style>'
             '<path class="nw-t1" d="M34 20 H70" stroke="#0E7C7B" stroke-width="4" stroke-linecap="round"/>'
             '<path class="nw-t2" d="M34 30 H84" stroke="#0E7C7B" stroke-width="4" stroke-linecap="round"/>'
             '<path class="nw-t3" d="M34 40 H58" stroke="#0E7C7B" stroke-width="4" stroke-linecap="round"/>'
             '<rect class="nw-cur" x="62" y="35" width="3" height="10" rx="1" fill="#0E2A2D"/>')
        t=t.replace(old,new)
    if k=='product':
        css=('<style>@keyframes nw-in{0%{opacity:0;transform:translateY(8px) scale(.9)}100%{opacity:1;transform:none}}'
             '@keyframes nw-cyc{0%,4%{opacity:0;transform:translateY(8px) scale(.9)}10%,90%{opacity:1;transform:none}96%,100%{opacity:0}}'
             '.nw-p1,.nw-p2,.nw-p3,.nw-sp{transform-box:fill-box;transform-origin:center;opacity:0;animation:nw-cyc 5s ease-out infinite}'
             '.nw-p2{animation-delay:.35s}.nw-p3{animation-delay:.7s}.nw-sp{animation-delay:1.1s}'
             '@media (prefers-reduced-motion: reduce){.nw-p1,.nw-p2,.nw-p3,.nw-sp{animation:none;opacity:1}}</style>')
        t=t.replace('<rect x="186" y="-22" width="30" height="8" rx="4" fill="#0E7C7B"/>','<rect class="nw-p1" x="186" y="-22" width="30" height="8" rx="4" fill="#0E7C7B"/>')
        t=t.replace('<rect x="186" y="-8" width="30" height="20" rx="4" fill="#FFFFFF" stroke="#0E7C7B" stroke-width="2"/>','<rect class="nw-p2" x="186" y="-8" width="30" height="20" rx="4" fill="#FFFFFF" stroke="#0E7C7B" stroke-width="2"/>')
        t=t.replace('<rect x="186" y="18" width="30" height="20" rx="4" fill="#FFC845"/>','<rect class="nw-p3" x="186" y="18" width="30" height="20" rx="4" fill="#FFC845"/>')
        t=t.replace('<path d="M238 -40','<path class="nw-sp" d="M238 -40')
        t=t.replace('aria-label="Noon with a phone">','aria-label="Noon with a phone">'+css)
    if k=='ds':
        css=('<style>'
             '@keyframes nw-drop{0%,12%{transform:translate(0,0) rotate(0deg)}38%{transform:translate(38px,20px) rotate(8deg)}44%{transform:translate(38px,16px) rotate(8deg)}50%,84%{transform:translate(38px,20px) rotate(8deg)}94%,100%{transform:translate(0,0) rotate(0deg)}}'
             '@keyframes nw-join{0%,48%,62%,100%{transform:scale(1)}54%{transform:scaleX(1.06) scaleY(.94)}}'
             '@keyframes nw-spk{0%,58%{opacity:0;transform:scale(.6)}66%,84%{opacity:1;transform:scale(1)}92%,100%{opacity:0}}'
             '.nw-blk{transform-box:view-box;transform-origin:189px 36px;animation:nw-drop 5s cubic-bezier(.3,.7,.3,1) infinite}'
             '.nw-stk{transform-box:view-box;transform-origin:227px 160px;animation:nw-join 5s ease-out infinite}'
             '.nw-spk{transform-box:fill-box;transform-origin:center;opacity:0;animation:nw-spk 5s ease-out infinite}'
             '@media (prefers-reduced-motion: reduce){.nw-blk,.nw-stk{animation:none}.nw-spk{animation:none;opacity:1}}</style>')
        stack_old=('<rect x="200" y="118" width="54" height="42" rx="8" fill="#E6F4F3" stroke="#0E2A2D" stroke-width="4"/>'
                   '<circle cx="227" cy="94" r="20" fill="#FF6B5B" stroke="#0E2A2D" stroke-width="4"/>')
        assert stack_old in t
        t=t.replace(stack_old,'<g class="nw-stk">'+stack_old+'</g>')
        blk='<rect x="166" y="18" width="46" height="36" rx="8" fill="#FFC845" stroke="#0E2A2D" stroke-width="4" transform="rotate(-8 189 36)"/>'
        t=t.replace(blk,'<g class="nw-blk">'+blk+'</g>')
        t=t.replace('<path d="M220 20 L230 12 M224 34 L236 34" stroke="#FFC845" stroke-width="4" stroke-linecap="round"/>',
                    '<path class="nw-spk" d="M244 28 L252 20 M247 42 L254 42 M236 18 L238 8" stroke="#FFC845" stroke-width="4" stroke-linecap="round"/>')
        t=t.replace('aria-label="Noon building with blocks">','aria-label="Noon building with blocks">'+css)
    if k=='brand':
        t=t.replace('<path class="nw-draw" pathLength="100" d="M-12 192 C28 176 66 200 104 186 C136 175 168 190 214 182"','<path class="nw-line" pathLength="100" d="M8 190 C40 180 70 198 104 190 C134 183 160 192 181 186"')
        t=t.replace('<g transform="translate(225 76) rotate(35)">','<g class="nw-pen"><g transform="translate(225 76) rotate(35)">',1)
        t=t.replace('fill="#F6F4EE" stroke="#0E2A2D" stroke-width="4" stroke-linejoin="round"/></g>','fill="#F6F4EE" stroke="#0E2A2D" stroke-width="4" stroke-linejoin="round"/></g></g>',1)
        t=t.replace('</style>',_pen_keys()+
            '@media (prefers-reduced-motion: reduce){.nw-pen,.nw-line{animation:none}.nw-line{stroke-dashoffset:0}}</style>',1)
        t=t.replace('<circle cx="65" cy="27" r="2.3" fill="#0E2A2D"/>','<circle class="nw-wink" cx="65" cy="27" r="2.3" fill="#0E2A2D"/><path class="nw-wink-l" d="M62.6 27 H67.4" stroke="#0E2A2D" stroke-width="1.8" stroke-linecap="round"/>')
        t=t.replace('</style>','@keyframes nw-wk{0%,78%,100%{opacity:1}82%,92%{opacity:0}}@keyframes nw-wl{0%,78%,100%{opacity:0}82%,92%{opacity:1}}.nw-wink{animation:nw-wk 4s ease-in-out infinite}.nw-wink-l{opacity:0;animation:nw-wl 4s ease-in-out infinite}@media (prefers-reduced-motion: reduce){.nw-wink,.nw-wink-l{animation:none}}</style>')
    return t

def _pen_keys():
    import math
    segs=[((8,190),(40,180),(70,198),(104,190)),((104,190),(134,183),(160,192),(181,186))]
    pts=[]
    for a,b,c,d in segs:
        for i in range(400 if not pts else 401):
            t=i/400 if not pts else (i)/400
            if pts and i==0: continue
            u=1-t
            pts.append((u**3*a[0]+3*u*u*t*b[0]+3*u*t*t*c[0]+t**3*d[0],u**3*a[1]+3*u*u*t*b[1]+3*u*t*t*c[1]+t**3*d[1]))
    L=[0]
    for i in range(1,len(pts)): L.append(L[-1]+math.dist(pts[i-1],pts[i]))
    tot=L[-1]; pm=[]; ln=[]; N=24; j=0
    for k in range(N+1):
        s=k/N; target=s*tot
        while j<len(L)-1 and L[j+1]<target: j+=1
        x,y=pts[j]; p=6+56*s
        pm.append('%.2f%%{transform:translate(%.1fpx,%.1fpx)}'%(p,x-181,y-138))
        ln.append('%.2f%%{stroke-dashoffset:%.2f}'%(p,100*(1-s)))
    pm=['0%,'+pm[0]]+pm[1:]
    ln=['0%,'+ln[0]]+ln[1:]
    return ('@keyframes nw-pm{'+''.join(pm)+'74%,82%{transform:translate(0,0)}100%{transform:translate(-173px,52px)}}'
            '@keyframes nw-ln{'+''.join(ln)+'82%{stroke-dashoffset:0}100%{stroke-dashoffset:100}}'
            '.nw-pen{animation:nw-pm 5s linear infinite}.nw-line{stroke-dasharray:100;animation:nw-ln 5s linear infinite}')
_orig_whatido=G.whatido
def whatido(lang,dark,mob):
    helmet,body=_orig_whatido(lang,dark,mob)
    T=tok(dark)
    def rep(m):
        return m.group(0)
    parts_=re.split(r'(<span style="width:52px;height:52px;border-radius:16px;[^>]*>.*?</svg></span>)',body,flags=re.S)
    order=['brand','site','product','ds']; out=''; j=0
    for seg in parts_:
        if seg.startswith('<span style="width:52px;height:52px'):
            out+=(f'<div aria-hidden="true" style="{"width:84px;height:84px;margin:0;grid-row:1 / span 2;padding:6px;box-sizing:border-box" if mob else "height:120px;margin:-8px -8px 4px;padding:12px"};border-radius:18px;background:#E6F4F3;'
                  f'display:flex;align-items:center;justify-content:center">{noon(order[j],dark)}</div>'); j+=1
        else: out+=seg
    out=re.sub(r'<a class="c-link"[^>]*>.*?</a>','',out,flags=re.S)
    if mob:
        out=out.replace('padding:28px;display:flex;flex-direction:column;gap:14px;','padding:14px 16px;display:grid;grid-template-columns:84px 1fr;column-gap:16px;row-gap:2px;align-content:center;align-items:center;')
        out=out.replace('flex:0 0 80%;','')
        out=out.replace('<div style="display:flex;gap:14px;overflow-x:auto;scrollbar-width:none;margin-inline:-16px;padding:8px 16px 18px">','<div style="display:flex;flex-direction:column;gap:12px">')
        out=re.sub(r'<div aria-hidden="true" style="display:flex;gap:6px;justify-content:center;margin-top:-6px">.*?</div>','',out,count=1,flags=re.S)
        out=out.replace('<h3 style="margin:0;font-size:22px;font-weight:700">','<h3 style="margin:0;font-size:18px;font-weight:700;align-self:end">')
        out=out.replace('<p style="margin:0;font-size:16px;line-height:1.6;','<p style="margin:0;font-size:14px;line-height:1.55;align-self:start;')
    out=out.replace('<article class="c-card c-svc"','<a href="#" class="c-card c-svc" data-card-link').replace('</article>','</a>')
    out=out.replace('data-card-link style="','style="text-decoration:none;color:inherit;cursor:pointer;')
    return helmet,out
