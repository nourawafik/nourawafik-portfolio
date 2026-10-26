import base64,io,json,re
from PIL import Image
B='/tmp/claude-0/-home-claude/a7376101-3103-5ad9-97ca-42e951e26fac/scratchpad/'
O=B+'praxa/out/'
def d(n,w=1240):
    im=Image.open(O+n+'.png').convert('RGB'); im=im.resize((w,round(im.height*w/im.width)),Image.LANCZOS); b=io.BytesIO(); im.save(b,'WEBP',quality=86)
    return 'data:image/webp;base64,'+base64.b64encode(b.getvalue()).decode()
img=lambda n,w=620:f'<img src="{d(n)}" style="width:{w}px;border-radius:14px;box-shadow:0 0 0 1px rgba(14,42,45,.12),0 20px 40px -24px rgba(14,42,45,.5)">'
def row(t,n):
    return f'<div style="display:flex;flex-direction:column;gap:12px"><div style="font-size:16px;font-weight:700">{t}</div><div dir="ltr" style="display:flex;gap:24px">{img(n)}{img(n+"-dark")}</div></div>'
vid=base64.b64encode(open(O+'voice-command.mp4','rb').read()).decode()
rows=''.join([
 row('لوحة الأدمن: أرقام اليوم، و"محتاج انتباهك" بالترتيب وفيها الخطوة الجاية، وحالة كل عيادة','admin'),
 row('لوحة المعالج: نفس الأساس بمحتوى تاني. جدول النهارده، والمريض الجاي وملخص آخر جلسة، والمسودات اللي مستنية موافقته','provider'),
 row('المواعيد: الأسبوع بألوان نوع الزيارة، وخط الوقت الحالي، وتفاصيل الموعد جنبه من غير ما تسيب الصفحة','appointments'),
 row('ملف المريض: الموعد الجاي، والتشخيص، والأدوية، والملاحظات بالترتيب، وأي حاجة من الذكاء الاصطناعي مكتوب عليها إنها اتوافق عليها','patient'),
 row('مسودة التشخيص بالذكاء الاصطناعي: كل جزء ليه مصدره، والمعالج بيقبل أو بيعدل جزء جزء، ومفيش حاجة بتدخل الملف قبل ما يراجع الكل','aidx'),
 f'<div style="display:flex;flex-direction:column;gap:12px"><div style="font-size:16px;font-weight:700">التحكم بالصوت (فيديو 9 ثواني): "افتح ملف سارة جونسون"، ولو فيه اسمين زي بعض بيسألك تختار، وبعدين يفتح الملف</div><div dir="ltr" style="display:flex;gap:24px;align-items:flex-start"><video autoplay muted loop playsinline style="width:820px;aspect-ratio:1440/960;border-radius:14px;box-shadow:0 0 0 1px rgba(14,42,45,.12),0 20px 40px -24px rgba(14,42,45,.5)" src="data:video/mp4;base64,{vid}"></video>{img("voice2",420)}</div></div>',
 row('التقارير: المواعيد المكتملة كل أسبوع، ونوع الزيارة، ومقارنة العيادات في جدول','reports')])
html=f'''<!doctype html>
<html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>Praxa, clinic platform</title><script src="./support.js"></script></head><body><x-dc>
<helmet><link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700;800&amp;display=swap" rel="stylesheet"><style>body{{margin:0}}</style></helmet>
<div dir="rtl" style="width:1440px;box-sizing:border-box;padding:64px;background:#F6F4EE;color:#0E2A2D;font-family:'Rubik',sans-serif;display:flex;flex-direction:column;gap:40px">
<div style="display:flex;flex-direction:column;gap:8px"><div style="font-size:16px;font-weight:500;color:#0B6B6A">أعمال مختارة · Praxa (كان KemeClinic)</div><h1 style="margin:0;font-size:52px;font-weight:800;line-height:1.3">منتج واحد لأربع أدوار في العيادة</h1>
<p style="margin:0;font-size:18px;line-height:1.8;color:#3E5558;max-width:920px">إعادة تصميم كاملة للداشبورد، مبنية على ملفك في Figma: نفس الموديولز ونفس الفلو، بهوية جديدة واسم جديد. ويب بس، فاتح وغامق. الصور الحقيقية للناس اتشالت وبقت حروف أول الاسم، وكل الأسماء والأرقام اللي جوه الشاشات للتوضيح بس. الحاجات اللي بتميز المشروع: الذكاء الاصطناعي اللي المعالج بيوافق عليه بنفسه، والتحكم بالصوت.</p></div>
<div style="display:flex;flex-direction:column;gap:12px"><div style="font-size:16px;font-weight:700">الغلاف</div><div dir="ltr" style="display:flex;gap:24px">{img("praxa-hero")}{img("praxa-hero-dark")}</div></div>
{rows}
</div></x-dc>
<script type="text/x-dc" data-dc-script data-props='{{"$preview":{{"width":1440,"height":6000}}}}'>
class Component extends DCLogic {{ renderVals() {{ return {{}}; }} }}
</script></body></html>'''
p=B+'brand/project/Work-Praxa.dc.html'; open(p,'w').write(html)
from playwright.sync_api import sync_playwright
fonts=''.join(f'<link href="file://{B}fonts/node_modules/@fontsource/rubik/{w}.css" rel="stylesheet">' for w in (400,500,700,800))
body=re.search(r'</helmet>(.*)</x-dc>',html,re.S).group(1)
with sync_playwright() as pw:
    br=pw.chromium.launch(); pg=br.new_page(viewport={'width':1440,'height':900}); pg.set_content(f'<html><head>{fonts}</head><body style="margin:0">{body}</body></html>'); pg.wait_for_timeout(1500)
    h=pg.evaluate('document.body.scrollHeight')+4; pg.screenshot(path=B+'praxa/board.png',full_page=True); br.close()
open(p,'w').write(html.replace('"height":6000','"height":%d'%h)); print(h)
cp=B+'brand/project/canvas.json'; c=json.load(open(cp))
c['boards']['Work-Praxa.dc.html']={'h':h,'title':'أعمال · Praxa (كان KemeClinic)','w':1440,'x':36820,'y':1320}
if 'Work-Praxa.dc.html' not in c['order']: c['order'].append('Work-Praxa.dc.html')
json.dump(c,open(cp,'w'),ensure_ascii=False,indent=2)
