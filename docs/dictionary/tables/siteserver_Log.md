# siteserver_Log

管理员操作日志表，存储管理员所执行的动作日志。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id	|Integer|		|自增长主键|
|UserName|	VarChar|	50|	管理员账号，对应 siteserver_Administrator 表的 `UserName` 字段|
|IpAddress	|VarChar|	50|	Ip地址|
|AddDate|	DateTime|		|添加时间|
|Action	|VarChar|	255|	动作|
|Summary|	VarChar|	255|	描述|