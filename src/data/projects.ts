import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    slug: 'transport-expenditure-tracker',
    title: 'Transport Expenditure Tracker',
    description:
      'A web app to efficiently manage and track transport-related expenses with detailed reports and data visualization.',
    imageUrls: ['images/transport.svg'],
    githubLink: 'https://github.com/enigmasheet/TransportExpenditureTracker',
    liveDemo: 'https://transportexpense.azurewebsites.net/',
    liveDemoActive: true,
    technologies: ['ASP.NET Core', 'Entity Framework', 'Blazor', 'SQL Server'],
    tags: ['Web App', 'Finance', 'Productivity'],
  },
  {
    slug: 'smart-greenhouse',
    title: 'Local Farm: Smart Greenhouse',
    description:
      'IoT-enabled system for real-time monitoring and automated control of greenhouse environments using Blazor and sensor data.',
    imageUrls: ['images/greenhouse.svg'],
    githubLink: 'https://github.com/enigmasheet/LocalFarm',
    liveDemo: 'https://zealous-glacier-0fddea800.4.azurestaticapps.net/',
    liveDemoActive: true,
    technologies: ['NodeMCU', 'IoT', 'React', 'JS', 'Arduino'],
    tags: ['IoT', 'Automation', 'Agriculture'],
  },
  {
    slug: 'personal-portfolio',
    title: 'Personal Portfolio',
    description:
      'My personal website showcasing projects, skills, experiences, and blog posts to highlight my professional journey.',
    imageUrls: ['images/portfolio.svg'],
    githubLink: 'https://github.com/enigmasheet/PersonalPortfolio.v1',
    liveDemo: 'https://abhaymandal.com.np/',
    liveDemoActive: true,
    technologies: ['Blazor', 'CSS', 'JavaScript', 'Azure Static Web Apps'],
    tags: ['Portfolio', 'Web Development'],
  },
  {
    slug: 'hotel-booking-api',
    title: 'Hotel Booking API',
    description:
      'RESTful API for hotel booking management with authentication, authorization, and data validation to support scalable booking systems.',
    imageUrls: ['images/hotel_booking.svg'],
    githubLink: 'https://github.com/enigmasheet/HotelBookingAPI',
    liveDemo: '',
    liveDemoActive: false,
    technologies: ['ASP.NET Core', 'JWT Authentication', 'Swagger'],
    tags: ['API', 'Backend', 'Authentication'],
  },
  {
    slug: 'laundry-management-system',
    title: 'LaundryManager',
    description:
      'A multi-tenant laundry management SaaS built for Nepal. Order management, customer database, role-based access, reports & analytics, and SMS notifications — all in one dashboard. Replaces paper-based systems for laundry businesses.',
    imageUrls: ['images/laundry.svg'],
    githubLink: 'https://github.com/enigmasheet/Laundary-Management-System',
    liveDemo: 'https://laundry.abhaymandal.com.np/',
    liveDemoActive: true,
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Nginx', 'REST API', 'SMS'],
    tags: ['SaaS', 'Multi-Tenant', 'Web App', 'Operations'],
  },
  {
    slug: 'hmc-nepal-portal',
    title: 'HMC Nepal Multi-App Portal',
    description:
      'A centralized multi-application portal for HMC Nepal, integrating multiple business services — including claims management, member services, and administrative tools — into a unified dashboard with role-based access and real-time analytics.',
    imageUrls: [],
    githubLink: '',
    liveDemo: 'https://www.hmcnepal.com.np/',
    liveDemoActive: true,
    technologies: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Nginx', 'PM2', 'TypeScript'],
    tags: ['Portal', 'Multi-App', 'Enterprise', 'Dashboard'],
  },
  {
    slug: 'sajilo-inventory',
    title: 'Sajilo Inventory',
    description:
      'A multitenant inventory management system for small shops. Track stock movements, define custom product attributes, get low-stock alerts, and manage everything from one dashboard with data isolation across shops.',
    imageUrls: ['images/inventory.svg'],
    githubLink: 'https://github.com/enigmasheet/inventoryMangement',
    liveDemo: 'https://inventory-mangement-pearl.vercel.app/',
    liveDemoActive: true,
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Google OAuth', 'PWA'],
    tags: ['Inventory', 'Multitenant', 'Web App', 'Productivity'],
  },
];
