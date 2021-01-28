# 介绍

XYCMS 命令行工具（XYCMS CLI）是系统根目录下的一个可执行文件（Windows 系统下为 `xycms.exe`，Linux 及 MacOs 下为 `xycms`），通过命令行执行。

要使用命令行工具，请打开命令窗口或 bash shell，然后运行 xycms，后面跟着命令和适当的选项，如 xycms status（查看命令行状态）:

```sh
xycms status
```

运行状态命令后，命令终端将显示命令行的版本，xycms 执行文件所在位置以及当前文件夹信息：

```sh
Cli version: 7.0.0
Cli location: D:\xycms\XYCMS.Cli.dll
Work location: D:\xycms
```

XYCMS 命令行能够执行很多功能，如一键备份、一键还原、老版本升级、定时运行以及切换系统至不同类型的数据库等。

::: tip
此文档反映了 XYCMS CLI 命令行的最新版本。
:::

### 命令列表

| 命令 | 说明 |
| :----- | :-----|
| data backup | 数据库备份命令，用于备份数据库结构以及数据至指定文件夹中 |
| data restore | 数据库恢复命令，用于从备份文件中恢复数据结构及数据至指定数据库 |
| data sync | 数据库同步命令，用于将备份数据同步至指定数据库 |
| data update | 数据库升级命令，用于将备份的数据库更新至适合 XYCMS 最新版本使用的数据结构 |
| install download | 系统安装包下载命令，下载 XYCMS 系统最新版本至文件夹中 |
| install xycms | 系统安装命令，用于安装 XYCMS 系统至指定数据库 |
| login | 登录命令，XYCMS 官网用户登录 |
| logout | 退出登录命令，XYCMS 官网用户退出登录 |
| plugin new | 插件创建命令，此命令将根据指定参数生成插件配置文件 |
| plugin package | 插件打包命令，将插件打包为 zip 压缩包 |
| plugin publish	 | 插件发布命令，发布插件至 XYCMS 官方插件库 |
| plugin search | 插件搜索命令，根据关键词搜索 XYCMS 官方插件 |
| plugin show | 插件展示命令，查询指定插件的详细信息 |
| plugin unpublish | 插件下架命令，从 XYCMS 官方插件库下架插件 |
| register | 注册命令，XYCMS 官网用户注册 |
| run | 系统运行命令，直接运行当前目录的 XYCMS 系统 |
| status | 查看当前状态命令，查看命令行状态及当前文件夹 |
| update | 系统升级命令，用于升级 XYCMS 系统至最新版本 |

### 命令参数

可以在命令中带参数 `--help` 或者 `-h` 以显示此命令的使用说明，如 `xycms register -h`，使用`xycms -h`能够获取所有命令的使用说明。

命令通常还包括其他参数，请参考命令详细说明。