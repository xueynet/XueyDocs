# siteserver_Area

区域表，存储所属区域。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id	|Integer|		|自增长主键|
|AreaName	|VarChar|	255|	区域名称|
|ParentId	|Integer|		|父级区域Id|
|ParentsPath	|VarChar	|255	|上级区域路径，包含所有上级区域的Id，以逗号分隔|
|ParentsCount	|Integer|		|上级区域数量|
|ChildrenCount	|Integer|		|下级区域数量|
|IsLastNode	|VarChar	|18	|是否最后一级区域|
|Taxis	|Integer|		|排序|
|CountOfAdmin	|Integer|		|所在区域的管理员数量|