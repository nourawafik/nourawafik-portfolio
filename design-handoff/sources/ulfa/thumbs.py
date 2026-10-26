from ur import shoot
O='/tmp/claude-0/-home-claude/a7376101-3103-5ad9-97ca-42e951e26fac/scratchpad/ulfa/out2/'
def ph(n,w,x,y,rot=0):
    return f'<img src="file://{O}{n}.png" style="position:absolute;left:{x}px;top:{y}px;width:{w}px;border-radius:{w*0.1}px;box-shadow:0 0 0 {w*0.022}px #0E2A2D,0 30px 60px -20px rgba(14,42,45,.45);transform:rotate({rot}deg)">'
def T(bg,circ,phones,dots=True):
    return f'''<!doctype html><html><body style="margin:0"><div style="width:800px;height:600px;position:relative;overflow:hidden;background:{bg}">
<div style="position:absolute;left:400px;top:330px;width:640px;height:640px;margin:-320px;border-radius:50%;background:{circ}"></div>{phones}</div></body></html>'''
items=[
 (T('#F3F1EC','#DDE9F3',ph('live-waiting-ar',220,170,90,-4)+ph('live-session-en',220,410,70,3)),'thumb-live'),
 (T('#F3F1EC','#F4EDD6',ph('studio-calendar-ar',220,170,80,-3)+ph('studio-wallet-en',220,410,100,3)),'thumb-studio'),
 (T('#F3F1EC','#E6E7F5',ph('ds-explore-slate-en',180,70,140,-6)+ph('ds-explore-forest-en',180,240,95,-2)+ph('ds-explore-rose-ar-dark',180,400,95,2)+ph('ds-explore-ochre-ar-dark',180,560,140,6)),'thumb-ds'),
]
if __name__=="__main__": shoot([(h,800,600,O+f'ulfa-{n}.png') for h,n in items])
