# 插件开发基础

欢迎来到 XYCMS 插件开发参考手册，在此我们将涵盖插件开发的各个方面，让你能够从零开始开发一个完整的插件。

XYCMS 插件是扩展 XYCMS 产品核心功能的代码包，XYCMS 插件由.NET代码和其他文件(如图片、CSS和JavaScript等)组成。

通过插件可以扩展 XYCMS，在 XYCMS 已经提供的功能基础上构建额外的功能。例如，编写一个插件来控制对应栏目的内容模型，采用自定义的字段提交并显示内容文章；或者，可以编写一个插件，创建一个带有短信通知、支持第三方支付的全功能票务系统。

一个插件必须有的文件是：一个主文件（插件Id.dll）以及一个插件配置文件（插件Id.nuspec）。

插件开发基于.NET环境，使用Visual Studio开发工具，同时需要在项目中引用 XYCMS.Plugin 开发包（SDK）。

