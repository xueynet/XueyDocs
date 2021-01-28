# <stl:pageContents> 翻页内容列表

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

通过 `stl:pageContents` 标签在模板中显示翻页内容列表

`<stl:pageContents>` 标签需要和 STL 标签 `<stl:pageItems>` 及 `<stl:pageItem>` 配合使用。

所有属于 STL 标签 `<stl:contents>` 的成员均适用于 `<stl:pageChannels>` 标签。

`<stl:pageContents>` 标签和 `<stl:contents>` 具有相同的属性，这两个标签的区别在于 `<stl:pageContents>` 能够翻页，且 `<stl:pageContents>` 标签仅能用在栏目模板中。

通常将 STL 标签 `<stl:pageItems>` 及 `<stl:pageItem>` 置于 `<stl:pageContents>` 标签的下方，代表翻页按钮。

`<stl:pageContents>` 只能在栏目模版中使用，如果需要在其他类型的模版中使用必须将 `<stl:pageContents>` 标签和对应的 `<stl:pageItems>` 翻页标签放到 `<stl:dynamic>` 动态标签中，否则 `<stl:pageContents>` 标签将无法解析。

列表相关介绍请参见列表标签及列表项

`<stl:pageContents>` 标签对应的实体为`{stl:pageContents}`。

::: warning
翻页列表标签会按分页数生成对应的静态文件，故一个模板中只能有一个翻页列表标签。
:::

### 属性

::: tip
所有属于 STL 标签 `<stl:contents>` 的成员均适用于 `<stl:pageContents>` 标签，所有属于 HTML 标签`<table>`的成员均适用于`<stl:pageContents>`标签。
:::
