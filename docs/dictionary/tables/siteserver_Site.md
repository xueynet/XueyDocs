# siteserver_Site

站点表，存储站点信息。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id	|Integer|		|自增长主键|
|SiteName|	VarChar|	50|	站点名称|
|SiteDir	|VarChar|	50	|站点文件夹|
|TableName	|VarChar|	50	|站点内容表|
|IsRoot|	VarChar	|18	|是否主站|
|ParentId|	Integer	|	|上级站点Id|
|Taxis|	Integer|		|排序|
|SettingsXml	|Text	|	|站点设置|