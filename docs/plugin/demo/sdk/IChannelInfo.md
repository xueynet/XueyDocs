# IChannelInfo interface

栏目实体接口。 对应数据库中的xycms_Channel表。

``` c#
public interface IChannelInfo
```

## Members

| name | description |
| :----- | :----- |
|AddDate { get; set; }	|栏目添加时间。|
|Attributes { get; }	|栏目可扩展属性，以键/值对的方式存储栏目数据，键不区分大小写。 除了存储栏目本身数据，还将用于存储栏目的自定义字段数据。|
|ChannelFilePathRule { get; set; }	|下级栏目的页面命名规则。|
|ChannelName { get; set; }	|栏目名称。|
|ChannelTemplateId { get; set; }	|栏目模板Id。|
|ChildrenCount { get; set; }	|下级栏目数量。|
|Content { get; set; }	|栏目正文，以编辑器提交信息。|
|ContentFilePathRule { get; set; }	|栏目下内容的页面命名规则。|
|ContentModelPluginId { get; set; }	|内容模型插件设置，只能设置一个内容模型插件，设置后此栏目下的内容表将由插件定义。|
|ContentRelatedPluginIds { get; set; }	|内容关联插件设置，可以设置多个关联插件。 多个关联插件以英文逗号隔开。|
|ContentTemplateId { get; set; }	|内容模板Id。|
|Description { get; set; }	|页面描述。|
|FilePath { get; set; }	|栏目生成页面路径。|
|GroupNameCollection { get; set; }	|栏目组。 多个栏目组以英文逗号隔开。|
|Id { get; set; }	|栏目Id。|
|ImageUrl { get; set; }	|栏目图片，存储图片地址。|
|IndexName { get; set; }	|栏目索引。|
|IsLastNode { get; set; }	|是否最后一级栏目。|
|Keywords { get; set; }	|关键字列表，各关键词间用英文逗号分割。|
|LinkType { get; set; }	|链接类型，设置此栏目的链接与子栏目及内容的关系。|
|LinkUrl { get; set; }	|外部链接，设置后链接将指向此地址。|
|ParentId { get; set; }	|父栏目Id。|
|ParentsCount { get; set; }	|上级栏目数量。|
|ParentsPath { get; set; }	|上级栏目路径，包含所有上级栏目的Id，以英文逗号分隔。|
|SiteId { get; set; }	|栏目所在的站点Id。|
|Taxis { get; set; }	|排序。|

