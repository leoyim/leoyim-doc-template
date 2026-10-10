import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'leoyim-doc-template',
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: '/docs',
        docsDir: 'docs',
        hashed: true,
        language: ['en', 'zh'],
        removeDefaultStopWordFilter: true,
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        searchResultContextMaxLength: 60,
        explicitSearchResultPath: true,
        searchBarShortcut: true,
        searchBarShortcutHint: true,
        searchBarPosition: 'right',
        fuzzyMatchingDistance: 1,
      } satisfies Record<string, unknown>,
    ],
    '@docusaurus/theme-mermaid',
  ],
  markdown: {
    mermaid: true,
  },
  tagline: 'A static doc site built with Docusaurus',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-doc.example.com',
  baseUrl: '/',

  onBrokenLinks: 'warn',

  clientModules: ['./src/theme/prismDiff.ts'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/docs',
          path: 'docs',
          editUrl: 'https://github.com/your-username/your-repo/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  customFields: {
    version: '1.0.0',
  },

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'leoyim-doc-template',
      logo: {
        alt: 'Doc Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Pages',
        },
      ],
    },
    footer: {
      style: 'dark',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['diff'],
    },
    mermaid: {
      theme: {light: 'default', dark: 'dark'},
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
