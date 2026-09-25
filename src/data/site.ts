import type {
  SiteInfo,
  HeroContent,
  SectionHeader,
  AboutContent,
  ResumeContent,
  StatItem,
} from '../types';

export const SITE: SiteInfo = {
  name: 'Abhay',
  fullName: 'Abhay Kumar Mandal',
  title: 'Full-Stack Engineer',
  shortTitle: '.NET Full-Stack Engineer',
  description:
    'Full-stack engineer specializing in .NET and C#—building ASP.NET Core services, REST APIs, and data layers with SQL and Azure, plus modern TypeScript and React applications.',
  jobTitle: 'Full-Stack Engineer (.NET)',
  knowsAbout: [
    'C#',
    '.NET',
    'ASP.NET Core',
    'REST APIs',
    'Entity Framework',
    'SQL Server',
    'Azure',
    'TypeScript',
    'React',
    'Next.js',
    'Legacy Migration',
  ],
};

export const HERO: HeroContent = {
  greeting: 'Full-Stack Engineer · .NET',
  description:
    'I build and modernize full-stack systems with a .NET focus—ASP.NET Core services, REST APIs, and data access in C#—alongside TypeScript and React applications when a product needs the full stack.',
  primaryCta: 'View selected work',
  secondaryCta: 'Get in touch',
};

export const SECTIONS: Record<string, SectionHeader> = {
  overview: {
    label: 'Approach',
    title: 'Engineering stack',
    description: 'The platforms, data tools, and delivery practices I work with.',
  },
  about: {
    label: 'About',
    title: 'A little about how I work',
    description:
      'I work as a full-stack engineer with a .NET focus—building APIs, services, and data layers with C# and ASP.NET Core, and shipping TypeScript and React front ends when a product needs them.',
  },
  experience: {
    label: 'Career',
    title: 'Experience',
    description:
      'Software development, project delivery, and earlier robotics education and leadership work.',
  },
  projects: {
    label: 'Work',
    title: 'Systems I’ve worked on',
    description: 'A selection of .NET services, full-stack applications, and backend work.',
  },
  blog: {
    label: 'Writing',
    title: 'Engineering Notes',
    description: 'Practical notes on building with .NET and modern web platforms.',
  },
  contact: {
    label: 'Contact',
    title: 'Have something to build?',
    description:
      "Have a backend challenge, a system to build, or an idea worth engineering? Let's talk.",
  },
  github: {
    label: 'GitHub',
    title: 'Open Source Activity',
    description:
      'Stats, contribution graphs, and pinned repositories from my GitHub profile — showcasing my work in open source.',
    cta: 'View GitHub Profile',
  },
  testimonials: {
    label: 'Kind Words',
    title: 'What People Say',
    description:
      'What colleagues, managers, and collaborators say about working with me — the problems we solved and the systems we built together.',
  },
};

export const ABOUT: AboutContent = {
  paragraphs: [
    "I'm a full-stack engineer with a focus on .NET and C#. Most of my work is backend: services, REST APIs, and data access built with ASP.NET Core, Entity Framework, and SQL Server, including the ongoing modernization of legacy systems.",
    'I also build full-stack products with TypeScript, React, and Next.js—several of the projects on this site are built that way. Working across both ecosystems helps me make practical decisions about where logic and responsibility belong.',
    "Based in Kathmandu, Nepal, I hold a Bachelor's degree in Information Technology from Texas College of Management and IT, Sifal, Kathmandu, with an earlier background in robotics education and technical events. I'm open to backend and full-stack roles where I can design, build, and ship.",
  ],
  blockTitles: {
    skills: 'Skills & Technologies',
    certifications: 'Certifications',
    testimonials: 'Testimonials',
  },
  stats: [
    { label: 'Projects Built', target: 7, suffix: '+' },
    { label: 'Years of Experience', target: 3, suffix: '+' },
    { label: 'Blog Posts', target: 2, suffix: '+' },
    { label: 'Certifications', target: 6, suffix: '+' },
  ],
  quotes: [
    "The best code is the code you don't have to write — but when you do, make it count.",
    "Debugging is not about finding what's broken. It's about understanding what's working.",
    "Legacy code isn't a burden. It's a history lesson written in a language you understand.",
    'Great software is built at the intersection of technical excellence and clear communication.',
    "A robust system isn't one that never fails — it's one that fails gracefully.",
    "Learning never exhausts the mind. In software, it's the only way to keep up.",
    "Bridging legacy and modern isn't just about code — it's about understanding how systems evolve.",
    'Every bug you fix teaches you more about the system than any feature you build.',
    "Clean architecture isn't about perfection. It's about making future you grateful.",
    "The .NET ecosystem is vast — mastery comes from knowing both where the framework has been and where it's going.",
    'Software development is a continuous loop of learning, building, debugging, and improving.',
    'Your code should tell a story — one that the next developer can actually follow.',
    "Refactoring isn't rewriting history. It's making the future easier to navigate.",
    "The most valuable skill in tech isn't a programming language — it's the ability to learn the next one.",
    'A well-architected system is like a well-designed building: invisible infrastructure that just works.',
    "Courage is not knowing when to write code. It's knowing when to refactor it.",
    "Every great developer you know got there by solving problems they didn't understand at first.",
    'The difference between a good system and a great one is how it handles the unexpected.',
    'Code should not only work — it should inspire.',
    'The best way to predict the future of software is to build it, one clean commit at a time.',
    "Great problem solvers don't just fix bugs — they understand why they existed in the first place.",
    'Technology changes, but the principles of clean, maintainable code are timeless.',
    "Mastering both legacy and modern frameworks isn't a contradiction. It's a superpower.",
    'The best investment you can make in your career is the time you spend learning something new.',
    "There's no such thing as done in software. There's only deployed and improving.",
    'A debugger is the closest thing to a time machine that software developers have.',
    'Building robust systems requires patience, persistence, and a willingness to question your own assumptions.',
    'Your reputation is built on the problems you solve, not the technologies you use.',
    'The gap between a working solution and an elegant one is where craftsmanship lives.',
    'Stay curious. The moment you stop learning is the moment your code starts aging.',
  ],
};

export const STATS: StatItem[] = ABOUT.stats;

export const RESUME: ResumeContent = {
  location: 'Kathmandu, Nepal',
  education: [
    {
      degree: "Bachelor's in Information Technology",
      school: 'Texas College of Management and IT, Sifal, Kathmandu',
      dates: '2021 – 2024',
    },
  ],
};

export const CONTACT_INTRO =
  "Have a .NET or full-stack project to build, a legacy system to modernize, or a backend that needs to scale? I'm open to full-time roles, freelance work, and conversations about backend and product engineering.";
