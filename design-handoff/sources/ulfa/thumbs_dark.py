from thumbs import ph,T,O
from ur import shoot
items=[
 (T('#0E2A2D','#1C3E52',ph('live-waiting-ar',220,170,90,-4)+ph('live-session-en',220,410,70,3)),'thumb-live-dark'),
 (T('#0E2A2D','#3A3420',ph('studio-calendar-ar-dark',220,170,80,-3)+ph('studio-wallet-en-dark',220,410,100,3)),'thumb-studio-dark'),
 (T('#0E2A2D','#2B2C45',ph('ds-explore-slate-en',180,70,140,-6)+ph('ds-explore-forest-en',180,240,95,-2)+ph('ds-explore-rose-ar-dark',180,400,95,2)+ph('ds-explore-ochre-ar-dark',180,560,140,6)),'thumb-ds-dark'),
]
shoot([(h.replace('rgba(14,42,45,.45)','rgba(0,0,0,.55)').replace('#0E2A2D,0 30px','#061416,0 30px'),800,600,O+f'ulfa-{n}.png') for h,n in items])
