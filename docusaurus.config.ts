import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
import { themes as prismThemes } from 'prism-react-renderer'

const config: Config = {
  title: 'Kakwak Apps',
  tagline: 'Android apps by Kakwak',
  favicon: 'img/favicon.svg',
  url: 'https://kakwak123.github.io',
  baseUrl: '/apps/',
  organizationName: 'kakwak123',
  projectName: 'apps',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  markdown: { hooks: { onBrokenMarkdownLinks: 'throw' } },
  i18n: { defaultLocale: 'en', locales: ['en'] },
  headTags: [
    { tagName: 'link', attributes: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
    { tagName: 'link', attributes: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' } },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,800&family=IBM+Plex+Sans+KR:wght@400;500;700&display=swap',
      },
    },
  ],
  presets: [
    [
      'classic',
      {
        docs: { sidebarPath: './sidebars.ts', routeBasePath: '/' },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    colorMode: { defaultMode: 'light', disableSwitch: true, respectPrefersColorScheme: false },
    navbar: {
      title: 'Kakwak Apps',
      items: [
        { to: '/singk', label: 'SingK', position: 'left' },
        { to: '/bucket', label: 'Fishing Bucket', position: 'left' },
        { to: '/tile-designer', label: 'Tile Floor Designer', position: 'left' },
        { to: '/privacy', label: 'Privacy', position: 'right' },
        { to: '/support', label: 'Support', position: 'right' },
      ],
    },
    footer: {
      style: 'light',
      copyright: 'Kakwak. These apps are still in development and plans can change.',
    },
    prism: { theme: prismThemes.github },
  } satisfies Preset.ThemeConfig,
}

export default config
