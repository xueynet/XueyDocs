# <stl:printer> 打印

```html
<stl:printer
    titleId="标题的Id"
    bodyId="正文的Id"
    logoId="Logo的Id"
    locationId="当前位置的Id">
</stl:printer>
```

### 说明

`stl:printer` 用于显示打印链接，点击后弹出打印窗口

`stl:printer` 标签将显示打印链接，点击此链接后将弹出打印窗口，需打印的标题、内容、LOGO及页面当前文字在 `<stl:printer>` 的属性中指定。

`<stl:printer>` 标签对应的实体为`{stl:printer}`。

### 属性

::: tip
所有属于HTML 标签`<a>`的属性均适用于`<stl:printer>`标签。
:::

| 属性 | 说明 |
|:------|:-----|
| titleId | 标题的Id |
| bodyId | 正文的Id |
| logoId | Logo的Id |
| locationId | 当前位置的Id |

**titleId - 标题的Id**

页面 HTML 中打印标题的 Id 属性

**bodyId - 正文的Id**

页面 HTML 中打印正文的 Id 属性

**logoId - Logo的Id**

页面 LOGO 的 Id 属性

**locationId - 当前位置的Id**

页面当前位置的 Id 属性

### 示例

**显示打印链接**

下面的例子实现页面打印功能，点击打印链接后浏览器将弹出打印提示框。

```html
<div id="title">
    <stl:content type="Title"></stl:content>
</div>
<div id="body">
    <stl:content type="Content"></stl:content>
</div>
<stl:printer titleId="title" bodyId="body">打印</stl:printer>
```
