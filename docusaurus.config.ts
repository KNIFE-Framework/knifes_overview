import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'KNIFE Preview - Knowledge in Friendly Examples',
  tagline: 'Context Aware Approach',
  url: 'https://knifes.systemthinking.sk',
  baseUrl: '/',
  favicon: 'img/favicon.ico',

  organizationName: 'KNIFE-Framework',
  projectName: 'knifes_overview',
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',
  future: { v4: true },

  i18n: {
    defaultLocale: 'sk',
    locales: ['sk', 'en'],
    localeConfigs: {
      sk: { label: 'Slovensky' },
      en: { label: 'English', path: 'en' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',     // docs sú homepage
          numberPrefixParser: false,
          editCurrentVersion: false,
          editUrl: undefined,
          exclude: ['**/README.migrated.md', '**/README_.md'],
          sidebarPath: require.resolve('./sidebars.ts'),
        },
        blog: false,
        theme: { customCss: require.resolve('./src/css/custom.css') },
      } satisfies Preset.Options,
    ],
  ],

  // ⬇⬇⬇ PRIDANÉ: GA4 plugin
  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-LV31TWZZK6',
        anonymizeIP: true,
        // optional: odoslať page_view aj pri route zmenách (SPA)
        // respektíve default správanie už page views posiela
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    navbar: {
      title: 'KNIFE-Home',
      logo: { alt: 'KNIFE Logo', src: 'img/logo.png' },
      items: [
        { to: '/', label: 'Home', position: 'left' },
        { to: '/sk/knifes/KNIFEsOverview/', label: 'KNIFES (SK)', position: 'left' },
        { to: '/7Ds/', label: '7Ds (SK)', position: 'left' },
        { to: '/', label: 'Docs (SK)', position: 'left' },
        { to: '/en/', label: 'Docs (EN)', position: 'left' },
        { href: 'https://github.com/KNIFE-Framework/knifes_overview', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} Context Aware Solutions. Built with Docusaurus.`,
    },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
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
