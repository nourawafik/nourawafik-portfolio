from uc import *
T={'en':dict(greet='Good evening, Salma',q='How are you feeling tonight?',feel=[('worry','Worried'),('pressure','Stretched thin'),('loss','Grieving'),('alone','Lonely')],
 next='Your next session',ws='Workshop',title='Breathing through worry',meta='Session 2 of 6 · Tonight, 8:00–9:30 PM',lang='Arabic',starts='Starts in 25 min',fac='Hana Adel',circ='Quiet Minds circle',ready='Get ready',
 for_you='Circles for you',see='See all',c=[('Quiet Minds','Weekly · 8 people · Arabic','Because you chose “Worried”','worry'),('After the Loss','Every other Sunday · 6 people','New this month','loss')]),
 'ar':dict(greet='مساء الخير يا سلمى',q='حاسة بإيه الليلة؟',feel=[('worry','قلقانة'),('pressure','مضغوطة'),('loss','فقدت حد'),('alone','لوحدي')],
 next='جلستك الجاية',ws='ورشة',title='نتنفس مع القلق',meta='الجلسة ٢ من ٦ · الليلة، 8:00–9:30 م',lang='عربي',starts='تبدأ بعد 25 دقيقة',fac='هنا عادل',circ='دائرة عقول هادئة',ready='جهزي نفسك',
 for_you='دوائر مناسبة ليكي',see='الكل',c=[('عقول هادئة','كل أسبوع · ٨ أشخاص · عربي','لأنك اخترتي «قلقانة»','worry'),('بعد الفقد','كل أحد والتاني · ٦ أشخاص','جديدة الشهر ده','loss')])}
def home(lang='en',dark=False):
    t=T[lang]; rtl=lang=='ar'
    feel=''.join(f'<div style="display:flex;align-items:center;gap:8px;height:44px;padding:0 14px 0 6px;border-radius:999px;background:var(--panel);border:1px solid var(--line);font-size:14px;font-weight:600;white-space:nowrap">{art(k,32)}{n}</div>' for k,n in t['feel'])
    cards=''.join(f'''<div class="card" style="width:228px;flex-shrink:0;padding:16px;display:flex;flex-direction:column;gap:10px">
<div style="display:flex;justify-content:space-between;align-items:flex-start">{art(k,52)}<span style="width:34px;height:34px;border-radius:50%;border:1.5px solid var(--line);display:flex;align-items:center;justify-content:center;color:var(--muted)">{ic('heart',16)}</span></div>
<div class="dsp" style="font-size:19px">{n}</div><div class="mut" style="font-size:13px">{m}</div>
<div style="font-size:12px;font-weight:600;color:var(--p-ink);background:var(--p-soft);padding:6px 10px;border-radius:10px">{why}</div></div>''' for n,m,why,k in t['c'])
    inner=f'''<div style="padding:6px 20px 0;display:flex;flex-direction:column;gap:18px">
<div style="display:flex;justify-content:space-between;align-items:center">{logo(24,rtl)}<span style="width:42px;height:42px;border-radius:50%;background:var(--panel);border:1px solid var(--line);display:flex;align-items:center;justify-content:center;position:relative">{ic('bell',20)}<span style="position:absolute;top:9px;inset-inline-end:10px;width:8px;height:8px;border-radius:50%;background:var(--sa)"></span></span></div>
<div><div class="dsp" style="font-size:28px;line-height:1.25">{t['greet']}</div><div class="mut" style="font-size:16px;margin-top:6px">{t['q']}</div></div>
<div style="display:flex;gap:8px;margin-inline:-20px;padding-inline:20px;overflow:hidden">{feel}</div>
<div style="display:flex;flex-direction:column;gap:10px"><div style="font-size:13px;font-weight:700;letter-spacing:.04em;color:var(--subtle)">{t['next'].upper() if not rtl else t['next']}</div>
<div style="border-radius:24px;background:var(--p);color:var(--on-p);padding:18px;display:flex;flex-direction:column;gap:12px;position:relative;overflow:hidden">
<svg width="160" height="160" viewBox="0 0 160 160" style="position:absolute;inset-inline-end:-40px;top:-40px;opacity:.18"><circle cx="80" cy="80" r="60" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="80" cy="80" r="40" fill="none" stroke="currentColor" stroke-width="2"/></svg>
<div style="display:flex;justify-content:space-between;align-items:center"><span class="chip" style="background:rgba(255,255,255,.18);color:inherit">{t['ws']}</span><span style="display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600">{ic('clock',16)}{t['starts']}</span></div>
<div class="dsp" style="font-size:22px;line-height:1.3">{t['title']}</div>
<div style="font-size:13px;opacity:.85">{t['meta']}</div>
<div style="display:flex;align-items:center;justify-content:space-between;gap:10px"><div style="display:flex;align-items:center;gap:10px">{av('HA' if not rtl else 'ه',34,'var(--sa)','#2A1B05')}<div style="font-size:13px;line-height:1.35"><b>{t['fac']}</b><br><span style="opacity:.8">{t['circ']}</span></div></div>
<span class="btn" style="height:40px;background:var(--sa);border-color:var(--sa);color:#2A1B05">{t['ready']}</span></div></div></div>
<div style="display:flex;justify-content:space-between;align-items:center"><div class="dsp" style="font-size:20px">{t['for_you']}</div><span style="font-size:14px;font-weight:600;color:var(--p)">{t['see']}</span></div>
<div style="display:flex;gap:12px;margin-inline:-20px;padding-inline:20px">{cards}</div>
</div>'''
    return phone(inner,dark,rtl,0)
