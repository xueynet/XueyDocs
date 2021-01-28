# siteserver_Template

模板表，存储站点的模板信息。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id	|Integer|		|自增长主键|
|SiteId|	Integer	|	|站点Id，对应 siteserver_Site 表的 `Id` 字段|
|TemplateName|	VarChar|	50|	模板名称|
|TemplateType	|VarChar	|50	|模板类型|
|RelatedFileName|	VarChar|	50|	模板文件名（不带文件扩展名）|
|CreatedFileFullName|	VarChar	|50	|模板文件全名|
|CreatedFileExtName	|VarChar|	50	|模板文件扩展名|
|Charset	|VarChar|	50	|文件编码|
|IsDefault	|VarChar|	18	|是否默认模板|