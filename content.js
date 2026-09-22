export const roles = [
  { id:'flagship', no:'01', org:'Flagship Pioneering', role:'Associate, Origination', period:'2026 to present', place:'Cambridge, MA',
    body:"Drawing on my background as an engineer and researcher, I originate and build new companies at the intersection of AI and physics. My work spans every part of company creation, from the first idea through scientific and commercial strategy, operations, and hiring the early team." },

  { id:'caltech', no:'02', org:'Caltech', role:'Ph.D., Mechanical Engineering \u00b7 National Science Foundation Graduate Research Fellow', roleShort:'Ph.D., Mechanical Engineering \u00b7 NSF Fellow', period:'2020 to 2025', place:'Pasadena, CA',
    body:"During my PhD, I investigated a new drug delivery technique using fluid dynamics, heat transfer, and physics-informed machine learning. Periodic injections in the eye are the cornerstone treatment for several vision-threatening diseases, including wet age-related macular degeneration and diabetic retinopathy. However, effectiveness varies, and patients often continue to lose their vision. One likely cause for poor treatment outcomes is inefficient delivery: the drug has a limited half-life and may not reach its target in time. I asked whether gentle heating could create a buoyancy differential that moves medicine through the eye more quickly.",
    figuresLabel:'FIGURES',
    figures:[
      { id:'fa-caltech-video', ratio:'1/1', w:'340px', video:'./caltech-pathlines.mp4', cap:'Two-dimensional particle pathlines, overlaid experiment images' },
      { id:'fa-caltech-video-3d', ratio:'4/3', w:'453px', video:'./caltech-pathlines-3d.mp4', cap:'Three-dimensional particle pathlines calculated from experimental data' },
    ],
    projectsLabel:'THREE PARTS OF THE THESIS',
    projects:[
      { tag:'1', title:'An optically matched eye model',
        body:"Quantitative measurement of fluid motion first required an eye model that could be imaged without distortion. I ran an optical distortion study to identify a vitreous substitute matching both the viscosity of the human vitreous and the refractive index of the model." },
      { tag:'2', title:'Measuring how heat moves fluid inside the eye',
        body:"Using that model, I mapped how gentle heating sets fluid in motion. I ran volumetric three-dimensional flow measurement experiments to see how different heating parameters change the flow, and used Lagrangian particle tracking to understand how a drug could be directed toward its target." },
      { tag:'3', title:'A physics-informed model to predict the flow',
        body:"Volumetric three-component fluid measurement experiments demand minimal optical distortion, precise camera calibration, and heavy computation. To reduce that burden, I developed a physics-informed neural network constrained by conservation of mass and momentum and the boundary conditions, so a volumetric flow field can be predicted from planar measurements alone." },
    ] },

  { id:'seed-fund', no:'03', org:'Caltech Seed Fund', role:'Entrepreneurship Intern, Office of Technology Transfer', period:'2021 to 2024', place:'Pasadena, CA',
    body:"Working with the Caltech Seed Fund and Office of Technology Transfer, I evaluated the commercial potential of my own research. I assessed technical and market viability through interviews with clinicians, investors, and industry leaders to determine which technologies had a credible path to patients. My business plan for the ocular drug delivery work won $10K in a campus-wide competition." },

  { id:'konrad', no:'04', org:'Konrad Group', role:'Strategy & Technology Consultant', period:'2018 to 2019', place:'New York, NY',
    body:"I partnered with clients across healthcare, education, and pharmaceutical R&D to shape software and product strategy, translating business objectives into defined product requirements and roadmaps. I managed projects between clients and in-house designers and developers, from scoping to delivery." },

  { id:'fulbright', no:'05', org:'Fulbright', role:'Researcher', period:'2016 to 2017', place:'Indonesia',
    body:"My Fulbright was awarded for lab research in Jakarta, which fell through on arrival. I spent three months in language classes while cold-calling government officials, professors, and NGOs to find a new project. I found that no regional data existed on agricultural waste, despite its importance to Indonesia\u2019s renewable energy targets. I moved to Lombok and collected it myself, interviewing farmers village to village, then analyzed the data, presented the findings at several universities, and submitted a report to the Indonesian government.",
    figuresLabel:'FIELDWORK',
    figures:[
      { id:'fa-fulbright', side:true, ratio:'3/4', w:'240px', photo:'./fulbright-rice.jpg', alt:'Rice harvest in Lombok', cap:'Rice harvest, Lombok' },
    ] },

  { id:'columbia', no:'06', org:'Columbia University', role:'B.S., Mechanical Engineering', period:'2014 to 2016', place:'New York, NY',
    body:"I earned my B.S. in Mechanical Engineering from Columbia, where I built the engineering foundation I still rely on today. I also conducted research on manufacturing solar panels to increase cell efficiency, which ignited my love of research." },

  { id:'coast-guard', no:'07', org:'U.S. Coast Guard Academy', role:'Cadet', period:'2012 to 2014', place:'New London, CT',
    body:"I started college as a cadet at the United States Coast Guard Academy. Early on, I learned discipline, service, and teamwork.",
    figures:[
      { id:'fa-coast-guard', side:true, ratio:'3/4', w:'240px', photo:'./coast-guard.jpg', alt:'Aboard a Coast Guard cutter', cap:'Underway' },
    ] },
];

export const pubs = [
  { title:'Index Matching for Quantitative Measurements in an In-Vitro Vitreous Eye Model', venue:"Stephanie O\u2019Gara, M. Koochesfahani, M. Gharib. Experiments in Fluids, 2026", tag:'JOURNAL', href:'https://link.springer.com/article/10.1007/s00348-026-04211-4' },
  { title:'DDPIV of Heat-Driven Convection in an In-Vitro Eye Model', venue:'78th Annual Meeting of the APS Division of Fluid Dynamics, Houston, November 24, 2025', tag:'CONFERENCE' },
  { title:'Buoyancy-Driven Fluid Dynamics for Enhanced Ocular Drug Delivery', venue:"Stephanie O\u2019Gara. Ph.D. Dissertation, California Institute of Technology, 2025", tag:'THESIS', href:'https://thesis.caltech.edu/17283/' },
  { title:'Development of Machine Learning Tools for Aerospace Design: Wind Tunnel Investigations on a Speed Bump Model', venue:'Humml, Oshima, Stephanie O\u2019Gara, Rusch, Gharib, Lee, Khodadoust. AIAA SciTech Forum, 2024', tag:'PROCEEDINGS' },
];
