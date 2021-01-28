# siteserver_DbCache

数据缓存表，存储缓存信息。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id	|Integer|		|自增长主键|
|CacheKey	|VarChar|	200|	数据库缓存键|
|CacheValue	|VarChar|	500	|数据库缓存值|
|AddDate	|DateTime|		|添加时间|