import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'DSentr Docs',
  tagline: 'Automate everything without the mess',
  url: 'https://docs.dsentr.com',
  baseUrl: '/',
  favicon: 'img/logo.svg',
  organizationName: 'dsentr',
  projectName: 'docs-site',
  trailingSlash: false,

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true
    },
    navbar: {
      title: 'DSentr Docs',
      logo: { alt: 'DSentr Logo', src: 'img/logo.svg' },
      items: [
        { href: 'https://app.dsentr.com', label: 'App', position: 'right' },
      ],
    },

    footer: { style: 'dark', copyright: `© ${new Date().getFullYear()} DSentr` },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['powershell']
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
