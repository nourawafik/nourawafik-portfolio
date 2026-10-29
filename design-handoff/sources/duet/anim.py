import sys,os,re,shutil,glob,subprocess
sys.path.insert(0,'.')
from s1 import screen_review
from render import page
from playwright.sync_api import sync_playwright
def animated(dark=False):
    h=screen_review(dark)
    h=h.replace('<div style="display:flex;align-items:center;gap:16px;padding:14px 18px;border-radius:14px;background:var(--tempo-soft)">','<div class="a-score" style="display:flex;align-items:center;gap:16px;padding:14px 18px;border-radius:14px;background:var(--tempo-soft)">',1)
    n=[0]
    def rv(m):
        n[0]+=1; return f'<div class="a-r a-r{n[0]}" style="display:flex;gap:12px;padding:14px 16px;border:1px solid var(--line);border-radius:12px;'
    h=re.sub(r'<div style="display:flex;gap:12px;padding:14px 16px;border:1px solid var\(--line\);border-radius:12px;',rv,h)
    h=h.replace('<span class="btn" style="background:var(--ok);','<span class="btn a-ok" style="background:var(--ok);',1)
    h=h.replace('<div style="padding:14px 16px;border-radius:12px;background:var(--warn-soft)','<div class="a-w" style="padding:14px 16px;border-radius:12px;background:var(--warn-soft)',1)
    h=h.replace('<div class="bub" style="background:var(--panel);border:1px solid var(--line);max-width:96%">','<div class="bub a-sum" style="background:var(--panel);border:1px solid var(--line);max-width:96%">',1)
    css='''<style>
@keyframes up{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
@keyframes pop{0%{opacity:0;transform:scale(.9)}60%{opacity:1;transform:scale(1.03)}100%{opacity:1;transform:scale(1)}}
@keyframes press{0%,100%{transform:scale(1)}50%{transform:scale(.94)}}
@keyframes ring{0%{box-shadow:0 0 0 0 rgba(31,122,82,.5)}100%{box-shadow:0 0 0 14px rgba(31,122,82,0)}}
@keyframes toast{0%{opacity:0;transform:translate(-50%,20px)}10%,85%{opacity:1;transform:translate(-50%,0)}100%{opacity:0}}
.a-score{opacity:0;animation:pop .6s cubic-bezier(.2,.8,.2,1) 1.2s forwards}
.a-r{opacity:0;animation:up .55s cubic-bezier(.2,.8,.2,1) forwards}
.a-r1{animation-delay:1.3s}.a-r2{animation-delay:1.75s}.a-r3{animation-delay:2.2s}
.a-w{opacity:0;animation:up .55s cubic-bezier(.2,.8,.2,1) 2.8s forwards}
.a-sum{opacity:0;animation:up .55s cubic-bezier(.2,.8,.2,1) 3.4s forwards}
.a-ok{animation:press .35s ease 4.6s,ring .9s ease-out 4.8s}
.toast{position:absolute;left:50%;bottom:36px;font-family:Inter,sans-serif;font-size:15px;font-weight:600;padding:12px 18px;border-radius:12px;display:flex;gap:10px;align-items:center;opacity:0;animation:toast 2.4s ease 5s forwards}
</style>'''
    toast=f'<div class="toast" style="background:{TOASTC[0]};color:{TOASTC[1]}"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 L10 17 L19 7"/></svg>Maya moved to final round · saved to audit trail</div>'
    h=h.replace('<div class="du','<div style="position:relative">'+css+'<div class="du',1)+toast+'</div>'
    return h
def record(dark,out):
    global TOASTC
    TOASTC=('#ECECF6','#12142A') if dark else ('#1B1F3B','#FFFFFF')
    d='/tmp/_vid'; shutil.rmtree(d,ignore_errors=True)
    open('/tmp/_a.html','w').write(page(animated(dark),1440,900))
    with sync_playwright() as p:
        b=p.chromium.launch(); ctx=b.new_context(viewport={'width':1440,'height':900},record_video_dir=d,record_video_size={'width':1440,'height':900})
        pg=ctx.new_page(); pg.goto('file:///tmp/_a.html'); pg.wait_for_timeout(8200); ctx.close(); b.close()
    v=glob.glob(d+'/*.webm')[0]
    subprocess.run(['ffmpeg','-y','-loglevel','error','-ss','0.35','-i',v,'-t','7.6','-vf','scale=1440:-2,fps=30','-c:v','libx264','-pix_fmt','yuv420p','-crf','20','-movflags','+faststart','-an',out],check=True)
record(False,'tempo-reasons.mp4'); record(True,'tempo-reasons-dark.mp4')
subprocess.run(['ffmpeg','-y','-loglevel','error','-ss','6','-i','tempo-reasons.mp4','-frames:v','1','frame6.png'])
subprocess.run(['ffmpeg','-y','-loglevel','error','-ss','1.6','-i','tempo-reasons.mp4','-frames:v','1','frame1.png'])
print(os.path.getsize('tempo-reasons.mp4')//1024,'KB')
