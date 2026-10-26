import base64,io,sys
sys.path.insert(0,'ulfa')
from PIL import Image
from u2 import PAL,DK
def d(n):
    im=Image.open(f'ulfa/out2/{n}.png').convert('RGB').resize((500,1082),Image.LANCZOS); b=io.BytesIO(); im.save(b,'WEBP',quality=88)
    return 'data:image/webp;base64,'+base64.b64encode(b.getvalue()).decode()
def L(h):
    h=h.lstrip('#'); c=[int(h[i:i+2],16)/255 for i in (0,2,4)]
    c=[x/12.92 if x<=0.03928 else ((x+0.055)/1.055)**2.4 for x in c]
    return 0.2126*c[0]+0.7152*c[1]+0.0722*c[2]
def cr(a,b):
    la,lb=sorted([L(a),L(b)],reverse=True); return (la+0.05)/(lb+0.05)
img=lambda n:f'<img src="{d(n)}" style="width:250px;border-radius:26px;box-shadow:0 0 0 6px #0E2A2D">'
def row(title,names,sub=''):
    return f'<div style="display:flex;flex-direction:column;gap:12px"><div style="font-size:16px;font-weight:700">{title}</div>{sub}<div dir="ltr" style="display:flex;gap:22px;justify-content:flex-start">{"".join(img(n) for n in names)}</div></div>'
TH=['slate','forest','rose','ochre']; NM={'slate':'أزرق · Slate','forest':'أخضر · Forest','rose':'وردي · Rose','ochre':'عسلي · Ochre'}
cards=''
for n in TH:
    P=PAL[n]; dp,dps,dpi=DK[n]
    sw=lambda bg,fg,txt:f'<div style="flex:1;height:64px;border-radius:12px;background:{bg};color:{fg};display:flex;flex-direction:column;justify-content:center;padding:0 12px;font-family:Inter;font-size:12px;font-weight:600" dir="ltr">{txt}</div>'
    cards+=f'''<div style="flex:1;background:#fff;border-radius:20px;padding:18px;display:flex;flex-direction:column;gap:10px;box-shadow:0 1px 2px rgba(14,42,45,.06)">
<div style="font-size:17px;font-weight:700">{NM[n]}</div>
<div style="display:flex;gap:8px">{sw(P['p'],'#fff',P['p']+'<span style="opacity:.8;font-weight:500">نص أبيض %.1f:1</span>'%cr('#FFFFFF',P['p']))}{sw(P['ps'],P['pi'],P['ps']+'<span style="opacity:.8;font-weight:500">%.1f:1</span>'%cr(P['pi'],P['ps']))}</div>
<div style="display:flex;gap:8px">{sw(dp,'#0D1316',dp+'<span style="opacity:.8;font-weight:500">غامق %.1f:1</span>'%cr('#0D1316',dp))}{sw(dps,dpi,dps+'<span style="opacity:.8;font-weight:500">%.1f:1</span>'%cr(dpi,dps))}</div></div>'''
fixed=[('ورشة','#5A4A8C','#EEEBF6'),('أسبوعية','#2F7A55','#E6F3EC'),('مرة واحدة','#8A5A00','#FFF3D6'),('مباشر','#B42318','#FDECEA')]
fx=''.join(f'<span style="display:inline-flex;align-items:center;gap:8px;height:34px;padding:0 14px;border-radius:10px;background:{b};color:{c};font-weight:700;font-size:15px">{t}<span style="font-family:Inter;font-size:12px;font-weight:500" dir="ltr">{c} · {cr(c,b):.1f}:1</span></span>' for t,c,b in fixed)
tokens=f'''<div style="display:flex;flex-direction:column;gap:14px"><div style="font-size:16px;font-weight:700">الألوان والتباين: كل لون فيه درجة للفاتح ودرجة للغامق، وكل الأرقام فوق 4.5:1 (WCAG AA)</div>
<div style="display:flex;gap:16px">{cards}</div>
<div style="background:#fff;border-radius:20px;padding:18px;display:flex;flex-direction:column;gap:12px"><div style="font-size:15px;font-weight:700">ثابت في كل الثيمات: ألوان أنواع الجلسات وحالة "مباشر"، عشان معناها ميتغيرش مع اللون اللي المستخدم يختاره. وكل شارة فيها كلمة، مش لون بس.</div><div style="display:flex;gap:10px;flex-wrap:wrap">{fx}</div></div>
<div style="display:flex;gap:16px">
<div style="flex:1;background:#fff;border-radius:20px;padding:18px"><div style="font-size:15px;font-weight:700;margin-bottom:8px">الخطوط</div><div style="font-size:14px;line-height:1.9;color:#3E5558">العناوين: Fraunces بالإنجليزي، Readex Pro بالعربي<br>النصوص: Inter بالإنجليزي، IBM Plex Sans Arabic بالعربي<br>الأرقام في البيانات (أوقات، أسعار، أعداد) بأرقام إنجليزي في الاتنين</div></div>
<div style="flex:1;background:#fff;border-radius:20px;padding:18px"><div style="font-size:15px;font-weight:700;margin-bottom:8px">الأشكال</div><div style="font-size:14px;line-height:1.9;color:#3E5558">الكروت 16 · الأزرار 12 · الشارات 8 · الأفاتار دايرة<br>أقل مساحة للمس 44 بكسل<br>الأيقونات خط 1.8 بنفس اللون بتاع النص</div></div>
</div></div>'''
html=f'''<!doctype html>
<html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>Ulfa, design system</title><script src="./support.js"></script></head><body><x-dc>
<helmet><link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700;800&amp;display=swap" rel="stylesheet"><style>body{{margin:0}}</style></helmet>
<div dir="rtl" style="width:1440px;box-sizing:border-box;padding:64px;background:#F6F4EE;color:#0E2A2D;font-family:'Rubik',sans-serif;display:flex;flex-direction:column;gap:36px">
<div style="display:flex;flex-direction:column;gap:8px"><div style="font-size:16px;font-weight:500;color:#0B6B6A">أعمال مختارة · ألفة · نظام التصميم</div><h1 style="margin:0;font-size:52px;font-weight:800;line-height:1.3">4 ألوان، في الفاتح والغامق: 8 حالات من نفس الشاشة</h1>
<p style="margin:0;font-size:18px;line-height:1.8;color:#3E5558;max-width:900px">مبني على لوحة المظهر في Figma: المستخدم بيختار لون من أربعة، وفاتح أو غامق، واللغة. كل الشاشات بتاخد ألوانها من نفس التوكنز، فأي لون يتختار بيمشي على التطبيق كله من غير ما نصمم الشاشة تاني. الألوان الأربعة هادية ومقروءة، والإضافة: خيار "زي الجهاز" للوضع، ومعاينة حية قبل ما تختار.</p></div>
{row('نفس الشاشة في الحالات الثمانية: فوق فاتح بالإنجليزي، وتحت غامق بالعربي',[f'ds-explore-{p}-en' for p in TH])}
<div dir="ltr" style="display:flex;gap:22px;margin-top:-14px">{"".join(img(f"ds-explore-{p}-ar-dark") for p in TH)}</div>
{row('شاشة المظهر: اللون والوضع واللغة، ومعاينة للكارت باللون اللي اخترته',['ds-appearance-en','ds-appearance-ar','ds-appearance-en-dark','ds-appearance-ar-dark'])}
{tokens}
</div></x-dc>
<script type="text/x-dc" data-dc-script data-props='{{"$preview":{{"width":1440,"height":3000}}}}'>
class Component extends DCLogic {{ renderVals() {{ return {{}}; }} }}
</script></body></html>'''
open('brand/project/Work-Ulfa-DS.dc.html','w').write(html)
