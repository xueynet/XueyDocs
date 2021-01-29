# <stl:contents> 内容列表

```html
<stl:contents
    channelIndex="栏目索引"
    channelName="栏目名称"
    parent="上级栏目"
    upLevel="上级栏目的级别"
    topLevel="从首页向下的栏目级别"
    scope="范围"
    totalNum="显示信息总数"
    startNum="从第几条信息开始显示"
    order="排序"
    where="条件判断"
    groupChannel="指定栏目组"
    groupChannelNot="排除栏目组"
    groupContent="指定内容组"
    groupContentNot="排除内容组"
    tags="指定标签"
    isTop="仅显示置顶内容"
    isRecommend="仅显示推荐内容"
    isHot="仅显示热点内容"
    isColor="仅显示醒目内容"
    isImage="仅显示图片内容"
    isVideo="仅显示视频内容"
    isFile="仅显示附件内容"
    isRelatedContents="仅显示相关内容"
    layout="布局"
    columns="列数"
    direction="方向"
    height="整体高度"
    width="整体宽度"
    align="整体对齐"
    itemHeight="项高度"
    itemWidth="项宽度"
    itemAlign="项水平对齐"
    itemVerticalAlign="项垂直对齐"
    itemClass="项Css类">
</stl:contents>
```

### 说明

通过 `stl:contents` 标签在模板中显示内容列表。

`<stl:contents>` 元素默认显示当前栏目的内容列表，如果希望显示指定栏目的内容列表，请设置 上下文切换 属性。

如果需要将 `<stl:contents>` 元素解析为 HTML `<table>`标签，或者需要对列表循环项进行处理，请设置列表属性或标签 控制列表显示。

### 筛选

可以通过 scope 属性控制内容显示的范围，`<stl:contents>` 元素默认显示当前栏目的内容列表，即 `scope="self"`。

可以通过 groupChannel 属性及 groupChannelNot 属性筛选出特定栏目下的内容并进行显示。

可以通过 groupContent 属性及 groupContentNot 属性筛选出属于特定内容组的内容。

可以通过 isTop、isRecommend、isHot、isColor、isImage、isVideo、isFile 属性筛选出特定类型的内容。

如果需要在内容页中显示与当前内容相关的内容列表，使用 `isRelatedContents="true"` 属性，系统将根据标签判断是否相关内容。

如果以上属性均不适合，可以考虑使用 where 属性，通过 SQL WHERE 语句实现内容筛选。

### 解析

如果使用 `<stl:contents>` 元素，系统将对嵌套的标签进行解析并返回嵌套标签的循环列表。

如果使用 `{stl:contents}` 实体，系统将实体解析为内容列表的JSON对象数组。

### 属性

::: tip
所有属于 HTML 标签`<table>`的成员均适用于`<stl:contents>`标签。
:::

| 属性 | 说明 |
|:-----|:-----|
| channelIndex | 栏目索引 |
| channelName | 栏目名称 |
| parent | 上级栏目 |
| upLevel | 上级栏目的级别 |
| topLevel | 从首页向下的栏目级别 |
| scope | 范围 |
| totalNum | 显示信息总数 |
| startNum | 从第几条信息开始显示 |
| order | 排序 |
| where | 条件判断 |
| groupChannel | 指定栏目组 |
| groupChannelNot | 排除栏目组 |
| groupContent | 指定内容组 |
| groupContentNot | 排除内容组 |
| tags | 指定标签 |
| isTop | 仅显示置顶内容 |
| isRecommend | 仅显示推荐内容 |
| isHot | 仅显示热点内容 |
| isColor | 仅显示醒目内容 |
| isImage | 仅显示图片内容 |
| isVideo | 仅显示视频内容 |
| isFile | 仅显示附件内容 |
| isRelatedContents | 仅显示相关内容 |
| layout | 布局 |
| columns | 列数 |
| direction | 方向 |
| height | 整体高度 |
| width | 整体宽度 |
| align | 整体对齐 |
| itemHeight | 项高度 |
| itemWidth | 项宽度 |
| itemAlign | 项水平对齐 |
| itemVerticalAlign | 项垂直对齐 |
| itemClass | 项Css类 |

**channelIndex - 栏目索引**

栏目索引是一个站点中栏目的标识，具有唯一性。

如果设置了 channelIndex 属性，系统将寻找对应索引的栏目并将上下文切换到此栏目。

```html
<!-- 显示首页的内容列表 -->
<stl:contents channelIndex="首页">
  <stl:a></stl:a><br />
</stl:contents>
```

**channelName - 栏目名称**

栏目名称可以重复，所以应该尽量避免使用栏目名称来切换上下文，但是如果 channelName 与 channelIndex 属性配合使用，系统将首先定位到 channelIndex 索引所在的栏目，之后再寻找此栏目下栏目名称为 channelName 的栏目。

```html
<!-- 显示当前栏目下的名称为“栏目名称”的栏目的内容列表 -->
<stl:contents channelName="栏目名称">
  <stl:a></stl:a><br />
</stl:contents>
```

```html
<!-- 显示“栏目索引”下的名称为“栏目名称”的栏目的内容列表 -->
<stl:contents channelIndex="栏目索引" channelName="栏目名称">
  <stl:a></stl:a><br />
</stl:contents>
```

**parent - 上级栏目**

将上下文切换到当前栏目的上一级栏目。

* "true" 表示切换到当前栏目的上一级栏目，等价于 upLevel="1"。
* "false" 表示不切换到当前栏目的上一级栏目。

如果同时设置了 parent 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上级栏目。

```html
<!-- 显示当前栏目的上一级栏目的内容列表 -->
<stl:contents parent="true">
  <stl:a></stl:a><br />
</stl:contents>
```

**upLevel - 上级栏目的级别**

切换到上级栏目，1 为上一级栏目，2 为上两级栏目，以此类推。

如果同时设置了 upLevel 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上 N 级栏目。

```html
<!-- 显示当前栏目的上两级栏目的内容列表 -->
<stl:contents upLevel="2">
  <stl:a></stl:a><br />
</stl:contents>
```

**topLevel - 从首页向下的栏目级别**

切换到从首页向下第 N 个级别的栏目，0 代表切换到首页，1 代表一级栏目，2 代表二级栏目，以此类推。

```html
<!-- 显示一级栏目的内容列表 -->
<stl:contents topLevel="1">
  <stl:a></stl:a><br />
</stl:contents>
```

**scope - 范围**

内容范围。此属性只可属于以下可能的取值的一种。

* "self" 只显示本栏目下的所有内容
* "children" 只显示下一极子栏目下的所有内容
* "selfAndChildren" 显示本级栏目及下一极子栏目下的所有内容
* "descendant" 显示所有级别的子栏目下的所有内容
* "all" 显示全部内容

**totalNum - 显示信息总数**

设置列表一共显示多少条信息，默认值为 0，代表显示所有信息

```html
<stl:contents totalNum="7">
  <stl:a></stl:a><br />
</stl:contents>
```

**startNum - 从第几条信息开始显示**

设置列表从第几条信息开始显示，默认值为 1，代表从第一条信息开始显示。

```html
<stl:contents startNum="3" totalNum="7">
  <stl:a></stl:a><br />
</stl:contents>
```

**order - 排序**

内容列表排序方式。此属性只可属于以下可能的取值的一种。

* "default" 默认排序，即内容管理界面中的排序
* "back" 默认排序的相反方向
* "addDate" 按添加时间排序
* "addDateBack" 按添加时间的相反方向排序
* "lastEditDate" 按最后更改时间排序
* "lastEditDateBack" 按最后更改时间的相反方向排序
* "hits" 按点击量排序
* "hitsByDay" 按日点击量排序
* "hitsByWeek" 按周点击量排序
* "hitsByMonth" 按月点击量排序
* "random" 随机显示内容

**where - 条件判断**

获取内容列表的条件判断

**groupChannel - 指定栏目组**

栏目组别，如设置此属性，则只显示指定栏目组别的内容列表。

**groupChannelNot - 排除栏目组**

非栏目组别，如设置此属性，则只显示不等于指定栏目组别的内容列表。

**groupContent - 指定内容组**

内容组别，如设置此属性，则只显示指定内容组别的内容列表。

**groupContentNot - 排除内容组**

非内容组别，如设置此属性，则只显示不等于内容组别的内容列表。

**tags - 指定标签**

仅显示指定标签的内容列表，多个标签用","分隔。

**isTop - 仅显示置顶内容**

是否只显示置顶（非置顶）内容。

* "true" 仅显示置顶的内容。
* "false" 仅显示非置顶的内容。

**isRecommend - 仅显示推荐内容**

是否只显示推荐（非推荐）内容。

* "true" 仅显示推荐的内容
* "false" 仅显示非推荐的内容

**isHot - 仅显示热点内容**

是否只显示热点（非热点）内容。

* "true" 仅显示热点的内容
* "false" 仅显示非热点的内容

**isColor - 仅显示醒目内容**

是否只显示醒目（非醒目）内容。

* "true" 仅显示醒目的内容
* "false" 仅显示非醒目的内容

**isImage - 仅显示图片内容**
是否只显示带有图片（不带图片）的内容。

* "true" 仅显示带有图片的内容
* "false" 仅显示不带图片的内容

**isVideo - 仅显示视频内容**
是否只显示带有视频（不带视频）的内容。

* "true" 仅显示带有视频的内容
* "false" 仅显示不带视频的内容

**isFile - 仅显示附件内容**
是否只显示带有附件（不带附件）的内容。

* "true" 仅显示带有附件的内容
* "false" 仅显示不带附件的内容

**isRelatedContents - 仅显示相关内容**
是否只显示相关内容列表。

* "true" 显示相关内容列表
* "false" 不显示相关内容列表

**layout - 布局**
列表布局属性用于控制列表循环中每一项的显示方式，默认值为 none，即直接循环，不控制列表项显示。

* "none" 列表不使用布局，仅循环列表项，不控制列表项显示。此值是默认的，如果没有指定属性的话。
* "table" 列表使用表格布局，系统将把列表标签解析为 HTML `<table>` 元素，table 标签的所有属性（class、style、cellPadding、cellSpacing 等）均可用在列表标签中。

```html
<stl:contents layout="table" columns="3" width="90%" border="0" cellpadding="2">
    <stl:a><stl:content type="Title"></stl:content></stl:a>
</stl:contents>
```

**columns - 列数**

columns 属性决定要显示的列的数量。比如，如果要在列表中显示四列的项，那么可以把这个属性设为 4。

```html
<stl:contents layout="table" columns="3" width="90%" border="0" cellpadding="2">
    <stl:a><stl:content type="Title"></stl:content></stl:a>
</stl:contents>
```

::: warning
columns 属性只有当列表布局为表格 `layout="table"` 时才起作用。
:::

**direction - 方向**

direction 属性用于确定列表是按水平方向还是或垂直方向来重复。

* "vertical" 垂直
* "horizontal" 水平

如果将此属性设置为 vertical，列表中的项显示在从上到下加载的列中，然后从左到右，直到呈现所有项。例如，如果将 columns 属性设置为 3，列表中的项显示在三列中，如下表所示。

| 1 | 4 | 7 |
|:---:|:---:|:---:|
| 2	| 5	| 8 |
| 3	| 6	| 9 |

如果将此属性设置为 horizontal，列表中的项以从左到右加载的行显示，然后从上到下，直到呈现所有项。例如，如果将 columns 属性设置为 3，列表的项将以每行三项的形式显示，如下表所示。

| 1 | 2 | 3 |
|:---:|:---:|:---:|
| 4 | 5	| 6 |
| 7	| 8	| 9 |

::: tip
即使 direction 值为 vertical，还是显示为 4 个列。columns 永远是指重复的列的数量，而不是行的数量。
:::

::: warning
direction 属性只有当列表布局为表格 `layout="table"` 且设置了列数 columns 时才起作用。
:::

**height - 整体高度**

设置列表的整体高度。

::: warning
height 属性只有当列表布局为表格 `layout="table"` 时才起作用。
:::

**width - 整体宽度**

设置列表的整体宽度。

::: warning
width 属性只有当列表布局为表格 `layout="table"` 时才起作用。
:::

**align - 整体对齐**

设置列表的整体对齐方式。

* "center" 居中对齐。
* "left" 居左对齐。
* "right" 居右对齐。
* "justify" 向页面的左右边缘对齐。
* "notSet" 不设置。此值是默认的，如果没有指定属性的话。

::: warning
align 属性只有当列表布局为表格 `layout="table"` 时才起作用。
:::

**itemHeight - 项高度**

列表中每一项的高度。

::: warning
itemHeight 属性只有当列表布局为表格 `layout="table"` 时才起作用。
:::

**itemWidth - 项宽度**

列表中每一项的宽度。

::: warning
itemWidth 属性只有当列表布局为表格 `layout="table"` 时才起作用。
:::

**itemAlign - 项水平对齐**

列表中每一项的水平对齐方式。

* "center" 居中对齐。
* "left" 居左对齐。
* "right" 居右对齐。
* "justify" 向页面的左右边缘对齐。
* "notSet" 不设置。此值是默认的，如果没有指定属性的话。

::: warning
itemAlign 属性只有当列表布局为表格 `layout="table"` 时才起作用。
:::

**itemVerticalAlign - 项垂直对齐**

列表中每一项的垂直对齐方式。

* "top" 顶端对齐。
* "middle" 居中对齐。
* "bottom" 底端对齐。
* "notSet" 不设置。此值是默认的，如果没有指定属性的话。

::: warning
itemVerticalAlign 属性只有当列表布局为表格 `layout="table"` 时才起作用。
:::

**itemClass - 项Css类**

列表中每一项的Css类名称。

::: warning
itemClass 属性只有当列表布局为表格 `layout="table"` 时才起作用。
:::

### 示例

**列表显示三列**

下面的例子显示的列表列数为三列，并仅显示带图片的内容。

```html
<stl:contents channelIndex="Example" columns="3" isImage="true" width="90%" border="0" cellpadding="2">
    <stl:content type="ImageUrl"></stl:content>
    <stl:a><stl:content type="Title"></stl:content></stl:a>
</stl:contents>
```

解析后的 HTML 代码：

```html
<table cellspacing="0" cellpadding="2" style="border-width:0px;width:90%;border-collapse:collapse;">
  <tbody>
    <tr>
      <td align="left" valign="top">
        <img src="/upload/images/2013/6/t_7164418763.jpg">
        <br>
        <a href="/news/4.html">我是带图片的内容</a>
        <br>
      </td>
      <td align="left" valign="top">
        <img src="/upload/images/2013/6/t_7164446419.jpg">
        <br>
        <a href="/news/3.html">我也是带图片的内容</a>
        <br>
      </td>
      <td align="left" valign="top">
        <img src="/upload/images/2013/6/t_7164446419.jpg">
        <br>
        <a href="/news/2.html">我也是带图片的内容</a>
        <br>
      </td>
    </tr>
    <tr>
      <td align="left" valign="top">
        <img src="/upload/images/2013/6/t_7164418763.jpg">
        <br>
        <a href="/news/1.html">我是带图片的内容</a>
        <br>
      </td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
```

**仅显示带图片的内容列表**

下面的例子显示"新闻"栏目下的带图片的内容列表。

```html
<stl:contents channelIndex="新闻" isImage="true">
	<stl:a><stl:image></stl:image></stl:a>
</stl:contents>
```

解析后的 HTML 代码：

```html
<a href="/news/4.html"><img src="/upload/images/2013/6/t_7164418763.jpg"></a>
<a href="/news/3.html"><img src="/upload/images/2013/6/t_7164446419.jpg"></a>
<a href="/news/2.html"><img src="/upload/images/2013/6/t_7164446419.jpg"></a>
<a href="/news/1.html"><img src="/upload/images/2013/6/t_7164418763.jpg"></a>
```

**显示指定的栏目下的前 7 篇内容列表**

下面的例子显示栏目索引为"starting"的栏目下的所有内容的前 7 篇列表

```html
<stl:contents channelIndex="starting" totalNum="7">
	<stl:a><stl:content type="Title"></stl:content></stl:a>
	<br />
</stl:contents>
```

解析后的 HTML 代码：

```html
<a href="/getting-started/index.html">STL 语言</a>
<br>
<a href="/getting-started/5.html">STL 标签与 STL 实体</a>
<br>
<a href="/getting-started/4.html">STL 模板语言规则</a>
<br>
<a href="/getting-started/3.html">STL 实体说明</a>
<br>
<a href="/getting-started/2.html">STL 分页标签与实现</a>
<br>
<a href="/getting-started/1.html">STL 地址通配符</a>
<br>
```

**显示栏目名称为 STL 标签下的所有内容（含下级栏目）**

显示栏目名称为 STL 标签下的所有内容（含下级栏目），共显示 10 篇。

```html
<stl:contents channelName="STL 标签" totalNum="10" scope="selfAndChildren">
  <stl:a></stl:a><br />
</stl:contents>
```

解析后的 HTML 代码

```html
stl:search 标签用法
<br>
stl:if 标签用法
<br>
stl:action 标签用法
<br>
stl:marquee 标签用法
<br>
stl:count 标签用法
<br>
stl:search 标签示例1
<br>
stl:itemTemplate 标签用法
<br>
stl:if 标签示例（简单）
<br>
stl:file 标签用法
<br>
```
