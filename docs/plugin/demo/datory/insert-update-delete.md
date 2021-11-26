# 插入/更新/删除

Datory 使用 Repository 数据仓库的 InsertAsync 方法插入数据，使用 UpdateAsync 方法更新数据，使用 DeleteAsync 方法删除数据。

## 插入数据

``` c#
public async Task<int> InsertAsync(DataModel dataModel)
{
    var repository = new Repository<DataModel>(settingsManager.Database, settingsManager.Redis);
    return await repository.InsertAsync(dataModel);
}
```

以上代码插入数据并返回新数据的 Id 自增长字段值。

## 更新数据

``` c#
public async Task<bool> UpdateAsync(DataModel dataModel)
{
    var repository = new Repository<DataModel>(settingsManager.Database, settingsManager.Redis);
    return await repository.UpdateAsync(dataModel);
}
```

以上代码更新数据并返回布尔值，用于指示是否更新成功。

除了对整条数据进行更新，我们也可以只更新指定字段的值：

``` c#
var repository = new Repository<DataModel>(settingsManager.Database, settingsManager.Redis);
await repository.UpdateAsync(Q
    .Set("Title", "新标题")
    .Set("Count", 100)
    .Where("Id", 100)
);
```

以上代码将更新 Id 为100数据行的 Title 以及 Count 字段的值。

## 删除数据

通过传递 Id 字段的值，我们可以删除指定数据：

``` c#
await repository.DeleteAsync(100);
```

我们也可以使用 Query 对象，指定需要删除的数据：

``` c#
var query = Q.Where("CreatedDate", "<", DateTime.Now.AddDays(-1));
await repository.DeleteAsync(query);
```

如果我们希望清除表内的所有数据，我们可以不传参数：

``` c#
public async Task DeleteAllAsync()
{
    await repository.DeleteAsync();
}
```
