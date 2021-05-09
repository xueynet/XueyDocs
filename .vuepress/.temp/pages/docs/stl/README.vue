<template><h1 id="stl模板语言"><a class="header-anchor" href="#stl模板语言">#</a> STL模板语言</h1>
<p>STL，全称为 XYCMS站群系统模版标签语言，你可以把STL语言理解为带有特定意义的占位符，这些占位符通过标签（元素及实体）来标记出需要调取并显示的网站数据及功能；在生成静态页面的过程中，XYCMS 系统通过STL解析引擎解析这些占位符，从站点中获取对应的数据，最终将占位符替换为带有数据或功能的HTML标签并在服务器中生成对应的静态页面文件。</p>
<p>XYCMS站群系统的核心由内容管理与内容解析两部分组成，STL语言就是内容管理与内容解析的桥梁，将后台管理的各种动态数据最终解析为用户能访问的静态页面。</p>
<p>除了将后台的动态数据解析为前台的静态页面，STL语言还能够实现诸如功能互动、动态显示、数据统计、数据库解析等一系列功能；除了 XYCMS 系统自带的STL标签，各类插件也拥有自己的STL标签，用以实现不同的功能。</p>
<h3 id="语言规则"><a class="header-anchor" href="#语言规则">#</a> 语言规则</h3>
<p>和 HTML 语言一样，STL语言也是一种标准通用标记语言，采用与 HTML 语言一致的语法和规则。</p>
<p>STL语言并不复杂，但功能强大，其主要规则如下：</p>
<ul>
<li>
<p>标签不区分大小写
STL标签是不区分大小写的，和 HTML 标签一样，<code>&lt;stl:a&gt;</code> 和 <code>&lt;STL:A&gt;</code> 是相同的。</p>
</li>
<li>
<p>属性值区分大小写
STL标签的属性值是区分大小写的，例如 <code>&lt;stl:a channelIndex=&quot;News&quot;&gt;</code> 和 <code>&lt;stl:a channelIndex=&quot;NEWS&quot;&gt;</code> 是不同的。</p>
</li>
<li>
<p>结束标记可以省略
与 HTML 一样，在没有子标签的情况下，STL 可以省略结束标记。例如 <code>&lt;stl:value&gt;&lt;/stl:value&gt;</code> 与 <code>&lt;stl:value /&gt;</code> 是一致的。</p>
</li>
<li>
<p>标签可以嵌套标签
与 HTML 一样，STL 的标签可以相互嵌套，将一个或多个STL标签放到其他STL标签内部。例如 <code>&lt;stl:a&gt;&lt;stl:content type=&quot;title&quot;&gt;&lt;/stl:content&gt;&lt;/stl:a&gt;</code> 。</p>
</li>
</ul>
<h3 id="元素与实体"><a class="header-anchor" href="#元素与实体">#</a> 元素与实体</h3>
<p>STL标签由元素与实体组成，元素以尖括号 <code>&lt;&gt;</code> 作为标记，实体以大括号 <code>{}</code> 作为标记。</p>
<p>例如显示内容标题可以采用STL 元素： <code>&lt;stl:content type=&quot;title&quot;&gt;&lt;/stl:content&gt;</code> 也可以采用STL 实体： <code>{stl:content type=&quot;title&quot;}</code> 或者内容实体的简写： <code>{content.title}</code>。</p>
<p>STL元素和STL实体的最大区别在于元素能够嵌套子标签而实体无法嵌套子标签，例如链接标签 <code>&lt;stl:a channelIndex=&quot;新闻&quot;&gt;News&lt;/stl:a&gt;</code> （将解析为HTML A标签）无法通过实体 <code>{stl:a channelIndex=&quot;新闻&quot;}</code> （将解析为对应的链接地址字符串）表示。</p>
<p>在模板中你可以使用元素也可以使用实体，通常情况下在独立使用时采用STL元素，在嵌入标签属性时采用STL实体，例如独立使用时采用：<code>&lt;stl:content type=&quot;summary&quot;&gt;&lt;/stl:content&gt;</code>，嵌入属性时采用：<code>&lt;stl:a title=&quot;{stl:content type=summary}&quot;&gt;</code>。</p>
<p>STL标签的属性值使用英文双引号标识，例如：<code>&lt;stl:content type=&quot;title&quot;&gt;&lt;/stl:content&gt;</code>，STL实体的属性可以使用英文双引号、英文单引号或者无标识，例如：<code>{stl:content type=&quot;title&quot;}</code>，<code>{stl:content type='title'}</code>或者<code>{stl:content type=title}</code>均为正确的写法。</p>
<h3 id="地址通配符"><a class="header-anchor" href="#地址通配符">#</a> 地址通配符</h3>
<p>在STL标签中，地址使用通配符（“~”）和（“@”）来进行存储和读取，您可以使用通配符（“~”）来表示应用程序的根目录，使用通配符（“@”）来表示当前站点的域名地址，而不需要将地址硬编码为文件的绝对地址。</p>
<p>例如，您可以使用 <code>&lt;stl:a href=&quot;~/index.html&quot;&gt;主站&lt;/stl:a&gt;</code> 生成指向到主站点index.html文件的链接，使用 <code>&lt;stl:a href=&quot;@/index.html&quot;&gt;本站&lt;/stl:a&gt;</code> 生成指向到当前站点index.html文件的链接。</p>
<h3 id="插件标签"><a class="header-anchor" href="#插件标签">#</a> 插件标签</h3>
<p>《STL语言参考手册》仅列出了系统自带标签，不包含具体插件的标签使用说明，如需要使用插件标签，请查看具体的插件使用说明和插件源码。</p>
</template>