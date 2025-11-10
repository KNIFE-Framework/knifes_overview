import type {Config} from '@docusaurus/types';
import {themes as prismThemes} from 'prism-react-renderer';

const {
  RELEASE_TAG = 'dev',
  COMMIT_SHA = 'local',
  BUILD_DATE = '',
  GITHUB_REPO_URL = '',
} = process.env;

const commitLink =
  GITHUB_REPO_URL && COMMIT_SHA ? `${GITHUB_REPO_URL}/commit/${COMMIT_SHA}` : '';

const config: Config = {
  title: 'KNIFE Overview',
  url: 'https://knife-framework.github.io',
  baseUrl: '/knifes_overview/',
  deploymentBranch: 'gh-pages',
  favicon: 'img/favicon.ico',

  i18n: {
    defaultLocale: 'sk',
    locales: ['sk', 'en'],
  },

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
        },
        blog: false,
        theme: { customCss: require.resolve('./src/css/custom.css') },
      },
    ],
  ],

  // (Optional) Plugins — buildInfoPlugin disabled (file not present)
  plugins: [],

  themeConfig: {
    navbar: {
      title: 'KNIFE',
      items: [
        {to: '/sk/', label: 'SK', position: 'left'},
        {to: '/en/', label: 'EN', position: 'left'},
        // malý “chip” s build info vpravo
        {
          href: commitLink || '#',
          label: `Release ${RELEASE_TAG} • ${COMMIT_SHA}`,
          position: 'right',
        },
      ],
    },

    // Announcement bar hore (možno kedykoľvek vypnúť/komentovať)
    announcementBar: {
      id: 'build_info',
      content: commitLink
        ? `🔖 <strong>Release:</strong> ${RELEASE_TAG} &nbsp;•&nbsp; <strong>Commit:</strong> <a href="${commitLink}" target="_blank" rel="noopener noreferrer">${COMMIT_SHA}</a> &nbsp;•&nbsp; <strong>Build:</strong> ${BUILD_DATE}`
        : `🔖 <strong>Release:</strong> ${RELEASE_TAG} &nbsp;•&nbsp; <strong>Commit:</strong> ${COMMIT_SHA} &nbsp;•&nbsp; <strong>Build:</strong> ${BUILD_DATE}`,
      backgroundColor: '#f5f6f7',
      textColor: '#091E42',
      isCloseable: true,
    },

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
};

export default config;