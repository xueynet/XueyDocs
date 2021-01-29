# <stl:zoom> 文字缩放

```html
<stl:zoom
    zoomId="缩放对象Id"
    fontSize="缩放字体大小">
</stl:zoom>
```

### 说明

通过 `stl:zoom` 标签在模板中实现文字缩放功能

`stl:zoom` 标签将显示缩放链接，点击此链接后缩放指定文字。

### 属性

::: tip
所有属于 HTML 标签`<a>`的属性均适用于`<stl:zoom>`标签。
:::

| 属性 | 说明 |
|:------|:-----|
| zoomId | 缩放对象Id |
| fontSize | 缩放字体大小 |

**zoomId - 缩放对象Id**

页面 HTML 中缩放对象的 Id 属性

**fontSize - 缩放字体大小**

缩放字体大小

### 示例

**显示缩放链接**

下面的例子显示缩放链接。

```html
<stl:zoom zoomId="artibody" fontSize="16">大</stl:zoom>
<stl:zoom zoomId="artibody" fontSize="14">中</stl:zoom>
<stl:zoom zoomId="artibody" fontSize="12">小</stl:zoom>

<div id="artibody">
    <stl:content type="Content"></stl:content>
</div>
```
