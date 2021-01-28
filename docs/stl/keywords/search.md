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
