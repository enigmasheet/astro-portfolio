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
  title: 'Backend Software Developer & Product-Oriented Technologist',
  shortTitle: 'Backend Software Developer',
  jobTitle: 'Web Developer',
  knowsAbout: ['JavaScript', 'Next.js', 'React', 'Node.js', '.NET', 'Azure'],
};

export const HERO: HeroContent = {
  greeting: 'Hi, my name is',
  description:
    'I build scalable backend systems, RESTful APIs, and modern full-stack web applications — blending clean architecture with thoughtful product design and a strong focus on developer experience.',
  primaryCta: 'View Projects',
  secondaryCta: 'Get In Touch',
};

export const SECTIONS: Record<string, SectionHeader> = {
  overview: {
    label: 'Overview',
    title: 'What I Do',
    description:
      'Modern backend development with a product mindset. I design and build scalable server-side applications, RESTful APIs, and full-stack web solutions using JavaScript, Next.js, .NET, and Azure cloud services.',
  },
  about: {
    label: 'About',
    title: 'About Me',
    description:
      'A dedicated backend developer with a passion for clean architecture, thoughtful product design, and building software that solves real-world problems.',
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
    "I am a dedicated Backend Software Developer with a strong foundation in modern application development using JavaScript, Next.js, and cloud technologies. I hold a Bachelor's degree in Information Technology from Texas College of Management and IT, Sifal, Kathmandu.",
    'My journey into software development stems from a deep-rooted interest in technology and a passion for solving meaningful, real-world problems. Over the years, I have developed and contributed to applications that are scalable, maintainable, and user-centric.',
    'In addition to my technical background, I bring experience in software product management, where I collaborate with cross-functional teams to lead the planning, development, and delivery of software products. This dual perspective strengthens my ability to align technical implementation with strategic business goals.',
    'Outside of work, I enjoy activities that challenge my creativity and focus — including sight seeing, casual gaming, and swimming. These hobbies contribute to my problem-solving mindset and help me stay balanced and motivated.',
    'My technical toolkit spans the JavaScript and .NET ecosystems. I work extensively with Next.js and React for front-end development, Node.js and ASP.NET Core for building robust APIs and backend services, and Azure for cloud infrastructure, deployment, and CI/CD. I also have hands-on experience with Blazor WebAssembly, TypeScript, and PostgreSQL.',
    "I believe that great software is built at the intersection of technical excellence and clear communication. Whether I'm architecting a microservice, reviewing a pull request, or planning a sprint with stakeholders, I strive to bring clarity, collaboration, and craftsmanship to every stage of the development lifecycle.",
  ],
  blockTitles: {
    skills: 'Skills & Technologies',
    certifications: 'Certifications',
    achievements: 'Achievements',
    testimonials: 'Testimonials',
  },
  achievements: [
    {
      year: '2025',
      title: 'AZ-900 Certified',
      description:
        'Microsoft Azure Fundamentals certification — foundational knowledge of cloud services.',
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
    { label: 'Projects Built', target: 5, suffix: '+' },
    { label: 'Years of Experience', target: 3, suffix: '+' },
    { label: 'Blog Posts', target: 2, suffix: '+' },
    { label: 'Certification', target: 1, suffix: '' },
  ],
  quote: 'Code should not only work — it should inspire.',
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
