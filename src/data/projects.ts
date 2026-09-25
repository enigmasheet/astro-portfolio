import type { Project } from '../types';
import hmcNepal from '../assets/images/hmc-nepal.png';
import inventoryManagement from '../assets/images/inventory-management.png';
import laundryManagement from '../assets/images/laundry-management.png';
import teachMateLanding from '../assets/images/TeachMate_Landing_Page.png';
import vatExpenseDashboard from '../assets/images/vatExpenst_Dashboard.png';
import vatExpenseLogin from '../assets/images/vatExpenst_Login.png';

export const PROJECTS: Project[] = [
  {
    slug: 'transport-expenditure-tracker',
    title: 'Transport Expenditure Tracker',
    description:
      'A .NET web application for recording and tracking transport-related expenses, with reporting and data visualization built on ASP.NET Core, Entity Framework, Blazor, and SQL Server.',
    category: 'Web app',
    images: [],
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
    images: [vatExpenseDashboard, vatExpenseLogin],
    imageAlts: [
      'VAT Expense Ledger dashboard with purchase summaries and expense navigation',
      'VAT Expense Ledger sign-in screen',
    ],
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
    images: [],
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
    images: [teachMateLanding],
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
      'A laundry vendor and order-management application built with Blazor WebAssembly and an ASP.NET Core 8 API. Customers can browse vendors and place orders, while vendor staff manage service catalogs and order details. Orders capture service line items, pickup or drop-off and delivery information, pricing, and order and payment status.',
    category: 'Web app',
    images: [laundryManagement],
    githubLink: 'https://github.com/enigmasheet/Laundry-Management-System',
    liveDemo: '',
    liveDemoActive: false,
    technologies: [
      'C#',
      '.NET 8',
      'ASP.NET Core',
      'Blazor WebAssembly',
      'Entity Framework Core',
      'SQL Server',
      'JWT Authentication',
      'AutoMapper',
      'Swagger',
    ],
    tags: ['Laundry Operations', 'Order Management', 'Vendor Services', 'Web App'],
    caseStudy: {
      context:
        'LaundryManager is positioned for laundry businesses in Nepal. The application models customers, laundry vendors, vendor-specific services, and orders in a shared workflow for browsing services and coordinating laundry orders.',
      solution:
        'A Blazor WebAssembly client connects to a REST API for vendor and service browsing, account sign-in, and order creation and updates. Orders can include multiple priced service items, scheduling details, and special instructions, with order and payment status stored alongside them.',
      capabilities: [
        'Browse active laundry vendors, vendor details, and available services',
        'Create and update orders with vendor-specific service items, quantities, unit prices, and calculated totals',
        'Record pickup or drop-off and delivery details, dates, and special instructions',
        'Track order lifecycle and payment status',
        'Role-aware client experiences for customers, vendor admins, employees, and super admins',
        'Manage vendor service catalogs with names, descriptions, prices, and units',
      ],
      architecture: [
        'A Blazor WebAssembly client communicates with an ASP.NET Core 8 REST API; Laundry.Shared contains DTOs and enums used across the client and API.',
        'Entity Framework Core 8 persists users, vendors, services, orders, order items, reviews, and inquiries in SQL Server, with schema changes tracked through migrations.',
        'The API uses JWT bearer authentication, AutoMapper for DTO/entity mapping, and Swagger for API documentation.',
      ],
      decisions: [
        'Share DTOs and enums between the client and API to keep their data contracts aligned within the .NET solution.',
        'Associate services with vendors and orders with both vendors and customers to represent the vendor-based workflow.',
        'Represent each order as service line items with quantity, unit, and price so order totals can be calculated from the selected work.',
      ],
    },
  },
  {
    slug: 'hmc-nepal-portal',
    title: 'HMC Nepal Commerce & Warranty Platform',
    description:
      'An integrated storefront and warranty platform for HMC Nepal. Customers browse and compare products and request quotations; dealers register warranties and check serial numbers; internal teams manage the product catalog, dealer approvals, promotions, and warranty records.',
    category: 'Web app',
    images: [hmcNepal],
    githubLink: '',
    liveDemo: 'https://www.hmcnepal.com.np/',
    liveDemoActive: true,
    technologies: [
      'Next.js',
      'React 19',
      'TypeScript',
      'Express 5',
      'MongoDB',
      'Mongoose 8',
      'JWT Authentication',
      'ApexCharts',
      'Multer',
      'Nodemailer',
      'ERP OAuth2',
    ],
    tags: ['E-commerce', 'Warranty Management', 'Dealer Portal', 'Multi-App Platform'],
    caseStudy: {
      context:
        'Customers, authorized dealers, and internal staff each interact with HMC Nepal’s product and warranty workflows. This platform connects those experiences through separate public, partner, and admin applications backed by a shared API.',
      solution:
        'The system combines a public product storefront, an admin console, and a dealer portal with an Express REST API. Customers can browse products and request quotations. Dealers can apply for approval, manage their profiles, and register warranties. Staff manage catalog content, dealer status, and warranty records. Serial validation can use HMC’s ERP and fall back to SmartLife when configured.',
      capabilities: [
        'Product browsing with category and brand filters, search, comparison, and wishlist-based quotation requests',
        'Admin tools for products, categories, brands, banners, carousels, offers, dealers, and warranties',
        'Dealer registration with supporting documents, admin review, and status notifications',
        'Warranty registration, dealer history and stats, public serial-number lookup, and warranty replacement',
        'QR-based serial entry and bulk ERP serial validation',
        'Admin warranty totals, active/expired counts, monthly trends, dealer breakdowns, and audit history',
      ],
      architecture: [
        'Three Next.js portals—the public storefront, admin console, and dealer portal—communicate with a separate Express 5 REST API. The storefront uses Next.js 15; the admin and partner portals use Next.js 16.',
        'The API uses TypeScript, Mongoose, and MongoDB for catalog, dealer, warranty, and audit records; Multer handles uploaded product and dealer documents.',
        'JWT authentication and role checks separate dealer and administrative workflows; Nodemailer sends dealer-status and account emails.',
        'ERP integration obtains and caches OAuth2 tokens, validates serial numbers against HMC first, and falls back to SmartLife when configured.',
      ],
      decisions: [
        'Separate public shopping, dealer operations, and internal administration into distinct portals backed by one shared API.',
        'Validate product serials against ERP data and existing warranty records before accepting warranty registrations.',
        'Calculate warranty status from each record’s expiry date so active and expired results reflect the current date without a scheduled status update.',
        'Record dealer and administrative actions in audit logs to make approvals and warranty operations traceable.',
      ],
    },
  },
  {
    slug: 'personal-portfolio',
    title: 'Personal Portfolio',
    description:
      'An earlier version of my personal portfolio, built with Blazor WebAssembly and deployed to Azure Static Web Apps. The current site you are viewing is a separate Astro rebuild.',
    category: 'Web app',
    images: [],
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
      'A multi-tenant inventory app for small shops, with shop-scoped product catalogs, customizable product fields, stock movement history, low-stock and expiry indicators, and inventory counts with optional adjustments.',
    category: 'Web app',
    images: [inventoryManagement],
    githubLink: 'https://github.com/enigmasheet/inventoryMangement',
    liveDemo: 'https://inventory-mangement-pearl.vercel.app/',
    liveDemoActive: true,
    technologies: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS 4',
      'PostgreSQL',
      'Prisma 7',
      'Better Auth',
      'Google OAuth',
      'Zod 4',
      'Vitest',
      'shadcn/ui',
    ],
    tags: ['Inventory Management', 'Multi-Tenant', 'Stock Control', 'Small Business'],
    caseStudy: {
      context:
        'Small retailers can have different product details to track—such as expiry dates for packaged goods or frame size and color for bicycles—alongside day-to-day stock control. Sajilo Inventory lets each shop configure its product fields while keeping its inventory records scoped to that shop.',
      solution:
        'Shop members sign in with Google and create or join a shop using an invite code. They can manage products and custom fields, record stock additions and removals, and reconcile inventory through stock takes. Dashboard indicators surface low stock and date-based attributes nearing expiry.',
      capabilities: [
        'Shop-scoped product catalog with SKU/name search, pagination, and product CSV export',
        'Per-shop text, number, and date attributes for product-specific details',
        'Stock IN/OUT movements with movement history, CSV export, and insufficient-stock checks',
        'Dashboard indicators for low and out-of-stock products, inventory value, and upcoming expiry dates',
        'Stock takes compare counted and expected quantities, with optional adjustments recorded as movements',
        'Invite-code shop membership with owner-controlled member and financial-visibility settings',
      ],
      architecture: [
        'Next.js App Router uses server-rendered pages and Server Actions for product, attribute, and stock workflows, plus route handlers for CSV exports.',
        'Prisma 7 with the PostgreSQL driver adapter persists tenant, product, custom-attribute, stock-movement, and stock-take data in PostgreSQL.',
        'Better Auth manages Google OAuth sessions; tenant access is checked in the request proxy, tenant layout, and Server Actions, with queries scoped to the tenant from the session.',
        'Zod validates shop, product, stock-movement, and custom-attribute input; Vitest covers Server Action behavior and tenant isolation scenarios.',
      ],
      decisions: [
        'Use shared database tables keyed by tenantId and tenant-slug routes so multiple shops can use one application while queries remain scoped to the signed-in user’s shop.',
        'Let each tenant define typed product attributes instead of hard-coding fields for a single retail category.',
        'Apply stock movements and quantity changes transactionally, and reject stock-out requests that exceed available inventory.',
        'Model stock takes as expected-versus-counted snapshots, with optional adjustments producing corresponding stock-movement records.',
      ],
    },
  },
  {
    slug: 'smart-greenhouse',
    title: 'Local Farm: Smart Greenhouse',
    description:
      'IoT-enabled system for real-time monitoring and automated control of greenhouse environments using Blazor and sensor data.',
    category: 'IoT',
    images: [],
    githubLink: 'https://github.com/enigmasheet/LocalFarm',
    liveDemo: 'https://zealous-glacier-0fddea800.4.azurestaticapps.net/',
    liveDemoActive: false,
    technologies: ['NodeMCU', 'IoT', 'React', 'JS', 'Arduino'],
    tags: ['IoT', 'Automation', 'Agriculture'],
  },
];
