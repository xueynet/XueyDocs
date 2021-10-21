# ContentFormLoadEventArgs class

为内容编辑（新增）页面的载入事件提供数据。

``` c#
public class ContentFormLoadEventArgs : EventArgs
```

## Public Members

| name | description |
| :----- | :----- |
|ContentFormLoadEventArgs(…)	|初始化 ContentFormLoadEventArgs 类的新实例。|
|AttributeHtml { get; }	|内容属性Html标签，内容属性在编辑（新增）页面中的Html标签。|
|AttributeName { get; }	|内容属性名称，代表内容编辑（新增）页面中的内容字段名称。|
|ChannelId { get; }	|栏目Id。|
|ContentId { get; }	|内容Id。 如果内容Id为0，则表示当前载入的页面为内容添加页面，否则当前载入的页面为内容编辑页面。|
|Form { get; }	|表单数据。|
|SiteId { get; }	|站点Id。|

