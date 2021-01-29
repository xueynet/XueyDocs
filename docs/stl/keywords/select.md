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

| 属性 | 说明 | 
|:------|:-----|
| isChannel | 显示栏目下拉列表 | 
| channelIndex | 栏目索引 | 
| channelName | 栏目名称 | 
| parent | 上级栏目 | 
| upLevel | 上级栏目的级别 | 
| topLevel | 从首页向下的栏目级别 | 
| context | 上下文 | 
| scope | 选择的范围 | 
| groupChannel | 指定栏目组 | 
| groupChannelNot | 排除栏目组 | 
| groupContent | 指定内容组 | 
| groupContentNot | 排除内容组 | 
| tags | 指定标签 | 
| order | 排序 | 
| totalNum | 显示数目 | 
| titleWordNum | 标题文字数量 | 
| where | 条件判断 | 
| queryString | 链接参数 | 
| isTop | 仅显示置顶内容 | 
| isRecommend | 仅显示推荐内容 | 
| isHot | 仅显示热点内容 | 
| isColor | 仅显示醒目内容 | 
| title | 下拉列表提示标题 | 
| openWin | 新窗口打开链接 | 

**isChannel - 显示栏目下拉列表**

是否显示栏目下拉列表

* "true" 不从所有栏目总选择
* "false" 从网站的所有栏目中选择合适的栏目进行显示

**channelIndex - 栏目索引**

栏目索引是一个站点中栏目的标识，具有唯一性。

如果设置了 channelIndex 属性，系统将寻找对应索引的栏目并将上下文切换到此栏目。

```html
<!-- 链接到首页 -->
<stl:select channelIndex="首页"></stl:select>
```

**channelName - 栏目名称**

栏目名称可以重复，所以应该尽量避免使用栏目名称来切换上下文，但是如果 channelName 与 channelIndex 属性配合使用，系统将首先定位到 channelIndex 索引所在的栏目，之后再寻找此栏目下栏目名称为 channelName 的栏目。

```html
<!-- 链接到当前栏目下的名称为“栏目名称”的栏目 -->
<stl:select channelName="栏目名称"></stl:select>
```

```html
<!-- 链接到“栏目索引”下的名称为“栏目名称”的栏目 -->
<stl:select channelIndex="栏目索引" channelName="栏目名称"></stl:select>
```

**parent - 上级栏目**

将上下文切换到当前栏目的上一级栏目。

* "true" 表示切换到当前栏目的上一级栏目，等价于 upLevel="1"。
* "false" 表示不切换到当前栏目的上一级栏目。

如果同时设置了 parent 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上级栏目。

```html
<!-- 链接到当前栏目的上一级栏目 -->
<stl:select parent="true"></stl:select>
```

**upLevel - 上级栏目的级别**

切换到上级栏目，1 为上一级栏目，2 为上两级栏目，以此类推。

如果同时设置了 upLevel 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上 N 级栏目。

```html
<!-- 链接到当前栏目的上两级栏目 -->
<stl:select upLevel="2"></stl:select>
```

**topLevel - 从首页向下的栏目级别**

切换到从首页向下第 N 个级别的栏目，0 代表切换到首页，1 代表一级栏目，2 代表二级栏目，以此类推。

```html
<!-- 链接到一级栏目 -->
<stl:select topLevel="1"></stl:select>
```

context - 上下文
通常如果标签被嵌套在列表元素中时，系统会设置上下文为当前的列表类型，同时对标签进行解析时也将根据列表类型进行判断，如将 `<stl:select></stl:select>` 放到内容列表以及栏目列表中时，stl:select 标签的链接会分别显示内容的连接以及栏目的连接。

如果希望`<stl:select></stl:select>`标签无论在内容列表还是栏目列表都只显示栏目链接，可以设置 context 属性为 Channel:`<stl:select context="channel"></stl:select>`

* "default" 默认，即当前所处上下文。
* "content" 内容上下文。
* "channel" 栏目上下文。
* "sqlContent" Sql 内容上下文。
* "site" 站点上下文。

```html
<!-- 分别显示栏目与内容链接 -->
<stl:channels>
  <stl:contents>
    栏目：<stl:select context="channel"></stl:select>
    内容：<stl:select></stl:select>
  </stl:contents>
</stl:channels>
```

**scope - 选择的范围**

内容范围。此属性只可属于以下可能的取值的一种。

* "Self" 显示本栏目下的所有内容(仅内容下拉列表可用)
* "Children" 当栏目下拉列表时显示所有下级栏目，当内容下拉列表时显示本栏目下级栏目下的所有内容
* "SelfAndChildren" 显示本级栏目及下一极子栏目下的所有内容(仅内容下拉列表可用)
* "Descendant" 当栏目下拉列表时显示所有级别的子栏目，当内容下拉列表时显示所有级别的子栏目下的所有内容
* "All" 显示本级栏目及所有级别子栏目下的所有内容(仅内容下拉列表可用)

**groupChannel - 指定栏目组**

栏目组别，如设置此属性，则只显示指定栏目组别的内容列表。

**groupChannelNot - 排除栏目组**

非栏目组别，如设置此属性，则只显示不等于指定栏目组别的内容列表。

**groupContent - 指定内容组**

内容组别，如设置此属性，则只显示指定内容组别的内容列表。

**groupContentNot - 排除内容组**

非内容组别，如设置此属性，则只显示不等于内容组别的内容列表。

**tags - 指定标签**

仅显示指定标签的内容，多个标签用","分隔。 (仅内容下拉列表可用)

**order - 排序**

下拉列表数据排序方式。此属性只可属于以下可能的取值的一种。

* "default" 默认排序，即 CMS 后台界面中的排序
* "back" 默认排序的相反方向
* "addDate" 按添加时间排序
* "addDateBack" 按添加时间的相反方向排序
* "lastEditDate" 按最后更改时间排序(仅内容下拉列表可用)
* "lastEditDateBack" 按最后更改时间的相反方向排序(仅内容下拉列表可用)

**totalNum - 显示数目**

设置列表一共显示多少条信息，0 代表显示所有信息。

**titleWordNum - 标题文字数量**

设置内容标题显示的字数，0 代表不限制字数。

**where - 条件判断**

获取下拉列表的条件判断

**queryString - 链接参数**

链接参数

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

**title - 下拉列表提示标题**

下拉列表中的第一项，作为提示文字

**openWin - 新窗口打开链接**

选择下拉列表后是否在新窗口打开链接

* "true" 新窗口打开链接
* "false" 原窗口打开链接

### 示例

**显示栏目列表下拉框**

下面的例子实现页面的简体/繁体转换功能，如果希望所有页面均实现转换，需要把代码放到所有模板中（通常放到头部包含文件）。

```html
<stl:select channelName="首页" isChannel="true" title="选择标题进入栏目页" openWin="false"> </stl:select>
```

**显示内容列表下拉框**

下面的例子显示由栏目索引为"新闻"的内容组成的下拉框。

```html
<stl:select channelIndex="新闻" isChannel="false" title="选择标题进入内容页" totalNum="3" openWin="false"> </stl:select>
```
