import type {Config} from '@docusaurus/types';
import {themes as prismThemes} from 'prism-react-renderer';

const {
  RELEASE_TAG = 'dev',
  COMMIT_SHA = 'local',
  BUILD_DATE = '',
  GITHUB_REPO_URL = '',
  SITE_URL = 'https://knife-framework.github.io',
  BASE_URL = '/knifes_overview/',
} = process.env;

const commitLink =
  GITHUB_REPO_URL && COMMIT_SHA ? `${GITHUB_REPO_URL}/commit/${COMMIT_SHA}` : '';

const config: Config = {
  title: 'KNIFE Overview',
  url: SITE_URL,
  baseUrl: BASE_URL,
  deploymentBranch: 'gh-pages',
  favicon: 'img/favicon.ico',

  // i18n vypnuté – SK/EN riešené cez adresárovú štruktúru docs/sk/ + docs/en/
  // Bez tohto bloku Docusaurus nerobí locale prefix logiku (/en/sk/... problém)
  // Ak bude potrebné, vrátime sa k i18n refaktoru s Hugo-style štruktúrou.

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.ts'),
          includeCurrentVersion: true,
          editCurrentVersion: false,
          tagsBasePath: 'doc-tags',
        },
        blog: false,
        theme: { customCss: require.resolve('./src/css/custom.css') },
      },
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: '/',
      },
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    navbar: {
      title: 'KNIFE Overview',
      logo: {
        alt: 'KNIFE',
        src: 'img/logo.png',
        srcDark: 'img/logo-dark.png',
        target: '_self',
        href: '/',
      },
        items: [
          { href: '/doc-tags', label: 'Tags', position: 'right' },
          {
            href: commitLink || '#',
            label: `Release ${RELEASE_TAG} • ${COMMIT_SHA}`,
            position: 'right',
          },
        ],
      },

   // announcementBar: {
   //   id: 'build_info',
   //   content: commitLink
   //     ? `🔖 <strong>Release:</strong> ${RELEASE_TAG} &nbsp;•&nbsp; <strong>Commit:</strong> <a href="${commitLink}" target="_blank" rel="noopener noreferrer">${COMMIT_SHA}</a> &nbsp;•&nbsp; <strong>Build:</strong> ${BUILD_DATE}`
   //     : `🔖 <strong>Release:</strong> ${RELEASE_TAG} &nbsp;•&nbsp; <strong>Commit:</strong> ${COMMIT_SHA} &nbsp;•&nbsp; <strong>Build:</strong> ${BUILD_DATE}`,
   //   backgroundColor: '#f7f70aff',
   //   textColor: '#091E42',
   //   isCloseable: true,
   // },

    footer: {
      style: 'dark',
      copyright: `
  <div style="text-align:center;">
    © ${new Date().getFullYear()} SystemThinking<br/>
    🔖 Release: <strong>${RELEASE_TAG}</strong><br/>
    💡 Commit: <code>${COMMIT_SHA}</code><br/>
    🕒 Build: ${BUILD_DATE}
  </div>
`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },

  future: {
    experimental_faster: false,
  },
};

export default config;