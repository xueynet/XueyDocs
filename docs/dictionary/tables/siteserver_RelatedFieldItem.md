# siteserver_RelatedFieldItem

联动字段选项表，存储联动字段的选择项列表。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id	|Integer|		|自增长主键|
|RelatedFieldId|	Integer	|	|联动字段Id，对应 siteserver_RelatedField 表的 `Id` 字段|
|ItemName	|VarChar|	255|	字段项名|
|ItemValue|	VarChar	|255|	字段项值|
|ParentId|	Integer	|	|上级字段项Id|
|Taxis|	Integer|		|排序|