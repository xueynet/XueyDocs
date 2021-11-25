# 数据查询

Datory 使用 Repository 数据仓库的 GetAsync 方法获取单条数据，使用 GetAllAsync 方法获取列表数据，使用 ExistsAsync 判断数据是否存在。

## 获取单条数据

Repository 数据仓库的 GetAsync 方法用于获取单条数据，传参可以为数字、字符串或者 Query 对象，分别代表通过 Id 字段、通过 Guid 字段、通过 Query 对象获取单条数据。

``` c#
var repository = new Repository<DataModel>(settingsManager.Database, settingsManager.Redis);
var dataModel = await repository.GetAsync(10);
```

以上代码将获取 Id 为 10 的单条数据。

``` c#
var repository = new Repository<DataModel>(settingsManager.Database, settingsManager.Redis);
var dataModel = await repository.GetAsync(Q
  .Where("SiteId", 1)
  .OrderByDesc("Taxis")
);
```

以上代码构造 Query 对象，设置查询条件以及排序规则并返回符合条件的第一条数据。

GetAsync 方法也可以不传参数，系统将返回第一条数据。

如果未找到适合条件的数据，GetAsync 方法将返回 null 空对象。

## 获取列表数据

Repository 数据仓库的 GetAllAsync 方法用于获取数据列表，可以通过 Query 对象参数设置查询条件，如果不传参将返回全部数据列表。

``` c#
var repository = new Repository<DataModel>(settingsManager.Database, settingsManager.Redis);
var list = await _repository.GetAllAsync(Q
    .Where("SiteId", 1)
    .WhereNotNull("TagName")
    .OrderByDesc("UseNum")
);
```

以上代码构造 Query 对象，设置查询条件以及排序规则并返回符合条件数据列表，返回的数据列表将按照 Query 对象中设置的排序规则排序。

``` c#
var repository = new Repository<DataModel>(settingsManager.Database, settingsManager.Redis);
var list = await _repository.GetAllAsync();
```

以上代码将返回所有数据的列表

## 判断数据是否存在

Repository 数据仓库的 ExistsAsync 方法用于判断数据是否存在，传参可以为数字、字符串或者 Query 对象，分别代表通过 Id 字段、通过 Guid 字段、通过 Query 对象查询数据是否存在。

ExistsAsync 方法也可以不传参数，用于判断表中是否存在数据。

``` c#
var repository = new Repository<DataModel>(settingsManager.Database, settingsManager.Redis);
var exists = await _repository.ExistsAsync("Title", "名称");
```

以上代码构造 Query 对象，设置查询条件，如果存在返回 True，否则返回 False。