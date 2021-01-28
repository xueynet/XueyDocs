# siteserver_TemplateLog

模板操作日志表，存储模板的版本信息。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id	|Integer|		|自增长主键|
|TemplateId|	Integer|	|	模板Id，对应 siteserver_Template 表的 `Id` 字段|
|SiteId	|Integer|		|站点Id，对应 siteserver_Site 表的 `Id` 字段|
|AddDate	|DateTime|		|操作时间|
|AddUserName	|VarChar|	255	|操作人，对应 siteserver_Administrator 表的 `UserName` 字段|
|ContentLength|	Integer|		|模板内容字数|
|TemplateContent|	Text|		|模板内容|