# 添加插件数据库表

插件通常拥有自己的数据库表结构，在此我们将说明如何在插件中定义插件表名称及字段结构。

参考 TableColumn、DataType。

``` c#
public IService AddDatabaseTable(string tableName, List<TableColumn> tableColumns)
```

tableName 代表表在数据库中的名称，请设置唯一的表名；tableColumns 代表表的数据库中的字段信息。

假设我们用FormDao类存储表名称和字段信息：

``` c#
public class MyTableDao
{
    public const string TableName = "xycms_my_table";

    public static List<TableColumn> Columns => new List<TableColumn>
    {
        new TableColumn
        {
            AttributeName = "Id",
            DataType = DataType.Integer
        },
        new TableColumn
        {
            AttributeName = "SiteId",
            DataType = DataType.Integer
        },
        new TableColumn
        {
            AttributeName = "ChannelId",
            DataType = DataType.Integer
        },
        new TableColumn
        {
            AttributeName = "ContentId",
            DataType = DataType.Integer
        },
        new TableColumn
        {
            AttributeName = "Title",
            DataType = DataType.VarChar,
            DataLength = 200
        },
        new TableColumn
        {
            AttributeName = "Description",
            DataType = DataType.VarChar,
            DataLength = 200
        },
        new TableColumn
        {
            AttributeName = "Taxis",
            DataType = DataType.Integer
        },
        new TableColumn
        {
            AttributeName = "IsTimeout",
            DataType = DataType.Boolean
        },
        new TableColumn
        {
            AttributeName = "TimeToStart",
            DataType = DataType.DateTime
        },
        new TableColumn
        {
            AttributeName = "TimeToEnd",
            DataType = DataType.DateTime
        },
        new TableColumn
        {
            AttributeName = "Settings",
            DataType = DataType.Text
        }
    };
}
```

下面的例子显示添加插件表。

``` c#
public class Main : PluginBase
{
    public override void Startup(IService service)
    {
        service.AddDatabaseTable(FormDao.TableName, FormDao.Columns);
    }
}
```

可以同时添加多个插件表。

``` c#
public class Main : PluginBase
{
    public override void Startup(IService service)
    {
        service
            .AddDatabaseTable(FormDao.TableName, FormDao.Columns)
            .AddDatabaseTable(LogDao.TableName, LogDao.Columns)
            .AddDatabaseTable(FieldDao.TableName, FieldDao.Columns)
            .AddDatabaseTable(FieldItemDao.TableName, FieldItemDao.Columns);
    }
}
```