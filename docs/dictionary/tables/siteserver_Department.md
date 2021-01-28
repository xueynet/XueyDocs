# siteserver_Department

部门表，存储所有部门。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id	|Integer|		|自增长主键|
|DepartmentName	|VarChar	|255|	部门名称|
|Code	|VarChar|	50	|部门编码|
|ParentId	|Integer|		|上级部门Id|
|ParentsPath|	VarChar	|255	|上级部门路径，包含所有上级部门的Id，以逗号分隔|
|ParentsCount|	Integer	|	|上级部门数量|
|ChildrenCount|	Integer	|	|下级部门数量|
|IsLastNode|	VarChar|	18|	是否最后一级部门|
|Taxis	|Integer|		|排序|
|AddDate	|DateTime|		|添加时间|
|Summary	|VarChar|	255	|部门简介|
|CountOfAdmin|	Integer	|	|所属部门管理员总数|