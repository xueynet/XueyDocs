# <stl:location> 当前位置

```html
<stl:location
    separator="当前位置分隔符"
    target="打开窗口的目标"
    linkClass="链接CSS样式"
    wordNum="链接字数"
    isContainSelf="是否包含当前栏目">
</stl:location>
```

### 说明

通过 `stl:location` 标签在模板中插入页面的当前位置。

标签 `<stl:location>` 是以分隔符分隔的栏目链接，表示当前页所处的位置。

separator 属性为栏目之间的分隔符，您也可以把分割字符串放在 `<stl:location>` 标签之间，作为子标签。

`<stl:location>` 标签对应的实体为`{stl:location}`。

### 属性

::: tip
所有属于 HTML 标签`<a>`的属性均适用于`<stl:location>`标签。
:::

| 属性 | 说明 |
|:------|:-----|
| separator | 当前位置分隔符 |
| target | 打开窗口的目标 |
| linkClass | 链接CSS样式 |
| wordNum | 链接字数 |
| isContainSelf | 是否包含当前栏目 |

**separator - 当前位置分隔符**

不设置系统默认使用 " - " 栏目分隔符。

**target - 打开窗口的目标**

点击链接时弹出窗口的目标

**linkClass - 链接CSS样式**

当前位置中包含链接的显示样式

**wordNum - 链接字数**

字数限制

**isContainSelf - 是否包含当前栏目**

是否包含当前栏目

### 示例

**采用属性作为分隔符**

下面的例子显示页面的当前位置，分隔符用属性表示。

```html
<stl:location separator=" - "></stl:location>
```

解析后的 HTML 代码：

```html
<a href="https://sscms.com/docs/">首 页</a>
 -
<a href="/channels/4.html">STL标签</a>
 -
<a href="/channels/19.html">导航标签</a>
 -
<a href="/location/index.html">stl:location 当前位置</a>
```

**采用子标签作为分隔符**

下面的例子显示页面的当前位置，分隔符用子标签表示。

```html
<stl:location> <span style="color:#ff0000"> >> </span> </stl:location>
```

解析后的 HTML 代码：

```html
<a href="http://docs.xuey.net/">首 页</a>
<span style="color:#ff0000"> &gt;&gt; </span>
<a href="/channels/4.html">STL标签</a>
<span style="color:#ff0000"> &gt;&gt; </span>
<a href="/channels/19.html">导航标签</a>
<span style="color:#ff0000"> &gt;&gt; </span>
<a href="/location/index.html">stl:location 当前位置</a>
```
