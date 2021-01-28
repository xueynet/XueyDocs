# <stl:sites> 站点列表(站群)

```html
<stl:sites
    siteName="站点名称"
    siteDir="站点文件夹"
    scope="站点范围"
    totalNum="显示站点数目"
    startNum="从第几条信息开始显示"
    order="排序"
    where="条件判断"
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
</stl:sites>
```

### 说明

通过 `stl:sites` 标签在模板中显示站点列表

标签 `<stl:sites>` 用于显示站群中的站点，如果定义siteName或siteDir属性，系统将从对应站点的子站点中选择，否则系统将从所有站点中选择。

`<stl:sites>` 必须包含子标签，否则将不起作用，系统将找到对应的站点并在对应站点下解析子标签。子标签可以是任意STL标签或HTML标签。

属性 order 用于站点列表排序：

* order 不设置或设置为"Default"，站点列表将与CMS后台中站点的显示排序一致。
* order 设置为"Contents"，站点将根据内容数的多少进行排序，如果同时设置since属性，系统将根据对应时间段内添加的内容数量进行排序。
* order 设置为"Hits"，站点将根据页面点击量的多少进行排序，如果同时设置since属性，系统将根据对应时间段内页面浏览量的数量进行排序。

`<stl:sites>` 标签对应的实体为`{stl:sites}`。

### 属性

::: tip
所有属于 HTML 标签`<table>`的成员均适用于`<stl:sites>`标签。
:::
