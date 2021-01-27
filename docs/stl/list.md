# 列表循环

在页面中循环显示列表数据是频繁使用的功能，如获取某个栏目下的内容列表，或者在导航栏显示栏目列表等等。

主要的列表循环标签有以下几种：

| 列表标签 | 说明 |
|:--------|:--------|
| `stl:contents` | 内容列表 |
| `stl:pageContents` | 分页内容列表 |
| `stl:channels` | 栏目列表 |
| `stl:pageChannels` | 分页栏目列表 |
| `stl:sites` | 站点列表 |
| `stl:each` | 字段遍历列表 |
| `stl:sqlContents` | 数据库列表 |
| `stl:pageSqlContents` | 分页数据库列表 |

### 元素与实体

列表标签使用元素的写法时，标签内必须嵌套 HTML 或者 STL 标签，列表标签会逐项解析嵌套的标签并循环显示，如果列表标签内没有嵌套内容，系统将忽略此标签。例如`<stl:contents></stl:contents>`是无效的。

列表标签使用实体的写法时，标签将解析为JSON数组，数组内的项为列表项的JSON对象，例如：

```js
var arr = {stl:contents};
```

解析后的代码为：

```js
var arr = [{"id":10935,"channelId":1746,"siteId":1739,"addUserName":"admin","lastEditUserName":"admin","writingUserName":"","lastEditDate":"2018-06-13 12:27:00","taxis":6,"groupNameCollection":"","tags":"","sourceId":0,"referenceId":0,"isChecked":"True","checkedLevel":1,"hits":28,"hitsByDay":1,"hitsByWeek":28,"hitsByMonth":28,"lastHitsDate":"2018-06-14 00:00:00","settingsXml":"titleformatstring=False_False_False_&translatecontenttype=Copy","title":"第九届国际发明展览会爱登堡电梯集团荣获 “发明创业&#8226;项目奖”","isTop":"False","isRecommend":"False","isHot":"False","isColor":"False","linkUrl":"","addDate":"2015-09-30 13:52:00","subTitle":"","imageUrl":"","videoUrl":"","fileUrl":"","content":"<div>近日，第九届国际发明展览会在昆山国际会展中心圆满落幕。作为我国发明创新领域对外开放的重要窗口、创新思想交流和发明成果产业化的重要平台，国际发明展览会自1988年创办以来，在国内外发明界、产业界产生了广泛影响。在上千个参展的创新发明项目中，爱登堡电梯集团荣获三项“发明创业•项目奖”。</div><div>电梯研发部<br/>一种用于高速电梯钢丝绳补偿及涨紧装置<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 本发明研究轿厢、对重各使用一部分缓冲器时的布置情况，并确保电梯运行过程中补偿绳不对轿厢及对重产生偏载力。高速电梯钢丝绳补偿及涨紧装置的研发对整个曳引式电梯市场补偿绳系统设计具有重大意义。按照国家质检要求，2m/s以上的曳引式电梯均应安装此产品，故钢丝绳补偿及涨紧装置具有较大的市场，能够产生一定的生产效益和社会效益。</div><div>扶梯研发部<br/>一种具有安全隔离控制柜的自动扶梯<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 本发明目的在于解决自动扶梯的客户电源布置不合理的问题，提供一种采用客户电源与控制柜一体式布置，内部隔离技术的安全隔离型主控制柜的自动扶梯。本项目在2009年初设计完成，同年首次使用在“辽宁省沈阳市鞍山西柳中国商贸城”项目上，完成了本系统的初次试验并取得成功。同年申请发明专利。现在依然成功的应用在我司所有项目共计2055台自动扶梯上，并取得“零”触电事故的安全效果。该发明有效地提高了企业在行业内的竞争优势，也符合国家对安全扶梯的倡导，具有积极推广的意义。</div><div>车库研发部<br/>多台共柱安装的双层倾斜式停车装置（停车宝）<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 本项目的研究主要降低了对建筑空间层高和柱网间距的要求，实现了在较低的空间内双层停车，实现了多车位连续、多台共柱安装，大大提升了停车空间利用率。俯仰式简易升降布置灵活，规模大到上百车位，小到几个车位，外观漂亮、结构简单。<br/>实用性：<br/>1、此产品能广泛应用在层高仅为2800mm的空间，比原3600mm的层高要求降低了800mm，应用范围更广；<br/>2、此产品多台共柱，减少了并排安装时立柱之间预留空间的需求，相同空间可增加更多停车位，提高停车空间利用率。</div><p><br/></p>","summary":"","author":"","source":"","titleformatstring":"False_False_False_","translatecontenttype":"Copy","navigationUrl":"/test19/contents/1746/10935.html"}];
```

列表标签可以通过设置属性来控制所有列表项的显示方式，同时列表标签还可以通过`<stl:itemTemplate>` 子元素控制具体某一项的显示方式，下面依次加以说明。

### 通过属性控制列表

**totalNum 一共显示多少项**

设置列表一共显示多少条信息，默认值为 0，代表显示所有信息。

```html
<stl:contents totalNum="7">
  <stl:a></stl:a><br />
</stl:contents>
```

**startNum 从第几项开始显示**

设置列表从第几条信息开始显示，默认值为 1，代表从第一条信息开始显示。

```html
<stl:contents startNum="3" totalNum="7">
  <stl:a></stl:a><br />
</stl:contents>
```

**pageNum 每页显示多少项**

设置分页列表每一页显示的列表项数目，默认值为 25。

此属性仅针对分页列表标签起作用： `stl:pageContents`、`stl:pageChannels` 及 `stl:pageSqlContents` 。

```html
<stl:pageContents pageNum="20">
    <stl:a target="_blank"></stl:a><br />
</stl:pageContents>
```

**maxPage 最多显示多少页**

设置分页列表最多显示多少页，默认值为 0，代表不控制显示页数。

此属性在列表分页特别多的时候可以用来控制总页数，比如只列出前30页的内容，从而提高生成页面速度。

此属性仅针对分页列表标签起作用： `stl:pageContents`、`stl:pageChannels` 及 `stl:pageSqlContents` 。

```html
<stl:pageContents pageNum="20" maxPage="100">
    <stl:a target="_blank"></stl:a><br />
</stl:pageContents>
```

**layout 列表布局**

列表布局属性用于控制列表循环中每一项的显示方式，默认值为 none，即直接循环，不控制列表项显示。

* "none" 列表不使用布局，仅循环列表项，不控制列表项显示。此值是默认的，如果没有指定属性的话。
* "table" 列表使用表格布局，系统将把列表标签解析为 HTML `<table>` 元素，table 标签的所有属性（class、style、cellPadding、cellSpacing等）均可用在列表标签中。

```html
<stl:contents layout="table" columns="3" width="90%" border="0" cellpadding="2">
    <stl:a><stl:content type="Title"></stl:content></stl:a>
</stl:contents>
```

**columns 列数**

columns 属性决定要显示的列的数量。比如，如果要在列表中显示四列的项，那么可以把这个属性设为4。

```html
<stl:contents layout="table" columns="3" width="90%" border="0" cellpadding="2">
    <stl:a><stl:content type="Title"></stl:content></stl:a>
</stl:contents>
```

::: warning
columns 属性只有当列表布局为表格 `layout="table"` 时才起作用。
::: 

**direction 方向**

direction属性用于确定列表是按水平方向还是或垂直方向来重复。

* "vertical" 垂直
* "horizontal" 水平

如果将此属性设置为vertical，列表中的项显示在从上到下加载的列中，然后从左到右，直到呈现所有项。例如，如果将columns属性设置为3，列表中的项显示在三列中，如下表所示。

| 1 | 4 | 7 |
|---|---|---|
| 2 | 5 | 8 |
| 3 | 6 | 9 |

如果将此属性设置为horizontal，列表中的项以从左到右加载的行显示，然后从上到下，直到呈现所有项。例如，如果将columns属性设置为3，列表的项将以每行三项的形式显示，如下表所示。

| 1 | 2 | 3 |
|---|---|---|
| 4 | 5 | 6 |
| 7 | 8 | 9 |

::: tip
即使 direction 值为 vertical，还是显示为 4 个列。columns 永远是指重复的列的数量，而不是行的数量。
:::

::: warning
irection 属性只有当列表布局为表格 layout="table" 且设置了列数 columns 时才起作用。
:::

**height - 整体高度**

设置列表的整体高度。

::: warning
height 属性只有当列表布局为表格 layout="table" 时才起作用。
:::

**width - 整体宽度**

设置列表的整体宽度。

::: warning
width 属性只有当列表布局为表格 layout="table" 时才起作用。
:::

**align - 整体对齐**

设置列表的整体对齐方式。

* "center" 居中对齐。
* "left" 居左对齐。
* "right" 居右对齐。
* "justify" 向页面的左右边缘对齐。
* "notSet" 不设置。此值是默认的，如果没有指定属性的话。

::: warning
align 属性只有当列表布局为表格 layout="table" 时才起作用。
:::

**itemHeight - 项高度**

列表中每一项的高度。

::: warning
itemHeight 属性只有当列表布局为表格 `layout="table"` 时才起作用。
:::

**itemWidth 项宽度**

列表中每一项的宽度。

::: warning
itemWidth 属性只有当列表布局为表格 layout="table" 时才起作用。
:::

**itemAlign 项水平对齐**

列表中每一项的水平对齐方式。

* "center" 居中对齐。
* "left" 居左对齐。
* "right" 居右对齐。
* "justify" 向页面的左右边缘对齐。
* "notSet" 不设置。此值是默认的，如果没有指定属性的话。

::: warning
itemAlign 属性只有当列表布局为表格 `layout="table"` 时才起作用。
:::

**itemVerticalAlign 项垂直对齐**

列表中每一项的垂直对齐方式。

* "top" 顶端对齐。
* "middle" 居中对齐。
* "bottom" 底端对齐。
* "notSet" 不设置。此值是默认的，如果没有指定属性的话。

::: warning
itemVerticalAlign 属性只有当列表布局为表格 layout="table" 时才起作用。
:::

**itemClass 项Css类**

列表中每一项的 Css 类

::: warning
itemClass 属性只有当列表布局为表格 layout="table" 时才起作用。
:::

### 通过列表子元素项控制列表

在列表标签中设置属性可以控制列表中每一项的显示方式，但如果我们需要控制列表中具体某一项的显示方式，就要用到`<itemTemplate>` 列表项子元素标签了。请参考：`<stl:itemTemplate>` 列表项元素。

下面的例子显示的内容列表采用不同的颜色交替显示。

```html
<stl:contents>
    <stl:itemTemplate type="Item">
        <stl:a><stl:content type="Title"></stl:content></stl:a><br />
    </stl:itemTemplate>
    <stl:itemTemplate type="AlternatingItem">
        <stl:a style="color:red"><stl:content type="Title"></stl:content></stl:a> <br />
    </stl:itemTemplate>
</stl:contents>
```
