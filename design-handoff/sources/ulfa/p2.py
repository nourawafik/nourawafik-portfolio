from uc import *
T={'en':dict(title='Explore',tabs=['Circles','Sessions','Facilitators'],q='What’s on your mind?',sub='Pick a feeling. No labels, no diagnosis.',
 tiles=[('worry','Worry'),('loss','Loss'),('pressure','Life pressure'),('parent','Parenting'),('change','Big changes'),('alone','Loneliness')],
 res='3 circles for “Worry”',c=[('Quiet Minds','A weekly circle for when your mind won’t slow down.','Hana Adel','Weekly','b-on','8 of 10 seats'),('Breathing through worry','Six evenings of simple tools you can use the same night.','Karim Fawzy','Workshop','b-ws','4 seats left')],
 view='View circle',ver='Verified facilitator'),
 'ar':dict(title='استكشف',tabs=['الدوائر','الجلسات','الميسرين'],q='إيه اللي شاغلك؟',sub='اختاري إحساس. من غير مسميات ولا تشخيص.',
 tiles=[('worry','القلق'),('loss','الفقد'),('pressure','ضغط الحياة'),('parent','الأمومة والأبوة'),('change','تغييرات كبيرة'),('alone','الوحدة')],
 res='٣ دوائر لـ «القلق»',c=[('عقول هادئة','دائرة أسبوعية للأيام اللي دماغك فيها مش بتهدى.','هنا عادل','أسبوعية','b-on','٨ من ١٠ أماكن'),('نتنفس مع القلق','ست أمسيات بأدوات بسيطة تستخدميها في نفس الليلة.','كريم فوزي','ورشة','b-ws','فاضل ٤ أماكن')],
 view='شوفي الدائرة',ver='ميسر موثق')}
def explore(lang='en',dark=False):
    t=T[lang]; rtl=lang=='ar'
    tabs=''.join(f'<div style="flex:1;text-align:center;padding:12px 0;font-size:14px;font-weight:600;{"color:var(--p);box-shadow:inset 0 -2.5px 0 var(--p)" if i==0 else "color:var(--subtle)"}">{x}</div>' for i,x in enumerate(t['tabs']))
    tiles=''.join(f'<div style="border-radius:18px;padding:12px;display:flex;flex-direction:column;gap:6px;{"background:var(--p-soft);box-shadow:inset 0 0 0 2px var(--p)" if i==0 else "background:var(--panel);border:1px solid var(--line)"}">{art(k,44)}<span style="font-size:14px;font-weight:600">{n}</span></div>' for i,(k,n) in enumerate(t['tiles']))
    cards=''.join(f'''<div class="card" style="padding:16px;display:flex;flex-direction:column;gap:10px">
<div style="display:flex;justify-content:space-between;align-items:center"><span class="chip {b}">{typ}</span><span class="sub" style="font-size:12px;font-weight:600">{seats}</span></div>
<div class="dsp" style="font-size:19px">{n}</div><div class="mut" style="font-size:14px;line-height:1.5">{d}</div>
<div style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding-top:10px;border-top:1px solid var(--line)"><div style="display:flex;align-items:center;gap:8px">{av(f[0],30)}<div style="font-size:13px;line-height:1.3"><b>{f}</b><div class="sub" style="display:flex;align-items:center;gap:4px;font-size:11px">{ic('shield',12)}{t['ver']}</div></div></div>
<span class="btn pri" style="height:38px;font-size:14px;padding:0 14px">{t['view']}</span></div></div>''' for n,d,f,typ,b,seats in t['c'])
    inner=f'''<div style="display:flex;flex-direction:column">
<div style="padding:6px 20px 0;display:flex;justify-content:space-between;align-items:center"><div class="dsp" style="font-size:26px">{t['title']}</div><span style="width:42px;height:42px;border-radius:50%;background:var(--panel);border:1px solid var(--line);display:flex;align-items:center;justify-content:center">{ic('search',20)}</span></div>
<div style="display:flex;border-bottom:1px solid var(--line);margin-top:10px">{tabs}</div>
<div style="padding:16px 20px 0;display:flex;flex-direction:column;gap:14px">
<div><div class="dsp" style="font-size:20px">{t['q']}</div><div class="mut" style="font-size:13px;margin-top:4px">{t['sub']}</div></div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">{tiles}</div>
<div style="display:flex;justify-content:space-between;align-items:center"><span style="font-size:14px;font-weight:700">{t['res']}</span><span style="width:36px;height:36px;border-radius:50%;border:1px solid var(--line);display:flex;align-items:center;justify-content:center">{ic('filter',18)}</span></div>
{cards}</div></div>'''
    return phone(inner,dark,rtl,1)
