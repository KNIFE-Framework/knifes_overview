// docusaurus.config.ts
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'KNIFE Preview - Knowledge in Friendly Examples',   // ✅ povinné
  tagline: 'Context Aware Approach',
  url: 'https://knifes.systemthinking.sk',                   // ✅ povinné (root URL nasadenia)
  baseUrl: '/',                                              // ✅ povinné (prefix cesty)
  trailingSlash: false,
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
          routeBasePath: '/',                   // docs ako homepage
          numberPrefixParser: false,
          editCurrentVersion: false,
          editUrl: undefined,
          exclude: ['**/README.migrated.md', '**/README_.md', '**/_legacy/**'],
          sidebarPath: require.resolve('./sidebars.ts'),
        },
        blog: false,
        theme: { customCss: require.resolve('./src/css/custom.css') },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      { trackingID: 'G-LV31TWZZK6', anonymizeIP: true },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // legacy overview pages (split variants) → canonical
          { from: ['/sk/knifes/KNIFE_Overview_Details_p3','/sk/knifes/KNIFE_Overview_Details_p2'], to: '/sk/knifes/KNIFE_Overview_Details' },
          { from: ['/sk/knifes/KNIFE_Overview_List_p3','/sk/knifes/KNIFE_Overview_List_p2'], to: '/sk/knifes/KNIFE_Overview_List' },
          // language-agnostic fallbacks (if EN used later)
          //{ from: ['/en/knifes/KNIFE_Overview_Details_p3','/en/knifes/KNIFE_Overview_Details_p2'], to: '/en/knifes/KNIFE_Overview_Details' },
          //{ from: ['/en/knifes/KNIFE_Overview_List_p3','/en/knifes/KNIFE_Overview_List_p2'], to: '/en/knifes/KNIFE_Overview_List' },
        ],
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
        { to: '/sk/7Ds/', label: '7Ds (SK)', position: 'left' },
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
    docs: { sidebar: { hideable: true, autoCollapseCategories: true } },
  } satisfies Preset.ThemeConfig,

  // Ak si kdekoľvek mal vlastné polia (napr. writeJsonIndex), daj ich sem:
  // customFields: { writeJsonIndex: true },
};

export default config;