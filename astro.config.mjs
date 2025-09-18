// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';
import path from 'path';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  alias: {
  
    '@': path.resolve('./src'),
    
    '@content': path.resolve("./src/content"),
    '@components': path.resolve('./src/components'),
    '@layouts':   path.resolve('./src/layouts'),
    '@pages':     path.resolve('./src/pages'),
    '@assets':    path.resolve('./src/assets')
  },



  output: 'server', // o "static"
  adapter: cloudflare(),
  integrations: [
    tailwind(),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  }
});