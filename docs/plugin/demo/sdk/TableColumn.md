# TableColumn class

数据库表字段信息。

``` c#
public class TableColumn
```

## Public Members

| name | description |
| :----- | :----- |
|TableColumn()	|The default constructor.|
|AttributeName { get; set; }	|字段名称。|
|DataLength { get; set; }	|数据长度。|
|DataType { get; set; }	|数据类型。|
|InputStyle { get; set; }	|字段提交表单样式。|
|IsIdentity { get; set; }	|是否为自增长字段。|
|IsPrimaryKey { get; set; }	|是否为表主键。|

