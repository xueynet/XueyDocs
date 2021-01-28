# <stl:focusViewer> 滚动焦点图

```html
<stl:focusViewer
    channelIndex="栏目索引"
    channelName="栏目名称"
    scope="选择的范围"
    groupChannel="指定栏目组"
    groupChannelNot="排除栏目组"
    groupContent="指定内容组"
    groupContentNot="排除内容组"
    tags="指定标签"
    order="排序"
    startNum="从第几条信息开始显示"
    totalNum="显示数目"
    titleWordNum="标题文字数量"
    where="条件判断"
    isTop="仅显示置顶内容"
    isRecommend="仅显示推荐内容"
    isHot="仅显示热点内容"
    isColor="仅显示醒目内容"
    theme="显示样式"
    width="宽度"
    height="高度"
    bgColor="背景色"
    isShowText="显示标题"
    isTopText="标题在正上方">
</stl:focusViewer>
```

### 说明

通过 `stl:focusViewer` 标签在模板中实现滚动焦点图

::: warning
`<stl:focusViewer>` 标签需要使用Flash，如果希望兼容HTML5 标准，请勿使用此标签。
:::

### 属性

| 属性 | 说明 |
|:-----|:----|
| channelIndex | 栏目索引 |
| channelName | 栏目名称 |
| scope | 选择的范围 |
| groupChannel | 指定栏目组 |
| groupChannelNot | 排除栏目组 |
| groupContent | 指定内容组 |
| groupContentNot | 排除内容组 |
| tags | 指定标签 |
| order | 排序 |
| startNum | 第几条信息开始显示 |
| totalNum | 显示数目 |
| titleWordNum | 标题文字数量 |
| where | 条件判断 |
| isTop | 仅显示置顶内容 |
| isRecommend | 仅显示推荐内容 |
| isHot | 仅显示热点内容 |
| isColor | 仅显示醒目内容 |
| theme | 显示样式 |
| width | 宽度 |
| height | 高度 |
| bgColor | 背景色 |
| isShowText | 显示标题 |
| isTopText | 标题在正上方 |

**channelIndex - 栏目索引**

栏目索引是一个站点中栏目的标识，具有唯一性。

如果设置了 channelIndex 属性，系统将寻找对应索引的栏目并将上下文切换到此栏目。

```html
<!-- 链接到首页 -->
<stl:focusViewer channelIndex="首页"></stl:focusViewer>
```

**channelName - 栏目名称**

栏目名称可以重复，所以应该尽量避免使用栏目名称来切换上下文，但是如果 channelName 与 channelIndex 属性配合使用，系统将首先定位到 channelIndex 索引所在的栏目，之后再寻找此栏目下栏目名称为 channelName 的栏目。

```html
<!-- 链接到当前栏目下的名称为“栏目名称”的栏目 -->
<stl:focusViewer channelName="栏目名称"></stl:focusViewer>
```

```html
<!-- 链接到“栏目索引”下的名称为“栏目名称”的栏目 -->
<stl:focusViewer channelIndex="栏目索引" channelName="栏目名称"></stl:focusViewer>
```

**scope - 选择的范围**

内容范围。此属性只可属于以下可能的取值的一种。

* "Self" 显示本栏目下的所有内容(仅内容焦点滚动图可用)
* "Children" 当栏目焦点滚动图时显示所有下级栏目，当内容焦点滚动图时显示本栏目下级栏目下的所有内容
* "SelfAndChildren" 显示本级栏目及下一极子栏目下的所有内容(仅内容焦点滚动图可用)
* "Descendant" 当栏目焦点滚动图时显示所有级别的子栏目，当内容焦点滚动图时显示所有级别的子栏目下的所有内容
* "All" 显示本级栏目及所有级别子栏目下的所有内容(仅内容焦点滚动图可用)

**groupChannel - 指定栏目组**

栏目组别，如设置此属性，则只显示指定栏目组别的内容列表。

**groupChannelNot - 排除栏目组**

非栏目组别，如设置此属性，则只显示不等于指定栏目组别的内容列表。

**groupContent - 指定内容组**

内容组别，如设置此属性，则只显示指定内容组别的内容列表。

**groupContentNot - 排除内容组**

非内容组别，如设置此属性，则只显示不等于内容组别的内容列表。

**tags - 指定标签**

仅显示指定标签的内容，多个标签用","分隔。 (仅内容焦点滚动图可用)

**order - 排序**

焦点滚动图数据排序方式。此属性只可属于以下可能的取值的一种。

* "default" 默认排序，即 CMS 后台界面中的排序
* "back" 默认排序的相反方向
* "addDate" 按添加时间排序
* "addDateBack" 按添加时间的相反方向排序
* "lastEditDate" 按最后更改时间排序(仅内容焦点滚动图可用)
* "lastEditDateBack" 按最后更改时间的相反方向排序(仅内容焦点滚动图可用)

**startNum - 从第几条信息开始显示**

1 从第几条信息开始显示，默认从第一条信息开始显示。

**totalNum - 显示内容数目**

设置一共显示多少条信息，0 代表显示所有信息。

**titleWordNum - 标题文字数量**

设置内容标题显示的字数，0 代表不限制字数。

**where - 条件判断**

获取焦点滚动图的条件判断。

**isTop - 仅显示置顶内容**

是否只显示置顶（非置顶）内容。

* "true" 仅显示置顶的内容
* "false" 仅显示非置顶的内容

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

**theme - 显示样式**

焦点滚动图显示样式，默认为 style1。

* "style1" 样式1
* "style2" 样式2
* "style3" 样式3
* "style4" 样式4

**width - 宽度**

焦点滚动图的宽度

**height - 高度**

焦点滚动图的高度

**bgColor - 背景色**

焦点滚动图的背景色

**isShowText - 显示标题**

是否显示标题。

* "true" 显示标题
* "false" 不显示标题，仅显示图片

**isTopText - 标题在正上方**

是否标题显示在正上方，默认标题显示在正下方。

* "true" 显示在正上方
* "false" 显示在正下方

### 示例

**显示当前栏目的焦点滚动图**

下面的例子显示当前栏目的焦点滚动图。

```html
<stl:focusViewer width="300" height="300" totalNum="3"></stl:focusViewer>
```
