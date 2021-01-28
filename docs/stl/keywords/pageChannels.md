# <stl:pageChannels> 翻页栏目列表

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

通过 `stl:pageChannels` 标签在模板中显示翻页栏目列表

`<stl:pageChannels>` 标签需要和STL 标签 `<stl:pageItems>` 及 `<stl:pageItem>` 配合使用。

`<stl:pageChannels>` 标签和 `<stl:channels>` 具有相同的属性，这两个标签的区别在于 `<stl:pageChannels>` 能够翻页，且 `<stl:pageChannels>` 标签仅能用在栏目模板中。

通常将STL 标签 `<stl:pageItems>` 及 `<stl:pageItem>` 置于 `<stl:pageChannels>` 标签的下方，代表翻页按钮。

`<stl:pageChannels>` 只能在栏目模版中使用，如果需要在其他类型的模版中使用必须将 `<stl:pageChannels>` 标签和对应的 `<stl:pageItems>` 翻页标签放到`<stl:dynamic>` 动态标签中，否则 `<stl:pageChannels>` 标签将无法解析。

列表相关介绍请参见列表标签及列表项

`<stl:pageChannels>` 标签对应的实体为`{stl:pageChannels}`。

::: warning
翻页列表标签会按分页数生成对应的静态文件，故一个模板中只能有一个翻页列表标签。
:::

### 属性

::: tip
所有属于 STL 标签 `<stl:channels>` 的成员均适用于 `<stl:pageChannels>` 标签，所有属于 HTML 标签`<table>`的成员均适用于`<stl:pageChannels>`标签。
:::
