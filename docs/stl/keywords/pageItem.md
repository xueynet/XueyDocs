# <stl:pageItem> 分页项

```html
<stl:pageItem
    type="分页类型"
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

通过 `stl:pageItem` 标签在模板中显示分页项（上一页、下一页、当前页、页跳转、页导航等）

stl:pageItem 标签内可以嵌入代码，如果需要根据是否当前页显示不同的样式，需要使用子标签 `<stl:yes>` 和 `<stl:no>`，非当前页时将显示 `<stl:yes>` 中的内容，当前页时将显示 `<stl:no>` 中的内容。

`<stl:yes>` 和 `<stl:no>` 通常包含 `<a>` 链接，其中可以包含 `{Current.Url}` 以及 `{Current.Num}` 实体，分别代表分页链接地址及当前页页码。

当 type 属性为"FirstPage"、" PreviousPage"、" NextPage"、" LastPage" 或 "PageNavigation" 之一时：

如果标签内未包含内容，系统将显示默认链接。 如果标签内包含内容，系统将指定的内容，同时将解析内容中包含的 `{Current.Url}` 及` {Current.Num}` 实体。 如果 标签内包含 `<stl:yes>` 及 `<stl:no>`，系统将根据是否当前页为对应页显示不同的内容，同时将解析子标签中包含的 `{Current.Url}` 及 `{Current.Num}` 实体。 当 type 属性为 "CurrentPageIndex" 或 "TotalPageNum" 时，分页项将显示当前页对应的页码及总页数。 当 type 属性为 "PageSelect" 时，分页项将显示分页跳转下拉框。

列表相关介绍请参见列表标签及列表项

`<stl:pageItem>` 标签对应的实体为`{stl:pageItem}`。

### 父标签

`<stl:pageItem>` 标签需要在标签 `<stl:pageItems>` 内使用。

| 父标签 | 说明 |
|:------|:-----|
| stl:pageItems | 分页项容器 |

### 子标签

| 子标签 | 说明 |
|:------|:-----|
| stl:yes | 能够转到对应页面时的显示模板（非当前页），可以省略 |
| stl:no | 不能转到对应页面时的显示模板（当前页），可以省略 |

### 属性

::: tip
所有属于HTML 标签`<a>`的属性均适用于`<stl:pageItem>`标签。
:::

| 属性 | 说明 |
|:------|:-----|
| type | 分页类型 |
| text | 显示的文字 |
| linkClass | 链接CSS样式 |
| textClass | 文字CSS样式 |
| listNum | 页导航或页跳转显示链接数 |
| listEllipsis | 超出链接数使用的省略字符 |
| hasLr | 页码导航是否包含左右字符 |
| lStr | 页面左字符 |
| rStr | 页面右字符 |
| alwaysA | 页码总是超链接 |

**type - 分页类型**

显示分页标签的类型。此属性只可属于以下可能的取值的一种。

* "CurrentPageIndex" 当前页索引
* "FirstPage" 首页
* "LastPage" 末页
* "NextPage" 下一页
* "PageNavigation" 页导航
* "PageSelect" 页跳转
* "PreviousPage" 上一页
* "TotalNum" 总内容数
* "TotalPageNum" 总页数

**text - 显示的文字**

根据 type 属性的不同而显示不同的文字。

**linkClass - 链接CSS样式**

链接 CSS 类。

**textClass - 文字CSS样式**

非链接 CSS 类。

#listNum - 页导航或页跳转显示链接数
页导航或页跳转显示链接数。

**listEllipsis - 超出链接数使用的省略字符**

页导航或页跳转链接太多时显示的省略号。

**hasLr - 页码导航是否包含左右字符**

页码导航是否包含左右字符。

**lStr - 页面左字符**

页面左字符。

**rStr - 页面右字符**

页面右字符。

**alwaysA - 页码总是超链接**

页码总是超链接，包括无连接时。

### 示例

**显示分页项组合**

下面的例子显示分页项组合。

```html
<stl:pageItems>
<table width="100%">
  <tr>
    <td align="left">
      <stl:pageItem type="FirstPage" text="首页"></stl:pageItem> |
      <stl:pageItem type="PreviousPage" text="上一页"></stl:pageItem> |
      <stl:pageItem type="NextPage" text="下一页"></stl:pageItem> |
      <stl:pageItem type="LastPage" text="末页"></stl:pageItem>
    </td>
    <td> </td>
    <td align="right">
      <stl:pageItem type="CurrentPageIndex" text="当前页："></stl:pageItem>/<stl:pageItem type="TotalPageNum"></stl:pageItem>
      <stl:pageItem type="PageNavigation"></stl:pageItem>
      <stl:pageItem type="PageSelect" class="input-small"></stl:pageItem>
    </td>
  </tr>
</table>
</stl:pageItems>
```

**显示分页导航**

分页项根据是否当前页显示不同的风格

```html
<stl:pageItems>
<div class="pagination">
  <ul>
    <li><a href="{PageItem.PreviousPage}">Prev</a></li>
    <stl:pageItem type="PageNavigation">
      <stl:yes>
        <li><a href="{Current.Url}">{Current.Num}</a></li>
      </stl:yes>
      <stl:no>
        <li class="active"><span>{Current.Num}</span></li>
      </stl:no>
    </stl:pageItem>
    <li><a href="{PageItem.NextPage}">Next</a></li>
  </ul>
</div>
</stl:pageItems>
```

**显示上一页、数字导航及下一页**

下面的例子显示包含 CSS 样式的组合分页标签，可以直接拷贝到模板中使用。

```html
<style type="text/css">
.page_wrap{clear:both; margin-bottom:10px; overflow:hidden;zoom:1;}
.paginator {float:right; height:25px; overflow:hidden; }
.paginator,
.paginator input,
.paginator button {font-family:Tahoma, "宋体"; font-size:12px; }
.paginator a,
.paginator span {float:left; height:23px; margin:0 5px 0 0; text-align:center; white-space:nowrap; vertical-align:middle; line-height:23px; background:#fff; }
.paginator a {color:#085C9B; }
.paginator b{font-family:"宋体"; margin:3px;font-weight:300;}
.paginator a:link,
.paginator a:visited,
.paginator a:hover,
.paginator a:active {text-decoration:none; }
.paginator .page-start,
.paginator a,
.paginator .page-end {padding:0 8px; border:1px solid #D3D3D3; background:#ffffff; }
.paginator .page-start {border-color:#d9d9d9; color:#d9d9d9; }
.paginator .page-end { border-color:#d9d9d9;  color:#d9d9d9; }
.paginator .page-this,
.paginator .page-break {padding:0 3px; }
.paginator .page-break {border:1px solid #fff; }
.paginator .page-this {border:1px solid #D3D3D3;background-color:#E9E9E9; color:#D4105A;padding:0px 8px; font-weight:bold; }
.paginator .page-skip {height:22px; line-height:22px; padding:0 3px; margin:0; background:none; }
.paginator .page-skip input {width:26px;  *width:23px;height:19px;line-height:19px;border:1px #D3D3D3 solid;font-size:12px; margin:-1px 6px 0px 6px;#margin-top:1px;_margin-top:0px;padding:0px 0px 0px 2px; vertical-align:middle; padding-top:0px; padding-bottom:0px; }
.paginator .page-skip button {font-size:12px; padding:0 5px 5px 5px;_padding:0 5px 0 5px; width:auto; _width:0; height:22px;  *height:23px; *line-height:20px; _height:16px; _line-height:16px; margin-left:10px;  *margin-top:-1px;overflow:visible; vertical-align:top; }
.paginator a:hover {border:1px solid #A6A6A6;color:#868688; }
</style>

<stl:pageItems>
<div class="page_wrap">
  <div class="paginator">
  <stl:pageItem type="PreviousPage">
    <stl:yes>
      <a class="page-prev" href="{Current.Url}">上一页</a>
    </stl:yes>
    <stl:no>
      <span class="page-start">上一页</span>
    </stl:no>
  </stl:pageItem>
  <stl:pageItem type="PageNavigation">
    <stl:yes>
      <a href="{Current.Url}">{Current.Num}</a>
    </stl:yes>
    <stl:no>
      <span class="page-this">{Current.Num}</span>
    </stl:no>
  </stl:pageItem>
  <stl:pageItem type="NextPage">
    <stl:yes>
      <a class="page-next" href="{Current.Url}">下一页</a>
    </stl:yes>
    <stl:no>
      <span class="page-end">下一页</span>
    </stl:no>
  </stl:pageItem>
  </div>
</div>
</stl:pageItems>
```
