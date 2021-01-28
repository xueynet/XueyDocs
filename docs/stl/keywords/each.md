# <stl:each> 列表项循环

```html
<stl:each
    type="循环类型"
    totalNum="显示信息总数"
    startNum="从第几条信息开始显示"
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
</stl:each>
```

### 说明

通过 `stl:each` 标签在模板中遍历指定的列表项

type类型为ImageUrl时，`stl:each`的子标签需要包含`stl:image`标签，以显示图片项。

type类型为VideoUrl时，`stl:each`的子标签需要包含`stl:player`标签或者`stl:video`标签，以显示视频项。

type类型为FileUrl时，`stl:each`的子标签需要包含`stl:file`标签，以显示附件项。

`<stl:each>` 标签可以作为 `<stl:contents>` 标签的子标签,也可以放在内容模板中.

`<stl:each>` 标签对应的实体为`{stl:each}`。

### 属性

| 属性 | 说明 |
|:-----|:-----|
| type	| 循环类型 |
| totalNum	| 显示信息总数 |
| startNum	| 从第几条信息开始显示 |
| layout	| 布局 |
| columns	| 列数 |
| direction	| 方向 |
| height	| 整体高度 |
| width	| 整体宽度 |
| align	| 整体对齐 |
| itemHeight	| 项高度 |
| itemWidth	| 项宽度 |
| itemAlign	| 项水平对齐 |
| itemVerticalAlign	| 项垂直对齐 |
| itemClass	| 项Css类 |

**type - 循环类型**

列表循环的类型

* "imageUrl" 遍历内容的图片字段
* "videoUrl" 遍历内容的视频字段
* "fileUrl" 遍历内容的附件字段
* 其他对应字段的字段名

**totalNum - 显示信息总数**

设置列表一共显示多少条信息，默认值为 0，代表显示所有信息。

```html
<stl:each totalNum="7">
  <stl:a></stl:a><br />
</stl:each>
```

**startNum - 从第几条信息开始显示**

设置列表从第几条信息开始显示，默认值为 1，代表从第一条信息开始显示。

```html
<stl:each startNum="3" totalNum="7">
  <stl:a></stl:a><br />
</stl:each>
```

**layout - 布局**

列表布局属性用于控制列表循环中每一项的显示方式，默认值为 none，即直接循环，不控制列表项显示。

* "none" 列表不使用布局，仅循环列表项，不控制列表项显示。此值是默认的，如果没有指定属性的话。
* "table" 列表使用表格布局，系统将把列表标签解析为 HTML `<table>` 元素，table 标签的所有属性（class、style、cellPadding、cellSpacing 等）均可用在列表标签中。

```html
<stl:each layout="table" columns="3" width="90%" border="0" cellpadding="2">
    <stl:a><stl:content type="Title"></stl:content></stl:a>
</stl:each>
```

**columns - 列数**

columns 属性决定要显示的列的数量。比如，如果要在列表中显示四列的项，那么可以把这个属性设为 4。

```html
<stl:each layout="table" columns="3" width="90%" border="0" cellpadding="2">
    <stl:a><stl:content type="Title"></stl:content></stl:a>
</stl:each>
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

**在内容页面显示图片字段的图片列表**

下面的例子显示内容的图片字段列表

```html
<stl:each type="imageUrl">
    <stl:image></stl:image>
    <hr />
</stl:each>
```

解析后的 HTML 代码：

```html
<img src="/upload/images/2017/5/3152235206.jpg">
<hr>
<img src="/upload/images/2017/5/315224668.jpg">
<hr>
<img src="/upload/images/2017/5/3152255636.jpg">
<hr>
<img src="/upload/images/2017/5/315235662.jpg">
<hr>
```
