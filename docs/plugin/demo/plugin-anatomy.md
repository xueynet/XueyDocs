# 插件基本概念

在上一个主题中，我们从零开始开发并部署了一个极简插件 Hello World，该插件做了3件事情：

- 增加后台菜单：使用配置文件 package.json 配置插件基本信息，同时将插件菜单增加至 XYCMS 系统中。
- 继承接口：插件继承了 XYCMS 类库下的 IPluginExtension 接口，以便在系统运行时能够激活插件。
- wwwroot 文件：插件根目录下 wwwroot文件夹中创建了logo.png以及index.html页面，以便插件启动后能够直接访问。
- 
以上三部分分别对应以下三个概念，理解这三个概念对于在 XYCMS 中编写插件至关重要：

- 插件配置：在 package.json 配置文件中为插件所做的静态声明。
- XYCMS API：一组可以在插件代码中调用的 API。
- URL 对外服务：插件最终需要以 URL 路径的形式对外提供服务，可以是简单的静态地址、Razor风格的cshtml文件以及RESTful 风格的Controller地址，根据实际需要可以灵活选择。
- 
通常，插件将综合使用 XYCMS API 和 插件配置来扩展 XYCMS 系统，最终通过 URL 形式提供对外服务接口实现插件功能。

## 插件配置

每个 XYCMS 插件都必须有一个 package.json 文件作为其配置清单，事实上，XYCMS 系统本身也拥有自己的 插件配置，用途与用法与 XYCMS 插件的 package.json 完全一致。

插件配置包含 Node.js 与 JS 类库开发的基础字段，如publisher、name、license等，以及 XYCMS 的扩展字段，如，main和extensions。可以在 插件配置 中找到所有 XYCMS 特定字段的描述。以下是一些最重要的字段：

- name 和 publisher：publisher.name 作为插件的唯一标识。例如，Hello World 示例的唯一标识为 demo.hello-world，其中 demo 为 publisher，hello-world 为 name。
- engines.xycms：这指定了插件所依赖的 XYCMS API 的最低版本。
- main: 插件入口点。
- extensions：插件扩展清单。
例如XYCMS V7 广告插件 (opens new window)的package.json配置文件：

``` json
{
  "name": "advertisement",
  "displayName": "广告插件",
  "description": "XYCMS 广告插件",
  "version": "1.0.7",
  "license": "AGPL-3.0",
  "publisher": "xycms",
  "engines": {
    "xycms": "^7.0.11"
  },
  "categories": [
    "Other"
  ],
  "keywords": [
    "广告",
    "漂浮广告"
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/siteserver/xycms.advertisement"
  },
  "icon": "/ss-admin/advertisement/logo.svg",
  "output": "",
  "main": "XYCMS.Advertisement.dll",
  "applyToSites": true,
  "applyToChannels": false,
  "extensions": {
    "permissions": {
      "advertisement_add": {
        "text": "添加广告",
        "type": ["web", "wx"]
      },
      "advertisement_list": {
        "text": "广告列表",
        "type": ["web", "wx"]
      }
    },
    "menus": {
      "advertisement_all": {
        "text": "广告管理",
        "iconClass": "fa fa-mouse-pointer",
        "type": ["web", "wx"],
        "permissions": [
          "advertisement_add",
          "advertisement_list"
        ],
        "menus": {
          "advertisement_add": {
            "text": "添加广告",
            "link": "/ss-admin/advertisement/add/",
            "permissions": ["advertisement_add"],
            "order": 1
          },
          "advertisement_list": {
            "text": "广告列表",
            "link": "/ss-admin/advertisement/list/",
            "permissions": ["advertisement_list"],
            "order": 2
          }
        }
      }
    },
    "tables": {
      "xycms_advertisement": {
        "type": "Default",
        "columns": [
          {
            "attributeName": "AdvertisementName",
            "dataType": "VarChar",
            "dataLength": 500
          },
          {
            "attributeName": "SiteId",
            "dataType": "Integer"
          },
          {
            "attributeName": "AdvertisementType",
            "dataType": "VarChar",
            "dataLength": 200
          },
          {
            "attributeName": "IsDateLimited",
            "dataType": "Boolean"
          },
          {
            "attributeName": "StartDate",
            "dataType": "DateTime"
          },
          {
            "attributeName": "EndDate",
            "dataType": "DateTime"
          },
          {
            "attributeName": "ChannelIdCollectionToChannel",
            "dataType": "Text"
          },
          {
            "attributeName": "ChannelIdCollectionToContent",
            "dataType": "Text"
          }
        ]
      }
    }
  }
}
```

## XYCMS API

XYCMS API是 XYCMS 系统的底层 API，包含了 XYCMS 系统的核心接口与对象，XYCMS 系统本身即是基于 XYCMS API开发而来，NuGet 托管地址：https://www.nuget.org/packages/XYCMS (opens new window)。

XYCMS API 版本号与 XYCMS 系统版本号一致，每次 XYCMS 系统更新时 XYCMS API版本也将随之更新。

插件开发必须继承的接口为XYCMS.Plugins命名空间下的 IPluginExtension接口。

例如Hello World 插件 (opens new window)的Startup文件：

``` C#
using XYCMS.Plugins;

namespace Demo.HelloWorld
{
    public class Startup : IPluginExtension
    {
    }
}
```

除了直接继承 IPluginExtension 接口，插件也可以继承 IPluginExtension 的下级接口，以实现更多功能。

例如XYCMS V7 广告插件 (opens new window)在Startup中通过IPluginConfigureServices 接口注册了IAdvertisementRepository服务：

``` C#
using Microsoft.Extensions.DependencyInjection;
using XYCMS.Advertisement.Abstractions;
using XYCMS.Advertisement.Core;
using XYCMS.Plugins;

namespace XYCMS.Advertisement
{
    public class Startup : IPluginConfigureServices
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<IAdvertisementRepository, AdvertisementRepository>();
        }
    }
}
```

由于 IPluginConfigureServices 接口本身继承至IPluginExtension接口，所以插件无需再继承 IPluginExtension接口。

除了提供基础接口，XYCMS API还内置了众多实用服务接口，例如IAuthManager管理员及认证服务、IPathManager路径管理服务等，同时XYCMS API 提供了所有XYCMS 底层数据的操作接口，例如ISiteRepository站点数据操作接口, IChannelRepository栏目数据操操作接口, IContentRepository 内容数据操作接口等等。

更多用法我们将在 XYCMS API 章节中进行详细说明。

## URL 对外服务

插件最终需要以 URL 路径的形式对外提供服务，可以是简单的静态地址、Razor风格的cshtml文件以及RESTful 风格的Controller地址，根据实际需要可以灵活选择。

更多用法我们将在 URL 对外服务 章节中进行详细说明。

## 静态资源访问

通过将需要对外提供服务的静态文件放置于插件根目录的 wwwroot 文件夹下，可以实现简单的静态地址访问。

例如 Hello World 插件 对外提供的两个静态文件：

![2](/assets/img/plugin/demo/demo01.png)

插件运行时对应的访问地址分别为 /ss-admin/hello-world/index.html 以及 /ss-admin/hello-world/logo.png。

除了图片以及html静态文件，我们通常会将js文件以及css文件等资源文件放置于 wwwroot 文件夹内。

## Razor Pages 页面

Razor风格的cshtml文件通常放置于插件根目录的Pages文件夹下。

例如XYCMS V7 广告插件 (opens new window)的cshtml文件：

![2](/assets/img/plugin/demo/demo02.png)

最终的访问地址分别为 /ss-admin/advertisement/add/ 以及 /ss-admin/advertisement/list/。

使用Razor风格页面的好处是可以复用XYCMS的基础页面：

``` html
@{ Layout = "_Layout"; }
```

## Web API 服务

最后一种提供URL访问地址的方式是通过RESTful 风格的Controller类实现，例如我们希望访问 /api/advertisement/ping地址获取结果pong以确认插件在正常运行：

XYCMS V7 广告插件 (opens new window)的 PingController.cs 代码：

``` C#
using Microsoft.AspNetCore.Mvc;

namespace XYCMS.Advertisement.Controllers
{
    [Route("api/advertisement/ping")]
    public class PingController : ControllerBase
    {
        private const string Route = "";

        [HttpGet, Route(Route)]
        public string Get()
        {
            return "pong";
        }
    }
}
```

在此文件中，我们并没用使用XYCMS API，RESTful 风格的Controller实现完全基于 .NET CORE 基础类库。
