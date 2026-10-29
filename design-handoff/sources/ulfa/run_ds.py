from ur import page,shoot
from u2 import css
from s_ds import appearance
from s_explore import explore
items=[]
for pal in ['slate','forest','rose','ochre']:
    items.append((page('<style>'+css()+'</style>'+explore('en',pal,False),390,844),390,844,f'out2/ds-explore-{pal}-en.png'))
    items.append((page('<style>'+css()+'</style>'+explore('ar',pal,True),390,844),390,844,f'out2/ds-explore-{pal}-ar-dark.png'))
for lang,pal,d,suf in [('en','slate',False,'en'),('ar','forest',False,'ar'),('en','rose',True,'en-dark'),('ar','ochre',True,'ar-dark')]:
    items.append((page('<style>'+css()+'</style>'+appearance(lang,pal,d),390,844),390,844,f'out2/ds-appearance-{suf}.png'))
shoot(items)
