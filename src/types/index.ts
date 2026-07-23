export interface SiteInfo {
  name: string;
  fullName: string;
  title: string;
  shortTitle: string;
  jobTitle: string;
  knowsAbout: string[];
}

export interface HeroContent {
  greeting: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface SectionHeader {
  label: string;
  title: string;
  description: string;
  cta?: string;
}

export interface Achievement {
  year: string;
  title: string;
  description: string;
}

export interface StatItem {
  label: string;
  target: number;
  suffix: string;
}

export interface AboutContent {
  paragraphs: string[];
  blockTitles: {
    skills: string;
    certifications: string;
    achievements: string;
    testimonials: string;
  };
  achievements: Achievement[];
  stats: StatItem[];
  quote: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  dates: string;
}

export interface ResumeContent {
  location: string;
  education: EducationItem[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  imageUrls: string[];
  githubLink: string;
  liveDemo: string;
  liveDemoActive: boolean;
  technologies: string[];
  tags: string[];
}

export interface Experience {
  title: string;
  company: string;
  description: string;
  link: string;
  date: string;
  endDate: string | null;
}

export interface SkillCategory {
  category: string;
  skills: string[];
  level: number;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  link: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export type AstroComponent = (props?: Record<string, unknown>) => any;

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
