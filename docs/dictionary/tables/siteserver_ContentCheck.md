# siteserver_ContentCheck

内容审核表，存储内容审核信息。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id|	Integer|		|自增长主键|
|TableName	|VarChar|	50	||
|SiteId	|Integer|		|站点Id，对应 siteserver_Site 表的 `Id` 字段|
|ChannelId	|Integer	|	|栏目Id，对应 siteserver_Channel 表的 `Id` 字段|
|ContentId	|Integer|		|内容Id，对应 内容表 表的 `Id` 字段|
|UserName|	VarChar	|255	|审核人，对应 siteserver_Administrator 表的 `UserName` 字段|
|IsChecked	|VarChar	|18	|是否终审通过|
|CheckedLevel	|Integer|		|当前审核级别|
|CheckDate|	DateTime|		|审核时间|
|Reasons	|VarChar|	255	|审核原因|