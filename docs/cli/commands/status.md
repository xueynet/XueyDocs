# status 查看当前状态命令

查看当前版本命令，用于查看 SiteServer CLI/XYCMS 版本以及数据库信息。

### 用法

```sh
xycms status
    -h, --help
```

### 选项

| 选项 | 简写 | 说明 |
| :----- | :----- | :----- |
| --help | -h | 命令说明 |

::: tip
如果当前目录为 XYCMS 根目录或者命令使用 **--config-file** 指定配置文件 Web.config，版本命令除显示 SiteServer CLI 版本信息，还将显示对应的 XYCMS 系统版本以及数据库连接字符串信息。
:::

### 示例

#### 基本使用

在非 XYCMS 系统根目录运行版本命令：

```sh
PS C:\Windows\system32> xycms version
欢迎使用 SiteServer Cli 命令行工具

SiteServer CLI 版本号: 6.9.0
当前文件夹: C:\Windows\system32
```

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

::: tip
可以通过版本命令同时显示非加密数据库连接字符串以及加密数据库连接字符串。
:::