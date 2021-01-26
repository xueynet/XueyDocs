module.exports = {
    title: '文档中心',
    description: 'XYCMS Docs',
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [
            { text: '概述', link: '/' },
            { text: '模板', link: '/stl/' },
            { text: '插件', link: '/plugin/' },
            { text: '命令行', link: '/cli/' },
            { text: '接口', link: '/api/' },
            { text: '字典', link: '/dictionary/' }
          ],
        sidebar: 'auto',
        lastUpdated: '最近更新', // string | boolean
      }
  }