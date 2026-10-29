from u2 import *
from avatars import P, circ_img
W={'en':dict(st='Waiting',h='You’re in the right place',sub='The session hasn’t started yet. Amany will let you in when it begins.',ring='Starts in',auto='This screen updates on its own.',
  det='Session details',rows=[('Facilitator','Amany Saleh'),('Circle','Anxious Hearts'),('Session','1 of 6 · Somatic breathing'),('Time','Today, 6:00–7:30 PM')],
  join='How you’ll join',mic='Mic off',cam='Camera off',note='You can turn them on anytime.',wait='8 participants waiting',leave='Leave'),
 'ar':dict(st='في الانتظار',h='إنت في المكان الصح',sub='الجلسة لسه مبدأتش. أماني هتدخلك أول ما تبدأ.',ring='تبدأ بعد',auto='الشاشة دي بتتحدث لوحدها.',
  det='تفاصيل الجلسة',rows=[('الميسر','أماني صالح'),('الدائرة','قلوب قلقة'),('الجلسة','1 من 6 · التنفس الجسدي'),('الوقت','النهارده، من 6:00 لـ 7:30 م')],
  join='هتدخل إزاي',mic='المايك مقفول',cam='الكاميرا مقفولة',note='تقدر تفتحهم في أي وقت.',wait='8 مشاركين مستنيين',leave='اخرج')}
def waiting(lang='en'):
    t=W[lang]; rtl=lang=='ar'
    rows=''.join(f'<div style="display:flex;justify-content:space-between;gap:12px;padding:10px 0;{"border-top:1px solid var(--line)" if i else ""};font-size:14px"><span class="s">{a}</span><span style="font-weight:600;text-align:end">{b}</span></div>' for i,(a,b) in enumerate(t['rows']))
    tog=lambda ic_,l:f'<div style="flex:1;display:flex;align-items:center;gap:8px;padding:10px 12px;border-radius:12px;background:var(--sunk);font-size:13px;font-weight:600">{i2(ic_,18)}{l}</div>'
    C=2*3.14159*84
    inner=f'''<div class="col" style="flex:1;padding:6px 20px 0;display:flex;flex-direction:column;gap:16px;align-items:stretch">
<span class="badge" style="align-self:flex-end;background:var(--ps);color:var(--pi)"><span style="width:7px;height:7px;border-radius:50%;background:var(--p)"></span>{t['st']}</span>
<div style="text-align:center"><div class="t" style="font-size:24px">{t['h']}</div><div class="m" style="font-size:14px;line-height:1.6;margin-top:6px">{t['sub']}</div></div>
<div style="display:flex;justify-content:center"><svg width="190" height="190" viewBox="0 0 190 190"><circle cx="95" cy="95" r="84" fill="none" stroke="var(--ps)" stroke-width="10"/><circle cx="95" cy="95" r="84" fill="none" stroke="var(--p)" stroke-width="10" stroke-linecap="round" stroke-dasharray="{C*0.62} {C}" transform="rotate(-90 95 95)"/>
<text x="95" y="76" text-anchor="middle" font-size="12" font-weight="600" fill="var(--subtle)" font-family="{'IBM Plex Sans Arabic' if rtl else 'Inter'}">{t['ring']}</text><text x="95" y="114" text-anchor="middle" font-size="42" font-weight="700" fill="var(--ink)" font-family="Inter">14:32</text></svg></div>
<div class="s" style="text-align:center;font-size:12px;margin-top:-8px">{t['auto']}</div>
<div class="card" style="padding:4px 16px">{rows}</div>
<div><div style="font-size:13px;font-weight:700;margin-bottom:8px">{t['join']}</div><div style="display:flex;gap:8px">{tog('mic-off',t['mic'])}{tog('cam-off',t['cam'])}</div><div class="s" style="font-size:12px;margin-top:6px">{t['note']}</div></div>
<div style="display:flex;align-items:center;justify-content:space-between"><div style="display:flex;align-items:center;gap:8px;font-size:14px;font-weight:600"><div style="display:flex">{''.join(f'<span style="margin-inline-start:{-8 if j else 0}px;border:2px solid var(--bg);border-radius:50%;display:flex">{P(n,26)}</span>' for j,n in enumerate(['salma','karim','lina']))}</div>{t['wait']}</div>
<span class="btn" style="height:40px;color:var(--live);border-color:var(--live)">{t['leave']}</span></div>
</div>'''
    return frame(inner,'slate',True,rtl,nav=False)
S={'en':dict(title='Managing anxiety through mindful breathing',time='24:37',n='8 participants',fac='Facilitator',fn='Amany Saleh',parts='Participants',hand='Sarah raised a hand',
  ppl=[('salma','Sarah J.',True,False),('karim','Karim A.',False,False),('lina','Lina H.',False,True),('rami','Rami K.',False,False),('dina','Dina N.',False,False),('mona','You',False,False)],
  ctr=['Mic','Camera','Raise hand','Participants','Leave']),
 'ar':dict(title='إدارة القلق بالتنفس الواعي',time='24:37',n='8 مشاركين',fac='الميسر',fn='أماني صالح',parts='المشاركين',hand='سارة رفعت إيدها',
  ppl=[('salma','سارة',True,False),('karim','كريم',False,False),('lina','لينا',False,True),('rami','رامي',False,False),('dina','دينا',False,False),('mona','إنت',False,False)],
  ctr=['المايك','الكاميرا','ارفع إيدك','المشاركين','اخرج'])}
def insession(lang='en'):
    t=S[lang]; rtl=lang=='ar'
    def tile(w,name,hand,talk):
        ring='box-shadow:inset 0 0 0 2px var(--one)' if hand else ('box-shadow:inset 0 0 0 2px var(--on)' if talk else '')
        return f'<div style="background:var(--panel);border-radius:14px;height:112px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;position:relative;{ring}">{P(w,46)}<div style="font-size:13px;font-weight:600;display:flex;align-items:center;gap:4px">{name}<span style="color:{"var(--on)" if talk else "var(--subtle)"};display:flex">{i2("mic" if talk else "mic-off",14)}</span></div>{f"<span style=position:absolute;top:8px;inset-inline-end:8px;width:26px;height:26px;border-radius:8px;background:var(--one-bg);color:var(--one);display:flex;align-items:center;justify-content:center>{i2(chr(104)+chr(97)+chr(110)+chr(100),15)}</span>" if hand else ""}</div>'
    grid=''.join(tile(*p) for p in t['ppl'])
    ics=['mic-off','cam-off','hand','users','leave']
    ctr=''.join(f'<div style="display:flex;flex-direction:column;align-items:center;gap:6px;font-size:11px;font-weight:600;color:{"var(--live)" if i==4 else "var(--muted)"}"><span style="width:48px;height:48px;border-radius:50%;background:{"var(--live-bg)" if i==4 else "var(--panel)"};display:flex;align-items:center;justify-content:center;{"color:var(--live)" if i==4 else "color:var(--ink)"}">{i2(ics[i],22)}</span>{l}</div>' for i,l in enumerate(t['ctr']))
    inner=f'''<div style="padding:4px 18px 12px;display:flex;justify-content:space-between;align-items:flex-start;gap:10px;border-bottom:1px solid var(--line)"><div style="min-width:0"><div style="font-size:15px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">{t['title']}</div><div style="font-size:13px;color:var(--on);font-weight:600;margin-top:2px" dir="ltr">● {t['time']}</div></div><span class="badge live" style="flex-shrink:0">{'LIVE' if not rtl else 'مباشر'}</span></div>
<div class="col" style="flex:1;padding:12px 14px 0;display:flex;flex-direction:column;gap:10px">
<div style="background:var(--panel);border-radius:16px;height:200px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;position:relative;box-shadow:inset 0 0 0 2px var(--on)">{P('amany',76)}<div style="font-size:15px;font-weight:700">{t['fn']}</div><span class="badge" style="position:absolute;top:10px;inset-inline-start:10px;background:var(--ps);color:var(--pi)">{t['fac']}</span></div>
<div style="display:flex;justify-content:space-between;font-size:12px;font-weight:600"><span class="s">{t['n']}</span><span style="color:var(--one);display:flex;gap:4px;align-items:center">{i2('hand',13)}{t['hand']}</span></div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">{grid}</div></div>
<div style="padding:14px 10px 30px;display:flex;justify-content:space-around;border-top:1px solid var(--line);background:var(--sunk)">{ctr}</div>'''
    return frame(inner,'slate',True,rtl,nav=False)
LV={'en':dict(t='Leave the session?',s='You can come back while it’s still running. No one will be told why you left.',a='Stay',b='Leave session'),
    'ar':dict(t='تخرج من الجلسة؟',s='تقدر ترجع طول ما هي شغالة. ومحدش هيتقاله إنت خرجت ليه.',a='خليني',b='اخرج من الجلسة')}
def leave(lang='en'):
    t=LV[lang]; rtl=lang=='ar'
    base=insession(lang)
    sheet=f'''<div style="position:absolute;inset:0;background:rgba(0,0,0,.55)"></div><div style="position:absolute;inset-inline:16px;bottom:30px;background:var(--panel);border-radius:22px;padding:22px;display:flex;flex-direction:column;gap:14px;text-align:center">
<span style="align-self:center;width:52px;height:52px;border-radius:50%;background:var(--live-bg);color:var(--live);display:flex;align-items:center;justify-content:center">{i2('leave',24)}</span><div class="t" style="font-size:21px">{t['t']}</div><div class="m" style="font-size:14px;line-height:1.6">{t['s']}</div>
<div style="display:flex;gap:10px"><span class="btn" style="flex:1;height:48px">{t['a']}</span><span class="btn" style="flex:1;height:48px;background:var(--live);border-color:var(--live);color:#120808">{t['b']}</span></div></div>'''
    return base.replace('</div></div>',sheet+'</div></div>',1) if False else base[:base.rindex('</div>')]+sheet+'</div>'
AF={'en':dict(h='Thank you for being here',s='Take a breath before you go back to your evening.',q='How do you feel now?',f=['Lighter','Same','Heavier','Not sure'],r='Rate this session',note='A note for Amany (only she sees it)',ph='What helped today?',need='Need to talk to someone now?',needl='See support options',done='Done'),
    'ar':dict(h='شكرا إنك كنت معانا',s='خد نفس قبل ما ترجع لباقي يومك.',q='حاسس بإيه دلوقتي؟',f=['أخف','زي ما أنا','أتقل','مش متأكد'],r='قيم الجلسة',note='ملاحظة لأماني (هي بس اللي هتشوفها)',ph='إيه اللي ساعدك النهارده؟',need='محتاج تتكلم مع حد دلوقتي؟',needl='شوف طرق الدعم',done='تم')}
def after(lang='en',dark=False):
    t=AF[lang]; rtl=lang=='ar'
    feel=''.join(f'<div style="flex:1;padding:12px 4px;border-radius:12px;text-align:center;font-size:13px;font-weight:600;{"background:var(--ps);color:var(--pi);box-shadow:inset 0 0 0 1.5px var(--p)" if i==0 else "background:var(--panel);border:1px solid var(--line)"}">{x}</div>' for i,x in enumerate(t['f']))
    stars=''.join(f'<svg viewBox="0 0 24 24" style="width:34px;height:34px;fill:{"var(--star)" if i<4 else "none"};stroke:{"var(--star)" if i<4 else "var(--subtle)"};stroke-width:1.5">{IC2["star"]}</svg>' for i in range(5))
    inner=f'''<div class="col" style="flex:1;padding:24px 20px 0;display:flex;flex-direction:column;gap:18px">
<div style="display:flex;justify-content:center">{circ_img(0,72)}</div>
<div style="text-align:center"><div class="t" style="font-size:24px">{t['h']}</div><div class="m" style="font-size:14px;margin-top:6px">{t['s']}</div></div>
<div><div style="font-size:15px;font-weight:700;margin-bottom:10px">{t['q']}</div><div style="display:flex;gap:8px">{feel}</div></div>
<div><div style="font-size:15px;font-weight:700;margin-bottom:8px">{t['r']}</div><div style="display:flex;gap:6px">{stars}</div></div>
<div><div style="font-size:14px;font-weight:600;margin-bottom:8px">{t['note']}</div><div style="height:72px;border:1.5px solid var(--line);border-radius:12px;padding:12px;font-size:14px" class="s">{t['ph']}</div></div>
<div style="padding:12px 14px;border-radius:12px;background:var(--sunk);display:flex;justify-content:space-between;align-items:center;gap:10px;font-size:13px"><span class="m">{t['need']}</span><span style="color:var(--p);font-weight:700;text-decoration:underline;text-underline-offset:3px;white-space:nowrap">{t['needl']}</span></div>
</div><div style="padding:14px 20px 34px"><span class="btn p" style="width:100%;height:52px;font-size:16px">{t['done']}</span></div>'''
    return frame(inner,'slate',dark,rtl,nav=False)
