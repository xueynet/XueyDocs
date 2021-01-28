# siteserver_Special

专题表，存储站点下的专题信息。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id	|Integer|		|自增长主键|
|SiteId	|Integer|		|站点Id，对应 siteserver_Site 表的 `Id` 字段|
|Title	|VarChar|	200	|专题名称|
|Url	|VarChar|	200	|访问地址|
|AddDate	|DateTime|		|导入时间|