import re
from gen_lib2 import *

BASES={('en',0,0):'Home-EN',('ar',0,0):'Home-AR',('en',1,0):'Home-EN-Dark',('ar',1,0):'Home-AR-Dark',('en',0,1):'Home-EN-Mobile',('ar',1,1):'Home-AR-Mobile-Dark',('ar',0,1):'Home-AR-Mobile',('en',1,1):'Home-EN-Mobile-Dark'}

def svgfile(name,w):
    t=open('/home/claude/nourawafik/nourawafik-portfolio/public/mascot/'+name).read()
    t=re.sub(r'<metadata>.*?</metadata>','',t,flags=re.S)
    return re.sub(r'width="\d+" height="\d+"',f'width="{w}" height="{int(w*255/280)}"',t,1)

C={
 'eyebrow':('Get a quote','اطلب عرض سعر'),
 'h1':('Tell me about your project','أخبرني عن مشروعك'),
 'lead':("A few details are enough to start. I'll read your request myself and reply by email.",
         'بعض التفاصيل تكفي للبداية. سأقرأ طلبك بنفسي وأرد عليك بالإيميل.'),
 'steps':[('You send the details','ترسل تفاصيل مشروعك'),('I review them and reply with any questions','أراجعها وأرد عليك بأي أسئلة'),('You get a quote that fits what the project needs','يصلك عرض سعر يناسب احتياج المشروع')],
 'next':('What happens next','ماذا يحدث بعد ذلك'),
 'or':('Prefer email?','تفضل الإيميل؟'),
 'copy':('Copy email','انسخ الإيميل'),
 'name':('Your name','الاسم'),
 'email':('Email','الإيميل'),
 'phone':('Phone or WhatsApp','رقم الجوال أو واتساب'),
 'phph':('+20 10 0000 0000','+966 50 000 0000'),
 'svc':('What do you need?','ما الخدمة التي تحتاجها؟'),
 'svch':('Choose one or more','اختر واحدة أو أكثر'),
 'svcs':[('Brand identity','هوية بصرية'),('Website or landing page','موقع أو صفحة هبوط'),('App or web platform','تطبيق أو منصة ويب'),('Design system','نظام تصميم'),('Something else','شيء آخر')],
 'co':('Company or project name','اسم الشركة أو المشروع'),
 'lang':('Language','اللغة'),
 'langs':[('Arabic','عربي'),('English','إنجليزي'),('Both','الاثنين')],
 'when':('When would you like to start?','متى تريد أن تبدأ؟'),
 'whens':[('As soon as possible','في أقرب وقت'),('Within a month','خلال شهر'),('Later','لاحقا'),('Not sure yet','غير محدد')],
 'budget':('Approximate budget','الميزانية التقريبية'),
 'budph':('Amount and currency','المبلغ والعملة'),
 'notes':('Anything else I should know?','أي تفاصيل أخرى تريد إضافتها؟'),
 'notesph':('Links, references, deadlines…','روابط، أمثلة تعجبك، مواعيد مهمة…'),
 'opt':('optional','اختياري'),
 'send':('Send request','أرسل الطلب'),
 'privacy':('Your details come only to me and are used only to reply to you.','بياناتك تصلني أنا فقط، وتستخدم للرد عليك فقط.'),
 'err_email':('Enter an email like name@company.com','اكتب إيميل صحيح، مثل name@company.com'),
 'ok_h':('Thanks, {n}. Your request is with me','شكرا {n}، وصلني طلبك'),
 'ok_p':("I'll read it and reply to {e}. If you don't see my reply, check your spam folder.",'سأقرأه وأرد عليك على {e}. لو لم يظهر ردي، راجع مجلد الرسائل غير المرغوب فيها.'),
 'ok_b':('See my work','شاهد أعمالي'),
 'ok_home':('Back to home','العودة للرئيسية'),
}

def field(T,lab,ph='',val='',opt=False,L=0,err=None,area=False,ltr=False):
    o=f'<span style="font-weight:400;color:{T["subtle"]}"> ({C["opt"][L]})</span>' if opt else ''
    bc=T.get('err','#C23B3B') if err else (T['ink'] if val else T['line'])
    txt=val or ph; col=T['ink'] if val else T['subtle']
    d=' dir="ltr"' if ltr else ''
    align='text-align:right;' if (ltr and L) else ''
    box=(f'<div{d} style="{"min-height:112px;padding:14px 16px;align-items:flex-start" if area else "height:52px;padding:0 16px;align-items:center"};display:flex;border-radius:14px;border:2px solid {bc};'
         f'background:{T["card"]};font-size:16px;color:{col};{align}box-sizing:border-box;width:100%"><span style="flex:1;{align}">{txt}</span></div>')
    e=(f'<div role="alert" style="display:flex;gap:6px;align-items:center;font-size:14px;color:{T.get('err','#C23B3B')};font-weight:500">'
       f'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v6M12 16.5v.01"/></svg>{err}</div>') if err else ''
    return f'<label style="display:flex;flex-direction:column;gap:8px"><span style="font-size:15px;font-weight:600;color:{T["ink"]}">{lab}{o}</span>{box}{e}</label>'

def pills(T,items,on,L,multi):
    out=''
    for i,it in enumerate(items):
        a=i in on
        mark=''
        if multi:
            mark=(f'<span style="width:18px;height:18px;border-radius:6px;border:2px solid {T["bg"] if a else T["line"]};background:{T["bg"] if a else "transparent"};display:inline-flex;align-items:center;justify-content:center">'
                  +(f'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="{T["ink"]}" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>' if a else '')+'</span>')
        st=f'background:{T["ink"]};color:{T["bg"]};border-color:{T["ink"]}' if a else f'background:{T["card"]};color:{T["ink"]};border-color:{T["line"]}'
        out+=(f'<span role="{"checkbox" if multi else "radio"}" aria-checked="{"true" if a else "false"}" style="height:44px;padding:0 16px;border-radius:999px;border:2px solid;{st};font-size:15px;font-weight:500;display:inline-flex;align-items:center;gap:8px;white-space:nowrap">{mark}{it[L]}</span>')
    return f'<div style="display:flex;gap:8px;flex-wrap:wrap">{out}</div>'

def group(T,lab,inner,L,opt=False,hint=None):
    o=f'<span style="font-weight:400;color:{T["subtle"]}"> ({C["opt"][L]})</span>' if opt else ''
    h=f'<span style="font-size:14px;color:{T["subtle"]}">{hint}</span>' if hint else ''
    return f'<fieldset style="border:0;margin:0;padding:0;display:flex;flex-direction:column;gap:10px"><legend style="padding:0;margin-bottom:10px;font-size:15px;font-weight:600;color:{T["ink"]}">{lab}{o}</legend>{h}{inner}</fieldset>'

def quote(lang,dark,mob,state='filled'):
    rtl=lang=='ar'; L=1 if rtl else 0; T=dict(tok(dark)); T['err']='#FF8A80' if dark else '#C23B3B'
    helmet,root,header,footer,contact=parts(BASES[(lang,int(dark),int(mob))])
    footer=re.sub(r'<a [^>]*>Instagram</a>','',footer)
    copyico='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>'
    if state=='success':
        n='Sara' if not rtl else 'سارة'; e='sara@company.com'
        inner=(f'<div style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:18px;padding:{"40px 20px" if mob else "64px 48px"}">'
               f'<div style="width:{180 if mob else 220}px;background:#E6F4F3;border-radius:28px;padding:16px">{svgfile("noon-celebrate.svg",180 if mob else 220)}</div>'
               f'<h1 role="status" style="margin:0;font-size:{28 if mob else 40}px;font-weight:800;line-height:1.3">{C["ok_h"][L].format(n=n)}</h1>'
               f'<p style="margin:0;max-width:520px;font-size:{16 if mob else 18}px;line-height:1.7;color:{T["muted"]}">{C["ok_p"][L].format(e=f"<span dir=ltr>{e}</span>")}</p>'
               f'<div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;{"flex-direction:column;width:100%" if mob else ""}">'
               f'<a href="#" style="height:52px;padding:0 24px;border-radius:999px;background:#FFC845;color:#0E2A2D;font-weight:700;font-size:16px;display:inline-flex;align-items:center;justify-content:center;gap:8px;text-decoration:none">{C["ok_b"][L]}{arr(rtl)}</a>'
               f'<a href="#" style="height:52px;padding:0 24px;border-radius:999px;border:2px solid {T["ink"]};color:{T["ink"]};font-weight:600;font-size:16px;display:inline-flex;align-items:center;justify-content:center;text-decoration:none">{C["ok_home"][L]}</a></div></div>')
        main=(f'<main style="max-width:880px;margin:0 auto;padding:{"24px 16px 64px" if mob else "64px 32px 120px"}">'
              f'<div style="background:{T["card"]};border-radius:28px;border:1px solid {T["line"]}">{inner}</div></main>')
        body=f'{root}\n{header}\n{main}\n{footer}\n</div>'
        return helmet,body
    err=state=='error'
    nm='سارة أحمد' if rtl else 'Sara Ahmed'
    em='sara@company' if err else 'sara@company.com'
    f_name=field(T,C['name'][L],val=nm,L=L)
    f_mail=field(T,C['email'][L],val=em,L=L,ltr=True,err=C['err_email'][L] if err else None)
    f_phone=field(T,C['phone'][L],ph=C['phph'][L],opt=True,L=L,ltr=True)
    svc=group(T,C['svc'][L],pills(T,C['svcs'],{0,1},L,True),L,hint=None)
    f_co=field(T,C['co'][L],ph=('Acme Studio' if not rtl else 'مثال: متجر الورد'),opt=True,L=L)
    lng=group(T,C['lang'][L],pills(T,C['langs'],{2},L,False),L,opt=True)
    when=group(T,C['when'][L],pills(T,C['whens'],{1},L,False),L,opt=True)
    f_bud=field(T,C['budget'][L],ph=C['budph'][L],opt=True,L=L)
    f_notes=field(T,C['notes'][L],ph=C['notesph'][L],opt=True,L=L,area=True)
    row=lambda a,b: (a+b) if mob else f'<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">{a}{b}</div>'
    send=(f'<button type="submit" style="height:56px;border-radius:999px;border:0;background:#FFC845;color:#0E2A2D;font:700 17px Rubik,sans-serif;display:flex;align-items:center;justify-content:center;gap:8px;width:100%">{C["send"][L]}{arr(rtl)}</button>')
    priv=(f'<p style="margin:0;display:flex;gap:8px;align-items:flex-start;font-size:14px;line-height:1.6;color:{T["muted"]}">'
          f'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;margin-top:3px"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>{C["privacy"][L]}</p>')
    form=(f'<form style="background:{T["card"]};border-radius:28px;border:1px solid {T["line"]};padding:{"22px 18px" if mob else "36px"};display:flex;flex-direction:column;gap:{22 if mob else 26}px">'
          f'{row(f_name,f_mail)}{f_phone}{svc}{f_co}{lng}{when}{f_bud}{f_notes}{send}{priv}</form>')
    steps=''.join(f'<li style="display:flex;gap:14px;align-items:center"><span style="width:34px;height:34px;flex-shrink:0;border-radius:999px;background:{T["tag"]};color:{T["tagi"]};font-weight:700;display:flex;align-items:center;justify-content:center">{i+1}</span><span style="font-size:16px;line-height:1.5">{s[L]}</span></li>' for i,s in enumerate(C['steps']))
    side=(f'<div style="display:flex;flex-direction:column;gap:{20 if mob else 28}px;{"" if mob else "position:sticky;top:120px"}">'
          f'<div style="font-size:15px;font-weight:500;color:{T["acc"] if dark else T["tagi"]}">{C["eyebrow"][L]}</div>'
          f'<h1 style="margin:-10px 0 0;font-size:{36 if mob else 56}px;font-weight:800;line-height:1.15">{C["h1"][L]}</h1>'
          f'<p style="margin:0;font-size:{17 if mob else 19}px;line-height:1.7;color:{T["muted"]}">{C["lead"][L]}</p>')
    if not mob:
        side+=(f'<div style="display:flex;gap:20px;align-items:center"><div style="width:150px;flex-shrink:0;background:#E6F4F3;border-radius:24px;padding:10px">{svgfile("noon-point.svg",150)}</div>'
               f'<div style="display:flex;flex-direction:column;gap:12px"><div style="font-size:15px;font-weight:600;color:{T["muted"]}">{C["next"][L]}</div><ol style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:12px">{steps}</ol></div></div>')
    alt=(f'<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;padding-top:{18 if mob else 22}px;border-top:1px solid {T["line"]}">'
         f'<span style="font-size:15px;color:{T["muted"]}">{C["or"][L]}</span><span dir="ltr" style="font-size:16px;font-weight:600">hello@nourawafik.com</span>'
         f'<button type="button" style="height:36px;padding:0 14px;border-radius:999px;border:2px solid {T["line"]};background:transparent;color:{T["ink"]};font:500 14px Rubik,sans-serif;display:inline-flex;align-items:center;gap:6px">{copyico}{C["copy"][L]}</button></div>')
    if mob:
        side+='</div>'
        steps_m=(f'<div style="display:flex;flex-direction:column;gap:12px"><div style="font-size:15px;font-weight:600;color:{T["muted"]}">{C["next"][L]}</div><ol style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:12px">{steps}</ol></div>')
        main=(f'<main style="padding:20px 16px 64px;display:flex;flex-direction:column;gap:24px">{side}{form}{steps_m}{alt}</main>')
    else:
        side+=alt+'</div>'
        main=(f'<main style="max-width:1280px;margin:0 auto;padding:56px 32px 120px;display:grid;grid-template-columns:5fr 7fr;gap:64px;align-items:start">{side}{form}</main>')
    body=f'{root}\n{header}\n{main}\n{footer}\n</div>'
    return helmet,body
