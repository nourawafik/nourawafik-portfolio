import screens as S, subprocess, shutil
from kit import page, shoot
D='/tmp/claude-0/-home-claude/a7376101-3103-5ad9-97ca-42e951e26fac/scratchpad/praxa/'
full='Open Sarah Johnson’s profile'
for dark in (False,True):
    seq=[]
    def add(html,dur): seq.append((html,f'{D}frames/{"d" if dark else "l"}{len(seq):03d}.png',dur))
    add(S.voice(dark,0),1.4)
    words=full.split(' ')
    for k in range(1,len(words)+1):
        S.TXT[0]=' '.join(words[:k]); add(S.voice(dark,1),0.32 if k<len(words) else 0.7)
    S.PICK[0]=0; add(S.voice(dark,2),2.0)
    S.TXT[0]='One'; add(S.voice(dark,1),0.7)
    S.PICK[0]=1; add(S.voice(dark,2),0.6); S.PICK[0]=0
    add(S.voice(dark,3),2.4)
    S.TXT[0]=full
    shoot([(page(h),1440,960,f) for h,f,_ in seq],1)
    name='voice-command'+('-dark' if dark else '')
    lst=''.join(f"file '{f}'\nduration {d}\n" for _,f,d in seq)+f"file '{seq[-1][1]}'\n"
    open(f'{D}frames/{name}.txt','w').write(lst)
    subprocess.run(['ffmpeg','-y','-loglevel','error','-f','concat','-safe','0','-i',f'{D}frames/{name}.txt','-vf','fps=30,format=yuv420p','-c:v','libx264','-crf','20','-movflags','+faststart',f'{D}out/{name}.mp4'],check=True)
    shutil.copy(seq[len(words)+1][1],f'{D}out/{name}-poster.png')
