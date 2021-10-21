# 数据库操作

PluginBase 中定义三个和数据库相关的属性：

| 属性 | 类型 | 说明 |
| :----- | :----- | :----- |
|ConnectionString|string|数据库连接字符串|
|DatabaseType|DatabaseType|数据库连接字符串|
|DatabaseApi|IDatabaseApi|数据库连接字符串|

通过使用父类PluginBase中的数据库属性，我们就可以实现数据库操作了。

对数据库操作的方式有很多种，可以根据喜好选择最合适的方法。

## 新增数据

新增数据示例：

``` c#
public int Insert(LogInfo logInfo)
{
    string sqlString = $@"INSERT INTO {TableName}
(
{nameof(LogInfo.FormId)},
{nameof(LogInfo.ItemIds)},
{nameof(LogInfo.UniqueId)},
{nameof(LogInfo.AddDate)},
{nameof(LogInfo.AttributeValues)}
) VALUES (
@{nameof(LogInfo.FormId)}, 
@{nameof(LogInfo.ItemIds)}, 
@{nameof(LogInfo.UniqueId)},
@{nameof(LogInfo.AddDate)},
@{nameof(LogInfo.AttributeValues)}
)";

    var parameters = new List<IDataParameter>
    {
        databaseApi.GetParameter(nameof(logInfo.FormId), logInfo.FormId),
        databaseApi.GetParameter(nameof(logInfo.ItemIds), logInfo.ItemIds),
        databaseApi.GetParameter(nameof(logInfo.UniqueId), logInfo.UniqueId),
        databaseApi.GetParameter(nameof(logInfo.AddDate), logInfo.AddDate),
        databaseApi.GetParameter(nameof(logInfo.AttributeValues), logInfo.ToString())
    };

    return databaseApi.ExecuteNonQueryAndReturnId(TableName, nameof(LogInfo.Id), connectionString, sqlString, parameters.ToArray());
}
```

## 修改数据

修改数据示例：

``` c#
public void Update(FieldInfo info)
{
    string sqlString = $@"UPDATE {TableName} SET
        {nameof(FieldInfo.FormId)} = @{nameof(FieldInfo.FormId)}, 
        {nameof(FieldInfo.Taxis)} = @{nameof(FieldInfo.Taxis)}, 
        {nameof(FieldInfo.Title)} = @{nameof(FieldInfo.Title)},
        {nameof(FieldInfo.Description)} = @{nameof(FieldInfo.Description)},
        {nameof(FieldInfo.PlaceHolder)} = @{nameof(FieldInfo.PlaceHolder)},
        {nameof(FieldInfo.FieldType)} = @{nameof(FieldInfo.FieldType)},
        {nameof(FieldInfo.Settings)} = @{nameof(FieldInfo.Settings)}
    WHERE {nameof(FieldInfo.Id)} = @{nameof(FieldInfo.Id)}";

    var updateParms = new []
    {
        databaseApi.GetParameter(nameof(FieldInfo.FormId), info.FormId),
        databaseApi.GetParameter(nameof(FieldInfo.Taxis), info.Taxis),
        databaseApi.GetParameter(nameof(FieldInfo.Title), info.Title),
        databaseApi.GetParameter(nameof(FieldInfo.Description), info.Description),
        databaseApi.GetParameter(nameof(FieldInfo.PlaceHolder), info.PlaceHolder),
        databaseApi.GetParameter(nameof(FieldInfo.FieldType), info.FieldType),
        databaseApi.GetParameter(nameof(FieldInfo.Settings), info.Settings),
        databaseApi.GetParameter(nameof(FieldInfo.Id), info.Id)
    };

    databaseApi.ExecuteNonQuery(connectionString, sqlString, updateParms);
}
```

## 删除数据

删除数据示例：

``` c#
public void Delete(int fieldId)
{
    string sqlString = $"DELETE FROM {TableName} WHERE {nameof(FieldInfo.Id)} = @{nameof(FieldInfo.Id)}";

    var parms = new []
    {
        databaseApi.GetParameter(nameof(FieldInfo.Id), fieldId)
    };

    databaseApi.ExecuteNonQuery(connectionString, sqlString, parms);
}
```

## 查询数据

删除数据示例：

``` c#
public FieldInfo GetFieldInfo(int id, bool isItems)
{
    FieldInfo fieldInfo = null;

    string sqlString =
        $@"SELECT
{nameof(FieldInfo.Id)}, 
{nameof(FieldInfo.FormId)}, 
{nameof(FieldInfo.Taxis)},
{nameof(FieldInfo.Title)},
{nameof(FieldInfo.Description)},
{nameof(FieldInfo.PlaceHolder)},
{nameof(FieldInfo.FieldType)},
{nameof(FieldInfo.Settings)}
FROM {TableName} 
WHERE {nameof(FieldInfo.Id)} = @{nameof(FieldInfo.Id)}";

    var parms = new []
    {
        databaseApi.GetParameter(nameof(FieldInfo.Id), id)
    };

    using (var rdr = databaseApi.ExecuteReader(connectionString, sqlString, parms))
    {
        if (rdr.Read())
        {
            fieldInfo = GetFieldInfo(rdr);
        }
        rdr.Close();
    }

    return fieldInfo;
}
```