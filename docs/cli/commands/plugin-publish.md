# plugin publish 插件发布命令

数据库恢复命令，用于从备份文件中恢复数据结构及数据至指定数据库。

::: tip
数据库恢复命令支持MySQL、SQLSERVER、PostgreSQL 以及 Sqlite数据库。
:::

::: tip
数据库恢复命令不仅可以用于恢复 SSCMS 系统数据，还可用于任何需要恢复数据文件至数据库的场合。
:::

### 用法

```sh
sscms plugin publish
    -v, --version=VALUE
    -h, --help
```

数据库恢复命令必须包含从指定的文件夹中恢复数据 `--directory` 参数。

### 选项

| 选项 | 简写 | 说明 |
| :----- | :----- | :----- |
| --version | -v | 发布版本 |
| --help | -h | 命令说明 |

::: tip
恢复命令默认将检测数据库结构并将数据库结构设置为当前版本的SSCMS数据结构，如果此命令用于非SSCMS场合，请设置 **--data-only** 参数，命令将不再检测并同步SSCMS数据库结构。
:::

### 示例

#### 基本使用

恢复命令默认读取当前目录下的 Web.config 文件，从中获取数据库连接字符串（ConnectionString），进而将指定的备份文件夹内的备份数据恢复到数据库中。

需要注意的是，SiteServer 恢复命令目前还不支持增量恢复，只能将备份的数据一次性恢复到指定数据库中，故建议恢复命令使用新建的空数据库。

在使用数据库恢复命令前，需要确保 Web.config中的连接字符串（ConnectionString）为需要恢复的新建数据库。

数据库恢复命令需要通过`-d`或`--directory=`加文件夹名称的方式指定需要恢复的备份存储文件夹，如：

`sscms restore -d mydir`

此命令将从mydir文件夹中获取备份数据并恢复到数据库中，恢复命令将逐一遍历备份文件夹中的文件，将文件内容完整导入至恢复数据库中，结束后，打开数据库，将看到数据库中已包含了需要恢复的数据库表及数据，数据恢复成功。

### 指定Web.config文件

如果需要恢复的数据库信息存储在其他文件中，可以通过`-c`或`--config-file=`加文件名的方式指定config文件。

下图显示的文件夹中有两个config文件，backup.config以及restore.config，分别存储了希望备份数据的数据库连接字符串以及希望恢复数据的数据库连接字符串：

![04](/assets/img/cli/commands/04.png)

打开restore.config，可以看到里面存在连接 SSCMS 所用到的数据库类型 DatabaseType 以及连接字符串 ConnectionString。

将命令行切换到此文件夹，运行：

`sscms restore -c backup.config -d 'backup/2019-01-20'`

命令结束后打开数据库，可以看到数据恢复成功。