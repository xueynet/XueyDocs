# 安装与设置

XYCMS 命令行包含在 XYCMS 系统中，随 XYCMS 系统一同发布，下载 XYCMS 系统并解压后，将在根目录找到可执行文件 `xycms`，Windows 系统下为 `xycms.exe`，Linux 及 MacOs 下为 `xycms`。

### 1、获取 XYCMS 命令行

进入 XYCMS 官网，下载最新版本的 XYCMS 系统，下载后解压将在目录下找到文件名为 xycms 的可执行文件，这个文件即为 XYCMS Cli 命令行。

### 2、运行 XYCMS Cli 命令行

XYCMS Cli 命令行需要通过命令行执行，可以使用cmd命令、Windows PowerShell或者bash shell等命令行工具，下面介绍如何通过cmd运行命令行。

下面以 Windows 操作系统为例，介绍如何运行 XYCMS Cli 命令行。

在Windows中打开运行弹出框输入cmd命令：

![01](/assets/img/cli/introduction/01.png)

或者通过开始菜单找到cmd.exe：

![02](/assets/img/cli/introduction/02.png)

进入命令行界面后进入 XYCMS 系统所在的文件夹，然后输入 `xycms status` 命令，界面将显示版本信息：

```sh
E:\xycms> xycms status
Cli version: 7.0.0
Cli location: E:\xycms\XYCMS.Cli.dll
Work location: E:\xycms
Database type: SQLite
Database connection string: Data Source=E:\xycms\database.sqlite;Version=3;
PluginId: xycms.advertisement, Version: 1.0.1
PluginId: xycms.block, Version: 1.0.0
PluginId: xycms.database, Version: 1.0.0
PluginId: xycms.document, Version: 1.0.0
PluginId: xycms.form, Version: 1.0.0
PluginId: xycms.gather, Version: 1.0.0
PluginId: xycms.gov_public, Version: 1.0.0
PluginId: xycms.hits, Version: 1.0.4
PluginId: xycms.photos, Version: 1.0.0
PluginId: xycms.restriction, Version: 1.0.0
```

现在你可以开始通过 XYCMS Cli 命令行实现备份、恢复、升级等功能了。

### 3、设置环境变量

如果希望在任何文件夹中运行 XYCMS Cli 命令行，可以通过设置环境变量来实现，这也是我们推荐的用法，能够随时运行 XYCMS 命令。

下面以 Windows 操作系统为例，介绍如何设置环境变量。

首先右键我的电脑，在弹出菜单中选择属性，弹出系统界面，在系统界面中点击高级系统设置，弹出高级选项卡：

![04](/assets/img/cli/introduction/04.png)

点击环境变量按钮，在弹出的对话框中编辑Path变量，添加 xycms.exe 文件所在的文件夹地址：

![05](/assets/img/cli/introduction/05.png)

点击确定后重新打开命令行界面便能够在任意文件夹运行 xycms 命令了。
