# <stl:channels> 栏目列表

```html
<stl:channels
    isTotal="从所有栏目中选择"
    isAllChildren="显示所有级别的子栏目"
    channelIndex="栏目索引"
    channelName="栏目名称"
    parent="上级栏目"
    upLevel="上级栏目的级别"
    topLevel="从首页向下的栏目级别"
    scope="范围"
    groupChannel="指定栏目组"
    groupChannelNot="排除栏目组"
    totalNum="显示信息总数"
    startNum="从第几条信息开始显示"
    order="排序"
    where="条件判断"
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
</stl:channels>
```

### 说明

通过 `stl:channels` 标签在模板中显示栏目列表。

`<stl:channels>` 元素默认显示当前栏目的下级栏目列表，如果希望显示指定栏目的子栏目，请设置 上下文切换 属性。

如果需要将 `<stl:channels>` 元素解析为 HTML `<table>`标签，或者需要对列表循环项进行处理，请设置列表属性或标签 控制列表显示。

`<stl:channels>` 元素默认显示下一级栏目的列表，如果希望显示所有的下级栏目（包括子栏目和子子栏目），请设置属性 `isAllChildren`为 `true`。

可以通过 `groupChannel` 属性及 `groupChannelNot` 属性筛选出特定的栏目并进行显示。

### 解析

如果使用 `<stl:channels>` 元素，系统将对嵌套的标签进行解析并返回嵌套标签的循环列表。

如果使用 `{stl:channels}` 实体，系统将实体解析为栏目列表的JSON对象数组。

### 属性

::: tip
所有属于 HTML 标签`<table>`的成员均适用于`<stl:channels>`标签。
:::

| 属性 | 说明 |
|:-----|:-----|
| channelIndex | 栏目索引 |
| channelName | 栏目名称 |
| parent | 上级栏目 |
| upLevel | 上级栏目的级别 |
| topLevel | 从首页向下的栏目级别 |
| scope | 范围 |
| isTotal | 从所有栏目中选择 |
| isAllChildren | 显示所有级别的子栏目 |
| groupChannel | 指定栏目组 |
| groupChannelNot | 排除栏目组 |
| totalNum | 显示信息总数 |
| startNum | 从第几条信息开始显示 |
| order | 排序 |
| where | 条件判断 |
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
<!-- 显示首页下的子栏目列表 -->
<stl:channels channelIndex="首页">
  <stl:a></stl:a><br />
</stl:channels>
```

**channelName - 栏目名称**

栏目名称可以重复，所以应该尽量避免使用栏目名称来切换上下文，但是如果 channelName 与 channelIndex 属性配合使用，系统将首先定位到 channelIndex 索引所在的栏目，之后再寻找此栏目下栏目名称为 channelName 的栏目。

```html
<!-- 显示当前栏目下的名称为“栏目名称”的栏目的子栏目列表 -->
<stl:channels channelName="栏目名称">
  <stl:a></stl:a><br />
</stl:channels>
```

```html
<!-- 显示“栏目索引”下的名称为“栏目名称”的栏目的子栏目列表 -->
<stl:channels channelIndex="栏目索引" channelName="栏目名称">
  <stl:a></stl:a><br />
</stl:channels>
```

**parent - 上级栏目**

将上下文切换到当前栏目的上一级栏目。

* "true" 表示切换到当前栏目的上一级栏目，等价于 upLevel="1"。
* "false" 表示不切换到当前栏目的上一级栏目。

如果同时设置了 parent 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上级栏目。

```html
<!-- 显示当前栏目的上一级栏目的子栏目列表 -->
<stl:channels parent="true">
  <stl:a></stl:a><br />
</stl:channels>
```

**upLevel - 上级栏目的级别**

切换到上级栏目，1 为上一级栏目，2 为上两级栏目，以此类推。

如果同时设置了 upLevel 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上 N 级栏目。

```html
<!-- 显示当前栏目的上两级栏目的子栏目列表 -->
<stl:channels upLevel="2">
  <stl:a></stl:a><br />
</stl:channels>
```

**topLevel - 从首页向下的栏目级别**

切换到从首页向下第 N 个级别的栏目，0 代表切换到首页，1 代表一级栏目，2 代表二级栏目，以此类推。

```html
<!-- 显示一级栏目的子栏目列表 -->
<stl:channels topLevel="1">
  <stl:a></stl:a><br />
</stl:channels>
```

**scope - 范围**

栏目范围，默认为Children。此属性只可属于以下可能的取值的一种。

* "Self"  只显示自身
* "Children" 只显示下一极子栏目下的所有栏目
* "SelfAndChildren" 包括自身和下级栏目
* "Descendant" 显示所有级别的子栏目下的所有栏目
* "All" 显示全部栏目

**isTotal - 从所有栏目中选择**

是否从所有栏目中选择（包括首页），等价于属性 scope="all"

* "true" 从网站的所有栏目中选择合适的栏目进行显示。
* "false" 不从所有栏目总选择。此值是默认的，如果没有指定属性的话。

**isAllChildren - 显示所有级别的子栏目**

是否显示所有级别的子栏目，等价于属性 scope="descendant"

* "true" 显示所有级别的子栏目。
* "false" 只显示子栏目，不包括子栏目的子栏目。此值是默认的，如果没有指定属性的话。

**groupChannel - 指定栏目组**

栏目组别，如设置此属性，则只显示栏目组别等于 group 的栏目列表。

**groupChannelNot - 排除栏目组**

非栏目组别，如设置此属性，则只显示栏目组别不等于 group 的栏目列表。

**totalNum - 显示信息总数**

设置列表一共显示多少条信息，默认值为 0，代表显示所有信息。

```html
<stl:channels totalNum="7">
  <stl:a></stl:a><br />
</stl:channels>
```

**startNum - 从第几条信息开始显示**

设置列表从第几条信息开始显示，默认值为 1，代表从第一条信息开始显示。

```html
<stl:channels startNum="3" totalNum="7">
  <stl:a></stl:a><br />
</stl:channels>
```

**order - 排序**

栏目列表排序方式。此属性只可属于以下可能的取值的一种。

* "default" 默认排序，即栏目管理界面中的排序。此值是默认的，如果没有指定属性的话。
* "back" 默认排序的相反方向。
* "addDate" 按添加时间排序。
* "addDateBack" 按添加时间的相反方向排序。
* "hits" 按点击量排序。
* "random" 随机显示栏目。

**where - 条件判断**

获取栏目列表的条件判断

**layout - 布局**

列表布局属性用于控制列表循环中每一项的显示方式，默认值为 none，即直接循环，不控制列表项显示。

* "none" 列表不使用布局，仅循环列表项，不控制列表项显示。此值是默认的，如果没有指定属性的话。
* "table" 列表使用表格布局，系统将把列表标签解析为 HTML `<table>` 元素，table 标签的所有属性（class、style、cellPadding、cellSpacing 等）均可用在列表标签中。

```html
<stl:channels layout="table" columns="3" width="90%" border="0" cellpadding="2">
    <stl:a><stl:channel type="title"></stl:channel></stl:a>
</stl:channels>
```

**columns - 列数**

columns 属性决定要显示的列的数量。比如，如果要在列表中显示四列的项，那么可以把这个属性设为 4。

```html
<stl:channels layout="table" columns="3" width="90%" border="0" cellpadding="2">
    <stl:a><stl:channel type="title"></stl:channel></stl:a>
</stl:channels>
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

**显示指定栏目的子栏目名称列表**

下面的例子显示栏目“首页”的所有子栏目名称。

```html
<stl:channels channelIndex="首页">
  <stl:channel type="Title"></stl:channel><br>
</stl:channels>
```

解析后的 HTML 代码：

```html
  关于我们<br>
  新闻<br>
  人才招聘<br>
  互动交流<br>
  信息公开<br>
```

**在栏目列表中显示栏目名称以及内容数**

下面的例子显示上级栏目的所有子栏目名称列表，并在名称后显示对应的内容数

```html
<stl:channels upLevel="1">
  <stl:channel type="Title"></stl:channel>(<stl:channel type="CountOfContents"></stl:channel>)<br>
</stl:channels>
```

解析后的 HTML 代码：

```html
  stl:channels 栏目列表(3)<br>
  stl:channel 获取栏目值(3)<br>
```
