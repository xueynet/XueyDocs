# <stl:pageItem> 翻页项

```html
<stl:pageItem
    type="翻页类型"
    text="显示的文字"
    linkClass="链接CSS样式"
    textClass="文字CSS样式"
    listNum="页导航或页跳转显示链接数"
    listEllipsis="超出链接数使用的省略字符"
    hasLr="页码导航是否包含左右字符"
    lStr="页面左字符"
    rStr="页面右字符"
    alwaysA="页码总是超链接">
</stl:pageItem>
```

### 说明

通过 `stl:pageItem` 标签在模板中显示翻页项（上一页、下一页、当前页、页跳转、页导航等）

stl:pageItem 标签内可以嵌入代码，如果需要根据是否当前页显示不同的样式，需要使用子标签 `<stl:yes>` 和 `<stl:no>`，非当前页时将显示 `<stl:yes>` 中的内容，当前页时将显示 `<stl:no>` 中的内容。

`<stl:yes>` 和 `<stl:no>` 通常包含 `<a>` 链接，其中可以包含 `{Current.Url}` 以及 `{Current.Num}` 实体，分别代表翻页链接地址及当前页页码。

当 type 属性为"FirstPage"、" PreviousPage"、" NextPage"、" LastPage" 或 "PageNavigation" 之一时：

如果标签内未包含内容，系统将显示默认链接。 如果标签内包含内容，系统将指定的内容，同时将解析内容中包含的 `{Current.Url}` 及` {Current.Num}` 实体。 如果 标签内包含 `<stl:yes>` 及 `<stl:no>`，系统将根据是否当前页为对应页显示不同的内容，同时将解析子标签中包含的 `{Current.Url}` 及 `{Current.Num}` 实体。 当 type 属性为 "CurrentPageIndex" 或 "TotalPageNum" 时，翻页项将显示当前页对应的页码及总页数。 当 type 属性为 "PageSelect" 时，翻页项将显示翻页跳转下拉框。

列表相关介绍请参见列表标签及列表项

`<stl:pageItem>` 标签对应的实体为`{stl:pageItem}`。

### 父标签

`<stl:pageItem>` 标签需要在标签 `<stl:pageItems>` 内使用。
