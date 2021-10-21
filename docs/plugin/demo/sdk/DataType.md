# DataType class

系统支持的数据库数据类型

``` c#
public class DataType : IComparable<DataType>, IEquatable<DataType>
```

## Public Members

| name | description |
| :----- | :----- |
|static readonly Boolean	|布尔值数据类型|
|static readonly DateTime	|日期数据类型|
|static readonly Decimal	|小数数据类型|
|static readonly Integer	|整数数据类型|
|static readonly Text	|长文本数据类型|
|static readonly VarChar	|字符串数据类型|
|Value { get; }	|数据类型的值。|
|CompareTo(…)	|比较两个数据类型是否一致。|
|Equals(…)	|比较两个数据类型是否一致。|
|override Equals(…)	||
|override GetHashCode()	||
|override ToString()	||
|operator ==	|比较两个数据类型是否一致。|
|operator !=	|比较两个数据类型是否不一致。|

