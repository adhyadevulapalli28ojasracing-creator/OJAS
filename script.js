const pages = document.querySelectorAll('.page');
const navButtons = document.querySelectorAll('[data-page]');
let teamRendered = false;
let achievementsRendered = false;
let carsRendered = false;
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
const cursorDot = document.querySelector('#cursor-dot');
const cursorRing = document.querySelector('#cursor-ring');

const stockGallery = [
  'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1548611716-e5b128527a20?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200&auto=format&fit=crop'
];

const tor24Gallery = [
  'assets/cars/tor24-1.png',
  'assets/cars/tor24-2.png',
  'assets/cars/tor24-3.png',
  'assets/cars/tor24-4.png'
];

const tor20Gallery = [
  'assets/cars/tor20-1.png',
  'assets/cars/tor20-2.png',
  'assets/cars/tor20-3.png',
  'assets/cars/tor20-4.png'
];

const tor18Gallery = [
  'assets/cars/tor18-1.png',
  'assets/cars/tor18-2.png',
  'assets/cars/tor18-3.png',
  'assets/cars/tor18-4.png'
];

const tor17Gallery = [
  'assets/cars/tor17-1.png',
  'assets/cars/tor17-2.png',
  'assets/cars/tor17-3.png',
  'assets/cars/tor17-4.png'
];

const tor16Gallery = [
  'assets/cars/tor16-1.png',
  'assets/cars/tor16-2.png',
  'assets/cars/tor16-3.png',
  'assets/cars/tor16-4.png'
];

const originGallery = [
  'assets/cars/origin-1.png',
  'assets/cars/origin-2.png',
  'assets/cars/origin-3.png',
  'assets/cars/origin-4.png'
];

const carData = [
  {year:'2024',season:'Current Build - Season 9',name:'TOR-24',image:'assets/tor-24.jpg', gallery: tor24Gallery, desc:'Our most refined machine to date with a laser-cut spaceframe, full aero package and improved high-voltage systems for Formula Student Germany 2024.',specs:{'Peak Power':'80 kW','0-100 km/h':'3.6 s','Accumulator':'6.2 kWh','Mass':'238 kg','Downforce':'420 N','Wheelbase':'1540 mm'}},
  {year:'2020',season:'Season 8',name:'TOR-20',image:'assets/tor-20-render.png', gallery: tor20Gallery, desc:'A major step forward with full aero development, improved powertrain packaging and stronger validation workflows.',specs:{'Peak Power':'72 kW','0-100 km/h':'4.8 s','Accumulator':'5.8 kWh','Mass':'252 kg'}},
  {year:'2018',season:'Season 7',name:'TOR-18',image:'assets/tor-18.webp', gallery: tor18Gallery, desc:'A pre-pandemic benchmark generation focused on manufacturing maturity, race reliability and stronger static event preparation.',specs:{'Peak Power':'60 kW','0-100 km/h':'5.6 s','Accumulator':'5.0 kWh','Mass':'268 kg'}},
  {year:'2017',season:'Season 6',name:'TOR-17',image:'assets/tor-17-render.png', gallery: tor17Gallery, desc:'An important design iteration that helped mature the team architecture, testing discipline and subsystem ownership.',specs:{'Peak Power':'60 kW','0-100 km/h':'5.7 s','Accumulator':'5.0 kWh','Mass':'270 kg'}},
  {year:'2016',season:'Season 5',name:'TOR-16',image:'assets/tor-16.jpg', gallery: tor16Gallery, desc:'A foundational competitive car that strengthened the team culture and set the direction for future electric race builds.',specs:{'Peak Power':'55 kW','0-100 km/h':'5.9 s','Accumulator':'4.8 kWh','Mass':'272 kg'}},
  {year:'2012-15',season:'Origin Years',name:'Vidhyut to TOR-15',image:'assets/tor-18-render.png', gallery: originGallery, desc:'The years where Team Ojas built its first cars, learned by doing and created the engineering culture that still powers the team.',specs:{'Generations':'4','Focus':'Learning','Platform':'Electric','Legacy':'Foundation'}} 
];
 
const teamData = {
  '2026': {
    leadership: [
      {name:'Abhay Anand',role:'Chief Executive Officer',init:'AA',tag:'CEO',photo:'assets/team/2026/abhay-anand.jpg'},
      {name:'Yash Mangatt',role:'Chief Technical Officer',init:'YM',tag:'CTO',photo:'assets/team/2026/yash-mangatt.jpg'},
      {name:'Rohit Gandham',role:'Chief Operations Officer',init:'RG',tag:'COO',photo:'assets/team/2026/rohit-gandham.jpg'},
      {name:'Vishrudh GK',role:'Electrical Systems Officer',init:'VG',tag:'ESO',photo:'assets/team/2026/vishrudh-gk.jpg'},
      {name:'Suren Elango',role:'Autonomous Systems Officer',init:'SE',tag:'ASO',photo:'assets/team/2026/suren-elango.jpg'}
    ],
    pe: [
      {name:'Varun S',role:'Structures',init:'VS',photo:'assets/team/2026/varun-sekaran.jpg'},
      {name:'CS Sathvin',role:'Electrical and Powertrain',init:'CS',photo:'assets/team/2026/c-s-sathvin.jpg'},
      {name:'Advaith Krishna',role:'Vehicle Dynamics and Brakes',init:'AK',photo:'assets/team/2026/advaith-krishna.jpg'}
    ],
    powertrain: [
      {name:'Rohit Gandham',role:'Battery Pack Lead',init:'RG',tag:'LEAD',photo:'assets/team/2026/rohit-gandham.jpg'},
      {name:'RB Kamalesh',role:'Drivetrain Lead',init:'RK',tag:'LEAD',photo:'assets/team/2026/r-b-kamalesh.jpg'},
      {name:'Arthur Leslie',role:'Battery Pack Engineer',init:'AL',photo:'assets/team/2026/arthur-leslie.jpg'},
      {name:'Sushanth Bibi',role:'Drivetrain Engineer',init:'SB',photo:'assets/team/2026/sushanth-bibi.jpg'}
    ],
    aero: [
      {name:'Yash Mangatt',role:'Aerodynamics, Composites & Cooling Lead',init:'YM',tag:'LEAD',photo:'assets/team/2026/yash-mangatt.jpg'},
      {name:'Arjun Srikanth',role:'Aerodynamics, Composites & Cooling Engineer',init:'AS',photo:'assets/team/2026/arjun-srikanth.jpg'},
      {name:'Siddhartha Verma',role:'Aerodynamics, Composites & Cooling Engineer',init:'SV',photo:'assets/team/2026/siddhartha-verma.jpg'}
    ],
    chassis: [
      {name:'Varun S',role:'Design Lead',init:'VS',tag:'LEAD',photo:'assets/team/2026/varun-sekaran.jpg'},
      {name:'Adhish Maheshbabu',role:'Chassis Engineer',init:'AM',photo:'assets/team/2026/adhish-maheshbabu.jpg'},
      {name:'Ananthya S',role:'Chassis Engineer',init:'AS',photo:'assets/team/2026/ananthya-s.jpg'}
    ],
    vd: [
      {name:'Advaith Krishna',role:'Vehicle Dynamics Lead',init:'AK',tag:'LEAD',photo:'assets/team/2026/advaith-krishna.jpg'},
      {name:'Navaneeth Baiju',role:'Kinematics and Steering Lead',init:'NB',tag:'LEAD',photo:'assets/team/2026/navaneeth-baiju.jpg'},
      {name:'Aryan Kokate',role:'Vehicle Dynamics Engineer',init:'AK',photo:'assets/team/2026/aryan-kokate.jpg'},
      {name:'Jacob Jiby',role:'Vehicle Dynamics Engineer',init:'JJ',photo:'assets/team/2026/jacob-jiby.jpg'},
      {name:'Yusuf Ameer',role:'Vehicle Dynamics Engineer',init:'YA',photo:'assets/team/2026/yusuf-ameer.jpg'}
    ],
    electronics: [
      {name:'Vishrudh GK',role:'Software Lead',init:'VG',tag:'LEAD',photo:'assets/team/2026/vishrudh-gk.jpg'},
      {name:'CS Sathvin',role:'Electrical Lead',init:'CS',tag:'LEAD',photo:'assets/team/2026/c-s-sathvin.jpg'},
      {name:'Abhay Anand',role:'BPP Lead',init:'AA',tag:'LEAD',photo:'assets/team/2026/abhay-anand.jpg'},
      {name:'Idhika Sharma',role:'Electrical Engineer',init:'IS',photo:'assets/team/2026/idhika-sharma.jpg'},
      {name:'Krish Gupta',role:'Electrical Engineer',init:'KG',photo:'assets/team/2026/krish-gupta.jpg'},
      {name:'Krishna Kotikalapudi',role:'Electrical Engineer',init:'KK',photo:'assets/team/2026/krishna-kotikalapudi.jpg'},
      {name:'Rajvardhan Singh',role:'Electrical Engineer',init:'RS',photo:'assets/team/2026/raajvardhan-singh.jpg'},
      {name:'Sabharish Balaji',role:'Electrical Engineer',init:'SB',photo:'assets/team/2026/sabharish-balaji.jpg'},
      {name:'Tanushree Paidi',role:'Electrical Engineer',init:'TP',photo:'assets/team/2026/tanushree-paidi.jpg'}
    ],
    ops: [
      {name:'Subham Saha',role:'Operations Lead',init:'SS',tag:'LEAD',photo:'assets/team/2026/subham-saha.jpg'},
      {name:'Anirudh Ponraj',role:'Operations Member',init:'AP',photo:'assets/team/2026/anirudh-ponraj.jpg'},
      {name:'Arthur Leslie',role:'Operations Member',init:'AL',photo:'assets/team/2026/arthur-leslie.jpg'},
      {name:'Naval Agarwal',role:'Operations Member',init:'NA',photo:'assets/team/2026/naval-aggarwal.jpg'},
      {name:'Prabhav Sharma',role:'Operations Member',init:'PS',photo:'assets/team/2026/prabhav-sharma.jpg'},
      {name:'Sushanth Bibi',role:'Operations Member',init:'SB',photo:'assets/team/2026/sushanth-bibi.jpg'},
      {name:'Tanushree Paidi',role:'Operations Member',init:'TP',photo:'assets/team/2026/tanushree-paidi.jpg'},
      {name:'Tejashri Krishnakumar',role:'Operations Member',init:'TK',photo:'assets/team/2026/tejashri-krishnakumar.jpg'},
    ],
    auto: [
      {name:'Suren Elango',role:'Perception Lead',init:'SE',tag:'LEAD',photo:'assets/team/2026/suren-elango.jpg'},
      {name:'Veekshith Gali',role:'Path Planning Lead',init:'VG',tag:'LEAD',photo:'assets/team/2026/veekshith-gali.jpg'},
      {name:'Krish Gupta',role:'Autonomous Systems Engineer',init:'KG',photo:'assets/team/2026/krish-gupta.jpg'},
      {name:'Naval Agarwal',role:'Autonomous Systems Engineer',init:'NA',photo:'assets/team/2026/naval-aggarwal.jpg'},
      {name:'Sabharish Balaji',role:'Autonomous Systems Engineer',init:'SB',photo:'assets/team/2026/sabharish-balaji.jpg'},
      {name:'Rajvardhan Singh',role:'Autonomous Systems Engineer',init:'RS',photo:'assets/team/2026/raajvardhan-singh.jpg'}
    ]
  },
  '2025': {
    leadership: [
      {name:'Ayush Shahapurkar',role:'Chief Executive Officer',init:'AS',tag:'CEO',photo:'assets/team/2025/ayush-shahapurkar.jpg'},
      {name:'Shubhang Sai',role:'Chief Technical Officer',init:'SS',tag:'CTO',photo:'assets/team/2025/shubhang-sai.jpg'},
      {name:'Juzer Morudwala',role:'Electrical Systems Officer',init:'JM',tag:'ESO',photo:'assets/team/2025/juzer-morudwala.jpg'},
      {name:'Nitin S',role:'Autonomous Systems Officer',init:'NS',tag:'ASO',photo:'assets/team/2025/nitin-s.jpg'},
      {name:'T Donald Noel',role:'Chief Operating Officer',init:'DN',tag:'COO',photo:'assets/team/2025/donald-noel.jpg'},
      {name:'Pranav S',role:'Chief Management Officer',init:'PS',tag:'CMO',photo:'assets/team/2025/pranav-s.jpg'}
    ],
    pe: [
      {name:'Chetan Verma',role:'Software',init:'CV',tag:'LEAD',photo:'assets/team/2025/chetan-verma.jpg'},
      {name:'Siddharth Das',role:'Electrical',init:'SD',tag:'LEAD',photo:'assets/team/2025/siddharth-das.jpg'},
      {name:'Rishabh Ramakrishna',role:'Battery Pack',init:'RR',tag:'LEAD',photo:'assets/team/2025/rishabh-ramakrishna.jpg'},
      {name:'Aditya Santhosh',role:'Drivetrain',init:'AS',tag:'LEAD',photo:'assets/team/2025/aditya-s-k.jpg'},
      {name:'Abhaygopal Nistala',role:'Powertrain',init:'AN',tag:'LEAD',photo:'assets/team/2025/abhaygopal-n.jpg'},
      {name:'Marc Stephen',role:'Vehicle Performance Lead',init:'MS',tag:'LEAD',photo:'assets/team/2025/marc-stephen.jpg'},
      {name:'Padhma Kamalesh',role:'Structures and Design',init:'PK',tag:'LEAD',photo:'assets/team/2025/padhma-kamalesh.jpg'},
      {name:'Yajur Shah',role:'Engineering Design Presentation Lead',init:'YS',tag:'LEAD',photo:'assets/team/2025/yajur-shah.jpg'}
    ]
  },
  '2024': {
    leadership:[
      {name:'Dharmik Upadhyay',role:'Team Captain',init:'DU',tag:'TC',photo:'assets/team/2024/dharmik-upadhyay.jpg'},
      {name:'Krishna Dandu',role:'Team Manager',init:'KD',tag:'TM',photo:'assets/team/2024/krishna-dandu.jpg'},
      {name:'Shravan A S',role:'Chief Technical Officer',init:'SA',tag:'CTO',photo:'assets/team/2024/shravan-a-s.jpg'},
      {name:'Jayasooryaa K',role:'Electrical Head',init:'JK',tag:'ESO',photo:'assets/team/2024/jayasooryaa-k.jpg'},
      {name:'Bidhant',role:'Electrical Head',init:'BD',tag:'ESO',photo:'assets/team/2024/bidhant.jpg'},
      {name:'Prakhar Mishra',role:'Autonomous Head',init:'PM',tag:'ASO',photo:'assets/team/2024/prakhar-mishra.jpg'}
    ],
    departmentHeads:[
      {name:'Abhiram Shaji',role:'Battery Pack Head',init:'AS',tag:'LEAD',photo:'assets/team/2024/abhiram-shaji.jpg'},
      {name:'Molish P',role:'Aerodynamics Head',init:'MP',tag:'LEAD',photo:'assets/team/2024/molish-p.jpg'},
      {name:'Sarvesh Thopate',role:'Transmission Head',init:'ST',tag:'LEAD',photo:'assets/team/2024/sarvesh-thopate.jpg'},
      {name:'Manav Shiv',role:'Documentation Head',init:'MS',tag:'LEAD',photo:'assets/team/2024/manav-shiv.jpg'},
      {name:'Kunwar Khanna',role:'Performance Head',init:'KK',tag:'LEAD',photo:'assets/team/2024/kunwar-khanna.jpg'},
      {name:'Bharat Kaushik C',role:'Media and Outreach Head',init:'YS',tag:'LEAD',photo:'assets/team/2024/bharat-kaushik-c.jpg'}
    ],
  },
  '2023': {
    leadership:[
      {name:'Krish Lulla',role:'Team Captain',init:'KL',tag:'TC',photo:'assets/team/2023/krish-lulla.jpg'},
      {name:'Saran DB',role:'Electrical Head - Design',init:'SD',tag:'ESO',photo:'assets/team/2023/saran-db.jpg'},
      {name:'Ankit Parashar',role:'Electrical Head - Management',init:'AP',tag:'ESO',photo:'assets/team/2023/ankit-parashar.jpg'},
      {name:'Lakshya Agarwal',role:'Chief Technical Officer',init:'LA',tag:'CTO',photo:'assets/team/2023/lakshya-agarwal.jpg'},
      {name:'Roopreet Saluja',role:'Autonomous Systems Officer',init:'RS',tag:'ASO',photo:'assets/team/2023/roopreet-saluja.jpg'}
    ],
    departmentHeads:[
      {name:'Mirza Haider Ali',role:'Manufacturing Head',init:'MA',tag:'LEAD',photo:'assets/team/2023/mirza-haider-ali.jpg'},
      {name:'Priyam Mehta',role:'Vehicle Performance Head',init:'PM',tag:'LEAD',photo:'assets/team/2023/priyam-mehta.jpg'},
      {name:'Chirag Sadana',role:'Transmission Head',init:'CS',tag:'LEAD',photo:'assets/team/2023/chirag-sadana.jpg'}
    ],
  },
  '2021': {
    leadership:[
      {name:'Sushovan Samantaray',role:'Team Captain',init:'SS',tag:'TC',photo:'assets/team/2021/sushovan-samantaray.jpg'},
      {name:'Sanjit Franklin',role:'Electrical Head',init:'SF',tag:'ESO',photo:'assets/team/2021/sanjit-franklin.jpg'},
      {name:'Yash Pathak',role:'Chief Technical Officer',init:'YP',tag:'CTO',photo:'assets/team/2021/yash-pathak.jpg'},
      {name:'Divyansh Agarwal',role:'Autonomous Head',init:'DA',tag:'ASO',photo:'assets/team/2021/divyansh-agarwal.jpg'}
    ],
    departmentHeads:[
      {name:'Sehaj Singh',role:'Management Head',init:'SS',tag:'LEAD',photo:'assets/team/2021/sehaj-singh.jpg'},
      {name:'N S Akarsh',role:'Vehicle Dynamics and Brakes Head',init:'NA',tag:'LEAD',photo:'assets/team/2021/n-s-akarsh.jpg'},
      {name:'Atharva Vikas Shedge',role:'Aerodynamics and Composites Head',init:'AV',tag:'LEAD',photo:'assets/team/2021/atharva-vikas-shedge.jpg'},
      {name:'Esikela Meghanath',role:'Chassis Head',init:'EM',tag:'LEAD',photo:'assets/team/2021/esikela-meghanath.jpg'},
      {name:'Harris John',role:'High Voltage Head',init:'HJ',tag:'LEAD',photo:'assets/team/2021/harris-john.jpg'},
      {name:'Aswantraa U S',role:'Transmission Head',init:'AU',tag:'LEAD',photo:'assets/team/2021/aswantraa-u-s.jpg'}
    ]
  }
};

const deptNames = {leadership:'Team Leadership',pe:'Principal Engineers',powertrain:'Powertrain',aero:'Aerodynamics, Composites & Cooling',chassis:'Chassis and Design',vd:'Vehicle Dynamics and Brakes',electronics:'Electrical and Software',ops:'Operations',auto:'Autonomous',departmentHeads: 'Department Heads'};

const achData = {
  '2025': {
    gallery:['assets/achievements/1175-47.jpg','assets/achievements/2502.JPG','assets/achievements/1147-21.jpg','assets/achievements/2504.JPG','assets/achievements/1125-1.jpg'],
    results:[{event:'Formula Student Concept Class',location:'Virtual Event - IN',rank:'1',desc:'Overall winners with a clean sweep across major static events.',tags:['1st Overall','Clean Sweep']},{event:'Business Plan Presentation',location:'FSCC 2025',rank:'1',desc:'A winning commercial case for a serious student-built EV race program.',tags:['Winners']},{event:'Cost and Manufacturing',location:'FSCC 2025',rank:'1',desc:'Lean manufacturing choices and strong cost-performance discipline.',tags:['Winners']},{event:'Engineering Design Presentation',location:'FSCC 2025',rank:'1',desc:'A strong technical defense of the complete vehicle design.',tags:['Winners']}],awards:[]},
  '2024': {
    gallery:['assets/achievements/8201.JPG','assets/achievements/8180.JPG','assets/achievements/8172.JPG','assets/achievements/8163.JPG','assets/achievements/8161.JPG'],
    results:[{event:'Formula Student Germany',location:'Hockenheimring - DE',rank:'26',desc:'Returned to one of the toughest Formula Student stages as one of the Indian representatives.',tags:['Global Stage']},{event:'Business Plan Presentation',location:'FSG 2024',rank:'26',desc:'Static event performance against elite international competition.',tags:['Static Event']}],awards:[{title:'International Return',body:'A major step back onto the global Formula Student grid.'},{title:'Static Event Growth',body:'Improved documentation, design defense and business positioning.'}]},
  '2022': {
    gallery:['assets/achievements/2101.jpg','assets/achievements/1806.jpeg','assets/achievements/2102.jpg','assets/achievements/2104.jpg','assets/achievements/2103.jpg'],
    results:[{event:'Formula SAE Italy',location:'Riccardo Paletti Circuit - IT',rank:'4',desc:'A strong international result and one of the best performances from India.',tags:['Top 5','Best From Asia']},{event:'Cost and Manufacturing',location:'Formula SAE Italy',rank:'4',desc:'High manufacturing maturity at a fraction of typical race program cost.',tags:['Top 5']},{event:'Business Plan Presentation',location:'Formula SAE Italy',rank:'5',desc:'A sharp business case that placed inside the top five.',tags:['Top 5']}],awards:[{title:'International TI',body:'Historic technical inspection progress at an international event.'}]},
  '2021': {
    gallery:[],
    results:[{event:'Formula Bharat Online',location:'Virtual Event - IN',rank:'8',desc:'Maintained competitive momentum during the pandemic.',tags:['Top 10']},{event:'Engineering Design Presentation',location:'Formula Bharat',rank:'7',desc:'Strong static event showing with design continuity.',tags:['Top 10']}],awards:[{title:'Concept Design',body:'Recognized for concept maturity and system-level thinking.'}]},
  '2020': {
    gallery:[],
    results:[{event:'Formula SAE Italy',location:'Riccardo Paletti Circuit - IT',rank:'19',desc:'Competed through a difficult season impacted by global disruption.',tags:['International']}],awards:[{title:'Resilience',body:'Kept the program moving under difficult constraints.'}]},
  '2019': {
    gallery:[],
    results:[
      {event:'Formula Student EV UK',location:'Silverstone Circuit - GB',rank:'7',desc:'A top-ten international result before the pandemic break.',tags:['Top 10']},
      {event:'Best Battery Design',location:'FSEV UK 2019',rank:'AWD',desc:'Recognised for innovation, safety and engineering excellence in accumulator design.',tags:['AWARD']},
      {event:'Best Powertrain Design',location:'FSEV UK 2019',rank:'AWD',desc:'Awarded for performance, efficiency and integration of the electric drivetrain.',tags:['AWARD']}
    ],awards:[]},
  '2018': {
    gallery:['assets/achievements/1803.jpg','assets/achievements/1802.JPG','assets/achievements/1804.jpg','assets/achievements/4217.jpg','assets/achievements/1801.jpg'],
    results:[{event:'Formula Bharat',location:'Kari Motor Speedway - IN',rank:'3',desc:'A national podium and one of the team\'s strongest early results.',tags:['National Podium']},{event:'FSEV Cost Report',location:'Formula Bharat 2018',rank:'1',desc:'A standout cost-performance result.',tags:['Winners']},{event:'FSEV Business Plan',location:'Formula Bharat 2018',rank:'3',desc:'Strong commercial storytelling and presentation quality.',tags:['National Podium']}],awards:[]}
};

const sponsorData = [
  {tier:'Title Sponsor',title:'Powering The Mission',compact:false,items:[
    {name:'VIT Vellore',logo:'assets/logos/vit.png',url:'https://vit.ac.in/',body:'Team partner and technical supporter.'},
    {name:'Fabheads',logo:'assets/logos/fabheads.png',url:'https://fabheads.com/',body:'Composite manufacturing and advanced fabrication support.'},
    {name:'Bender',logo:'assets/logos/bender.png',url:'https://www.bender.de/en/company/',body:'Electrical safety and insulation monitoring support for high-voltage systems.'}
  ]},
  {tier:'Gold Partners',title:'Engineering Enablers',compact:false,items:[
    {name:'IMA',logo:'assets/logos/ima.png',url:'https://indianmotorsportsacademy.com/',body:'Engineering support for vehicle systems and embedded software.'},
    {name:'Dassault SolidWorks',logo:'assets/logos/solidworks.png',url:'https://www.solidworks.com/',body:'CAD platform for vehicle design and assembly workflows.'},
    {name:'Ansys Inc.',logo:'assets/logos/ansys.png',url:'https://www.ansys.com/',body:'Simulation support for CFD, FEA and design validation.'},
    {name:'Nvidia',logo:'assets/logos/nvidia.png',url:'https://www.nvidia.com/',body:'Compute support for autonomous and perception systems.'},
    {name:'MathWorks',logo:'assets/logos/mathworks.png',url:'https://www.mathworks.com/',body:'Modeling, controls and calculation workflows.'}
  ]},
  {tier:'Associates',title:'Supporting Cast',compact:true,items:[
    {name:'HunterDouglas',logo:'assets/logos/hunterdouglas.png',url:'https://www.hunterdouglas.com/',body:'Team partner and technical supporter.'},
    {name:'Novoflex',logo:'assets/logos/novoflex.png',url:'https://www.novoflex.com/',body:'Team partner and technical supporter.'},
    {name:'SBG Systems',logo:'assets/logos/sbgsystems.png',url:'https://www.sbg-systems.com/',body:'Team partner and technical supporter.'},
    {name:'Batemo',logo:'assets/logos/batemo.png',url:'https://www.batemo.com/',body:'Team partner and technical supporter.'},
    {name:'Electrifuel',logo:'assets/logos/electrifuel.png',url:'https://electrifuel.com/',body:'Team partner and technical supporter.'},
    {name:'IPG',logo:'assets/logos/ipg.png',url:'https://ipg-automotive.com/',body:'Team partner and technical supporter.'},
    {name:'Simscale',logo:'assets/logos/simscale.png',url:'https://www.simscale.com/',body:'Team partner and technical supporter.'},
  ]}
];

// ── NAVIGATION ──────────────────────────────────────────────
function showPage(pageName){
  pages.forEach(page => page.classList.toggle('active', page.id === `page-${pageName}`));
  navLinks.forEach(link => {
    const active = link.dataset.page === pageName;
    link.classList.toggle('active', active);
    link.toggleAttribute('aria-current', active);
  });
  closeMenu();
  window.scrollTo({top:0,behavior:'smooth'});

  if(window.location.hash !== `#${pageName}`){
    history.pushState({page:pageName}, '', `#${pageName}`);
  }

  if(pageName === 'team'){
    if(!teamRendered){
      renderTeam('2026', true);
      teamRendered = true;
    }
  }

  if(pageName === 'cars'){
    if(!carsRendered){
      renderCars();
      carsRendered = true;
    }
    setTimeout(() => {
      document.querySelectorAll('.car-year-sec').forEach(s => {
        const rect = s.getBoundingClientRect();
        if(rect.top < window.innerHeight) s.classList.add('visible');
      });
    }, 50);
  }

  if(pageName === 'achievements'){
    if(!achievementsRendered){
      renderAchievements();
      achievementsRendered = true;
    }
    setTimeout(() => {
      document.querySelectorAll('.year-sec').forEach(s => {
        const rect = s.getBoundingClientRect();
        if(rect.top < window.innerHeight) s.classList.add('visible');
      });
    }, 50);
  }

  if(pageName === 'sponsors'){
    setTimeout(() => {
      document.querySelectorAll('#sponsor-display .sponsor-card').forEach(c => {
        c.classList.add('visible');
      });
    }, 50);
  }
}

function closeMenu(){
  mobileMenu.classList.remove('open');
  mobileMenu.setAttribute('aria-hidden','true');
  menuToggle.setAttribute('aria-expanded','false');
}

function setupNavigation(){
  document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', () => showPage(el.dataset.page));
  });

  menuToggle.addEventListener('click', () => {
    const open = !mobileMenu.classList.contains('open');
    mobileMenu.classList.toggle('open', open);
    mobileMenu.setAttribute('aria-hidden', String(!open));
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  document.addEventListener('click', e => {
    if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) closeMenu();
  });
}

// ── CAR LINEUP ──────────────────────────────────────────────
function formatCarName(name){
  const match = name.match(/^(TOR-)(.+)$/);
  return match ? `${match[1]}<span>${match[2]}</span>` : name;
}

function renderCars(){
  const nav = document.querySelector('#car-timeline-nav');
  const display = document.querySelector('#car-display');

  nav.innerHTML = carData.map(car => `
    <a href="#cars" class="timeline-link car-timeline-link" data-year="${car.year}" onclick="event.preventDefault(); document.getElementById('car-year-${car.year}').scrollIntoView({behavior:'smooth'})">
      <span class="timeline-dot"></span>
      <span>${car.year}</span>
    </a>`).join('');

  display.innerHTML = carData.map(car => {
    const galleryHTML = `
      <div class="accordion-gallery" aria-label="Image gallery for ${car.name}">
        ${car.gallery.map((img, i) => `
          <div class="accordion-panel ${i === 0 ? 'active' : ''}" onclick="this.parentElement.querySelectorAll('.accordion-panel').forEach(p => p.classList.remove('active')); this.classList.add('active');">
            <img src="${img}" alt="${car.name} detail view ${i+1}" loading="lazy">
          </div>
        `).join('')}
      </div>
    `;

    return `
      <section class="year-sec car-year-sec" id="car-year-${car.year}">
        <div class="year-head">
          <div class="year-num">${car.year}</div>
          <div class="year-sub">${car.season}</div>
        </div>
        <div class="car-showcase" style="margin-bottom: 24px;">
          <article class="car-info">
            <span class="car-badge">${car.season}</span>
            <h2 class="car-name">${formatCarName(car.name)}</h2>
            <p>${car.desc}</p>
            <div class="spec-grid">
              ${Object.entries(car.specs).map(([k,v]) => `<div><span>${k}</span><b>${v}</b></div>`).join('')}
            </div>
          </article>
          <figure class="car-visual">
            <span class="callout">${car.name} - ${car.year}</span>
            <img src="${car.image}" alt="${car.name}">
          </figure>
        </div>
        ${galleryHTML}
      </section>`;
  }).join('');

  const sections = display.querySelectorAll('.car-year-sec');
  const links = nav.querySelectorAll('.car-timeline-link');

  function updateCarTimeline() {
    if(document.getElementById('page-cars').classList.contains('active')){
      let activeSection = sections[0];
      let smallestDistance = Infinity;

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        
        if (rect.top < window.innerHeight * 0.85) {
          section.classList.add("visible");
        }

        const distance = Math.abs(rect.top - 120);
        if (rect.top <= 120 && distance < smallestDistance) {
          smallestDistance = distance;
          activeSection = section;
        }
      });

      links.forEach(link => link.classList.remove("active"));
      if(activeSection) {
        const year = activeSection.id.replace("car-year-", "");
        const activeLink = nav.querySelector(`[data-year="${year}"]`);
        if (activeLink) activeLink.classList.add("active");
      }
    }
  }

  window.addEventListener("scroll", updateCarTimeline);
  window.addEventListener("resize", updateCarTimeline);
  updateCarTimeline();

  setTimeout(() => {
    sections.forEach(s => {
      const rect = s.getBoundingClientRect();
      if(rect.top < window.innerHeight) s.classList.add('visible');
    });
  }, 100);
}

// ── TEAM ────────────────────────────────────────────────────
function photoSlug(name){return name.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');}
function isLead(role,key){return key === 'leadership' || key === 'pe' || /lead|officer|chief|principal|captain|director/i.test(role);}
function memberPhoto(member,yr){return member.photo || `assets/team/${yr}/${photoSlug(member.name)}.jpg`;}

function renderTeamTabs(active = '2026'){
  const tabs = document.querySelector('#team-tabs');
  tabs.innerHTML = Object.keys(teamData).reverse().map(year => `<button type="button" class="${year === active ? 'active' : ''}" data-team-year="${year}">${year} Season</button>`).join('');
  tabs.querySelectorAll('button').forEach(button => button.addEventListener('click', () => renderTeam(button.dataset.teamYear)));
}

function renderTeam(year = '2026', skipAnimation = false){
  renderTeamTabs(year);
  const d = teamData[year];
  const allMembers = Object.values(d).flat();
  const uniqueMembers = [...new Map(allMembers.map(m => [m.name, m])).values()];
  const deptCount = Object.keys(d).length;
  const leadCount = uniqueMembers.filter(m => isLead(m.role,'')).length;
  const heroP = document.querySelector('#hero-people');
  const heroD = document.querySelector('#hero-depts');
  const heroL = document.querySelector('#hero-leads');
  
  function animateCount(el, target){
    const steps=40; let step=0;
    el.textContent='0';
    const t=setInterval(()=>{step++;el.textContent=Math.min(Math.round((target/steps)*step),target);if(step>=steps)clearInterval(t);},1200/steps);
  }
  if(heroP) animateCount(heroP, uniqueMembers.length);
  if(heroD) animateCount(heroD, deptCount);
  if(heroL) animateCount(heroL, leadCount);
  document.querySelectorAll('.team-hero-stats .scan').forEach((el,i)=>{
    el.style.transition='none';el.style.transform='translateX(-100%)';
    setTimeout(()=>{el.style.transition='transform 1s ease-out';el.style.transform='translateX(200%)';},i*150);
  });
  const display = document.querySelector('#team-display');

  display.style.opacity = '0';
  display.style.transition = 'opacity 0.25s ease';

  setTimeout(() => {
    const data = teamData[year];
    const groups = Object.entries(data);

    const sections = groups.map(([key, list]) =>
      `<section class="department">
        <div class="department-head">
          <h3>${deptNames[key] || key}</h3>
          <small>${list.length} ${list.length === 1 ? 'member' : 'members'}</small>
        </div>
        <div class="member-grid">
          ${list.map(member => renderMember(member, year, key)).join('')}
        </div>
      </section>`
    ).join('');

    display.innerHTML = sections;

    requestAnimationFrame(() => {
      display.style.opacity = '1';
    });

    setTimeout(runCountUp, 300);
  }, skipAnimation ? 0 : 250);
}


function renderMember(member,year,key){
  const lead = isLead(member.role,key);
  return `<article class="member-card">${member.tag ? `<span class="lead-tag">${member.tag}</span>` : ''}<div class="member-photo"><span class="avatar">${member.init}</span><img src="${memberPhoto(member,year)}" alt="${member.name}" loading="lazy" onerror="this.remove()"></div><div class="member-meta"><h4>${member.name}</h4><p>${member.role}</p></div></article>`;
}

// ── ACHIEVEMENTS ────────────────────────────────────────────
let achObservers = [];
let achIntervals = [];

function renderAchievements(){
  achObservers.forEach(o => o.disconnect());
  achObservers = [];
  achIntervals.forEach(id => clearInterval(id));
  achIntervals = [];

  const years = ['2025','2024','2022','2021','2020','2019','2018'];
  const nav = document.querySelector('#ach-timeline-nav');
  const display = document.querySelector('#ach-display');

  nav.innerHTML = years.map(yr => `
    <a href="#achievements" class="timeline-link" data-year="${yr}" onclick="event.preventDefault(); document.getElementById('ach-year-${yr}').scrollIntoView({behavior:'smooth'})">
      <span class="timeline-dot"></span>
      <span>${yr}</span>
    </a>`).join('');

  display.innerHTML = years.map(yr => {
    const data = achData[yr];
    const cards = data.results.map(r => `
      <div class="ach-card" onclick="toggleAchCard(this)">
        <div class="ach-card-inner">
          <div class="ach-front">
            <div class="ach-watermark">${r.rank}</div>
            <div class="ach-card-title">${r.event}</div>
            <div class="ach-rank">${r.rank}</div>
            <div class="ach-rank-text">POSITION</div>
            <div class="ach-flip-hint">tap for details</div>
          </div>
          <div class="ach-back">
            <div class="ach-back-title">${r.event}</div>
            <div class="ach-back-desc">${r.desc}</div>
          </div>
        </div>
      </div>`).join('');
    const galleryHTML = data.gallery && data.gallery.length ? `
      <div class="year-gallery">
        <div class="gallery-track">
          ${data.gallery.map((src,i) => `<div class="gallery-item ${i===0?'active':''}" ><img src="${src}" alt="" loading="lazy"></div>`).join('')}
        </div>
      </div>` : '';

    return `
      <section class="year-sec" id="ach-year-${yr}">
        <div class="year-head">
          <div class="year-num">${yr}</div>
          <div class="year-sub">${data.results[0]?.location || ''}</div>
        </div>
        <div class="ach-cards ${data.results.length === 4 ? 'four-up' : ''}">${cards}</div>
        ${galleryHTML}
      </section>`;
  }).join('');

  const sections = display.querySelectorAll('.year-sec');
  const links = nav.querySelectorAll('.timeline-link');

  function updateTimeline() {
    if(document.getElementById('page-achievements').classList.contains('active')){
      let activeSection = sections[0];
      let smallestDistance = Infinity;

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          section.classList.add("visible");
        }
        const distance = Math.abs(rect.top - 120);
        if (rect.top <= 120 && distance < smallestDistance) {
          smallestDistance = distance;
          activeSection = section;
        }
      });

      links.forEach(link => link.classList.remove("active"));
      if(activeSection) {
        const year = activeSection.id.replace("ach-year-", "");
        const activeLink = nav.querySelector(`[data-year="${year}"]`);
        if (activeLink) activeLink.classList.add("active");
      }
    }
  }

  window.addEventListener("scroll", updateTimeline);
  window.addEventListener("resize", updateTimeline);
  updateTimeline();

  display.querySelectorAll('.gallery-track').forEach(track => {
    const items = Array.from(track.querySelectorAll('.gallery-item'));
    if(items.length < 2) return;
    let current = 0;
    let intervalId = null;

    function activate(i){
      current = ((i % items.length) + items.length) % items.length;
      items.forEach((item, idx) => {
        item.classList.remove('active');
        if(idx === current) item.classList.add('active');
      });
    }

    function startInterval(){
      if(intervalId){
        clearInterval(intervalId);
        const idx = achIntervals.indexOf(intervalId);
        if(idx > -1) achIntervals.splice(idx, 1);
      }
      intervalId = setInterval(() => {
        activate(current + 1);
      }, 3500);
      achIntervals.push(intervalId);
    }

    activate(0);
    startInterval();

    items.forEach((item, i) => item.addEventListener('click', () => {
      activate(i);
      startInterval();
    }));
  });

  if(links[0]) links[0].classList.add('active');
  if(sections[0]) sections[0].classList.add('visible');

  setTimeout(() => {
    sections.forEach(s => {
      const rect = s.getBoundingClientRect();
      if(rect.top < window.innerHeight) s.classList.add('visible');
    });
  }, 100);
}

function toggleAchCard(card){
  const open = document.querySelector('.ach-card.flipped');
  if(open && open !== card) open.classList.remove('flipped');
  card.classList.toggle('flipped');
}

// ── SPONSORS PAGE ────────────────────────────────────────────
function renderSponsors(){
  const allSponsors = sponsorData.flatMap(tier => tier.items);
  document.querySelector('#sponsor-display').innerHTML = allSponsors.map(item => `
    <div class="sponsor-card" onclick="toggleSponsor(this)">
      <div class="sponsor-card-inner">
        <div class="sponsor-front">
          <img src="${item.logo}"
     class="sponsor-logo ${item.name === 'Electrifuel' ? 'electrifuel-logo' : ''}"
     alt="${item.name}"
               onerror="this.style.display='none'">
          <a class="sponsor-tab" href="${item.url || '#'}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">
            <span>${item.name}</span>
          </a>
        </div>
        <div class="sponsor-back">
          <div class="sponsor-name">${item.name}</div>
          <div class="sponsor-desc">${item.body}</div>
        </div>
      </div>
    </div>`).join('');

  const sponsorObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, {threshold:.35});
  document.querySelectorAll('#sponsor-display .sponsor-card').forEach(c => sponsorObs.observe(c));
}

function toggleSponsor(card){
  const open = document.querySelector('#sponsor-display .sponsor-card.flipped');
  if(open && open !== card) open.classList.remove('flipped');
  card.classList.toggle('flipped');
}

// ── SPONSOR CAROUSEL ─────────────────────────────────────────
function setupCarousel(){
  const carouselElement = document.querySelector('#sponsor-carousel');
  if (!carouselElement) return;

  const track = carouselElement.querySelector('.carousel-track');

  const sponsors = [
    { name:'Fabheads',      logo:'assets/logos/fabheads.png',      url:'https://fabheads.com/' },
    { name:'Bender',        logo:'assets/logos/bender.png',        url:'https://www.bender.de/en/company/' },
    { name:'SolidWorks',    logo:'assets/logos/solidworks.png',    url:'https://www.solidworks.com/' },
    { name:'Ansys',         logo:'assets/logos/ansys.png',         url:'https://www.ansys.com/' },
    { name:'Nvidia',        logo:'assets/logos/nvidia.png',        url:'https://www.nvidia.com/' },
    { name:'MathWorks',     logo:'assets/logos/mathworks.png',     url:'https://www.mathworks.com/' },
    { name:'HunterDouglas', logo:'assets/logos/hunterdouglas.png', url:'https://www.hunterdouglas.com/' },
    { name:'IMA',           logo:'assets/logos/ima.png',           url:'https://indianmotorsportsacademy.com/' },
    { name:'Novoflex',      logo:'assets/logos/novoflex.png',      url:'https://www.novoflex.com/' },
    { name:'SBG Systems',   logo:'assets/logos/sbgsystems.png',    url:'https://www.sbg-systems.com/' },
    { name:'Batemo',        logo:'assets/logos/batemo.png',        url:'https://www.batemo.com/' },
    { name:'Electrifuel',   logo:'assets/logos/electrifuel.png',   url:'https://electrifuel.com/' },
    { name:'IPG',           logo:'assets/logos/ipg.png',           url:'https://ipg-automotive.com/' },
    { name:'Ramani',        logo:'assets/logos/ramani.png',        url:'https://www.ramani.com/' },
    { name:'VIT Vellore',   logo:'assets/logos/vit.png',           url:'https://vit.ac.in/' },
    { name:'Simscale',      logo:'assets/logos/simscale.png',      url:'https://www.simscale.com/' },
  ];

  const renderSet = (hidden) => sponsors.map(s =>
    `<a href="${s.url}" target="_blank" rel="noopener noreferrer"
        class="carousel-item"
        ${hidden ? 'aria-hidden="true" tabindex="-1"' : ''}>
       <img src="${s.logo}" alt="${s.name}" loading="lazy"
            onerror="this.closest('a').style.display='none'">
     </a>`
  ).join('');

  track.innerHTML = renderSet(false) + renderSet(true);

  // Hardcode duration to identically match the 32s in photo carousel CSS
  const duration = 32;
  track.style.animationDuration = duration + 's';
}

// ── HEADER SCROLL HIDE ───────────────────────────────────────
function setupHeaderScroll(){
  const nav = document.querySelector('.site-nav');
  if (!nav) return;

  let lastScrollY = window.scrollY;
  let ticking = false;
  const revealThreshold = 80;

  function onScroll(){
    const currentScrollY = window.scrollY;
    if (currentScrollY <= revealThreshold) {
      nav.classList.remove('nav-hidden');
    } else if (currentScrollY > lastScrollY) {
      nav.classList.add('nav-hidden');
      closeMenu();
    } else if (currentScrollY < lastScrollY) {
      nav.classList.remove('nav-hidden');
    }
    lastScrollY = currentScrollY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
  }, {passive: true});
}

function setupHeroParallax(){
  const heroCar = document.querySelector('.hero-car');
  const heroCopy = document.querySelector('.hero-copy');
  if(!heroCar) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if(!ticking){
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const scale = 1 + scrollY / 4000;
        heroCar.style.transform = `translateY(${scrollY * 0.25}px) scale(${scale})`;
        if(heroCopy) heroCopy.style.transform = `translateY(${scrollY * 0.08}px)`;
        ticking = false;
      });
      ticking = true;
    }
  }, {passive: true});
}

// ── CUSTOM CURSOR ────────────────────────────────────────────
function setupCursor(){
  console.log('pointer coarse?', matchMedia('(pointer: coarse)').matches);
  if (matchMedia('(pointer: coarse)').matches) return;
  document.addEventListener('mousemove', event => {
    cursorDot.style.left = `${event.clientX}px`;
    cursorDot.style.top = `${event.clientY}px`;
    cursorRing.style.left = `${event.clientX}px`;
    cursorRing.style.top = `${event.clientY}px`;
  });
  document.addEventListener('mousedown', () => { cursorRing.style.width = '20px'; cursorRing.style.height = '20px'; });
  document.addEventListener('mouseup', () => { cursorRing.style.width = '30px'; cursorRing.style.height = '30px'; });
}

// ── SCROLL REVEAL ────────────────────────────────────────────
function setupReveal(){
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── TIMELINE ANIMATION ───────────────────────────────────────
function setupTimelineAnimation(){
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.querySelectorAll('article').forEach((article,i) => {
          setTimeout(() => article.classList.add('tl-visible'), i * 140);
        });
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.2});
  const timeline = document.querySelector('.about-timeline');
  if(timeline) observer.observe(timeline);
}

// ── COUNT UP ─────────────────────────────────────────────────
function runCountUp(){
  document.querySelectorAll('.team-hero-stats .scan').forEach((el,i) => {
    el.style.transition = 'none';
    el.style.transform = 'translateX(-100%)';
    setTimeout(() => {
      el.style.transition = 'transform 1s ease-out';
      el.style.transform = 'translateX(200%)';
    }, i * 150);
  });
}

// ── ZZ LABEL VISIBILITY ──────────────────────────────────────
function setupZZLabels(){
  document.querySelectorAll('.zz-label').forEach(el => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) el.classList.add('visible');
        else el.classList.remove('visible');
      });
    }, {threshold:.5});
    observer.observe(el);
  });
}

// ── INIT ─────────────────────────────────────────────────────
setupNavigation();
window.addEventListener('popstate', (e) => {
  const page = e.state?.page || 'home';
  showPage(page);
});

const initialPage = window.location.hash.replace('#', '') || 'home';
const validPages = ['home','about','cars','team','achievements','sponsors'];
showPage(validPages.includes(initialPage) ? initialPage : 'home');
setupHeaderScroll();
setupCursor();
setupReveal();
setupTimelineAnimation();
setupZZLabels();
renderSponsors();
setupCarousel();
function animateTelemetry(){
  const panels = document.querySelectorAll('.telemetry-panel b');
  const targets = [
    {el: panels[1], from: 0, to: 80,  suffix: ' kW', decimals: 0},
    {el: panels[2], from: 0, to: 3.6, suffix: ' s',  decimals: 1},
  ];

  targets.forEach((item, i) => {
    setTimeout(() => {
      const steps = 40;
      let step = 0;
      const interval = setInterval(() => {
        step++;
        const value = (item.to / steps) * step;
        item.el.textContent = value.toFixed(item.decimals) + item.suffix;
        if(step >= steps){
          clearInterval(interval);
          item.el.textContent = item.to.toFixed(item.decimals) + item.suffix;
        }
      }, 800 / steps);
    }, i * 200);
  });
}

animateTelemetry();
setupHeroParallax();
document.querySelectorAll('[data-page]').forEach(btn => {
  if(btn.dataset.page === 'team') btn.addEventListener('click', () => setTimeout(runCountUp, 400));
});