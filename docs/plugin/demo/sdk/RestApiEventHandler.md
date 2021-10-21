# RestApiEventHandler delegate

表示将用于处理Rest Api请求事件的方法。

``` c#
public delegate object RestApiEventHandler(object sender, RestApiEventArgs e);
```

| parameter | description |
| :----- | :----- |
|sender	|事件源。|
|e	|Rest Api请求事件数据的对象。|

## Return Value

Rest Api请求将返回的对象，系统将把此对象系列化为JSON字符串返回。

