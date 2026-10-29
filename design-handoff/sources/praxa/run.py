import sys
from screens import *
F={k:globals()[k] for k in sys.argv[1:]}
items=[]
for n,f in F.items():
    for d in (False,True):
        items.append((page(f(d)),1440,960,f'out/{n}{"-dark" if d else ""}.png'))
shoot(items,2)
