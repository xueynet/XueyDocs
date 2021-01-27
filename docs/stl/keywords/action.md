# `<stl:action>` 执行动作

```html
<stl:action type="动作类型"></stl:action>
```

### 说明

通过 `<stl:action>` 标签在模板中创建链接，点击链接后页面将执行相应的动作。

标签 `<stl:action>` 所执行的动作由属性 type 指定：

* "Close" 执行关闭本页功能。
* "Translate" 执行整个站点的简体/繁体文字转换功能。

可以把任何 STL 标签或者 HTML 标签嵌套在 `<stl:action>` 元素内。

### 解析

如果使用 `<stl:action>` 元素，系统将解析元素为 HTML `<a>` 元素。

如果使用 `{stl:action}` 实体，系统将解析实体为 URL地址字符串。

### 属性

::: tip
所有属于 HTML 标签`<a>`的属性均适用于`<stl:action>`标签。
:::

| 属性 | 说明 |
|:-----|:-----|
| type | 动作类型 |

**type - 动作类型**

指定动作类型：

* "Close" 执行关闭本页功能。
* "Translate" 执行整个站点的简体/繁体文字转换功能。

### 示例

**简体/繁体转换**

下面的例子实现页面的简体/繁体转换功能，如果希望所有页面均实现转换，需要把代码放到所有模板中（通常放到头部包含文件）。

```html
<stl:action type="Translate">繁体</stl:action>
```

解析后的 HTML 代码：

```html
<a href="javascript:;" id="translateLink">繁体</a>
```
