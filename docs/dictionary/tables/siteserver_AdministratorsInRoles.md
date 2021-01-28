# siteserver_AdministratorsInRoles

管理员角色表，存储管理员与角色的关系。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id	|Integer|		|自增长主键|
|RoleName	|VarChar|	255	|角色名称，对应 siteserver_Role 表的 `RoleName` 字段|
|UserName	|VarChar|	255	|管理员账号，对应 siteserver_Administrator 表的 `UserName` 字段|