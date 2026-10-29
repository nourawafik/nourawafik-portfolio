from kit import *

def kpi(label,val,delta,good=True,sub=''):
    col='var(--ok)' if good else 'var(--err)'
    return f'''<div class="card" style="flex:1;padding:16px 18px;box-shadow:var(--shadow)"><div class="m" style="font-size:13px;font-weight:500">{label}</div>
<div style="display:flex;align-items:baseline;gap:10px;margin-top:6px"><span class="h num" style="font-size:28px">{val}</span><span style="font-size:12.5px;font-weight:600;color:{col};display:flex;align-items:center">{delta}</span></div><div class="s" style="font-size:12px;margin-top:2px">{sub}</div></div>'''

def head(title,sub,actions):
    return f'<div style="display:flex;align-items:flex-end;gap:12px"><div style="flex:1"><div class="h" style="font-size:24px">{title}</div><div class="m" style="margin-top:4px">{sub}</div></div>{actions}</div>'

# ---------- 1. Admin overview ----------
def admin(dark=False):
    k=''.join([kpi('Appointments today','128','↑ 6%',True,'vs last Tuesday'),kpi('No-show rate, this week','3.1%','↓ 0.8 pt',True,'across all clinics'),
               kpi('Open claims','42','$18,240',True,'waiting on payers').replace('color:var(--ok)','color:var(--muted)'),kpi('Providers on schedule','64 / 71','7 off',True,'this week').replace('color:var(--ok)','color:var(--muted)')])
    days=['Mon','Tue','Wed','Thu','Fri','Sat']
    comp=[108,74,0,0,0,0]; nos=[4,3,0,0,0,0]; sch=[0,51,121,134,96,38]
    W,H,M=560,150,160; bw=40; gap=(W-6*bw)/6; bars=''
    for j in range(6):
        x=gap/2+j*(bw+gap); y=H
        for v,kind in ((comp[j],'c'),(nos[j],'n'),(sch[j],'s')):
            if not v: continue
            hh=v/M*H; y-=hh
            if kind=='c': bars+=f'<rect x="{x:.1f}" y="{y:.1f}" width="{bw}" height="{hh:.1f}" fill="var(--c1)"/>'
            elif kind=='n': bars+=f'<rect x="{x:.1f}" y="{y:.1f}" width="{bw}" height="{hh:.1f}" fill="var(--warn)"/>'
            else: bars+=f'<rect x="{x+1:.1f}" y="{y+1:.1f}" width="{bw-2}" height="{hh-2:.1f}" fill="var(--ps)" stroke="var(--c1)" stroke-width="1.5" stroke-dasharray="4 3"/>'
        tot=comp[j]+nos[j]+sch[j]
        bars+=f'<text x="{x+bw/2:.1f}" y="{y-7:.1f}" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)" font-family="Plus Jakarta Sans">{tot}</text>'
    tx=gap/2+1*(bw+gap)
    bars=f'<rect x="{tx-gap/2+4:.1f}" y="-4" width="{bw+gap-8:.1f}" height="{H+4}" rx="8" fill="var(--sunk)"/>'+bars
    grid=''.join(f'<line x1="0" x2="{W}" y1="{H-v/M*H:.1f}" y2="{H-v/M*H:.1f}" stroke="var(--line)"/>' for v in (0,50,100,150))
    xl=''.join(f'<span style="flex:1;text-align:center;font-size:12px;{"font-weight:700;color:var(--ink)" if j==1 else "color:var(--subtle)"}">{d}{" · Today" if j==1 else ""}</span>' for j,d in enumerate(days))
    lg=lambda st,t:f'<span class="s" style="display:flex;gap:6px;align-items:center;font-size:12px;margin-inline-start:6px"><span style="width:11px;height:11px;border-radius:3px;{st}"></span>{t}</span>'
    chart=f'''<div class="card" style="flex:1.7;padding:18px 20px;box-shadow:var(--shadow)"><div style="display:flex;align-items:center;gap:8px"><div class="h" style="flex:1;font-size:16px">Appointments this week</div>
{lg("background:var(--c1)","Completed")}{lg("background:var(--warn)","No-show")}{lg("background:var(--ps);border:1.5px dashed var(--c1)","Scheduled")}
<span class="btn" style="height:32px;font-size:12.5px;margin-inline-start:8px">All clinics {i('chevd',15)}</span></div>
<svg width="{W}" height="{H+4}" viewBox="0 -4 {W} {H+4}" style="display:block;margin-top:18px">{grid}{bars}</svg><div style="display:flex;width:{W}px;margin-top:6px">{xl}</div></div>'''
    att=[('err','alert','7 claims denied by payers','Most for missing prior authorization','Review'),('warn','cal','12 appointments not confirmed','For tomorrow, reminders sent','Send again'),
         ('warn','steth','3 providers have no availability','Next week, Lakeview and Midtown','View'),('err','ticket','2 urgent support tickets','Oldest opened 3 hours ago','Open'),('err','link','Insurance sync failed','Lakeview Clinic, 08:12 today','Retry')]
    rows=''.join(f'<div style="display:flex;align-items:center;gap:12px;padding:11px 0;{"border-top:1px solid var(--line)" if j else ""}"><span class="{c}" style="width:34px;height:34px;border-radius:10px;display:flex;align-items:center;justify-content:center">{i(ic,18)}</span><div style="flex:1;min-width:0"><div style="font-weight:600;font-size:13.5px">{t}</div><div class="s" style="font-size:12px;margin-top:1px">{s}</div></div><span style="font-weight:600;font-size:13px;color:var(--p)">{a}</span></div>' for j,(c,ic,t,s,a) in enumerate(att))
    need=f'<div class="card" style="flex:1;padding:16px 20px;box-shadow:var(--shadow)"><div style="display:flex;align-items:center"><div class="h" style="flex:1;font-size:16px">Needs attention</div><span class="pill err">5</span></div><div style="margin-top:6px">{rows}</div></div>'
    cl=[('Northside Clinic','NC',0,18,34,'86%',.86,9,'ok','Active'),('Lakeview Clinic','LC',1,12,22,'71%',.71,14,'err','Sync issue'),('Midtown Behavioral','MB',2,15,29,'78%',.78,6,'ok','Active'),('Riverbend Health','RH',3,9,17,'64%',.64,13,'warn','Onboarding')]
    tr=''.join(f'<tr><td><div style="display:flex;align-items:center;gap:10px">{av(ini,kk,30,dark)}<span style="font-weight:600">{n}</span></div></td><td class="num">{p}</td><td class="num">{t}</td><td><div style="display:flex;align-items:center;gap:10px"><div style="width:120px;height:6px;border-radius:9px;background:var(--sunk)"><div style="width:{f*100:.0f}%;height:6px;border-radius:9px;background:var(--c1)"></div></div><span class="num" style="font-size:12.5px">{u}</span></div></td><td class="num">{c}</td><td><span class="pill {st}">{sl}</span></td></tr>' for n,ini,kk,p,t,u,f,c,st,sl in cl)
    table=f'<div class="card" style="overflow:hidden;box-shadow:var(--shadow)"><div style="display:flex;align-items:center;padding:14px 18px"><div class="h" style="flex:1;font-size:16px">Clinics</div><span style="font-weight:600;font-size:13px;color:var(--p)">View all 52</span></div><table><tr><th>Clinic</th><th>Providers</th><th>Today</th><th>Utilization</th><th>Open claims</th><th>Status</th></tr>{tr}</table></div>'
    inner=head('Good morning, Dana','Tuesday, March 17 · All clinics',f'<span class="btn">{i("doc",16)}Export</span><span class="btn p">{i("plus",16)}New appointment</span>')+f'<div style="display:flex;gap:14px">{k}</div><div style="display:flex;gap:14px">{chart}{need}</div>{table}'
    return shell(inner,dark,'Overview','Admin',('DR','Dana Reyes'))

# ---------- 2. Provider overview ----------
def provider(dark=False):
    ses=[('10:00','SJ',0,'Sarah Johnson','Follow-up · 30 min','next'),('10:45','MC',1,'Michael Chen','New patient · 60 min','ok'),('12:00','AR',2,'Ana Ruiz','Medication review · 20 min','ok'),
         ('14:30','JT',3,'James Turner','Follow-up · 30 min','warn'),('15:15','PK',4,'Priya Kapoor','Follow-up · 30 min','ok'),('16:00','DW',5,'Daniel White','Therapy · 50 min','ok')]
    def row(t,ini,k,n,s,st,j):
        nx=st=='next'
        stp={'next':'<span class="pill info">In 25 min</span>','ok':'<span class="pill ok">Confirmed</span>','warn':'<span class="pill warn">Not confirmed</span>'}[st]
        act=f'<span class="btn p" style="height:34px">{i("video",16)}Join</span><span class="btn" style="height:34px">Open chart</span>' if nx else '<span class="btn g" style="height:34px;padding:0 8px">'+i('dots',18)+'</span>'
        return f'<div style="display:flex;align-items:center;gap:14px;padding:12px 16px;border-radius:12px;{"background:var(--ps);box-shadow:inset 3px 0 0 var(--p)" if nx else ""}{";border-top:1px solid var(--line);border-radius:0" if j and not nx else ""}"><span class="num" style="width:46px;font-weight:700">{t}</span>{av(ini,k,36,dark)}<div style="flex:1"><div style="font-weight:600">{n}</div><div class="s" style="font-size:12.5px">{s}</div></div>{stp}<div style="display:flex;gap:8px">{act}</div></div>'
    rows=''.join(row(*x,j) for j,x in enumerate(ses))
    sched=f'<div class="card" style="flex:1.6;padding:16px 12px;box-shadow:var(--shadow)"><div style="display:flex;align-items:center;padding:0 6px 10px"><div class="h" style="flex:1;font-size:16px">Today’s schedule</div><span class="btn" style="height:32px;font-size:12.5px">Day {i("chevd",15)}</span></div>{rows}</div>'
    nextp=f'''<div class="card" style="padding:18px 20px;box-shadow:var(--shadow)"><div class="s" style="font-size:12px;font-weight:600;letter-spacing:.04em">NEXT PATIENT · 10:00</div>
<div style="display:flex;align-items:center;gap:12px;margin-top:10px">{av('SJ',0,44,dark)}<div><div class="h" style="font-size:17px">Sarah Johnson</div><div class="s" style="font-size:12.5px">34 · Follow-up · Last visit Mar 3</div></div></div>
<div style="margin-top:14px;padding:12px 14px;border-radius:12px;background:var(--sunk)"><div style="display:flex;align-items:center;gap:8px"><span class="pill aitag">{i('spark',13)}AI summary</span><span class="s" style="font-size:12px">from the Mar 3 note</span></div>
<div style="font-size:13.5px;line-height:1.6;margin-top:8px">Reports better sleep since starting the evening routine. Work stress is still the main trigger. Plan was to review medication at this visit.</div></div>
<div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap"><span class="pill neu">{i('pill',13)}Sertraline 50 mg</span><span class="pill neu">F41.1</span><span class="pill neu">Insurance verified</span></div></div>'''
    rv=[('MC','Michael Chen','AI diagnosis draft',1),('AR','Ana Ruiz','Session summary',2),('DW','Daniel White','Smart note',5)]
    rvr=''.join(f'<div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-top:1px solid var(--line)">{av(a,k,30,dark)}<div style="flex:1"><div style="font-weight:600;font-size:13.5px">{n}</div><div class="s" style="font-size:12px">{t}</div></div><span style="font-weight:600;font-size:13px;color:var(--p)">Review</span></div>' for a,n,t,k in rv)
    review=f'<div class="card" style="padding:16px 20px;box-shadow:var(--shadow)"><div style="display:flex;align-items:center;gap:8px"><div class="h" style="flex:1;font-size:16px">Waiting for your approval</div><span class="pill aitag">3</span></div><div class="s" style="font-size:12.5px;margin:4px 0 6px">AI drafts are never saved to the chart until you approve them.</div>{rvr}</div>'
    inner=head('Today, Tuesday March 17','6 sessions · the next one starts in 25 minutes',f'<span class="btn">{i("cal",16)}Availability</span><span class="btn p">{i("plus",16)}New note</span>')+f'<div style="display:flex;gap:16px;align-items:flex-start">{sched}<div style="flex:1;display:flex;flex-direction:column;gap:16px">{nextp}{review}</div></div>'
    return shell(inner,dark,'Overview','Provider',('LM','Dr. Leah Morgan'))

TYPES={'new':('New patient','var(--info)','var(--info-bg)'),'fu':('Follow-up','var(--ok)','var(--ok-bg)'),'med':('Medication review','var(--warn)','var(--warn-bg)'),'th':('Therapy','var(--muted)','var(--sunk)')}
def seg(items,on,h=36):
    return '<div style="display:flex;padding:3px;border-radius:10px;background:var(--sunk);gap:2px">'+''.join(f'<span style="padding:0 14px;height:{h-6}px;display:flex;align-items:center;border-radius:8px;font-size:13px;font-weight:600;{"background:var(--panel);color:var(--ink);box-shadow:0 1px 2px rgba(0,0,0,.08)" if j==on else "color:var(--muted)"}">{x}</span>' for j,x in enumerate(items))+'</div>'
def chip(t): return f'<span class="btn" style="height:36px;font-size:13px">{t}{i("chevd",15)}</span>'
def dl(rows): return ''.join(f'<div style="display:flex;justify-content:space-between;gap:12px;padding:9px 0;border-top:1px solid var(--line);font-size:13.5px"><span class="s">{a}</span><span style="font-weight:600;text-align:end">{b}</span></div>' for a,b in rows)

# ---------- 3. Appointments ----------
def appointments(dark=False):
    days=['Mon 16','Tue 17','Wed 18','Thu 19','Fri 20','Sat 21']; hours=list(range(9,18)); RH=64
    ev=[(0,9,.5,'fu','Priya Kapoor'),(0,10,1,'new','Noah Brooks'),(0,13,.5,'med','Ana Ruiz'),(0,15,.83,'th','Daniel White'),
        (1,10,.5,'fu','Sarah Johnson'),(1,10.75,1,'new','Michael Chen'),(1,12,.34,'med','Ana Ruiz'),(1,14.5,.5,'fu','James Turner'),(1,15.25,.5,'fu','Priya Kapoor'),(1,16,.83,'th','Daniel White'),
        (2,9.5,.5,'fu','Lily Evans'),(2,11,1,'new','Omar Haddad'),(2,14,.5,'fu','Grace Kim'),(3,10,.83,'th','Ethan Cole'),(3,13,.5,'fu','Sarah Lee'),(3,15,1,'new','Ava Martin'),
        (4,9,.5,'med','Leo Garcia'),(4,11,.5,'fu','Mia Patel'),(4,12,.83,'th','Ella Scott'),(5,10,.5,'fu','Jack Hill')]
    cw=124; grid=''
    for k,h in enumerate(hours): grid+=f'<div class="s num" style="position:absolute;left:0;top:{k*RH-7}px;width:48px;font-size:11.5px;text-align:end">{h if h<=12 else h-12} {"AM" if h<12 else "PM"}</div><div style="position:absolute;left:58px;right:0;top:{k*RH}px;border-top:1px solid var(--line)"></div>'
    evs=''
    for d,st,du,t,n in ev:
        lab,fg,bg=TYPES[t]; sel=(d==1 and n=='Sarah Johnson')
        top=(st-9)*RH; hh=du*RH-4
        hh_=int(st); mm=round((st-hh_)*60)
        evs+=f'<div style="position:absolute;left:{58+d*cw+4}px;top:{top+2}px;width:{cw-8}px;height:{hh:.0f}px;border-radius:8px;background:{bg};border-inline-start:3px solid {fg};padding:5px 8px;overflow:hidden;{"box-shadow:0 0 0 2px var(--p),var(--shadow)" if sel else ""}"><div style="font-size:12px;font-weight:700;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">{n}</div>{f"<div class=num style=font-size:11px;color:{fg};font-weight:600>{hh_ if hh_<=12 else hh_-12}:{mm:02d}</div>" if du>.6 else ""}</div>'
    now=(10.58-9)*RH
    hdr=''.join(f'<div style="width:{cw}px;text-align:center;padding:10px 0;font-size:13px;font-weight:600;{"color:var(--p)" if j==1 else "color:var(--muted)"}">{d}</div>' for j,d in enumerate(days))
    cal=f'''<div class="card" style="flex:1;box-shadow:var(--shadow);overflow:hidden;display:flex;flex-direction:column"><div style="display:flex;padding-inline-start:58px;border-bottom:1px solid var(--line)">{hdr}</div>
<div style="position:relative;flex:1;margin:12px 0 0;">{grid}{evs}<div style="position:absolute;left:{58+cw}px;width:{cw}px;top:{now}px;border-top:2px solid var(--err)"><span style="position:absolute;left:-5px;top:-5px;width:8px;height:8px;border-radius:50%;background:var(--err)"></span></div></div></div>'''
    leg=''.join(f'<span class="s" style="display:flex;align-items:center;gap:6px;font-size:12.5px"><span style="width:10px;height:10px;border-radius:3px;background:{fg}"></span>{lab}</span>' for lab,fg,bg in TYPES.values())
    panel=f'''<div class="card" style="width:340px;flex-shrink:0;padding:18px 20px;box-shadow:var(--shadow);display:flex;flex-direction:column">
<div style="display:flex;align-items:center"><div class="h" style="flex:1;font-size:16px">Appointment</div><span class="btn g" style="width:32px;height:32px;padding:0">{i('x',18)}</span></div>
<div style="display:flex;align-items:center;gap:12px;margin:12px 0 14px">{av('SJ',0,44,dark)}<div><div class="h" style="font-size:16px">Sarah Johnson</div><div class="s" style="font-size:12.5px">PT-2041 · 34</div></div></div>
<div style="display:flex;gap:6px;margin-bottom:6px"><span class="pill ok">Confirmed</span><span class="pill" style="background:var(--ok-bg);color:var(--ok)">Follow-up</span><span class="pill neu">{i('video',13)}Video</span></div>
{dl([('Date','Tue, Mar 17'),('Time','10:00 – 10:30 AM'),('Provider','Dr. Leah Morgan'),('Clinic','Northside Clinic'),('Insurance','Verified'),('Reminders','Email sent · SMS 1 day before')])}
<div style="margin-top:14px;padding:12px;border-radius:10px;background:var(--sunk);font-size:13px;line-height:1.55"><div class="s" style="font-size:12px;font-weight:600;margin-bottom:4px">Reason for visit</div>Medication review and follow-up on sleep.</div>
<div style="margin-top:auto;display:flex;flex-direction:column;gap:8px;padding-top:16px"><span class="btn p" style="height:42px">{i('video',17)}Join video session</span><div style="display:flex;gap:8px"><span class="btn" style="flex:1">Reschedule</span><span class="btn" style="flex:1;color:var(--err)">Cancel</span></div></div></div>'''
    bar=f'<div style="display:flex;align-items:center;gap:10px">{seg(["Day","Week","Month","List"],1)}<span class="btn" style="width:36px;padding:0;height:36px">{i("chev",16,"transform:scaleX(-1)")}</span><span class="h num" style="font-size:15px">Mar 16 – 21, 2026</span><span class="btn" style="width:36px;padding:0;height:36px">{i("chev",16)}</span><span class="btn" style="height:36px">Today</span><div style="flex:1"></div>{chip("Northside Clinic")}{chip("All providers")}{chip("All types")}</div>'
    inner=head('Appointments',f'<div style="display:flex;gap:16px">{leg}</div>',f'<span class="btn p">{i("plus",16)}New appointment</span>')+bar+f'<div style="flex:1;display:flex;gap:16px;min-height:0">{cal}{panel}</div>'
    return shell(inner,dark,'Appointments','Admin',('DR','Dana Reyes'))

# ---------- 4. Patient profile ----------
def ptop(dark,tab=0):
    tabs=''.join(f'<span style="padding:12px 2px;margin-inline-end:24px;font-weight:600;{"color:var(--ink);box-shadow:inset 0 -2px 0 var(--p)" if j==tab else "color:var(--subtle)"}">{t}</span>' for j,t in enumerate(['Overview','Appointments','Notes','Prescriptions','Billing','Documents']))
    return f'''<div class="card" style="padding:18px 22px 0;box-shadow:var(--shadow)"><div style="display:flex;align-items:center;gap:14px">{av('SJ',0,56,dark)}<div style="flex:1"><div style="display:flex;align-items:center;gap:10px"><span class="h" style="font-size:22px">Sarah Johnson</span><span class="pill ok">Active</span></div>
<div class="s" style="font-size:13px;margin-top:3px;display:flex;gap:14px"><span>PT-2041</span><span>34 · she/her</span><span>DOB Aug 2, 1991</span><span>(555) 234-5678</span><span>Northside Clinic</span></div></div>
<span class="btn">{i('cal',16)}Book</span><span class="btn">{i('note',16)}New note</span><span class="btn p">{i('video',16)}Join session</span></div>
<div style="display:flex;margin-top:12px;border-top:1px solid var(--line)">{tabs}</div></div>'''
def patient(dark=False,admin=False):
    card=lambda t,body,extra='':f'<div class="card" style="padding:16px 20px;box-shadow:var(--shadow)"><div style="display:flex;align-items:center;margin-bottom:6px"><div class="h" style="flex:1;font-size:15px">{t}</div>{extra}</div>{body}</div>'
    up=f'<div style="display:flex;align-items:center;gap:12px;padding:12px;border-radius:12px;background:var(--ps)"><div style="text-align:center;width:46px"><div class="s" style="font-size:11px;font-weight:700">TUE</div><div class="h num" style="font-size:20px">17</div></div><div style="flex:1"><div style="font-weight:600">Follow-up with Dr. Leah Morgan</div><div class="s" style="font-size:12.5px">10:00 – 10:30 AM · Video</div></div><span class="pill info">In 25 min</span></div>'
    dx=dl([('F41.1 Generalized anxiety disorder','Since Jan 2026'),('G47.00 Insomnia, unspecified','Since Feb 2026')])
    meds=''.join(f'<div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-top:1px solid var(--line)"><span class="neu" style="width:32px;height:32px;border-radius:9px;display:flex;align-items:center;justify-content:center">{i("pill",16)}</span><div style="flex:1"><div style="font-weight:600;font-size:13.5px">{a}</div><div class="s" style="font-size:12px">{b}</div></div><span class="pill {c}">{d}</span></div>' for a,b,c,d in [('Sertraline 50 mg','Once daily · started Jan 20','ok','Active'),('Hydroxyzine 25 mg','As needed for sleep','warn','Refill due')])
    notes=[('Mar 3','Clinical note','Dr. Leah Morgan','neu',''),('Mar 3','Session summary','Approved by Dr. Morgan','aitag','AI'),('Feb 17','Prescription refill','Sertraline 50 mg · 30 days','neu',''),('Feb 17','Clinical note','Dr. Leah Morgan','neu',''),('Jan 20','Intake assessment','New patient · 60 min','neu','')]
    tl=''.join(f'<div style="display:flex;gap:14px;padding:11px 0;{"border-top:1px solid var(--line)" if j else ""}"><span class="s num" style="width:44px;font-size:12.5px;font-weight:600;padding-top:2px">{d}</span><div style="flex:1"><div style="display:flex;align-items:center;gap:8px;font-weight:600;font-size:13.5px">{t}{f"<span class=\"pill aitag\" style=\"height:20px\">{i(chr(115)+chr(112)+chr(97)+chr(114)+chr(107),12)}AI · approved</span>" if ai else ""}</div><div class="s" style="font-size:12px;margin-top:2px">{s}</div></div>{i("chev",16,"color:var(--subtle)")}</div>' for j,(d,t,s,c,ai) in enumerate(notes))
    bill=dl([('Balance','$0.00'),('Insurance','Verified · renews Dec 2026'),('Last payment','$40.00 copay · Mar 3')])
    inner=ptop(dark)+f'''<div style="display:flex;gap:16px;align-items:flex-start"><div style="flex:1;display:flex;flex-direction:column;gap:16px">{card('Upcoming',up)}{card('Diagnoses',dx,'<span style="font-weight:600;font-size:13px;color:var(--p)">Edit</span>')}{card('Medications',meds,'<span style="font-weight:600;font-size:13px;color:var(--p)">Prescribe</span>')}</div>
<div style="flex:1.2;display:flex;flex-direction:column;gap:16px">{card('Notes and activity',tl,'<span style="font-weight:600;font-size:13px;color:var(--p)">View all</span>')}{card('Billing',bill)}</div></div>'''
    return shell(inner,dark,'Patients','Admin',('DR','Dana Reyes')) if admin else shell(inner,dark,'Patients','Provider',('LM','Dr. Leah Morgan'))

# ---------- 5. AI diagnosis review ----------
def aidx(dark=False):
    base=patient(dark).replace('Sarah Johnson','Michael Chen').replace('>SJ<','>MC<').replace('PT-2041','PT-2187')
    S=[('Chief complaint','Persistent anxiety and work-related stress for about 4 months.','Intake form','ok'),
       ('History of present illness','Worry most days, trouble falling asleep, tension headaches. Symptoms got worse after a role change at work in November.','Session transcript · 10:52','ok'),
       ('Mental status exam','Alert and oriented x3. Mood anxious, affect congruent. No suicidal ideation reported.','Session transcript · 11:20','edit'),
       ('Diagnosis','F41.1 Generalized anxiety disorder','Matches HPI and GAD-7 score of 14','todo'),
       ('Treatment plan','Weekly CBT for 8 weeks. Stress management techniques. Review medication at the next visit.','Provider’s note · 11:38','todo'),
       ('Billing code','99214 · Established patient, 25 min','Session length','todo')]
    def sec(t,b,src,st):
        if st=='edit':
            body=f'<div style="border:2px solid var(--p);border-radius:10px;padding:10px 12px;font-size:13.5px;line-height:1.55;background:var(--panel)">{b} Speech normal in rate and volume.<span style="display:inline-block;width:2px;height:16px;background:var(--p);vertical-align:middle"></span></div><div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px"><span class="btn" style="height:32px">Cancel</span><span class="btn p" style="height:32px">Save</span></div>'
            badge='<span class="pill info">Editing</span>'
        else:
            body=f'<div style="font-size:13.5px;line-height:1.55">{b}</div>'
            badge='<span class="pill ok">'+i('check',13)+'Accepted</span>' if st=='ok' else f'<span style="display:flex;gap:6px"><span class="btn" style="height:30px;font-size:12.5px;padding:0 10px">{i("edit",14)}Edit</span><span class="btn" style="height:30px;font-size:12.5px;padding:0 10px;color:var(--ok)">{i("check",14)}Accept</span></span>'
        return f'<div style="padding:14px 0;border-top:1px solid var(--line)"><div style="display:flex;align-items:center;gap:8px;margin-bottom:6px"><span style="flex:1;font-weight:700;font-size:13.5px">{t}</span>{badge}</div>{body}<div class="s" style="font-size:12px;margin-top:6px;display:flex;align-items:center;gap:5px">{i("link",13)}Source: {src}</div></div>'
    secs=''.join(sec(*x) for x in S)
    drawer=f'''<div style="position:absolute;inset:0;background:rgba(10,16,14,{.6 if dark else .32})"></div>
<div class="card" style="position:absolute;top:0;right:0;bottom:0;width:600px;border-radius:0;border-width:0 0 0 1px;display:flex;flex-direction:column;box-shadow:-20px 0 60px -20px rgba(0,0,0,.35)">
<div style="padding:20px 24px 14px;border-bottom:1px solid var(--line)"><div style="display:flex;align-items:center;gap:10px"><span class="pill aitag">{i('spark',13)}AI draft</span><span class="s" style="font-size:12.5px">Not in the chart yet</span><div style="flex:1"></div><span class="btn g" style="width:34px;padding:0">{i('x',18)}</span></div>
<div class="h" style="font-size:20px;margin-top:10px">Diagnosis draft · Michael Chen</div><div class="s" style="font-size:13px;margin-top:2px">From the new patient session on Mar 17, 10:45 · Dr. Leah Morgan</div>
<div style="display:flex;align-items:center;gap:10px;margin-top:14px"><div style="flex:1;height:6px;border-radius:9px;background:var(--sunk)"><div style="width:33%;height:6px;border-radius:9px;background:var(--p)"></div></div><span class="num" style="font-size:12.5px;font-weight:600">2 of 6 reviewed</span></div></div>
<div style="flex:1;overflow:hidden;padding:0 24px">{secs}</div>
<div style="padding:14px 24px;border-top:1px solid var(--line);display:flex;align-items:center;gap:10px;background:var(--panel)"><span class="s" style="flex:1;font-size:12.5px;display:flex;gap:6px;align-items:center">{i('shield',15)}Review every section before it’s added to the chart.</span><span class="btn">Discard</span><span class="btn p" style="opacity:.45">Approve and add to chart</span></div></div>'''
    return base[:base.rindex('</div></div>')]+drawer+'</div></div>'

# ---------- 6. Voice ----------
PTS=[('SJ',0,'Sarah Johnson','PT-2041','(555) 234-5678','Aug 2, 1991','Dr. Leah Morgan','Mar 3','ok','Active'),
     ('MC',1,'Michael Chen','PT-2187','(555) 610-2290','Jan 14, 1988','Dr. Leah Morgan','Mar 17','ok','Active'),
     ('SJ',2,'Sarah Johnson','PT-2312','(555) 871-0034','May 9, 1978','Dr. Omar Haddad','Feb 24','ok','Active'),
     ('AR',3,'Ana Ruiz','PT-1966','(555) 402-7781','Nov 30, 1995','Dr. Leah Morgan','Mar 17','ok','Active'),
     ('JT',4,'James Turner','PT-2208','(555) 390-1145','Jun 21, 1983','Dr. Grace Park','Mar 10','warn','Pending intake'),
     ('PK',5,'Priya Kapoor','PT-2099','(555) 778-4410','Feb 5, 1990','Dr. Leah Morgan','Mar 9','ok','Active'),
     ('DW',0,'Daniel White','PT-1874','(555) 225-9087','Oct 17, 1979','Dr. Omar Haddad','Mar 16','ok','Active'),
     ('NB',1,'Noah Brooks','PT-2330','(555) 641-3302','Apr 3, 2001','Dr. Grace Park','Mar 16','neu','Inactive'),
     ('LE',2,'Lily Evans','PT-2275','(555) 509-8812','Dec 12, 1986','Dr. Grace Park','Mar 11','ok','Active')]
TXT=['Open Sarah Johnson’s profile']
PICK=[0]
def hud(stage,dark):
    wave=''.join(f'<span style="width:4px;border-radius:4px;background:var(--onp);height:{h}px"></span>' for h in ([6,10,16,22,14,8,18,12,6] if stage else [6,6,6,6,6,6,6,6,6]))
    mic=f'<span style="width:52px;height:52px;border-radius:50%;background:var(--p);display:flex;align-items:center;justify-content:center;gap:3px;flex-shrink:0;box-shadow:0 0 0 8px var(--ps)">{wave if stage in (1,2) else i("mic",24,"color:var(--onp)")}</span>'
    if stage==0:
        tips=''.join(f'<div style="display:flex;gap:8px;align-items:center;font-size:13px;padding:5px 0"><span class="s">“</span>{t}<span class="s">”</span></div>' for t in ['Open Sarah Johnson’s profile','Show today’s appointments','Add a note for Michael Chen','Filter by Dr. Leah Morgan'])
        body=f'<div style="flex:1"><div style="font-weight:700">Press the mic, or hold Space, and say what you need</div><div class="s" style="font-size:12px;margin:2px 0 6px">Try saying</div>{tips}</div>'
    elif stage==1:
        body='<div style="flex:1"><div class="s" style="font-size:12px;font-weight:600">LISTENING</div><div style="font-size:18px;font-weight:600;margin-top:4px">“'+TXT[0]+'<span style="display:inline-block;width:2px;height:18px;background:var(--p);vertical-align:middle;margin-inline-start:2px"></span>”</div></div>'
    elif stage==2:
        body='<div style="flex:1"><div style="font-weight:700;font-size:15px">2 patients match “Sarah Johnson”</div><div class="m" style="font-size:13.5px;margin-top:3px">Say “one” or “two”, or say the patient ID.</div></div><span class="btn" style="height:34px">Cancel</span>'
    else:
        body='<div style="flex:1"><div style="font-weight:700;font-size:15px">Opened Sarah Johnson · PT-2041</div><div class="m" style="font-size:13.5px;margin-top:3px">Say “join session” or “new note” next.</div></div>'
    return f'<div class="card" style="position:absolute;left:50%;transform:translateX(-50%);bottom:24px;width:580px;padding:16px 18px;display:flex;align-items:center;gap:16px;box-shadow:0 24px 60px -20px rgba(0,0,0,.45);z-index:5">{mic}{body}</div>'
def plist(dark,stage):
    def row(j,p):
        ini,k,n,pid,ph,dob,prov,lv,st,sl=p
        hit=stage==2 and n=='Sarah Johnson'; num=1 if pid=='PT-2041' else 2
        if hit and PICK[0] and num==1: hit='pick'
        badge=f'<span style="width:24px;height:24px;border-radius:50%;background:var(--p);color:var(--onp);font-size:12px;font-weight:800;display:inline-flex;align-items:center;justify-content:center">{num}</span>' if hit else f'<span style="width:16px;height:16px;border:1.5px solid var(--line);border-radius:4px;display:inline-block"></span>'
        style=('background:var(--ps);box-shadow:inset 3px 0 0 var(--p);' if hit=='pick' else 'background:var(--ps);') if hit else ''
        dim='opacity:.45;' if stage==2 and not hit else ''
        return f'<tr style="{style}{dim}"><td style="width:44px">{badge}</td><td><div style="display:flex;align-items:center;gap:10px">{av(ini,k,30,dark)}<span style="font-weight:600">{n}</span></div></td><td class="mono" style="font-size:12.5px">{pid}</td><td class="num">{ph}</td><td class="num">{dob}</td><td>{prov}</td><td class="num">{lv}</td><td><span class="pill {st}">{sl}</span></td></tr>'
    tr=''.join(row(j,p) for j,p in enumerate(PTS))
    bar=f'<div style="display:flex;align-items:center;gap:10px"><div style="width:340px;height:36px;border-radius:10px;border:1px solid var(--line);background:var(--panel);display:flex;align-items:center;gap:8px;padding:0 12px;color:var(--subtle)">{i("search",17)}Search by name, ID or phone</div>{chip("All statuses")}{chip("All providers")}{chip("Last visit")}<div style="flex:1"></div>{chip("Sort: Recent")}</div>'
    table=f'<div class="card" style="overflow:hidden;box-shadow:var(--shadow)"><table><tr><th></th><th>Patient</th><th>ID</th><th>Phone</th><th>Date of birth</th><th>Provider</th><th>Last visit</th><th>Status</th></tr>{tr}</table><div class="s" style="display:flex;align-items:center;padding:12px 16px;font-size:12.5px"><span style="flex:1">Showing 1–9 of 1,284</span>Page 1 of 143</div></div>'
    return head('Patients','1,284 patients · All clinics',f'<span class="btn">{i("doc",16)}Export</span><span class="btn p">{i("plus",16)}New patient</span>')+bar+table+hud(stage,dark)
def voice(dark=False,stage=2):
    if stage==3:
        b=patient(dark,True); return b[:b.rindex('</main>')]+hud(3,dark)+b[b.rindex('</main>'):]
    return shell(plist(dark,stage),dark,'Patients','Admin',('DR','Dana Reyes'),voice=stage in(1,2))
def voice0(d=False): return voice(d,0)
def voice1(d=False): return voice(d,1)
def voice2(d=False): return voice(d,2)
def voice3(d=False): return voice(d,3)

# ---------- 7. Reports ----------
def reports(dark=False):
    wk=['Dec 22','Dec 29','Jan 5','Jan 12','Jan 19','Jan 26','Feb 2','Feb 9','Feb 16','Feb 23','Mar 2','Mar 9']
    a=[512,468,590,604,622,641,655,648,671,690,702,716]; ns=[24,27,25,22,23,21,22,20,19,18,17,16]
    W,H=700,220; X=lambda j:20+j*(W-40)/11; Y=lambda v:H-(v-400)/(760-400)*H
    pa=' '.join(f'{X(j):.1f},{Y(v):.1f}' for j,v in enumerate(a))
    area=f'M{X(0):.1f},{H} L'+' L'.join(f'{X(j):.1f},{Y(v):.1f}' for j,v in enumerate(a))+f' L{X(11):.1f},{H} Z'
    Y2=lambda v:H-(v/40)*H; pn=' '.join(f'{X(j):.1f},{Y2(v):.1f}' for j,v in enumerate(ns))
    grid=''.join(f'<line x1="0" x2="{W}" y1="{H*k/4:.1f}" y2="{H*k/4:.1f}" stroke="var(--line)"/>' for k in range(5))
    dots=''.join(f'<circle cx="{X(j):.1f}" cy="{Y(v):.1f}" r="3.5" fill="var(--panel)" stroke="var(--c1)" stroke-width="2"/>' for j,v in enumerate(a))
    xl=''.join(f'<span class="s" style="position:absolute;left:{X(j)-22:.0f}px;width:44px;text-align:center;font-size:11px">{w}</span>' for j,w in enumerate(wk) if j%2==0)
    tip=f'<div class="card" style="position:absolute;left:{X(10)-150:.0f}px;top:{H-96:.0f}px;padding:10px 12px;font-size:12.5px;box-shadow:var(--shadow);width:150px"><div style="font-weight:700;margin-bottom:4px">Week of Mar 2</div><div style="display:flex;justify-content:space-between"><span class="s">Completed</span><span class="num" style="font-weight:600">702</span></div><div style="display:flex;justify-content:space-between"><span class="s">No-shows</span><span class="num" style="font-weight:600">17</span></div></div>'
    chart=f'''<div class="card" style="flex:1.8;padding:18px 20px;box-shadow:var(--shadow)"><div style="display:flex;align-items:center;gap:14px"><div class="h" style="flex:1;font-size:16px">Completed appointments per week</div>
<span class="s" style="display:flex;gap:6px;align-items:center;font-size:12px"><span style="width:14px;height:3px;border-radius:3px;background:var(--c1)"></span>Completed</span></div>
<div style="position:relative;margin-top:16px;height:{H+26}px"><svg width="{W}" height="{H}" style="display:block;overflow:visible">{grid}<path d="{area}" fill="var(--c1)" opacity=".10"/><polyline points="{pa}" fill="none" stroke="var(--c1)" stroke-width="2.5"/>{dots}<line x1="{X(10):.1f}" x2="{X(10):.1f}" y1="0" y2="{H}" stroke="var(--subtle)" stroke-dasharray="3 3"/></svg>{tip}<div style="position:relative;height:20px;margin-top:6px">{xl}</div></div></div>'''
    types=[('Follow-up',48,'var(--ok)'),('Therapy',27,'var(--subtle)'),('New patient',14,'var(--info)'),('Medication review',11,'var(--warn)')]
    tb=''.join(f'<div style="padding:9px 0"><div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px"><span style="font-weight:600">{n}</span><span class="num s">{v}%</span></div><div style="height:8px;border-radius:9px;background:var(--sunk)"><div style="width:{v*1.9:.0f}%;height:8px;border-radius:9px;background:{c}"></div></div></div>' for n,v,c in types)
    side=f'<div class="card" style="flex:1;padding:18px 20px;box-shadow:var(--shadow)"><div class="h" style="font-size:16px;margin-bottom:6px">By visit type</div>{tb}</div>'
    k=''.join([kpi('Completed appointments','7,719','↑ 9.4%',True,'last 12 weeks'),kpi('No-show rate','3.0%','↓ 1.1 pt',True,'last 12 weeks'),kpi('Average wait to first visit','4.2 days','↓ 0.6',True,'new patients'),kpi('Claims paid on first try','91%','↑ 3 pt',True,'last 12 weeks')])
    rows=[('Northside Clinic','NC',0,'2,104','2.4%','6 days','94%'),('Midtown Behavioral','MB',2,'1,882','2.9%','4 days','92%'),('Lakeview Clinic','LC',1,'1,236','4.1%','5 days','86%')]
    tr=''.join(f'<tr><td><div style="display:flex;align-items:center;gap:10px">{av(ini,kk,28,dark)}<span style="font-weight:600">{n}</span></div></td><td class="num">{a_}</td><td class="num">{b}</td><td class="num">{c}</td><td class="num">{d}</td></tr>' for n,ini,kk,a_,b,c,d in rows)
    table=f'<div class="card" style="overflow:hidden;box-shadow:var(--shadow)"><table><tr><th>Clinic</th><th>Completed</th><th>No-show rate</th><th>Wait to first visit</th><th>Claims paid first try</th></tr>{tr}</table></div>'
    bar=f'<div style="display:flex;align-items:center;gap:10px">{seg(["Appointments","Revenue","Claims","Providers"],0)}<div style="flex:1"></div>{chip("Last 12 weeks")}{chip("All clinics")}{seg(["Chart","Table"],0)}</div>'
    inner=head('Reports','Updated 5 minutes ago',f'<span class="btn">{i("doc",16)}Export</span><span class="btn p">{i("plus",16)}Schedule report</span>')+bar+f'<div style="display:flex;gap:14px">{k}</div><div style="display:flex;gap:14px">{chart}{side}</div>{table}'
    return shell(inner,dark,'Reports','Admin',('DR','Dana Reyes'))
