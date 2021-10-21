# IParseContext interface

STL解析上下文。

``` c#
public interface IParseContext
```

## Members

| name | description |
| :----- | :----- |
|BodyCodes { get; }	|生成的Html页面中包含在body标签内的代码。|
|ChannelId { get; }	|栏目Id。|
|ContentId { get; }	|内容Id。|
|ContentInfo { get; }	|内容实体。|
|FootCodes { get; }	|生成的Html页面中包含在页面最底部的代码。|
|HeadCodes { get; }	|生成的Html页面中包含在head标签内的代码。|
|IsStlElement { get; }	|判断当前解析的STL标签是STL元素还是STL实体，如果是元素，则返回true；如果是实体，则返回false。|
|SiteId { get; }	|站点Id。|
|StlAttributes { get; }	|当前解析的STL标签的属性键值集合。|
|StlInnerHtml { get; }	|当前解析的STL标签内部的内容。|
|StlOuterHtml { get; }	|当前解析的STL标签的完整代码，而不仅限于标签内部的内容。|
|TemplateId { get; }	|模板Id。|
|TemplateType { get; }	|模板类型。|
|Get(…)	|从STL解析上下文中获取指定键的值。|
|Set(…)	|将键/值对放入STL解析上下文中，对包含下级标签STL解析情况下共享数据有用。 注意：该数据是不稳定的 —— 它在当前STL解析完成后将丢失。|

