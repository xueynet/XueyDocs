# 加密解密数据库连接字符串

可以通过显示版本命令 `xycms version` 同时显示非加密数据库连接字符串以及加密数据库连接字符串。

在XYCMS 系统根目录运行版本命令：

```sh
PS C:\Windows\system32> cd C:\github\cms\cms-staging\SiteServer.Web
PS C:\github\cms\cms-staging\SiteServer.Web> xycms version
欢迎使用 SiteServer Cli 命令行工具

SiteServer CLI 版本号: 6.9.0
当前文件夹: C:\github\cms\cms-staging\SiteServer.Web

SitServer CMS Version: 6.9.3-beta
数据库类型: SqlServer
连接字符串: Server=(local);Uid=sa;Pwd=123456;Database=cms;
连接字符串（加密）: 5TRGlFvX5U5gzX2Vi0sYmORh9DMNnA1MnHncFj259dJRN9l1tqf6dM30add0Zpd88Ni7bmNUsJ3G93HSJxIFoXqj0slash0Q0equals00equals00secret0
```

如果Web.config中数据库连接字符串是加密的，可以通过此命令找回数据库连接字符串；如果Web.config中数据库连接字符串是非加密的，可以通过此命令获取加密连接字符串并设置到Web.config中。