# siteserver_ChannelGroup

栏目组表，存储栏目组信息。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id|	Integer|		|自增长主键|
|GroupName	|VarChar	|255	|栏目组名称|
|SiteId	|Integer	|	|站点Id，对应 siteserver_Site 表的 `Id` 字段|
|Taxis	|Integer|		|排序|
|Description	|Text|		|栏目组简介|