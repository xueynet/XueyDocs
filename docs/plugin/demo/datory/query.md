# Query 对象

对于简单的查询，我们可以直接传递 Id 字段或者 Guid 字段的值获取数据，不过对于复杂查询我们通常需要构建 Query 对象，设置条件及排序等规则进行查询。

Query 对象可以作为参数传递给 Repository 数据仓库的 GetAsync、GetAllAsync 以及 ExistsAsync方法。

我们可以使用静态类 Q 快速创建 Query 对象，例如：

``` c#
var query = Q.NewQuery();
if (!string.IsNullOrEmpty(keyword))
{
    query.WhereLike(`Title`, $"%{keyword}%");
}
if (!string.IsNullOrEmpty(order))
{
    query.OrderByDesc(order);
}
```

或者也可以直接设置条件快速创建 Query 对象，例如：

``` c#
var query = Q.Where(Title, "标题");
```

## Where 筛选

Datory 提供了许多有用的方法来使编写 Where 条件变得容易。

所有 Where 方法都带有 NOT 和 OR 运算符的重载，可以使用 OrWhereNull 来应用布尔 OR 运算符和 WhereNotNull 或 OrWhereNotNull 来否定条件。

Where 方法第一个参数是字段名，第二个参数是可选的，默认为 = 操作。

``` c#
var query = Q.Where("Id", 10);
// 等同于
var query = Q.Where("Id", "=", 10);
```

我们可以采用链式操作组合多个 Where 条件，条件之间是 AND 关系：

``` c#
var query = Q.Where("Score", ">", 10).WhereDate("LastActivityDate", ">=", dateTime);
```

我们可以通过 NOT 和 OR 运算符实现非及或操作：

``` c#
var query = Q.WhereNot(GroupId, groupId).OrWhere("Title", "标题");
```

要将条件分组，只需将它们包装在另一个 Where 块中。

``` c#
var query = Q.Where("Title", "标题").Where(q =>
    q.Where("Taxis" ">", 0).OrWhere("Count", 0)
);
```

系统将解析为以下 SQL 查询条件：

``` c#
WHERE Title = '标题' AND (Taxis > 0 OR Count = 0)
```

## Order 排序

可以使用 OrderBy 以及 OrderByDesc 对数据列表进行排序，例如：

``` c#
var repository = new Repository<DataModel>(settingsManager.Database, settingsManager.Redis);
var query = Q.OrderBy("CreatedDate").OrderByDesc("Name");
var list = await repository.GetAllAsync(query);
```

系统将解析为以下 SQL 排序：

``` c#
ORDER BY CreatedDate, Name DESC
```

## 数目限制

可以使用 Limit 以及 Offset 限制从数据库返回的结果数量。

``` c#
var query = Q.OrderByDesc("Id").Limit(10);
```

以上代码将返回前10条数据。

``` c#
var query = Q.OrderByDesc("Id").Offset(10).Limit(20);
```

以上代码将跳过前10条数据并返回后20条数据。

除了通过 Limit 以及 Offset 限制数量，我们也可以使用 ForPage 方法快速对数据进行分页：

``` c#
var query = Q.OrderByDesc("Id").ForPage(page, pageSize);
```

参数 page 代表获取第几页, pageSize 代表一页返回多少行，如果不传 pageSize 参数，默认将返回15行每页，可以通过将整数作为第二个参数传递来覆盖此值。

## 字符串操作

Query 查询提供 WhereStarts，WhereEnds，WhereContains 和 WhereLike 方法来处理类似类型的字符串。

``` c#
var query = Q.WhereLike("Title", "%中国%");
```

以上代码将查询所有标题包含 中国 的数据，和 SQL LIKE 语句一样，我们使用 WhereLike 方法时，必须手动添加通配符 %。

## 日期操作

Query 查询提供 WhereDate，WhereTime 和 WhereDatePart 方法来处理日期列。

``` c#
var query = Q.WhereDate("CreatedDate", "2021-01-01");
```

以上代码将查询日期时间列的日期部分。