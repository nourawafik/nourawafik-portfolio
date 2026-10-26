import sys
from ur import page,shoot
from s_studio import *
which=sys.argv[1:] or ['calendar','manage','wallet','payout']
F={'calendar':calendar,'manage':manage,'wallet':wallet,'payout':payout}
items=[]
for n in which:
  for lang in ['en','ar']:
    for d in [False,True]:
      items.append((page("<style>"+css()+"</style>"+F[n](lang,d),390,844),390,844,f'out2/studio-{n}-{lang}{"-dark" if d else ""}.png'))
shoot(items)
