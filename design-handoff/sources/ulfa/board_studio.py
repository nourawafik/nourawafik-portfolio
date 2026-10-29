import base64,io
from PIL import Image
def d(n):
    im=Image.open(f'ulfa/out2/studio-{n}.png').convert('RGB').resize((500,1082),Image.LANCZOS); b=io.BytesIO(); im.save(b,'WEBP',quality=88)
    return 'data:image/webp;base64,'+base64.b64encode(b.getvalue()).decode()
def row(title,n):
    imgs=''.join(f'<img src="{d(f"{n}-{v}")}" style="width:250px;border-radius:26px;box-shadow:0 0 0 6px #0E2A2D">' for v in ['en','ar','en-dark','ar-dark'])
    return f'<div style="display:flex;flex-direction:column;gap:12px"><div style="font-size:16px;font-weight:700">{title}</div><div dir="ltr" style="display:flex;gap:22px;justify-content:flex-start">{imgs}</div></div>'
rows=row('التقويم: الشهر كله بنقط لنوع كل جلسة، وتحته جلسات اليوم المختار بالوقت وعدد المسجلين','calendar')+\
row('إدارة الورشة: ملخص سريع، والتسجيل بالأسبوع (باقة كاملة ولا جلسة واحدة)، وتنبيه هادي عن الالتزام بالمواعيد','manage')+\
row('المحفظة: الرصيد المتاح وزرار التحويل فوق، واللي في الطريق لوحده، والحركة اللي فشلت بتقولك تعمل إيه','wallet')+\
row('طلب تحويل: المبلغ، وهيتحول فين، والرسوم واضحة قبل التأكيد، وتأكيد بالرقم السري','payout')
html=f'''<!doctype html>
<html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>Ulfa, provider studio</title><script src="./support.js"></script></head><body><x-dc>
<helmet><link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700;800&amp;display=swap" rel="stylesheet"><style>body{{margin:0}}</style></helmet>
<div dir="rtl" style="width:1440px;box-sizing:border-box;padding:64px;background:#F6F4EE;color:#0E2A2D;font-family:'Rubik',sans-serif;display:flex;flex-direction:column;gap:36px">
<div style="display:flex;flex-direction:column;gap:8px"><div style="font-size:16px;font-weight:500;color:#0B6B6A">أعمال مختارة · ألفة · استوديو الميسر</div><h1 style="margin:0;font-size:52px;font-weight:800;line-height:1.3">كل اللي الميسر محتاجه، في أربع شاشات</h1>
<p style="margin:0;font-size:18px;line-height:1.8;color:#3E5558;max-width:900px">مبنية على شاشات الميسر في Figma، بنفس ألوان وكومبوننتس تطبيق المشارك. ألوان أنواع الجلسات (ورشة، أسبوعية، مرة واحدة) هي هي في التقويم والكروت والشارت. التغييرات: التقويم بقى فيه دليل للألوان، والورشة بقت في صفحة واحدة مختصرة، والتنبيهات بقت بلغة هادية بدل التهديد بالإيقاف، والمحفظة بتفصل الفلوس الجاهزة عن اللي لسه جاية، والرسوم بتبان قبل ما تأكد.</p></div>
{rows}
</div></x-dc>
<script type="text/x-dc" data-dc-script data-props='{{"$preview":{{"width":1440,"height":3000}}}}'>
class Component extends DCLogic {{ renderVals() {{ return {{}}; }} }}
</script></body></html>'''
open('brand/project/Work-Ulfa-Studio.dc.html','w').write(html)
