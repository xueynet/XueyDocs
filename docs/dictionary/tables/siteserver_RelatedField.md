# siteserver_RelatedField

联动字段表，存储联动字段信息。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id	|Integer|		|自增长主键|
|Title	|VarChar|	50	|联动字段名称|
|SiteId	|Integer|		|站点Id，对应 siteserver_Site 表的 `Id` 字段|
|TotalLevel	|Integer|		|几级联动|
|Prefixes	|VarChar|	255	|前缀为联动字段在下拉列表之前显示的文字，可以为空|
|Suffixes	|VarChar|	255	|后缀为联动字段在下拉列表之后显示的文字，可以为空|