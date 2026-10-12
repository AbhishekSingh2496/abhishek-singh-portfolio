// Single source of truth for all portfolio content.
// Only factual information supplied by Abhishek lives here — edit this file to update the site.

export const profile = {
  name: 'Abhishek Singh',
  initials: 'AS',
  titles: ['Full Stack Developer', 'MERN Stack Developer'],
  experienceLabel: '4+ Years of Professional Experience',
  location: 'Bengaluru, Karnataka, India',
  locationShort: 'Bengaluru, India',
  company: 'KNS Technologies',
  role: 'Associate Software Engineer',
  summary:
    'Full Stack Developer with 4+ years of professional experience building responsive web applications, REST APIs, business platforms, dashboards and production-ready solutions.',
  email: 'abhisheksingh94305016@gmail.com',
  phone: '+919430501664',
  phoneDisplay: '+91 94305 01664',
  /** Resume PDF filename inside /public — also used as the downloaded filename. */
  resumeFile: 'Abhishek_Singh_Resume.pdf',
  photo: {
    src: '/abhishek-singh-800.webp',
    srcSet: '/abhishek-singh-480.webp 480w, /abhishek-singh-800.webp 800w',
    alt: 'Portrait of Abhishek Singh, Full Stack Developer',
  },
} as const

export const links = {
  linkedin: 'https://www.linkedin.com/in/abhishek-singh-fullstack/',
  github: 'https://github.com/AbhishekSingh2496',
  githubRepos: 'https://github.com/AbhishekSingh2496?tab=repositories',
  ourspaceRepo: 'https://github.com/AbhishekSingh2496/OurSpace',
  ourspaceLive: 'https://ourspace-frontend-96br.onrender.com',
  naukri: 'https://www.naukri.com/mnjuser/profile?id=&altresid',
} as const

export type SocialId = 'linkedin' | 'github' | 'naukri'

export type SocialLink = {
  id: SocialId
  /** Short visible text (hero, footer). */
  name: string
  /** Tooltip and accessible name. */
  title: string
  url: string
  /** Contact-section card text. */
  contactLabel: string
  contactSub: string
}

/** Professional profiles in priority order — LinkedIn and GitHub stay primary. */
export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    title: 'View my LinkedIn profile',
    url: links.linkedin,
    contactLabel: 'LinkedIn',
    contactSub: 'Connect or message',
  },
  {
    id: 'github',
    name: 'GitHub',
    title: 'View my GitHub profile',
    url: links.github,
    contactLabel: 'GitHub',
    contactSub: 'Browse my code',
  },
  {
    id: 'naukri',
    name: 'Naukri Profile',
    title: 'View my Naukri Profile',
    url: links.naukri,
    contactLabel: 'View Naukri Profile',
    contactSub: 'My job profile on Naukri',
  },
]

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const

export const about = {
  paragraphs: [
    "I'm a Full Stack Developer with 4+ years of experience in web application development, maintenance, API integration, debugging, testing, and deployment.",
    'I have hands-on experience with MERN Stack technologies including React.js, Node.js, Express.js, and MongoDB, along with JavaScript, TypeScript, REST APIs, HTML5, CSS3, and Tailwind CSS.',
    'I enjoy building responsive user interfaces, developing APIs, working with databases, solving application issues, and delivering business-focused features.',
  ],
  stats: [
    { value: '4+', label: 'Years Experience' },
    { value: '10+', label: 'Core Technologies' },
    { value: '2', label: 'Enterprise Platforms' },
    { value: 'Multiple', label: 'Full Stack Projects' },
  ],
  focus: [
    'Full-stack MERN development',
    'REST API design & integration',
    'Authentication & role-based access control',
    'Dashboards, reporting & exports',
    'QR code systems',
    'Cloud deployment & production support',
  ],
}

export type Role = {
  title: string
  company: string
  period: string
  location?: string
  current?: boolean
  summary: string
  responsibilities: string[]
  tags?: string[]
}

export const experience: Role[] = [
  {
    title: 'Associate Software Engineer',
    company: 'KNS Technologies',
    period: 'Feb 2024 – Present',
    location: 'Bengaluru, Karnataka, India · On-site',
    current: true,
    summary:
      "Full Stack Developer working on MH Privilege, a loyalty and rewards platform for Mann+Hummel's automotive spare-parts network across India and South-East Asia.",
    responsibilities: [
      'Develop and maintain responsive web applications using React.js, JavaScript, TypeScript, and Tailwind CSS.',
      'Develop and integrate REST APIs using Node.js and Express.js.',
      'Work with MongoDB for application data management.',
      'Develop business modules covering users, employees, distributors, parts, QR codes, points, redemption, vouchers, invoices, reports and analytics.',
      'Implement authentication, authorization, session management and role-based access control.',
      'Develop QR code generation and tracking functionality.',
      'Implement bulk QR generation, validation and scan tracking.',
      'Support PDF generation and ZIP export functionality.',
      'Build interactive dashboards with search, filtering, pagination and sorting.',
      'Implement reporting and Excel export functionality.',
      'Integrate AWS services including Amazon S3.',
      'Support development, staging and production deployments.',
      'Troubleshoot application issues.',
      'Fix production bugs.',
      'Implement performance improvements.',
      'Work on client-requested enhancements.',
      'Participate in requirements analysis, development, testing, deployment and production support.',
      'Collaborate with team members to deliver reliable application features.',
    ],
    tags: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JavaScript',
      'TypeScript',
      'REST APIs',
      'Tailwind CSS',
      'AWS',
      'Git',
      'GitHub',
    ],
  },
  {
    title: 'Trainee Software Engineer',
    company: 'KNS Technologies',
    period: 'Aug 2022 – Jan 2024',
    summary:
      'Started my professional career at KNS Technologies, gaining hands-on training and practical experience in Full Stack Web Development and MERN Stack technologies while working with experienced developers on real-world web applications.',
    responsibilities: [
      'Developed responsive web applications using React.js, JavaScript, HTML5 and CSS3.',
      'Developed and integrated RESTful APIs using Node.js and Express.js.',
      'Worked with MongoDB for CRUD operations and data management.',
      'Integrated frontend applications with backend APIs.',
      'Built reusable React.js components.',
      'Implemented application features based on business requirements.',
      'Worked on authentication and form validation.',
      'Performed API integration.',
      'Debugged and fixed application issues.',
      'Performed testing and bug fixing.',
      'Used Git and GitHub for version control.',
      'Collaborated with senior developers.',
      'Participated in requirement understanding, implementation, testing and issue resolution.',
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'GitHub'],
  },
]

export type Project = {
  id: string
  title: string
  subtitle: string
  category: string
  role: string
  association?: string
  period: string
  description: string
  /** Optional screenshot placed in /public/projects. When absent, an illustrative preview is drawn. */
  image?: string
  visual: 'dashboard' | 'social'
  highlights: string[]
  features: string[]
  security?: string[]
  tech: string[]
  links: { live?: string; github?: string }
  /** Note shown when a project has no public links (e.g. client work). */
  linkNote?: string
  details: {
    problem: string
    solution: string
    architecture?: string
    responsibilities: string[]
    challenges: string[]
  }
}

const mhTech = [
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'JavaScript',
  'TypeScript',
  'REST APIs',
  'Tailwind CSS',
  'AWS',
  'Git',
  'GitHub',
]

const mhArchitecture =
  'React.js frontend (JavaScript / TypeScript, Tailwind CSS) consuming REST APIs built with Node.js and Express.js, with MongoDB for application data and AWS services, including Amazon S3, for storage and deployment across development, staging and production environments.'

export const projects: Project[] = [
  {
    id: 'mh-privilege-sea',
    title: 'MH Privilege – SEA',
    subtitle: 'Loyalty & Rewards Platform',
    category: 'Enterprise · Loyalty & Rewards',
    role: 'Full Stack Developer',
    association: 'KNS Technologies',
    period: 'Jan 2024 – Present',
    description:
      "A loyalty and rewards platform developed for Mann+Hummel's automotive spare-parts network across South-East Asia. The platform enables mechanics and workshop owners to earn reward points by scanning QR codes on genuine spare parts and redeeming those points through a digital rewards workflow.",
    visual: 'dashboard',
    highlights: ['QR generation & HMAC validation', 'Points, redemption & vouchers', 'Role-based access', 'Reports & Excel export'],
    features: [
      'User registration',
      'Employee management',
      'Distributor management',
      'Parts management',
      'Invoice management',
      'QR code generation',
      'QR validation',
      'QR scan tracking',
      'Points allocation',
      'Balance tracking',
      'Redemption workflows',
      'Approval workflows',
      'Voucher management',
      'Reports',
      'Analytics',
      'Role-based access',
      'Authentication',
      'Password reset',
      'Protected routes',
      'AWS S3 integration',
      'Dashboard filtering',
      'Excel export',
    ],
    security: ['Encryption', 'HMAC-based QR validation'],
    tech: mhTech,
    links: {},
    linkNote: 'Client platform — source code and live system are private.',
    details: {
      problem:
        'Mechanics and workshop owners across a multi-country spare-parts network needed a trustworthy way to be rewarded for using genuine parts, while the business needed control over points, approvals and redemptions.',
      solution:
        'A web platform where QR codes on genuine parts are scanned to earn points, with balance tracking, approval-based redemption, vouchers, and administrative modules for users, employees, distributors, parts and invoices.',
      architecture: mhArchitecture,
      responsibilities: [
        'Full-stack feature development across frontend and REST API layers.',
        'QR code generation, validation and scan tracking.',
        'Points allocation, balance tracking, redemption and approval workflows.',
        'Authentication, password reset, protected routes and role-based access.',
        'Reports, analytics, dashboard filtering and Excel export.',
        'Amazon S3 integration.',
      ],
      challenges: [
        'Ensuring QR codes on genuine parts cannot be forged or reused — addressed with encryption and HMAC-based QR validation.',
        'Supporting multiple user types with different permissions through role-based access and protected routes.',
        'Keeping points, redemptions and approvals consistent across the rewards workflow.',
      ],
    },
  },
  {
    id: 'mh-privilege-india',
    title: 'MANN Hamrahi – India',
    subtitle: 'MANN+HUMMEL Genuine Parts Loyalty Platform',
    category: 'Enterprise · Loyalty & Rewards',
    role: 'Full Stack Developer',
    association: 'KNS Technologies',
    period: 'March 2023 – Present',
    description:
      'Contributed to an enterprise loyalty and rewards platform designed for automotive genuine-parts networks in India. Worked on web application features for user and distributor management, QR code generation and validation, reward points, redemption workflows, finance-related modules, dashboards, and reporting. Developed responsive user interfaces, integrated REST APIs, and supported data tables, search, filtering, pagination, and Excel export functionality.',
    visual: 'dashboard',
    highlights: ['QR generation, scanning & tracking', 'Finance & reporting modules', 'Sortable data dashboards', 'AWS deployment & support'],
    features: [
      'User management',
      'Employee management',
      'Distributor management',
      'Parts management',
      'QR code management',
      'Finance modules',
      'Reporting',
      'Dashboards',
      'Role-based access control',
      'QR generation',
      'QR validation',
      'QR scanning',
      'QR tracking',
      'Points allocation',
      'Redemption workflows',
      'REST APIs',
      'Search',
      'Filtering',
      'Pagination',
      'Sortable data tables',
      'Excel export',
      'Authentication',
      'Session management',
      'AWS deployment',
      'Production support',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Git', 'GitHub'],
    links: {},
    linkNote: 'Client platform — source code and live system are private.',
    details: {
      problem:
        "Mann+Hummel's spare-parts network in India needed a digital way to manage genuine parts, reward users with points and run redemption workflows across many users, employees and distributors.",
      solution:
        'A full-stack platform with QR code management, points allocation and redemption, finance and reporting modules, and data-rich dashboards with search, filtering, pagination and sortable tables.',
      architecture: mhArchitecture,
      responsibilities: [
        'Building and maintaining REST APIs and React.js modules.',
        'QR generation, validation, scanning and tracking.',
        'User, employee, distributor and parts management modules.',
        'Dashboards with search, filtering, pagination, sortable tables and Excel export.',
        'Authentication, session management and role-based access control.',
        'AWS deployment and ongoing production support.',
      ],
      challenges: [
        'Presenting large operational datasets in dashboards that stay usable — handled with search, filtering, pagination and sorting.',
        'Maintaining secure, role-appropriate access for different user groups.',
        'Supporting a live production system while continuing to ship enhancements.',
      ],
    },
  },
  {
    id: 'ourspace',
    title: 'OurSpace',
    subtitle: 'Personal MERN Stack Social Media Application',
    category: 'Full Stack · Social Media',
    role: 'Full Stack Developer',
    period: 'Feb 2021 – Apr 2022',
    description:
      'OurSpace is a personal full-stack social media application developed to strengthen practical MERN Stack development skills and experience building a complete web application from frontend to backend.',
    visual: 'social',
    highlights: ['Feed, posts, likes & comments', 'Reels & friend requests', 'Real-time one-to-one chat', 'Profile image privacy'],
    features: [
      'User registration',
      'Login',
      'Authentication',
      'Profile management',
      'Profile image privacy',
      'Social feed',
      'Posts',
      'Images',
      'Likes',
      'Comments',
      'Reels',
      'Friend requests',
      'Private messaging',
      'Real-time one-to-one chat',
      'REST APIs',
      'MongoDB CRUD operations',
      'Responsive UI',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'REST APIs', 'HTML5', 'CSS3', 'Git', 'GitHub', 'MERN Stack'],
    links: { live: links.ourspaceLive, github: links.ourspaceRepo },
    details: {
      problem:
        'Build a complete, realistic web application end to end to strengthen practical MERN Stack skills — from UI to API to database.',
      solution:
        'A social media application with authentication, profiles, a social feed with posts, images, likes and comments, reels, friend requests and real-time one-to-one private messaging.',
      architecture:
        'MERN Stack: React.js frontend communicating with a Node.js / Express.js REST API, with MongoDB for data storage.',
      responsibilities: [
        'Built the complete application end to end as a personal project.',
        'Implemented registration, login, authentication and profile management.',
        'Built the social feed, posts, images, likes, comments and reels.',
        'Implemented friend requests and real-time one-to-one chat.',
        'Built REST APIs and MongoDB CRUD operations.',
      ],
      challenges: [
        'Delivering real-time one-to-one chat alongside a conventional REST API.',
        'Respecting user privacy settings for profile images.',
        'Keeping the UI responsive across devices.',
      ],
    },
  },
]

export type SkillGroup = { title: string; description: string; items: string[] }

export const skillGroups: SkillGroup[] = [
  { title: 'Frontend', description: 'Responsive, component-driven interfaces', items: ['React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { title: 'Backend', description: 'APIs and server-side logic', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { title: 'Database', description: 'Document data modelling and CRUD', items: ['MongoDB'] },
  { title: 'Cloud & Deployment', description: 'Shipping and running in production', items: ['AWS', 'Amazon S3', 'Production Deployment'] },
  { title: 'Tools', description: 'Version control and collaboration', items: ['Git', 'GitHub'] },
]

export const engineeringSkills = [
  'Authentication',
  'Role-Based Access Control',
  'API Integration',
  'Debugging',
  'Testing',
  'Performance Optimization',
  'Responsive Web Development',
  'Dashboard Development',
  'Reporting',
  'QR Code Systems',
]

export const education = {
  institution: 'Rajiv Gandhi Prodyogiki Vishwavidyalaya (RGPV), Bhopal',
  degree: 'Bachelor of Technology (B.Tech)',
  field: 'Computer Science and Engineering',
  period: 'Jul 2018 – Jun 2022',
  grade: 'A',
  description:
    'Completed a Bachelor of Technology in Computer Science and Engineering with a focus on programming, software development, web technologies, databases, and computer science fundamentals.',
}

export const journey = [
  { year: '2018', title: 'B.Tech Computer Science', detail: 'Began Computer Science and Engineering at RGPV, Bhopal.' },
  { year: '2021', title: 'Started OurSpace', detail: 'Built a full MERN Stack social media application from scratch.' },
  { year: '2022', title: 'Joined KNS Technologies', detail: 'Started as Trainee Software Engineer.' },
  { year: '2024', title: 'Promoted', detail: 'Promoted to Associate Software Engineer.' },
  { year: 'Present', title: 'MH Privilege platforms', detail: 'Working as Full Stack Developer on MH Privilege India & SEA.' },
]

export const availability = {
  roles: ['Full Stack Developer', 'MERN Stack Developer', 'React.js Developer', 'Node.js Developer'],
  workModes: ['On-site', 'Hybrid', 'Remote'],
  locations: [
    'Bengaluru',
    'Hyderabad',
    'Pune',
    'Chennai',
    'Mumbai',
    'Delhi NCR',
    'Gurugram',
    'Noida',
    'Ahmedabad',
    'Indore',
    'Kolkata',
    'Jaipur',
    'Chandigarh',
    'Kochi',
    'Coimbatore',
  ],
}
