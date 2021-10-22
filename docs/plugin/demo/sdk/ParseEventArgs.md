# ParseEventArgs class

为STL解析事件提供数据。

``` c#
public class ParseEventArgs : EventArgs
```

## Public Members

| name | description |
| :----- | :----- |
|ParseEventArgs(…)	|初始化 ParseEventArgs 类的新实例。|
|BodyCodes { get; }	|生成的Html页面中包含在body标签内的代码。|
|ChannelId { get; }	|栏目Id。|
|ContentBuilder { get; }	|生成的Html页面代码。|
|ContentId { get; }	|内容Id。|
|FilePath { get; }	|生成页面的绝对路径。|
|FootCodes { get; }	|生成的Html页面中包含在页面最底部的代码。|
|HeadCodes { get; }	|生成的Html页面中包含在head标签内的代码。|
|SiteId { get; }	|站点Id。|
|TemplateId { get; }	|模板Id。|
|TemplateType { get; }	|模板类型。|

