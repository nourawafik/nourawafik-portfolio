import sys,os
sys.path.insert(0,os.path.dirname(__file__))
from common import CSS,FONTS
from playwright.sync_api import sync_playwright
def page(body,w,h,bg='#FFFFFF'):
    fonts=''.join(f'<link rel="stylesheet" href="file://{FONTS}{f}">' for f in ['inter/400.css','inter/500.css','inter/600.css','inter/700.css','inter/800.css','rubik/400.css','rubik/500.css','rubik/700.css','rubik/800.css'])
    return f'<!doctype html><html><head><meta charset="utf-8">{fonts}<style>body{{margin:0;background:{bg}}}{CSS}</style></head><body><div style="width:{w}px;height:{h}px;overflow:hidden">{body}</div></body></html>'
def shoot(items,scale=2):
    with sync_playwright() as p:
        b=p.chromium.launch()
        for html,w,h,out in items:
            open('/tmp/_du.html','w').write(html)
            pg=b.new_page(viewport={'width':w,'height':h},device_scale_factor=scale); pg.goto('file:///tmp/_du.html'); pg.wait_for_timeout(500)
            pg.screenshot(path=out); pg.close()
        b.close()
