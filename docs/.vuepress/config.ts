import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { navbar, sidebar } from './configs'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/',

  // site-level locales config
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '文档中心',
      description: 'XYCMS Docs',
    },
  },

  bundler:
    // specify bundler via environment variable
    process.env.DOCS_BUNDLER ?? '@vuepress/webpack',
    // use vite in dev, use webpack in prod
    //(isProd ? '@vuepress/webpack' : '@vuepress/vite'),

  themeConfig: {
    logo: '/assets/img/logo.png',

    repo: 'xueynet/XueyDocs',

    docsDir: 'docs',

    // theme-level locales config
    locales: {
      '/': {
        // navbar
        navbar: navbar.zh,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',

        // sidebar
        sidebar: sidebar.zh,

        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',

        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',

        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',

        // a11y
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
      },
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
    },
  },

  plugins: [
    [
      '@vuepress/plugin-docsearch',
      {
        apiKey: '0a32dfb6f95192cc7333e60f37a195cb',
        indexName: 'xycms',
        searchParameters: {
          facetFilters: ['XYCMS'],
        },
        locales: {
          '/': {
            placeholder: '搜索文档',
          },
        },
      },
    ],
  ],
})