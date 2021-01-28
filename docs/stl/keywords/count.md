# <stl:count> 显示数值

```html
<stl:count
    type="需要获取值的类型"
    channelIndex="栏目索引"
    channelName="栏目名称"
    upLevel="上级栏目的级别"
    topLevel="从首页向下的栏目级别"
    scope="内容范围"
    since="时间段">
</stl:count>
```

### 说明

通过 `stl:count` 标签在模板中显示统计数字

标签 `<stl:count>` 用于显示相关数值，如栏目数目、内容数目等。

属性 channelIndex、channelName、upLevel 以及 topLevel 用于指定统计的栏目，如果不设置默认将统计当前栏目或内容的数据。 属性 scope 用于指定统计范围，默认为仅统计当前栏目或内容的相关数据。 属性 type 用于设置显示数值的类型。 属性 since 用于指定时间段，系统将只显示这段时间内的统计数据。since 属性格式为"数字+日期符号"，如"1y"、"3m"、"10d"或"16h"，分别代表一年、三个月、十天及十六个小时。

`<stl:count>` 标签对应的实体为`{stl:count}`。

### 属性

| 属性 | 说明 |
|:-----|:-----|
| type	| 需要获取值的类型 |
| channelIndex	| 栏目索引 |
| channelName	| 栏目名称 |
| upLevel	| 上级栏目的级别 |
| topLevel	| 从首页向下的栏目级别 |
| scope	| 内容范围 |
| since	| 时间段 |

**type - 需要获取值的类型**

显示类型：

* "Channels" 统计栏目数
* "Contents" 统计内容数
* "Downloads" 统计下载次数、下载量

**channelIndex - 栏目索引**

栏目索引

**channelName - 栏目名称**

栏目名称

**upLevel - 上级栏目的级别**

指定统计上几级栏目的数据，0 为本级，1 为父栏目，以此类推。

**topLevel - 从首页向下的栏目级别**

指定统计从首页向下某个级别栏目的数据，0 代表网站首页，1 代表一级栏目，以此类推。

**scope - 内容范围**

统计范围。此属性只可属于以下可能的取值的一种。

* "Self" 仅统计当前栏目或内容下的数据
* "Children" 统计下级栏目的数据
* "SelfAndChildren" 统计本级栏目及下一极子栏目下的数据
* "Descendant" 统计所有级别的子栏目下的数据
* "All" 统计所有栏目的数据

**since - 时间段**

时间段，格式为"数字+日期符号"，日期符号有"y"、"m"、"d"及"h"，分别代表年、月、天及小时。

### 示例

**显示当前栏目的内容数。**

下面的例子实现页面的简体/繁体转换功能，如果希望所有页面均实现转换，需要把代码放到所有模板中（通常放到头部包含文件）。

```html
内容数：<stl:count type="Contents"></stl:count>
```

解析后的 HTML 代码：

```html
内容数：30
```

**显示指定栏目三个月内添加的内容数，包括本栏目及所有下级栏目**

下面的例子在页面中显示指定栏目三个月内添加的内容数，包括本栏目及所有下级栏目。

```html
内容数：<stl:count type="Contents" channelIndex="新闻" scope="All" since="3m"></stl:count>
```

解析后的 HTML 代码：

```html
内容数：12
```
