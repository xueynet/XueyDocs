# <stl:channels> 栏目列表

```html
<stl:channels
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
</stl:channels>
```

### 说明

通过 `stl:channels` 标签在模板中显示栏目列表。

`<stl:channels>` 元素默认显示当前栏目的下级栏目列表，如果希望显示指定栏目的子栏目，请设置 上下文切换 属性。

如果需要将 `<stl:channels>` 元素解析为 HTML `<table>`标签，或者需要对列表循环项进行处理，请设置列表属性或标签 控制列表显示。

`<stl:channels>` 元素默认显示下一级栏目的列表，如果希望显示所有的下级栏目（包括子栏目和子子栏目），请设置属性 `isAllChildren`为 `true`。

可以通过 `groupChannel` 属性及 `groupChannelNot` 属性筛选出特定的栏目并进行显示。

### 解析

如果使用 `<stl:channels>` 元素，系统将对嵌套的标签进行解析并返回嵌套标签的循环列表。

如果使用 `{stl:channels}` 实体，系统将实体解析为栏目列表的JSON对象数组。