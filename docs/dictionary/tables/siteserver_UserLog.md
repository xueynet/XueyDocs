# siteserver_UserLog

用户日志表，存储用户的操作日志。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id	|Integer|		|自增长主键|
|UserName|	VarChar	|255|	用户账号，对应 siteserver_User 表的 `UserName` 字段|
|IpAddress|	VarChar	|50	|Ip 地址|
|AddDate	|DateTime|		|添加时间|
|Action	|VarChar	|255	|动作|
|Summary	|VarChar	|255	|描述|