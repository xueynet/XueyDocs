# <stl:pageItems> 翻页项容器

```html
<stl:pageItems context="所处上下文"></stl:pageItems>
```

### 说明

通过 `stl:pageItems` 标签在模板中插入翻页项的容器，当不需要翻页时容器内的内容不显示

标签 `<stl:pageItems>` 必须包含标签 `<stl:pageItem>` 才起作用。

列表相关介绍请参见列表标签及列表项

翻页标签可以放到任何类型的模板中使用，唯一的例外是如果在单页模板中使用，需包含在`<stl:dynamic>`标签中。
