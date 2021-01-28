# <stl:each> 列表项循环

```html
<stl:each
    type="循环类型"
    totalNum="显示信息总数"
    startNum="从第几条信息开始显示"
    layout="布局"
    columns="列数"
    direction="方向"
    height="整体高度"
    width="整体宽度"
    align="整体对齐"
    itemHeight="项高度"
    itemWidth="项宽度"
    itemAlign="项水平对齐"
    itemVerticalAlign="项垂直对齐"
    itemClass="项Css类">
</stl:each>
```

### 说明

通过 `stl:each` 标签在模板中遍历指定的列表项

type类型为ImageUrl时，`stl:each`的子标签需要包含`stl:image`标签，以显示图片项。

type类型为VideoUrl时，`stl:each`的子标签需要包含`stl:player`标签或者`stl:video`标签，以显示视频项。

type类型为FileUrl时，`stl:each`的子标签需要包含`stl:file`标签，以显示附件项。

`<stl:each>` 标签可以作为 `<stl:contents>` 标签的子标签,也可以放在内容模板中.

`<stl:each>` 标签对应的实体为`{stl:each}`。

### 属性
