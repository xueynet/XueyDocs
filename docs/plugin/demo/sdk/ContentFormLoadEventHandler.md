# ContentFormLoadEventHandler delegate

表示将用于处理内容编辑（新增）页面的载入事件的方法。

``` c#
public delegate string ContentFormLoadEventHandler(object sender, ContentFormLoadEventArgs e);
```

| parameter | description |
| :----- | :----- |
|sender	|事件源。|
|e	|内容编辑（新增）页面的载入事件数据的对象。|

## Return Value

返回内容属性的Html，内容编辑（新增）页面将以此Html显示内容字段表单。 如果返回值为null或者Empty，内容编辑（新增）页面将隐藏此内容字段表单。

