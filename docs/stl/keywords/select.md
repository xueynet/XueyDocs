# <stl:select> 下拉列表

```html
<stl:select
    isChannel="显示栏目下拉列表"
    channelIndex="栏目索引"
    channelName="栏目名称"
    parent="上级栏目"
    upLevel="上级栏目的级别"
    topLevel="从首页向下的栏目级别"
    context="上下文"
    scope="选择的范围"
    groupChannel="指定栏目组"
    groupChannelNot="排除栏目组"
    groupContent="指定内容组"
    groupContentNot="排除内容组"
    tags="指定标签"
    order="排序"
    totalNum="显示数目"
    titleWordNum="标题文字数量"
    where="条件判断"
    queryString="链接参数"
    isTop="仅显示置顶内容"
    isRecommend="仅显示推荐内容"
    isHot="仅显示热点内容"
    isColor="仅显示醒目内容"
    title="下拉列表提示标题"
    openWin="新窗口打开链接">
</stl:select>
```

### 说明

通过 `stl:select` 标签在模板中显示栏目或内容下拉列表

`stl:select` 用于显示由栏目或内容标题组成的下拉列表，选择下拉列表中的项后页面转到对应的页面。

所有属于 HTML 标签 `<select>` 的成员均适用于 `<stl:select>` 标签。

title 属性代表下拉列表中的第一项，如果未设置此属性，第一项为内容列表第一项的标题。

如果设置了 channelIndex 属性，系统将寻找对应此栏目索引的栏目并显示此栏目的内容列表。 如果设置了 channelName 属性，系统将寻找对应此栏目名称的栏目并显示此栏目的内容列表。

`<stl:select>` 标签对应的实体为`{stl:select}`。

### 属性

::: tip
所有属于 HTML 标签`<select>`的属性均适用于`<stl:select>`标签。
:::
