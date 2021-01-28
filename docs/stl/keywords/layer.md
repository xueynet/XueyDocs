# <stl:layer> 页面弹层

```html
<stl:layer
  funcName="触发函数名称"
  title="标题"
  url="Url地址"
  width="宽度"
  height="高度"
  shadeClose="开启遮罩关闭"
  offset="坐标"
>
</stl:layer>
```

::: warning
`<stl:layer>` 标签需要使用 XYCMS 7.0.1 及以上版本。
:::

### 说明

通过 `stl:layer` 标签在模板中显示弹层组件。

`stl:layer` 标签底层采用 [layer 弹层组件](https://github.com/sentsin/layer)，可以参考 [layer 官方文档](https://layer.layui.com/)
