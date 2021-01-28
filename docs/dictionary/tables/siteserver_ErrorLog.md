# siteserver_ErrorLog

错误日志表，存储所有报错信息。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id	|Integer|		|自增长主键|
|PluginId	|VarChar|	200|	错误来源插件Id，代表报错所属插件|
|Message|	VarChar|	255|	错误消息|
|Stacktrace	|Text|		|堆栈踪迹|
|Summary	|Text|		|错误摘要|
|AddDate	|DateTime|		|错误发生时间|