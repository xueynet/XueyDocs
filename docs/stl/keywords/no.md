# <stl:no> 失败模板

```html
<stl:no></stl:no>
```

### 说明

通过 `stl:no` 标签在模板中显示失败模板

### 示例

**自定义无搜索结果提示**

下面的例子通过自定义载入中、有搜索结果以及无搜索结果模板来实现搜索页面的自定义。

```html
<stl:search>
  <stl:no>
    <div class="alert alert-danger" role="alert">
      <strong>抱歉!</strong> 找不到和您的查询相符的项目
    </div>
  </stl:no>
</stl:search>
```
