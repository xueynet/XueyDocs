# <stl:pageItems> 分页项容器

```html
<stl:pageItems context="所处上下文"></stl:pageItems>
```

### 说明

通过 `stl:pageItems` 标签在模板中插入分页项的容器，当不需要分页时容器内的内容不显示

标签 `<stl:pageItems>` 必须包含标签 `<stl:pageItem>` 才起作用。

列表相关介绍请参见列表标签及列表项

分页标签可以放到任何类型的模板中使用，唯一的例外是如果在单页模板中使用，需包含在`<stl:dynamic>`标签中。

### 子标签

| 子标签 | 说明 |
|:------|:-----|
| stl:pageItem | 分页项 |

### 属性

| 属性 | 说明 |
|:------|:-----|
| context | 所处上下文 |

**context - 所处上下文**

设置分页所处的上下文。

### 示例

**显示分页项组合**

下面的例子显示组合了所有分页标签的分页项容器。

```html
<stl:pageItems>
<table width="100%">
<tr><td align="left">
  <stl:pageItem type="FirstPage" text="首页"></stl:pageItem> |
  <stl:pageItem type="PreviousPage" text="上一页"></stl:pageItem> |
  <stl:pageItem type="NextPage" text="下一页"></stl:pageItem> |
  <stl:pageItem type="LastPage" text="末页"></stl:pageItem>
</td><td align="right">
  <stl:pageItem type="CurrentPageIndex" text="当前页："></stl:pageItem>
  <stl:pageItem type="PageNavigation"></stl:pageItem>
</td></tr>
</table>
</stl:pageItems>
```
