# 发布插件

本主题涵盖：

- 发布插件到 XYCMS 系统
- 发布插件到 XYCMS 插件中心
- 
## 发布到 XYCMS 系统

发布插件至 XYCMS 系统中最简单的方式是直接将插件文件夹拷贝到其他 XYCMS 系统的 plugins 文件夹，然后进入 XYCMS 系统的 插件管理 -> 管理插件,点击 重新加载所有插件 按钮：

![2](/assets/img/plugin/demo/publish-01.png)

XYCMS 系统将自动扫描 plugins 目录下的每一个文件夹并载入插件。

除了进入服务器将插件文件夹拷贝到 plugins 目录下，我们还可以将插件文件夹压缩为 zip 文件，然后进入 XYCMS 系统的 插件管理 -> 添加插件,点击 离线安装/更新插件 按钮，点击上传：

![2](/assets/img/plugin/demo/publish-02.png)

除了首次发布插件，我们同样可以使用以上步骤更新插件。

## 发布到 XYCMS 插件中心

完成插件开发后，我们可以将其发布到 xycms.com 插件中心 (opens new window)，以便其他人可以获取，下载和使用你的插件。

xycms.com 插件中心 (opens new window)中的插件包含免费和收费两种模式，您可以将发布的插件设置为收费，XYCMS 官方收到插件购买费用后将把总金额的80%返回给插件开发者。

发布插件至 xycms.com 插件中心 (opens new window)需要使用 XYCMS 命令行，XYCMS CLI 命令行 可以用于打包，发布和管理 XYCMS 插件。

我们以 HelloWorld插件 (opens new window)为例示范如何将插件发布到 xycms.com 插件中心 (opens new window)：

打包插件：

``` sh
# 进入插件文件夹
$ cd demo.hello-world
# 打包生成插件包
$ xycms plugin package
$ SUCCESS  Packaged: C:\Users\computer\.xycms\plugins\demo.hello-world.1.0.0.zip (190KB)
```

我们打开命令行终端，进入插件对应的文件夹，然后运行 xycms plugin package 命令，命令行终端将显示打包成功。

我们可以看到，最终的插件包位于 C:\Users\computer\.xycms\plugins\ 文件夹（computer根据电脑用户不同所有区别），打包生成的插件包为zip文件，包含插件Id以及插件版本号。

打包完成后，我们就可以发布插件至 xycms.com 插件中心 (opens new window)了，我们在插件所在文件夹运行 xycms plugin publish 命令：

``` sh
# 发布插件
$ xycms plugin publish
$ ERROR  you have not logged in
```

如果未使用命令行登录，命令行终端将显示失败，提示我们需要先通过命令行登录 xycms.com (opens new window)。

我们需要运行 xycms login 命令，命令行终端将提示输入用户名及密码，用户名及密码是您在 xycms.com (opens new window)官网的注册用户名及其密码。

完成命令行登录后，接着运行 xycms plugin publish 命令，系统将提示发布成功，XYCMS 官方将对插件进行审核，如果审核通过，您的插件将最终显示在 xycms.com 插件中心 (opens new window)。

如果插件更新了版本，再次运行一遍以上命令，XYCMS 命令行将会把新版本的插件更新到 xycms.com 插件中心 (opens new window)。