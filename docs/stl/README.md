# STL模板语言

STL，全称为 XYCMS站群系统模版标签语言，你可以把STL语言理解为带有特定意义的占位符，这些占位符通过标签（元素及实体）来标记出需要调取并显示的网站数据及功能；在生成静态页面的过程中，XYCMS 系统通过STL解析引擎解析这些占位符，从站点中获取对应的数据，最终将占位符替换为带有数据或功能的HTML标签并在服务器中生成对应的静态页面文件。

XYCMS站群系统的核心由内容管理与内容解析两部分组成，STL语言就是内容管理与内容解析的桥梁，将后台管理的各种动态数据最终解析为用户能访问的静态页面。

除了将后台的动态数据解析为前台的静态页面，STL语言还能够实现诸如功能互动、动态显示、数据统计、数据库解析等一系列功能；除了 XYCMS 系统自带的STL标签，各类插件也拥有自己的STL标签，用以实现不同的功能。

### 语言规则

和 HTML 语言一样，STL语言也是一种标准通用标记语言，采用与 HTML 语言一致的语法和规则。

STL语言并不复杂，但功能强大，其主要规则如下：

* 标签不区分大小写
STL标签是不区分大小写的，和 HTML 标签一样，`<stl:a>` 和 `<STL:A>` 是相同的。

* 属性值区分大小写
STL标签的属性值是区分大小写的，例如 `<stl:a channelIndex="News">` 和 `<stl:a channelIndex="NEWS">` 是不同的。

* 结束标记可以省略
与 HTML 一样，在没有子标签的情况下，STL 可以省略结束标记。例如 `<stl:value></stl:value>` 与 `<stl:value />` 是一致的。

* 标签可以嵌套标签
与 HTML 一样，STL 的标签可以相互嵌套，将一个或多个STL标签放到其他STL标签内部。例如 `<stl:a><stl:content type="title"></stl:content></stl:a>` 。

### 元素与实体

STL标签由元素与实体组成，元素以尖括号 `<>` 作为标记，实体以大括号 `{}` 作为标记。

例如显示内容标题可以采用STL 元素： `<stl:content type="title"></stl:content>` 也可以采用STL 实体： `{stl:content type="title"}` 或者内容实体的简写： `{content.title}`。

STL元素和STL实体的最大区别在于元素能够嵌套子标签而实体无法嵌套子标签，例如链接标签 `<stl:a channelIndex="新闻">News</stl:a>` （将解析为HTML A标签）无法通过实体 `{stl:a channelIndex="新闻"}` （将解析为对应的链接地址字符串）表示。

在模板中你可以使用元素也可以使用实体，通常情况下在独立使用时采用STL元素，在嵌入标签属性时采用STL实体，例如独立使用时采用：`<stl:content type="summary"></stl:content>`，嵌入属性时采用：`<stl:a title="{stl:content type=summary}">`。

STL标签的属性值使用英文双引号标识，例如：`<stl:content type="title"></stl:content>`，STL实体的属性可以使用英文双引号、英文单引号或者无标识，例如：`{stl:content type="title"}`，`{stl:content type='title'}`或者`{stl:content type=title}`均为正确的写法。

### 地址通配符

在STL标签中，地址使用通配符（“~”）和（“@”）来进行存储和读取，您可以使用通配符（“~”）来表示应用程序的根目录，使用通配符（“@”）来表示当前站点的域名地址，而不需要将地址硬编码为文件的绝对地址。

例如，您可以使用 `<stl:a href="~/index.html">主站</stl:a>` 生成指向到主站点index.html文件的链接，使用 `<stl:a href="@/index.html">本站</stl:a>` 生成指向到当前站点index.html文件的链接。

### 插件标签

《STL语言参考手册》仅列出了系统自带标签，不包含具体插件的标签使用说明，如需要使用插件标签，请查看具体的插件使用说明和插件源码。
