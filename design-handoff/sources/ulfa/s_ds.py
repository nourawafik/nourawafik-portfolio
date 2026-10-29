from u2 import *
from avatars import P, circ_img
from s_studio import back
AP={'en':dict(t='Appearance',col='Color',names=['Slate','Forest','Rose','Ochre'],mode='Mode',modes=['Light','Dark','Auto'],lang='Language',langs=['English','العربية'],
  pv='Preview',badge='Workshop',live='Live now',name='Managing anxiety through mindful breathing',meta='Session 1 of 6 · 6:00–7:30 PM',join='Join now',
  note='Session type colors stay the same in every theme, so a workshop always looks like a workshop.'),
 'ar':dict(t='المظهر',col='اللون',names=['أزرق','أخضر','وردي','عسلي'],mode='الوضع',modes=['فاتح','غامق','زي الجهاز'],lang='اللغة',langs=['English','العربية'],
  pv='معاينة',badge='ورشة',live='شغالة دلوقتي',name='إدارة القلق بالتنفس الواعي',meta='الجلسة 1 من 6 · من 6:00 لـ 7:30 م',join='ادخل دلوقتي',
  note='ألوان أنواع الجلسات ثابتة في كل الثيمات، عشان الورشة تفضل شكلها ورشة.')}
ORDER=['slate','forest','rose','ochre']
def seg(items,on):
    return '<div style="display:flex;padding:4px;border-radius:12px;background:var(--sunk)">'+''.join(f'<span style="flex:1;text-align:center;padding:9px 0;border-radius:9px;font-size:14px;font-weight:600;{"background:var(--panel);color:var(--ink);box-shadow:0 1px 2px rgba(0,0,0,.1)" if i==on else "color:var(--muted)"}">{x}</span>' for i,x in enumerate(items))+'</div>'
def appearance(lang='en',pal='slate',dark=False):
    t=AP[lang]; rtl=lang=='ar'
    sw=''
    for i,n in enumerate(ORDER):
        c=DK[n][0] if dark else PAL[n]['p']; sel=n==pal
        ck=f'<svg viewBox="0 0 24 24" style="width:22px;height:22px;fill:none;stroke:{"#0D1316" if dark else "#fff"};stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round"><path d="M5 12.5 L10 17 L19 7.5"/></svg>' if sel else ''
        ring=f'box-shadow:0 0 0 3px var(--bg),0 0 0 5px {c}' if sel else ''
        sw+=f'<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:8px"><span style="width:48px;height:48px;border-radius:50%;background:{c};display:flex;align-items:center;justify-content:center;{ring}">{ck}</span><span style="font-size:13px;font-weight:{700 if sel else 500};color:{"var(--ink)" if sel else "var(--muted)"}">{t["names"][i]}</span></div>'
    lab=lambda x:f'<div style="font-size:13px;font-weight:700;color:var(--subtle);margin-bottom:10px">{x}</div>'
    inner=f'''{back(t['t'],rtl)}
<div class="col" style="flex:1;overflow:hidden;padding:18px 18px 0;display:flex;flex-direction:column;gap:20px">
<div class="card" style="padding:16px">{lab(t['col'])}<div style="display:flex">{sw}</div></div>
<div>{lab(t['mode'])}{seg(t['modes'],1 if dark else 0)}</div>
<div>{lab(t['lang'])}{seg(t['langs'],1 if rtl else 0)}</div>
<div>{lab(t['pv'])}<div class="card" style="padding:14px;display:flex;flex-direction:column;gap:10px">
<div style="display:flex;gap:6px"><span class="badge ws">{t['badge']}</span><span class="badge live"><span style="width:7px;height:7px;border-radius:50%;background:var(--live)"></span>{t['live']}</span></div>
<div style="font-size:16px;font-weight:700;line-height:1.35">{t['name']}</div>
<div style="display:flex;align-items:center;gap:8px">{P('amany',26)}<span class="m" style="font-size:13px">{t['meta']}</span></div>
<span class="btn p" style="height:44px">{t['join']}</span></div></div>
<div class="s" style="display:flex;gap:8px;font-size:12.5px;line-height:1.55">{i2('info',16,'flex-shrink:0;margin-top:2px')}<span>{t['note']}</span></div>
</div>'''
    return frame(inner,pal,dark,rtl,nav=False)
