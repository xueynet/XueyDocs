# <stl:queryString> SQL 查询语句

```html
<stl:queryString></stl:queryString>
```

### 说明

通过 `stl:queryString` 标签在模板中定义 SQL 查询语句

`<stl:queryString>` 必须作为 `<stl:sqlContents>` 或者 `<stl:pageSqlContents>` 的子标签使用。 `<stl:queryString>` 用于设置数据库查询语句（SQL 语句），在此标签内放置 SQL 语句。

`<stl:queryString>` 中定义的 SQL 语句内可以嵌入 STL 语句，如`{Channel.ChannelId}`当前栏目 Id、`{Stl.SiteId}`站点 Id 等。

如果为动态调取（在`<stl:dynamic>`内部使用），可以采用`{Request}`实体获取页面地址栏参数，如当前页面地址为“page.html#123”，即可使用`{Request.Id}`获取值并放到 SQL 语句中作为查询条件。

`<stl:queryString>` 标签对应的实体为`{stl:queryString}`。

### 示例

**显示最新添加的内容列表**

下面的例子显示按最新添加时间获取内容列表。

```html
<stl:sqlContents connectionStringName="ConnectionString">
  <stl:queryString>
    SELECT TOP 10 * FROM model_Content WHERE SiteId = {stl.SiteId} AND ChannelId > 0 ORDER BY AddDate DESC
  </stl:queryString>
  <stl:sqlContent type="Title" wordnum="20"></stl:sqlContent>
  (<stl:sqlContent type="AddDate" formatString="yyyy-MM-dd"></stl:sqlContent>)
  <br>
</stl:sqlContents>
```
