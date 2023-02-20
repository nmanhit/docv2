// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/okaidia'); // okaidia oceanicNext
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const versions = require('./versions.json');

function getLatestVersionName() {
  return versions[0];
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Be a smart Kintone developer with Kintone UI Component.',
  tagline: 'It will support your UI customization project.',
  url: 'https://nmanhit.github.io/',
  baseUrl: '/docv2/',
  onBrokenLinks: 'warn', // throw
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nmanhit', // Usually your GitHub org/user name.
  projectName: 'docv2', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
  },
  scripts: [
    "https://unpkg.com/kintone-ui-component/umd/kuc.min.js"
    // {
    //   src: '/ja/js/gtmHeader.js',
    //   async: true,
    // },
    // {
    //   src: '/ja/js/extra.js',
    //   async: true,
    // },
    // {
    //   src: 'https://buttons.github.io/buttons.js',
    //   async: true,
    // },
    // {
    //   src: 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    //   async: true,
    // },
    // {
    //   src: '/ja/js/code-block-button.js',
    //   async: true,
    // },
    // {
    //   src: 'https://unpkg.com/kintone-ui-component/umd/kuc.min.js',
    //   async: true,
    // },
    // {
    //   src: '/js/kuc-loader.js',
    //   async: true,
    // }
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          lastVersion: `${getLatestVersionName()}`,
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/kuc-custom.css')
          ],
        },
        // lastVersion: 'current',
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'kintone UI Component',
          src: 'img/kuc_logo_white.png',
        },
        items: [
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'left',
          // },
          {
            type: 'docsVersion',
            position: 'left',
            to: '/versions',
            // label: `${getLatestVersionName()}`,
          },
          {
            type: 'doc',
            docId: 'getting-started/quick-start',
            position: 'right',
            label: 'Documentation',
          },
          {
            type: 'doc',
            docId: 'releases/release-notes',
            position: 'right',
            label: 'Releases',
          },
          {
            href: 'https://github.com/kintone-labs/kintone-ui-component',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Quick Start',
                to: '/docs/getting-started/quick-start',
              },
              {
                label: 'Components',
                to: '/docs/components/desktop/button',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub issue',
                href: 'https://github.com/kintone-labs/kintone-ui-component/issues',
              }
            ],
          },
          {
            title: 'Other',
            items: [
              {
                label: 'Privacy Policy',
                href: 'https://cybozu.co.jp/privacy/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cybozu Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      algolia: {
        appId: 'PR3SWJDZEU',
        apiKey: '074eaea538cd75b1536ce0ef1e70a73a',
        indexName: 'kintone',
        contextualSearch: false,
      },
    }),
};

module.exports = config;
