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
                '/plugin/form/README.md',
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
                '/plugin/form/admin.md',
                '/plugin/form/styles.md',
                '/plugin/form/templates.md',
                '/plugin/form/reply.md',
                '/plugin/form/captcha.md',
                {
                  text: '返回上级',
                  link: '/plugin/README.md',
                  children: [],
                }
            ],
        },
    ],
    '/plugin/hints': [
        {
            isGroup: true,
            text: '内容点击量插件',
            children: [
                '/plugin/hints/README.md',
                '/plugin/hints/settings.md',
                '/plugin/hints/background.md',
                '/plugin/hints/foreground.md',
                '/plugin/hints/why.md',
                {
                    text: '返回上级',
                    link: '/plugin/README.md',
                    children: [],
                }
            ],
        },
    ],
    '/plugin/photos': [
        {
            isGroup: true,
            text: '内容相册插件',
            children: [
                '/plugin/photos/README.md',
                '/plugin/photos/use.md',
                {
                    text: '返回上级',
                    link: '/plugin/README.md',
                    children: [],
                }
            ],
        },
    ],
    '/cli/': [
        {
            isGroup: true,
            text: '命令行',
            children: [
                {
                    text: '介绍',
                    link: '/cli/introduction/README.md',
                    children: [],
                },
                {
                    text: '命令',
                    link: '/cli/commands/README.md',
                    children: [],
                },
                {
                    text: '深入',
                    link: '/cli/advanced/README.md',
                    children: [],
                },
            ],
        },
    ],
    '/cli/introduction': [
        {
            isGroup: true,
            text: '介绍',
            children: [
                '/cli/introduction/README.md',
                '/cli/introduction/setup.md',
                {
                    text: '返回上级',
                    link: '/cli/',
                    children: [],
                }
            ],
        },
    ],
    '/cli/commands': [
        {
            isGroup: true,
            text: '命令',
            children: [
                '/cli/commands/README.md',
                '/cli/commands/data-backup.md',
                '/cli/commands/data-restore.md',
                '/cli/commands/data-update.md',
                '/cli/commands/plugin-package.md',
                '/cli/commands/plugin-publish.md',
                '/cli/commands/plugin-search.md',
                '/cli/commands/plugin-show.md',
                '/cli/commands/plugin-unpublish.md',
                '/cli/commands/login.md',
                '/cli/commands/logout.md',
                '/cli/commands/register.md',
                '/cli/commands/status.md',
                {
                    text: '返回上级',
                    link: '/cli/',
                    children: [],
                }
            ],
        },
    ],
    '/cli/advanced': [
        {
            isGroup: true,
            text: '深入',
            children: [
                '/cli/advanced/README.md',
                '/cli/advanced/content-split.md',
                '/cli/advanced/connection-string.md',
                '/cli/advanced/data-translate.md',
                {
                    text: '返回上级',
                    link: '/cli/',
                    children: [],
                }
            ],
        },
    ],
}
