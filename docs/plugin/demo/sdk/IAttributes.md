# IAttributes interface

可扩展属性的对象接口。 系统以键/值对的方式存储数据，键不区分大小写。

``` c#
public interface IAttributes
```

## Members

| name | description |
| :----- | :----- |
|ContainsKey(…)	|确定是否实例包含指定键。|
|Get(…)	|获取与指定键关联的值。|
|GetBool(…)	|获取与指定键关联的值。|
|GetDateTime(…)	|获取与指定键关联的值。|
|GetDecimal(…)	|获取与指定键关联的值。|
|GetInt(…)	|获取与指定键关联的值。|
|GetString(…)	|获取与指定键关联的值。|
|Load(…)	|将 IDataReader 中的数据导入到实例中。 如果现有数据和导入数据名称冲突，系统将使用导入的数据覆盖现有的数据。 (8 methods)|
|Remove(…)	|将带有指定键的值从实例中移除。|
|Set(…)	|将指定的键和值添加到实例中。|
|ToDictionary()	|返回表示键和值的集合 Dictionary|
|ToString()	|将实例序列化为JSON字符串并返回|
|ToString(…)	|将实例序列化为JSON字符串并返回|

