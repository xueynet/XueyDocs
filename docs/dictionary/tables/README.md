# siteserver_AccessToken

API密钥表，存储访问REST API的密钥。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id	|Integer|		|自增长主键|
|Title|	VarChar	|200	|密钥名称|
|Token	|VarChar|	200	|密钥|
|Scopes|	VarChar	|200	|授权范围|
|RateLimit	|Integer	|	|访问频率限制|
|AddDate	|DateTime|		|添加时间|
|UpdatedDate|	DateTime|		|更新时间|

<style>
@@import url("/assets/css/table_four_col.css");
</style>
