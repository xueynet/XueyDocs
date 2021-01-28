# siteserver_Tag

内容标签表，存储内容的关联标签。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id	|Integer|		|自增长主键|
|SiteId|	Integer	|	|站点Id，对应 siteserver_Site 表的 `Id` 字段|
|ContentIdCollection|	VarChar	|255	|内容Id集合，对应 内容表 表的 `Id` 字段|
|Tag	|VarChar|	255	|标签|
|UseNum	|Integer|		|使用次数|