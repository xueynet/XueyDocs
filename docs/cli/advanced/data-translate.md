# 数据迁移

SiteServer CLI 命令行可以作为通用的工具使用，实现数据库数据迁移功能。

使用 SiteServer CLI 作为数据迁移的好处是能够跨数据库类型，首先通过数据库备份命令 sscms backup 将数据保存至文件夹中，然后通过数据库恢复命令 `sscms resore` 将数据恢复至指定数据库中。

`sscms backup` 及 `sscms resore` 命令经过专门优化，能够实现快速的批量数据导出和导入，同时命令能够通过 `--includes` 及 `--excludes` 参数指定需要迁移的数据表。

::: warning
`sscms resore` 命令需要包含 `--data-only` 参数，否则命令将检测数据库结构并将数据库结构设置为当前版本的SSCMS数据结构。
:::