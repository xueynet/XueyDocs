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
          text: '返回上级',
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
                '/plugin/form/README.md',
                '/plugin/hints/README.md',
                '/plugin/photos/README.md',
                '/plugin/comments/README.md',
                '/plugin/login/README.md',
                '/plugin/restriction/README.md',
            ],
        },
    ],
    '/plugin/form': [
        {
            isGroup: true,
            text: '表单插件',
            children: [
                '/plugin/form/README.md',
                '/plugin/form/start.md',
                '/plugin/form/biaodan.md',
                '/plugin/form/captcha.md',
                '/plugin/form/huifu.md',
                '/plugin/form/personbiaodan.md',
                '/plugin/form/guanli.md',
                {
                  text: '返回上级',
                  link: '/plugin/README.md',
                  children: [],
                }
            ],
        },
    ],
}
