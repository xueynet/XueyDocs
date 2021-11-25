# 调试插件

由于插件是在 XYCMS 系统启动后动态载入，所以调试插件代码与调试普通的 .NET Core 项目有所区别。

首先，我们需要把插件文件夹放置在 XYCMS 系统根目录下的 plugins 文件夹中，XYCMS 系统将扫描 plugins 目录下的每一个文件夹，动态载入此文件夹下的所有 DLL 文件，如果 DLL 内有继承了 IPluginExtension 或 IPluginConfigureServices 接口的类，XYCMS 将把此文件夹视为插件。

## 使用 Visual Studio 调试插件

如果我们使用 Visual Studio 开发插件，我们可以点击菜单 调试 -> 附加到进程，或者使用快捷键 Ctrl + Alt + P，启动附加到进程窗口：

![2](/assets/img/plugin/demo/debug-01.png)

在输入框中输入 w3wp，点击附加按钮，设置断点后在浏览器中运行对应页面，启动 Visual Studio 调试功能：

![2](/assets/img/plugin/demo/debug-02.png)

## 使用 VSCode 调试插件

如果我们使用 VSCode 开发插件，点击 运行和调试 图标，或者使用快捷键 Ctrl + Shift + D，进入运行和调试界面：

![2](/assets/img/plugin/demo/debug-03.png)

![2](/assets/img/plugin/demo/debug-04.png)

点击运行和调试按钮，在弹出的选项中选择 .NET 5 and .NET Core：

![2](/assets/img/plugin/demo/debug-05.png)

接着在运行和调试选项中选择 .NET Core Attach：

![2](/assets/img/plugin/demo/debug-06.png)

在弹出的附加选项中输入 w3wp并选择：

![2](/assets/img/plugin/demo/debug-07.png)

设置断点后在浏览器中运行对应页面，启动 VSCode 调试功能：

![2](/assets/img/plugin/demo/debug-08.png)