# <stl:content> 获取内容值

```html
<stl:content
    type="显示的类型"
    wordNum="显示字符的数目"
    startIndex="字符开始位置"
    length="指定字符长度"
    ellipsis="文字超出部分显示的文字"
    replace="需要被替换的文字"
    to="替换文字"
    isClearTags="清除标签"
    isReturnToBr="回车改为换行"
    isLower="转换为小写"
    isUpper="转换为大写"
    formatString="显示的格式"
    no="显示第几项"
    separator="显示多项时的分割字符串"
    isOriginal="获取所引用内容的值"
    leftText="显示在信息前的文字"
    rightText="显示在信息后的文字">
</stl:content>
```

### 说明

通过 `stl:content` 标签在模板中显示指定内容的属性值。

`<stl:content>` 标签在内容模板中单独使用时，系统默认将显示当前内容的值。

如果 `<stl:content>` 标签嵌套在 `<stl:contents>`以及`<stl:pageContents>` 内容列表标签内，系统将获取内容列表项并解析为相应的值。

stl:content 标签只能放在内容模版中或者作为 `<stl:contents>`以及`<stl:pageContents>` 等内容列表标签的子标签。

type 属性用于明确需要显示内容的具体字段，如果未设置，系统将显示内容标题。

如果需要对返回的文字进行截字或者其他处理，请设置 解析文字 属性。

如果需要显示日期/时间类型的内容字段，可以通过 formatString 属性 格式化日期。

如果希望将内容的属性值放到 HTML 元素或者 STL 元素的属性中使用，请使用`{stl:content}` 实体写法，如：`<a title="{stl:content type=title}">`。

如果需要获取内容正文并分页显示，请设置type属性为 `pageContent`，同时配合 `stl:pageItem` 标签实现分页效果。

### 解析

如果使用 `<stl:content>` 元素，系统将根据内容字段的类型解析为不同的值（通常为字符串，如果字段类型为图片系统将解析为`<img>`标签）。

如果使用 `{stl:content}` 实体，系统将根据是否设置type 属性，解析为不同的结果：

* 设置了type属性，系统将实体解析为内容的具体字段值。
* 未设置type属性，系统将实体解析为内容的JSON对象。
