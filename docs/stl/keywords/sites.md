# <stl:sites> 站点列表(站群)

```html
<stl:sites
    siteName="站点名称"
    siteDir="站点文件夹"
    scope="站点范围"
    totalNum="显示站点数目"
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
</stl:sites>
```

### 说明

通过 `stl:sites` 标签在模板中显示站点列表

标签 `<stl:sites>` 用于显示站群中的站点，如果定义siteName或siteDir属性，系统将从对应站点的子站点中选择，否则系统将从所有站点中选择。

`<stl:sites>` 必须包含子标签，否则将不起作用，系统将找到对应的站点并在对应站点下解析子标签。子标签可以是任意STL标签或HTML标签。

属性 order 用于站点列表排序：

* order 不设置或设置为"Default"，站点列表将与CMS后台中站点的显示排序一致。
* order 设置为"Contents"，站点将根据内容数的多少进行排序，如果同时设置since属性，系统将根据对应时间段内添加的内容数量进行排序。
* order 设置为"Hits"，站点将根据页面点击量的多少进行排序，如果同时设置since属性，系统将根据对应时间段内页面浏览量的数量进行排序。

`<stl:sites>` 标签对应的实体为`{stl:sites}`。

### 属性

::: tip
所有属于 HTML 标签`<table>`的成员均适用于`<stl:sites>`标签。
:::

| 属性 | 说明 |
|:------|:-----|
| siteName | 站点名称 |
| siteDir | 站点文件夹 |
| scope | 站点范围 |
| totalNum | 显示站点数目 |
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

**siteName - 站点名称**

如果设置了 siteName 站点名称属性，标签将只显示此站点的下级站点列表。

**siteDir - 站点文件夹**

如果设置了 siteDir 站点文件夹属性，标签将只显示此站点的下级站点列表。

**scope - 站点范围**

此属性只可属于以下可能的取值的一种。

* "children" 显示下级站点的列表
* "descendant" 显示下级及下下级站点的列表
* "all" 显示所有站点的列表

**totalNum - 显示站点数目**

设置列表一共显示多少条信息，默认值为 0，代表显示所有信息。

```html
<stl:sites totalNum="7">
  <stl:site type="siteName"></stl:site><br />
</stl:sites>
```

**startNum - 从第几条信息开始显示**

设置列表从第几条信息开始显示，默认值为 1，代表从第一条信息开始显示。

```html
<stl:sites startNum="3" totalNum="7">
  <stl:site type="siteName"></stl:site><br />
</stl:sites>
```

**order - 排序**

站点列表排序方式。

* "default" 默认排序，显示与 CMS 后台站点相同的排序
* "contents" 按站点中内容数进行排序
* "hits" 按站点中页面的点击量进行排序

**where - 条件判断**

获取站点列表的条件判断。

**layout - 布局**

列表布局属性用于控制列表循环中每一项的显示方式，默认值为 none，即直接循环，不控制列表项显示。

* "none" 列表不使用布局，仅循环列表项，不控制列表项显示。此值是默认的，如果没有指定属性的话。
* "table" 列表使用表格布局，系统将把列表标签解析为 HTML` <table>` 元素，table 标签的所有属性（class、style、cellPadding、cellSpacing 等）均可用在列表标签中。

```html
<stl:sites layout="table" columns="3" width="90%" border="0" cellpadding="2">
    <stl:site type="siteName"></stl:site>
</stl:sites>
```

**columns - 列数**

columns 属性决定要显示的列的数量。比如，如果要在列表中显示四列的项，那么可以把这个属性设为 4。

```html
<stl:sites layout="table" columns="4" width="90%" border="0" cellpadding="2">
    <stl:site type="siteName"></stl:site>
</stl:sites>
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

**显示当前站点的下级站点列表**

下面的例子显示当前站点的下级站点列表。

```html
<stl:sites>
    <li><stl:site type="siteName"></stl:site></li>
</stl:sites>
```
