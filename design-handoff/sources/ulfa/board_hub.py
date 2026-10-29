import base64,io,re
from PIL import Image
B='/tmp/claude-0/-home-claude/a7376101-3103-5ad9-97ca-42e951e26fac/scratchpad/'
def d(n,w,q=86):
    im=Image.open(B+f'ulfa/out2/{n}.png').convert('RGB'); im=im.resize((w,round(im.height*w/im.width)),Image.LANCZOS); b=io.BytesIO(); im.save(b,'WEBP',quality=q)
    return 'data:image/webp;base64,'+base64.b64encode(b.getvalue()).decode()
home=open(B+'brand/project/Home-AR.dc.html').read()
helmet=re.search(r'<helmet>.*?</helmet>',home,re.S).group(0)
C={'ar':dict(dir='rtl',title='ألفة',crumb=('أعمالي','ألفة'),
  sub='تطبيق موبايل بالعربي والإنجليزي، بيجمع الناس مع ميسرين متخصصين في الصحة النفسية، في دوائر صغيرة وجلسات منظمة.',
  meta=[('دوري','تصميم المنتج وإدارته'),('المنصة','تطبيق موبايل · عربي وإنجليزي'),('النطاق','رحلة المشارك ورحلة الميسر')],
  note='الاسم والتفاصيل متغيرة، وكل الشاشات هنا اتعاد رسمها لدراسة الحالة دي.',
  ch='التحدي',cht='منتج واحد ليه جمهورين: مشارك محتاج يحس بالأمان من أول شاشة، وميسر محتاج يدير مواعيده وفلوسه من غير ما يتعب. وكل ده بلغتين، وفي موضوع حساس زي الصحة النفسية.',
  pr=[('هادي ومقروء','ألوان هادية، وتباين فوق AA في الفاتح والغامق.'),('بلغتين من الأول','كل شاشة متصممة بالعربي والإنجليزي، مش مترجمة بعدين.'),('الموافقة قبل الدخول','القواعد والخصوصية بتتقري قبل الجلسة، مش جواها.')],
  st='أربع دراسات',sts='كل دراسة بتركز على جزء من المنصة.',
  cards=[('ulfa-thumb','تطبيق المشارك','من الاستكشاف للانضمام لحد جلساتي.'),('ulfa-thumb-live','الجلسة اللايف','من غرفة الانتظار لحد بعد الجلسة.'),('ulfa-thumb-studio','استوديو الميسر','التقويم، والورشة، والمحفظة، والتحويل.'),('ulfa-thumb-ds','نظام التصميم','4 ألوان في الفاتح والغامق.')],
  read='اقرا الدراسة',next='المشروع اللي بعده',nextn='Duet',nexts='منصة توظيف بالذكاء الاصطناعي، بمساعد لكل طرف.'),
 'en':dict(dir='ltr',title='Ulfa',crumb=('Work','Ulfa'),
  sub='A bilingual Arabic and English mobile app that brings people together with licensed mental health facilitators, in small circles and structured sessions.',
  meta=[('My role','Product design and product management'),('Platform','Mobile app · Arabic and English'),('Scope','Participant and facilitator journeys')],
  note='The name and details are changed, and every screen here was redrawn for this case study.',
  ch='The challenge',cht='One product, two audiences: participants who need to feel safe from the first screen, and facilitators who need to run their schedule and earnings without friction. All of it in two languages, on a subject as sensitive as mental health.',
  pr=[('Calm and readable','Quiet colors, with contrast above AA in light and dark.'),('Bilingual from day one','Every screen designed in Arabic and English, not translated later.'),('Consent before you join','Rules and privacy are read before the session, not inside it.')],
  st='Four studies',sts='Each study focuses on one part of the platform.',
  cards=[('ulfa-thumb','Participant app','From exploring to joining to My sessions.'),('ulfa-thumb-live','Live session','From the waiting room to after the session.'),('ulfa-thumb-studio','Facilitator studio','Calendar, workshop, wallet and payouts.'),('ulfa-thumb-ds','Design system','4 colors in light and dark.')],
  read='Read the case study',next='Next project',nextn='Duet',nexts='A two-sided AI hiring platform with an assistant for each side.')}
def build(lang):
    t=C[lang]; rtl=lang=='ar'
    hd=open(f'/tmp/Home-{"AR" if rtl else "EN"}-header.html').read(); ft=open(f'/tmp/Home-{"AR" if rtl else "EN"}-footer.html').read()
    arrow=f'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="{"transform:scaleX(-1)" if rtl else ""}"><path d="M5 12 H19 M13 6 L19 12 L13 18"/></svg>'
    meta=''.join(f'<div style="flex:1;padding:18px 0;border-top:2px solid #0E2A2D"><div style="font-size:14px;color:#6B675C">{a}</div><div style="font-size:17px;font-weight:600;margin-top:4px">{b}</div></div>' for a,b in t['meta'])
    pr=''.join(f'<div style="flex:1;background:#fff;border-radius:24px;padding:24px" class="c-card c-trait"><div style="width:36px;height:36px;border-radius:50%;background:#E6F4F3;color:#0B6B6A;display:flex;align-items:center;justify-content:center;font-weight:700">{i+1}</div><h3 style="margin:14px 0 6px;font-size:20px">{a}</h3><p style="margin:0;color:#3E5558;font-size:16px;line-height:1.7">{b}</p></div>' for i,(a,b) in enumerate(t['pr']))
    cards=''.join(f'''<a href="#" class="c-card c-work" style="background:#fff;border-radius:28px;overflow:hidden;text-decoration:none;color:#0E2A2D;display:flex;flex-direction:column"><div class="c-mwrap"><img class="c-media" src="{d(img,1200)}" alt="" style="display:block;width:100%;aspect-ratio:4/3;object-fit:cover"></div>
<div style="padding:22px 24px 26px"><div style="font-size:14px;color:#0B6B6A;font-weight:600">0{i+1}</div><h3 style="margin:6px 0 6px;font-size:24px">{a}</h3><p style="margin:0 0 14px;color:#3E5558;font-size:16px;line-height:1.6">{b}</p><span class="c-link" style="display:inline-flex;gap:8px;align-items:center;font-weight:700;color:#0E7C7B">{t['read']}{arrow}</span></div></a>''' for i,(img,a,b) in enumerate(t['cards']))
    body=f'''<div dir="{t['dir']}" lang="{lang}" style="width:100%;min-height:100%;background:#F6F4EE;color:#0E2A2D;font-family:'Rubik',sans-serif">
{hd}
<main style="max-width:1280px;margin:0 auto;padding:24px 32px 96px;display:flex;flex-direction:column;gap:72px">
<section style="display:flex;flex-direction:column;gap:24px">
<nav aria-label="breadcrumb" style="font-size:15px;color:#6B675C"><a href="#" style="color:#0E7C7B">{t['crumb'][0]}</a> / <span aria-current="page">{t['crumb'][1]}</span></nav>
<h1 style="margin:0;font-size:84px;font-weight:800;line-height:1.1">{t['title']}</h1>
<p style="margin:0;font-size:22px;line-height:1.7;color:#3E5558;max-width:820px">{t['sub']}</p>
<div style="display:flex;gap:32px;margin-top:8px">{meta}</div>
<img src="{d('ulfa-hero',2400)}" alt="" style="width:100%;aspect-ratio:16/9;object-fit:cover;border-radius:32px;margin-top:12px">
<div style="display:flex;gap:10px;align-items:flex-start;font-size:15px;color:#3E5558"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3E5558" stroke-width="2" stroke-linecap="round" aria-hidden="true" style="flex-shrink:0;margin-top:2px"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11 V8 A4 4 0 0 1 16 8 V11"/></svg>{t['note']}</div>
</section>
<section style="display:flex;gap:48px;align-items:flex-start"><h2 style="margin:0;font-size:40px;flex:0 0 300px">{t['ch']}</h2><p style="margin:0;font-size:21px;line-height:1.8;color:#0E2A2D">{t['cht']}</p></section>
<section style="display:flex;gap:20px">{pr}</section>
<section style="display:flex;flex-direction:column;gap:28px"><div><h2 style="margin:0;font-size:48px">{t['st']}</h2><p style="margin:8px 0 0;font-size:18px;color:#3E5558">{t['sts']}</p></div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:28px">{cards}</div></section>
<a href="#" class="c-card" style="background:#0E2A2D;color:#fff;border-radius:28px;padding:36px 40px;text-decoration:none;display:flex;justify-content:space-between;align-items:center;gap:24px;position:relative"><div><div style="font-size:15px;color:#A9C2C4">{t['next']}</div><div style="font-size:40px;font-weight:800;margin:4px 0">{t['nextn']}</div><div style="font-size:17px;color:#D5E3E4">{t['nexts']}</div></div><span style="width:56px;height:56px;border-radius:50%;background:#FFC845;color:#0E2A2D;display:flex;align-items:center;justify-content:center;flex-shrink:0">{arrow}</span></a>
</main>
{ft}</div>'''
    return f'''<!doctype html>
<html lang="{lang}" dir="{t['dir']}"><head><meta charset="utf-8"><title>Ulfa hub, {"Arabic" if rtl else "English"}</title><script src="./support.js"></script></head><body><x-dc>
{helmet}
{body}
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{{"$preview":{{"width":1440,"height":4000}}}}'>
class Component extends DCLogic {{ renderVals() {{ return {{}}; }} }}
</script></body></html>''',body
import json
from playwright.sync_api import sync_playwright
cp=B+'brand/project/canvas.json'; c=json.load(open(cp))
fonts=''.join(f'<link href="file://{B}fonts/node_modules/@fontsource/rubik/{w}.css" rel="stylesheet">' for w in (400,500,700,800))
st=re.search(r'<style>(.*?)</style>',helmet,re.S).group(1)
with sync_playwright() as pw:
    br=pw.chromium.launch()
    for lang,x in [('ar',33780),('en',35300)]:
        html,body=build(lang); name=f'Work-Ulfa-Hub-{lang.upper()}.dc.html'
        pg=br.new_page(viewport={'width':1440,'height':900}); pg.set_content(f'<html><head>{fonts}<style>{st}</style></head><body style="margin:0">{body}</body></html>'); pg.wait_for_timeout(900)
        h=pg.evaluate('document.body.scrollHeight')+4; pg.screenshot(path=B+f'ulfa/hub-{lang}.png',full_page=True); pg.close()
        open(B+'brand/project/'+name,'w').write(html.replace('"height":4000','"height":%d'%h)); print(name,h)
        c['boards'][name]={'h':h,'title':'أعمال · ألفة · الصفحة الرئيسية للمشروع · '+('عربي' if lang=='ar' else 'English'),'w':1440,'x':x,'y':1320}
        if name not in c['order']: c['order'].append(name)
    br.close()
json.dump(c,open(cp,'w'),ensure_ascii=False,indent=2)
