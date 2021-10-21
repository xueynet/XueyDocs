# ContentFormSubmitEventArgs class

为内容编辑（新增）页面的提交事件提供数据。

``` c#
public class ContentFormSubmitEventArgs : EventArgs
```

## Public Members

| name | description |
| :----- | :----- |
|ContentFormSubmitEventArgs(…)	|初始化 ContentFormSubmitEventArgs 类的新实例。|
|ChannelId { get; }	|栏目Id。|
|ContentId { get; }	|内容Id。 如果内容Id为0，则表示当前载入的页面为内容添加页面，否则当前载入的页面为内容编辑页面。|
|ContentInfo { get; }	|即将保存至数据库的内容对象，可以从表单数据 IAttributes 中获取属性值并设置到内容对象中。|
|Form { get; }	|表单数据。|
|SiteId { get; }	|站点Id。|

