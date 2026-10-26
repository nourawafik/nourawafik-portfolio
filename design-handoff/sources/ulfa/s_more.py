from u2 import *
from avatars import P, circ_img
def top(title,rtl,back=True):
    chev=i2('chev',20,'transform:scaleX(-1)' if not rtl else '')
    return f'<div style="padding:4px 16px 10px;display:flex;align-items:center;gap:8px;border-bottom:1px solid var(--line);background:var(--panel)">{f"<span class=ib style=border:0;width:40px>{chev}</span>" if back else "<span style=width:40px></span>"}<div class="t" style="flex:1;text-align:center;font-size:19px">{title}</div><span style="width:40px"></span></div>'
SD={'en':dict(title='Session details',badge='Workshop',name='Managing anxiety through mindful breathing',circle='Anxious Hearts',info=[('users','Adults 18+'),('globe','Arabic'),('seat','10 of 20 seats left'),('tag','EGP 200 / session')],
  desc='A six-week workshop on the link between body and worry. Each session adds one simple breathing tool and time to reflect together.',fac='Amany Saleh',role='Certified psychologist',rev='4.8 · 94 reviews',sched='Workshop schedule',n='6 sessions',
  items=[('Introduction to somatic breathing','Sep 15, 2026','6:00–7:30 PM'),('Anxiety patterns and triggers','Sep 22, 2026','6:00–7:30 PM'),('Grounding techniques','Sep 29, 2026','6:00–7:30 PM'),('Regulating the nervous system','Oct 6, 2026','6:00–7:30 PM')],
  more='+ 2 more sessions',price='EGP 1,200',per='for all 6 sessions',join='Join workshop'),
 'ar':dict(title='تفاصيل الجلسة',badge='ورشة',name='إدارة القلق بالتنفس الواعي',circle='قلوب قلقة',info=[('users','للكبار +18'),('globe','عربي'),('seat','فاضل 10 من 20 مكان'),('tag','200 ج.م للجلسة')],
  desc='ورشة على ست أسابيع عن العلاقة بين الجسم والقلق. كل جلسة بتضيف أداة تنفس بسيطة ووقت للتأمل مع بعض.',fac='أماني صالح',role='أخصائية نفسية معتمدة',rev='4.8 · 94 تقييم',sched='مواعيد الورشة',n='6 جلسات',
  items=[('مقدمة في التنفس الجسدي','15 سبتمبر 2026','من 6:00 لـ 7:30 م'),('أنماط القلق ومحفزاته','22 سبتمبر 2026','من 6:00 لـ 7:30 م'),('تقنيات التثبيت','29 سبتمبر 2026','من 6:00 لـ 7:30 م'),('تنظيم الجهاز العصبي','6 أكتوبر 2026','من 6:00 لـ 7:30 م')],
  more='+ جلستين كمان',price='1,200 ج.م',per='للست جلسات',join='انضم للورشة')}
def session(lang='en',dark=False):
    t=SD[lang]; rtl=lang=='ar'
    info=''.join(f'<div class="m" style="display:flex;align-items:center;gap:8px;font-size:14px">{i2(a,18)}{b}</div>' for a,b in t['info'])
    items=''.join(f'<div style="display:flex;gap:12px;padding:12px 0;{"border-top:1px solid var(--line)" if i else ""}"><span style="width:28px;height:28px;border-radius:8px;background:var(--ws-bg);color:var(--ws);font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">{i+1}</span><div><div style="font-size:15px;font-weight:600">{a}</div><div class="s" style="font-size:13px;display:flex;gap:10px;margin-top:3px"><span style="display:flex;gap:4px;align-items:center">{i2("cal",14)}{b}</span><span style="display:flex;gap:4px;align-items:center">{i2("clock",14)}{c}</span></div></div></div>' for i,(a,b,c) in enumerate(t['items']))
    inner=f'''{top(t['title'],rtl)}
<div class="col" style="flex:1;overflow:hidden;padding:18px 20px 0;display:flex;flex-direction:column;gap:16px">
<div><span class="badge ws">{t['badge']}</span><div class="t" style="font-size:23px;line-height:1.3;margin-top:10px">{t['name']}</div><div style="display:flex;align-items:center;gap:8px;margin-top:8px;font-size:14px;font-weight:600;color:var(--p)">{circ_img(0,22)}{t['circle']}</div></div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px 12px;padding:14px;border-radius:14px;background:var(--panel);border:1px solid var(--line)">{info}</div>
<div class="m" style="font-size:15px;line-height:1.6">{t['desc']}</div>
<div class="card" style="padding:14px;display:flex;align-items:center;gap:12px">{P('amany',48)}<div><div style="font-size:16px;font-weight:700">{t['fac']}</div><div style="font-size:13px;color:var(--p);font-weight:600;display:flex;align-items:center;gap:4px">{i2('shield',14)}{t['role']}</div><div class="s" style="font-size:12px;display:flex;align-items:center;gap:4px;margin-top:2px">{star(12)}{t['rev']}</div></div></div>
<div><div style="display:flex;justify-content:space-between;align-items:center"><div style="font-size:15px;font-weight:700">{t['sched']}</div><span class="chip" style="height:24px;font-size:12px">{t['n']}</span></div>{items}<div style="font-size:14px;font-weight:600;color:var(--p);padding-top:4px">{t['more']}</div></div>
</div>
<div style="padding:12px 20px 26px;border-top:1px solid var(--line);background:var(--panel);display:flex;align-items:center;gap:14px"><div style="flex:1"><div style="font-size:18px;font-weight:700">{t['price']}</div><div class="s" style="font-size:12px">{t['per']}</div></div><span class="btn p" style="height:50px;padding:0 26px;font-size:16px">{t['join']}</span></div>'''
    return frame(inner,'slate',dark,rtl,nav=False)
MS={'en':dict(title='My sessions',tabs=[('Today',None),('Upcoming','12'),('Pending',None),('Finished','24')],today='Today · 3 sessions',
  c=[('ws','Workshop','live','Live now','Managing anxiety through mindful breathing','amany','Amany Saleh','Anxious Hearts','Session 1 of 6 · Somatic breathing','6:00–7:30 PM','Arabic','Join now'),
     ('on','Ongoing','soon','In 2 hours','Stress and the body','omar','Omar Khaled','Grief Together','Weekly · Session 5','8:00–9:00 PM','English','View'),
     ('one','One-time','soon','In 5 hours','Evening calm: guided grounding','lina','Lina Hassan','Quiet Minds',None,'10:00–10:45 PM','Arabic','View')]),
 'ar':dict(title='جلساتي',tabs=[('النهارده',None),('الجاية','12'),('في الانتظار',None),('خلصت','24')],today='النهارده · 3 جلسات',
  c=[('ws','ورشة','live','شغالة دلوقتي','إدارة القلق بالتنفس الواعي','amany','أماني صالح','قلوب قلقة','الجلسة 1 من 6 · التنفس الجسدي','من 6:00 لـ 7:30 م','عربي','ادخل دلوقتي'),
     ('on','أسبوعية','soon','بعد ساعتين','الضغط والجسم','omar','عمر خالد','نحزن معا','كل أسبوع · الجلسة 5','من 8:00 لـ 9:00 م','إنجليزي','عرض'),
     ('one','مرة واحدة','soon','بعد 5 ساعات','هدوء المساء: تمرين تثبيت','lina','لينا حسن','عقول هادئة',None,'من 10:00 لـ 10:45 م','عربي','عرض')])}
def card_s(c,i,rtl):
    b,bl,st,sl,title,who,f,circ,sub,tm,lng,btn=c
    stc='<span class="badge live"><span style="width:7px;height:7px;border-radius:50%;background:var(--live)"></span>'+sl+'</span>' if st=='live' else f'<span class="badge" style="background:var(--ps);color:var(--pi)">{i2("clock",13)}{sl}</span>'
    sub_h=f'<div class="m" style="font-size:13px;display:flex;gap:6px;align-items:center">{i2("cal",15)}{sub}</div>' if sub else ''
    return f'''<div class="card" style="padding:16px;display:flex;flex-direction:column;gap:11px">
<div style="display:flex;justify-content:space-between"><span class="badge {b}">{bl}</span>{stc}</div>
<div class="t" style="font-size:18px;line-height:1.35">{title}</div>
<div style="display:flex;align-items:center;gap:10px">{P(who,32)}<div style="font-size:14px;font-weight:600">{f}<span class="s" style="font-weight:400"> · {circ}</span></div></div>
{sub_h}<div class="m" style="font-size:13px;display:flex;gap:14px"><span style="display:flex;gap:6px;align-items:center">{i2("clock",15)}{tm}</span><span style="display:flex;gap:6px;align-items:center">{i2("globe",15)}{lng}</span></div>
<span class="btn{' p' if st=='live' else ''}" style="height:44px">{btn}</span></div>'''
def mysessions(lang='en',dark=False,inner_only=False):
    t=MS[lang]; rtl=lang=='ar'
    tabs=''.join(f'<div style="flex:1;text-align:center;padding:13px 0;font-size:14px;font-weight:600;display:flex;gap:5px;justify-content:center;align-items:center;{"color:var(--p);box-shadow:inset 0 -2px 0 var(--p)" if i==0 else "color:var(--subtle)"}">{a}{f"<span style=background:var(--sunk);border-radius:8px;padding:1px_6px;font-size:11px>{n}</span>".replace("_"," ") if n else ""}</div>' for i,(a,n) in enumerate(t['tabs']))
    inner=f'''<div style="padding:4px 20px 0;display:flex;align-items:center;justify-content:space-between"><span style="width:42px"></span><div class="t" style="font-size:22px">{t['title']}</div><span class="ib">{i2('bell',20)}</span></div>
<div style="display:flex;border-bottom:1px solid var(--line);margin-top:10px">{tabs}</div>
<div class="col" style="flex:1;overflow:hidden;padding:16px 20px 0;display:flex;flex-direction:column;gap:12px"><div style="font-size:14px;font-weight:600">{t['today']}</div>{''.join(card_s(c,i,rtl) for i,c in enumerate(t['c']))}</div>'''
    return inner if inner_only else frame(inner,'slate',dark,rtl,navtab=2)
BS={'en':dict(t='Before you start',sub='A few things to know before you join.',sess='Managing anxiety through mindful breathing',meta='Anxious Hearts · Today, 6:00 PM',
  rows=[('shield','Your facilitator runs the session. What’s shared in the circle stays in the circle.'),('norec','Recording this session isn’t allowed, for everyone’s privacy.'),('door','You can leave at any time. No one will ask why.')],
  agree='I agree to the',terms='circle guidelines',cancel='Not now',start='Join session'),
 'ar':dict(t='قبل ما تبدأ',sub='كام حاجة مهم تعرفها قبل ما تدخل.',sess='إدارة القلق بالتنفس الواعي',meta='قلوب قلقة · النهارده، 6:00 م',
  rows=[('shield','الميسر هو اللي بيدير الجلسة. واللي بيتقال في الدائرة بيفضل في الدائرة.'),('norec','تسجيل الجلسة مش مسموح، عشان خصوصية الكل.'),('door','تقدر تخرج في أي وقت، ومحدش هيسألك ليه.')],
  agree='موافق على',terms='قواعد الدائرة',cancel='مش دلوقتي',start='ادخل الجلسة')}
def before(lang='en',dark=False):
    t=BS[lang]; rtl=lang=='ar'
    base=mysessions(lang,dark,inner_only=True)
    rows=''.join(f'<div style="display:flex;gap:12px;align-items:flex-start;font-size:14px;line-height:1.5"><span style="width:34px;height:34px;border-radius:10px;background:var(--ps);color:var(--pi);display:flex;align-items:center;justify-content:center;flex-shrink:0">{i2(a,18)}</span><span style="padding-top:6px">{b}</span></div>' for a,b in t['rows'])
    sheet=f'''<div style="position:absolute;inset:0;background:rgba(10,18,22,.48)"></div>
<div style="position:absolute;inset-inline:0;bottom:0;background:var(--panel);border-radius:24px 24px 0 0;padding:10px 20px 28px;display:flex;flex-direction:column;gap:16px">
<div style="width:40px;height:4px;border-radius:2px;background:var(--line);align-self:center"></div>
<div style="display:flex;justify-content:space-between;align-items:flex-start"><div><div class="t" style="font-size:22px">{t['t']}</div><div class="m" style="font-size:14px;margin-top:4px">{t['sub']}</div></div><span class="ib" style="width:36px;height:36px;border-radius:50%">{i2('x',16)}</span></div>
<div style="padding:12px 14px;border-radius:12px;background:var(--sunk);display:flex;gap:12px;align-items:center">{circ_img(0,36)}<div><div style="font-size:14px;font-weight:600">{t['sess']}</div><div class="s" style="font-size:12px">{t['meta']}</div></div></div>
{rows}
<div style="display:flex;align-items:center;gap:10px;font-size:14px;padding-top:12px;border-top:1px solid var(--line)"><span style="width:22px;height:22px;border-radius:6px;background:var(--p);color:var(--onp);display:flex;align-items:center;justify-content:center">{i2('check',15)}</span>{t['agree']} <span style="color:var(--p);font-weight:600;text-decoration:underline;text-underline-offset:3px">{t['terms']}</span></div>
<div style="display:flex;gap:10px"><span class="btn" style="flex:1;height:50px">{t['cancel']}</span><span class="btn p" style="flex:1.4;height:50px">{t['start']}</span></div></div>'''
    return frame(base+sheet,'slate',dark,rtl,nav=False)
PSx={'en':dict(t='You’re in!',sub='Your seat is saved. We’ll remind you an hour before each session.',sess='Managing anxiety through mindful breathing',meta='6 sessions · Starts Sep 15, 6:00 PM',paid='Paid',amt='EGP 1,200',ref='Receipt sent to your email',a='See my sessions',b='Add to calendar'),
     'ar':dict(t='تم الحجز!',sub='مكانك محفوظ، وهنفكرك قبل كل جلسة بساعة.',sess='إدارة القلق بالتنفس الواعي',meta='6 جلسات · تبدأ 15 سبتمبر، 6:00 م',paid='المدفوع',amt='1,200 ج.م',ref='الإيصال اتبعت على إيميلك',a='شوف جلساتي',b='ضيف للتقويم')}
def success(lang='en',dark=False):
    t=PSx[lang]; rtl=lang=='ar'
    inner=f'''<div class="col" style="flex:1;padding:40px 24px 0;display:flex;flex-direction:column;align-items:center;gap:18px;text-align:center">
<svg width="120" height="120" viewBox="0 0 120 120"><circle cx="60" cy="60" r="60" fill="var(--ps)"/><circle cx="60" cy="60" r="38" fill="var(--p)"/><path d="M44 61 L55 72 L77 49" fill="none" stroke="var(--onp)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>
<div><div class="t" style="font-size:28px">{t['t']}</div><div class="m" style="font-size:15px;line-height:1.6;margin-top:8px;max-width:300px">{t['sub']}</div></div>
<div class="card" style="width:100%;padding:16px;display:flex;flex-direction:column;gap:12px;text-align:start">
<div style="display:flex;gap:12px;align-items:center">{circ_img(0,40)}<div><div style="font-size:15px;font-weight:600">{t['sess']}</div><div class="s" style="font-size:13px">{t['meta']}</div></div></div>
<div style="display:flex;justify-content:space-between;padding-top:12px;border-top:1px solid var(--line);font-size:14px"><span class="m">{t['paid']}</span><b>{t['amt']}</b></div>
<div class="s" style="font-size:12px;display:flex;align-items:center;gap:6px">{i2('check',14)}{t['ref']}</div></div>
</div>
<div style="padding:16px 24px 34px;display:flex;flex-direction:column;gap:10px"><span class="btn p" style="height:52px;font-size:16px">{t['a']}</span><span class="btn" style="height:52px;font-size:16px">{i2('cal',18)}{t['b']}</span></div>'''
    return frame(inner,'slate',dark,rtl,nav=False)
