# siteserver_Count

数字统计表，存储统计信息。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id|	Integer|		|自增长主键|
|RelatedTableName|	VarChar	|255|	统计对应的表名|
|RelatedIdentity	|VarChar|	255|	统计对应的表主键|
|CountType	|VarChar|	50	|统计类型|
|CountNum	|Integer	|	|统计值|