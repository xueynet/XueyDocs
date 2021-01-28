# siteserver_ContentGroup

内容组表，存储内容组信息。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id|	Integer|		|自增长主键|
|GroupName|	VarChar|	255|	内容组名称|
|SiteId	|Integer|		|站点Id，对应 siteserver_Site 表的 `Id` 字段|
|Taxis	|Integer|		|排序|
|Description|	Text	|	|内容组简介|