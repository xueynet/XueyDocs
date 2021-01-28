# siteserver_Table

内容表基本信息表，存储与站点关联的内容表的基本信息。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id	|Integer|		|自增长主键|
|TableName|	VarChar|	50|	内容表标识|
|DisplayName|	VarChar|	50|	内容表名称|
|AttributeNum|	|Integer|		字段数量|
|IsCreatedInDb|	VarChar|	18	|是否创建|
|IsChangedAfterCreatedInDb|	VarChar|	18|	是否创建后修改|
|IsDefault	|VarChar|	18	|是否默认内容表|
|Description|	Text|		|内容表简介|