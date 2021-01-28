# siteserver_TableStyleItem

提交样式选项表，存储提交样式的选择项列表。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id	|Integer|		|自增长主键|
|TableStyleId|	Integer	|	|提交样式Id，对应 siteserver_TableStyle 表的 `Id` 字段|
|ItemTitle|	VarChar	|255	|选项标题|
|ItemValue	|VarChar|	255	|选项值|
|IsSelected	|VarChar|	18|	是否默认选择|