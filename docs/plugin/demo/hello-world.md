# 开发第一个插件

在此，我们将从零开始开发一个极简插件：Hello World。插件只实现一个功能：XYCMS 后台显示插件菜单，点击进入页面显示Hello World。

## 使用Visual Studio 2019 创建插件项目

首先，打开Visual Studio 2019，按如下步骤点击创建新项目。

![1](/assets/img/plugin/demo/20211018170311.png)

![2](/assets/img/plugin/demo/20211018170742.png)

![2](/assets/img/plugin/demo/20211018170841.png)

![2](/assets/img/plugin/demo/20211018170926.png)

::: tip 提示
注意：在创建的时候，选择目标框架为：.NET 5.0
:::

## 添加Nuget引用包

方法一：直接在Visual Studio中右键点击项目，在弹出的菜单中点击 管理Nuget程序包

在弹出的窗口中搜索XYCMS，版本可以选择最新版本，点击安装
![2](/assets/img/plugin/demo/20211018214443.png)

在弹出的协议和引用的组件中点击同意，安装完成后，可以在项目中看到已经有引用的XYCMS 包文件了。

![2](/assets/img/plugin/demo/20211018170926.png)

方法二：直接在Visual Studio 的包管理器命令窗口中输入引用包命令，如下所示：

PM> `Install-Package XYCMS -Version 8.0.3`

然后同意弹出的协议和引用组件，完成包安装。

## 编写插件代码

将 Class1.cs改为Startup.cs，输入代码：

``` c#
using XYCMS.Plugins;

namespace XYCMS.HelloWorld
{
    public class Startup : IPluginExtension
    {
    }
}

```

添加资源文件夹wwwroot/assets/demo/，并将插件logo.svg放入资源文件夹

``` svg
<svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>background</title>
  <rect fill="#fff" id="canvas_background" height="50" width="50" y="-1" x="-1"/>
  <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
   <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>
  </g>
 </g>
 <g>
  <title>Layer 1</title>
  <text transform="rotate(25.81438636779785 23.99999999999999,25.945312500000004) " font-weight="normal" xml:space="preserve" text-anchor="start" font-family="'Trebuchet MS', Gadget, sans-serif" font-size="24" id="svg_1" y="34.445313" x="16.640625" stroke-width="0" stroke="#000" fill="#000000">D</text>
  <path id="svg_2" d="m-2.257507,23.713087l0,0c0,-12.702548 12.088314,-23 27.000003,-23l0,0c7.160843,0 14.028402,2.423206 19.091881,6.736543c5.063484,4.313338 7.908121,10.163476 7.908121,16.263458l0,0c0,12.702547 -12.088314,23 -27.000003,23l0,0c-14.911687,0 -27.000003,-10.297454 -27.000003,-23zm13.500001,0l0,0c0,6.351273 6.044161,11.5 13.500001,11.5c7.455846,0 13.500001,-5.148728 13.500001,-11.5c0,-6.351273 -6.044159,-11.5 -13.500001,-11.5l0,0c-7.455841,0 -13.500001,5.148729 -13.500001,11.5z" stroke-width="1.5" stroke="#000" fill="#fff"/>
 </g>
</svg>
```

新建html页面，将入下代码保存在资源文件夹中并命名为index.html

``` html
<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title></title>
</head>
<body>
    <h3>Hello World</h3>
</body>
</html>
```

::: tip 提示
资源文件全选，右键属性，都设置为：如果较新则复制,这样才会将生成的文件保存在输出目录中
:::


## 创建插件配置文件

每个插件都需要一个以 package.json 命名的json格式配置文件，用于设置此插件的名称、地址、许可协议等信息。

在 Visual Studio 中创建文件 package.json，输入以下代码并以utf8格式保存文件：

``` json
{
  "name": "helloword",
  "displayName": "示例插件",
  "description": "这是一个Demo演示插件，用于指导如何开发XYCMS新的插件",
  "version": "1.0.1",
  "license": "AGPL-3.0",
  "publisher": "xycms",
  "engines": {
    "xycms": "^8.0.3"
  },
  "categories": [
    "Other"
  ],
  "keywords": [
    "示例插件"
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/xueynet/XYS"
  },
  "icon": "/assets/demo/logo.svg",
  "main": "XYCMS.HelloWorld.dll",
  "applyToSites": true,
  "applyToChannels": false,
  "extensions": {
    "permissions": {
      "site_demo": {
        "text": "示例",
        "type": [ "web", "wx" ]
      }
    },
    "menus": {
      "site_demo": {
        "text": "示例插件",
        "iconClass": "ion-connection-bars",
        "link": "/assets/demo/index.html",
        "type": [ "web", "wx" ],
        "permissions": [
          "site_demo"
        ]
      }
    }
  }
}
```

为了将package.json包含在生成文件中，我们在解决方案中右键点击package.json，选择属性，然后在弹出的属性窗口中，高级-复制到输出目录：选择如果较新则复制。这样在生成的最终文件中，就包含package.json文件啦。

## 打包并配置插件

项目右键生成，如果没有错误，将会完成插件项目的生成，默认将生成在当前项目的bin目录下。我们需要将生成的文件：XYCMS.HelloWorld.dll 和package.json 复制到主程序的插件目录下，便于重载插件。

1. 进入主程序根目录的Plugins目录,新建插件目录xycms.helloworld,注意：Linux下区分文件(夹)名大小写

2. 将插件生成的文件复制到指定的插件目录

3. 后台在插件管理页面，重载插件，即可看到新添加的插件

::: warning 注意
插件文件夹命名规范： `package.json` 中的 `publisher` + `.` + `name`

如当前演示插件`publisher`为`xycms`，`name`为`helloworld`，是故插件文件夹名为`xycms.helloworld`
:::