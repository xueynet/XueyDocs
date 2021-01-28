# <stl:query> 高级查询

```html
<stl:query
  type="类型"
  column="字段"
  op="操作"
  value="值"
  dataType="数据类型">
</stl:query>
```

### 说明

通过 `<stl:query>` 标签可以设置各种查询条件，使用方式模拟 SQL 语法，能够实现各种高级搜索与筛选。

`<stl:query>` 标签通常作为 `<stl:contents>` 或者 `<stl:pageContents>` 的子标签使用，用于设置内容列表的筛选条件。

`<stl:query>` 还可以不断嵌套 `<stl:query>` 标签，实现 AND 与 OR 组合。

### 父标签

`<stl:query>` 标签需要在以下标签内部使用。
