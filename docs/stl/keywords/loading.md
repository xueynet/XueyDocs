# <stl:loading> 载入模板

```html
<stl:loading></stl:loading>
```

### 说明

通过 `stl:loading` 标签在模板中创建载入中显示的内容

`<stl:loading>` 用于实现在载入中的显示内容及样式，典型的使用场景为 `<stl:search>` 标签内使用，显示正在搜索的提示。

`<stl:loading>` 标签可以包含任何 HTML 标签或 STL 标签。

`<stl:loading>` 标签对应的实体为`{stl:loading}`。

### 示例

**自定义搜索功能载入中模板**

下面的例子实现页面的简体/繁体转换功能，如果希望所有页面均实现转换，需要把代码放到所有模板中（通常放到头部包含文件）。

```html
<stl:search>
  <stl:loading>
    <div class="alert alert-info" role="alert">
      <strong>提示!</strong> 系统正在搜索中，请稍后...
    </div>
  </stl:loading>
</stl:search>
```
