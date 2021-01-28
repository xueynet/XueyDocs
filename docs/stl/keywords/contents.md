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
