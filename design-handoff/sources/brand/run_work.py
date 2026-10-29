import re,json,sys
from gen_lib2 import *
from playwright.sync_api import sync_playwright
fonts=''.join(f'<link href="file://{B}fonts/node_modules/@fontsource/rubik/{w}.css" rel="stylesheet">' for w in (400,500,600,700,800))
jobs=[('Work-Library-EN',library,('en',False,False),1440,'أعمالي · المكتبة · English'),
      ('Work-Library-AR',library,('ar',False,False,'all','sched','',True),1440,'أعمالي · المكتبة · عربي · الفلاتر مفتوحة'),
      ('Work-Library-EN-Dark',library,('en',True,False,'all','all','calendar'),1440,'أعمالي · المكتبة · English · دارك · بحث'),
      ('Work-Library-AR-Dark',library,('ar',True,False,'all','video'),1440,'أعمالي · المكتبة · عربي · دارك · فلتر مكالمات فيديو'),
      ('Work-Library-EN-Mobile',library,('en',False,True),390,'أعمالي · موبايل · English'),
      ('Work-Library-AR-Mobile-Dark',library,('ar',True,True,'all','ai','',False,True),390,'أعمالي · موبايل · عربي · دارك · الفلاتر مفتوحة'),
      ('Work-Library-Empty-AR',library,('ar',False,False,'all','all','لوجو'),1440,'أعمالي · بحث بدون نتايج · عربي'),
      ('Work-Library-Empty-EN-Mobile-Dark',library,('en',True,True,'all','all','logo'),390,'أعمالي · بحث بدون نتايج · موبايل · English · دارك'),
      ('Home-WhatIDo-EN',whatido,('en',False,False),1440,'الرئيسية · بعمل إيه · English'),
      ('Home-WhatIDo-AR',whatido,('ar',False,False),1440,'الرئيسية · بعمل إيه · عربي'),
      ('Home-WhatIDo-AR-Dark',whatido,('ar',True,False),1440,'الرئيسية · بعمل إيه · عربي · دارك'),
      ('Home-WhatIDo-EN-Mobile',whatido,('en',False,True),390,'الرئيسية · بعمل إيه · موبايل'),
      ('Home-WhatIDo-AR-Mobile-Dark',whatido,('ar',True,True),390,'الرئيسية · بعمل إيه · موبايل · دارك')]
only=sys.argv[1:]
cp=P+'canvas.json'; c=json.load(open(cp))
x0,y=38340,1320; xs={}
xcur=x0
with sync_playwright() as pw:
    br=pw.chromium.launch()
    for name,fn,args,w,title in jobs:
        helmet,body=fn(*args)
        st=''.join(re.findall(r'<style>(.*?)</style>',helmet,re.S))
        pg=br.new_page(viewport={'width':w,'height':900}); pg.set_content(f'<html><head>{fonts}<style>{st}</style></head><body style="margin:0">{body}</body></html>'); pg.wait_for_timeout(700)
        h=int(pg.evaluate("document.querySelector('#services').getBoundingClientRect().bottom"))+4 if 'WhatIDo' in name else pg.evaluate('document.body.scrollHeight')+4
        h=844 if name=='Work-Library-AR-Mobile-Dark' else h
        pg.set_viewport_size({'width':w,'height':h}) if ('WhatIDo' in name or h==844) else None; pg.screenshot(path=B+f'brand/prev-{name}.png',full_page=not ('WhatIDo' in name or h==844)); pg.close()
        open(P+name+'.dc.html','w').write(wrap(title,helmet,body,w,h))
        c['boards'][name+'.dc.html']={'h':h,'title':title,'w':w,'x':xcur,'y':y if 'WhatIDo' not in name else 1320+5200}
        if 'WhatIDo' in name: pass
        xcur+=w+80
        if name+'.dc.html' not in c['order']: c['order'].append(name+'.dc.html')
        print(name,h)
    br.close()
# place WhatIDo row starting at x0 below
xw=x0
for name,_,_,w,_ in jobs:
    if 'WhatIDo' in name: c['boards'][name+'.dc.html']['x']=xw; xw+=w+80
json.dump(c,open(cp,'w'),ensure_ascii=False,indent=2)
