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
        '/stl/keywords/audio.md',
        '/stl/keywords/channel.md',
        '/stl/keywords/channels.md',
        '/stl/keywords/container.md',
        '/stl/keywords/content.md',
        '/stl/keywords/contents.md',
        '/stl/keywords/count.md',
        '/stl/keywords/dynamic.md',
        '/stl/keywords/each.md',
        '/stl/keywords/file.md',
        '/stl/keywords/flash.md',
        '/stl/keywords/focusViewer.md',
        '/stl/keywords/if.md',
        '/stl/keywords/image.md',
        '/stl/keywords/include.md',
        '/stl/keywords/itemTemplate.md',
        '/stl/keywords/layer.md',
        '/stl/keywords/loading.md',
        '/stl/keywords/location.md',
        '/stl/keywords/marquee.md',
        '/stl/keywords/material.md',
        '/stl/keywords/navigation.md',
        '/stl/keywords/no.md',
        '/stl/keywords/pageChannels.md',
        '/stl/keywords/pageContents.md',
        '/stl/keywords/pageItem.md',
        '/stl/keywords/pageItems.md',
        '/stl/keywords/pageSqlContents.md',
        '/stl/keywords/pdf.md',
        '/stl/keywords/player.md',
        '/stl/keywords/printer.md',
        '/stl/keywords/query.md',
        '/stl/keywords/queryString.md',
        '/stl/keywords/request.md',
        '/stl/keywords/search.md',
        '/stl/keywords/select.md',
        '/stl/keywords/site.md',
        '/stl/keywords/sites.md',
        '/stl/keywords/sqlContent.md',
        '/stl/keywords/sqlCOntents.md',
        '/stl/keywords/tabs.md',
        '/stl/keywords/tags.md',
        '/stl/keywords/user.md',
        '/stl/keywords/value.md',
        '/stl/keywords/video.md',
        '/stl/keywords/yes.md',
        '/stl/keywords/zoom.md',
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
                '/plugin/comments/README.md',
                '/plugin/form/README.md',
                '/plugin/hints/README.md',
                '/plugin/login/README.md',
                '/plugin/photos/README.md',
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
    '/api/': [
        {
            isGroup: true,
            text: '接口',
            children: [
                {
                    text: 'Contents内容API',
                    link: '/api/contents/README.md',
                    children: [],
                },
                {
                    text: 'Channels栏目API',
                    link: '/api/channels/README.md',
                    children: [],
                },
                {
                    text: 'Administrators管理员API',
                    link: '/api/administrators/README.md',
                    children: [],
                },
                {
                    text: 'Users用户API',
                    link: '/api/users/README.md',
                    children: [],
                },
                {
                    text: 'STL模板语言API',
                    link: '/api/stl/README.md',
                    children: [],
                },
                {
                    text: '其他API',
                    link: '/api/other/README.md',
                    children: [],
                },
            ],
        },
    ],
    '/api/contents': [
        {
            isGroup: true,
            text: 'Contents内容API',
            children: [
                '/api/contents/README.md',
                '/api/contents/list.md',
                '/api/contents/get.md',
                '/api/contents/create.md',
                '/api/contents/update.md',
                '/api/contents/delete.md',
                '/api/contents/check.md',
                {
                    text: '返回上级',
                    link: '/api/',
                    children: [],
                }
            ],
        },
    ],
    '/api/channels': [
        {
            isGroup: true,
            text: 'Channels栏目API',
            children: [
                '/api/channels/README.md',
                '/api/channels/list.md',
                '/api/channels/get.md',
                '/api/channels/create.md',
                '/api/channels/update.md',
                '/api/channels/delete.md',
                {
                    text: '返回上级',
                    link: '/api/',
                    children: [],
                }
            ],
        },
    ],
    '/api/administrators': [
        {
            isGroup: true,
            text: 'Administrators管理员API',
            children: [
                '/api/administrators/README.md',
                '/api/administrators/create.md',
                '/api/administrators/update.md',
                '/api/administrators/delete.md',
                '/api/administrators/get.md',
                '/api/administrators/list.md',
                '/api/administrators/login.md',
                '/api/administrators/logout.md',
                '/api/administrators/resetPassword.md',
                {
                    text: '返回上级',
                    link: '/api/',
                    children: [],
                }
            ],
        },
    ],
    '/api/users': [
        {
            isGroup: true,
            text: 'Users用户API',
            children: [
                '/api/users/README.md',
                '/api/users/create.md',
                '/api/users/update.md',
                '/api/users/delete.md',
                '/api/users/get.md',
                '/api/users/getAvatar.md',
                '/api/users/updateAvatar.md',
                '/api/users/list.md',
                '/api/users/login.md',
                '/api/users/logout.md',
                '/api/users/resetPassword.md',
                '/api/users/createLog.md',
                '/api/users/getLogs.md',
                {
                    text: '返回上级',
                    link: '/api/',
                    children: [],
                }
            ],
        },
    ],
    '/api/stl': [
        {
            isGroup: true,
            text: 'STL模板语言API',
            children: [
                '/api/stl/README.md',
                '/api/stl/a.md',
                '/api/stl/channel.md',
                '/api/stl/channels.md',
                '/api/stl/content.md',
                '/api/stl/contents.md',
                '/api/stl/site.md',
                '/api/stl/sites.md',
                '/api/stl/sqlContent.md',
                '/api/stl/sqlContents.md',
                {
                    text: '返回上级',
                    link: '/api/',
                    children: [],
                }
            ],
        },
    ],
    '/api/other': [
        {
            isGroup: true,
            text: '其他API',
            children: [
                '/api/other/README.md',
                '/api/other/captchaCheck.md',
                '/api/other/ping.md',
                {
                    text: '返回上级',
                    link: '/api/',
                    children: [],
                }
            ],
        },
    ],
    '/dictionary/': [
        {
            isGroup: true,
            text: '字典',
            children: [
                {
                    text: '介绍',
                    link: '/dictionary/introduction/README.md',
                    children: [],
                },
                {
                    text: '表结构参考',
                    link: '/dictionary/tables/README.md',
                    children: [],
                },
            ],
        },
    ],
    '/dictionary/introduction': [
        {
            isGroup: true,
            text: '介绍',
            children: [
                '/dictionary/introduction/README.md',
                '/dictionary/introduction/model_Content.md',
                {
                    text: '返回上级',
                    link: '/dictionary/',
                    children: [],
                }
            ],
        },
    ],
    '/dictionary/tables': [
        {
            isGroup: true,
            text: '表结构参考',
            children: [
                '/dictionary/tables/README.md',
                '/dictionary/tables/siteserver_Administrator.md',
                '/dictionary/tables/siteserver_AdministratorsInRoles.md',
                '/dictionary/tables/siteserver_Area.md',
                '/dictionary/tables/siteserver_Channel.md',
                '/dictionary/tables/siteserver_ChannelGroup.md',
                '/dictionary/tables/siteserver_Config.md',
                '/dictionary/tables/siteserver_ContentCheck.md',
                '/dictionary/tables/siteserver_ContentGroup.md',
                '/dictionary/tables/siteserver_Count.md',
                '/dictionary/tables/siteserver_DbCache.md',
                '/dictionary/tables/siteserver_Department.md',
                '/dictionary/tables/siteserver_ErrorLog.md',
                '/dictionary/tables/siteserver_Keyword.md',
                '/dictionary/tables/siteserver_Log.md',
                '/dictionary/tables/siteserver_PermissionsInRoles.md',
                '/dictionary/tables/siteserver_PluginConfig.md',
                '/dictionary/tables/siteserver_Plugin.md',
                '/dictionary/tables/siteserver_RelatedField.md',
                '/dictionary/tables/siteserver_RelatedFieldItem.md',
                '/dictionary/tables/siteserver_Role.md',
                '/dictionary/tables/siteserver_Site.md',
                '/dictionary/tables/siteserver_SiteLog.md',
                '/dictionary/tables/siteserver_SitePermissions.md',
                '/dictionary/tables/siteserver_Special.md',
                '/dictionary/tables/siteserver_Table.md',
                '/dictionary/tables/siteserver_TableMetadata.md',
                '/dictionary/tables/siteserver_TableStyle.md',
                '/dictionary/tables/siteserver_TableStyleItem.md',
                '/dictionary/tables/siteserver_Tag.md',
                '/dictionary/tables/siteserver_Template.md',
                '/dictionary/tables/siteserver_TemplateLog.md',
                '/dictionary/tables/siteserver_TemplateMatch.md',
                '/dictionary/tables/siteserver_User.md',
                '/dictionary/tables/siteserver_UserLog.md',
                {
                    text: '返回上级',
                    link: '/dictionary/',
                    children: [],
                }
            ],
        },
    ],
}
