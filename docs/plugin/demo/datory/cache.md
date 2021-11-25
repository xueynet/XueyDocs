# 数据缓存

Datory 框架默认包含缓存机制，对于需要频繁获取的数据，我们通过 Query 对象的 CachingGet 从缓存获取数据（当缓存不存在时，系统将从数据库获取并将数据添加至缓存），通过 Query 对象的 CachingRemove 方法清除缓存。

## 获取缓存

``` c#
var cacheKey = "XYCMS.Core.Repositories.User." + userName;
var dataModel = await GetAsync(Q
    .Where("UserName", userName)
    .CachingGet(cacheKey)
);
```

以上代码首先定义了缓存键 cacheKey 的值，我们需要保证 cacheKey 值的唯一性，系统将首先通过缓存键从内存或者Redis中获取数据，如果没有对应的数据，系统将从数据库中获取数据并将获取到的数据缓存起来。

## 清除缓存

通常更新数据后需要清除缓存，这时候我们需要使用 CachingRemove 方法：

``` c#
var cacheKey = "XYCMS.Core.Repositories.User." + userName;
await _repository.UpdateAsync(Q
    .Set("Title", "新标题")
    .Set("Count", 100)
    .Where("UserName", userName)
    .CachingRemove(cacheKey)
);
```

以上代码将更新数据值，同时清除缓存。

## Redis 缓存

Datory 框架默认使用内存作为缓存系统，如果希望使用Redis作为缓存系统，需要在构建 Repository 数据仓库对象时传递 Redis 连接信息：

``` c#
var repository = new Repository<DataModel>(settingsManager.Database, settingsManager.Redis);
```

Repository 构造函数中第一个参数为数据库连接信息，第二个参数为Redis连接信息。