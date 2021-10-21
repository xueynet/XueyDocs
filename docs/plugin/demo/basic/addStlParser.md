# 添加STL解析器

STL解析器是 XYCMS CMS 解析标签并生成静态页面的核心，通过添加插件自己的STL解析器，插件即可拥有自己的专属标签，方便模板调用。

``` c#
public IService AddStlElementParser(string elementName, Func<IParseContext, string> parse)
```

下面的例子显示一个简单的STL标签解析器，能够将标签<stl:hello></stl:hello>解析为字符串hello world。

``` c#
public class Main : PluginBase
{
    public override void Startup(IService service)
    {
        service.AddStlElementParser("stl:hello", parseContext => "hello world");
    }
}
```

标签上下文 IParseContext 是我们用来获取标签所处环境的对象，能够获得当前站点、栏目以及内容的信息，同时还能获取标签的属性、嵌套的内部标签等信息。

下面的例子显示一个STL标签解析器，能够将标签<stl:hello type="world"></stl:hello>解析为字符串hello world。

``` c#
public class Main : PluginBase
{
    public override void Startup(IService service)
    {
        service.AddStlElementParser("stl:hello", parseContext => "hello " + parseContext.StlAttributes["type"]);
    }
}
```

插件的标签解析器通常会使用 ParseApi 对象来实现其他标签的解析功能。

下面的例子显示一个STL标签解析器，能够将标签

``` html
<stl:hello>
    <stl:site type="siteName"></stl:site>
</stl:hello>
```

解析为字符串 hello 站点名称。

``` c#
public class Main : PluginBase
{
    public override void Startup(IService service)
    {
        service.AddStlElementParser("stl:hello", parseContext => "hello " + ParseApi.Parse(parseContext.StlInnerHtml, parseContext));
    }
}
```