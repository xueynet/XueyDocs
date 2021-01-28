# 字段说明

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

下表中的字段为 XYCMS 默认创建的内容表中包含的额外字段：

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|SubTitle	|VarChar	|255	|内容副标题|
|ImageUrl	|VarChar	|200	|内容图片，存储图片地址|
|VideoUrl	|VarChar	|200	|内容视频，存储视频地址|
|FileUrl	|VarChar	|200	|内容附件，存储附件地址|
|Content	|Text		||内容正文，以编辑器提交信息|
|Summary	|Text		||内容摘要|
|Author	|VarChar	|255	|作者|
|Source	|VarChar	|255	|来源|