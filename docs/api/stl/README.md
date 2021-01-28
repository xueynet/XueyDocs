# 字段说明

### Site 站点对象

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id	|Integer|		|站点 Id|
|SiteName	|VarChar|	50|	站点名称|
|SiteDir	|VarChar|	50|	站点文件夹|
|TableName	|VarChar|	50	|站点内容表|
|IsRoot	|VarChar	|18	|是否主站|
|ParentId	|Integer|	|	上级站点 Id|
|Taxis	|Integer|		|排序|
|SettingsXml	|Text|		|站点设置|

### Channel 栏目对象

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id|	Integer|		|自增长主键|
|ChannelName|	VarChar|	255	|栏目名称|
|SiteId|	Integer|		|站点 Id|
|ContentModelPluginId	|VarChar|	|50	|内容模型插件设置，只能设置一个内容模型插件，设置后此栏目下的内容表将由插件定义|
|ContentRelatedPluginIds|	VarChar|	255	|内容关联插件设置，可以设置多个关联插件|
|ParentId	|Integer|		|父栏目 Id|
|ParentsPath	|VarChar|	255	|上级栏目路径，包含所有上级栏目的 Id，以逗号分隔|
|ParentsCount	|Integer|		|上级栏目数量|
|ChildrenCount	|Integer|		|下级栏目数量|
|IsLastNode|	VarChar	|18	|是否最后一级栏目|
|IndexName	|VarChar|	255	|栏目索引|
|GroupNameCollection|	VarChar|	255	|栏目组|
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
|ChannelTemplateId	|Integer|		|栏目模板 Id|
|ContentTemplateId	|Integer|		|内容模板 Id|
|Keywords	|VarChar|	255	|关键字列表，各关键词间用英文逗号“,”分割。|
|Description	|VarChar|	255	|页面描述|
|ExtendValues	|Text|		|栏目附加字段，用于存储栏目在表字段之外的信息|

### Content 内容对象

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id|	Integer|		|自增长主键|
|ChannelId|	Integer|		|栏目 Id|
|SiteId|	Integer|		|站点 Id|
|AddUserName|	VarChar|	255|	添加人|
|LastEditUserName|	VarChar|	255|	修改人|
|WritingUserName|	VarChar|	255|	投稿人|
|LastEditDate|	DateTime|		|修改时间|
|Taxis|	Integer|		|排序|
|GroupNameCollection|	VarChar|	255	|内容组|
|Tags|	VarChar|	255	|标签|
|SourceId|	Integer|		|来源内容 Id，对应内容表的 Id 字段|
|ReferenceId|	Integer|		|引用内容 Id，对应内容表的 Id 字段|
|IsChecked|	VarChar|	18	|是否终审通过通过|
|CheckedLevel|	Integer|		|未终审通过情况下，处于第几级审核状态|
|Hits|	Integer|		|总点击量|
|HitsByDay|	Integer|		|日点击|
|HitsByWeek|	Integer|		|周点击|
|HitsByMonth|	Integer|		|月点击|
|LastHitsDate|	DateTime|		|最后点击时间|
|SettingsXml|	Text|		|内容附加字段，用于存储内容在表字段之外的信息|
|Title|	VarChar|	255	|内容标题|
|IsTop|	VarChar|	18	|是否置顶内容|
|IsRecommend|	VarChar|	18	|是否推荐内容|
|IsHot|	VarChar|	18	|是否热点内容|
|IsColor|	VarChar|	18	|是否醒目内容|
|LinkUrl|	VarChar|	200	|外部链接，设置后链接将指向此地址|
|AddDate|	DateTime|		|添加时间|
|SubTitle|	VarChar|	255|	内容副标题|
|ImageUrl	|VarChar	|200	|内容图片，存储图片地址|
|VideoUrl|	VarChar|	200	|内容视频，存储视频地址|
|FileUrl	|VarChar	|200	|内容附件，存储附件地址|
|Content|	Text|		|内容正文，以编辑器提交信息|
|Summary	|Text	|	|内容摘要|
|Author	|VarChar|	255	|作者|
|Source	|VarChar|	255|	来源|

