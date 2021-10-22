# ContentTranslateEventArgs class class

为内容转移事件提供数据

``` c#
public class ContentTranslateEventArgs : EventArgs
```

## Public Members

| name | description |
| :----- | :----- |
|ContentTranslateEventArgs(…)	|初始化 ContentTranslateEventArgs 类的新实例。|
|ChannelId { get; }	|原始内容的栏目Id。|
|ContentId { get; }	|原始内容的Id。|
|SiteId { get; }	|原始内容的站点Id。|
|TargetChannelId { get; }	|转移后内容的栏目Id。|
|TargetContentId { get; }	|转移后内容的Id。|
|TargetSiteId { get; }	|转移后内容的站点Id。|

