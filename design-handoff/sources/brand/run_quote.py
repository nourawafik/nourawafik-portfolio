import re,json,sys
from gen_quote import *
from playwright.sync_api import sync_playwright
fonts=''.join(f'<link href="file://{B}fonts/node_modules/@fontsource/rubik/{w}.css" rel="stylesheet">' for w in (400,500,600,700,800))
jobs=[('Quote-EN',('en',False,False),1440,'اطلب عرض سعر · English'),
      ('Quote-AR',('ar',False,False),1440,'اطلب عرض سعر · عربي'),
      ('Quote-AR-Dark-Error',('ar',True,False,'error'),1440,'اطلب عرض سعر · عربي · دارك · خطأ في الإيميل'),
      ('Quote-EN-Mobile',('en',False,True),390,'اطلب عرض سعر · موبايل · English'),
      ('Quote-AR-Mobile-Dark',('ar',True,True),390,'اطلب عرض سعر · موبايل · عربي · دارك'),
      ('Quote-Success-AR',('ar',False,False,'success'),1440,'اطلب عرض سعر · تم الإرسال · عربي'),
      ('Quote-Success-EN-Mobile-Dark',('en',True,True,'success'),390,'اطلب عرض سعر · تم الإرسال · موبايل · English · دارك')]
cp=P+'canvas.json'; c=json.load(open(cp))
x=38340; y=7900
with sync_playwright() as pw:
    br=pw.chromium.launch()
    for name,args,w,title in jobs:
        helmet,body=quote(*args)
        st=''.join(re.findall(r'<style>(.*?)</style>',helmet,re.S))
        pg=br.new_page(viewport={'width':w,'height':900}); pg.set_content(f'<html><head>{fonts}<style>{st}</style></head><body style="margin:0">{body}</body></html>'); pg.wait_for_timeout(700)
        h=pg.evaluate('document.body.scrollHeight')+4
        pg.screenshot(path=B+f'brand/prev-{name}.png',full_page=True); pg.close()
        open(P+name+'.dc.html','w').write(wrap(title,helmet,body,w,h))
        c['boards'][name+'.dc.html']={'h':h,'title':title,'w':w,'x':x,'y':y}
        x+=w+80
        if name+'.dc.html' not in c['order']: c['order'].append(name+'.dc.html')
        print(name,h)
    br.close()
json.dump(c,open(cp,'w'),ensure_ascii=False,indent=2)
