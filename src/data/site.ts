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
  title: '.NET Backend Developer',
  shortTitle: '.NET Backend Developer',
  description:
    '.NET Backend Developer specializing in ASP.NET Core, C#, and clean architecture. I build production-grade backend systems from legacy migrations to modern microservices.',
  jobTitle: 'Backend Developer',
  knowsAbout: ['.NET Framework', '.NET 6+', 'ASP.NET Core', 'C#', 'Legacy Migration', 'Debugging'],
};

export const HERO: HeroContent = {
  greeting: 'Hi, my name is',
  description:
    'I engineer backend systems across the full .NET ecosystem — from sustaining battle-tested legacy code to architecting modern, high-performance solutions with clean architecture and an unwavering commitment to problem-solving.',
  primaryCta: 'View Projects',
  secondaryCta: 'Get In Touch',
};

export const SECTIONS: Record<string, SectionHeader> = {
  overview: {
    label: 'Overview',
    title: 'What I Do',
    description:
      'Full-spectrum .NET backend engineering — from maintaining legacy enterprise systems (.NET Framework, ASP.NET MVC) to architecting modern, scalable platforms (.NET 8+, ASP.NET Core, Blazor). I solve complex problems at the system level and build infrastructure that performs under pressure.',
  },
  about: {
    label: 'About',
    title: 'About Me',
    description:
      'A .NET backend engineer who bridges legacy and modern architectures — solving complex problems with clean design, production-grade code, and an obsession for continuous mastery.',
  },
  experience: {
    label: 'Career',
    title: 'My Experience',
    description:
      "The teams I've led, the systems I've architected, and the production environments I've strengthened — from legacy migrations to greenfield platforms.",
  },
  projects: {
    label: 'Work',
    title: "Projects I've Built",
    description:
      'Real-world backend systems, APIs, and platforms I have designed, built, and shipped — from database schema to deployment pipeline.',
  },
  blog: {
    label: 'Blog',
    title: 'Articles & Thoughts',
    description:
      'Deep dives into backend architecture, .NET internals, cloud infrastructure, system design, and the engineering decisions that separate good systems from great ones.',
  },
  contact: {
    label: 'Contact',
    title: 'Get In Touch',
    description:
      'Have a backend challenge, a system to build, or an idea worth engineering? Let\'s talk.',
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
    "I'm a backend engineer specializing in .NET — spanning legacy frameworks and modern platforms with equal rigor. I thrive on deep problem-solving and debugging complex system-level issues, approaching each challenge as an opportunity to build more resilient infrastructure. I hold a Bachelor's degree in Information Technology from Texas College of Management and IT, Sifal, Kathmandu.",
    'With experience across the full .NET ecosystem, I bridge the gap between maintaining battle-tested legacy code and architecting modern, high-performance solutions. What drives me is continuous mastery: staying ahead of industry evolution while deepening my technical expertise in backend systems, API design, and clean architecture.',
    'Based in Kathmandu, I\'m always open to connecting with fellow engineers and exploring opportunities where I can architect, build, and ship. Whether it\'s debugging a thorny legacy migration or designing a new microservice from scratch, I bring curiosity, persistence, and craftsmanship to every line of code.',
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
    'The best code is the code you don\'t have to write — but when you do, make it count.',
    'Debugging is not about finding what\'s broken. It\'s about understanding what\'s working.',
    'Legacy code isn\'t a burden. It\'s a history lesson written in a language you understand.',
    'Great software is built at the intersection of technical excellence and clear communication.',
    'A robust system isn\'t one that never fails — it\'s one that fails gracefully.',
    'Learning never exhausts the mind. In software, it\'s the only way to keep up.',
    'Bridging legacy and modern isn\'t just about code — it\'s about understanding how systems evolve.',
    'Every bug you fix teaches you more about the system than any feature you build.',
    'Clean architecture isn\'t about perfection. It\'s about making future you grateful.',
    'The .NET ecosystem is vast — mastery comes from knowing both where the framework has been and where it\'s going.',
    'Software development is a continuous loop of learning, building, debugging, and improving.',
    'Your code should tell a story — one that the next developer can actually follow.',
    'Refactoring isn\'t rewriting history. It\'s making the future easier to navigate.',
    'The most valuable skill in tech isn\'t a programming language — it\'s the ability to learn the next one.',
    'A well-architected system is like a well-designed building: invisible infrastructure that just works.',
    'Courage is not knowing when to write code. It\'s knowing when to refactor it.',
    'Every great developer you know got there by solving problems they didn\'t understand at first.',
    'The difference between a good system and a great one is how it handles the unexpected.',
    'Code should not only work — it should inspire.',
    'The best way to predict the future of software is to build it, one clean commit at a time.',
    'Great problem solvers don\'t just fix bugs — they understand why they existed in the first place.',
    'Technology changes, but the principles of clean, maintainable code are timeless.',
    'Mastering both legacy and modern frameworks isn\'t a contradiction. It\'s a superpower.',
    'The best investment you can make in your career is the time you spend learning something new.',
    'There\'s no such thing as done in software. There\'s only deployed and improving.',
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
  "Have a project to build, a system to scale, or a team that needs a strong backend engineer? I'm always open to engineering challenges, freelance work, or a conversation about technology and product development. Let's build something.";
