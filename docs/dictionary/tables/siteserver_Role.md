# siteserver_Role

角色表，存储管理员角色信息。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id	|Integer|		|自增长主键|
|RoleName	|VarChar	|255|	角色名称|
|CreatorUserName|	VarChar	|255	|角色创建人，对应 siteserver_Administrator 表的 `UserName` 字段|
|Description|	VarChar	|255|	备注|