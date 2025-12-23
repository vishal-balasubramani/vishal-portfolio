export interface Project {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  role: string;
  duration: string;
  problem: string;
  approach: string[];
  outcome: string;
  metrics?: string[];
  github?: string;
  live?: string;
  figma?: string;
  image: string;
  color: string; // For gradient themes
  category: string[]; // ADD THIS LINE
}

export const projects: Project[] = [
  {
    slug: 'urbanpark',
    title: 'UrbanPark',
    summary: 'Real-time urban parking solution with Flutter + Node.js + PostgreSQL',
    stack: ['Flutter', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Razorpay', 'WebSocket'],
    role: 'Full-Stack Developer',
    duration: '3 months',
    problem: 'Urban drivers waste significant time finding parking spots, while lot operators lack real-time visibility into occupancy and revenue. Manual systems lead to inefficiency and lost business.',
    approach: [
      'Built Flutter mobile app with real-time slot availability via WebSocket for instant updates',
      'Designed scalable REST API using Node.js/Express with Prisma ORM and PostgreSQL database',
      'Integrated Razorpay payment gateway for seamless transactions',
      'Implemented QR-based entry/exit flow for contactless parking management',
      'Added offline-first architecture with SQLite for uninterrupted operation'
    ],
    outcome: 'Production-ready parking app deployed with payment integration, real-time sync, and serving active users in urban areas.',
    metrics: ['Real-time slot updates', 'Payment integration', 'QR-based access', '1000+ users'],
    github: 'https://github.com/yourusername/urbanparking_app',
    live: 'https://urbanpark.vercel.app',
    image: '/projects/urbanpark.png',
    color: 'from-blue-600 to-cyan-600',
    category: ['Full-Stack', 'Mobile']
  },
  {
    slug: 'attendance-management',
    title: 'CIT Attendance Management',
    summary: 'Attendance tracking system for Coimbatore Institute of Technology',
    stack: ['Flutter', 'Node.js', 'PostgreSQL', 'SQLite', 'PDF Generation'],
    role: 'Full-Stack Developer',
    duration: '2 months',
    problem: 'Manual attendance tracking across multiple sessions (FN/AN/BR) was slow, error-prone, and lacked proper synchronization between advisors and coordinators.',
    approach: [
      'Built Flutter mobile app with offline-first architecture using SQLite',
      'Designed backend API with automatic cascade marking (FN absence → AN/BR absence)',
      'Added PDF generation for daily coordinator reports with student names and session data',
      'Implemented dual-sync: cloud sync + local hotspot sync for offline scenarios',
      'Created role-based access for students, advisors, and coordinators'
    ],
    outcome: 'Deployed system managing attendance for multiple departments with offline capability and automated reporting.',
    metrics: ['Multi-session tracking (FN/AN/BR)', 'Offline SQLite sync', 'Daily PDF reports', '500+ students'],
    github: 'https://github.com/yourusername/attendance-app',
    image: '/projects/attendance.png',
    color: 'from-purple-600 to-pink-600',
    category: ['Full-Stack', 'Mobile']
  },
  {
    slug: 'guardian-circle',
    title: 'GuardianCircle',
    summary: 'Safety-focused Flutter app with call and speech detection for emergency alerts',
    stack: ['Flutter', 'Speech Recognition', 'Call Detection', 'Firebase', 'Background Services'],
    role: 'Mobile App Developer',
    duration: '2 months',
    problem: 'Users need hands-free emergency detection during phone calls for safety scenarios, especially in situations where manual SOS triggers are not possible.',
    approach: [
      'Implemented real-time speech detection tied to regular phone calls using native speech recognition',
      'Built trigger system for emergency keywords during active calls with high accuracy',
      'Designed contact circle notification system with location sharing for immediate alerts',
      'Added background service to monitor calls without draining battery',
      'Integrated Firebase for real-time notifications and data sync'
    ],
    outcome: 'Working safety app with call-based speech detection and emergency workflows, tested in real-world scenarios.',
    metrics: ['Real-time speech analysis', 'Call integration', 'Emergency contact system', 'Background monitoring'],
    github: 'https://github.com/yourusername/guardian-circle',
    image: '/projects/guardian-circle.png',
    color: 'from-orange-600 to-red-600',
    category: ['Mobile']
  },
  {
    slug: 'acutix-ui-design',
    title: 'Acutix UI/UX Design',
    summary: 'Enterprise UI design system and product interface during internship at Acutix',
    stack: ['Figma', 'Design Systems', 'UI/UX', 'Prototyping', 'Component Libraries'],
    role: 'UI/UX Design Intern',
    duration: '3 months',
    problem: 'Company needed a cohesive design system and modern interface for their enterprise product, with consistent components across multiple teams.',
    approach: [
      'Created comprehensive design system with reusable components library in Figma',
      'Designed user flows and interactive prototypes for core product features',
      'Collaborated with dev team on design handoff and implementation specifications',
      'Conducted user testing sessions and iterated based on feedback',
      'Documented design guidelines and component usage patterns'
    ],
    outcome: 'Delivered production-ready design system adopted across product suite, reducing design-to-dev time by 40%.',
    metrics: ['Full design system', '50+ components', 'Interactive prototypes', 'Dev-ready specs'],
    figma: 'https://figma.com/file/your-acutix-project',
    image: '/projects/acutix.png',
    color: 'from-green-600 to-teal-600',
    category: ['UI/UX']
  },
  {
    slug: 'ml-hackathon-iit',
    title: 'Industrial ML Solution',
    summary: 'ML lead for 24-hour industrial automation hackathon at IIT',
    stack: ['PyTorch', 'pandas', 'Streamlit', 'scikit-learn', 'Python'],
    role: 'ML Lead',
    duration: '24 hours',
    problem: 'Industrial automation challenge requiring end-to-end ML solution under extreme time pressure with dataset provided on-spot.',
    approach: [
      'Led 4-person team (ML, data, 2x Streamlit) with clear role separation and fast iteration cycles',
      'Built baseline model in first 2 hours using scikit-learn, then migrated to PyTorch for deep learning',
      'Implemented validation-driven improvements with rapid experimentation pipeline',
      'Deployed interactive Streamlit demo with cached model loading for instant inference',
      'Created clear business impact narrative with metrics and visual explanations'
    ],
    outcome: 'Delivered working ML demo with strong predictive performance and clear ROI story, securing top position.',
    metrics: ['24-hour delivery', '4-person team', 'Production-ready demo', 'Top performer'],
    github: 'https://github.com/yourusername/iit-hackathon',
    image: '/projects/ml-hackathon.png',
    color: 'from-indigo-600 to-purple-600',
    category: ['AI/ML']
  }
];
