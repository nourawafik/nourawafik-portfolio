import sys
from PIL import Image
names=sys.argv[2:]; suf=sys.argv[1]
ims=[Image.open(f'out2/studio-{n}-{l}{suf}.png') for n in names for l in ['en','ar']]
c=Image.new('RGB',(780*len(names),1688*2),'white')
for k,im in enumerate(ims): c.paste(im,((k//2)*780,(k%2)*1688))
c.resize((390*len(names),1688)).save('st-all.png')
