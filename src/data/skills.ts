import type { SkillCategory } from '../types';

export const SKILLS: SkillCategory[] = [
  {
    category: 'Backend & APIs',
    skills: [
      'C#',
      '.NET Framework',
      '.NET 6+',
      'ASP.NET Core',
      'ASP.NET MVC',
      'REST APIs',
      'Legacy modernization',
      'ADO.NET',
    ],
  },
  {
    category: 'Data',
    skills: ['SQL Server', 'Entity Framework', 'Dapper', 'SQLite'],
  },
  {
    category: 'Cloud & delivery',
    skills: ['Azure', 'GitHub Actions', 'Azure Static Web Apps', 'CI/CD', 'Git'],
  },
  {
    category: 'Product interfaces',
    skills: ['Blazor', 'React', 'Next.js', 'JavaScript', 'Tailwind CSS'],
  },
];
