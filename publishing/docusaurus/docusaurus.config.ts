import type {Config} from '@docusaurus/types';
import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  title: 'KNIFE Overview',
  url: 'http://localhost',          // vývoj
  baseUrl: '/',                     // koreň webu
  favicon: 'img/favicon.ico',

  i18n: {
    defaultLocale: 'sk',
    locales: ['sk', 'en'],
  },

  // KĽÚČOVÉ: zapnúť classic preset s pluginom "docs"
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',                     // ./publishing/docusaurus/docs
          routeBasePath: '/',               // / => domov ide z docs
          sidebarPath: require.resolve('./sidebars.ts'),
          includeCurrentVersion: true,
          editCurrentVersion: false,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'KNIFE',
      items: [
        {to: '/sk/', label: 'SK', position: 'left'},
        {to: '/en/', label: 'EN', position: 'left'},
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;