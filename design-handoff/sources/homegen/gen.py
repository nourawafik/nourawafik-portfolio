import re,sys
P='/tmp/claude-0/-home-claude/a7376101-3103-5ad9-97ca-42e951e26fac/scratchpad/'
def R(s,a,b,n=None):
    c=s.count(a)
    if c==0 or (n is not None and c!=n): raise SystemExit(f'count {c} for: {a[:90]}')
    return s.replace(a,b)
CSS='''.c-card{transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s cubic-bezier(.2,.8,.2,1),border-color .35s;box-shadow:0 1px 2px rgba(14,42,45,.06),0 10px 24px -14px rgba(14,42,45,.22);cursor:pointer}
.c-card:hover{transform:translateY(-6px);box-shadow:0 2px 4px rgba(14,42,45,.06),0 28px 48px -20px rgba(14,42,45,.38)}
.c-card:active{transform:translateY(-2px) scale(.99)}
.c-card:focus-within{outline:3px solid var(--focus,#0E2A2D);outline-offset:3px}
.c-work .c-mwrap{overflow:hidden}
.c-work .c-media{transition:transform .6s cubic-bezier(.2,.8,.2,1)}
.c-work:hover .c-media{transform:scale(1.05)}
.c-card h3{transition:color .25s}
.c-work:hover h3,.c-svc:hover h3{color:var(--acc,#0E7C7B)}
.c-link svg{transition:transform .3s cubic-bezier(.2,.8,.2,1)}
[dir=rtl] .c-card:hover .c-link svg{transform:translateX(-5px)}
[dir=ltr] .c-card:hover .c-link svg{transform:translateX(5px)}
.c-go{position:absolute;top:22px;inset-inline-end:22px;width:40px;height:40px;border-radius:50%;border:2px solid var(--line,#D8D4C8);display:flex;align-items:center;justify-content:center;transition:transform .35s cubic-bezier(.2,.8,.2,1),background .25s,border-color .25s}
.c-go svg{stroke:var(--fg,#0E2A2D)}
.c-feat .c-go{border-color:#2B4A4E}.c-feat .c-go svg{stroke:#FFFFFF}
[dir=rtl] .c-card:hover .c-go{background:#FFC845;border-color:#FFC845;transform:rotate(45deg)}
[dir=ltr] .c-card:hover .c-go{background:#FFC845;border-color:#FFC845;transform:rotate(-45deg)}
.c-card:hover .c-go svg{stroke:#0E2A2D}
.c-feat:hover{box-shadow:0 28px 52px -18px rgba(255,200,69,.45)}
.c-feat:hover h3{color:#FFFFFF}
.c-trait{box-shadow:none}.c-trait:hover{transform:translateY(-4px);box-shadow:0 18px 32px -18px rgba(14,42,45,.35)}
.m-menu,.m-dots{display:none}
@media (prefers-reduced-motion: reduce){.c-card,.c-card:hover,.c-card:active,.c-work:hover .c-media,.c-card:hover .c-link svg,.c-card:hover .c-go{transform:none!important}}
@media (max-width: 640px){
.m-head{padding:14px 16px!important}.m-nav,.m-pill{display:none!important}.m-menu{display:flex!important}
.m-cta{padding:8px 14px!important;font-size:14px!important}
.m-sec{padding-left:16px!important;padding-right:16px!important}
.m-hero{padding-top:12px!important;padding-bottom:40px!important;gap:28px!important}
.m-h1{font-size:40px!important}
.m-sub{font-size:17px!important}
.m-art{height:380px!important;flex-basis:100%!important;border-radius:32px!important}
.m-art svg[role=img]{width:250px;height:240px}
.m-h2{font-size:30px!important}
.m-mq{font-size:20px!important}.m-mqb{height:56px!important}
.m-s96{padding-top:64px!important;padding-bottom:40px!important}
.h-rail{display:flex!important;overflow-x:auto;scroll-snap-type:x mandatory;gap:14px!important;margin-inline:-16px;padding:8px 16px 18px;scrollbar-width:none}
.h-rail::-webkit-scrollbar{display:none}
.h-rail>*{flex:0 0 84%;scroll-snap-align:start}
.h-rail.r-trait>*{flex-basis:68%}
.m-dots{display:flex;gap:6px;justify-content:center;margin-top:-6px}
.m-dots span{width:8px;height:8px;border-radius:999px;background:var(--line,#D8D4C8)}.m-dots span.on{width:22px;background:var(--acc,#0E7C7B)}
.m-contact{padding:28px!important;border-radius:28px!important}.m-contact h2{font-size:30px!important}.m-contact>svg{width:150px;height:144px}
.m-photo{flex-basis:100%!important}
.m-launch{top:744px!important}
.m-offer{font-size:14px!important;padding:6px 16px!important;justify-content:flex-start!important}
.c-card:hover{transform:none}
}'''
GO='<span class="c-go" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">{p}</svg></span>'
def build(src,lang):
    s=open(src).read(); ar=lang=='ar'
    s=R(s,'@media (prefers-reduced-motion: reduce){.h-marquee',CSS+'\n@media (prefers-reduced-motion: reduce){.h-marquee',1)
    # header
    s=R(s,'<header style="max-width: 1280px; margin: 0 auto; padding: 24px 32px;','<header class="m-head" style="max-width: 1280px; margin: 0 auto; padding: 24px 32px;',1)
    s=re.sub(r'<nav aria-label="(القائمة الرئيسية|Main)" style=',r'<nav class="m-nav" aria-label="\1" style=',s)
    s=R(s,'text-decoration: none; border: 2px solid #D8D4C8; border-radius: 999px; padding: 8px 14px;','text-decoration: none; border: 2px solid #D8D4C8; border-radius: 999px; padding: 8px 14px;',1)
    s=re.sub(r'<a href="#" lang="(en|ar)" style="font-size: 15px',r'<a class="m-pill" href="#" lang="\1" style="font-size: 15px',s)
    s=re.sub(r'<button type="button" aria-label="(الوضع الغامق|Dark mode)" style=',r'<button class="m-pill" type="button" aria-label="\1" style=',s)
    menu=f'<button class="m-menu" type="button" aria-label="{"القائمة" if ar else "Menu"}" style="width: 44px; height: 44px; border-radius: 50%; border: 2px solid #D8D4C8; background: #FFFFFF; align-items: center; justify-content: center"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E2A2D" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M4 7 H20 M4 12 H20 M4 17 H20"></path></svg></button>'
    s=R(s,'padding: 10px 20px; min-height: 44px; box-sizing: border-box; display: flex; align-items: center; text-decoration: none">'+('اطلب عرض سعر' if ar else 'Get a quote')+'</a>\n</div>\n</header>',
        'padding: 10px 20px; min-height: 44px; box-sizing: border-box; display: flex; align-items: center; text-decoration: none">'+('اطلب عرض سعر' if ar else 'Get a quote')+'</a>\n'+menu+'\n</div>\n</header>',1)
    s=R(s,'<a href="mailto:hello@nourawafik.com" style="font-size: 16px; font-weight: 700; color: #0E2A2D; background: #FFC845; border-radius: 999px; padding: 10px 20px;','<a class="m-cta" href="mailto:hello@nourawafik.com" style="font-size: 16px; font-weight: 700; color: #0E2A2D; background: #FFC845; border-radius: 999px; padding: 10px 20px;',1)
    # offer bar
    s=R(s,'<div style="max-width: 1280px; margin: 0 auto; padding: 6px 32px;','<div class="m-offer" style="max-width: 1280px; margin: 0 auto; padding: 6px 32px;',1)
    # hero
    s=R(s,'<section aria-labelledby="hero-title" style="','<section class="m-sec m-hero" aria-labelledby="hero-title" style="',1)
    s=R(s,'<h1 id="hero-title" style="','<h1 class="m-h1" id="hero-title" style="',1)
    s=R(s,'color: #3E5558; max-width: 560px">','color: #3E5558; max-width: 560px" class="m-sub">',1)
    s=R(s,'<div style="flex: 1 1 420px; min-width: 0; position: relative; height: 520px;','<div class="m-art" style="flex: 1 1 420px; min-width: 0; position: relative; height: 520px;',1)
    s=R(s,'<div aria-hidden="true" style="background: #0E2A2D; height: 72px;','<div class="m-mqb" aria-hidden="true" style="background: #0E2A2D; height: 72px;',1)
    s=R(s,'<div class="h-marquee" style=','<div class="h-marquee m-mq" style=',1)
    # sections
    s=R(s,'<section id="work" aria-labelledby="work-title" style="','<section class="m-sec m-s96" id="work" aria-labelledby="work-title" style="',1)
    s=R(s,'<section id="services" aria-labelledby="services-title" style="','<section class="m-sec" id="services" aria-labelledby="services-title" style="',1)
    s=R(s,'<section id="contact" aria-labelledby="contact-title" style="','<section class="m-sec m-s96" id="contact" aria-labelledby="contact-title" style="',1)
    s=R(s,'<div style="max-width: 1280px; margin: 0 auto; padding: 96px 32px; display: flex; flex-wrap: wrap; gap: 56px;','<div class="m-sec m-s96" style="max-width: 1280px; margin: 0 auto; padding: 96px 32px; display: flex; flex-wrap: wrap; gap: 56px;',1)
    s=re.sub(r'<h2 id="(work|services|about)-title" style="',r'<h2 class="m-h2" id="\1-title" style="',s)
    s=R(s,'<div style="flex: 0 1 380px; min-width: 260px; aspect-ratio: 1;','<div class="m-photo" style="flex: 0 1 380px; min-width: 260px; aspect-ratio: 1;',1)
    s=R(s,'<div style="background: #FFC845; border-radius: 40px; padding: 56px;','<div class="m-contact" style="background: #FFC845; border-radius: 40px; padding: 56px;',1)
    # rails
    dots=lambda n:'<div class="m-dots" aria-hidden="true">'+''.join('<span class="on"></span>' if i==0 else '<span></span>' for i in range(n))+'</div>'
    s=R(s,'<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px">','<div class="h-rail" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px">',1)
    s=R(s,'</article>\n</div>\n</section>','</article>\n</div>\n'+dots(3)+'\n</section>',1)
    s=R(s,'<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 20px">','<div class="h-rail" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 20px">',1)
    s=R(s,'<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px">','<div class="h-rail r-trait" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px">',1)
    # cards
    s=R(s,'<article style="background: #FFFFFF; border-radius: 24px; overflow: hidden;','<article class="c-card c-work" style="background: #FFFFFF; border-radius: 24px; overflow: hidden;',3)
    s=re.sub(r'<div style="height: 240px; (.*?)</div>',r'<div class="c-mwrap"><div class="c-media" style="height: 240px; \1</div></div>',s)
    s=R(s,'<a href="#" style="margin-top: auto; font-size: 16px; font-weight: 600; color: #0E7C7B;','<a class="c-link" href="#" style="margin-top: auto; font-size: 16px; font-weight: 600; color: #0E7C7B;',3)
    arrow='<path d="M19 12 H5"></path><path d="M11 6 L5 12 L11 18"></path>' if ar else '<path d="M5 12 H19"></path><path d="M13 6 L19 12 L13 18"></path>'
    go=GO.format(p=arrow)
    s=R(s,'<div style="background: #0E2A2D; color: #FFFFFF; border-radius: 24px; padding: 28px; display: flex; flex-direction: column; gap: 14px; position: relative; overflow: hidden">',
          '<div class="c-card c-svc c-feat" style="background: #0E2A2D; color: #FFFFFF; border-radius: 24px; padding: 28px; display: flex; flex-direction: column; gap: 14px; position: relative; overflow: hidden">'+go,1)
    s=R(s,'<div style="background: #FFFFFF; border: 3px solid #FF6B5B; border-radius: 24px; padding: 25px; display: flex; flex-direction: column; gap: 14px">',
          '<div class="c-card c-svc" style="background: #FFFFFF; border: 3px solid #FF6B5B; border-radius: 24px; padding: 25px; display: flex; flex-direction: column; gap: 14px; position: relative">'+go.replace('top:22px','top:22px'),1)
    s=R(s,'<div style="background: #FFFFFF; border-radius: 24px; padding: 28px; display: flex; flex-direction: column; gap: 14px">',
          '<div class="c-card c-svc" style="background: #FFFFFF; border-radius: 24px; padding: 28px; display: flex; flex-direction: column; gap: 14px; position: relative">'+go,4)
    s=R(s,'</div>\n</div>\n</section>\n\n<section class="m-sec" id="about"','</div>\n'+dots(6)+'\n</div>\n</section>\n\n<section class="m-sec" id="about"',0) if False else s
    s=R(s,'<div style="background: #F6F4EE; border-radius: 20px; padding: 18px;','<div class="c-card c-trait" style="background: #F6F4EE; border-radius: 20px; padding: 18px;',3)
    # service dots: after services rail close
    i=s.index('id="services"'); j=s.index('</section>',i)
    s=s[:j]+dots(6)+'\n'+s[j:]
    # launcher
    s=re.sub(r'<div style="position: absolute; top: 790px;',r'<div class="m-launch" style="position: absolute; top: 790px;',s)
    return s
for L in ['AR','EN']:
    out=build(P+f'homegen/base-{L}.html',L.lower())
    open(P+f'brand/project/Home-{L}.dc.html','w').write(out)
print('ok')
