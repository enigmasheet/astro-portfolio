import type { SkillCategory } from '../types';

export const SKILLS: SkillCategory[] = [
  {
    category: 'Backend · .NET',
    skills: [
      'C#',
      '.NET Framework',
      '.NET 6+',
      'ASP.NET Core',
      'ASP.NET MVC',
      'REST APIs',
      'ADO.NET',
      'Legacy modernization',
    ],
  },
  {
    category: 'Data',
    skills: ['SQL Server', 'Entity Framework', 'Dapper', 'PostgreSQL', 'MongoDB', 'SQLite'],
  },
  {
    category: 'Frontend · JavaScript / TypeScript',
    skills: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Blazor', 'Tailwind CSS'],
  },
  {
    category: 'Cloud & delivery',
    skills: ['Azure', 'Vercel', 'GitHub Actions', 'CI/CD', 'Docker', 'Git'],
  },
];
