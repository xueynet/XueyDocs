# siteserver_SitePermissions

站点权限表，存储分配给管理员的站点权限。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id	|Integer|		|自增长主键|
|RoleName	|VarChar|	255|	角色名称，对应 siteserver_Role 表的 `RoleName` 字段|
|SiteId|	Integer|		|站点Id，对应 siteserver_Site 表的 `Id` 字段|
|ChannelIdCollection|	Text|		|栏目Id集合，以逗号分隔，对应 siteserver_Channel 表的 `Id` 字段|
|ChannelPermissions|	Text|		栏目权限集合，以逗号分隔|
|WebsitePermissions	|Text|		|站点权限集合，以逗号分隔|