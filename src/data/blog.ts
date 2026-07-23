import type { BlogPostMeta } from '../types';

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: 'building-scalable-apis-dotnet',
    title: 'Building Scalable REST APIs with ASP.NET Core',
    date: '2026-07-15',
    summary:
      'Patterns and practices for building maintainable, high-performance REST APIs — from clean architecture to efficient data access.',
    tags: ['ASP.NET Core', 'API', 'Backend', 'C#'],
  },
  {
    slug: 'building-with-blazor-wasm',
    title: 'Building with Blazor WebAssembly',
    date: '2026-07-01',
    summary:
      'Lessons learned building a SPA with Blazor WebAssembly — architecture, theming, and deployment to Azure Static Web Apps.',
    tags: ['Blazor', 'WebAssembly', 'Frontend'],
  },
];
