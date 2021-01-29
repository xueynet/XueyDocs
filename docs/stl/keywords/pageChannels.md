# <stl:pageChannels> 分页栏目列表

```html
<stl:pageChannels
    pageNum="每页显示的栏目数目"
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
</stl:pageChannels>
```

### 说明

通过 `stl:pageChannels` 标签在模板中显示分页栏目列表

`<stl:pageChannels>` 标签需要和STL 标签 `<stl:pageItems>` 及 `<stl:pageItem>` 配合使用。

`<stl:pageChannels>` 标签和 `<stl:channels>` 具有相同的属性，这两个标签的区别在于 `<stl:pageChannels>` 能够分页，且 `<stl:pageChannels>` 标签仅能用在栏目模板中。

通常将STL 标签 `<stl:pageItems>` 及 `<stl:pageItem>` 置于 `<stl:pageChannels>` 标签的下方，代表分页按钮。

`<stl:pageChannels>` 只能在栏目模版中使用，如果需要在其他类型的模版中使用必须将 `<stl:pageChannels>` 标签和对应的 `<stl:pageItems>` 分页标签放到`<stl:dynamic>` 动态标签中，否则 `<stl:pageChannels>` 标签将无法解析。

列表相关介绍请参见列表标签及列表项

`<stl:pageChannels>` 标签对应的实体为`{stl:pageChannels}`。

::: warning
分页列表标签会按分页数生成对应的静态文件，故一个模板中只能有一个分页列表标签。
:::

### 属性

::: tip
所有属于 STL 标签 `<stl:channels>` 的成员均适用于 `<stl:pageChannels>` 标签，所有属于 HTML 标签`<table>`的成员均适用于`<stl:pageChannels>`标签。
:::

| 属性 | 说明 |
|:------|:-----|
| pageNum | 每页显示的栏目数目 |
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

**pageNum - 每页显示的栏目数目**

每一页显示的栏目数目。

**channelIndex - 栏目索引**

栏目索引是一个站点中栏目的标识，具有唯一性。

如果设置了 channelIndex 属性，系统将寻找对应索引的栏目并将上下文切换到此栏目。

```html
<!-- 显示首页下的子栏目列表 -->
<stl:pageChannels channelIndex="首页">
  <stl:a></stl:a><br />
</stl:pageChannels>
```

**channelName - 栏目名称**

栏目名称可以重复，所以应该尽量避免使用栏目名称来切换上下文，但是如果 channelName 与 channelIndex 属性配合使用，系统将首先定位到 channelIndex 索引所在的栏目，之后再寻找此栏目下栏目名称为 channelName 的栏目。

```html
<!-- 显示当前栏目下的名称为“栏目名称”的栏目的子栏目列表 -->
<stl:pageChannels channelName="栏目名称">
  <stl:a></stl:a><br />
</stl:pageChannels>
```

```html
<!-- 显示“栏目索引”下的名称为“栏目名称”的栏目的子栏目列表 -->
<stl:pageChannels channelIndex="栏目索引" channelName="栏目名称">
  <stl:a></stl:a><br />
</stl:pageChannels>
```

**parent - 上级栏目**

将上下文切换到当前栏目的上一级栏目。

* "true" 表示切换到当前栏目的上一级栏目，等价于 upLevel="1"。
* "false" 表示不切换到当前栏目的上一级栏目。

如果同时设置了 parent 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上级栏目。

```html
<!-- 显示当前栏目的上一级栏目的子栏目列表 -->
<stl:pageChannels parent="true">
  <stl:a></stl:a><br />
</stl:pageChannels>
```

**upLevel - 上级栏目的级别**

切换到上级栏目，1 为上一级栏目，2 为上两级栏目，以此类推。

如果同时设置了 upLevel 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上 N 级栏目。

```html
<!-- 显示当前栏目的上两级栏目的子栏目列表 -->
<stl:pageChannels upLevel="2">
  <stl:a></stl:a><br />
</stl:pageChannels>
```

**topLevel - 从首页向下的栏目级别**

切换到从首页向下第 N 个级别的栏目，0 代表切换到首页，1 代表一级栏目，2 代表二级栏目，以此类推。

```html
<!-- 显示一级栏目的子栏目列表 -->
<stl:pageChannels topLevel="1">
  <stl:a></stl:a><br />
</stl:pageChannels>
```

**scope - 范围**

栏目范围，默认为children。此属性只可属于以下可能的取值的一种。

* "children" 只显示下一极子栏目下的所有栏目
* "descendant" 显示所有级别的子栏目下的所有栏目
* "all" 显示全部栏目

**isTotal - 从所有栏目中选择**

是否从所有栏目中选择（包括首页），等价于属性 `scope="all"`

* "true" 从网站的所有栏目中选择合适的栏目进行显示。
* "false" 不从所有栏目总选择。此值是默认的，如果没有指定属性的话。

**isAllChildren - 显示所有级别的子栏目**

是否显示所有级别的子栏目，等价于属性 `scope="descendant"`

* "true" 显示所有级别的子栏目。
* "false" 只显示子栏目，不包括子栏目的子栏目。此值是默认的，如果没有指定属性的话。

**groupChannel - 指定栏目组**

栏目组别，如设置此属性，则只显示栏目组别等于 group 的栏目列表。

**groupChannelNot - 排除栏目组**

非栏目组别，如设置此属性，则只显示栏目组别不等于 group 的栏目列表。

**totalNum - 显示信息总数**

设置列表一共显示多少条信息，默认值为 0，代表显示所有信息。

```html
<stl:pageChannels totalNum="7">
  <stl:a></stl:a><br />
</stl:pageChannels>
```

**startNum - 从第几条信息开始显示**

设置列表从第几条信息开始显示，默认值为 1，代表从第一条信息开始显示。

```html
<stl:pageChannels startNum="3" totalNum="7">
  <stl:a></stl:a><br />
</stl:pageChannels>
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
<stl:pageChannels layout="table" columns="3" width="90%" border="0" cellpadding="2">
    <stl:a><stl:channel type="title"></stl:channel></stl:a>
</stl:pageChannels>
```

**columns - 列数**

columns 属性决定要显示的列的数量。比如，如果要在列表中显示四列的项，那么可以把这个属性设为 4。

```html
<stl:pageChannels layout="table" columns="3" width="90%" border="0" cellpadding="2">
    <stl:a><stl:channel type="title"></stl:channel></stl:a>
</stl:pageChannels>
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

**显示能够分页的栏目列表**

下面的例子显示当前栏目下的所有子栏目的列表，每 10 个栏目翻一页，列表下方显示分页导航。

```html
<stl:pageChannels channelIndex="STL基本标签" pageNum="10" cellpadding="2" cellspacing="2">
    <stl:a></stl:a>
</stl:pageChannels>
<br />
<stl:pageItems>
    <table cellpadding="0" cellspacing="0" width="90%" height="40" align="center">
    <tr><td align="left">
    <stl:pageItem type="FirstPage" text="首页"></stl:pageItem> |
    <stl:pageItem type="PreviousPage" text="上一页"></stl:pageItem> |
    <stl:pageItem type="NextPage" text="下一页"></stl:pageItem> |
    <stl:pageItem type="LastPage" text="末页"></stl:pageItem>
    </td><td align="right">
    <stl:pageItem type="CurrentPageIndex" text="当前页："></stl:pageItem>
    <stl:pageItem type="PageNavigation"></stl:pageItem>
    </td></tr></table>
</stl:pageItems>
```
