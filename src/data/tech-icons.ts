import {
  siArduino,
  siBaseui,
  siBlazor,
  siDotnet,
  siDrizzle,
  siExpress,
  siJavascript,
  siJsonwebtokens,
  siMongodb,
  siMongoose,
  siNextdotjs,
  siNginx,
  siNodedotjs,
  siPm2,
  siPostgresql,
  siPwa,
  siReact,
  siReactquery,
  siShadcnui,
  siSqlite,
  siSwagger,
  siTailwindcss,
  siTypescript,
  siVercel,
  siZod,
} from 'simple-icons';

export interface TechIconData {
  title: string;
  path: string;
}

const ICONS: Record<string, TechIconData> = {
  dotnet: { title: siDotnet.title, path: siDotnet.path },
  typescript: { title: siTypescript.title, path: siTypescript.path },
  javascript: { title: siJavascript.title, path: siJavascript.path },
  react: { title: siReact.title, path: siReact.path },
  nextdotjs: { title: siNextdotjs.title, path: siNextdotjs.path },
  nodedotjs: { title: siNodedotjs.title, path: siNodedotjs.path },
  express: { title: siExpress.title, path: siExpress.path },
  postgresql: { title: siPostgresql.title, path: siPostgresql.path },
  mongodb: { title: siMongodb.title, path: siMongodb.path },
  mongoose: { title: siMongoose.title, path: siMongoose.path },
  sqlite: { title: siSqlite.title, path: siSqlite.path },
  nginx: { title: siNginx.title, path: siNginx.path },
  pm2: { title: siPm2.title, path: siPm2.path },
  vercel: { title: siVercel.title, path: siVercel.path },
  tailwindcss: { title: siTailwindcss.title, path: siTailwindcss.path },
  blazor: { title: siBlazor.title, path: siBlazor.path },
  drizzle: { title: siDrizzle.title, path: siDrizzle.path },
  zod: { title: siZod.title, path: siZod.path },
  reactquery: { title: siReactquery.title, path: siReactquery.path },
  shadcnui: { title: siShadcnui.title, path: siShadcnui.path },
  baseui: { title: siBaseui.title, path: siBaseui.path },
  swagger: { title: siSwagger.title, path: siSwagger.path },
  jsonwebtokens: { title: siJsonwebtokens.title, path: siJsonwebtokens.path },
  arduino: { title: siArduino.title, path: siArduino.path },
  pwa: { title: siPwa.title, path: siPwa.path },
};

const ALIASES: Record<string, string> = {
  '.net': 'dotnet',
  'c#': 'dotnet',
  csharp: 'dotnet',
  'asp.net core': 'dotnet',
  'asp.net mvc': 'dotnet',
  'ado.net': 'dotnet',
  js: 'javascript',
  nextjs: 'nextdotjs',
  'next.js': 'nextdotjs',
  next: 'nextdotjs',
  node: 'nodedotjs',
  nodejs: 'nodedotjs',
  'node.js': 'nodedotjs',
  postgres: 'postgresql',
  'mongodb atlas': 'mongodb',
  tailwind: 'tailwindcss',
  'drizzle orm': 'drizzle',
  shadcn: 'shadcnui',
  'shadcn/ui': 'shadcnui',
  'shadcn ui': 'shadcnui',
  'base ui': 'baseui',
  'tanstack query': 'reactquery',
  jwt: 'jsonwebtokens',
  'jwt authentication': 'jsonwebtokens',
};

function normalize(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+v?\d[\d.]*\+?$/, '')
    .trim();
}

export function getTechIcon(name: string): TechIconData | undefined {
  const normalized = normalize(name);
  const key = ALIASES[normalized] ?? normalized;
  return ICONS[key];
}
