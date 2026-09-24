import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    slug: 'laundry-management-system',
    title: 'LaundryManager',
    description:
      'A multi-tenant laundry management SaaS built for Nepal. Order management, customer database, role-based access, reports & analytics, and SMS notifications — all in one dashboard. Replaces paper-based systems for laundry businesses.',
    category: 'Web app',
    imageUrls: ['images/laundry-management.png'],
    githubLink: 'https://github.com/enigmasheet/Laundry-Management-System',
    liveDemo: '',
    liveDemoActive: false,
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Nginx', 'REST API', 'SMS'],
    tags: ['SaaS', 'Multi-Tenant', 'Web App', 'Operations'],
    caseStudy: {
      context:
        'Laundry businesses needed a digital alternative to paper-based order and customer records.',
      capabilities: [
        'Order and customer management',
        'Role-based access',
        'Reports and analytics',
        'SMS notifications',
      ],
    },
  },
  {
    slug: 'teachmate-learning-platform',
    title: 'TeachMate',
    description:
      'An interactive learning platform for bachelor students, combining structured C++ and OOP notes with teacher-led quizzes, QR-code session joining, and class progress tracking.',
    category: 'Education',
    imageUrls: [],
    githubLink: 'https://github.com/enigmasheet/CPP',
    liveDemo: 'https://teachmate.abhaymandal.com.np/',
    liveDemoActive: true,
    technologies: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS 4',
      'MongoDB Atlas',
      'Mongoose 9',
      'TanStack Query',
      'Zod 4',
      'shadcn/ui',
      'Base UI',
      'Vercel',
    ],
    tags: ['Education', 'Learning Platform', 'C++', 'OOP', 'Classroom'],
    caseStudy: {
      context:
        'Slide-led lessons can present material but make it harder to combine structured notes, in-class practice, and a record of what a teacher has covered. TeachMate brings those activities into one classroom learning flow.',
      solution:
        'Teachers open structured subject notes, select an active class, and launch an MCQ session with a QR code. Students join from their phones using a six-character code, answer questions, and see their results; teachers can review results and class progress afterward.',
      capabilities: [
        'Structured C++ and OOP lessons',
        'Teacher-led MCQ sessions with QR-code joining',
        'Class-aware note and topic progress',
        'Session results and student leaderboards',
        'Search across notes, MCQs, and resources',
      ],
      architecture: [
        'Next.js App Router prerenders public subject and lesson pages while admin and live-session workflows use dynamic routes.',
        'Structured lesson content is validated through a typed content registry; sessions, classes, and operational data use MongoDB through Mongoose.',
        'API route handlers delegate to services and repositories, keeping database access out of route handlers.',
      ],
      decisions: [
        'Students join without persistent accounts, using a six-character session code to keep classroom entry quick.',
        'Student quiz state is transient; teacher-managed class progress is stored server-side per class.',
        'Static curriculum content and database-backed classroom workflows use separate storage paths suited to how each changes.',
      ],
      scale: [
        { value: '2', label: 'Subjects' },
        { value: '25', label: 'Topics' },
        { value: '169', label: 'Structured notes' },
        { value: '279', label: 'Seeded MCQs' },
      ],
    },
  },
  {
    slug: 'hmc-nepal-portal',
    title: 'HMC Nepal Multi-App Portal',
    description:
      'A centralized multi-application portal for HMC Nepal, integrating multiple business services — including claims management, member services, and administrative tools — into a unified dashboard with role-based access and real-time analytics.',
    category: 'Web app',
    imageUrls: ['images/hmc-nepal.png'],
    githubLink: '',
    liveDemo: 'https://www.hmcnepal.com.np/',
    liveDemoActive: true,
    technologies: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Nginx', 'PM2', 'TypeScript'],
    tags: ['Portal', 'Multi-App', 'Enterprise', 'Dashboard'],
    caseStudy: {
      context:
        'HMC Nepal needed a common entry point for several business services and administrative tools.',
      capabilities: [
        'Claims management and member services',
        'Unified application dashboard',
        'Role-based access',
        'Real-time analytics',
      ],
    },
  },
  {
    slug: 'sajilo-inventory',
    title: 'Sajilo Inventory',
    description:
      'A multitenant inventory management system for small shops. Track stock movements, define custom product attributes, get low-stock alerts, and manage everything from one dashboard with data isolation across shops.',
    category: 'Web app',
    imageUrls: ['images/inventory-management.png'],
    githubLink: 'https://github.com/enigmasheet/inventoryMangement',
    liveDemo: 'https://inventory-mangement-pearl.vercel.app/',
    liveDemoActive: true,
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Google OAuth', 'PWA'],
    tags: ['Inventory', 'Multitenant', 'Web App', 'Productivity'],
    caseStudy: {
      context: 'Small shops needed a shared inventory view with each shop’s data kept separate.',
      capabilities: [
        'Shop-level data isolation',
        'Stock movement tracking',
        'Custom product attributes',
        'Low-stock alerts',
      ],
    },
  },
  {
    slug: 'personal-portfolio',
    title: 'Personal Portfolio',
    description:
      'My personal website showcasing projects, skills, experiences, and blog posts to highlight my professional journey.',
    category: 'Web app',
    imageUrls: ['images/portfolio.svg'],
    githubLink: 'https://github.com/enigmasheet/PersonalPortfolio.v1',
    liveDemo: 'https://abhaymandal.com.np/',
    liveDemoActive: true,
    technologies: ['Blazor', 'CSS', 'JavaScript', 'Azure Static Web Apps'],
    tags: ['Portfolio', 'Web Development'],
  },
  {
    slug: 'transport-expenditure-tracker',
    title: 'Transport Expenditure Tracker',
    description:
      'A web app to efficiently manage and track transport-related expenses with detailed reports and data visualization.',
    category: 'Web app',
    imageUrls: ['images/transport.svg'],
    githubLink: 'https://github.com/enigmasheet/TransportExpenditureTracker',
    liveDemo: 'https://transportexpense.azurewebsites.net/',
    liveDemoActive: false,
    technologies: ['ASP.NET Core', 'Entity Framework', 'Blazor', 'SQL Server'],
    tags: ['Web App', 'Finance', 'Productivity'],
  },
  {
    slug: 'smart-greenhouse',
    title: 'Local Farm: Smart Greenhouse',
    description:
      'IoT-enabled system for real-time monitoring and automated control of greenhouse environments using Blazor and sensor data.',
    category: 'IoT',
    imageUrls: ['images/greenhouse.svg'],
    githubLink: 'https://github.com/enigmasheet/LocalFarm',
    liveDemo: 'https://zealous-glacier-0fddea800.4.azurestaticapps.net/',
    liveDemoActive: false,
    technologies: ['NodeMCU', 'IoT', 'React', 'JS', 'Arduino'],
    tags: ['IoT', 'Automation', 'Agriculture'],
  },
  {
    slug: 'hotel-booking-api',
    title: 'Hotel Booking API',
    description:
      'RESTful API for hotel booking management with authentication, authorization, and data validation to support scalable booking systems.',
    category: 'API',
    imageUrls: ['images/hotel-booking.svg'],
    githubLink: 'https://github.com/enigmasheet/HotelBookingAPI',
    liveDemo: '',
    liveDemoActive: false,
    technologies: ['ASP.NET Core', 'JWT Authentication', 'Swagger'],
    tags: ['API', 'Backend', 'Authentication'],
  },
];
