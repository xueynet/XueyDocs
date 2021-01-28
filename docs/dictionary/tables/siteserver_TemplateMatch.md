# siteserver_TemplateMatch

模板匹配表，存储模板与栏目之间的匹配关系。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id	|Integer|		|自增长主键|
|ChannelId	|Integer|		|栏目Id，对应 siteserver_Channel 表的 `Id` 字段|
|SiteId	|Integer|		|站点Id，对应 siteserver_Site 表的 `Id` 字段|
|ChannelTemplateId|	Integer	|	|栏目模板Id，对应 siteserver_Template 表的 `Id` 字段|
|ContentTemplateId|	Integer	|	|内容模板Id，对应 siteserver_Template 表的 `Id` 字段|
|FilePath	|VarChar|	200	|生成页面路径|
|ChannelFilePathRule	|VarChar|	200|	栏目页面命名规则|
|ContentFilePathRule|	VarChar	|200	|内容页面命名规则|