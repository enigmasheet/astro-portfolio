import type { SkillCategory } from '../types';

export const SKILLS: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: ['Blazor', 'React', 'Next.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    level: 85,
  },
  {
    category: 'Backend',
    skills: ['.NET', 'ASP.NET Core', 'C#', 'REST APIs', 'MVC', 'Web API'],
    level: 92,
  },
  {
    category: 'Database',
    skills: ['SQL Server', 'Entity Framework', 'SQLite', 'Dapper'],
    level: 78,
  },
  {
    category: 'Cloud & DevOps',
    skills: ['Azure', 'GitHub Actions', 'Azure Static Web Apps', 'CI/CD'],
    level: 75,
  },
  {
    category: 'Tools & Practices',
    skills: ['Git', 'Clean Architecture', 'Product Management', 'Agile'],
    level: 88,
  },
];
