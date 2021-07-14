import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
      children: [
        '/guide/README.md',
        '/guide/getting-started.md',
        '/guide/configuration.md',
        '/guide/page.md',
        '/guide/markdown.md',
        '/guide/assets.md',
        '/guide/i18n.md',
        '/guide/deployment.md',
        '/guide/theme.md',
        '/guide/plugin.md',
        '/guide/bundler.md',
      ],
    },
  ],
  '/guide/advanced/': [
    {
      text: 'Advanced',
      children: [
        '/guide/advanced/markdown.md',
        '/guide/advanced/theme.md',
        '/guide/advanced/plugin.md',
      ],
    },
  ],
  '/reference/': [
    {
      text: 'VuePress Reference',
      children: [
        '/reference/cli.md',
        '/reference/config.md',
        '/reference/frontmatter.md',
        '/reference/components.md',
        '/reference/plugin-api.md',
        '/reference/theme-api.md',
      ],
    },
  ],
  '/reference/bundler/': [
    {
      text: 'Bundlers Reference',
      children: ['/reference/bundler/webpack.md', '/reference/bundler/vite.md'],
    },
  ],
  '/reference/default-theme/': [
    {
      text: 'Default Theme Reference',
      children: [
        '/reference/default-theme/config.md',
        '/reference/default-theme/frontmatter.md',
        '/reference/default-theme/components.md',
        '/reference/default-theme/markdown.md',
      ],
    },
  ],
  '/reference/plugin/': [
    {
      text: 'Official Plugins Reference',
      children: [
        '/reference/plugin/active-header-links.md',
        '/reference/plugin/back-to-top.md',
        '/reference/plugin/container.md',
        '/reference/plugin/debug.md',
        '/reference/plugin/docsearch.md',
        '/reference/plugin/git.md',
        '/reference/plugin/google-analytics.md',
        '/reference/plugin/medium-zoom.md',
        '/reference/plugin/nprogress.md',
        '/reference/plugin/palette-stylus.md',
        '/reference/plugin/pwa.md',
        '/reference/plugin/pwa-popup.md',
      ],
    },
  ],
}
