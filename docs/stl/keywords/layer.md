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

### 属性

| 属性 | 说明 |
|:------|:-----|
| funcName | 触发函数名称 |
| title | 标题 |
| url | Url 地址 |
| width | 宽度 |
| height | 高度 |
| shadeClose | 开启遮罩关闭 |
| offset | 坐标 |

**funcName - 触发函数名称**

设置触发函数名称，调用函数将显示弹层组件。

如果不设置 funcName 属性，页面将在加载完毕后自动显示弹层组件。

**title - 标题**

弹出窗口的标题。

**url - Url 地址**

指定弹出层的 Url 地址，如果不设置 url 属性，标签默认将在弹出层中显示 stl:layer 内嵌套的 HTML。

#width - 宽度
在默认状态下，弹出层宽高都是自适应的，可以设置 width 宽度为固定值，如 width="500px"，高度仍然是自适应的。

可以按窗口的百分比设置宽度，如 width="50%"。

**height - 高度**

当需要指定弹出层的高度是，可以设置 height 高度为固定值，如 height="400px"，或者按窗口的百分比设置高度，如 height="50%"。

**shadeClose - 开启遮罩关闭**

可以设定 shadeClose 来控制是否点击弹层外区域关闭，默认为 true。

**offset - 坐标**

弹出层默认是垂直水平居中的，可以设置 offset 坐标自定义弹出层位置。

| 值 | 备注 |
|:------|:-----|
| auto | 默认坐标，即垂直水平居中 |
| 100px | 只定义 top 坐标，水平保持居中 |
| ['100px', '50px'] | 同时定义 top、left 坐标 |
| t | 快捷设置顶部坐标 |
| r | 只定义 top 坐标，水平保持居中 |
| b | 快捷设置底部坐标 |
| l | 快捷设置左边缘坐标 |
| lt | 快捷设置左上角 |
| lb | 快捷设置左下角 |
| rt | 快捷设置右上角 |
| rb | 快捷设置右下角 |

### 示例

**点击按钮弹出内容正文**

下面的例子在内容模板中添加链接，点击后弹出内容正文：

```html
<a href="#" onclick="onButtonClick()">弹出内容正文</a>

<stl:layer funcName="onButtonClick" title="内容正文" width="50%" height="80%">
  <div style="padding: 20px">
    <stl:content type="body"></stl:content>
  </div>
</stl:layer>
```

**点击按钮弹出指定地址**

下面的例子在内容模板中添加链接，点击后弹出指定Url地址：

```html
<a href="#" onclick="onButtonClick()">弹出Url</a>

<stl:layer funcName="onButtonClick" title="指定Url" url="http://docs.xuey.net" width="50%" height="80%"></stl:layer>
```

**页面载入后自动弹出窗口**

下面的例子不设置funcName，stl:layer标签将在页面载入后自动弹出窗口

```html
<stl:layer title="指定Url" url="http://docs.xuey.net" width="50%" height="80%"></stl:layer>
```
