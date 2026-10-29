from uc import IC, ic, av
DIRS={
'A':dict(name='Sage & Sand',bg='#F7F4EF',panel='#FFFFFF',sunk='#EFEAE2',ink='#26302B',muted='#5C6660',subtle='#8A928D',line='#E6E0D6',p='#4F7A66',pink='#3E6352',psoft='#E6EFEA',acc='#D9895B',accsoft='#F8E7DC',accink='#8A4B26',fontEN='Nunito',fontAR='IBM Plex Sans Arabic',dispEN='Nunito',dispAR='IBM Plex Sans Arabic',radius=22),
'B':dict(name='Misty Blue',bg='#F4F7FA',panel='#FFFFFF',sunk='#E9EFF5',ink='#1F2A37',muted='#566272',subtle='#8793A1',line='#E1E8EF',p='#3D6F94',pink='#2F5978',psoft='#E3EEF6',acc='#E6B566',accsoft='#FBF0DC',accink='#7A5410',fontEN='Inter',fontAR='IBM Plex Sans Arabic',dispEN='Inter',dispAR='Readex Pro',radius=18),
'C':dict(name='Dawn',bg='#FBF8F5',panel='#FFFFFF',sunk='#F3EDE7',ink='#2A2633',muted='#625C6B',subtle='#918A99',line='#ECE4DC',p='#6E7FB8',pink='#56659B',psoft='#ECEFF9',acc='#E9A48A',accsoft='#FBEAE3',accink='#8E4A33',fontEN='Nunito',fontAR='Readex Pro',dispEN='Nunito',dispAR='Readex Pro',radius=26),
}
def home2(d,rtl=True):
    D=DIRS[d]; R=D['radius']
    font=D['fontAR'] if rtl else D['fontEN']; disp=D['dispAR'] if rtl else D['dispEN']
    t=dict(hi='مساء الخير' if rtl else 'Good evening',name='سلمى' if rtl else 'Salma',q='حاسة بإيه النهارده؟' if rtl else 'How are you feeling today?',
      f=(['قلقانة','مضغوطة','حزينة','لوحدي'] if rtl else ['Worried','Stretched thin','Sad','Lonely']),
      next='جلستك الجاية' if rtl else 'Your next session',title='نتنفس مع القلق' if rtl else 'Breathing through worry',when='الليلة · 8:00 م' if rtl else 'Tonight · 8:00 PM',
      inn='بعد 25 دقيقة' if rtl else 'in 25 min',fac='مع هنا عادل' if rtl else 'with Hana Adel',ready='جهزي نفسك' if rtl else 'Get ready',
      rec='ممكن تريحك' if rtl else 'Might help you',r=[('عقول هادئة','كل أسبوع · ٨ أشخاص'),('بعد الفقد','كل أحد والتاني · ٦ أشخاص')] if rtl else [('Quiet Minds','Weekly · 8 people'),('After the Loss','Every other Sunday · 6 people')],
      nav=['الرئيسية','جلساتي','حسابي'] if rtl else ['Home','Sessions','Me'])
    emo=['M8 15 C10 13 14 13 16 15','M8 14 H16','M8 16 C10 14 14 14 16 16','M9 15 H15']
    feel=''.join(f'<div style="background:{[D["psoft"],D["accsoft"],D["sunk"],D["psoft"]][i]};border-radius:{R-6}px;padding:14px;display:flex;align-items:center;gap:10px;font-size:15px;font-weight:600"><span style="width:30px;height:30px;border-radius:50%;background:{D["panel"]};display:flex;align-items:center;justify-content:center"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="{D["pink"]}" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><circle cx="9" cy="10" r=".6" fill="{D["pink"]}"/><circle cx="15" cy="10" r=".6" fill="{D["pink"]}"/><path d="{emo[i]}"/></svg></span>{x}</div>' for i,x in enumerate(t['f']))
    recs=''.join(f'<div style="display:flex;align-items:center;gap:12px;padding:12px 0;{"border-top:1px solid "+D["line"] if i else ""}"><span style="width:44px;height:44px;border-radius:14px;background:{[D["psoft"],D["accsoft"]][i]};display:flex;align-items:center;justify-content:center"><svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="5" r="2.2" fill="{D["acc"]}"/><circle cx="18.6" cy="9.8" r="2.2" fill="{D["p"]}"/><circle cx="16.1" cy="17.6" r="2.2" fill="{D["p"]}"/><circle cx="7.9" cy="17.6" r="2.2" fill="{D["p"]}"/><circle cx="5.4" cy="9.8" r="2.2" fill="{D["p"]}"/></svg></span><div style="flex:1"><div style="font-size:16px;font-weight:700">{n}</div><div style="font-size:13px;color:{D["muted"]}">{m}</div></div><span style="color:{D["subtle"]};transform:{"scaleX(-1)" if rtl else "none"};display:flex">{ic("chev",18)}</span></div>' for i,(n,m) in enumerate(t['r']))
    nav=''.join(f'<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;font-size:11px;font-weight:700;color:{D["p"] if i==0 else D["subtle"]}">{ic(["home","cal","user"][i],22)}{n}</div>' for i,n in enumerate(t['nav']))
    return f'''<div dir="{'rtl' if rtl else 'ltr'}" style="width:390px;height:844px;display:flex;flex-direction:column;background:{D['bg']};color:{D['ink']};font-family:'{font}',sans-serif;overflow:hidden">
<div dir="ltr" style="height:44px;display:flex;align-items:center;justify-content:space-between;padding:0 26px;font-size:15px;font-weight:600;font-family:Inter"><span>9:41</span><span style="width:24px;height:11px;border-radius:3px;border:1.5px solid {D['ink']}"></span></div>
<div style="flex:1;padding:10px 22px 0;display:flex;flex-direction:column;gap:22px">
<div style="display:flex;justify-content:space-between;align-items:center"><div><div style="font-size:14px;color:{D['muted']}">{t['hi']}</div><div style="font-family:'{disp}';font-size:26px;font-weight:700">{t['name']}</div></div>
<span style="width:44px;height:44px;border-radius:50%;background:{D['psoft']};color:{D['pink']};display:flex;align-items:center;justify-content:center;font-weight:700">{'س' if rtl else 'S'}</span></div>
<div style="background:{D['panel']};border-radius:{R}px;padding:18px;display:flex;flex-direction:column;gap:14px;box-shadow:0 1px 2px rgba(0,0,0,.04),0 12px 30px -18px rgba(0,0,0,.18)">
<div style="font-family:'{disp}';font-size:19px;font-weight:700">{t['q']}</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">{feel}</div></div>
<div style="display:flex;flex-direction:column;gap:10px"><div style="font-size:14px;font-weight:700;color:{D['muted']}">{t['next']}</div>
<div style="background:{D['panel']};border-radius:{R}px;padding:18px;display:flex;align-items:center;gap:14px;box-shadow:0 1px 2px rgba(0,0,0,.04),0 12px 30px -18px rgba(0,0,0,.18)">
<div style="width:62px;height:62px;border-radius:{R-6}px;background:{D['psoft']};display:flex;flex-direction:column;align-items:center;justify-content:center;color:{D['pink']};font-weight:800;line-height:1.1"><span style="font-size:20px">8:00</span><span style="font-size:11px">{'م' if rtl else 'PM'}</span></div>
<div style="flex:1;min-width:0"><div style="font-size:16px;font-weight:700">{t['title']}</div><div style="font-size:13px;color:{D['muted']};margin-top:3px">{t['fac']}</div><div style="font-size:12px;font-weight:700;color:{D['accink']};margin-top:6px">{t['inn']}</div></div></div>
<div style="height:50px;border-radius:999px;background:{D['p']};color:#fff;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700">{t['ready']}</div></div>
<div style="display:flex;flex-direction:column"><div style="font-size:14px;font-weight:700;color:{D['muted']};margin-bottom:4px">{t['rec']}</div>{recs}</div>
</div>
<div style="height:80px;border-top:1px solid {D['line']};background:{D['panel']};display:flex;padding:10px 30px 0">{nav}</div></div>'''
