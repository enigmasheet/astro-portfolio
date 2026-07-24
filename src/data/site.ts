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
  jobTitle: 'Backend Developer',
  knowsAbout: ['.NET Framework', '.NET 6+', 'ASP.NET Core', 'C#', 'Legacy Migration', 'Debugging'],
};

export const HERO: HeroContent = {
  greeting: 'Hi, my name is',
  description:
    'I build robust backend systems across the full .NET ecosystem — from maintaining proven legacy code to architecting modern solutions with clean architecture and a relentless focus on problem-solving.',
  primaryCta: 'View Projects',
  secondaryCta: 'Get In Touch',
};

export const SECTIONS: Record<string, SectionHeader> = {
  overview: {
    label: 'Overview',
    title: 'What I Do',
    description:
      'Backend development across the full .NET ecosystem — from legacy frameworks (.NET Framework, ASP.NET MVC) to modern platforms (.NET 6+, ASP.NET Core, Blazor). I solve complex problems, debug deep issues, and build systems that stand the test of time.',
  },
  about: {
    label: 'About',
    title: 'About Me',
    description:
      'A .NET backend developer who bridges legacy and modern, solving complex problems with clean architecture and a passion for continuous learning.',
  },
  experience: {
    label: 'Career',
    title: 'My Experience',
    description:
      "Places I've worked, teams I've collaborated with, and production-grade systems I've built from the ground up.",
  },
  projects: {
    label: 'Work',
    title: "Projects I've Built",
    description:
      "A selection of applications, platforms, and tools I've designed, built, and shipped — from concept to production deployment.",
  },
  blog: {
    label: 'Blog',
    title: 'Articles & Thoughts',
    description:
      'Writing about backend development, modern web technologies like Blazor and Next.js, cloud architecture on Azure, and building things that matter.',
  },
  contact: {
    label: 'Contact',
    title: 'Get In Touch',
    description:
      "Have a question, a project idea, or just want to say hello? I'm always open to discussing new opportunities and collaborations.",
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
      "Feedback and recommendations from colleagues, managers, and collaborators I've had the pleasure of working with.",
  },
};

export const ABOUT: AboutContent = {
  paragraphs: [
    "I'm a backend developer specializing in .NET — working across both legacy frameworks and modern platforms. I thrive on problem-solving and debugging complex issues, approaching each challenge as an opportunity to build more robust systems. I hold a Bachelor's degree in Information Technology from Texas College of Management and IT, Sifal, Kathmandu.",
    'With experience spanning the full .NET ecosystem, I bridge the gap between maintaining proven legacy code and implementing cutting-edge solutions. What excites me most is continuous learning: staying ahead of industry trends while deepening my technical expertise.',
    'Based in Kathmandu, I\'m always open to connecting with fellow developers and exploring new opportunities in backend development. Whether it\'s debugging a thorny legacy issue or architecting a new microservice from scratch, I bring curiosity, persistence, and craftsmanship to every line of code.',
  ],
  blockTitles: {
    skills: 'Skills & Technologies',
    certifications: 'Certifications',
    achievements: 'Achievements',
    testimonials: 'Testimonials',
  },
  achievements: [
    {
      year: '2026',
      title: 'Launched Multi-Tenant SaaS',
      description:
        'Built and deployed LaundryManager, a production-grade multi-tenant SaaS serving laundry businesses across Nepal.',
    },
    {
      year: '2025',
      title: 'Hackathon Finalist',
      description:
        'Finalist in a national-level hackathon, building a real-time logistics tracking solution.',
    },
    {
      year: '2024',
      title: 'Product Launch',
      description:
        'Led the development and launch of a production-grade logistics platform serving 50+ users.',
    },
  ],
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
  "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a freelance gig, a full-time role, or just want to connect and talk about technology and product development, feel free to reach out!";
