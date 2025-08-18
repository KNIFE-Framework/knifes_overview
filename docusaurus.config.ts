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
  projectName: 'knifes_overview',
  deploymentBranch: 'gh-pages', // voliteľné, ale fajn mať
  // Viac priateľské defaulty počas migrácie
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',
  future: { v4: true },

  i18n: {
    defaultLocale: 'sk', // fallback jazyk
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
          routeBasePath: 'docs',
          numberPrefixParser: false, // zachová 01., 02. v URL a ID
          //sidebarPath: require.resolve('./sidebars.ts'),
          editCurrentVersion: false,
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
    image: 'img/logo.png',
    navbar: {
      title: 'KNIFE',
      logo: { alt: 'KNIFE Logo', src: 'img/logo.png', href: '/', target: '_self' },
      items: [
        { to: '/', label: 'Home', position: 'left' },
        { to: '/docs/sk', label: 'Docs (SK)', position: 'left' },
        { to: '/docs/en', label: 'Docs (EN)', position: 'left' },
        { href: 'https://github.com/KNIFE-Framework/knifes_overview', label: 'GitHub', position: 'right' },
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
    { tagName: 'link', attributes: { rel: 'apple-touch-icon', sizes: '180x180', href: 'img/apple-touch-icon.png' } },
    { tagName: 'link', attributes: { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'img/favicon-32x32.png' } },
    { tagName: 'link', attributes: { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'img/favicon-16x16.png' } },
    { tagName: 'link', attributes: { rel: 'manifest', href: 'img/site.webmanifest' } },
  ],
};

export default config;
