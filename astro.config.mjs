import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { unified } from '@astrojs/markdown-remark';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';

export default defineConfig({
  site: 'https://abhaymandal.com.np',
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/404/'),
    }),
  ],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkReadingTime],
    }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
