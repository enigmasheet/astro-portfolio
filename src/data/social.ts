import type { SocialLink } from '../types';

const base = typeof import.meta !== 'undefined' ? import.meta.env.BASE_URL : '/';

export const SITE_URL = 'https://enigmasheet.github.io/astro-portfolio';
export const DOMAIN = 'enigmasheet.github.io';
export const EMAIL = 'info@abhaymandal.com.np';
export const GITHUB_USERNAME = 'enigmasheet';
export const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;
export const LINKEDIN_URL = 'https://www.linkedin.com/in/abhaykumarmandal/';
export const ROADMAP_URL = 'https://roadmap.sh/u/devabhay';
export const RESUME_PATH = base + 'Abhay_Resume.pdf';
export const OG_IMAGE_PATH = base + 'og-image.png';
export const FORMSPREE_URL = 'https://formspree.io/f/xvgkrkwk';

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: GITHUB_URL, icon: 'github' },
  { label: 'LinkedIn', href: LINKEDIN_URL, icon: 'linkedin' },
  { label: 'Email', href: `mailto:${EMAIL}`, icon: 'email' },
  { label: 'Resume', href: RESUME_PATH, icon: 'resume' },
  { label: 'Roadmap.sh', href: ROADMAP_URL, icon: 'roadmap' },
];
