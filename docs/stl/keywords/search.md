# <stl:search> 搜索

```html
<stl:search
  isAllSites="对全部站点搜索"
  siteName="站点名称"
  siteDir="站点文件夹"
  siteIds="站点Id列表"
  channelIndex="栏目索引"
  channelName="栏目名称"
  channelIds="栏目Id列表"
  type="搜索类型"
  word="搜索关键词"
  dateAttribute="搜索时间字段"
  dateFrom="搜索开始时间"
  dateTo="搜索结束时间"
  since="搜索时间段"
  pageNum="每页显示的内容数目"
  isHighlight="关键字高亮"
  isDefaultDisplay="是否默认显示全部内容"
>
</stl:search>
```

### 说明

通过 `stl:search` 标签在模板中显示搜索结果

stl:search 标签有默认显示方式和自定义显示方式两种表现形式。如果 `<stl:search>` 不包含子标签则采用默认显示方式显示搜索提交表单、如果 `<stl:search>` 包含子标签则采用自定义的内容显示搜索提交表单。

`<stl:search>` 标签对应的实体为`{stl:search}`。

### 页面参数

上表对应的属性均可作为页面参数传递给 `<stl:search>` 标签，系统将首选页面参数值，如果未传参数，系统再从 `<stl:search>` 属性取值。

示例：`/utils/search.html?word=中国&type=title&pageNum=10` 将优先于 `<stl:search type="title,content" pageNum="20">`。

### 子标签

| 子标签 | 说明 |
|:------|:-----|
| stl:loading | 正在搜索时的显示模板，可以省略 |
| stl:yes | 搜索出内容时的显示模板，可以省略 |
| stl:no | 未搜索出内容时的显示模板，可以省略 |

如果需要根据是否搜索成功显示不同的结果，需要使用子标签 `<stl:yes>` 和 `<stl:no>` ，有搜索结果时将显示 `<stl:yes>` 中的内容，无搜索结果时将显示 `<stl:no>` 中的内容。

如果只定义搜索结果模板，可以省略`<stl:yes>`，直接将模板放到`<stl:search>` 中。

自定义搜索提交表单需要在 `<stl:search>` 中嵌入显示搜索结果的标签，必须包含的标签有 `<stl:pageContents>` 和 `<stl:pageitems>` 及 `<stl:pageItem>` 标签，分别用于显示搜索结果分页列表和搜索结果分页项。

`<stl:search>` 内必须包含一个 `<stl:pageContents>` 标签，用于显示搜索结果内容列表，详情请参考 `<stl:pageContents>` 标签。
`<stl:search>` 内必须包含一个 `<stl:pageitems>` 标签和多个 `<stl:pageItem>` 标签，用于显示分页项，详情请参考 `<stl:pageItems>` 标签及 `<stl:pageItem>` 标签。
`<stl:search>` 中除以上标签外可以添加任意 Html 标签或 STL 标签，用于组织显示样式。

### 属性

| 属性 | 说明 |
|:------|:-----|
| isAllSites | 对全部站点搜索 |
| siteName | 站点名称 |
| siteDir | 站点文件夹 |
| siteIds | 站点 Id 列表 |
| channelIndex | 栏目索引 |
| channelName | 栏目名称 |
| channelIds | 栏目 Id 列表 |
| type | 搜索类型 |
| word | 搜索关键词 |
| dateAttribute | 搜索时间字段 |
| dateFrom | 搜索开始时间 |
| dateTo | 搜索结束时间 |
| since | 搜索时间段 |
| pageNum | 每页显示的内容数目 |
| isHighlight | 关键字高亮 |
| isDefaultDisplay | 是否默认显示全部内容 |

**isAllSites - 对全部站点搜索**

是否对全部站点进行搜索

* "true" 搜索所有站点的内容
* "false" 只搜索本站内容，默认值

**siteName - 站点名称**

站点名称，设置后系统将只搜索对应站点的内容

**siteDir - 站点文件夹**

站点文件夹，设置后系统将只搜索对应站点的内容

**siteIds - 站点 Id 列表**

站点 Id 列表，多个站点 Id 以“,”分割，设置后系统将只搜索对应站点集合的内容

**channelIndex - 栏目索引**

栏目索引，设置后系统将只搜索对应栏目及其下级栏目的内容

**channelName - 栏目名称**

栏目名称，设置后系统将只搜索对应栏目及其下级栏目的内容

**channelIds - 栏目 Id 列表**

栏目 Id 列表，多个栏目 Id 以“,”分割，设置后系统将只搜索对应栏目集合及其下级栏目的内容

**type - 搜索类型**

title 定义搜索字段，默认为 title，可以定义多个搜索字段，如：title,content

**word - 搜索关键词**

定义搜索关键词，通常不设置在模板中，系统从地址栏参数中获取

**dateAttribute - 搜索时间字段**

AddDate 日期搜索字段，定义 dateFrom、dateTo 或者 since 日期过滤条件的对应日期字段

**dateFrom - 搜索开始时间**

搜索日期开始时间

**dateTo - 搜索结束时间**

搜索日期结束时间

**since - 搜索时间段**

搜索时间段，格式为"数字+日期符号"，日期符号有"y"、"m"、"d"及"h"，分别代表年、月、天及小时。

**pageNum - 每页显示的内容数目**

每页显示多少条内容

**isHighlight - 关键字高亮**

是否将搜索关键字在搜索结果中高亮显示

* "true" 高亮显示
* "false" 正常显示

**isDefaultDisplay - 是否默认显示全部内容**

如果设置为true，搜索页无搜索关键词时将显示所有内容结果

* "true" 默认显示全部内容
* "false" 默认不显示结果

### 示例

**采用默认方式显示搜索结果**

下面的例子实现页面的简体/繁体转换功能，如果希望所有页面均实现转换，需要把代码放到所有模板中（通常放到头部包含文件）。

```html
<stl:search pageNum="12" isDefaultDisplay="true"></stl:search>
```

**采用自定义方式显示搜索结果，搜索结果关键字高亮显示**

```html
<stl:search isDefaultDisplay="true" isHighlight="true">
  <stl:pageContents scope="All" pageNum="12">
    <div>
      <stl:a target="_blank"></stl:a><br />
      <stl:content
        type="Content"
        isClearTags="true"
        wordNum="120"
      ></stl:content>
    </div>
  </stl:pageContents>
  <br />
  <stl:pageItems>
    <table
      cellpadding="0"
      cellspacing="0"
      width="90%"
      height="40"
      align="center"
    >
      <tr>
        <td align="left">
          <stl:pageItem type="FirstPage" text="首页"></stl:pageItem> |
          <stl:pageItem type="PreviousPage" text="上一页"></stl:pageItem> |
          <stl:pageItem type="NextPage" text="下一页"></stl:pageItem> |
          <stl:pageItem type="LastPage" text="末页"></stl:pageItem>
        </td>
        <td align="right">
          <stl:pageItem type="CurrentPageIndex" text="当前页："></stl:pageItem>
          <stl:pageItem type="PageNavigation"></stl:pageItem>
        </td>
      </tr>
    </table>
  </stl:pageItems>
</stl:search>
```

**自定义载入中、有搜索结果以及无搜索结果模板**

下面的例子通过自定义载入中、有搜索结果以及无搜索结果模板来实现搜索页面的自定义。

```html
<stl:search>
  <stl:loading>
    <div class="alert alert-info" role="alert">
      <strong>提示!</strong> 系统正在搜索中，请稍后...
    </div>
  </stl:loading>
  <stl:yes>
    <stl:pageContents scope="All" pageNum="12">
      <stl:a target="_blank"></stl:a><br />
    </stl:pageContents>
    <br />
    <stl:pageItems>
      <table
        cellpadding="0"
        cellspacing="0"
        width="90%"
        height="40"
        align="center"
      >
        <tr>
          <td align="left">
            <stl:pageItem type="FirstPage" text="首页"></stl:pageItem> |
            <stl:pageItem type="PreviousPage" text="上一页"></stl:pageItem> |
            <stl:pageItem type="NextPage" text="下一页"></stl:pageItem> |
            <stl:pageItem type="LastPage" text="末页"></stl:pageItem>
          </td>
          <td align="right">
            <stl:pageItem
              type="CurrentPageIndex"
              text="当前页："
            ></stl:pageItem>
            <stl:pageItem type="PageNavigation"></stl:pageItem>
          </td>
        </tr>
      </table>
    </stl:pageItems>
  </stl:yes>
  <stl:no>
    <div class="alert alert-danger" role="alert">
      <strong>抱歉!</strong> 找不到和您的查询相符的项目
    </div>
  </stl:no>
</stl:search>
```
