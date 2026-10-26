# original flat illustrated avatars (no photos of real people)
SK=['#F2C9A8','#E0AC84','#C68B5E','#9C6640','#F5D3BC','#B97A52']
def avatar(kind,s=40,bg='#DCE7F1',skin=0,hair='#2B2220',shirt='#3E6E8E',uid='a'):
    k=SK[skin]
    face=f'<circle cx="17" cy="21" r="1.3" fill="#2A2020"/><circle cx="23" cy="21" r="1.3" fill="#2A2020"/><path d="M17.3 25 Q20 27.2 22.7 25" fill="none" stroke="#7A3E2E" stroke-width="1.1" stroke-linecap="round"/>'
    body=f'<path d="M6 40 C7 32 12 29.5 20 29.5 C28 29.5 33 32 34 40 Z" fill="{shirt}"/><rect x="17.5" y="26" width="5" height="5" rx="2" fill="{k}"/>'
    head=f'<ellipse cx="20" cy="20.5" rx="7.2" ry="8" fill="{k}"/>'
    if kind=='hijab':
        hj=hair
        art=f'<path d="M5 40 C6 31 11 29 20 29 C29 29 34 31 35 40 Z" fill="{hj}"/><path d="M11 22 C11 12 15.5 9 20 9 C24.5 9 29 12 29 22 C29 28 26 31.5 20 31.5 C14 31.5 11 28 11 22 Z" fill="{hj}"/>{head.replace("rx=\"7.2\" ry=\"8\"","rx=\"6.4\" ry=\"7.2\"")}{face}'
    elif kind=='long':
        art=f'{body}<path d="M11.5 22 C11 12 15 9.5 20 9.5 C25 9.5 29 12 28.5 22 L29.5 31 C27 32 25 31 25 31 L15 31 C15 31 13 32 10.5 31 Z" fill="{hair}"/>{head}<path d="M13 18 C14 12.5 18 11.5 20 11.5 C23 11.5 26.5 13 27 18 C24 16.5 20 15.5 16 16.5 Z" fill="{hair}"/>{face}'
    elif kind=='short':
        art=f'{body}{head}<path d="M12.6 19 C12 12.5 16 10 20.5 10 C25 10 28 12.5 27.4 19 C26.5 15.5 24 14.5 20 14.5 C16 14.5 13.5 15.5 12.6 19 Z" fill="{hair}"/>{face}'
    elif kind=='beard':
        art=f'{body}{head}<path d="M12.6 19 C12 12.5 16 10 20.5 10 C25 10 28 12.5 27.4 19 C26.5 15.5 24 14.5 20 14.5 C16 14.5 13.5 15.5 12.6 19 Z" fill="{hair}"/><path d="M13 22 C13.5 28 16.5 29.5 20 29.5 C23.5 29.5 26.5 28 27 22 C26 25.5 24 26.5 20 26.5 C16 26.5 14 25.5 13 22 Z" fill="{hair}"/>{face.replace("#7A3E2E","#E3B9A0")}'
    elif kind=='curly':
        curls=''.join(f'<circle cx="{x}" cy="{y}" r="3.2" fill="{hair}"/>' for x,y in [(14,13),(18,10.5),(22.5,10.5),(26.5,13),(12.5,17),(27.5,17)])
        art=f'{body}{head}{curls}{face}'
    return f'<svg width="{s}" height="{s}" viewBox="0 0 40 40" aria-hidden="true" style="flex-shrink:0;border-radius:50%"><defs><clipPath id="c{uid}"><circle cx="20" cy="20" r="20"/></clipPath></defs><g clip-path="url(#c{uid})"><rect width="40" height="40" fill="{bg}"/><g transform="translate(20 44) scale(1.32) translate(-20 -40)">{art}</g></g></svg>'
PEOPLE={'amany':dict(kind='hijab',skin=1,hair='#B5838D',shirt='#B5838D',bg='#F3E3E5'),'omar':dict(kind='beard',skin=2,hair='#2B2220',shirt='#4F6D8F',bg='#DCE7F1'),
 'salma':dict(kind='long',skin=0,hair='#4A2E24',shirt='#6E9C82',bg='#E2EEE6'),'karim':dict(kind='short',skin=3,hair='#1E1A18',shirt='#C9A24A',bg='#F5ECD6'),
 'lina':dict(kind='curly',skin=4,hair='#6B3A2A',shirt='#8C8FC9',bg='#E6E7F5'),'rami':dict(kind='short',skin=5,hair='#3A2A22',shirt='#5E8B6E',bg='#E2EEE6'),
 'dina':dict(kind='hijab',skin=4,hair='#4F6D8F',shirt='#4F6D8F',bg='#DCE7F1'),'mona':dict(kind='hijab',skin=0,hair='#6E9C82',shirt='#6E9C82',bg='#E2EEE6')}
_n=[0]
def P(name,s=40):
    _n[0]+=1; return avatar(s=s,uid=f'{name}{_n[0]}',**PEOPLE[name])
TONES=[('#A9C6E0','#DDE9F3'),('#C9B8A6','#EEE7DF'),('#D9AEB5','#F4E3E5'),('#A9C7B3','#E2EEE6'),('#D6BE7E','#F4EDD6'),('#B3B6DD','#E6E7F5')]
def circ_img(i,s=44):
    a,b=TONES[i]
    return f'<svg width="{s}" height="{s}" viewBox="0 0 44 44" aria-hidden="true" style="flex-shrink:0"><circle cx="22" cy="22" r="22" fill="{b}"/><circle cx="22" cy="22" r="11" fill="{a}"/></svg>'
