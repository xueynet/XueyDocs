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

| 父标签 | 说明 |
|:------|:-----|
| stl:contents | 内容列表 |
| stl:pageContents | 分页内容列表 |
| stl:sqlContents | 数据列表 |
| stl:pageSqlContents | 分页数据列表 |


### 子标签

| 子标签 | 说明 |
|:------|:-----|
| stl:query | 实现 AND 与 OR 组合 |

### 属性

| 属性 | 说明 |
|:------|:-----|
| type | 类型 |
| column | 字段 |
| op | 操作 |
| value | 值 |
| dataType | 数据类型 |

**type - 类型**

查询类型，此属性只可属于以下可能的取值的一种。

* "Where"
* "WhereNot"
* "OrWhere"
* "OrWhereNot"
* "WhereColumns"
* "OrWhereColumns"
* "WhereNull"
* "WhereNotNull"
* "OrWhereNull"
* "OrWhereNotNull"
* "WhereTrue"
* "OrWhereTrue"
* "WhereFalse"
* "OrWhereFalse"
* "WhereLike"
* "WhereNotLike"
* "OrWhereLike"
* "OrWhereNotLike"
* "WhereStarts"
* "WhereNotStarts"
* "OrWhereStarts"
* "OrWhereNotStarts"
* "WhereEnds"
* "WhereNotEnds"
* "OrWhereEnds"
* "OrWhereNotEnds"
* "WhereContains"
* "WhereNotContains"
* "OrWhereContains"
* "OrWhereNotContains"
* "WhereBetween"
* "OrWhereBetween"
* "WhereNotBetween"
* "OrWhereNotBetween"
* "WhereIn"
* "OrWhereIn"
* "WhereNotIn"
* "OrWhereNotIn"
* "WhereDate"
* "WhereNotDate"
* "OrWhereDate"
* "OrWhereNotDate"
* "WhereTime"
* "WhereNotTime"
* "OrWhereTime"
* "OrWhereNotTime"
* "Select"
* "From"
* "Limit"
* "Offset"
* "Take"
* "Skip"
* "ForPage"
* "Distinct"
* "OrderBy"
* "OrderByDesc"
* "OrderByRandom"

**column - 字段**

设置需要进行查询的数据库字段。

**op - 操作**
查询操作，默认为 =。

此属性只可属于以下可能的取值的一种。

* "=" 等于
* "!=" 不等于
* ">" 大于
* ">=" 大于等于
* "<" 小于
* "<=" 小于等于

**value - 值**

查询操作值。

**dataType - 数据类型**

column 字段的数据类型，默认为字符串类型。

此属性只可属于以下可能的取值的一种。

* "string" 字符串
* "int" 整数
* "bool" 布尔值
* "datetime" 时间/日期
* "decimal" 小数

### 示例

**单个查询条件**

下面的例子获取整站内容并筛选出指定作者的内容列表。

```html
<stl:pageContents index="首页" scope="all" pageNum="10">
  <stl:query type="where" column="author" value="李白"></stl:query>
  <stl:a></stl:a>
</stl:pageContents>
```

**多个AND查询条件**

下面的例子获取整站内容并筛选出标题中包含北京以及上海的内容列表。

```html
<stl:pageContents index="首页" scope="all" pageNum="10">
  <stl:query type="WhereLike" column="title" value="%北京%"></stl:query>
  <stl:query type="WhereLike" column="title" value="%上海%"></stl:query>
  <stl:a></stl:a>
</stl:pageContents>
```

**多个OR查询条件**

下面的例子获取整站内容并筛选出标题中包含北京或者上海的内容列表。

```html
<stl:pageContents index="首页" scope="all" pageNum="10">
  <stl:query type="orWhereLike" column="title" value="%北京%"></stl:query>
  <stl:query type="orWhereLike" column="title" value="%上海%"></stl:query>
  <stl:a></stl:a>
</stl:pageContents>
```

**组合查询条件**

`<stl:query>` 可以嵌套下级 `<stl:query>` 标签，实现AND与OR组合：

下面的例子获取整站内容并筛选出指定的栏目中内容标题包含北京或上海的内容显示。

```html
<stl:pageContents index="首页" scope="all" pageNum="10">
  <stl:query type="whereIn" column="channelId" value="23,24" dataType="int"></stl:query>
  <stl:query type="where">
    <stl:query type="orWhereLike" column="title" value="%北京%"></stl:query>
    <stl:query type="orWhereLike" column="title" value="%上海%"></stl:query>
  </stl:query>
  <stl:a></stl:a>
</stl:pageContents>
```
