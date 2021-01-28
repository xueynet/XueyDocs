# siteserver_TableMetadata

内容表字段信息表，存储与站点关联的内容表的详细字段信息。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id	|Integer|		|自增长主键|
|TableName|	VarChar|	50|	内容表标识，对应 siteserver_Table 表的 `TableName` 字段|
|AttributeName|	VarChar|	50	|字段名，只允许包含字母、数字以及下划线|
|DataType|	VarChar|	50|	数据类型|
|DataLength|	Integer|		|数据长度|
|Taxis	|Integer|		|排序|
|IsSystem|	VarChar	|18|	是否系统默认字段，默认字段无法删除及修改|