# siteserver_Config

系统配置表，存储系统配置信息。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id|	Integer|		|自增长主键|
|IsInitialized|	VarChar	|18	|系统是否安装|
|DatabaseVersion|	VarChar	|50	|当前系统的版本号|
|UpdateDate|	DateTime|		|系统升级时间|
|SystemConfig|	Text|		|系统配置|