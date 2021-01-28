# 老版本升级

可以通过 XYCMS CLI 命令行将老版本系统升级至最新版本。

升级命令当前支持的版本包括：

* `XYCMS 3.6` 版本（3.6、3.6.1、3.6.2、3.6.3、3.6.4）升级至最新版本
* `XYCMS 4.0` 版本升级至最新版本
* `XYCMS 4.1` 版本升级至最新版本
* `XYCMS 5.0` 版本升级至最新版本
* `XYCMS 6.x` 版本升级至最新版本

所有版本的升级方式基本一致，下面我们以XYCMS 6.15 版本为例说明升级命令的使用方式。

::: warning
XYCMS 7.0 及之后的版本升级请参考：升级 XYCMS。
:::

### 第一步：下载 XYCMS 最新版本

![01](/assets/img/cli/advanced/01.png)

### 第二步：运行数据库备份命令

![02](/assets/img/cli/advanced/02.png)

打开Web.config，可以看到当前系统使用的数据库信息：

```sh
<add key="DatabaseType" value="SqlServer" />
<add key="ConnectionString" value="Server=(local);Uid=sa;Pwd=123456;Database=cms6;" />
```

在命令行中进入新版本文件夹，运行数据备份命令，将老版本数据库信息作为参数输入，将老版本数据库数据备份至backup文件夹：

```sh
xycms data backup -d backup -t SqlServer -c "Server=(local);Uid=sa;Pwd=123456;Database=cms6;"
```

其中 `-d` 用于指定数据库备份到的文件夹名称，`-t` 用于指定需要备份的数据库类型，`-c` 用于指定需要备份的数据库链接字符串。

### 第三步：运行系统升级命令

接下来我们需要使用系统升级命令 `xycms data update` 将老版本数据结构以及数据转换为新版本的数据结构及数据。

升级命令将把备份文件中存储的数据结构改为最新版本的数据结构，升级完成后将生成新的文件夹 **update**，用于恢复命令使用。

将命令行切换到系统根目录，运行升级命令并指定backup文件夹：

```sh
xycms data update -d backup
```

注意，系统升级命令仅实现将备份数据文件转换为新的数据文件，命令不会对数据库进行操作。

系统升级命令执行完毕后，系统根目录将出现一个名为update的文件夹，此文件夹中存储了升级之后的数据文件。

### 第四步：恢复数据

通过备份以及升级命令，我们已将新版本系统所需要的数据准备好了，接下来我们需要为新版本准备运行环境。

我们进入新版本文件夹，找到 `xycms.json` 文件，将数据库信息存放进去：

```json
{
  "Database": {
    "Type": "SqlServer",
    "ConnectionString": "Server=(local);Uid=sa;Pwd=123456;Database=cms6;"
  }
}
```

我们需要使用数据库恢复命令 `xycms data restore` 将老版本的数据恢复至新版本中。

将命令行切换到新版本系统的根目录，运行恢复命令（注意，恢复命令需要指定-d 参数，从 update 文件夹中恢复）：

```sh
xycms data restore -d update
```

可以看到命令将逐个核对数据并将数据插入至新版本数据库中。

命令完成后，便可以打开浏览器访问新系统后台了，老版本的数据已经转移到了新版本。

最后，将老版本系统文件夹中的站点文件复制到新版本系统文件夹中，切换域名，完成版本升级。