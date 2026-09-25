import type { Project } from '../types';
import greenhouse from '../assets/images/greenhouse.svg';
import hmcNepal from '../assets/images/hmc-nepal.png';
import hotelBooking from '../assets/images/hotel-booking.svg';
import inventoryManagement from '../assets/images/inventory-management.png';
import laundryManagement from '../assets/images/laundry-management.png';
import portfolio from '../assets/images/portfolio.svg';
import transport from '../assets/images/transport.svg';

export const PROJECTS: Project[] = [
  {
    slug: 'transport-expenditure-tracker',
    title: 'Transport Expenditure Tracker',
    description:
      'A .NET web application for recording and tracking transport-related expenses, with reporting and data visualization built on ASP.NET Core, Entity Framework, Blazor, and SQL Server.',
    category: 'Web app',
    images: [transport],
    githubLink: 'https://github.com/enigmasheet/TransportExpenditureTracker',
    liveDemo: 'https://transportexpense.azurewebsites.net/',
    liveDemoActive: false,
    technologies: ['ASP.NET Core', 'C#', 'Entity Framework', 'Blazor', 'SQL Server'],
    tags: ['Web App', 'Finance', 'Productivity'],
    caseStudy: {
      context:
        'Transport expenses were tracked in spreadsheets, which made entries inconsistent and made it hard to see spending across vehicles and routes over time.',
      solution:
        'Transport Expenditure Tracker records transport-related expenses and presents them through reports and charts, using ASP.NET Core for the application and Blazor for the interface.',
      capabilities: [
        'Record and categorize transport expenses',
        'Track spending over time with reports',
        'Visualize cost patterns with charts',
        'Manage records through Entity Framework and SQL Server',
      ],
      architecture: [
        'ASP.NET Core provides the application and data services, with Entity Framework handling data access against SQL Server.',
        'Blazor renders the interface in C#, keeping the UI and backend in the same .NET ecosystem.',
      ],
      decisions: [
        'Keep the interface and backend in the same C# ecosystem so models and logic stay consistent end to end.',
        'Model expense records in SQL Server through Entity Framework to support the reporting views.',
      ],
    },
  },
  {
    slug: 'vat-expense-ledger',
    title: 'VAT Expense Ledger',
    description:
      'A purchase invoice register for Nepali businesses, with Bikram Sambat dates, company-configurable VAT calculations, fiscal-year reporting, and CSV/Excel import. Built as a TypeScript full-stack application with Next.js and PostgreSQL.',
    category: 'Finance',
    images: [],
    githubLink: 'https://github.com/enigmasheet/VATExpense',
    liveDemo: 'https://vat.abhaymandal.com.np/',
    liveDemoActive: true,
    technologies: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS 4',
      'PostgreSQL',
      'Drizzle ORM',
      'Neon',
      'NextAuth v5',
      'Zod 4',
      'Bikram Sambat dates',
      'Vercel',
    ],
    tags: ['Finance', 'Nepal VAT', 'Fiscal Year', 'Bikram Sambat', 'Business software'],
    caseStudy: {
      context:
        'Nepali businesses need purchase records tied to parties, VAT, and local fiscal years. Invoice dates use Bikram Sambat (BS), so fiscal-year reporting must follow the local calendar rather than assume Gregorian dates.',
      solution:
        'VAT Expense Ledger provides a company-scoped purchase register with single-entry and batch-ledger workflows, spreadsheet import, reports, and exports.',
      capabilities: [
        'Record purchase invoices in a single form or keyboard-driven ledger grid',
        'Import CSV and Excel files with a preview, row suggestions, and duplicate warnings',
        'Calculate VAT using a company-configurable rate (13% default)',
        'Resolve fiscal years from each invoice’s Miti date',
        'Review fiscal-year, monthly, and party reports; export CSV or XLSX',
        'Manage parties, categories, locations, trucks, and truck documents',
      ],
      architecture: [
        'Next.js App Router combines server-rendered dashboards and reports with API routes and server actions for data workflows.',
        'Drizzle ORM models company-scoped records in PostgreSQL; Neon is used for serverless production connections.',
        'Domain helpers handle Bikram Sambat date validation, fiscal-year resolution, fixed-point money, VAT calculation, and import-row validation.',
      ],
      decisions: [
        'Parse and validate Miti dates explicitly, then derive the fiscal year using the Nepali fiscal-year start month (Shrawan).',
        'Use a preview-and-confirm import flow so party/category suggestions and duplicate warnings can be reviewed before invoices are committed.',
        'Scope ledger and master-data records by company to support multiple businesses in one installation.',
      ],
    },
  },
  {
    slug: 'hotel-booking-api',
    title: 'Hotel Booking API',
    description:
      'A .NET RESTful API for hotel booking management with JWT authentication, authorization, request validation, and Swagger documentation for client developers.',
    category: 'API',
    images: [hotelBooking],
    githubLink: 'https://github.com/enigmasheet/HotelBookingAPI',
    liveDemo: '',
    liveDemoActive: false,
    technologies: ['ASP.NET Core', 'C#', 'JWT Authentication', 'Swagger', 'REST API'],
    tags: ['API', 'Backend', 'Authentication'],
    caseStudy: {
      context:
        'Booking systems need a clear, secured API contract that other clients can rely on for hotel and reservation data.',
      solution:
        'A RESTful API for hotel booking management that exposes endpoints for booking data with authentication, authorization, and request validation.',
      capabilities: [
        'RESTful endpoints for hotel and booking data',
        'JWT-based authentication and authorization',
        'Request validation for booking operations',
        'Interactive API documentation with Swagger',
      ],
      architecture: [
        'ASP.NET Core hosts the API and handles routing, model binding, and validation.',
        'JWT authentication secures endpoints and separates authenticated access from public operations.',
        'Swagger documents the available endpoints and request/response shapes for client developers.',
      ],
      decisions: [
        'Use token-based authentication so API clients can authenticate without server-side sessions.',
        'Document endpoints with Swagger so the API contract stays discoverable as it changes.',
      ],
    },
  },
  {
    slug: 'teachmate-learning-platform',
    title: 'TeachMate',
    description:
      'An interactive learning platform for bachelor students, combining structured C++ and OOP notes with teacher-led quizzes, QR-code session joining, and class progress tracking.',
    category: 'Education',
    images: [],
    githubLink: '',
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
    slug: 'laundry-management-system',
    title: 'LaundryManager',
    description:
      'A multi-tenant laundry management SaaS built for Nepal. Order management, customer database, role-based access, reports & analytics, and SMS notifications — all in one dashboard. Replaces paper-based systems for laundry businesses.',
    category: 'Web app',
    images: [laundryManagement],
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
    slug: 'hmc-nepal-portal',
    title: 'HMC Nepal Multi-App Portal',
    description:
      'A centralized multi-application portal for HMC Nepal, integrating multiple business services — including claims management, member services, and administrative tools — into a unified dashboard with role-based access and real-time analytics.',
    category: 'Web app',
    images: [hmcNepal],
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
    slug: 'personal-portfolio',
    title: 'Personal Portfolio',
    description:
      'An earlier version of my personal portfolio, built with Blazor WebAssembly and deployed to Azure Static Web Apps. The current site you are viewing is a separate Astro rebuild.',
    category: 'Web app',
    images: [portfolio],
    githubLink: 'https://github.com/enigmasheet/PersonalPortfolio.v1',
    liveDemo: '',
    liveDemoActive: false,
    technologies: ['Blazor', 'C#', 'CSS', 'JavaScript', 'Azure Static Web Apps'],
    tags: ['Portfolio', 'Web Development'],
    caseStudy: {
      context:
        'I wanted a personal site for projects, experience, and writing, and used it as a chance to build a full application with Blazor WebAssembly.',
      solution:
        'A Blazor WebAssembly single-page site with CSS-variable theming and static content, deployed to Azure Static Web Apps.',
      capabilities: [
        'Projects, experience, and blog content',
        'Light and dark theming with CSS variables',
        'Static deployment to Azure Static Web Apps',
      ],
      decisions: [
        'Kept content static so the site could be hosted without a backend.',
        'Used Blazor WebAssembly to build the interface in C# rather than JavaScript.',
      ],
    },
  },
  {
    slug: 'sajilo-inventory',
    title: 'Sajilo Inventory',
    description:
      'A multitenant inventory management system for small shops. Track stock movements, define custom product attributes, get low-stock alerts, and manage everything from one dashboard with data isolation across shops.',
    category: 'Web app',
    images: [inventoryManagement],
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
    slug: 'smart-greenhouse',
    title: 'Local Farm: Smart Greenhouse',
    description:
      'IoT-enabled system for real-time monitoring and automated control of greenhouse environments using Blazor and sensor data.',
    category: 'IoT',
    images: [greenhouse],
    githubLink: 'https://github.com/enigmasheet/LocalFarm',
    liveDemo: 'https://zealous-glacier-0fddea800.4.azurestaticapps.net/',
    liveDemoActive: false,
    technologies: ['NodeMCU', 'IoT', 'React', 'JS', 'Arduino'],
    tags: ['IoT', 'Automation', 'Agriculture'],
  },
];
