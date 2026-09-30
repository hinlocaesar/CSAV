/**
 * Central content source for the site.
 *
 * Everything here is drawn from the school's own published materials:
 * the official Vision / Mission / Philosophy and Alma Mater, the DepEd
 * recognition and ISO 9001:2008 certification notes, the school seal
 * symbolism, and the public program listing.
 */

export const school = {
  shortName: 'CSAV',
  name: 'Colegio de Sta. Ana de Victorias',
  legalName: 'Colegio de Sta. Ana de Victorias, Inc.',
  tagline: 'Bringing Quality Education Closer',
  founded: 2011,
  religiousAffiliation: 'Roman Catholic',
  nickname: 'Titans',
  address: {
    line1: 'Osmeña Avenue – Roxas Street',
    line2: 'Barangay VI',
    city: 'Victorias City',
    province: 'Negros Occidental',
    postcode: '6119',
    country: 'Philippines',
    coordinates: '10.90469, 123.07494',
  },
  contact: {
    telefax: '(034) 399-2830',
    email: 'colegiodestaanadevictorias@gmail.com',
    facebook:
      'https://www.facebook.com/p/Colegio-de-Sta-Ana-de-Victorias-100057569014854/',
    maps:
      'https://www.openstreetmap.org/?mlat=10.90469&mlon=123.07494#map=17/10.90469/123.07494',
  },
  patronSaints: ['Saint Anne', 'Saint Joachim'],
} as const

export const addressOneLine = `${school.address.line1}, ${school.address.city}, ${school.address.province} ${school.address.postcode}`

export const philosophy =
  'Colegio de Sta. Ana de Victorias believes that education is aimed at the total growth of a human being for him to be able to enjoy a fruitful life and establish a harmonious relationship with God and his fellowmen.'

export const vision =
  'The Integrated School of Colegio de Sta. Ana de Victorias envisions itself to be one of the leading basic educational institutions in Negros Occidental in the formation of Christ-centered, academically excellent, and socially aware students who are endowed with the core values of the school.'

export const mission =
  'The community of Colegio de Sta. Ana de Victorias – Integrated School is dedicated to the pursuit of quality, holistic basic education in order to produce well-rounded students who are God-fearing, academically competitive, independent, compassionate, and responsible members of society, capable of contributing for the development of our country.'

export const almaMater = {
  verse: [
    'Hail O Hail Oh Hail',
    'To our Alma Mater',
    'Dear Sta. Ana de Victorias',
    'Our College loved so well, Hail!',
    'Alma Mater Dear',
    'Our pride our guiding star',
    'With our grateful thanks',
    'To our Lord God',
    'For the wisdom imparted to us, Hail!',
    'We will always remember',
    'All the values we learned',
    'So receive our God’s blessings',
    'And our loyalty forever more',
  ],
  chorus: [
    'Sta. Ana de Victorias',
    'Our anchor and our guide',
    'Sta. Ana de Victorias',
    'Our deepest thanks to God',
    'Sta. Ana de Victorias',
    'Though years may come and go',
    'We’ll remember to be loyal',
    'To you forever more!',
  ],
} as const

/** Founding story, condensed from the school history. */
export const founder = {
  name: 'Romeo Valenia Santa Ana Sr.',
  also: 'Romeo Valenia Sta. Ana Sr.',
  role: 'Founder and philanthropist',
  summary:
    'The late philanthropist Romeo Valenia Santa Ana Sr. dreamed of a school that would bring quality education closer to people — especially the young and the marginalized sector of Victorias City and its neighbouring towns and cities. Although the Santa Ana patriarch died without seeing his dream materialised, the seed of good intent grew into what is now Colegio de Sta. Ana de Victorias.',
}

export const timeline = [
  {
    year: '2011',
    title: 'The college is founded',
    body: 'The school opens along Osmeña Avenue in Victorias City with its first undergraduate programme — Bachelor of Elementary Education, with Major in General Education and Major in Early Childhood Education. Classes begin with 144 enrolled students.',
  },
  {
    year: '2012',
    title: 'The Integrated School is born',
    body: 'A two-storey building houses the administration office and three classrooms for Kindergarten, Grade 1 and Grade 7. There are only 8 employees and 62 students.',
  },
  {
    year: '2013',
    title: 'A growing community',
    body: 'Enrolment triples to 191 students, prompting a move to a new site. Grade levels 2, 3, 4 and 8 are added along with a second three-storey building.',
  },
  {
    year: '2014',
    title: 'Facilities expand',
    body: 'A covered court and an annex building are constructed to support the growing student population.',
  },
  {
    year: '2015',
    title: 'Recognition and certification',
    body: 'The Department of Education grants Government Recognition, all grade levels are completed, the first 62 BEED graduates are produced, and the school is officially certified under ISO 9001:2008. The official website launches that same year.',
  },
  {
    year: 'Later years',
    title: 'Accreditation and international reach',
    body: 'PACUCOA grants the school candidacy status, ten additional academic programmes are introduced, and the Bureau of Immigration permits the school to accept foreign students.',
  },
] as const

export const sealSymbols = [
  {
    symbol: 'Open book',
    meaning:
      'Represents the knowledge and quality Catholic education the school brings to its students.',
  },
  {
    symbol: 'Raising hands',
    meaning:
      'Signify willingness, perseverance, hard work and determination — the traits every CSAV student should strive to possess.',
  },
  {
    symbol: 'Laurel leaves',
    meaning:
      'Symbols of achievement and excellence in every task a student should accomplish.',
  },
  {
    symbol: 'Rising sun',
    meaning: 'The vision of a bright future for every student of the institution.',
  },
  {
    symbol: 'Staircase',
    meaning:
      'The way to attaining one’s goals, triangular in shape to symbolise the three persons of God — Father, Son and Holy Spirit — making all endeavours possible.',
  },
  {
    symbol: 'Octagon',
    meaning:
      'Stands for the eight core values that guide students to become productive members of society, faithful servants of God, and true followers of the Catholic faith.',
  },
] as const

export type Program = {
  code: string
  title: string
  cluster: ClusterId
  description: string
  careers: string[]
}

export const clusters = [
  { id: 'education', label: 'Education' },
  { id: 'business', label: 'Business, Management & Accountancy' },
  { id: 'computing', label: 'Computer Studies' },
  { id: 'criminal', label: 'Criminal Justice Education' },
  { id: 'arts', label: 'Arts & Sciences' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'health', label: 'Health Sciences' },
  { id: 'hospitality', label: 'Hospitality & Tourism' },
] as const

export type ClusterId = (typeof clusters)[number]['id']

export const programs: Program[] = [
  {
    code: 'BEED',
    title: 'Bachelor of Elementary Education',
    cluster: 'education',
    description:
      'The programme that started it all in 2011, offered in two specialisations that prepare future classroom leaders.',
    careers: [
      'Major in General Education',
      'Major in Early Childhood Education',
      'Classroom teacher (Elementary)',
      'Curriculum developer',
      'School administrator',
    ],
  },
  {
    code: 'BSED',
    title: 'Bachelor of Secondary Education',
    cluster: 'education',
    description:
      'Subject specialisations that build deep content mastery alongside professional teaching competence.',
    careers: [
      'Junior & Senior High teacher',
      'Subject-area specialist',
      'School principal',
      'Education researcher',
    ],
  },
  {
    code: 'BSTM',
    title: 'Bachelor of Science in Tourism Management',
    cluster: 'hospitality',
    description:
      'Hospitality and tourism operations grounded in service excellence — a heritage course of Negros Occidental.',
    careers: [
      'Tourism operations officer',
      'Front-desk & guest relations',
      'Tour guide',
      'Event coordinator',
    ],
  },
  {
    code: 'BSOA',
    title: 'Bachelor of Science in Office Administration',
    cluster: 'business',
    description:
      'Business communication, records management and office systems for the modern Philippine workplace.',
    careers: [
      'Office administrator',
      'Executive assistant',
      'Records officer',
      'Operations coordinator',
    ],
  },
  {
    code: 'BSBA',
    title: 'Bachelor of Science in Business Administration',
    cluster: 'business',
    description:
      'Accounting, finance, management and entrepreneurship fundamentals for future business owners and managers.',
    careers: [
      'Accountant',
      'Financial analyst',
      'Business owner',
      'Operations manager',
    ],
  },
  {
    code: 'BSIT',
    title: 'Bachelor of Science in Information Technology',
    cluster: 'computing',
    description:
      'Programming, networks and systems administration with practical laboratory work from the first year.',
    careers: [
      'Software developer',
      'IT support specialist',
      'Network administrator',
      'Systems analyst',
    ],
  },
  {
    code: 'BSCS',
    title: 'Bachelor of Science in Computer Science',
    cluster: 'computing',
    description:
      'Core computing science, algorithms and software engineering for students who want to build things from scratch.',
    careers: [
      'Software engineer',
      'Web & app developer',
      'Data analyst',
      'QA engineer',
    ],
  },
  {
    code: 'BSCRIM',
    title: 'Bachelor of Science in Criminology',
    cluster: 'criminal',
    description:
      'Criminal justice studies, law enforcement, forensics and community corrections with field immersion.',
    careers: [
      'Police officer',
      'Correctional officer',
      'Investigator',
      'Paralegal',
    ],
  },
  {
    code: 'BSAB',
    title: 'Bachelor of Science in Criminal Justice Education',
    cluster: 'criminal',
    description:
      'For those who intend to teach and lead in the justice system rather than practise in the field.',
    careers: [
      'Criminology instructor',
      'Paralegal',
      'Corrections supervisor',
      'Policy researcher',
    ],
  },
  {
    code: 'ABBS',
    title: 'Bachelor of Arts in Business Studies',
    cluster: 'arts',
    description:
      'Liberal arts grounding in business, communication and the social sciences — a flexible preparation for many careers.',
    careers: [
      'HR associate',
      'Marketing associate',
      'Communications officer',
      'Public-sector roles',
    ],
  },
  {
    code: 'BSN',
    title: 'Bachelor of Science in Nursing',
    cluster: 'health',
    description:
      'Clinical nursing education combining classroom theory with hospital practicum in the wider Negros Occidental health system.',
    careers: [
      'Registered nurse',
      'Clinical instructor',
      'Public health nurse',
      'Caregiver',
    ],
  },
  {
    code: 'BSME',
    title: 'Bachelor of Science in Mechanical Engineering',
    cluster: 'engineering',
    description:
      'Mechanics, thermodynamics and machine design with laboratory work — the engineering programme offered by CSAV.',
    careers: [
      'Mechanical engineer',
      'Plant maintenance engineer',
      'Design technician',
      'Quality inspector',
    ],
  },
]

export type Level = {
  id: string
  range: string
  title: string
  age: string
  body: string
  highlights: string[]
}

export const basicEdLevels: Level[] = [
  {
    id: 'kindergarten',
    range: 'Kinder 1 – 2',
    title: 'Pre-School / Kindergarten',
    age: 'Ages 4–5',
    body: 'Our first step into the CSAV community. Kinder builds language, motor and social readiness through play-based, values-oriented learning.',
    highlights: ['Daily circle time', 'Basic literacy & numeracy', 'Values formation'],
  },
  {
    id: 'primary',
    range: 'Grade 1 – 6',
    title: 'Elementary Department',
    age: 'Ages 6–11',
    body: 'Six years of building strong foundations in reading, mathematics and science — the grade levels that complete our implementation of the basic curriculum.',
    highlights: ['Homeroom & subject-based teaching', 'Computer literacy', 'Student clubs'],
  },
  {
    id: 'junior-high',
    range: 'Grade 7 – 10',
    title: 'Junior High School',
    age: 'Ages 12–15',
    body: 'Where learners start to specialise, discover their strengths and prepare for the choices ahead through guided academic support.',
    highlights: ['Science & Mathematics focus', 'Career guidance', 'Athletics (Titans)'],
  },
  {
    id: 'senior-high',
    range: 'Grade 11 – 12',
    title: 'Senior High School',
    age: 'Ages 16–17',
    body: 'The senior high strands at CSAV, capped by Work Immersion that places graduating students in real workplaces across Victorias City and beyond.',
    highlights: ['Academic & TVL strands', 'Work Immersion', 'Senior High honours'],
  },
]

export const strands = [
  {
    code: 'HUMSS',
    name: 'Humanities & Social Sciences',
    blurb: 'Reading, writing, research and the social sciences.',
    subjects: ['Philosophy', 'Contemporary Issues', 'Statistics', 'Reading & Writing'],
  },
  {
    code: 'STEM',
    name: 'Science, Technology, Engineering & Mathematics',
    blurb: 'The most in-demand strand today, with laboratory work throughout.',
    subjects: ['General Biology', 'General Physics', 'Basic Calculus', 'Earth & Life Science'],
  },
  {
    code: 'ABM',
    name: 'Accountancy, Business & Management',
    blurb: 'Accounting, finance, economics and business management.',
    subjects: ['Financial Accounting', 'Business Mathematics', 'Economics', 'Business Finance'],
  },
  {
    code: 'GAS',
    name: 'General Academic Strand',
    blurb: 'A broad, flexible track for university-bound students.',
    subjects: ['Earth & Life Science', 'General Chemistry', 'General Physics', 'Statistics'],
  },
  {
    code: 'TVL',
    name: 'Technical-Vocational-Livelihood',
    blurb: 'Trade specialisation with industry-based practicum.',
    subjects: ['Elective 1 (Specialisation)', 'Practical 1', 'Culatory & Community', 'Work Immersion'],
  },
  {
    code: 'Sports',
    name: 'Sports, Arts & Design',
    blurb: 'For athletes, artists and designers — with the Titans spirit.',
    subjects: ['Physical Education 4', 'Arts Appreciation', 'Contemporary Issues', 'PE 5'],
  },
]

export const admissionSteps = [
  {
    step: '01',
    title: 'Visit the campus',
    body: 'Walk the Osmeña Avenue campus, meet an adviser, and see the grade levels and programmes in person. Saturday visits are welcome — just message us first.',
  },
  {
    step: '02',
    title: 'Submit your documents',
    body: 'Bring the requirements for your level to the registrar. Most requirements can be prepared in advance so you only make one trip.',
  },
  {
    step: '03',
    title: 'Meet the assessment team',
    body: 'Entrance and placement assessments are administered to place you in the right year and track for your learning level.',
  },
  {
    step: '04',
    title: 'Confirm your slot',
    body: 'Official acceptance and your student number are issued, along with your CSAV email account for future transactions.',
  },
  {
    step: '05',
    title: 'Enrol and start',
    body: 'Settle fees, receive your uniform and textbooks, and join the orientation for your department before classes begin.',
  },
]

export const admissionRequirements = [
  {
    level: 'Pre-School & Elementary',
    items: [
      'Birth certificate (original + photocopy)',
      'Recent 1×1 photo (for the student)',
      'Parents / guardian ID',
      'Previous school report card (if transferring)',
      'Health / medical records',
    ],
  },
  {
    level: 'Junior & Senior High School',
    items: [
      'Birth certificate (original + photocopy)',
      'Certificate of Good Moral Character',
      'Parents / guardian ID',
      'Previous school report card & transcript',
      'Medical records & birth certificate photocopy',
    ],
  },
  {
    level: 'College',
    items: [
      'Senior High School diploma & transcript of records',
      'Certificate of Good Moral Character',
      'Birth certificate (original + photocopy)',
      'Medical / health certificate',
      'Recent 1×1 ID photo',
      'Entrance test result',
    ],
  },
]

export const studentLife = [
  {
    icon: 'Trophy',
    title: 'The Titans',
    body: 'CSAV competes under the banner of the Titans — bringing home titles from NOPSSCEA, PRISAA and UNIGAMES.',
  },
  {
    icon: 'Users',
    title: 'Organisations & clubs',
    body: 'Academic clubs, student government, and faith-based organisations run by students for students.',
  },
  {
    icon: 'Globe',
    title: 'International students',
    body: 'The school is permitted by the Bureau of Immigration to accept foreign students — an open door to CSAV.',
  },
  {
    icon: 'Briefcase',
    title: 'Work Immersion',
    body: 'Senior high students are immersed in real workplaces — offices, clinics, farms and studios across the province.',
  },
  {
    icon: 'HandHeart',
    title: 'Community service',
    body: 'A programme in social work and community action runs hand-in-hand with the Integrated School.',
  },
  {
    icon: 'Megaphone',
    title: 'Publication',
    body: 'The Panamyaw student publication develops writers, editors and photographers — and plenty of school spirit.',
  },
]

export const faqs = [
  {
    q: 'What levels does CSAV offer?',
    a: 'The Integrated School covers Kinder 1–2, Grade 1–6, Junior High Grade 7–10 and Senior High Grade 11–12. The college department offers four-year bachelor’s degree programmes.',
  },
  {
    q: 'Is the school recognised by DepEd?',
    a: 'Yes. The Integrated School was granted Government Recognition by the Department of Education in 2015, and completed its implementation of all grade levels.',
  },
  {
    q: 'Is CSAV accredited?',
    a: 'The school holds ISO 9001:2008 certification, granted in 2015, and has since been granted candidacy status by PACUCOA.',
  },
  {
    q: 'Can international students enrol?',
    a: 'Yes. The Bureau of Immigration has permitted the school to accept foreign students. Please contact the registrar well in advance so the required paperwork can be prepared.',
  },
  {
    q: 'How do I apply?',
    a: 'Start by visiting the campus or sending a message through the contact details on this site. From there, the admissions team will walk you through the documents, assessment and slot confirmation.',
  },
  {
    q: 'Is there financial assistance?',
    a: 'The school was founded with the goal of bringing quality education closer to the young and the marginalised. For scholarship and assistance availability, please ask the registrar directly.',
  },
]

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/integrated-school', label: 'Integrated School' },
  { to: '/college', label: 'College' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/contact', label: 'Contact' },
] as const
