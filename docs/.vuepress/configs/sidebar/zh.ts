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
          children: [
            '/stl/keywords/a.md',
          ],
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
        {
          text: '模板',
          link: '/stl/README.md',
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
          ],
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
                '/plugin/form.md',
                '/plugin/hints.md',
                '/plugin/photos.md',
            ],
        },
    ],
}
