# <stl:pageSqlContents> 翻页数据列表

```html
<stl:pageSqlContents
  pageNum="每页显示的数据数量"
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
</stl:pageSqlContents>
```

### 说明

通过 `<stl:pageSqlContents>` 标签在模板中显示任意数据库中的数据列表。

所有适用于 `<stl:sqlContents>` 标签的用法均适用于 `<stl:pageSqlContents>` 标签。

### 数据库连接

如果未设置 databaseTypeName，databaseType，connectionStringName，connectionString 属性，标签 `<stl:pageSqlContents>` 默认从当前 XYCMS 所在的数据库中获取数据，否则将从指定的数据库中获取数据。

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
<stl:pageSqlContents
  databaseTypeName="RemoteDatabase:Type"
  connectionStringName="RemoteDatabase:ConnectionString"></stl:pageSqlContents>
```

### 数据库查询

数据库查询有两种方式：

**queryString 查询**
第一种方式是通过属性 queryString 或者子标签 `<stl:queryString>` 直接输入 SQL 语句进行查询，如：

```html
<stl:pageSqlContents
  databaseTypeName="RemoteDatabase:Type"
  connectionStringName="RemoteDatabase:ConnectionString"
>
  <stl:queryString>select * from siteserver_Administrator</stl:queryString>
  <stl:sqlContent type="userName"></stl:sqlContent>
</stl:pageSqlContents>
```

如果在动态标签中使用，可能出现 SQL 注入风险，所以不推荐使用直接输入 SQL 语句的方式进行数据库查询。

**query 查询**

第二种方式是通过 `<stl:query>` 子标签的方式查询，如：

```html
<stl:pageSqlContents
  databaseTypeName="RemoteDatabase:Type"
  connectionStringName="RemoteDatabase:ConnectionString"
>
  <stl:query type="select" value="*"></stl:query>
  <stl:query type="from" value="siteserver_Administrator"></stl:query>
  <stl:sqlContent type="UserName"></stl:sqlContent>
</stl:pageSqlContents>
```

`<stl:query>` 方式查询必须包含有 `type="from"` 的值，用于设置查询表名称。

推荐使用 `<stl:query>` 子标签的方式对数据库进行查询，从而避免 SQL 注入风险。

### 子标签
