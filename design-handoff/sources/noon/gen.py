import json
T='#0E7C7B';D='#0E2A2D';Y='#FFC845';C='#FF6B5B';W='#FFFFFF'
VB='-25 -55 280 255'
def body(col):
    return f'<path d="M26 64 C20 112 30 158 70 160 C104 162 114 120 112 64 C128 92 150 124 174 152" fill="none" stroke="{col}" stroke-width="17" stroke-linecap="round" stroke-linejoin="round"/>'
def arm(col,rot,cls=''):
    c=f' class="{cls}"' if cls else ''
    return f'<g{c}><path d="M174 152 C172 122 173 94 174 60" fill="none" stroke="{col}" stroke-width="17" stroke-linecap="round" transform="rotate({rot} 174 152)"/></g>'
F={
'open':'<circle cx="64" cy="25" r="2.3" fill="#0E2A2D"/><circle cx="75" cy="25" r="2.3" fill="#0E2A2D"/><path d="M63 31 Q69.5 36 76 31" fill="none" stroke="#0E2A2D" stroke-width="1.8" stroke-linecap="round"/>',
'wink':'<path d="M61.5 25 H66.5" stroke="#0E2A2D" stroke-width="1.8" stroke-linecap="round"/><circle cx="75" cy="25" r="2.3" fill="#0E2A2D"/><path d="M63 31 Q69.5 36 76 31" fill="none" stroke="#0E2A2D" stroke-width="1.8" stroke-linecap="round"/>',
'sleep':'<path d="M61 25 Q64 27.5 67 25" fill="none" stroke="#0E2A2D" stroke-width="1.8" stroke-linecap="round"/><path d="M72 25 Q75 27.5 78 25" fill="none" stroke="#0E2A2D" stroke-width="1.8" stroke-linecap="round"/><path d="M67 32 Q69.5 33.5 72 32" fill="none" stroke="#0E2A2D" stroke-width="1.6" stroke-linecap="round"/>',
'up':'<circle cx="66" cy="22" r="2.3" fill="#0E2A2D"/><circle cx="77" cy="22" r="2.3" fill="#0E2A2D"/><path d="M65 31 H73" stroke="#0E2A2D" stroke-width="1.8" stroke-linecap="round"/>',
'wow':'<circle cx="64" cy="24" r="2.6" fill="#0E2A2D"/><circle cx="75" cy="24" r="2.6" fill="#0E2A2D"/><ellipse cx="69.5" cy="32" rx="2.4" ry="3" fill="#0E2A2D"/>',
'happy':'<path d="M61 26 Q64 22 67 26" fill="none" stroke="#0E2A2D" stroke-width="1.8" stroke-linecap="round"/><path d="M72 26 Q75 22 78 26" fill="none" stroke="#0E2A2D" stroke-width="1.8" stroke-linecap="round"/><path d="M64 30 Q69.5 37 75 30 Z" fill="#0E2A2D"/>',
'focus':'<circle cx="65" cy="27" r="2.3" fill="#0E2A2D"/><circle cx="76" cy="27" r="2.3" fill="#0E2A2D"/><path d="M66 32.5 Q70 34.5 74 32.5" fill="none" stroke="#0E2A2D" stroke-width="1.8" stroke-linecap="round"/>',
'confused':'<circle cx="64" cy="25" r="2.3" fill="#0E2A2D"/><circle cx="75" cy="25" r="2.3" fill="#0E2A2D"/><path d="M73 20.5 L78 19" stroke="#0E2A2D" stroke-width="1.6" stroke-linecap="round"/><path d="M63 32 Q66 30 69.5 32 Q73 34 76 32" fill="none" stroke="#0E2A2D" stroke-width="1.8" stroke-linecap="round"/>',
'smile':'<circle cx="64" cy="25" r="2.3" fill="#0E2A2D"/><circle cx="75" cy="25" r="2.3" fill="#0E2A2D"/><path d="M62 30 Q69.5 38 77 30" fill="none" stroke="#0E2A2D" stroke-width="1.8" stroke-linecap="round"/>',
}
def head(face,fill=Y):
    return f'<g transform="translate(69 26) scale(1.8) translate(-69 -26)"><path d="M64 12 C77 6 89 19 83 32 C77 44 57 42 55 30 C54 21 57 15 64 12 Z" fill="{fill}" stroke="#0E2A2D" stroke-width="2"/>{F[face]}</g>'
def noon(face,rot=0,col=T,armcls='',hf=Y):
    return body(col)+arm(col,rot,armcls)+head(face,hf)
P=[]
def add(k,ar,en,use,svg,bg='#FFFFFF',fg=D,sub='#3E5558',new=False):
    P.append(dict(k=k,ar=ar,en=en,use=use,svg=svg,bg=bg,fg=fg,sub=sub,new=new))
add('wave','بتسلم','Waving','ترحيب، أول بوست، صفحة التواصل، اسأل نورا',noon('open',0,armcls='nw-wave'))
add('wink','بتغمز','Winking','تريكس سريعة، معلومة مش متوقعة',noon('wink',8)+'<path d="M128 -6 l8 8 M146 -16 v13 M114 6 l11 2" stroke="#FF6B5B" stroke-width="6" stroke-linecap="round"/>')
add('draw','بترسم','Drawing','كواليس الشغل، فيديوهات العملية',
 '<path class="nw-draw" pathLength="100" d="M-12 192 C28 176 66 200 104 186 C136 175 168 190 214 182" fill="none" stroke="#FF6B5B" stroke-width="7" stroke-linecap="round"/>'+noon('focus',34)+
 '<g transform="translate(225 76) rotate(35)"><rect x="-9" y="-6" width="18" height="62" rx="4" fill="#FF6B5B" stroke="#0E2A2D" stroke-width="4"/><path d="M-9 56 L0 76 L9 56 Z" fill="#F6F4EE" stroke="#0E2A2D" stroke-width="4" stroke-linejoin="round"/></g>')
add('explain','بتشرح','Explaining','نصايح، دراسات حالة، نتايج',
 '<rect x="160" y="-50" width="84" height="64" rx="10" fill="#F6F4EE" stroke="#0E2A2D" stroke-width="4"/><rect x="174" y="-14" width="13" height="18" fill="#FF6B5B"/><rect x="195" y="-26" width="13" height="30" fill="#0E7C7B"/><rect x="216" y="-38" width="13" height="42" fill="#FFC845"/>'+noon('smile',14)+'<path d="M196 63 L214 20" stroke="#0E2A2D" stroke-width="5" stroke-linecap="round"/>')
add('think','بتفكر','Thinking','"نون بتفكر" في اسأل نورا، أسئلة للمتابعين',
 '<g class="nw-float"><circle cx="118" cy="-14" r="7" fill="#FF6B5B"/><circle cx="140" cy="-32" r="10" fill="#FF6B5B"/><circle cx="168" cy="-44" r="12" fill="#FF6B5B"/></g>'+noon('up',-8))
add('idea','فكرة! نور','Idea','الهيرو، لحظة الحل، "خلي فكرتك تشوف النور"',
 '<g class="nw-glow" stroke="#FFC845" stroke-width="7" stroke-linecap="round"><path d="M69 -34 V-50"/><path d="M110 -18 L121 -29"/><path d="M28 -18 L17 -29"/><path d="M126 26 H142"/><path d="M12 26 H-4"/></g>'+noon('happy',0,col=W),bg=D,fg=W,sub='#A9C2C4')
add('celebrate','بتحتفل','Celebrating','إطلاق مشروع، عميل جديد، إنجاز',
 '<rect x="-8" y="-20" width="14" height="7" rx="3" fill="#FF6B5B" transform="rotate(30 -1 -16)"/><rect x="200" y="-30" width="14" height="7" rx="3" fill="#0E7C7B" transform="rotate(-25 207 -26)"/><circle cx="10" cy="30" r="6" fill="#FFC845"/><circle cx="226" cy="40" r="6" fill="#FF6B5B"/><rect x="150" y="-48" width="10" height="10" rx="2" fill="#FFC845"/><rect x="20" y="-48" width="10" height="10" rx="2" fill="#0E7C7B"/>'+
 '<g class="nw-hop">'+noon('happy',28,col=C)+'</g>')
add('sleep','نايمة','Sleeping','زرار اسأل نورا قبل اللمس، إجازة، رد آلي',
 '<text class="nw-z" x="118" y="-6" font-family="Rubik, sans-serif" font-size="44" font-weight="800" fill="#0E7C7B">z</text><text class="nw-z2" x="150" y="-30" font-family="Rubik, sans-serif" font-size="32" font-weight="800" fill="#0E7C7B">z</text>'+noon('sleep',0))
add('search','بتدور','Searching','بحث، مراجعة موقع أو منتج، "لقيت المشكلة"',
 noon('focus',26)+'<path d="M214 69 L224 50" stroke="#0E2A2D" stroke-width="8" stroke-linecap="round"/><circle cx="232" cy="30" r="22" fill="#E6F4F3" stroke="#0E2A2D" stroke-width="7"/><path d="M222 24 Q228 16 237 18" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>',new=True)
add('wow','مندهشة','Wow','قبل وبعد، رقم مفاجئ، خبر حلو',
 noon('wow',-14)+'<g fill="#FF6B5B"><rect x="130" y="-46" width="12" height="40" rx="6" transform="rotate(12 136 -26)"/><circle cx="131" cy="10" r="7"/></g><path d="M112 -30 l-8 -10 M152 -4 l12 -4" stroke="#FF6B5B" stroke-width="6" stroke-linecap="round"/>',new=True)
add('point','بتشاور','Pointing','"اسحب"، دعوة لزرار أو عرض، "شوف هنا"',
 noon('smile',52)+'<path d="M228 52 L248 44 M234 70 L254 72" stroke="#FFC845" stroke-width="6" stroke-linecap="round"/>',new=True)
add('work','بتشتغل','Working','شغل جاري، تحديثات مشروع، "قريب"',
 noon('focus',18)+'<g transform="translate(140 108)"><rect x="18" y="0" width="86" height="56" rx="8" fill="#0E2A2D"/><rect x="26" y="8" width="70" height="40" rx="4" fill="#E6F4F3"/><path d="M34 20 H70 M34 30 H84 M34 40 H58" stroke="#0E7C7B" stroke-width="4" stroke-linecap="round"/><rect x="2" y="56" width="118" height="12" rx="6" fill="#0E2A2D"/></g>',new=True)
add('confused','محتارة','Confused','أخطاء شائعة، "ليه ده بيحصل؟"، سؤال',
 noon('confused',-6)+'<text x="118" y="-4" font-family="Rubik, sans-serif" font-size="62" font-weight="800" fill="#FF6B5B">?</text>',new=True)
add('love','بتحب','Loving','شكر للعملاء، آراء حقيقية، مناسبات',
 noon('happy',10)+'<path class="nw-float" d="M138 -8 C126 -22 108 -8 120 6 L138 22 L156 6 C168 -8 150 -22 138 -8 Z" fill="#FF6B5B" stroke="#0E2A2D" stroke-width="4" stroke-linejoin="round"/>',new=True)
add('read','بتقرا','Reading','كتب ومقالات، مصادر بنصح بيها',
 noon('focus',20)+'<g transform="translate(136 104) rotate(-8)"><path d="M0 0 Q30 -10 56 4 Q82 -10 112 0 V56 Q82 46 56 60 Q30 46 0 56 Z" fill="#FFFFFF" stroke="#0E2A2D" stroke-width="5" stroke-linejoin="round"/><path d="M56 4 V60" stroke="#0E2A2D" stroke-width="4"/><path d="M14 18 Q30 13 44 18 M14 32 Q30 27 44 32 M68 18 Q84 13 98 18" fill="none" stroke="#0E7C7B" stroke-width="4" stroke-linecap="round"/></g>',new=True)
add('announce','بتعلن','Announcing','خدمة جديدة، عرض لفترة محدودة، إطلاق',
 noon('smile',20)+'<g transform="translate(190 56) rotate(-30)"><path d="M0 -12 L44 -32 V32 L0 12 Z" fill="#FF6B5B" stroke="#0E2A2D" stroke-width="5" stroke-linejoin="round"/><rect x="-12" y="-12" width="14" height="24" rx="4" fill="#0E2A2D"/></g><path d="M232 -12 l10 -8 M238 8 h12 M234 28 l10 8" stroke="#FFC845" stroke-width="6" stroke-linecap="round"/>',new=True)
CSS='''@keyframes nw-wave{0%,100%{transform:rotate(4deg)}50%{transform:rotate(28deg)}}
@keyframes nw-hop{0%,100%{transform:translateY(0)}40%{transform:translateY(-16px)}60%{transform:translateY(0)}70%{transform:translateY(-5px)}}
@keyframes nw-draw{0%{stroke-dashoffset:100}55%,100%{stroke-dashoffset:0}}
@keyframes nw-glow{0%,100%{opacity:1}50%{opacity:.35}}
@keyframes nw-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
@keyframes nw-z{0%{opacity:0;transform:translate(0,0)}30%{opacity:1}100%{opacity:0;transform:translate(12px,-22px)}}
.nw-wave{transform-origin:174px 152px;transform-box:view-box;animation:nw-wave 1.4s ease-in-out infinite}
.nw-hop{animation:nw-hop 2.4s ease-in-out infinite}
.nw-draw{stroke-dasharray:100;animation:nw-draw 3.2s ease-in-out infinite}
.nw-glow{animation:nw-glow 2s ease-in-out infinite}
.nw-float{animation:nw-float 3s ease-in-out infinite}
.nw-z{animation:nw-z 2.6s ease-out infinite}.nw-z2{animation:nw-z 2.6s ease-out .9s infinite}
@media (prefers-reduced-motion: reduce){.nw-wave,.nw-hop,.nw-draw,.nw-glow,.nw-float,.nw-z,.nw-z2{animation:none}}'''
cards=''
for p in P:
    tag='<span style="position: absolute; top: 16px; left: 16px; background: #FF6B5B; color: #0E2A2D; border-radius: 999px; padding: 3px 12px; font-size: 13px; font-weight: 700">جديد</span>' if p['new'] else ''
    cards+=f'''<div style="background: {p['bg']}; color: {p['fg']}; border-radius: 24px; padding: 24px; display: flex; flex-direction: column; align-items: center; gap: 6px; position: relative">{tag}
<svg width="220" height="200" viewBox="{VB}" role="img" aria-label="Noon {p['en'].lower()}">{p['svg']}</svg>
<div style="display: flex; gap: 10px; align-items: baseline"><span style="font-size: 22px; font-weight: 800">{p['ar']}</span><span lang="en" style="font-size: 15px; font-weight: 500; color: {p['sub']}">{p['en']}</span></div>
<div style="font-size: 15px; line-height: 1.7; color: {p['sub']}; text-align: center">{p['use']}</div>
</div>
'''
html=f'''<!doctype html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8">
<title>Noon poses</title>
<script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700;800&amp;display=swap" rel="stylesheet">
<style>
body{{margin:0}}
{CSS}
</style>
</helmet>
<div dir="rtl" style="width: 1440px; box-sizing: border-box; padding: 64px; background: #F6F4EE; color: #0E2A2D; font-family: 'Rubik', sans-serif; display: flex; flex-direction: column; gap: 32px">
<div style="display: flex; justify-content: space-between; align-items: flex-end; gap: 32px">
<div style="display: flex; flex-direction: column; gap: 8px">
<div style="font-size: 16px; font-weight: 500; color: #0B6B6A">نون · الشكل النهائي</div>
<h1 style="margin: 0; font-size: 56px; font-weight: 800; line-height: 1.3">نون في مواقف</h1>
<p style="margin: 0; font-size: 18px; line-height: 1.8; color: #3E5558; max-width: 760px">كل المواقف القديمة اترسمت تاني بالشكل النهائي: الجسم هو اللوجو، والراس هي النقطة الصفرا، والإيد هي آخر خط في الـ N. وزودنا 8 مواقف جديدة للمحتوى والموقع.</p>
</div>
<svg width="150" height="33" viewBox="160 25 1108 245" aria-hidden="true"><g fill="none" stroke="#0E2A2D" stroke-width="17" stroke-linecap="round" stroke-linejoin="round"><path d="M1018 100 V176 Q1018 200 994 200 H940"/><circle cx="900" cy="160" r="40"/><path d="M940 160 C941 206 930 240 880 252"/><path d="M817 144 C818 196 808 236 758 252"/><path d="M774 46 V200"/><circle cx="647" cy="160" r="40"/><path d="M687 160 C688 206 677 240 627 252"/><circle cx="538" cy="162" r="38"/><path d="M538 200 H376"/><path d="M446 104 V178 Q446 200 424 200"/><circle cx="338" cy="162" r="38"/><path d="M376 162 V204 C376 240 344 258 282 258 C222 258 186 242 186 212 V198"/></g><g fill="#0E2A2D"><circle cx="1018" cy="60" r="11"/><circle cx="538" cy="92" r="11"/><circle cx="435" cy="236" r="10"/><circle cx="457" cy="236" r="10"/><circle cx="327" cy="92" r="10"/><circle cx="349" cy="92" r="10"/></g><g transform="translate(1068 40)"><path d="M26 64 C20 112 30 158 70 160 C104 162 114 120 112 64 C128 92 150 124 174 152 C172 122 173 94 174 60" fill="none" stroke="#0E7C7B" stroke-width="17" stroke-linecap="round" stroke-linejoin="round"/><path d="M64 12 C77 6 89 19 83 32 C77 44 57 42 55 30 C54 21 57 15 64 12 Z" fill="#FFC845"/></g></svg>
</div>
<div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 20px">
{cards}</div>
<div style="background: #FFFFFF; border-radius: 24px; padding: 24px 28px; font-size: 16px; line-height: 1.8; color: #3E5558">قواعد ثابتة: الراس دايما صفرا بوش وخط غامق، والجسم تيل (مرجاني في الاحتفال، أبيض على الغامق). نون بتظهر في ركن البوست مش في النص، والإكسسوارات بسيطة وبنفس سمك الخط. الحركة بتقف لو الزائر مقفل الحركة.</div>
</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{{"$preview":{{"width":1440,"height":1860}}}}'>
class Component extends DCLogic {{
renderVals() {{
return {{}};
}}
}}
</script>
</body>
</html>
'''
open('brand/project/Noon-Poses.dc.html','w').write(html)
# standalone svgs
import os; os.makedirs('noon/svg',exist_ok=True)
for p in P:
    st='' if 'class=' not in p['svg'] else f'<style>{CSS}</style>'
    open(f"noon/svg/noon-{p['k']}.svg",'w').write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{VB}" width="280" height="255" role="img" aria-label="Noon {p["en"].lower()}">{st}{p["svg"]}</svg>')
print(len(P))
