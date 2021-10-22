# IDatabaseApi interface

数据库操作Api接口。

``` c#
public interface IDatabaseApi
```

## Members

| name | description |
| :----- | :----- |
|ExecuteCurrentId(…)	|获取当前数据库类型INSERT SQL语句执行后表生成的自增长Id。 (3 methods)|
|ExecuteDataset(…)	|对连接字符串中指定的数据库执行命令并返回DataSet。 (6 methods)|
|ExecuteNonQuery(…)	|对连接字符串中指定的数据库执行命令。 (6 methods)|
|ExecuteNonQueryAndReturnId(…)	|执行INSERT SQL命令并返回自增长Id的值。 (2 methods)|
|ExecuteReader(…)	|对连接字符串中指定的数据库执行SQL 命令并返回IDataReader。 (6 methods)|
|ExecuteScalar(…)	|对连接字符串中指定的数据库执行SQL 命令并返回值。 (6 methods)|
|GetBoolean(…)	|获取数据库布尔类型值。 (2 methods)|
|GetConnection(…)	|返回给定连接字符串的IDbConnection对象。|
|GetDateTime(…)	|获取数据库日期/时间类型值。 (2 methods)|
|GetDecimal(…)	|获取数据库小数类型值。 (2 methods)|
|GetInt(…)	|获取数据库整数类型值。 (2 methods)|
|GetPageSqlString(…)	|获取当前数据库类型的能够分页的SQL语句。|
|GetParameter(…)	|获取用于SQL命令的IDataParameter。|
|GetString(…)	|获取数据库字符串类型值。 (2 methods)|
|ToBooleanSqlString(…)	|将布尔值转换为当前数据库类型能够识别的布尔SQL语句。|
|ToDateSqlString(…)	|将日期/时间值转换为当前数据库类型能够识别的日期SQL语句。|
|ToDateTimeSqlString(…)	|将日期/时间值转换为当前数据库类型能够识别的时间SQL语句。|
|ToMinusSqlString(…)	|获取当前数据库类型的减操作符SQL语句。|
|ToNowSqlString()	|获取当前数据库类型代表当前时间的SQL语句。|
|ToPlusSqlString(…)	|获取当前数据库类型的加操作符SQL语句。|

