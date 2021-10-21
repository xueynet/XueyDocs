# IContentInfo interface

内容实体接口。 内容表默认名称为model_Content，XYCMS CMS 后台可以新建新的内容表，或者修改现有内容表的字段。

``` c#
public interface IContentInfo : IAttributes
```

## Members

| name | description |
| :----- | :----- |
|AddDate { get; set; }	|添加时间。|
|AddUserName { get; set; }	|添加人。|
|AdminId { get; set; }	|新增内容的管理员Id。|
|ChannelId { get; set; }	|栏目Id。|
|CheckedLevel { get; set; }	|未终审通过情况下，处于第几级审核状态。|
|GroupNameCollection { get; set; }	|内容组。 多个内容组以英文逗号隔开。|
|Hits { get; set; }	|总点击量。|
|HitsByDay { get; set; }	|日点击。|
|HitsByMonth { get; set; }	|月点击。|
|HitsByWeek { get; set; }	|周点击。|
|Id { get; set; }	|内容Id。|
|IsChecked { get; set; }	|是否终审通过通过。|
|IsColor { get; set; }	|是否醒目内容。|
|IsHot { get; set; }	|是否热点内容。|
|IsRecommend { get; set; }	|是否推荐内容。|
|IsTop { get; set; }	|是否置顶内容。|
|LastEditDate { get; set; }	|修改时间。|
|LastEditUserName { get; set; }	|修改人。|
|LastHitsDate { get; set; }	|最后点击时间。|
|LinkUrl { get; set; }	|外部链接，设置后链接将指向此地址。|
|ReferenceId { get; set; }	|引用内容Id。|
|SiteId { get; set; }	|站点Id。|
|SourceId { get; set; }	|来源内容Id。|
|Tags { get; set; }	|标签。 多个标签以英文逗号隔开。|
|Taxis { get; set; }	|排序。|
|Title { get; set; }	|内容标题。|
|UserId { get; set; }	|新增投稿的用户Id。|

