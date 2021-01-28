# siteserver_PermissionsInRoles

权限角色表，存储权限与角色的关系。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id	|Integer|		|自增长主键|
|RoleName|	VarChar|	255|	角色名称，对应 siteserver_Role 表的 `RoleName` 字段|
|GeneralPermissions	|Text|		|对应角色包含的权限，以逗号分隔|