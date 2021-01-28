import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/guide/': [
    {
      isGroup: true,
      text: '概述',
      children: [
        '/guide/README.md',
        '/guide/structure.md',
      ],
    },
  ],
  '/stl/': [
    {
      isGroup: true,
      text: '模板',
      children: [
        '/stl/README.md',
        '/stl/glossary.md',
        '/stl/elements.md',
        '/stl/entities.md',
        '/stl/include.md',
        '/stl/context.md',
        '/stl/dynamic.md',
        '/stl/list.md',
        '/stl/content.md',
        {
          text: '标签',
          link: '/stl/keywords/a.md',
          children: [],
        }
      ],
    },
  ],
  '/stl/keywords/':[
    {
      isGroup: true,
      text: '标签',
      children: [
        '/stl/keywords/a.md',
        '/stl/keywords/action.md',
        {
          text: '模板',
          link: '/stl/README.md',
          children: [],
        }
      ],
    },
  ],
    '/plugin/': [
        {
            isGroup: true,
            text: '插件',
            children: [
                '/plugin/README.md',
                {
                    text: '表单插件',
                    link: '/stl/plugin/form/form.md',
                    children: [
                        '/stl/plugin/form/start.md',
                        '/stl/plugin/form/guanli.md',
                        '/stl/plugin/form/biaodan.md',
                        '/stl/plugin/form/personbiaodan.md',
                        '/stl/plugin/form/huifu.md',
                        '/stl/plugin/form/captcha.md',
                    ],
                },
                {
                    text: '内容点击量插件',
                    link: '/stl/plugin/hints/hints.md',
                    children: [
                        '/stl/plugin/hints/shezhi.md',
                        '/stl/plugin/hints/houtai.md',
                        '/stl/plugin/hints/qiantai.md',
                        '/stl/plugin/hints/why.md',
                    ],
                },
                {
                    text: '内容相册插件',
                    link: '/stl/plugin/photos/photos.md',
                    children: [
                        '/stl/plugin/photos/use.md',
                    ],
                },
            ],
        },
    ],
}
