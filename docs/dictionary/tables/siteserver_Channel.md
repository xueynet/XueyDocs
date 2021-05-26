# siteserver_Area

栏目表，存储站点下的栏目信息。

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id|	Integer|		|自增长主键|
|ChannelName|	VarChar|	255	|栏目名称|
|SiteId|	Integer|		|站点Id，对应 siteserver_Site 表的 `Id` 字段 |
|ContentModelPluginId	| VarChar |	50	|内容模型插件设置，只能设置一个内容模型插件，设置后此栏目下的内容表将由插件定义|
|ContentRelatedPluginIds|	VarChar|	255	|内容关联插件设置，可以设置多个关联插件|
|ParentId	|Integer|		|父栏目 Id|
|ParentsPath	|VarChar|	255	|上级栏目路径，包含所有上级栏目的 Id，以逗号分隔|
|ParentsCount	|Integer|		|上级栏目数量|
|ChildrenCount	|Integer|		|下级栏目数量|
|IsLastNode|	VarChar	|18	|是否最后一级栏目|
|IndexName	|VarChar|	255	|栏目索引|
|GroupNameCollection|	VarChar|	255	|栏目组，对应 siteserver_ChannelGroup 表的 `GroupName` 字段|
|Taxis	|Integer|		|排序|
|AddDate	|DateTime|		|栏目添加时间|
|ImageUrl	|VarChar|	200	|栏目图片，存储图片地址|
|Content	|Text|		|栏目正文，以编辑器提交信息|
|ContentNum	|Integer|		|栏目下的内容总数，不包含下级栏目的内容数|
|FilePath	|VarChar	|200	|栏目生成页面路径|
|ChannelFilePathRule	|VarChar	|200	|下级栏目的页面命名规则|
|ContentFilePathRule	|VarChar	|200	|栏目下内容的页面命名规则|
|LinkUrl	|VarChar|	200	|外部链接，设置后链接将指向此地址|
|LinkType	|VarChar|	200	|链接类型，设置此栏目的链接与子栏目及内容的关系|
|ChannelTemplateId	|Integer|		|栏目模板Id，对应 siteserver_Template 表的 `Id` 字段|
|ContentTemplateId	|Integer|		|内容模板Id，对应 siteserver_Template 表的 `Id` 字段|
|Keywords	|VarChar|	255	|关键字列表，各关键词间用英文逗号“,”分割。|
|Description	|VarChar|	255	|页面描述|
|Children	|Array|		|下级栏目数组|
|ChannelType  |VarChar  |255  |栏目类型：常规、产品|