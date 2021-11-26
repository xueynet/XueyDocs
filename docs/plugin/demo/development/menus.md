# 插件菜单

插件菜单指通过配置文件对XYCMS后台菜单进行配置，菜单分为站点菜单、系统菜单、以及内容菜单。

插件菜单均需要设置权限，超级管理员默认拥有所有插件菜单的权限，站点管理员默认拥有所有插件站点菜单以及内容菜单的权限，普通管理员需要在XYCMS后台通过角色管理对菜单权限进行设置。

## 菜单权限

为插件添加菜单权限需要对插件 package.json 配置文件的 extensions -> permissions 节点进行设置，在此，我们以XYCMS 内容相册插件 (opens new window)的package.json (opens new window)作为示例说明菜单权限的配置：

``` json
"permissions": {
  "photos_settings": {
    "text": "图片上传设置",
    "type": ["web", "wx"]
  },
  "photos_channels_config": {
    "text": "内容图片设置",
    "type": ["web", "wx"]
  },
  "photos_content": {
    "text": "内容相册",
    "type": ["content"]
  }
}
```

- photos_settings、photos_channels_config、photos_content：权限的唯一标识，可以任意取值，需要确保唯一性。

- type：权限类型，type 的可取值有 app（代表系统菜单权限）、web（代表站点菜单权限）、wx（代表微信站点菜单权限）、content（代表内容菜单权限），如果不设置，默认 type 的取值为 ["web","wx"]。

## 站点菜单

![2](/assets/img/plugin/demo/menus-01.png)

如上图所示，红框部分的菜单即插件配置出来的站点菜单，根据需要可以包含或者不包含下级菜单。

为插件添加站点菜单需要对插件 package.json 配置文件的 extensions -> menus 节点进行设置，在此，我们以XYCMS 广告插件 (opens new window)的package.json (opens new window)作为示例说明站点菜单的配置：

``` json
"extensions": {
    "menus": {
      "advertisement_all": {
        "text": "广告管理",
        "iconClass": "fa fa-mouse-pointer",
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
    }
  }
```

- advertisement_all：菜单的唯一标识，可以任意取值，需要确保唯一性。
- text：菜单显示名称。
- iconClass：菜单左侧的图标，可以直接使用Font Awesome (opens new window)或者ionicons (opens new window)对应的Class类名称。
- permissions：菜单对应的权限集合。
- menus：下级菜单。
- link：点击菜单后，管理界面右侧区域的页面链接地址。
- order：菜单排序数值，数值越小菜单排序越前。

## 系统菜单

![2](/assets/img/plugin/demo/menus-02.png)

如上图所示，红框部分的菜单即插件配置出来的系统菜单，根据需要可以包含或者不包含下级菜单。

系统菜单与站点菜单的不同在于系统菜单不会出现在站点管理界面中，系统菜单出现的位置需要单独设置，通常是放置在插件管理主导航下。

为插件添加系统菜单需要对插件 package.json 配置文件的 extensions -> menus:MENU_ID:menus 节点进行设置（MENU_ID代表系统菜单出现的上级菜单Id，取值可以参考XYCMS的package.json），在此，我们以XYCMS 数据库管理插件 (opens new window)的package.json (opens new window)作为示例说明系统菜单的配置：

``` json
"menus:app_plugins_all:menus": {
  "database_all": {
    "text": "数据库管理",
    "iconClass": "fa fa-database",
    "type": ["app"],
    "permissions": [
      "database_tables",
      "database_query",
      "database_execute"
    ],
    "menus": {
      "database_tables": {
        "text": "表结构查看器",
        "link": "/ss-admin/database/tables/",
        "permissions": ["database_tables"],
        "order": 1
      },
      "database_query": {
        "text": "SQL语句查询",
        "link": "/ss-admin/database/query/",
        "permissions": ["database_query"],
        "order": 2
      },
      "database_execute": {
        "text": "执行SQL命令",
        "link": "/ss-admin/database/execute/",
        "permissions": ["database_execute"],
        "order": 3
      }
    }
  }
}
```

可以看到，系统菜单的配置规则与站点菜单基本一致，区别在于：

- menus:app_plugins_all:menus：系统菜单的配置节点，app_plugins_all 用于指定系统主导航的插件管理菜单Id。
- type：菜单类型，需要设置为 ["app"]，type 的可取值有 app（代表系统菜单）、web（代表站点菜单）、wx（代表微信站点菜单）、content（代表内容菜单），如果不设置，默认 type 的取值为 ["web","wx"]。

## 内容菜单

![2](/assets/img/plugin/demo/menus-03.png)

如上图所示，红框部分的菜单即插件配置出来的内容菜单。

为插件添加内容菜单需要对插件 package.json 配置文件的 extensions -> menus 节点进行设置，在此，我们以 XYCMS 内容相册插件 (opens new window)的 package.json (opens new window)作为示例说明内容菜单的配置：

``` json
"menus": {
  "photos_all": {
    "text": "内容相册",
    "iconClass": "ion-images",
    "type": ["web", "wx"],
    "permissions": [
      "photos_settings",
      "photos_channels_config"
    ],
    "menus": {
      "photos_settings": {
        "text": "图片上传设置",
        "link": "/ss-admin/photos/settings/",
        "permissions": ["photos_settings"],
        "order": 1
      },
      "photos_channels_config": {
        "text": "内容图片设置",
        "link": "/ss-admin/plugins/config/?pluginId=xycms.photos",
        "permissions": ["photos_channels_config"],
        "order": 2
      }
    }
  },
  "photos_content": {
    "text": "内容相册",
    "type": ["content"],
    "link": "/ss-admin/photos/photos/",
    "permissions": ["photos_content"],
    "order": 1
  }
}
```

以上配置设置了一个站点菜单（photos_all）和一个内容菜单（photos_content），内容菜单的配置规则与站点菜单基本一致，区别在于：

- type：菜单类型，需要设置为 ["content"]，type 的可取值有 app（代表系统菜单）、web（代表站点菜单）、wx（代表微信站点菜单）、content（代表内容菜单），如果不设置，默认 type 的取值为 ["web","wx"]。
由于内容菜单与栏目关联，需要对栏目开启或关闭的设置，所以通常包含内容菜单的同时会增加一个站点菜单，菜单链接指向XYCMS系统自带的配置界面，地址为 /ss-admin/plugins/config/?pluginId=插件Id,其中插件Id为当前插件 package.json 配置文件中 publisher.name 的值，点击后如下图所示：

![2](/assets/img/plugin/demo/menus-04.png)