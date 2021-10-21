# DatabaseType class

系统支持的数据库类型

``` c#
public class DatabaseType : IComparable<DatabaseType>, IEquatable<DatabaseType>
```

## Public Members

| name | description |
| :----- | :----- |
|static readonly MySql	|MySql 数据库|
|static readonly Oracle	|Oracle 数据库|
|static readonly PostgreSql	|PostgreSql 数据库|
|static readonly SqlServer	|SqlServer 数据库|
|Value { get; }	|数据库类型的值。|
|CompareTo(…)	|比较两个数据库类型是否一致。|
|Equals(…)	|比较两个数据库类型是否一致。|
|override Equals(…)	||
|override GetHashCode()	||
|override ToString()	||
|operator ==	|比较两个数据库类型是否一致。|
|operator !=	|比较两个数据库类型是否不一致。|

