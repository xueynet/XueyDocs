# <stl:pageSqlContents> 分页数据列表

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

| 子标签 | 说明 |
|:------|:-----|
| stl:query | 定义数据库查询语句 |
| stl:queryString | 定义数据库查询语句 |
| stl:sqlContent | 数据库值 |
| stl:pageItems | 分页项容器 |
| stl:pageItem | 分页项 |

### 属性

::: tip
所有属于 STL 标签 `<stl:sqlContents>` 的成员均适用于 `<stl:pageSqlContents>` 标签，所有属于 HTML 标签`<table>`的成员均适用于`<stl:pageSqlContents>`标签。
:::

| 属性 | 说明 |
|:------|:-----|
| pageNum | 每页显示的数据数量 |
| databaseTypeName | 数据库类型名称 |
| databaseType | 数据库类型 |
| connectionStringName | 数据库链接字符串名称 |
| connectionString | 数据库链接字符串 |
| queryString | 数据库查询语句 |
| totalNum | 显示数据总数 |
| startNum | 从第几条信息开始显示 |
| layout | 布局 |
| columns | 列数 |
| direction | 方向 |
| height | 整体高度 |
| width | 整体宽度 |
| align | 整体对齐 |
| itemHeight | 项高度 |
| itemWidth | 项宽度 |
| itemAlign | 项水平对齐 |
| itemVerticalAlign | 项垂直对齐 |
| itemClass | 项 Css 类 |

**pageNum - 每页显示的数据数量**

每一页显示的数据库数据数量。

每页显示 6 条数据，最多显示 5 页：

```html
<stl:pageSqlContents pageNum="6" totalNum="30">
  <stl:sqlContent type="name"></stl:sqlContent><br />
</stl:pageSqlContents>
```

**databaseTypeName - 数据库类型名称**

存储在系统根目录的 xycms.json 文件中的数据库类型名称，默认为系统使用的数据库类型。

**databaseType - 数据库类型**

databaseType 属性用于设置数据库类型。

* "MySql" MySql 数据库
* "SqlServer" SqlServer 数据库
* "PostgreSql" PostgreSql 数据库
* "SQLite" SQLite 数据库

**connectionStringName - 数据库链接字符串名称**

存储在系统根目录的 xycms.json 文件中的数据库链接字符串名称，默认为系统使用的数据库 ConnectionString。

**connectionString - 数据库链接字符串**

直接设置数据库链接字符串。

::: danger
connectionString 属性将在模板文件中暴露数据库链接字符串，如果网站部署在外网，必须使用 connectionStringName 替代 connectionString 属性，防止数据库链接被暴露。
:::

**queryString - 数据库查询语句**

设置数据库查询 SQL 语句，如果 SQL 语句需要较长建议使用子标签 `<stl:queryString>` 代替。

**totalNum - 显示数据总数**

设置列表一共显示多少条信息，默认值为 0，代表显示所有信息。

```html
<stl:pageSqlContents totalNum="7">
  <stl:sqlContent type="name"></stl:sqlContent><br />
</stl:pageSqlContents>
```

**startNum - 从第几条信息开始显示**

设置列表从第几条信息开始显示，默认值为 1，代表从第一条信息开始显示。

```html
<stl:pageSqlContents startNum="3" totalNum="7">
  <stl:sqlContent type="name"></stl:sqlContent><br />
</stl:pageSqlContents>
```

**layout - 布局**

列表布局属性用于控制列表循环中每一项的显示方式，默认值为 none，即直接循环，不控制列表项显示。

* "none" 列表不使用布局，仅循环列表项，不控制列表项显示。此值是默认的，如果没有指定属性的话。
* "table" 列表使用表格布局，系统将把列表标签解析为 HTML `<table>` 元素，table 标签的所有属性（class、style、cellPadding、cellSpacing 等）均可用在列表标签中。

```html
<stl:pageSqlContents
  layout="table"
  columns="3"
  width="90%"
  border="0"
  cellpadding="2"
>
  <stl:sqlContent type="name"></stl:sqlContent>
</stl:pageSqlContents>
```

**columns - 列数**

columns 属性决定要显示的列的数量。比如，如果要在列表中显示四列的项，那么可以把这个属性设为 4。

```html
<stl:pageSqlContents
  layout="table"
  columns="3"
  width="90%"
  border="0"
  cellpadding="2"
>
  <stl:sqlContent type="name"></stl:sqlContent>
</stl:pageSqlContents>
```

::: warning
columns 属性只有当列表布局为表格 `layout="table"` 时才起作用。
:::


**direction - 方向**

direction 属性用于确定列表是按水平方向还是或垂直方向来重复。

* "vertical" 垂直
* "horizontal" 水平

如果将此属性设置为 vertical，列表中的项显示在从上到下加载的列中，然后从左到右，直到呈现所有项。例如，如果将 columns 属性设置为 3，列表中的项显示在三列中，如下表所示。

| 1 | 4 | 7 |
|:---:|:---:|:---:|
| 2	| 5	| 8 |
| 3	| 6	| 9 |

如果将此属性设置为 horizontal，列表中的项以从左到右加载的行显示，然后从上到下，直到呈现所有项。例如，如果将 columns 属性设置为 3，列表的项将以每行三项的形式显示，如下表所示。

| 1 | 2 | 3 |
|:---:|:---:|:---:|
| 4 | 5	| 6 |
| 7	| 8	| 9 |

::: tip
即使 direction 值为 vertical，还是显示为 4 个列。columns 永远是指重复的列的数量，而不是行的数量。
:::

::: warning
direction 属性只有当列表布局为表格 `layout="table"` 且设置了列数 columns 时才起作用。
:::

**height - 整体高度**

设置列表的整体高度。

::: warning
height 属性只有当列表布局为表格 `layout="table"` 时才起作用。
:::

**width - 整体宽度**

设置列表的整体宽度。

::: warning
width 属性只有当列表布局为表格 `layout="table"` 时才起作用。
:::

**align - 整体对齐**

设置列表的整体对齐方式。

* "center" 居中对齐。
* "left" 居左对齐。
* "right" 居右对齐。
* "justify" 向页面的左右边缘对齐。
* "notSet" 不设置。此值是默认的，如果没有指定属性的话。

::: warning
align 属性只有当列表布局为表格 `layout="table"` 时才起作用。
:::

**itemHeight - 项高度**

列表中每一项的高度。

::: warning
itemHeight 属性只有当列表布局为表格 `layout="table"` 时才起作用。
:::

**itemWidth - 项宽度**

列表中每一项的宽度。

::: warning
itemWidth 属性只有当列表布局为表格 `layout="table"` 时才起作用。
:::

**itemAlign - 项水平对齐**

列表中每一项的水平对齐方式。

* "center" 居中对齐。
* "left" 居左对齐。
* "right" 居右对齐。
* "justify" 向页面的左右边缘对齐。
* "notSet" 不设置。此值是默认的，如果没有指定属性的话。

::: warning
itemAlign 属性只有当列表布局为表格 `layout="table"` 时才起作用。
:::

**itemVerticalAlign - 项垂直对齐**

列表中每一项的垂直对齐方式。

* "top" 顶端对齐。
* "middle" 居中对齐。
* "bottom" 底端对齐。
* "notSet" 不设置。此值是默认的，如果没有指定属性的话。

::: warning
itemVerticalAlign 属性只有当列表布局为表格 `layout="table"` 时才起作用。
:::

**itemClass - 项Css类**

列表中每一项的Css类名称。

::: warning
itemClass 属性只有当列表布局为表格 `layout="table"` 时才起作用。
:::

### 示例

**显示最新添加的内容列表**

下面的例子显示按最新添加时间获取内容列表。

```html
<stl:pageSqlContents pageNum="6" totalNum="30" cellpadding="2">
  <stl:queryString>
    SELECT * FROM siteserver_Content_1 WHERE SiteId = {stl.SiteId} AND ChannelId > 0 ORDER BY AddDate DESC
  </stl:queryString>
  <stl:sqlContent type="Title" wordnum="20"></stl:sqlContent>
  (<stl:sqlContent type="AddDate" formatString="yyyy-MM-dd"></stl:sqlContent>)
  <br>
</stl:pageSqlContents>

<hr>

<stl:pageItems>
<div class="pagination">
  <ul>
    <li><a href="{PageItem.PreviousPage}">Prev</a></li>
    <stl:pageItem type="PageNavigation">
      <stl:yes>
        <li><a href="{Current.Url}">{Current.Num}</a></li>
      </stl:yes>
      <stl:no>
        <li class="active"><span>{Current.Num}</span></li>
      </stl:no>
    </stl:pageItem>
    <li><a href="{PageItem.NextPage}">Next</a></li>
  </ul>
</div>
</stl:pageItems>
```
