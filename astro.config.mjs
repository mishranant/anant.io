import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
	output: 'server',
	site: 'https://anant.com',
	integrations: [mdx(), sitemap()],
});
