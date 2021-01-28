# siteserver_SiteLog

站点日志表，存储对站点的所有操作日志信息。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id	|Integer|		|自增长主键|
|SiteId|	Integer	|	|站点Id，对应 siteserver_Site 表的 `Id` 字段|
|ChannelId|	Integer	|	|栏目Id，对应 siteserver_Channel 表的 `Id` 字段|
|ContentId|	Integer|		|内容Id，对应 内容表 表的 `Id` 字段|
|UserName	|VarChar|	50	|操作人，对应 siteserver_Administrator 表的 `UserName` 字段|
|IpAddress|	VarChar|	50|	Ip地址|
|AddDate|	DateTime|		|操作时间|
|Action	|VarChar|	255|	动作|
|Summary	|VarChar|	255	|描述|