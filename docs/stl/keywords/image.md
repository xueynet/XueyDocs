# <stl:image> 显示图片

```html
<stl:image
    channelIndex="栏目索引"
    channelName="栏目名称"
    parent="显示父栏目"
    upLevel="上级栏目的级别"
    topLevel="从首页向下的栏目级别"
    type="指定存储图片的字段"
    context="所处上下文"
    no="显示第几幅图片"
    isOriginal="获取所引用内容的图片"
    src="指定图片地址"
    altSrc="备选图片地址">
</stl:image>
```

### 说明

通过 `stl:image` 标签在模板中显示栏目或内容的图片

`stl:image` 标签的地址取自栏目或内容的图片地址，当图片地址为SWF结尾时自动转成 `<stl:flash>` 标签。

标签 `<stl:image>` 在栏目模版中默认显示此栏目的图片，在内容模版中默认显示此内容的图片。

stl:image 标签能够作为 `<stl:channels>` 等标签的子标签，当作为 的子标签使用时将显示栏目的图片。 `stl:image` 标签能够作为 `<stl:contents>` 等标签的子标签，当作为 的子标签使用时将显示内容的图片。

`stl:image` 标签默认显示内容的图片字段，如果希望显示自定义的图片字段，则需要设置 type 属性。

`<stl:image>` 标签对应的实体为`{stl:image}`。

### 属性

::: tip
所有属于 Html 标签 `<img>` 的成员均适用于 `<stl:image>` 标签。
:::
