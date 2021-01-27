import * as chokidar from 'chokidar'
import type { UserConfig, DefaultThemeOptions } from 'vuepress'
import { chalk, logger } from '@vuepress/utils'
import { navbar, sidebar } from './configs'

const config: UserConfig<DefaultThemeOptions> = {

  title: '文档中心',
  description: 'XYCMS Docs',

  themeConfig: {
    logo: '/assets/img/logo.png',
    // theme-level locales config
    locales: {
      /**
       * locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      '/': {
        // navbar
        navbar: navbar.zh,

        // sidebar
        sidebar: sidebar.zh,

        // page meta
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

        // other
        openInNewWindow: '在新窗口打开',
      },
    },
  },

evergreen: process.env.NODE_ENV !== 'production',

onWatched: (_, restart) => {
  const watcher = chokidar.watch('configs/**/*.ts', {
    cwd: __dirname,
    ignoreInitial: true,
  })
  watcher.on('change', async (file) => {
    logger.info(`file ${chalk.magenta(file)} is modified`)
    await watcher.close()
    await restart()
  })
},
}

export = config