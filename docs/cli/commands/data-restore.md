# data restore 数据库恢复命令

数据库恢复命令，用于从备份文件中恢复数据结构及数据至指定数据库。

::: tip
数据库恢复命令不仅可以用于恢复 SSCMS 系统数据，还可用于任何需要恢复数据文件至数据库的场合。
:::

### 用法

```sh
sscms data restore
    -d, --directory=VALUE
    --includes=VALUE
    --excludes=VALUE
    --data-only
    -h, --help
```

数据库恢复命令必须包含从指定的文件夹中恢复数据 `--directory` 参数。

### 选项

| 选项 | 简写 | 说明 |
| :----- | :----- | :----- |
| --directory | -d | 从指定的文件夹中恢复数据 |
| --includes | | 指定需要还原的表，多个表用英文逗号隔开，默认还原所有表 |
| --excludes | | 指定需要排除的表，多个表用英文逗号隔开 |
| --data-only | | 仅恢复数据 |
| --help | -h | 命令说明 |

::: tip
恢复命令默认将检测数据库结构并将数据库结构设置为当前版本的 SSCMS 数据结构，如果此命令用于非 SSCMS 场合，请设置 **--data-only** 参数，命令将不再检测并同步 SSCMS 数据库结构。
:::

### 示例

#### 基本使用

恢复命令将读取当前目录下的 sscms.json 文件，从中获取数据库连接字符串（ConnectionString），进而将指定的备份文件夹内的备份数据恢复到数据库中。

::: tip
恢复命令目前还不支持增量恢复，只能将备份的数据一次性恢复到指定数据库中，故建议恢复命令使用新建的空数据库。
:::

在使用数据库恢复命令前，需要确保 sscms.json 文件中的连接字符串（ConnectionString）为需要恢复的新建数据库。

数据库恢复命令需要通过 `-d` 或 `--directory` 加文件夹名称的方式指定需要恢复的备份存储文件夹，如：

`sscms restore -d mydir`

此命令将从 mydir 文件夹中获取备份数据并恢复到数据库中，恢复命令将逐一遍历备份文件夹中的文件，将文件内容完整导入至恢复数据库中，结束后，打开数据库，将看到数据库中已包含了需要恢复的数据库表及数据，数据恢复成功。