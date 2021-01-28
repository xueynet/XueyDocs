# siteserver_TableStyle

提交样式表，存储内容编辑界面中每项的提交样式。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id	|Integer|		|自增长主键|
|RelatedIdentity|	Integer	|	|提交样式对应字段标识|
|TableName|	VarChar|	50	|提交样式对应表标识|
|AttributeName|	VarChar	|50	|字段名称|
|Taxis	|Integer|		|排序|
|DisplayName|	VarChar|	255|	显示名称|
|HelpText|	VarChar|	255|	帮助提示|
|IsVisibleInList	|VarChar|	18	|是否在列表中显示|
|InputType	|VarChar|	50	|表单提交类型|
|DefaultValue|	VarChar	|255|	默认值|
|IsHorizontal|	VarChar	|18	|是否水平排列|
|ExtendValues|	Text|		|提交样式设置|