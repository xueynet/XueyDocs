# <stl:itemTemplate> 列表项

```html
<stl:itemTemplate
    type="列表项类型"
    selected="列表当前选定项类型"
    selectedValue="当前选定项的值">
</stl:itemTemplate>
```

### 说明

通过 `stl:itemTemplate` 标签在模板中控制列表中每一项的显示内容及样式

type属性为Item、AlternatingItem、Separator三种类型的列表项在列表中最多只能有一个，SelectedItem类型的列表项可以有零个或多个。

SelectedItem类型的列表项所显示的内容由 selected 属性控制，默认当前内容为选中项。

`<stl:itemTemplate>` 标签对应的实体为`{stl:itemTemplate}`。

### 父标签

`<stl:itemTemplate>` 标签用于显示列表项，必须嵌套在列表标签中使用，列表标签清单如下：
