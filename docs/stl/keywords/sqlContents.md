# <stl:sqlContents> 数据列表

```html
<stl:sqlContents
  databaseTypeName="数据库类型名称"
  databaseType="数据库类型"
  connectionStringName="数据库链接字符串名称"
  connectionString="数据库链接字符串"
  queryString="数据库查询语句"
  totalNum="显示数据总数"
  startNum="从第几条信息开始显示"
  layout="布局"
  columns="列数"
  direction="方向"
  height="整体高度"
  width="整体宽度"
  align="整体对齐"
  itemHeight="项高度"
  itemWidth="项宽度"
  itemAlign="项水平对齐"
  itemVerticalAlign="项垂直对齐"
  itemClass="项Css类"
>
</stl:sqlContents>
```

### 说明

通过 `<stl:sqlContents>` 标签在模板中显示任意数据库中的数据列表。

### 数据库连接

如果未设置 databaseTypeName，databaseType，connectionStringName，connectionString 属性，标签 `<stl:sqlContents>` 默认从当前 XYCMS 所在的数据库中获取数据，否则将从指定的数据库中获取数据。

属性 databaseTypeName 以及 connectionStringName 将从 XYCMS 配置文件 xycms.json 中获取数据库类型以及数据库连接字符串的值。

属性 databaseType 以及 connectionString 将直接设置数据库类型以及数据库连接字符串。

在正式环境中使用需要通过配置文件的方式设置数据库连接，以避免数据库信息暴露在外部，例如我们 xycms.json 文件中设置了远程数据库信息 RemoteDatabase：

```json
{
  "IsProtectData": false,
  "SecurityKey": "574929ebfff02fb61f85129150ec2e176da3c7b64792dc71",
  "Database": {
    "Type": "SQLite"
  },
  "RemoteDatabase": {
    "Type": "MySql",
    "ConnectionString": "Server=143.235.23.134;Uid=root;Pwd=databasepassword8;Database=new;"
  },
  "Redis": {
    "ConnectionString": ""
  }
}
```

我们可以这样设置 databaseTypeName 以及 connectionStringName ：

```html
<stl:sqlContents
  databaseTypeName="RemoteDatabase:Type"
  connectionStringName="RemoteDatabase:ConnectionString"></stl:sqlContents>
```

### 数据库查询

数据库查询有两种方式：
