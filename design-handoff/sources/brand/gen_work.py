import re, io, base64, json
from PIL import Image
B='/tmp/claude-0/-home-claude/a7376101-3103-5ad9-97ca-42e951e26fac/scratchpad/'
P=B+'brand/project/'
IMG={'ulfa':B+'ulfa/out2/ulfa-thumb','ulfa-ds':B+'ulfa/out2/ulfa-thumb-ds','praxa':B+'praxa/out/praxa-thumb','duet':B+'duet/out/duet-thumb'}
_cache={}
def thumb(k,dark):
    f=IMG[k]+('-dark' if dark else '')+'.png'
    if f not in _cache:
        im=Image.open(f).convert('RGB').resize((800,600),Image.LANCZOS); b=io.BytesIO(); im.save(b,'WEBP',quality=84)
        _cache[f]='data:image/webp;base64,'+base64.b64encode(b.getvalue()).decode()
    return _cache[f]
def tok(dark):
    return dict(bg='#0E2A2D',card='#17393D',ink='#F6F4EE',muted='#A9C2C4',subtle='#8FAAAD',acc='#7CC6C0',tag='#123F42',tagi='#7CC6C0',line='#2B4A4E',sunk='#0A2023',on='#0E2A2D') if dark else \
           dict(bg='#F6F4EE',card='#FFFFFF',ink='#0E2A2D',muted='#3E5558',subtle='#6B675C',acc='#0E7C7B',tag='#E6F4F3',tagi='#0B6B6A',line='#D8D4C8',sunk='#FFFFFF',on='#FFFFFF')
ARR='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="{st}"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
def arr(rtl): return ARR.format(st='transform:scaleX(-1)' if rtl else '')
# ---------- data ----------
IMG.update({'ulfa-live':B+'ulfa/out2/ulfa-thumb-live','ulfa-studio':B+'ulfa/out2/ulfa-thumb-studio'})
PROJ=[
 dict(k='ulfa',t=('Ulfa','ألفة'),d=('A bilingual mobile app that brings people together with licensed mental health facilitators, in small circles.','تطبيق موبايل بلغتين بيجمع الناس مع ميسرين متخصصين في الصحة النفسية، في دوائر صغيرة.'),
      type=['mobile'],ind='health',feat=[],extra=('4 studies','4 دراسات'),parent=None),
 dict(k='praxa',t=('Praxa','Praxa'),d=('A web platform US mental health clinics use to run their day, for four roles, with AI the provider approves.','منصة ويب بتستخدمها عيادات الصحة النفسية في أمريكا، لأربع أدوار، وذكاء اصطناعي المعالج بيوافق عليه.'),
      type=['web'],ind='health',feat=['sched','ai','dash'],extra=None,parent=None),
 dict(k='duet',t=('Duet','Duet'),d=('A two-sided hiring platform with an AI assistant for recruiters and another for candidates.','منصة توظيف ليها طرفين، بمساعد ذكاء اصطناعي للمسؤول عن التوظيف ومساعد تاني للمتقدم.'),
      type=['web','mobile'],ind='hr',feat=['ai','ds'],extra=None,parent=None),
]
STUDIES=[
 dict(k='ulfa-live',t=('Live session','الجلسة اللايف'),d=('Group video sessions: a calm waiting room, labelled controls, and a check-in after the call.','جلسات فيديو جماعية: غرفة انتظار هادية، وكنترول بأسماء واضحة، وسؤال بسيط بعد المكالمة.'),
      type=['mobile'],ind='health',feat=['video'],extra=None,parent=('Ulfa','ألفة')),
 dict(k='ulfa-studio',t=('Facilitator studio','استوديو الميسر'),d=('A calendar by session type, a workshop dashboard, and a wallet with clear payouts.','تقويم بألوان أنواع الجلسات، وداشبورد للورشة، ومحفظة بتحويلات واضحة.'),
      type=['mobile'],ind='health',feat=['sched','pay','dash'],extra=None,parent=('Ulfa','ألفة')),
 dict(k='ulfa-ds',t=('Design system','نظام التصميم'),d=('Four colors in light and dark, from one set of tokens: 8 contexts from one design.','4 ألوان في الفاتح والغامق من نفس التوكنز: 8 حالات من تصميم واحد.'),
      type=['mobile'],ind='health',feat=['ds'],extra=None,parent=('Ulfa','ألفة')),
]
TYPES=[('all',('All','الكل')),('mobile',('Mobile apps','تطبيقات موبايل')),('web',('Web platforms','منصات ويب')),('site',('Websites & landing pages','مواقع وصفحات هبوط')),('brand',('Brand identity','هوية بصرية'))]
INDS=[('all',('All','الكل')),('health',('Health','صحة')),('hr',('HR tech','تقنيات التوظيف'))]
FEATS=[('all',('All','الكل')),('ai',('AI assistants','مساعدات ذكاء اصطناعي')),('video',('Video calls','مكالمات فيديو')),('sched',('Calendars & scheduling','تقويم وجدولة')),('pay',('Payments & wallets','مدفوعات ومحافظ')),('dash',('Dashboards & reports','داشبورد وتقارير')),('ds',('Design systems','أنظمة تصميم'))]
def results(ty='all',ind='all',ft='all'):
    pool=PROJ if ft=='all' else PROJ+STUDIES
    out=[]
    for p in pool:
        if ty!='all' and ty not in p['type']: continue
        if ind!='all' and p['ind']!=ind: continue
        if ft!='all' and ft not in p['feat']: continue
        out.append(p)
    return out
def count(kind,key):
    if key=='all': return len(PROJ)
    return len(results(**{ {'type':'ty','ind':'ind','feat':'ft'}[kind]: key }))
# ---------- pieces ----------
def chips(kind,items,active,T,rtl,mob):
    L=1 if rtl else 0
    out=''
    for key,lab in items:
        n=count(kind,key)
        if n==0: continue
        on=key==active
        st=f'background:{T["ink"]};color:{T["bg"]};border-color:{T["ink"]}' if on else f'background:transparent;color:{T["ink"]};border-color:{T["line"]}'
        badge=f'<span style="min-width:22px;height:22px;padding:0 6px;border-radius:999px;font-size:12px;font-weight:600;display:inline-flex;align-items:center;justify-content:center;background:{("rgba(14,42,45,.14)" if T["bg"]=="#0E2A2D" else "rgba(255,255,255,.2)") if on else T["tag"]};color:{T["bg"] if on else T["tagi"]}">{n}</span>'
        out+=f'<button type="button" aria-pressed="{"true" if on else "false"}" style="flex-shrink:0;height:44px;padding-inline:16px 8px;border-radius:999px;border:2px solid;{st};font:500 15px Rubik,sans-serif;display:inline-flex;align-items:center;gap:8px;white-space:nowrap">{lab[L]}{badge}</button>'
    return out
def card(p,T,rtl,dark,mob):
    L=1 if rtl else 0
    tl={'mobile':('Mobile app','تطبيق موبايل'),'web':('Web platform','منصة ويب')}
    il={'health':('Health','صحة'),'hr':('HR tech','تقنيات التوظيف')}
    tags=''.join(f'<span style="font-size:13px;font-weight:500;color:{T["tagi"]};background:{T["tag"]};padding:4px 12px;border-radius:999px">{tl[t][L]}</span>' for t in p['type']) if not p['parent'] else ''
    tags+=f'<span style="font-size:13px;font-weight:500;color:{T["muted"]};border:1.5px solid {T["line"]};padding:3px 11px;border-radius:999px">{il[p["ind"]][L]}</span>'
    if p['extra']: tags+=f'<span style="font-size:13px;font-weight:500;color:{T["muted"]};border:1.5px solid {T["line"]};padding:3px 11px;border-radius:999px">{p["extra"][L]}</span>'
    par=f'<div style="font-size:13px;font-weight:600;color:{T["subtle"]};display:flex;align-items:center;gap:6px"><span style="width:6px;height:6px;border-radius:50%;background:{T["acc"]}"></span>{"جزء من" if rtl else "Part of"} {p["parent"][L]}</div>' if p['parent'] else ''
    lk=("اقرا الدراسة" if rtl else "Read the study") if p['parent'] else ("اقرا دراسة المشروع" if rtl else "Read the case study")
    return f'''<article class="c-card c-work" style="background:{T["card"]};border-radius:24px;overflow:hidden;display:flex;flex-direction:column;{f"border:1px solid {T['line']}" if dark else ""}">
<div class="c-mwrap"><img class="c-media" src="{thumb(p["k"],dark)}" alt="" style="display:block;width:100%;aspect-ratio:4/3;object-fit:cover"></div>
<div style="padding:24px;display:flex;flex-direction:column;gap:12px;flex-grow:1"><div style="display:flex;gap:8px;flex-wrap:wrap">{tags}</div>
{par}<h3 style="margin:0;font-size:24px;font-weight:700">{p["t"][L]}</h3><p style="margin:0;font-size:16px;line-height:1.6;color:{T["muted"]}">{p["d"][L]}</p>
<a class="c-link" href="#" style="margin-top:auto;font-size:16px;font-weight:600;color:{T["acc"]};display:flex;align-items:center;gap:6px;text-decoration:none">{lk}{arr(rtl)}</a></div></article>'''
def parts(base):
    s=open(P+base+'.dc.html').read()
    helmet=re.search(r'<helmet>.*?</helmet>',s,re.S).group(0)
    root=re.search(r'<div dir="(?:rtl|ltr)"[^>]*>',s).group(0)
    header=re.search(r'<header.*?</header>',s,re.S).group(0)
    footer=re.search(r'<footer.*?</footer>',s,re.S).group(0)
    contact=re.search(r'<section[^>]*id="contact".*?</section>',s,re.S)
    return helmet,root,header,footer,contact.group(0) if contact else ''
def wrap(title,helmet,body,w,h=4000):
    return f'''<!doctype html>
<html><head><meta charset="utf-8"><title>{title}</title><script src="./support.js"></script></head><body><x-dc>
{helmet}
{body}
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{{"$preview":{{"width":{w},"height":{h}}}}}'>
class Component extends DCLogic {{ renderVals() {{ return {{}}; }} }}
</script></body></html>'''
# ---------- Work library page ----------
def library(lang,dark,mob,active_type='all',active_feat='all'):
    rtl=lang=='ar'; L=1 if rtl else 0; T=tok(dark)
    base={('en',0,0):'Home-EN',('ar',0,0):'Home-AR',('en',1,0):'Home-EN-Dark',('ar',1,0):'Home-AR-Dark',('en',0,1):'Home-EN-Mobile',('ar',1,1):'Home-AR-Mobile-Dark',('ar',0,1):'Home-AR-Mobile',('en',1,1):'Home-EN-Mobile-Dark'}[(lang,int(dark),int(mob))]
    helmet,root,header,footer,contact=parts(base)
    items=results(active_type,'all',active_feat)
    pad='16px' if mob else '32px'
    rowst='display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;margin-inline:-16px;padding:2px 16px' if mob else 'display:flex;gap:10px;flex-wrap:wrap'
    lab=lambda t:f'<div style="font-size:14px;font-weight:600;color:{T["subtle"]};margin-bottom:10px">{t}</div>'
    n=len(items)
    res=(f'{n} نتايج' if n>2 else ('نتيجتين' if n==2 else 'نتيجة واحدة')) if rtl else f'{n} result{"s" if n!=1 else ""}'
    body=f'''{root}
{header}
<main style="max-width:1280px;margin:0 auto;padding:{"16px" if mob else "40px"} {pad} {"64px" if mob else "96px"};display:flex;flex-direction:column;gap:{"28px" if mob else "40px"}">
<section style="display:flex;flex-direction:column;gap:14px"><div style="font-size:15px;font-weight:500;color:{T["tagi"] if not dark else T["acc"]}">{"أعمالي" if rtl else "Work"}</div>
<h1 style="margin:0;font-size:{40 if mob else 64}px;font-weight:800;line-height:1.15">{"منتجات ومنصات ومواقع، بلغتين" if rtl else "Products, platforms and websites, in two languages"}</h1>
<p style="margin:0;font-size:{17 if mob else 20}px;line-height:1.7;color:{T["muted"]};max-width:760px">{"مشاريع صممتها من أول فكرة لحد شاشات جاهزة للتنفيذ. اختار النوع أو المجال اللي يهمك." if rtl else "Projects I designed from the first idea to developer-ready screens. Filter by the type of work or the industry you care about."}</p></section>
<section aria-label="{"فلترة الأعمال" if rtl else "Filter work"}" style="display:flex;flex-direction:column;gap:18px;padding-bottom:{"8px" if mob else "24px"};border-bottom:2px solid {T["line"]}">
<div>{lab("النوع" if rtl else "Type")}<div role="group" style="{rowst}">{chips("type",TYPES,active_type,T,rtl,mob)}</div></div>
<div>{lab("المجال" if rtl else "Industry")}<div role="group" style="{rowst}">{chips("ind",INDS,"all",T,rtl,mob)}</div></div>
<div>{lab("الميزة" if rtl else "Feature")}<div role="group" style="{rowst}">{chips("feat",FEATS,active_feat,T,rtl,mob)}</div></div>
<div aria-live="polite" style="font-size:15px;color:{T["muted"]}">{res}</div></section>
<section style="display:grid;grid-template-columns:{"1fr" if mob else "repeat(3,1fr)"};gap:{"20px" if mob else "28px"}">{"".join(card(p,T,rtl,dark,mob) for p in items)}</section>
</main>
{contact}
{footer}
</div>'''
    return helmet,body
# ---------- What I do (home section) ----------
IC={'brand':'<path d="M12 3 L19 10 L12 21 L5 10 Z"/><circle cx="12" cy="11" r="2"/><path d="M12 13 V21"/>',
    'site':'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9 H21 M7 6.5 H7.01 M10 6.5 H10.01"/>',
    'product':'<rect x="3" y="5" width="13" height="11" rx="2"/><rect x="15" y="9" width="6" height="11" rx="1.5"/><path d="M7 19 H12"/>',
    'ds':'<rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="3" width="8" height="8" rx="4"/><rect x="3" y="13" width="8" height="8" rx="4"/><rect x="13" y="13" width="8" height="8" rx="2"/>'}
DO=[('brand',('Brand identity','هوية بصرية'),('Logo, colours and type in Arabic and English, with a guide for using them.','لوجو وألوان وخطوط بالعربي والإنجليزي، ودليل لاستخدامهم.'),0),
    ('site',('Websites & landing pages','مواقع وصفحات هبوط'),('Fast bilingual websites that are easy to update.','مواقع بلغتين، سريعة وسهل تحديثها.'),0),
    ('product',('Digital products','منتجات رقمية'),('Web and mobile apps, from the first flow to developer-ready screens.','تطبيقات ويب وموبايل، من أول فلو لحد شاشات جاهزة للتنفيذ.'),3),
    ('ds',('Design systems','أنظمة تصميم'),('Components and tokens that keep a product consistent as it grows.','مكونات وتوكنز بتخلي المنتج متسق وهو بيكبر.'),2)]
def whatido(lang,dark,mob):
    rtl=lang=='ar'; L=1 if rtl else 0; T=tok(dark)
    base={('en',0,0):'Home-EN',('ar',0,0):'Home-AR',('en',1,0):'Home-EN-Dark',('ar',1,0):'Home-AR-Dark',('en',0,1):'Home-EN-Mobile',('ar',1,1):'Home-AR-Mobile-Dark',('ar',0,1):'Home-AR-Mobile',('en',1,1):'Home-EN-Mobile-Dark'}[(lang,int(dark),int(mob))]
    helmet,root,header,footer,contact=parts(base)
    cards=''
    for k,t,d,n in DO:
        link=(f'{"شوف الأعمال" if rtl else "See the work"} · {n}' if n else ("اسأل عنها" if rtl else "Ask about it"))
        cards+=f'''<article class="c-card c-svc" style="position:relative;background:{T["card"]};border-radius:24px;padding:28px;display:flex;flex-direction:column;gap:14px;{f"border:1px solid {T['line']}" if dark else ""}">
<span style="width:52px;height:52px;border-radius:16px;background:{T["tag"]};color:{T["tagi"]};display:flex;align-items:center;justify-content:center"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">{IC[k]}</svg></span>
<h3 style="margin:0;font-size:22px;font-weight:700">{t[L]}</h3><p style="margin:0;font-size:16px;line-height:1.6;color:{T["muted"]}">{d[L]}</p>
<a class="c-link" href="#" style="margin-top:auto;padding-top:6px;font-size:16px;font-weight:600;color:{T["acc"]};display:flex;align-items:center;gap:6px;text-decoration:none">{link}{arr(rtl)}</a></article>'''
    grid=f'<div class="h-rail" style="display:grid;grid-template-columns:repeat(4,1fr);gap:20px">{cards}</div>' if not mob else f'<div style="display:flex;gap:14px;overflow-x:auto;scrollbar-width:none;margin-inline:-16px;padding:8px 16px 18px">{cards.replace("<article ","<article data-m=1 ").replace("data-m=1 class=","style=\"flex:0 0 80%\" class=") if False else "".join(c if False else c for c in [cards])}</div>'
    if mob:
        grid='<div style="display:flex;gap:14px;overflow-x:auto;scrollbar-width:none;margin-inline:-16px;padding:8px 16px 18px">'+cards.replace('<article class="c-card c-svc" style="','<article class="c-card c-svc" style="flex:0 0 80%;')+'</div>'+f'<div aria-hidden="true" style="display:flex;gap:6px;justify-content:center;margin-top:-6px"><span style="width:22px;height:8px;border-radius:999px;background:{T["acc"]}"></span>'+''.join(f'<span style="width:8px;height:8px;border-radius:999px;background:{T["line"]}"></span>' for _ in range(3))+'</div>'
    sec=f'''<section id="services" aria-labelledby="do-title" style="max-width:1280px;margin:0 auto;padding:{"64px 16px 40px" if mob else "96px 32px 48px"};display:flex;flex-direction:column;gap:{"24px" if mob else "32px"}">
<div style="display:flex;justify-content:space-between;align-items:flex-end;gap:20px;flex-wrap:wrap"><div style="display:flex;flex-direction:column;gap:8px;max-width:640px"><div style="font-size:15px;font-weight:500;color:{T["acc"] if dark else T["tagi"]}">{"بعمل إيه" if rtl else "What I do"}</div>
<h2 style="margin:0;font-size:{30 if mob else 44}px;font-weight:700;line-height:1.2">{"من أول لوجو لحد منتج كامل" if rtl else "From a first logo to a full product"}</h2>
<p style="margin:0;font-size:{16 if mob else 18}px;line-height:1.7;color:{T["muted"]}">{"كل حاجة بالعربي والإنجليزي من الأول. لكل مشروع عرض سعر على حسب احتياجه." if rtl else "Everything in Arabic and English from the start. Every project gets a quote that fits what it needs."}</p></div>
<a href="mailto:hello@nourawafik.com" style="font-size:16px;font-weight:700;color:#0E2A2D;background:#FFC845;border-radius:999px;padding:0 22px;height:48px;display:flex;align-items:center;gap:8px;text-decoration:none{";width:100%;justify-content:center" if mob else ""}">{"اطلب عرض سعر" if rtl else "Get a quote"}{arr(rtl)}</a></div>
{grid}</section>'''
    body=f'{root}\n{header}\n{sec}\n</div>'
    return helmet,body
