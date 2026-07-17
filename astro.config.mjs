// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import { remarkCodeMeta } from './src/lib/remark-code-meta.ts';
import { CONFIG } from './src/data/config.ts';

const [githubOwner, githubRepository] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true' && Boolean(githubOwner && githubRepository);
const isUserOrOrgPage = githubRepository?.toLowerCase() === `${githubOwner?.toLowerCase()}.github.io`;
const configuredSiteValue = process.env.SITE_URL?.trim();
const configuredSite = configuredSiteValue
  ? configuredSiteValue.replace(/\/$/, '')
  : undefined;
const site = configuredSite
  ?? (isGitHubPagesBuild ? `https://${githubOwner}.github.io` : CONFIG.site.url);
const base = configuredSite || !isGitHubPagesBuild || isUserOrOrgPage
  ? undefined
  : `/${githubRepository}`;

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
  theme: {
    light: 'github-light',
    dark: 'github-dark',
  },
  keepBackground: false,
};

// https://astro.build/config
export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'never',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    mdx({
      remarkPlugins: [remarkGfm, remarkCodeMeta],
      rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
      syntaxHighlight: false,
    }),
    sitemap(),
  ],

  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [remarkGfm, remarkCodeMeta],
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
  },
});
