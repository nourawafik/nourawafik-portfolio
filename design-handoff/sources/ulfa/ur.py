import sys,os
from uc import CSS,FONTS
from playwright.sync_api import sync_playwright
def page(body,w,h,bg='#FFFFFF'):
    fl=['inter/400.css','inter/500.css','inter/600.css','inter/700.css','inter/800.css','fraunces/500.css','fraunces/600.css','fraunces/700.css','readex-pro/400.css','readex-pro/500.css','readex-pro/600.css','readex-pro/700.css','ibm-plex-sans-arabic/400.css','ibm-plex-sans-arabic/500.css','ibm-plex-sans-arabic/600.css','ibm-plex-sans-arabic/700.css','nunito/400.css','nunito/600.css','nunito/700.css','nunito/800.css','rubik/400.css','rubik/500.css','rubik/700.css','rubik/800.css']
    fonts=''.join(f'<link rel="stylesheet" href="file://{FONTS}{f}">' for f in fl)
    return f'<!doctype html><html><head><meta charset="utf-8">{fonts}<style>body{{margin:0;background:{bg}}}svg.i{{fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}}{CSS}</style></head><body><div style="width:{w}px;height:{h}px;overflow:hidden">{body}</div></body></html>'
def shoot(items,scale=2):
    with sync_playwright() as p:
        b=p.chromium.launch()
        for html,w,h,out in items:
            open('/tmp/_uf.html','w').write(html)
            pg=b.new_page(viewport={'width':w,'height':h},device_scale_factor=scale); pg.goto('file:///tmp/_uf.html'); pg.wait_for_timeout(600)
            pg.screenshot(path=out); pg.close()
        b.close()
