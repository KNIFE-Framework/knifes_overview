// docusaurus.config.ts
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

// Build metadata from environment (provided by Makefile / CI)
const buildDate = process.env.BUILD_DATE || '20250925-2150';
const appVersion = process.env.APP_VERSION || '20250925-2150';
const isCI = process.env.CI === 'true' || process.env.CI === '1';

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

  onBrokenLinks: isCI ? 'throw' : 'warn',
  onBrokenAnchors: isCI ? 'throw' : 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: isCI ? 'throw' : 'warn',
    },
  },
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
       sitemap: { changefreq: 'weekly', priority: 0.5, ignorePatterns: ['/tags/**'], filename: 'sitemap.xml' },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      { trackingID: 'G-LV31TWZZK6', anonymizeIP: true },
    ],
    function cssMinimizerWorkaround() {
      return {
        name: 'css-minimizer-parallel-false',
        configureWebpack() {
          return {
            optimization: {
              minimizer: [
                new CssMinimizerPlugin({
                  parallel: false,
                  // Use CSO instead of cssnano to avoid "Unexpected '/'" parse errors
                  minify: CssMinimizerPlugin.cssoMinify,
                  minimizerOptions: {
                    restructure: false,
                  },
                }),
              ],
            },
          };
        },
      };
    },
  ],

  themeConfig: {
    image: 'img/logo.png',
    navbar: {
      title: 'KNIFE-Home',
      logo: { alt: 'KNIFE Logo', src: 'img/logo.png' },
      items: [
        { to: '/', label: 'Home', position: 'left' },
        { to: '/sk/knifes/overview/', label: 'KNIFES (SK)', position: 'left' },
        { to: '/sk/7Ds/', label: '7Ds (SK)', position: 'left' },
        { to: '/en/', label: 'Docs (EN)', position: 'left' },
        { href: 'https://github.com/KNIFE-Framework/knifes_overview', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} Context Aware Solutions. Version: ${appVersion} • Last build: ${buildDate} • Built with Docusaurus.`,
    },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
    docs: { sidebar: { hideable: true, autoCollapseCategories: true } },
  } satisfies Preset.ThemeConfig,

  // Ak si kdekoľvek mal vlastné polia (napr. writeJsonindex.md), daj ich sem:
  // customFields: { writeJsonIndex: true },
};

export default config;