from u2 import *
from avatars import P, circ_img
IC2.update({'wallet':'<path d="M4 7 H18 A2 2 0 0 1 20 9 V18 A2 2 0 0 1 18 20 H6 A2 2 0 0 1 4 18 Z"/><path d="M4 7 L15 4 V7"/><circle cx="16" cy="13.5" r="1.2"/>',
'bank':'<path d="M3 9 L12 4 L21 9 Z M5 10 V17 M9.5 10 V17 M14.5 10 V17 M19 10 V17 M3 20 H21"/>','in':'<path d="M17 7 L7 17 M7 9 V17 H15"/>','out':'<path d="M7 17 L17 7 M9 7 H17 V15"/>',
'edit':'<path d="M4 20 H8 L19 9 L15 5 L4 16 Z M13 7 L17 11"/>','more':'<circle cx="12" cy="12" r="9"/><circle cx="8" cy="12" r=".9"/><circle cx="12" cy="12" r=".9"/><circle cx="16" cy="12" r=".9"/>',
'alert':'<circle cx="12" cy="12" r="9"/><path d="M12 7.5 V13 M12 16.3 V16.5"/>','sliders':'<path d="M4 7 H14 M18 7 H20 M4 17 H6 M10 17 H20"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>'})
def pframe(inner,dark,rtl,tab):
    lab=['الرئيسية','التقويم','المحفظة','المزيد'] if rtl else ['Home','Calendar','Wallet','More']
    ics=['home','cal','wallet','more']
    items=''.join(f'<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;font-size:11px;font-weight:600;color:{"var(--p)" if i==tab else "var(--subtle)"}">{i2(ics[i],22)}{lab[i]}</div>' for i in range(4))
    nav=f'<div style="height:82px;flex-shrink:0;border-top:1px solid var(--line);background:var(--panel);display:flex;padding:10px 6px 0">{items}</div>'
    return frame(inner,'slate',dark,rtl,nav=False).rsplit('</div>',1)[0]+nav+'</div>'
def head(title,rtl,right=''):
    return f'<div style="padding:4px 18px 12px;display:flex;align-items:center;gap:10px;background:var(--panel);border-bottom:1px solid var(--line)"><div class="t" style="flex:1;font-size:22px">{title}</div>{right}</div>'
def bell(): return f'<span class="ib">{i2("bell",20)}<span style="position:absolute;top:6px;inset-inline-end:7px;width:8px;height:8px;border-radius:50%;background:var(--live);border:2px solid var(--panel)"></span></span>'
def back(title,rtl):
    chev=i2('chev',20,'transform:scaleX(-1)' if not rtl else '')
    return f'<div style="padding:4px 16px 10px;display:flex;align-items:center;gap:8px;border-bottom:1px solid var(--line);background:var(--panel)"><span class="ib" style="border:0;width:40px">{chev}</span><div class="t" style="flex:1;text-align:center;font-size:19px">{title}</div><span style="width:40px"></span></div>'

# ---------- 1. Calendar ----------
CA={'en':dict(t='Calendar',tabs=['Day','Week','Month'],m='July 2026',today='Today',f='Filters',wd=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
  day='Wednesday, July 15',n='2 sessions',legend=[('ws','Workshop'),('on','Ongoing'),('one','One-time')],
  s=[('ws','Workshop','2:00–3:00 PM','Calm the storm','Anxious Hearts · Session 3 of 6','18 / 25'),('on','Ongoing','8:00–9:00 PM','Stress and the body','Grief Together · Weekly','9 / 12')]),
 'ar':dict(t='التقويم',tabs=['يوم','أسبوع','شهر'],m='يوليو 2026',today='النهارده',f='فلتر',wd=['الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'],
  day='الأربعاء 15 يوليو',n='جلستين',legend=[('ws','ورشة'),('on','أسبوعية'),('one','مرة واحدة')],
  s=[('ws','ورشة','من 2:00 لـ 3:00 م','هدوء بعد العاصفة','قلوب قلقة · الجلسة 3 من 6','18 / 25'),('on','أسبوعية','من 8:00 لـ 9:00 م','الضغط والجسم','نحزن معا · كل أسبوع','9 / 12')])}
DOTS={1:['ws'],6:['on'],9:['one'],13:['ws','on'],15:['ws','on'],20:['on'],22:['one'],28:['ws'],29:['on']}
def calendar(lang='en',dark=False):
    t=CA[lang]; rtl=lang=='ar'
    seg=''.join(f'<span style="flex:1;text-align:center;padding:7px 0;border-radius:9px;font-size:13px;font-weight:600;{"background:var(--panel);color:var(--ink);box-shadow:0 1px 2px rgba(0,0,0,.08)" if i==2 else "color:var(--muted)"}">{x}</span>' for i,x in enumerate(t['tabs']))
    cells=''
    days=[28,29,30]+list(range(1,32))+[1]
    for k,d in enumerate(days):
        out=k<3 or k>33
        sel=(d==15 and not out); tod=(d==1 and not out)
        dots=''.join(f'<span style="width:5px;height:5px;border-radius:50%;background:var(--{c})"></span>' for c in (DOTS.get(d,[]) if not out else []))
        num=f'<span style="width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:Inter;{"background:var(--p);color:var(--onp);font-weight:700" if sel else ("box-shadow:inset 0 0 0 1.5px var(--p);color:var(--p);font-weight:700" if tod else "")}">{d}</span>'
        cells+=f'<div style="height:44px;display:flex;flex-direction:column;align-items:center;gap:2px;padding-top:3px;{"color:var(--subtle);opacity:.6" if out else ""};font-size:14px">{num}<span style="display:flex;gap:3px;height:5px">{dots}</span></div>'
    wd=''.join(f'<div class="s" style="text-align:center;font-size:{11 if rtl else 12}px;font-weight:600;white-space:nowrap">{x}</div>' for x in t['wd'])
    leg=''.join(f'<span class="s" style="display:flex;align-items:center;gap:5px;font-size:12px"><span style="width:8px;height:8px;border-radius:50%;background:var(--{c})"></span>{l}</span>' for c,l in t['legend'])
    chevL=i2('chev',18,'transform:scaleX(-1)' if not rtl else ''); chevR=i2('chev',18,'transform:scaleX(-1)' if rtl else '')
    ses=''.join(f'''<div class="card" style="padding:12px 14px;display:flex;align-items:center;gap:12px;border-inline-start:4px solid var(--{c})"><div style="flex:1;min-width:0"><div style="display:flex;align-items:center;gap:8px"><span style="font-size:13px;font-weight:700;color:var(--{c})">{tm}</span></div><div style="font-size:15px;font-weight:700;margin-top:3px">{nm}</div><div class="s" style="font-size:12px;margin-top:2px">{sub}</div></div><div class="m" style="display:flex;align-items:center;gap:5px;flex-shrink:0">{i2('users',16)}<span style="font-size:13px;font-weight:700;font-family:Inter;color:var(--ink)" dir="ltr">{seat}</span></div></div>''' for c,bl,tm,nm,sub,seat in t['s'])
    inner=f'''{head(t['t'],rtl,bell())}
<div class="col" style="flex:1;overflow:hidden;padding:12px 16px 0;display:flex;flex-direction:column;gap:10px">
<div style="display:flex;align-items:center;justify-content:space-between"><div style="display:flex;align-items:center;gap:6px"><span class="ib" style="width:34px;height:34px;border:0;background:none">{chevL}</span><span style="font-size:17px;font-weight:700">{t['m']}</span><span class="ib" style="width:34px;height:34px;border:0;background:none">{chevR}</span></div><span class="btn" style="height:34px;padding:0 14px;font-size:13px;color:var(--p)">{t['today']}</span></div>
<div style="display:flex;gap:10px"><div style="flex:1;display:flex;padding:3px;border-radius:12px;background:var(--sunk)">{seg}</div><span class="btn" style="height:40px;padding:0 12px;font-size:13px;gap:6px">{i2('sliders',17)}{t['f']}</span></div>
<div class="card" style="padding:8px 6px 4px"><div style="display:grid;grid-template-columns:repeat(7,1fr);padding:4px 0 6px">{wd}</div><div style="display:grid;grid-template-columns:repeat(7,1fr)">{cells}</div></div>
<div style="display:flex;gap:14px;justify-content:center">{leg}</div>
<div style="display:flex;justify-content:space-between;align-items:baseline;margin-top:2px"><div style="font-size:15px;font-weight:700">{t['day']}</div><div class="s" style="font-size:12px">{t['n']}</div></div>
{ses}</div>'''
    return pframe(inner,dark,rtl,1)

# ---------- 2. Manage a workshop ----------
MG={'en':dict(t='Manage workshop',badge='Workshop',act='Active',name='Trauma recovery workshop',circ='Anxious Hearts',edit='Edit',
  rows=[('Sessions','8 · weekly'),('Audience','Adults 18+'),('Price','EGP 1,200 package · EGP 180 single')],
  en='Enrollment',stats=[('18','Enrolled'),('12','Full package'),('6','Single session')],wk=['Apr 14','Apr 21','Apr 28','May 5','May 12','May 19'],lg=['Full package','Single session'],
  sch='Schedule and earnings',schs='Sessions, status and payouts',note='Open the room on time. If you can’t make it, tell participants at least 24 hours ahead.'),
 'ar':dict(t='إدارة الورشة',badge='ورشة',act='شغالة',name='ورشة التعافي من الصدمة',circ='قلوب قلقة',edit='تعديل',
  rows=[('الجلسات','8 · كل أسبوع'),('لمين','للكبار +18'),('السعر','1,200 ج.م للباقة · 180 ج.م للجلسة')],
  en='التسجيل',stats=[('18','مسجلين'),('12','الباقة كاملة'),('6','جلسة واحدة')],wk=['14 أبريل','21 أبريل','28 أبريل','5 مايو','12 مايو','19 مايو'],lg=['الباقة كاملة','جلسة واحدة'],
  sch='المواعيد والأرباح',schs='الجلسات والحالة والتحويلات',note='افتح الغرفة في ميعادها. ولو مش هتقدر، بلغ المشاركين قبلها بيوم على الأقل.')}
def manage(lang='en',dark=False):
    t=MG[lang]; rtl=lang=='ar'
    rows=''.join(f'<div style="display:flex;justify-content:space-between;gap:12px;padding:9px 0;border-top:1px solid var(--line);font-size:13px"><span class="s" style="flex-shrink:0">{a}</span><span style="font-weight:600;text-align:end">{b}</span></div>' for a,b in t['rows'])
    st=''.join(f'<div style="flex:1;padding:9px 10px;border-radius:12px;background:{["var(--sunk)","var(--ps)","var(--ws-bg)"][i]}"><div style="font-size:22px;font-weight:700;font-family:Inter;color:{["var(--ink)","var(--pi)","var(--ws)"][i]}">{a}</div><div class="m" style="font-size:12px">{b}</div></div>' for i,(a,b) in enumerate(t['stats']))
    data=[(12,4),(12,6),(12,3),(12,5),(9,2),(9,1)]
    W_,H_=320,80; bw=30; gap=(W_-6*bw)/6
    bars=''
    for i,(f,s) in enumerate(data):
        x=gap/2+i*(bw+gap); xi=(W_-x-bw) if rtl else x
        hf=f*3.6; hs=s*3.6
        bars+=f'<rect x="{xi}" y="{H_-hf}" width="{bw}" height="{hf}" rx="3" fill="var(--p)"/><rect x="{xi}" y="{H_-hf-hs-2}" width="{bw}" height="{hs}" rx="3" fill="var(--ws)"/>'
    grid=''.join(f'<line x1="0" x2="{W_}" y1="{H_-v*3.6}" y2="{H_-v*3.6}" stroke="var(--line)"/>' for v in (0,10,20))
    xl=''.join(f'<span class="s" style="flex:1;text-align:center;font-size:10.5px">{w}</span>' for w in t['wk'])
    lg=''.join(f'<span class="s" style="display:flex;align-items:center;gap:5px;font-size:12px"><span style="width:10px;height:10px;border-radius:3px;background:var(--{c})"></span>{l}</span>' for c,l in zip(['p','ws'],t['lg']))
    chev=i2('chev',18,'transform:scaleX(-1)' if rtl else '')
    inner=f'''{back(t['t'],rtl)}
<div class="col" style="flex:1;overflow:hidden;padding:12px 16px 0;display:flex;flex-direction:column;gap:10px">
<div class="card" style="padding:14px 16px 6px"><div style="display:flex;align-items:center;gap:8px"><span class="badge ws">{t['badge']}</span><span class="badge on">{t['act']}</span><span style="flex:1"></span><span style="display:flex;gap:5px;align-items:center;font-size:13px;font-weight:600;color:var(--p)">{i2('edit',16)}{t['edit']}</span></div>
<div class="t" style="font-size:19px;margin-top:10px">{t['name']}</div><div style="display:flex;align-items:center;gap:7px;font-size:13px;font-weight:600;color:var(--p);margin:4px 0 8px">{circ_img(0,20)}{t['circ']}</div>{rows}</div>
<div class="card" style="padding:14px 16px"><div style="font-size:15px;font-weight:700;margin-bottom:10px">{t['en']}</div><div style="display:flex;gap:8px">{st}</div>
<svg width="{W_}" height="{H_+2}" viewBox="0 -2 {W_} {H_+2}" style="display:block;margin-top:12px">{grid}{bars}</svg><div style="display:flex;margin-top:4px" dir="ltr">{''.join(reversed(xl.split('</span>')[:-1])) and xl if not rtl else ''.join(x+'</span>' for x in reversed(xl.split('</span>')[:-1]))}</div>
<div style="display:flex;gap:14px;margin-top:8px">{lg}</div></div>
<div class="card" style="padding:12px 14px;display:flex;align-items:center;gap:12px"><span style="width:40px;height:40px;border-radius:12px;background:var(--ps);color:var(--pi);display:flex;align-items:center;justify-content:center">{i2('cal',20)}</span><div style="flex:1"><div style="font-size:14px;font-weight:700">{t['sch']}</div><div class="s" style="font-size:12px">{t['schs']}</div></div><span class="s">{chev}</span></div>
<div style="padding:12px 14px;border-radius:12px;background:var(--one-bg);color:var(--one);display:flex;gap:10px;font-size:13px;line-height:1.55;font-weight:500">{i2('info',18,'flex-shrink:0;margin-top:1px')}<span style="color:var(--ink)">{t['note']}</span></div>
</div>'''
    return pframe(inner,dark,rtl,1)

# ---------- 3. Wallet ----------
WL={'en':dict(t='Wallet',av='Available balance',cur='EGP',amt='2,480.00',clr='Cleared and ready to withdraw',req='Request payout',exp='On the way',expa='EGP 1,150.00',exps='Unlocks after the sessions take place',
  bank='Bank account',bks='•••• 1234 · Default',hist='Recent activity',all='See all',
  tx=[('in','Managing anxiety · Workshop','Oct 15 · 3:30 PM','+240.00','ok','Paid'),('out','Payout to bank','Oct 12 · 9:10 AM','−245.00','ok','Sent'),('out','Payout to bank','Oct 10 · 2:30 PM','−500.00','err','Failed'),('in','Evening calm · One-time','Oct 8 · 8:00 PM','+150.00','ok','Paid')],
  errm='Bank details didn’t match. Update your account and try again.',fix='Update'),
 'ar':dict(t='المحفظة',av='الرصيد المتاح',cur='ج.م',amt='2,480.00',clr='جاهز للسحب',req='اطلب تحويل',exp='في الطريق',expa='1,150.00 ج.م',exps='متاح بعد ما الجلسات تتم',
  bank='الحساب البنكي',bks='•••• 1234 · الأساسي',hist='آخر الحركات',all='عرض الكل',
  tx=[('in','إدارة القلق · ورشة','15 أكتوبر · 3:30 م','+240.00','ok','اتدفع'),('out','تحويل للبنك','12 أكتوبر · 9:10 ص','−245.00','ok','اتبعت'),('out','تحويل للبنك','10 أكتوبر · 2:30 م','−500.00','err','فشل'),('in','هدوء المساء · مرة واحدة','8 أكتوبر · 8:00 م','+150.00','ok','اتدفع')],
  errm='بيانات البنك مش مطابقة. حدث حسابك وجرب تاني.',fix='تحديث')}
def wallet(lang='en',dark=False):
    t=WL[lang]; rtl=lang=='ar'
    chev=i2('chev',18,'transform:scaleX(-1)' if rtl else '')
    def tx(d,nm,tm,a,s,sl):
        err=s=='err'
        ic=f'<span style="width:38px;height:38px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:{"var(--live-bg)" if err else ("var(--on-bg)" if d=="in" else "var(--sunk)")};color:{"var(--live)" if err else ("var(--on)" if d=="in" else "var(--muted)")}">{i2(d,18)}</span>'
        badge=f'<span class="badge {"live" if err else ""}" style="height:20px;font-size:11px;padding:0 7px;{"" if err else "background:var(--sunk);color:var(--muted)"}">{i2("alert",12) if err else ""}{sl}</span>'
        e=f'<div style="margin-top:10px;padding:9px 12px;border-radius:10px;background:var(--live-bg);display:flex;gap:10px;align-items:center;font-size:12px;line-height:1.5"><span style="flex:1;color:var(--ink)">{t["errm"]}</span><span style="font-weight:700;color:var(--live);text-decoration:underline;text-underline-offset:3px">{t["fix"]}</span></div>' if err else ''
        return f'<div style="padding:11px 0;border-top:1px solid var(--line)"><div style="display:flex;align-items:center;gap:12px">{ic}<div style="flex:1;min-width:0"><div style="font-size:14px;font-weight:600">{nm}</div><div class="s" style="font-size:12px;margin-top:2px">{tm}</div></div><div style="text-align:end;display:flex;flex-direction:column;align-items:flex-end;gap:4px"><span dir="ltr" style="font-size:14px;font-weight:700;font-family:Inter;color:{"var(--on)" if d=="in" else "var(--ink)"}">{a}</span>{badge}</div></div>{e}</div>'
    txs=''.join(tx(*x) for x in t['tx'])
    inner=f'''{head(t['t'],rtl,bell())}
<div class="col" style="flex:1;overflow:hidden;padding:12px 16px 0;display:flex;flex-direction:column;gap:10px">
<div style="border-radius:20px;padding:18px;background:var(--p);color:var(--onp);position:relative;overflow:hidden">
<svg width="170" height="170" viewBox="0 0 170 170" style="position:absolute;top:-50px;inset-inline-end:-40px;opacity:.16"><circle cx="85" cy="85" r="84" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="85" cy="85" r="60" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="85" cy="85" r="36" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
<div style="font-size:13px;opacity:.85;display:flex;gap:6px;align-items:center">{i2('wallet',16)}{t['av']}</div>
<div style="display:flex;align-items:baseline;gap:8px;margin-top:6px"><span style="font-size:14px;font-weight:600;opacity:.85">{t['cur']}</span><span style="font-size:32px;font-weight:700;font-family:Inter" dir="ltr">{t['amt']}</span></div>
<div style="font-size:12px;opacity:.8">{t['clr']}</div>
<div style="margin-top:14px;height:46px;border-radius:12px;background:var(--onp);color:var(--p);display:flex;align-items:center;justify-content:center;gap:8px;font-size:15px;font-weight:700">{t['req']}{i2('arrow',18,'transform:scaleX(-1)' if rtl else '')}</div></div>
<div style="display:flex;gap:10px">
<div class="card" style="flex:1;padding:12px 14px"><div style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:600;color:var(--one)">{i2('clock',14)}{t['exp']}</div><div style="font-size:17px;font-weight:700;margin-top:4px" dir="{'rtl' if rtl else 'ltr'}">{t['expa']}</div><div class="s" style="font-size:11px;margin-top:2px;line-height:1.4">{t['exps']}</div></div>
<div class="card" style="flex:1;padding:12px 14px;display:flex;flex-direction:column;justify-content:space-between"><div style="display:flex;align-items:center;justify-content:space-between"><span style="width:32px;height:32px;border-radius:10px;background:var(--sunk);display:flex;align-items:center;justify-content:center">{i2('bank',18)}</span><span class="s">{chev}</span></div><div><div style="font-size:14px;font-weight:700;margin-top:6px">{t['bank']}</div><div class="s" style="font-size:12px" dir="{'rtl' if rtl else 'ltr'}">{t['bks']}</div></div></div></div>
<div><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2px"><div style="font-size:15px;font-weight:700">{t['hist']}</div><span style="font-size:13px;font-weight:600;color:var(--p)">{t['all']}</span></div>{txs}</div>
</div>'''
    return pframe(inner,dark,rtl,2)

# ---------- 4. Request payout ----------
RQ={'en':dict(t='Request payout',amt='Amount',val='2,000',cur='EGP',hint='Available: EGP 2,480.00',all='Withdraw all',to='Send to',bank='Bank account',bks='•••• 1234 · Default',ch='Change',
  rows=[('Amount','EGP 2,000.00'),('Processing fee (1%)','−EGP 20.00')],tot='You’ll receive',tota='EGP 1,980.00',eta='Usually arrives in 1–3 business days.',btn='Confirm payout',sec='You’ll confirm with your PIN.'),
 'ar':dict(t='اطلب تحويل',amt='المبلغ',val='2,000',cur='ج.م',hint='المتاح: 2,480.00 ج.م',all='اسحب الكل',to='هيتحول على',bank='الحساب البنكي',bks='•••• 1234 · الأساسي',ch='تغيير',
  rows=[('المبلغ','2,000.00 ج.م'),('رسوم التحويل (<bdi dir=ltr>1%</bdi>)','<bdi dir=ltr>−20.00</bdi> ج.م')],tot='هيوصلك',tota='1,980.00 ج.م',eta='عادة بيوصل خلال 1 لـ 3 أيام عمل.',btn='تأكيد التحويل',sec='هتأكد بالرقم السري بتاعك.')}
def payout(lang='en',dark=False):
    t=RQ[lang]; rtl=lang=='ar'
    rows=''.join(f'<div style="display:flex;justify-content:space-between;padding:8px 0;font-size:14px"><span class="m">{a}</span><span style="font-weight:600" dir="{"rtl" if rtl else "ltr"}">{b}</span></div>' for a,b in t['rows'])
    inner=f'''{back(t['t'],rtl)}
<div class="col" style="flex:1;overflow:hidden;padding:18px 16px 0;display:flex;flex-direction:column;gap:14px">
<div class="card" style="padding:16px"><div style="font-size:14px;font-weight:600;margin-bottom:8px">{t['amt']}</div>
<div style="height:60px;border-radius:12px;border:2px solid var(--p);display:flex;align-items:center;gap:10px;padding:0 16px;background:var(--panel)"><span class="s" style="font-size:16px;font-weight:600">{t['cur']}</span><span style="flex:1;font-size:26px;font-weight:700;font-family:Inter" dir="ltr" >{t['val']}<span style="display:inline-block;width:2px;height:26px;background:var(--p);vertical-align:middle;margin-inline-start:2px"></span></span></div>
<div style="display:flex;justify-content:space-between;margin-top:8px;font-size:12px"><span class="s">{t['hint']}</span><span style="font-weight:700;color:var(--p)">{t['all']}</span></div></div>
<div class="card" style="padding:16px"><div style="font-size:14px;font-weight:600;margin-bottom:10px">{t['to']}</div><div style="display:flex;align-items:center;gap:12px;padding:12px;border-radius:12px;background:var(--sunk)"><span style="width:40px;height:40px;border-radius:50%;background:var(--panel);display:flex;align-items:center;justify-content:center">{i2('bank',20)}</span><div style="flex:1"><div style="font-size:14px;font-weight:700">{t['bank']}</div><div class="s" style="font-size:12px">{t['bks']}</div></div><span style="font-size:13px;font-weight:700;color:var(--p)">{t['ch']}</span></div></div>
<div class="card" style="padding:10px 16px">{rows}<div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0 8px;border-top:1px solid var(--line);margin-top:4px"><span style="font-size:15px;font-weight:700">{t['tot']}</span><span style="font-size:20px;font-weight:700;color:var(--p)" dir="{'rtl' if rtl else 'ltr'}">{t['tota']}</span></div></div>
<div class="s" style="display:flex;gap:8px;align-items:center;font-size:13px">{i2('clock',16)}{t['eta']}</div>
</div>
<div style="padding:12px 16px 30px"><span class="btn p" style="width:100%;height:52px;font-size:16px">{t['btn']}</span><div class="s" style="text-align:center;font-size:12px;margin-top:8px;display:flex;gap:6px;justify-content:center;align-items:center">{i2('lock',14)}{t['sec']}</div></div>'''
    return frame(inner,'slate',dark,rtl,nav=False)
