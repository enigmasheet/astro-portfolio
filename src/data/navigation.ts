import type { NavLink } from '../types';

const rawBase = typeof import.meta !== 'undefined' ? import.meta.env.BASE_URL : '/';
const base = rawBase.endsWith('/') ? rawBase : rawBase + '/';

export const NAV_LINKS: NavLink[] = [
  { label: 'Work', href: `${base}#projects` },
  { label: 'Experience', href: `${base}#experience` },
  { label: 'Writing', href: `${base}#blog` },
  { label: 'About', href: `${base}#about` },
];
