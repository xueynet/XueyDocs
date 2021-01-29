# <stl:request> URL 地址请求

```html
<stl:request
  type="地址参数名称"
  elementId="指定需要显示URL请求值的HTML元素Id"
  callback="回调函数名称">
</stl:request>
```

### 说明

通过 `stl:request` 实体在模板中显示地址栏请求参数。

`<stl:request>` 标签可以使用简写 `{request.}`。

### 属性

| 属性 | 说明 |
|:------|:-----|
| type | 地址参数名称 |
| elementId | 指定需要显示地址参数值的HTML元素Id |
| callback | 回调函数名称 |


**type - 地址参数名称**

Url 地址参数的名称。

**elementId - 指定需要显示地址参数值的HTML元素Id**

如果设置了elementId属性，标签将会把地址参数值设置到对应HTML元素中。

**callback - 回调函数名称**

回调函数名称，如果设置了callback属性，标签将在页面载入后调用函数，并将地址参数的值作为函数的传参。
