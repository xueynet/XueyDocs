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
      ],
    },
  ],
}
