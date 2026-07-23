import type { NavLink } from '../types';

const base = typeof import.meta !== 'undefined' ? import.meta.env.BASE_URL : '/';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: base },
  { label: 'About', href: `${base}about` },
  { label: 'Experience', href: `${base}experience` },
  { label: 'Projects', href: `${base}projects` },
  { label: 'Blog', href: `${base}blog` },
  { label: 'Resume', href: `${base}resume` },
  { label: 'Contact', href: `${base}contact` },
];
