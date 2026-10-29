from u2 import *
from avatars import P, circ_img
TX={'en':dict(title='Explore',tabs=['Circles','Sessions','Facilitators'],q='anxiety',filters='Filters',sort='Free first',act=['Anxiety','Arabic'],found='12 circles found',
  c=[('Anxious Hearts','A weekly circle for adults living with worry, panic and the quiet weight of everyday stress.',['Anxiety','Wellness','Weekly'],'4.7','24','85','Amany Saleh','4.8','94 reviews','AS','#C77D5A',False),
     ('Grief Together','A circle for adults carrying loss, of a person, a relationship or a chapter of life.',['Grief','Healing','Loss'],'4.7','8','62','Omar Khaled','4.8','31 reviews','OK','#5A7FA8',True)],
  rating='Circle rating',sess='Sessions',mem='Members',by='Facilitated by',follow='Follow',following='Following',view='View',crating='circle rating'),
 'ar':dict(title='استكشف',tabs=['الدوائر','الجلسات','الميسرون'],q='قلق',filters='الفلاتر',sort='المجاني أولا',act=['القلق','العربية'],found='12 دائرة',
  c=[('قلوب قلقة','دائرة أسبوعية للكبار اللي عايشين مع القلق ونوبات الهلع وتقل الضغط اليومي.',['القلق','العافية','أسبوعي'],'4.7','24','85','أماني صالح','4.8','94 تقييم','أص','#C77D5A',False),
     ('نحزن معا','دائرة للكبار اللي شايلين فقد، سواء شخص أو علاقة أو مرحلة من حياتهم.',['الحزن','التعافي','الفقد'],'4.7','8','62','عمر خالد','4.8','31 تقييم','عخ','#5A7FA8',True)],
  rating='تقييم الدائرة',sess='جلسات',mem='أعضاء',by='الميسر',follow='متابعة',following='بتتابعها',view='عرض',crating='تقييم الدائرة')}
def explore(lang='en',pal='slate',dark=False):
    t=TX[lang]; rtl=lang=='ar'
    tabs=''.join(f'<div style="flex:1;text-align:center;padding:13px 0;font-size:15px;font-weight:600;{"color:var(--p);box-shadow:inset 0 -2px 0 var(--p)" if i==0 else "color:var(--subtle)"}">{x}</div>' for i,x in enumerate(t['tabs']))
    def card(c,idx):
        n,d,tags,r,se,me,f,fr,frev,ini,col,fol=c
        who='amany' if idx==0 else 'omar'
        meta=(f'{me} members' if not rtl else f'{me} عضو')
        fol_btn=f'<span class="ib" style="width:38px;height:38px;border-radius:50%;{"background:var(--ps);color:var(--pi);border-color:transparent" if fol else ""}" aria-label="follow">{i2("check" if fol else "plus",18)}</span>'
        return f'''<div class="card" style="padding:16px;display:flex;flex-direction:column;gap:12px">
<div style="display:flex;gap:12px;align-items:center">{circ_img(idx*2,48)}<div style="flex:1;min-width:0"><div class="t" style="font-size:18px;line-height:1.3">{n}</div><div class="s" style="font-size:13px;display:flex;align-items:center;gap:5px;margin-top:3px;white-space:nowrap">{star(13)}<b style="color:var(--ink);font-weight:600">{r}</b> · {meta}</div></div>{fol_btn}</div>
<div class="m" style="font-size:14px;line-height:1.55">{d}</div>
<div style="display:flex;align-items:center;justify-content:space-between;padding-top:12px;border-top:1px solid var(--line)"><div style="display:flex;align-items:center;gap:10px">{P(who,36)}<div><div style="font-size:14px;font-weight:600">{f}</div><div class="s" style="font-size:12px;display:flex;align-items:center;gap:4px">{star(11)}{fr} · {frev}</div></div></div>
<span class="btn p" style="height:38px;padding:0 16px;font-size:14px;border-radius:10px">{t['view']}</span></div></div>'''
    act=''.join(f'<span class="chip" style="background:var(--ps);color:var(--pi);font-weight:600">{x}{i2("x",13)}</span>' for x in t['act'])
    inner=f'''<div style="padding:4px 20px 0;display:flex;align-items:center;justify-content:space-between"><span style="width:42px"></span><div class="t" style="font-size:22px">{t['title']}</div><span class="ib">{i2('bell',20)}<span style="position:absolute;top:-4px;inset-inline-end:-4px;min-width:18px;height:18px;border-radius:9px;background:var(--live);color:#fff;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;padding:0 4px">2</span></span></div>
<div style="display:flex;border-bottom:1px solid var(--line);margin-top:10px">{tabs}</div>
<div class="col" style="padding:16px 20px 0;display:flex;flex-direction:column;gap:12px;flex:1;overflow:hidden">
<div style="height:46px;border:1.5px solid var(--p);border-radius:12px;display:flex;align-items:center;gap:10px;padding:0 12px;background:var(--panel)">{i2('search',20)}<span style="flex:1;font-size:15px">{t['q']}</span><span class="s">{i2('x',18)}</span></div>
<div style="display:flex;gap:8px"><span class="btn p" style="height:36px;padding:0 12px;font-size:14px;border-radius:999px">{i2('filter',16)}{t['filters']}<span style="background:var(--onp);color:var(--p);border-radius:9px;min-width:18px;height:18px;font-size:11px;display:flex;align-items:center;justify-content:center">2</span></span><span class="btn" style="height:36px;padding:0 12px;font-size:14px;border-radius:999px">{t['sort']}{i2('chev',14,'transform:rotate(90deg)')}</span></div>
<div style="display:flex;gap:8px">{act}</div>
<div style="font-size:14px;font-weight:600">{t['found']}</div>
{card(t['c'][0],0)}{card(t['c'][1],1)}
</div>'''
    return frame(inner,pal,dark,rtl,navtab=1)
