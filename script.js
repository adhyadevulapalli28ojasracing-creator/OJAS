const cur=document.getElementById('cur'),cur2=document.getElementById('cur2');
document.addEventListener('mousemove',e=>{cur.style.left=e.clientX+'px';cur.style.top=e.clientY+'px';cur2.style.left=e.clientX+'px';cur2.style.top=e.clientY+'px';});
document.addEventListener('mousedown',()=>{cur.style.transform='translate(-50%,-50%) scale(1.8)';cur2.style.transform='translate(-50%,-50%) scale(.7)';});
document.addEventListener('mouseup',()=>{cur.style.transform='translate(-50%,-50%) scale(1)';cur2.style.transform='translate(-50%,-50%) scale(1)';});

function showPage(n){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+n).classList.add('active');
  document.querySelectorAll('.nlink').forEach(l=>l.classList.remove('active'));
  const el=document.getElementById('nav-'+n);if(el)el.classList.add('active');
  window.scrollTo(0,0);
  if(n==='team')renderTeam('2025');
  if(n==='achievements')renderAch('2025');
}

const teamData = {
  '2025': {
    leadership: [
      {name:'Abhay Anand',role:'Chief Executive Officer',init:'AA'},
      {name:'Yash Mangatt',role:'Chief Technical Officer',init:'YM'},
      {name:'Rohit Gandham',role:'Chief Operations Officer',init:'RG'},
    ],
    powertrain: [
      {name:'Rohit Gandham',role:'Powertrain Lead',init:'RG'},
      {name:'Kamalesh M',role:'Drivetrain Lead',init:'KM'},
      {name:'Arthur Leslie',role:'Battery Pack Engineer',init:'AL'},
      {name:'Sushanth Bibi',role:'Drivetrain Engineer',init:'SB'},
    ],
    aero: [
      {name:'Yash Mangatt',role:'Aero & Composites Lead',init:'YM'},
      {name:'Siddhartha Verma',role:'Aero & Composites Engineer',init:'SV'},
      {name:'Arjun Srikanth',role:'Aero & Composites Engineer',init:'AS'},
    ],
    chassis: [
      {name:'Varun S',role:'Chassis Principal Engineer',init:'VS'},
      {name:'Adhish Maheshbabu',role:'Chassis Engineer',init:'AM'},
      {name:'Ananthya S',role:'Chassis Engineer',init:'AS'},
    ],
    vd: [
      {name:'Advaith Krishna Thottiyil',role:'Vehicle Dynamics Principal Engineer & Driver',init:'AK'},
      {name:'Navaneeth Baiju',role:'Kinematics & Steering Lead',init:'NB'},
      {name:'Jacob Jiby',role:'Vehicle Dynamics Engineer',init:'JJ'},
      {name:'Aryan Kokate',role:'Vehicle Dynamics Engineer',init:'AK'},
      {name:'Yusuf Ameer',role:'Vehicle Dynamics Engineer',init:'YA'},
    ],
    electronics: [
      {name:'Vishruth',role:'ESO',init:'VS'},
      {name:'Sathvin',role:'Electrical Lead',init:'SS'},
      {name:'Abhay Anand',role:'Electrical Lead',init:'AA'},
      {name:'Krish Gupta',role:'Electrical Engineer',init:'KG'},
      {name:'Krishna Kotikalapudi',role:'Electrical Engineer',init:'KK'},
      {name:'Idhika Sharma',role:'Electrical Engineer',init:'IS'},
      {name:'Sabharish Balaji',role:'Electrical Engineer',init:'SB'},
      {name:'Raajvardhan Singh',role:'Electrical Engineer',init:'RS'},
    ],
    ops: [
      {name:'Subham Saha',role:'Operations Lead',init:'SS'},
      {name:'Anirudh',role:'Operations Member',init:'AP'},
      {name:'Arthur Leslie',role:'Operations Member',init:'AL'},
      {name:'Prabhav Sharma',role:'Operations Member',init:'PS'},
      {name:'Sushanth Bibi',role:'Operations Member',init:'SB'},
      {name:'Tejashri Krishnakumar',role:'Operations Member',init:'TK'},
      {name:'Tanushree Paidi',role:'Operations Member',init:'TP'},
      {name:'Naval Aggarwal',role:'Operations Member',init:'NA'},
    ]
  },
  '2024': {
    leadership: [
      {name:'Vijay Menon',role:'Team Principal',init:'VM'},
      {name:'Preethi Rao',role:'Deputy Principal',init:'PR'},
    ],
    powertrain: [
      {name:'Kabir Anand',role:'Powertrain Lead',init:'KA'},
      {name:'Deepa Nath',role:'HV Systems',init:'DN'},
      {name:'Suraj Patil',role:'Motor Design',init:'SP'},
    ],
    aero: [
      {name:'Lavanya Singh',role:'Aero Lead',init:'LS'},
      {name:'Rahul Das',role:'CFD Analyst',init:'RD'},
    ],
    chassis: [
      {name:'Kiara Mehta',role:'Chassis Lead',init:'KM'},
      {name:'Aryan Roy',role:'Suspension',init:'AR'},
    ],
    electronics: [
      {name:'Rohit Verma',role:'Electronics Lead',init:'RV'},
      {name:'Pooja Iyer',role:'Embedded Systems',init:'PI'},
    ]
  },
  '2023': {
    leadership: [
      {name:'Vijay Menon',role:'Team Principal',init:'VM'},
      {name:'Preethi Rao',role:'Deputy Principal',init:'PR'},
    ],
    powertrain: [
      {name:'Kabir Anand',role:'Powertrain Lead',init:'KA'},
      {name:'Deepa Nath',role:'HV Systems',init:'DN'},
      {name:'Suraj Patil',role:'Motor Design',init:'SP'},
    ],
    aero: [
      {name:'Lavanya Singh',role:'Aero Lead',init:'LS'},
      {name:'Rahul Das',role:'CFD Analyst',init:'RD'},
    ],
    chassis: [
      {name:'Kiara Mehta',role:'Chassis Lead',init:'KM'},
      {name:'Aryan Roy',role:'Suspension',init:'AR'},
    ],
    electronics: [
      {name:'Rohit Verma',role:'Electronics Lead',init:'RV'},
      {name:'Pooja Iyer',role:'Embedded Systems',init:'PI'},
    ]
  },
  '2022': {
    leadership: [
      {name:'Aarav Shah',role:'Team Principal',init:'AS'},
      {name:'Divya Krishnan',role:'Chief Engineer',init:'DK'},
    ],
    powertrain: [
      {name:'Nikhil Babu',role:'Powertrain Lead',init:'NB'},
      {name:'Sneha Thomas',role:'Battery Systems',init:'ST'},
    ],
    aero: [
      {name:'Raj Sharma',role:'Aero Lead',init:'RS'},
    ],
    chassis: [
      {name:'Ishaan Gupta',role:'Chassis Lead',init:'IG'},
      {name:'Mira Pillai',role:'Suspension Eng.',init:'MP'},
    ],
    electronics: [
      {name:'Chetan Joshi',role:'Electronics Lead',init:'CJ'},
    ]
  },
  '2021': {
    leadership: [
      {name:'Sanjay Kumar',role:'Team Principal',init:'SK'},
    ],
    powertrain: [
      {name:'Pooja Singh',role:'Powertrain Lead',init:'PS'},
      {name:'Aman Verma',role:'Drivetrain',init:'AV'},
    ],
    chassis: [
      {name:'Riya Nair',role:'Chassis Lead',init:'RN'},
    ],
    electronics: [
      {name:'Tarun Bhat',role:'Electronics Lead',init:'TB'},
    ]
  }
};

const deptNames = {leadership:'Team Leadership',powertrain:'Powertrain',aero:'Aerodynamics, Composites & Cooling',chassis:'Chassis & Design',vd:'Vehicle Dynamics & Brakes',electronics:'Electrical',ops:'Operations'};
function renderTeam(yr){
  const d=teamData[yr];if(!d)return;let h='';
  for(const[k,ms]of Object.entries(d)){h+=`<div class="ds"><div class="dlbl">${deptNames[k]||k}</div><div class="mg">`;for(const m of ms)h+=`<div class="mc"><div class="mav">${m.init}</div><div class="mn">${m.name}</div><div class="mr2">${m.role}</div></div>`;h+='</div></div>';}
  document.getElementById('team-display').innerHTML=h;
}
function switchTeam(el,yr){document.querySelectorAll('.ytabs .ytab').forEach(t=>t.classList.remove('active'));el.classList.add('active');renderTeam(yr);}

const achData={
  '2025':{results:[{event:'Formula Student Concept Class',location:'Virtual Event · IN',rank:'1',desc:'Overall winners and a clean sweep in all events, cementing us as the best in India.',tags:['1st Overall']},{event:'Business Plan Presentation',location:'FSCC 2025',rank:'1',desc:'1st in Business Plan Presentation - this is not just a project, this is a business',tags:['Winners']},{event:'Cost & Manufacturing',location:'FSCC 2025',rank:'1',desc:'1st in Cost Event — testament to lean, student-built manufacturing.',tags:['Winners']},{event:'Engineering Design Presentation',location:'FSCC 2025',rank:'1',desc:'1st in Engineering Design Presentation - the ultimate proof of the best India can produce.',tags:['Winners']}],awards:[{icon:'⚡',title:'Best EV Powertrain Design',body:'Special award for innovative in-house motor controller design at FSG 2024.'},{icon:'🎯',title:'Design Event — Top 10',body:'10th overall in Design with full technical presentation to an expert jury.'},{icon:'🔬',title:'Engineering Presentation',body:'Honourable mention for engineering clarity and documentation.'}]},
  '2024':{results:[{event:'Formula Student Germany',location:'Hockenheimring · DE',rank:'26',desc:'A return to the foremost stage. Among just two teams representing India',tags:['Return to the top stage']},{event:'Business Plan Presentation',location:'FSG 2024',rank:'26',desc:'The best from India',tags:['Statics Event']}],awards:[{icon:'🏁',title:'Rookie Best Completion',body:'Recognised for completing all events as a young international team.'},{icon:'📐',title:'Business Plan — Top 15',body:'Strong business plan with compelling commercial viability.'}]},
  '2022':{results:[{event:'Formula SAE Italy',location:'Riccardo Paletti Circuit · IT',rank:'4',desc:'A close call away from podium, and the best from India',tags:['International Return']},{event:'Cost & Manufacturing',location:'Formula SAE Italy',rank:'4',desc:'4th in Cost Event — testament to our international standard of manufacturing at a fraction of the cost.',tags:['Best from Asia']}, {event:'Business Plan Presentation',location:'Formula SAE Italy',rank:'5',desc:'5th in Business Presentation',tags:['Top 5']}],awards:[{icon:'🔩',title:'First International TI',body:'Historic first technical inspection clearance at an international event.'}]},
  '2021':{results:[{event:'Formula Bharat (Online)',location:'Virtual Event · IN',rank:'8',desc:'8th overall in virtual event. Strong static event performance.',tags:['Top 10 National']},{event:'Engineering Design Presentation',location:'Formula Bharat',rank:'7',desc:'Keeping our momentum alive during the Pandemic',tags:['Top 10 National']}],awards:[{icon:'💡',title:'Best Concept Design',body:'Top award in concept design at Formula Bharat 2021.'}]},
  '2020':{results:[{event:'Formula SAE Italy',location:'Riccardo Paletti Circuit · IT',rank:'19',desc:'19th overall in an event hit by the Pandemic. Strong static event performance.',tags:['Top 10 National']}],awards:[{icon:'💡',title:'Best Concept Design',body:'Top award in concept design at Formula Bharat 2021.'}]},
  '2019':{results:[{event:'Formula Student EV UK',location:'Silverstone Circuit · GB',rank:'7',desc:'7th Overall in our last event before the Pandemic.',tags:['Top 10']}],awards:[{icon:'💡',title:'Best Battery Design',body:'Top award in battery design.'},{icon:'💡',title:'Best Powertrain Design',body:'Top award in powertrain design.'}]},
  '2018':{results:[{event:'Formula SAE Italy',location:'Riccardo Paletti Circuit · IT',rank:'19',desc:'19th overall in an event hit by the Pandemic. Strong static event performance.',tags:['Top 10 National']}],awards:[{icon:'💡',title:'Best Concept Design',body:'Top award in concept design at Formula Bharat 2021.'}]}

};
function renderAch(yr){
  const d=achData[yr];if(!d)return;
  let h=`<div class="sec-lbl" style="margin-bottom:24px">${yr} Season Results</div>`;
  for(const r of d.results){const rc=r.rank==='1'?'gold':r.rank==='2'?'silver':r.rank==='3'?'bronze':'';const rv=r.rank==='TI'?`<span style="font-size:22px;color:var(--mid)">TI</span>`:r.rank;h+=`<div class="rc"><div><div class="re">${r.event}</div><div class="rl">${r.location}</div></div><div class="rd"><div class="rdesc">${r.desc}</div><div style="margin-top:5px">${r.tags.map(t=>`<span class="rtag">${t}</span>`).join('')}</div></div><div class="rrank"><div class="rrn ${rc}">${rv}</div><div class="rrl">Position</div></div></div>`;}
  h+=`<div style="margin-top:52px"><div class="sec-lbl">Awards & Recognition</div><div class="aw-grid">`;
  for(const a of d.awards)h+=`<div class="awc"><div class="awi">${a.icon}</div><div class="awt">${a.title}</div><div class="awb">${a.body}</div></div>`;
  h+='</div></div>';
  document.getElementById('ach-display').innerHTML=h;
}
function switchAch(el,yr){document.querySelectorAll('#ach-tabs .ytab').forEach(t=>t.classList.remove('active'));el.classList.add('active');renderAch(yr);}

const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');}),{threshold:.1});
document.querySelectorAll('.fade-up').forEach(el=>obs.observe(el));
renderTeam('2025');renderAch('2025');