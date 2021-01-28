# <stl:flash> 显示Flash

```html
<stl:flash
    channelIndex="栏目索引"
    channelName="栏目名称"
    parent="显示父栏目"
    upLevel="上级栏目的级别"
    topLevel="从首页向下的栏目级别"
    type="指定存储flash文件的字段"
    src="显示的flash地址"
    altSrc="备选flash文件地址"
    width="宽度"
    height="高度">
</stl:flash>
```

### 说明

通过 `stl:flash` 标签在模板中获取并显示栏目或内容的Flash

`stl:flash` 标签的地址取自栏目或内容的图片地址，当图片地址为SWF结尾的flash文件时显示此标签，否则自动转成 `<stl:image>` 标签。

标签 在栏目模版中默认显示此栏目的flash，在内容模版中默认显示此内容的flash。

`stl:flash` 标签能够作为 `<stl:channels>` 等标签的子标签，当作为 的子标签使用时将显示栏目的flash。 `stl:flash` 标签能够作为 `<stl:contents>` 等标签的子标签，当作为 的子标签使用时将显示内容的flash。

`<stl:flash>` 标签对应的实体为`{stl:flash}`。
