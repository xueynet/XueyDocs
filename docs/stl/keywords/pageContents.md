# <stl:pageContents> 分页内容列表

```html
<stl:pageContents
    pageNum="每页显示的内容数目"
    maxPage="最多生成静态页面数目"
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
</stl:pageContents>
```

### 说明

通过 `stl:pageContents` 标签在模板中显示分页内容列表

`<stl:pageContents>` 标签需要和 STL 标签 `<stl:pageItems>` 及 `<stl:pageItem>` 配合使用。

所有属于 STL 标签 `<stl:contents>` 的成员均适用于 `<stl:pageChannels>` 标签。

`<stl:pageContents>` 标签和 `<stl:contents>` 具有相同的属性，这两个标签的区别在于 `<stl:pageContents>` 能够分页，且 `<stl:pageContents>` 标签仅能用在栏目模板中。

通常将 STL 标签 `<stl:pageItems>` 及 `<stl:pageItem>` 置于 `<stl:pageContents>` 标签的下方，代表分页按钮。

`<stl:pageContents>` 只能在栏目模版中使用，如果需要在其他类型的模版中使用必须将 `<stl:pageContents>` 标签和对应的 `<stl:pageItems>` 分页标签放到 `<stl:dynamic>` 动态标签中，否则 `<stl:pageContents>` 标签将无法解析。

列表相关介绍请参见列表标签及列表项

`<stl:pageContents>` 标签对应的实体为`{stl:pageContents}`。

::: warning
分页列表标签会按分页数生成对应的静态文件，故一个模板中只能有一个分页列表标签。
:::

### 属性

::: tip
所有属于 STL 标签 `<stl:contents>` 的成员均适用于 `<stl:pageContents>` 标签，所有属于 HTML 标签`<table>`的成员均适用于`<stl:pageContents>`标签。
:::

| 属性 | 说明 |
|:------|:-----|
| pageNum | 每页显示的内容数目 |
| maxPage | 最多生成静态页面数目 |
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

**pageNum - 每页显示的内容数目**

每一页显示的内容数目。

**maxPage - 最多生成静态页面数目**

分页中生成的静态页面最大数，剩余页面将动态获取。

如果分页超过一定数量建议设置maxPage属性，以便加快生成速度。

**channelIndex - 栏目索引**

栏目索引是一个站点中栏目的标识，具有唯一性。

如果设置了 channelIndex 属性，系统将寻找对应索引的栏目并将上下文切换到此栏目。

```html
<!-- 显示首页的内容列表 -->
<pageContents channelIndex="首页">
  <stl:a></stl:a><br />
</pageContents>
```

**channelName - 栏目名称**

栏目名称可以重复，所以应该尽量避免使用栏目名称来切换上下文，但是如果 channelName 与 channelIndex 属性配合使用，系统将首先定位到 channelIndex 索引所在的栏目，之后再寻找此栏目下栏目名称为 channelName 的栏目。

```html
<!-- 显示当前栏目下的名称为“栏目名称”的栏目的内容列表 -->
<pageContents channelName="栏目名称">
  <stl:a></stl:a><br />
</pageContents>
```

```html
<!-- 显示“栏目索引”下的名称为“栏目名称”的栏目的内容列表 -->
<pageContents channelIndex="栏目索引" channelName="栏目名称">
  <stl:a></stl:a><br />
</pageContents>
```

**parent - 上级栏目**

将上下文切换到当前栏目的上一级栏目。

* "true" 表示切换到当前栏目的上一级栏目，等价于 upLevel="1"。
* "false" 表示不切换到当前栏目的上一级栏目。

如果同时设置了 parent 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上级栏目。

```html
<!-- 显示当前栏目的上一级栏目的内容列表 -->
<pageContents parent="true">
  <stl:a></stl:a><br />
</pageContents>
```

**upLevel - 上级栏目的级别**

切换到上级栏目，1 为上一级栏目，2 为上两级栏目，以此类推。

如果同时设置了 upLevel 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上 N 级栏目。

```html
<!-- 显示当前栏目的上两级栏目的内容列表 -->
<pageContents upLevel="2">
  <stl:a></stl:a><br />
</pageContents>
```

**topLevel - 从首页向下的栏目级别**

切换到从首页向下第 N 个级别的栏目，0 代表切换到首页，1 代表一级栏目，2 代表二级栏目，以此类推。

```html
<!-- 显示一级栏目的内容列表 -->
<pageContents topLevel="1">
  <stl:a></stl:a><br />
</pageContents>
```

**scope - 范围**

内容范围。此属性只可属于以下可能的取值的一种。

* "self" 只显示本栏目下的所有内容
* "children" 只显示下一极子栏目下的所有内容
* "selfAndChildren" 显示本级栏目及下一极子栏目下的所有内容
* "descendant" 显示所有级别的子栏目下的所有内容
* "all" 显示全部内容

**totalNum - 显示信息总数**

设置列表一共显示多少条信息，默认值为 0，代表显示所有信息。

```html
<pageContents totalNum="7">
  <stl:a></stl:a><br />
</pageContents>
```

**startNum - 从第几条信息开始显示**

设置列表从第几条信息开始显示，默认值为 1，代表从第一条信息开始显示。

```html
<pageContents startNum="3" totalNum="7">
  <stl:a></stl:a><br />
</pageContents>
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
<pageContents layout="table" columns="3" width="90%" border="0" cellpadding="2">
    <stl:a><stl:content type="Title"></stl:content></stl:a>
</pageContents>
```

**columns - 列数**

columns 属性决定要显示的列的数量。比如，如果要在列表中显示四列的项，那么可以把这个属性设为 4。

```html
<pageContents layout="table" columns="3" width="90%" border="0" cellpadding="2">
    <stl:a><stl:content type="Title"></stl:content></stl:a>
</pageContents>
```

::: warning
columns 属性只有当列表布局为表格 layout="table" 时才起作用。
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

**显示能够分页的内容列表**

下面的例子显示当前栏目下的所有内容的列表，列表下方显示分页导航。

```html
<stl:pageContents channelIndex="新闻" pageNum="20" cellpadding="2" cellspacing="2">
    <stl:a target="_blank"></stl:a> <stl:content type="AddDate"></stl:content>
</stl:pageContents>
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
