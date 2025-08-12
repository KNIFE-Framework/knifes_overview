import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'KNIFE Preview - Knowledge in Friendly Examples',
  tagline: 'Context Aware Approach',
  url: 'https://knife-framework.github.io/',
  baseUrl: '/knifes_overview/',
  favicon: 'img/favicon.ico',

  organizationName: 'KNIFE-Framework',
  projectName: 'knife_preview',
  deploymentBranch: 'gh-pages', // voliteľné, ale fajn mať
  // Tu prepíname z 'throw' na 'warn'
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  future: { v4: true },

  i18n: {
    defaultLocale: 'en', // fallback jazyk
    locales: ['en', 'sk'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      sk: {
        label: 'Slovensky',
        path: 'sk',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/docs',
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: undefined,
          exclude: ['**/README.migrated.md', '**/README_.md'],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'KNIFE',
      logo: { alt: 'KNIFE Logo', src: 'img/logo.png' },
      items: [
        { to: '/docs/sk/7Ds/', label: 'SK', position: 'left' },
        { to: '/docs/en/7Ds/', label: 'EN', position: 'left' },
        { href: 'https://github.com/02-ContextAwareSolutions/knifes_overview', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} Context Aware Solutions. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  headTags: [
    { tagName: 'link', attributes: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' } },
    { tagName: 'link', attributes: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' } },
    { tagName: 'link', attributes: { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' } },
    { tagName: 'link', attributes: { rel: 'manifest', href: '/site.webmanifest' } },
  ],
};

export default config;