import type { Project } from '../types';
import hmcNepal from '../assets/images/hmc-nepal.png';
import inventoryManagement from '../assets/images/inventory-management.png';
import laundryManagement from '../assets/images/laundry-management.png';
import teachMateLanding from '../assets/images/TeachMate_Landing_Page.png';
import vatExpenseDashboard from '../assets/images/vatExpenst_Dashboard.png';
import vatExpenseLogin from '../assets/images/vatExpenst_Login.png';

export const PROJECTS: Project[] = [
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
      'The current version of my personal portfolio: a static Astro site for project case studies, experience, an engineering blog, and my resume. Built with Astro 7, TypeScript, and Tailwind CSS 4.',
    category: 'Web app',
    images: [],
    githubLink: 'https://github.com/enigmasheet/astro-portfolio',
    liveDemo: 'https://abhaymandal.com.np/',
    liveDemoActive: true,
    technologies: ['Astro 7', 'TypeScript', 'Tailwind CSS 4', 'MDX', 'Vite'],
    tags: ['Portfolio', 'Astro', 'Static Site', 'Technical Writing'],
    caseStudy: {
      context:
        'I wanted one home for project case studies, experience, technical writing, and my resume. The current site replaces an earlier Blazor WebAssembly portfolio with a content-focused static build.',
      solution:
        'Astro generates the portfolio pages from typed TypeScript content modules and Markdown/MDX blog posts. Reusable layouts and components present project details, career information, and writing, with small browser scripts for theme switching and interactive filters.',
      capabilities: [
        'Project directory with category and technology filters, search, and generated case-study pages',
        'Experience, skills, profile, and resume pages with PDF download and print support',
        'Markdown/MDX engineering blog with an RSS feed',
        'Responsive layouts with persistent light and dark themes',
        'Canonical and Open Graph metadata, structured data, sitemap, and optimized images',
      ],
      architecture: [
        'Astro 7 builds the site as static pages; project detail routes are generated from the typed PROJECTS collection.',
        'Typed TypeScript modules hold site, project, experience, and skills data, while Astro content collections load Markdown/MDX articles.',
        'Tailwind CSS 4 is integrated through Vite; small JavaScript modules handle theme, navigation, filters, and progressive interactions.',
        'Astro integrations generate the sitemap and support MDX; the site also publishes an RSS feed and structured metadata.',
      ],
      decisions: [
        'Use static generation for a content-focused site that does not need a runtime application server or database.',
        'Keep structured portfolio data in typed modules and long-form writing in Markdown/MDX so each content type stays easy to maintain.',
        'Limit browser-side JavaScript to interactions such as theme switching, project filtering, and navigation.',
      ],
    },
  },
  {
    slug: 'graphql-dotnet-practice',
    title: 'GraphQL .NET Practice',
    description:
      'An end-to-end GraphQL learning project with a Hot Chocolate API and a Blazor WebAssembly client generated with Strawberry Shake. Its sample blog schema demonstrates Relay pagination, filtering, sorting, DataLoaders, typed mutation errors, global IDs, and WebSocket subscriptions.',
    category: 'API',
    images: [],
    githubLink: 'https://github.com/enigmasheet/GraphQL_DotNet_Practice',
    liveDemo: '',
    liveDemoActive: false,
    technologies: [
      '.NET 10',
      'C#',
      'Hot Chocolate 16',
      'GraphQL',
      'Entity Framework Core 10',
      'PostgreSQL',
      'Npgsql',
      'Blazor WebAssembly',
      'Strawberry Shake 16',
    ],
    tags: ['GraphQL', '.NET 10', 'Blazor WebAssembly', 'Developer Education'],
    caseStudy: {
      context:
        'I built this project to study GraphQL end to end—from schema design and database-backed resolvers to a typed client—using a small blog domain that makes nested queries, pagination, and real-time events easy to explore.',
      solution:
        'A code-first Hot Chocolate API serves authors, posts, comments, and tags from PostgreSQL. A Blazor WebAssembly client uses Strawberry Shake-generated operations to query and mutate the data, while a guided study series and Postman collection make the GraphQL concepts reproducible.',
      capabilities: [
        'Relay connection pagination with filtering, sorting, projections, and bounded page sizes',
        'Global object identification with the Node interface and opaque GraphQL IDs',
        'Nested author and post resolvers with DataLoaders to batch related database lookups',
        'Post and comment mutations with typed domain errors',
        'WebSocket subscriptions for post publication and new comments',
        'Blazor client for browsing, filtering, paging, creating posts, and receiving subscription events',
        'Guided study series, schema tour, query cookbook, and runnable Postman operations',
      ],
      architecture: [
        'A .NET 10 ASP.NET Core API uses Hot Chocolate 16 in a modular-monolith structure, with separate Authors, Posts, Comments, and Tags modules.',
        'Entity Framework Core 10 and Npgsql persist the blog domain in PostgreSQL; migrations and development seed data support local setup.',
        'The Blazor WebAssembly client uses Strawberry Shake 16 to generate a typed C# client from GraphQL operation documents.',
        'The API exposes GraphQL over HTTP and WebSocket subscriptions, plus Nitro for exploration and an SDL schema endpoint.',
      ],
      decisions: [
        'Organize schema types, resolvers, data configuration, and registrations by domain module while sharing the blog entities and database context.',
        'Use Relay connections and global node IDs to demonstrate stable cursor-based pagination and client-independent object identity.',
        'Apply selection-aware EF queries and DataLoaders to avoid unnecessary data retrieval and repeated nested lookups.',
        'Use in-memory subscriptions for local learning and explicitly keep authentication, authorization, and distributed subscription infrastructure out of scope.',
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
      'A greenhouse monitoring dashboard paired with NodeMCU/Arduino sensor hardware. The React app manages greenhouse profiles and environmental thresholds, visualizes temperature, humidity, and soil-moisture readings stored in Firebase, and exports sensor history and reported device status.',
    category: 'IoT',
    images: [],
    githubLink: 'https://github.com/enigmasheet/LocalFarm',
    liveDemo: '',
    liveDemoActive: false,
    technologies: [
      'NodeMCU',
      'Arduino',
      'IoT Sensors',
      'React 18',
      'JavaScript',
      'Vite 5',
      'Firebase Authentication',
      'Firebase Realtime Database',
      'Recharts',
      'Tailwind CSS 3',
    ],
    tags: ['IoT', 'Greenhouse Monitoring', 'Firebase', 'Data Visualization'],
    caseStudy: {
      context:
        'Greenhouse operators need to review environmental readings against target levels. LocalFarm groups greenhouse settings, sensor readings, and reported system status so users can inspect conditions by greenhouse.',
      solution:
        'A Vite-built React single-page app uses Firebase Authentication for sign-in and Firebase Realtime Database for greenhouse profiles, sensor readings, and system-state data from the separate NodeMCU/Arduino setup. Greenhouse pages chart readings against configured thresholds, show the latest values, and offer CSV export.',
      capabilities: [
        'Create, update, and remove greenhouse profiles with plant details and temperature, humidity, and soil-moisture thresholds',
        'Visualize temperature, humidity, and soil-moisture readings from Firebase with threshold reference lines',
        'Review latest sensor readings and reported ventilation and water-pump status',
        'Export greenhouse details, historical readings, thresholds, and system status as CSV',
        'Register accounts, sign in, and request password resets through Firebase Authentication',
      ],
      architecture: [
        'The React 18 frontend is built with Vite and uses React Router for the greenhouse list, detail, settings, and account pages.',
        'Firebase Authentication manages user sign-in; Firebase Realtime Database stores greenhouse metadata, sensor readings, and reported system state.',
        'Recharts renders sensor histories with configured temperature, humidity, and moisture thresholds; CSV reports are generated in the browser.',
        'A GitHub Actions workflow builds the static app and deploys it to Azure Static Web Apps.',
      ],
      decisions: [
        'Keep greenhouse configuration and sensor data keyed by greenhouse so each detail view can load its profile, thresholds, readings, and reported device status together.',
        'Show configured thresholds directly on sensor charts to make readings easier to compare with each greenhouse’s target ranges.',
        'Generate CSV reports client-side from the selected greenhouse and its available sensor history.',
      ],
    },
  },
];
