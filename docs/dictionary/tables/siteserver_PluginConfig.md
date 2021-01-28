# siteserver_PluginConfig

插件配置表，存储插件配置信息。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id	|Integer|		|自增长主键|
|PluginId|	VarChar|	50|	插件标识|
|SiteId	|Integer|		|站点Id，对应 siteserver_Site 表的 `Id` 字段|
|ConfigName	|VarChar|	200	|插件配置键|
|ConfigValue	|Text|		|插件配置值|