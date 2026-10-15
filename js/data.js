/**
 * RKris Academy — editable site content
 * ------------------------------------
 * Update this file to change copy, contact details, lists and placeholder media.
 * Image URLs currently use https://placehold.co — replace with local files in /assets/images
 * e.g. 'assets/images/hero-1.jpg'
 */

const SITE_INFO = {
  name: 'RKris Academy',
  shortName: 'RKris',
  tagline: 'Nurturing Minds. Building Character. Shaping Futures.',
  established: 2008,
  session: '2026-27',
  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  phone2: '+91 98765 43211',
  phone2Href: 'tel:+919876543211',
  email: 'info@rkrisacademy.edu.in',
  admissionsEmail: 'admissions@rkrisacademy.edu.in',
  address: 'Plot 21, Knowledge Park, Sector 12, Your City, State 201301, India',
  whatsapp: '919876543210',
  whatsappDisplay: '+91 98765 43210',
  workingHours: 'Monday – Saturday: 8:00 AM – 4:00 PM',
  officeNote: 'Office remains closed on Sundays and gazetted holidays.',
  affiliationBoard: 'CBSE',
  affiliationNo: 'XXXXXXX',
  schoolCode: 'XXXXXX',
  udise: 'XXXXXXXXXXXXX',
  principalName: 'Dr. Meera Sharma',
  principalTitle: 'Principal',
  mapEmbed: 'https://maps.google.com/maps?q=Knowledge%20Park%20India&t=&z=14&ie=UTF8&iwloc=&output=embed',
  mapDirections: 'https://www.google.com/maps/search/?api=1&query=Knowledge+Park+India',
  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    youtube: 'https://www.youtube.com/',
    twitter: 'https://twitter.com/',
    linkedin: 'https://www.linkedin.com/'
  }
};

const KEY_FACTS = [
  { label: 'Years of Excellence', value: 18, suffix: '+' },
  { label: 'Students', value: 2400, suffix: '+' },
  { label: 'Teachers', value: 140, suffix: '+' },
  { label: 'Sports and Activities', value: 32, suffix: '+' }
];

const ANNOUNCEMENTS = [
  { date: '2026-04-02', text: 'Admissions for session 2026-27 are now open for Nursery to Class XI.' },
  { date: '2026-03-28', text: 'Holiday list for the new academic session has been published under Circulars.' },
  { date: '2026-03-20', text: 'Parent orientation for Classes I–V will be held on 10 April 2026.' },
  { date: '2026-03-12', text: 'Inter-house sports trials begin next week. Check the Notice Board for schedules.' },
  { date: '2026-03-05', text: 'Annual day photographs have been added to the Gallery.' }
];

const FACILITIES = [
  {
    slug: 'facilities-overview',
    title: 'Facilities at RKris Academy',
    short: 'A purpose-built campus designed for academics, sport, arts and student wellbeing.',
    description: 'RKris Academy offers a well-planned campus where classrooms, labs, playfields and activity studios sit together in a safe, green setting. Every facility is maintained to support both scholastic and co-scholastic growth, from the early years through senior secondary.',
    features: [
      'Spacious, well-ventilated academic blocks',
      'Dedicated sports and performing-arts zones',
      'Age-appropriate play and learning spaces',
      'On-campus infirmary and counselling room',
      'Transport and secure entry management'
    ],
    image: 'assets/images/photo-assembly.jpg',
    gallery: [
      'assets/images/photo-assembly.jpg',
      'assets/images/photo-karate.jpg',
      'assets/images/photo-horse-riding.jpg'
    ]
  },
  {
    slug: 'smart-classrooms',
    title: 'Smart Classrooms',
    short: 'Interactive boards, audio-visual lessons and comfortable, well-lit learning spaces.',
    description: 'Every classroom is equipped with digital boards, projection and reliable connectivity so teachers can blend textbooks with multimedia, simulations and collaborative tasks. Furniture, lighting and acoustics are planned for long, focused school days.',
    features: [
      'Interactive display in every room',
      'Teacher device and content library access',
      'Ergonomic seating and natural light',
      'Subject-wise digital lesson support'
    ],
    image: 'https://placehold.co/1200x640/0b3d6e/ffffff?text=Smart+Classrooms',
    gallery: [
      'https://placehold.co/800x560/1a5a94/ffffff?text=Digital+Board',
      'https://placehold.co/800x560/0b3d6e/f4b942?text=Classroom'
    ]
  },
  {
    slug: 'sports-complex',
    title: 'Sports Complex',
    short: 'Courts, fields and indoor spaces for team games, athletics and fitness.',
    description: 'The sports complex includes outdoor fields, courts and an indoor area for year-round training. Students take part in house matches, inter-school events and structured PE from the primary years onwards.',
    features: [
      'Football and athletics field',
      'Basketball and badminton courts',
      'Indoor table-tennis and fitness corner',
      'Qualified coaches and first-aid cover'
    ],
    image: 'assets/images/photo-karate.jpg',
    gallery: [
      'assets/images/photo-karate.jpg',
      'assets/images/photo-horse-riding.jpg'
    ]
  },
  {
    slug: 'computer-lab',
    title: 'Computer Lab',
    short: 'Modern workstations, updated software and supervised digital-skills practice.',
    description: 'The computer lab gives students hands-on time with productivity tools, research skills and introductory programming. Machines are refreshed on a planned cycle and internet access is filtered for school use.',
    features: [
      'Dedicated junior and senior lab slots',
      'Updated operating systems and software',
      'Teacher-supervised internet access',
      'Printing and project-submission support'
    ],
    image: 'https://placehold.co/1200x640/0b3d6e/ffffff?text=Computer+Lab',
    gallery: [
      'https://placehold.co/800x560/1a5a94/ffffff?text=Workstations',
      'https://placehold.co/800x560/0b3d6e/f4b942?text=Lab+Session'
    ]
  },
  {
    slug: 'library',
    title: 'Library',
    short: 'A quiet, well-stocked library with fiction, reference and digital resources.',
    description: 'The library is the reading heart of the campus. Age-wise collections, periodicals and a small digital catalogue help students build research habits and a love of books. Reading periods are timetabled for younger classes.',
    features: [
      'Fiction, non-fiction and reference sections',
      'Junior reading corner',
      'Periodicals and newspapers',
      'Issue and return through a simple catalogue'
    ],
    image: 'https://placehold.co/1200x640/0b3d6e/ffffff?text=Library',
    gallery: [
      'https://placehold.co/800x560/1a5a94/ffffff?text=Stacks',
      'https://placehold.co/800x560/0a2540/f4b942?text=Reading+Corner'
    ]
  },
  {
    slug: 'performing-arts-studio',
    title: 'Performing Arts and Activity Studio',
    short: 'Music, theatre, art and club activities in dedicated studio spaces.',
    description: 'The performing-arts and activity studio hosts music, dance practice, theatre workshops and visual-art clubs. Students prepare for assemblies, annual productions and inter-school cultural events in a space built for rehearsal and display.',
    features: [
      'Music and rehearsal room',
      'Art and craft studio',
      'Stage practice area',
      'Club storage and display boards'
    ],
    image: 'assets/images/photo-craft.jpg',
    gallery: [
      'assets/images/photo-craft.jpg',
      'assets/images/photo-assembly.jpg'
    ]
  },
  {
    slug: 'computer-education-coding',
    title: 'Comprehensive Computer Education and Coding',
    short: 'A structured digital curriculum from basics to coding and computational thinking.',
    description: 'Computer education at RKris Academy goes beyond typing. Learners progress from digital literacy to block-based and text-based coding, with short projects that connect to maths, science and design.',
    features: [
      'Age-wise digital literacy syllabus',
      'Block coding in middle school',
      'Introductory Python and web basics for seniors',
      'Mini projects and coding club'
    ],
    image: 'https://placehold.co/1200x640/0b3d6e/ffffff?text=Coding+Lab',
    gallery: [
      'https://placehold.co/800x560/1a5a94/ffffff?text=Coding+Club',
      'https://placehold.co/800x560/0a2540/f4b942?text=Projects'
    ]
  },
  {
    slug: 'swimming-horse-riding',
    title: 'Swimming and Horse Riding Programs',
    short: 'Optional swimming and horse-riding modules with trained instructors and safety rules.',
    description: 'Selected activity blocks include swimming and introductory horse riding, offered as structured programmes with consent, batching by age and clear safety protocols. Schedules are shared each term through circulars.',
    features: [
      'Trained instructors and lifeguard cover for swimming',
      'Beginner-friendly horse-riding orientation',
      'Parental consent and batch allocation',
      'Term-wise timetable published in circulars'
    ],
    image: 'assets/images/photo-horse-riding.jpg',
    gallery: [
      'assets/images/photo-horse-riding.jpg',
      'assets/images/photo-karate.jpg'
    ]
  },
  {
    slug: 'karate-dance',
    title: 'Karate and Dance Classes',
    short: 'Discipline, fitness and expression through karate and a range of dance forms.',
    description: 'After-school and club slots include karate for focus and self-discipline, and dance classes covering contemporary and Indian forms. Students may present their work at assemblies and the annual cultural evening.',
    features: [
      'Belt-graded karate batches',
      'Western and Indian dance options',
      'Performance opportunities each term',
      'Trained specialist instructors'
    ],
    image: 'assets/images/photo-karate.jpg',
    gallery: [
      'assets/images/photo-karate.jpg',
      'assets/images/photo-craft.jpg'
    ]
  },
  {
    slug: 'sports-racing',
    title: 'Sports and Racing Activities',
    short: 'Athletics, track events and recreational racing activities for competitive and fitness goals.',
    description: 'Beyond team games, students can join athletics, fun races and age-appropriate racing activities that build stamina and sportsmanship. Annual sports day remains a highlight of the school calendar.',
    features: [
      'Track and field practice',
      'Inter-house racing events',
      'Fitness circuits for seniors',
      'Sports-day championships'
    ],
    image: 'assets/images/photo-karate.jpg',
    gallery: [
      'assets/images/photo-karate.jpg',
      'assets/images/photo-horse-riding.jpg'
    ]
  },
  {
    slug: 'online-evening-support',
    title: 'Online and Evening Support Classes',
    short: 'Optional doubt support and revision slots after school, including online sessions.',
    description: 'Students who need extra practice can join scheduled evening or online support classes for selected subjects. These are revision-focused, not a substitute for regular classroom teaching.',
    features: [
      'Subject-wise support timetable',
      'Small-group doubt sessions',
      'Online option for selected grades',
      'Exam-revision windows before assessments'
    ],
    image: 'https://placehold.co/1200x640/0b3d6e/ffffff?text=Support+Classes',
    gallery: [
      'https://placehold.co/800x560/1a5a94/ffffff?text=Evening+Class',
      'https://placehold.co/800x560/0a2540/f4b942?text=Online+Session'
    ]
  },
  {
    slug: 'experiential-learning',
    title: 'Experiential Learning with Regular Doubt-Clearing Sessions',
    short: 'Projects, labs and weekly doubt-clearing so concepts are practised, not only memorised.',
    description: 'Lesson plans include experiments, field tasks and projects. Weekly doubt-clearing periods give students time to ask questions before they accumulate. Teachers use these slots for targeted practice.',
    features: [
      'Project and lab-based units',
      'Weekly doubt-clearing periods',
      'Peer-learning circles in middle school',
      'Exhibition of student projects'
    ],
    image: 'assets/images/photo-craft.jpg',
    gallery: [
      'assets/images/photo-craft.jpg',
      'assets/images/photo-karate.jpg'
    ]
  },
  {
    slug: 'holistic-wellness',
    title: 'Holistic Wellness and Life-Skills Program',
    short: 'Counselling, life-skills workshops and wellbeing activities across the year.',
    description: 'The wellness programme covers socio-emotional learning, age-appropriate life skills, and access to a school counsellor. Assemblies and workshops address digital safety, kindness and healthy routines.',
    features: [
      'School counsellor on campus',
      'Life-skills modules by grade band',
      'Wellbeing assemblies and workshops',
      'Referral pathway for additional support'
    ],
    image: 'https://placehold.co/1200x640/0b3d6e/ffffff?text=Wellness',
    gallery: [
      'https://placehold.co/800x560/1a5a94/ffffff?text=Workshop',
      'https://placehold.co/800x560/0a2540/f4b942?text=Life+Skills'
    ]
  },
  {
    slug: 'safe-secure-campus',
    title: 'Safe and Secure Campus',
    short: 'Controlled entry, CCTV coverage, trained staff and a clear visitor protocol.',
    description: 'Student safety is planned into daily operations: gated entry, visitor passes, CCTV in common areas, transport tracking where opted, and regular safety drills. The infirmary handles first response during school hours.',
    features: [
      'Controlled gate and visitor management',
      'CCTV in corridors and common areas',
      'Transport attendance for opted routes',
      'Fire and evacuation drills'
    ],
    image: 'https://placehold.co/1200x640/0b3d6e/ffffff?text=Campus+Safety',
    gallery: [
      'https://placehold.co/800x560/1a5a94/ffffff?text=Entrance',
      'https://placehold.co/800x560/0b3d6e/f4b942?text=Infirmary'
    ]
  },
  {
    slug: 'experienced-faculty',
    title: 'Experienced and Caring Faculty',
    short: 'Subject specialists and class teachers who combine academic rigour with pastoral care.',
    description: 'Faculty members are appointed for subject expertise and the ability to work with children. Regular planning meetings, classroom observation and professional development keep teaching current and consistent.',
    features: [
      'Qualified subject specialists',
      'Class-teacher pastoral system',
      'In-house professional development',
      'Transparent communication with parents'
    ],
    image: 'https://placehold.co/1200x640/0b3d6e/ffffff?text=Faculty',
    gallery: [
      'https://placehold.co/800x560/1a5a94/ffffff?text=Staff',
      'https://placehold.co/800x560/0a2540/f4b942?text=Training'
    ]
  },
  {
    slug: 'value-based-education',
    title: 'Value-Based Education with Moral and Ethical Learning',
    short: 'Daily assemblies, circles and curriculum links that put values into practice.',
    description: 'Value education is not a separate slogan. Assemblies, circle time and subject links help students practise honesty, respect, empathy and responsibility. Community service and house activities reinforce the same habits.',
    features: [
      'Weekly value theme in assemblies',
      'Class circle-time in junior school',
      'Community and house service tasks',
      'Recognition for citizenship, not only marks'
    ],
    image: 'assets/images/photo-assembly.jpg',
    gallery: [
      'assets/images/photo-assembly.jpg',
      'assets/images/photo-craft.jpg'
    ]
  },
  {
    slug: 'overall-development',
    title: 'Focus on Overall Student Development',
    short: 'Academics, sport, arts, leadership and wellbeing planned as one school experience.',
    description: 'Overall development is built into the timetable: clubs, houses, student council, exhibitions and outdoor activities sit beside board-focused academics. The aim is confident, capable students who can work hard and work with others.',
    features: [
      'House system and student council',
      'Clubs across arts, STEM and service',
      'Leadership roles from middle school',
      'Balanced assessment of scholastic and co-scholastic areas'
    ],
    image: 'assets/images/photo-assembly.jpg',
    gallery: [
      'assets/images/photo-assembly.jpg',
      'assets/images/photo-craft.jpg',
      'assets/images/photo-horse-riding.jpg'
    ]
  }
];

const FACULTY = [
  { id: 'f1', name: 'Dr. Meera Sharma', designation: 'Principal', qualifications: 'M.A., B.Ed., Ph.D.', subject: 'Educational Leadership', experience: '22 years', department: 'administration', photo: 'https://placehold.co/400x400/0b3d6e/ffffff?text=MS' },
  { id: 'f2', name: 'Mr. Arvind Patel', designation: 'Vice Principal', qualifications: 'M.Sc., B.Ed.', subject: 'Administration', experience: '18 years', department: 'administration', photo: 'https://placehold.co/400x400/1a5a94/ffffff?text=AP' },
  { id: 'f3', name: 'Ms. Kavita Rao', designation: 'Pre-Primary Coordinator', qualifications: 'M.A., NTT, B.Ed.', subject: 'Early Years', experience: '14 years', department: 'pre-primary', photo: 'https://placehold.co/400x400/0b3d6e/ffffff?text=KR' },
  { id: 'f4', name: 'Ms. Anjali Nair', designation: 'Early Years Teacher', qualifications: 'B.A., NTT', subject: 'Pre-Primary', experience: '8 years', department: 'pre-primary', photo: 'https://placehold.co/400x400/1a5a94/ffffff?text=AN' },
  { id: 'f5', name: 'Mr. Rohan Desai', designation: 'Primary Teacher', qualifications: 'M.Sc., B.Ed.', subject: 'Mathematics', experience: '11 years', department: 'primary', photo: 'https://placehold.co/400x400/0b3d6e/ffffff?text=RD' },
  { id: 'f6', name: 'Ms. Priya Iyer', designation: 'Primary Teacher', qualifications: 'M.A., B.Ed.', subject: 'English', experience: '9 years', department: 'primary', photo: 'https://placehold.co/400x400/1a5a94/ffffff?text=PI' },
  { id: 'f7', name: 'Mr. Suresh Menon', designation: 'Middle School Teacher', qualifications: 'M.Sc., B.Ed.', subject: 'Science', experience: '13 years', department: 'middle', photo: 'https://placehold.co/400x400/0b3d6e/ffffff?text=SM' },
  { id: 'f8', name: 'Ms. Neha Gupta', designation: 'Middle School Teacher', qualifications: 'M.A., B.Ed.', subject: 'Social Science', experience: '10 years', department: 'middle', photo: 'https://placehold.co/400x400/1a5a94/ffffff?text=NG' },
  { id: 'f9', name: 'Dr. Amit Khanna', designation: 'PGT Physics', qualifications: 'M.Sc., B.Ed., Ph.D.', subject: 'Physics', experience: '16 years', department: 'secondary', photo: 'https://placehold.co/400x400/0b3d6e/ffffff?text=AK' },
  { id: 'f10', name: 'Ms. Farah Khan', designation: 'PGT English', qualifications: 'M.A., B.Ed.', subject: 'English', experience: '12 years', department: 'secondary', photo: 'https://placehold.co/400x400/1a5a94/ffffff?text=FK' },
  { id: 'f11', name: 'Mr. Vikram Singh', designation: 'Sports Coach', qualifications: 'M.P.Ed.', subject: 'Physical Education', experience: '15 years', department: 'sports-arts', photo: 'https://placehold.co/400x400/0b3d6e/ffffff?text=VS' },
  { id: 'f12', name: 'Ms. Lata Krishnan', designation: 'Performing Arts', qualifications: 'M.A. Music', subject: 'Music & Dance', experience: '11 years', department: 'sports-arts', photo: 'https://placehold.co/400x400/1a5a94/ffffff?text=LK' }
];

const MANAGEMENT = [
  { name: 'Mr. R. Krishnan', designation: 'Chairperson', photo: 'https://placehold.co/400x480/0b3d6e/ffffff?text=Chairperson', bio: 'Provides strategic direction and oversight for the academy.' },
  { name: 'Ms. S. Iyer', designation: 'Director', photo: 'https://placehold.co/400x480/1a5a94/ffffff?text=Director', bio: 'Leads academic quality, infrastructure and community partnerships.' },
  { name: 'Dr. Meera Sharma', designation: 'Principal', photo: 'https://placehold.co/400x480/0a2540/f4b942?text=Principal', bio: 'Heads day-to-day academics, student welfare and staff development.' },
  { name: 'Mr. Arvind Patel', designation: 'Vice Principal', photo: 'https://placehold.co/400x480/0b3d6e/ffffff?text=Vice+Principal', bio: 'Supports examinations, discipline and parent communication.' }
];

const CERTIFICATES = [
  { title: 'CBSE Affiliation Letter', image: 'https://placehold.co/600x800/f5f7fa/0b3d6e?text=Affiliation', file: 'assets/docs/prospectus.pdf' },
  { title: 'Society Registration', image: 'https://placehold.co/600x800/f5f7fa/0b3d6e?text=Registration', file: 'assets/docs/prospectus.pdf' },
  { title: 'Recognition Certificate', image: 'https://placehold.co/600x800/f5f7fa/0b3d6e?text=Recognition', file: 'assets/docs/prospectus.pdf' },
  { title: 'Fire Safety Certificate', image: 'https://placehold.co/600x800/f5f7fa/0b3d6e?text=Fire+Safety', file: 'assets/docs/prospectus.pdf' },
  { title: 'Building Safety Certificate', image: 'https://placehold.co/600x800/f5f7fa/0b3d6e?text=Building+Safety', file: 'assets/docs/prospectus.pdf' },
  { title: 'Water and Sanitation', image: 'https://placehold.co/600x800/f5f7fa/0b3d6e?text=WASH', file: 'assets/docs/prospectus.pdf' }
];

const GALLERY_PHOTOS = [
  { id: 'p-assembly', src: 'assets/images/photo-assembly.jpg', thumb: 'assets/images/photo-assembly.jpg', alt: 'School function with parents and staff under the campus tent', category: 'events' },
  { id: 'p-karate', src: 'assets/images/photo-karate.jpg', thumb: 'assets/images/photo-karate.jpg', alt: 'Karate class in session on the school grounds', category: 'sports' },
  { id: 'p-craft', src: 'assets/images/photo-craft.jpg', thumb: 'assets/images/photo-craft.jpg', alt: 'Student making a tricolour paper craft in class', category: 'activities' },
  { id: 'p-horse', src: 'assets/images/photo-horse-riding.jpg', thumb: 'assets/images/photo-horse-riding.jpg', alt: 'Student on horseback during the horse-riding programme', category: 'activities' },
  { id: 'p1', src: 'https://placehold.co/900x700/0b3d6e/ffffff?text=Campus+Gate', thumb: 'https://placehold.co/600x460/0b3d6e/ffffff?text=Campus+Gate', alt: 'Main campus entrance', category: 'campus' },
  { id: 'p2', src: 'https://placehold.co/900x700/1a5a94/ffffff?text=Academic+Block', thumb: 'https://placehold.co/600x460/1a5a94/ffffff?text=Academic+Block', alt: 'Academic block exterior', category: 'campus' },
  { id: 'p3', src: 'https://placehold.co/900x700/0a2540/f4b942?text=Library+Hall', thumb: 'https://placehold.co/600x460/0a2540/f4b942?text=Library+Hall', alt: 'School library interior', category: 'campus' },
  { id: 'p4', src: 'https://placehold.co/900x700/0b3d6e/ffffff?text=Annual+Day', thumb: 'https://placehold.co/600x460/0b3d6e/ffffff?text=Annual+Day', alt: 'Annual day stage performance', category: 'events' },
  { id: 'p5', src: 'https://placehold.co/900x700/1a5a94/ffffff?text=Science+Fair', thumb: 'https://placehold.co/600x460/1a5a94/ffffff?text=Science+Fair', alt: 'Students at the science fair', category: 'events' },
  { id: 'p6', src: 'assets/images/photo-craft.jpg', thumb: 'assets/images/photo-craft.jpg', alt: 'Independence Day classroom craft', category: 'events' },
  { id: 'p7', src: 'https://placehold.co/900x700/1a5a94/ffffff?text=Football', thumb: 'https://placehold.co/600x460/1a5a94/ffffff?text=Football', alt: 'Football match on the school field', category: 'sports' },
  { id: 'p8', src: 'https://placehold.co/900x700/0a2540/ffffff?text=Athletics', thumb: 'https://placehold.co/600x460/0a2540/ffffff?text=Athletics', alt: 'Athletics track event', category: 'sports' },
  { id: 'p9', src: 'https://placehold.co/900x700/0b3d6e/ffffff?text=Basketball', thumb: 'https://placehold.co/600x460/0b3d6e/ffffff?text=Basketball', alt: 'Basketball practice', category: 'sports' },
  { id: 'p10', src: 'https://placehold.co/900x700/1a5a94/f4b942?text=Olympiad', thumb: 'https://placehold.co/600x460/1a5a94/f4b942?text=Olympiad', alt: 'Olympiad award ceremony', category: 'achievements' },
  { id: 'p11', src: 'https://placehold.co/900x700/0b3d6e/ffffff?text=Debate+Trophy', thumb: 'https://placehold.co/600x460/0b3d6e/ffffff?text=Debate+Trophy', alt: 'Inter-school debate trophy', category: 'achievements' },
  { id: 'p12', src: 'assets/images/photo-craft.jpg', thumb: 'assets/images/photo-craft.jpg', alt: 'Art and craft activity in class', category: 'activities' },
  { id: 'p13', src: 'https://placehold.co/900x700/1a5a94/ffffff?text=Music+Class', thumb: 'https://placehold.co/600x460/1a5a94/ffffff?text=Music+Class', alt: 'Music class in the studio', category: 'activities' },
  { id: 'p14', src: 'https://placehold.co/900x700/0b3d6e/f4b942?text=Coding+Club', thumb: 'https://placehold.co/600x460/0b3d6e/f4b942?text=Coding+Club', alt: 'Coding club session', category: 'activities' }
];

const GALLERY_VIDEOS = [
  { id: 'v1', title: 'Campus Virtual Tour', youtubeId: '', thumbnail: 'https://placehold.co/640x360/0b3d6e/ffffff?text=Campus+Tour' },
  { id: 'v2', title: 'Annual Day Highlights', youtubeId: '', thumbnail: 'https://placehold.co/640x360/1a5a94/ffffff?text=Annual+Day' },
  { id: 'v3', title: 'Sports Day 2025', youtubeId: '', thumbnail: 'https://placehold.co/640x360/0a2540/f4b942?text=Sports+Day' },
  { id: 'v4', title: 'A Day in Senior School', youtubeId: '', thumbnail: 'https://placehold.co/640x360/0b3d6e/ffffff?text=Senior+School' }
];

const NOTICES = [
  { id: 'n1', date: '2026-04-01', title: 'New academic session orientation circular', category: 'notice', excerpt: 'Orientation dates for Nursery to Class XII have been scheduled.' },
  { id: 'n2', date: '2026-03-26', title: 'PTA meeting for Classes VI–VIII', category: 'news', excerpt: 'Parents are invited to the mid-term PTA in the multipurpose hall.' },
  { id: 'n3', date: '2026-03-18', title: 'Inter-house debate registrations open', category: 'event', excerpt: 'Middle and secondary students may register through class teachers.' },
  { id: 'n4', date: '2026-03-10', title: 'Transport route revision from April', category: 'notice', excerpt: 'Updated pickup times will be shared with opted families.' },
  { id: 'n5', date: '2026-03-02', title: 'Science exhibition winners announced', category: 'news', excerpt: 'Congratulations to all house teams for a strong showing.' },
  { id: 'n6', date: '2026-02-20', title: 'Founders’ Day rehearsal schedule', category: 'event', excerpt: 'Performing groups should check the activity notice board.' },
  { id: 'n7', date: '2026-02-12', title: 'Library week book fair', category: 'news', excerpt: 'A three-day book fair will be held in the junior lobby.' },
  { id: 'n8', date: '2026-02-05', title: 'Assessment 2 date sheet released', category: 'notice', excerpt: 'Date sheets are available under Circulars > Date Sheets.' }
];

const EVENTS = [
  { id: 'e1', date: '2026-04-10', title: 'Parent Orientation — Classes I–V', category: 'upcoming', location: 'Auditorium', excerpt: 'Welcome briefing for families joining or continuing in primary school.' },
  { id: 'e2', date: '2026-04-18', title: 'House Investiture Ceremony', category: 'upcoming', location: 'Main Assembly Ground', excerpt: 'Student council and house captains will take the oath of office.' },
  { id: 'e3', date: '2026-05-02', title: 'Inter-house Football (Senior)', category: 'upcoming', location: 'Sports Complex', excerpt: 'League matches begin after school on weekdays.' },
  { id: 'e4', date: '2026-06-21', title: 'International Yoga Day', category: 'upcoming', location: 'Indoor Hall', excerpt: 'All classes will join a morning wellness assembly.' },
  { id: 'e5', date: '2026-02-15', title: 'Annual Day 2026', category: 'recent', location: 'Auditorium', excerpt: 'A celebration of music, theatre and student leadership.', image: 'assets/images/photo-assembly.jpg' },
  { id: 'e6', date: '2026-01-26', title: 'Republic Day', category: 'recent', location: 'Assembly Ground', excerpt: 'Flag hoisting followed by a cultural programme.', image: 'assets/images/photo-craft.jpg' },
  { id: 'e7', date: '2025-12-12', title: 'Winter Carnival', category: 'recent', location: 'Campus Lawn', excerpt: 'Games, food stalls and student-run activity booths.', image: 'https://placehold.co/800x520/0a2540/f4b942?text=Carnival' },
  { id: 'e8', date: '2025-11-14', title: 'Children’s Day', category: 'recent', location: 'Campus', excerpt: 'Special assemblies and staff-led performances.', image: 'https://placehold.co/800x520/0b3d6e/ffffff?text=Childrens+Day' }
];

const CIRCULARS = [
  { id: 'c1', title: 'Academic Session 2026-27 — Opening Circular', date: '2026-03-28', classGroup: 'All', category: 'circulars', file: 'assets/docs/prospectus.pdf' },
  { id: 'c2', title: 'Uniform and Grooming Guidelines', date: '2026-03-22', classGroup: 'All', category: 'circulars', file: 'assets/docs/prospectus.pdf' },
  { id: 'c3', title: 'Fee Payment Schedule — Term 1', date: '2026-03-18', classGroup: 'All', category: 'circulars', file: 'assets/docs/fee-structure.pdf' },
  { id: 'c4', title: 'Parent Orientation Schedule', date: '2026-03-12', classGroup: 'I–V', category: 'circulars', file: 'assets/docs/prospectus.pdf' },
  { id: 'c5', title: 'Transport Safety Advisory', date: '2026-03-05', classGroup: 'All', category: 'circulars', file: 'assets/docs/prospectus.pdf' },
  { id: 'c6', title: 'Class-wise Time Table — April 2026', date: '2026-03-30', classGroup: 'All', category: 'timetable', file: 'assets/docs/prospectus.pdf' },
  { id: 'c7', title: 'Activity Period Time Table', date: '2026-03-25', classGroup: 'VI–VIII', category: 'timetable', file: 'assets/docs/prospectus.pdf' },
  { id: 'c8', title: 'Syllabus Overview — Term 1 (Primary)', date: '2026-03-20', classGroup: 'I–V', category: 'syllabus', file: 'assets/docs/prospectus.pdf' },
  { id: 'c9', title: 'Syllabus Overview — Term 1 (Middle)', date: '2026-03-20', classGroup: 'VI–VIII', category: 'syllabus', file: 'assets/docs/prospectus.pdf' },
  { id: 'c10', title: 'Syllabus Overview — Term 1 (Secondary)', date: '2026-03-20', classGroup: 'IX–XII', category: 'syllabus', file: 'assets/docs/prospectus.pdf' },
  { id: 'c11', title: 'Holiday List 2026-27', date: '2026-03-15', classGroup: 'All', category: 'holiday', file: 'assets/docs/prospectus.pdf' },
  { id: 'c12', title: 'List of Restricted Holidays', date: '2026-03-15', classGroup: 'All', category: 'holiday', file: 'assets/docs/prospectus.pdf' },
  { id: 'c13', title: 'Periodic Test 1 Date Sheet', date: '2026-04-20', classGroup: 'VI–XII', category: 'datesheet', file: 'assets/docs/prospectus.pdf' },
  { id: 'c14', title: 'Unit Test Date Sheet — Primary', date: '2026-04-18', classGroup: 'I–V', category: 'datesheet', file: 'assets/docs/prospectus.pdf' },
  { id: 'c15', title: 'Transfer Certificate Format', date: '2026-01-10', classGroup: 'All', category: 'forms', file: 'assets/docs/admission-form.pdf' },
  { id: 'c16', title: 'Leave Application Format', date: '2026-01-10', classGroup: 'All', category: 'forms', file: 'assets/docs/admission-form.pdf' },
  { id: 'c17', title: 'Transport Request Form', date: '2026-02-01', classGroup: 'All', category: 'forms', file: 'assets/docs/admission-form.pdf' }
];

const TESTIMONIALS = [
  { name: 'Anita Rao', role: 'Parent of Class IV student', quote: 'The teachers know our child well and keep us informed. The campus feels safe, and activity options are genuine, not just listed on a brochure.', photo: 'https://placehold.co/160x160/0b3d6e/ffffff?text=AR' },
  { name: 'Vikram Malhotra', role: 'Parent of Class IX student', quote: 'Doubt-clearing sessions and a calm exam culture have helped our son become more independent. Communication from the school is timely.', photo: 'https://placehold.co/160x160/1a5a94/ffffff?text=VM' },
  { name: 'Sneha Kulkarni', role: 'Parent of Nursery student', quote: 'Settling into pre-primary was smooth. The early-years team is patient, and the classrooms are bright and organised.', photo: 'https://placehold.co/160x160/0a2540/f4b942?text=SK' },
  { name: 'Imran Qureshi', role: 'Parent of Class XI student', quote: 'Senior school subject teachers are approachable. Sports and clubs continue alongside board preparation, which we value.', photo: 'https://placehold.co/160x160/0b3d6e/ffffff?text=IQ' }
];

const AWARDS = [
  { title: 'British Council International School Award', year: '2024', image: 'https://placehold.co/400x280/0b3d6e/ffffff?text=Award+1' },
  { title: 'Green Campus Recognition', year: '2025', image: 'https://placehold.co/400x280/1a5a94/ffffff?text=Award+2' },
  { title: 'District Sports Champions — Football', year: '2025', image: 'https://placehold.co/400x280/0a2540/f4b942?text=Award+3' },
  { title: 'Excellence in Performing Arts', year: '2024', image: 'https://placehold.co/400x280/0b3d6e/ffffff?text=Award+4' },
  { title: 'Science Olympiad School Award', year: '2025', image: 'https://placehold.co/400x280/1a5a94/ffffff?text=Award+5' },
  { title: 'Community Service Commendation', year: '2023', image: 'https://placehold.co/400x280/0a2540/ffffff?text=Award+6' }
];

const FEE_STRUCTURE = [
  { classGroup: 'Nursery – KG', admission: '25,000', tuition: '6,800 / month', annual: '18,000', transport: 'Optional' },
  { classGroup: 'I – II', admission: '25,000', tuition: '7,200 / month', annual: '19,500', transport: 'Optional' },
  { classGroup: 'III – V', admission: '28,000', tuition: '7,800 / month', annual: '21,000', transport: 'Optional' },
  { classGroup: 'VI – VIII', admission: '30,000', tuition: '8,400 / month', annual: '22,500', transport: 'Optional' },
  { classGroup: 'IX – X', admission: '32,000', tuition: '9,200 / month', annual: '24,000', transport: 'Optional' },
  { classGroup: 'XI – XII', admission: '35,000', tuition: '10,500 / month', annual: '26,000', transport: 'Optional' }
];

const IMPORTANT_DATES = [
  { label: 'Registration opens', date: '1 November 2025' },
  { label: 'Last date for registration', date: '31 January 2026' },
  { label: 'Interaction / observation', date: 'February 2026 (by appointment)' },
  { label: 'Result / offer of admission', date: 'Within 7 working days of interaction' },
  { label: 'Fee payment for confirmation', date: 'Within 10 days of offer letter' },
  { label: 'Session begins', date: '2 April 2026' }
];

const ELIGIBILITY = [
  { className: 'Nursery', age: '3+ years as on 31 March 2026' },
  { className: 'KG', age: '4+ years as on 31 March 2026' },
  { className: 'Class I', age: '5+ years as on 31 March 2026' },
  { className: 'Class II–XII', age: 'As per CBSE age-appropriate norms and previous-class pass certificate' }
];

const CLASSES_OFFERED = [
  { stage: 'Pre-Primary', classes: 'Nursery, KG', age: '3–5 years' },
  { stage: 'Primary', classes: 'I – V', age: '6–10 years' },
  { stage: 'Middle', classes: 'VI – VIII', age: '11–13 years' },
  { stage: 'Secondary', classes: 'IX – X', age: '14–15 years' },
  { stage: 'Senior Secondary', classes: 'XI – XII', age: '16–17 years' }
];

const SUBJECTS_BY_STAGE = [
  { stage: 'Pre-Primary', subjects: ['Language readiness (English & Hindi)', 'Number readiness', 'Environmental awareness', 'Art, music and movement', 'Play-based social skills'] },
  { stage: 'Primary', subjects: ['English', 'Hindi', 'Mathematics', 'Environmental Studies / Science', 'Social Science (from Class III)', 'Computer Science', 'Art, Music, PE'] },
  { stage: 'Middle', subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Science', 'Computer Science / Coding', 'Third language options', 'Art, Music, PE'] },
  { stage: 'Secondary', subjects: ['English', 'Hindi / Sanskrit', 'Mathematics', 'Science', 'Social Science', 'Computer Applications (optional as offered)', 'Work Education, Art, PE'] },
  { stage: 'Senior Secondary', subjects: ['Science stream: Physics, Chemistry, Maths / Biology, English, optional CS / PE', 'Commerce stream: Accountancy, Business Studies, Economics, English, optional Maths / CS', 'Humanities stream: History, Political Science, Economics / Psychology, English, optional subjects as offered'] }
];

const ACADEMIC_CALENDAR = [
  { month: 'April 2026', events: 'New session, orientation, baseline assessments' },
  { month: 'May 2026', events: 'Periodic assessments, house activities, summer break begins (as notified)' },
  { month: 'June 2026', events: 'Summer break / limited support classes (as notified)' },
  { month: 'July 2026', events: 'School reopens, Term 1 teaching, clubs resume' },
  { month: 'August 2026', events: 'Independence Day, Periodic Test 2' },
  { month: 'September 2026', events: 'Half-yearly examinations, Teacher’s Day' },
  { month: 'October 2026', events: 'Term 2 begins, festival breaks as per holiday list' },
  { month: 'November 2026', events: 'Children’s Day, sports trials, Periodic Test 3' },
  { month: 'December 2026', events: 'Annual day / winter carnival, winter break' },
  { month: 'January 2027', events: 'School reopens, pre-board for X/XII, Republic Day' },
  { month: 'February 2027', events: 'Annual examinations for I–IX & XI, board practicals' },
  { month: 'March 2027', events: 'Board examinations, result processing, session close' }
];

const HISTORY_TIMELINE = [
  { year: '2008', text: 'RKris Academy is founded with a junior wing and a clear brief: rigorous academics with room for childhood.' },
  { year: '2012', text: 'Senior secondary section opens with Science and Commerce streams.' },
  { year: '2016', text: 'Sports complex and performing-arts studio are added to the campus.' },
  { year: '2020', text: 'Digital classrooms and a structured online-support programme are introduced.' },
  { year: '2024', text: 'Wellness programme and coding curriculum are expanded across middle and secondary school.' },
  { year: '2026', text: 'Admissions open for the 2026-27 session with continued focus on holistic growth.' }
];

const PRINCIPAL_MESSAGE = {
  excerpt: 'At RKris Academy we measure success not only by examination results, but by the curiosity, kindness and resilience our students carry into the world.',
  full: 'Dear parents and students,\n\nWelcome to RKris Academy. We are a school that takes academics seriously and childhood equally so. Our teachers plan lessons that ask students to think, make, question and practise — and our weekly doubt-clearing culture is there so no child is left guessing in silence.\n\nAlongside the CBSE curriculum we run sport, arts, coding and life-skills programmes because confidence is built in many rooms, not only the examination hall. We expect courtesy, honesty and effort. In return, students can expect adults who know their name and notice when they need help.\n\nIf you are considering RKris Academy for 2026-27, I invite you to walk the campus, speak with us, and see whether our pace and values feel like home.\n\nWith warm regards,\nDr. Meera Sharma\nPrincipal'
};

const DISCLOSURE = {
  general: [
    { label: 'Name of the School', value: 'RKris Academy' },
    { label: 'Affiliation No.', value: 'XXXXXXX' },
    { label: 'School Code', value: 'XXXXXX' },
    { label: 'Complete Address', value: 'Plot 21, Knowledge Park, Sector 12, Your City, State 201301' },
    { label: 'Principal Name & Qualification', value: 'Dr. Meera Sharma, M.A., B.Ed., Ph.D.' },
    { label: 'School Email', value: 'info@rkrisacademy.edu.in' },
    { label: 'Contact Numbers', value: '+91 98765 43210 / +91 98765 43211' }
  ],
  documents: [
    { label: 'Copies of Affiliation / Upgradation Letter', file: 'assets/docs/prospectus.pdf' },
    { label: 'Copies of Societies / Trust / Company Registration', file: 'assets/docs/prospectus.pdf' },
    { label: 'Copy of No Objection Certificate (NOC)', file: 'assets/docs/prospectus.pdf' },
    { label: 'Copies of Recognition Certificate under RTE Act, 2009', file: 'assets/docs/prospectus.pdf' },
    { label: 'Copy of Valid Building Safety Certificate', file: 'assets/docs/prospectus.pdf' },
    { label: 'Copy of Valid Fire Safety Certificate', file: 'assets/docs/prospectus.pdf' },
    { label: 'Copy of the DEO Certificate', file: 'assets/docs/prospectus.pdf' },
    { label: 'Copies of Valid Water, Health and Sanitation Certificates', file: 'assets/docs/prospectus.pdf' }
  ],
  results: [
    { label: 'Fee Structure of the School', file: 'assets/docs/fee-structure.pdf' },
    { label: 'Annual Academic Calendar', file: 'assets/docs/prospectus.pdf' },
    { label: 'List of School Management Committee (SMC)', file: 'assets/docs/prospectus.pdf' },
    { label: 'List of Parents Teachers Association (PTA) Members', file: 'assets/docs/prospectus.pdf' },
    { label: 'Last Three-Year Board Result (Class X / XII)', file: 'assets/docs/prospectus.pdf' }
  ],
  staff: [
    { label: 'Principal', value: '1' },
    { label: 'Total No. of Teachers', value: '140' },
    { label: 'PGT', value: '28' },
    { label: 'TGT', value: '52' },
    { label: 'PRT', value: '48' },
    { label: 'Teachers Section Ratio', value: '1 : 1.5 (placeholder)' },
    { label: 'Details of Special Educator', value: 'Available (placeholder name)' },
    { label: 'Details of Counsellor and Wellness Teacher', value: 'Available (placeholder name)' }
  ],
  infrastructure: [
    { label: 'Total Campus Area (sq. mtr.)', value: 'XXXXX' },
    { label: 'No. and Size of Class Rooms', value: 'XX rooms / XX sq. mtr. each' },
    { label: 'No. and Size of Laboratories including Computer Labs', value: 'X labs / XX sq. mtr.' },
    { label: 'Internet Facility', value: 'Yes' },
    { label: 'No. of Girls Toilets', value: 'XX' },
    { label: 'No. of Boys Toilets', value: 'XX' },
    { label: 'Link to YouTube video of school inspection', value: 'To be updated' }
  ]
};

const DOWNLOADS = [
  { title: 'Prospectus', file: 'assets/docs/prospectus.pdf', icon: 'fa-book-open' },
  { title: 'Admission Form', file: 'assets/docs/admission-form.pdf', icon: 'fa-file-lines' },
  { title: 'Fee Structure', file: 'assets/docs/fee-structure.pdf', icon: 'fa-indian-rupee-sign' },
  { title: 'Transfer Certificate Format', file: 'assets/docs/admission-form.pdf', icon: 'fa-file-export' }
];
