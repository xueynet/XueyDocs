# 拆分内容表

我们推荐为每一个站点设置单独的内容表，这样做能够使每一张内容表的数据不至于太大，影响系统性能。

由于各种原因，可能系统内所有站点的内容表是同一个内容表，表的数据量已经达到影响系统性能的程度，这时我们应该考虑使用 SiteServer CLI 命令行拆分内容表，使每一个站点拥有独立的内容表。

### 第一步：运行数据库备份命令

首先使用数据库备份命令 `sscms backup` 将系统数据库备份至文件夹中。

将命令行切换到 SSCMS 所在文件夹，运行备份命令：

```sh
sscms backup -d backup
```

### 第二步：运行系统升级命令

然后我们需要使用系统升级命令 `sscms update` 并指定 `--content-split` 拆分内容表参数：

```sh
sscms update -d backup --content-split
```

### 第三步：创建新数据库

接下来，我们创建一个空的数据库（新数据库类型可以与之前的数据库类型不一致），在此，我们新建了一个名为`cms_new`的数据库。

修改Web.config文件，将数据库信息存放进去：

```
<add key="DatabaseType" value="SqlServer" />
<add key="ConnectionString" value="Server=(local);Uid=sa;Pwd=123456;Database=cms_new;" />
```

### 第四步：恢复数据

我们需要使用数据库恢复命令 `sscms resore` 将已拆分内容表的数据恢复至新数据库中。

```sh
sscms restore -d update
```

至此，数据库拆分内容表工作完成，可以将老的数据库备份后删除。