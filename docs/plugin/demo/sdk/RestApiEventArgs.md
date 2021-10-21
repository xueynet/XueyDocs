# RestApiEventArgs class

Rest Api

``` c#
public class RestApiEventArgs : EventArgs
```

## Public Members

| name | description |
| :----- | :----- |
|RestApiEventArgs(…)	|初始化 RestApiEventArgs 类的新实例。|
|Request { get; }	|Rest Api 请求对象实例 IRequest。|
|Route { get; }	|Rest Api 请求路径。|
|RouteAction { get; }	|Rest Api 请求路径中包含的动作名称。|
|RouteId { get; }	|Rest Api 请求路径中包含的资源Id。|
|RouteResource { get; }	|Rest Api 请求路径中包含的资源名称。|

## Remarks

为Rest Api请求事件提供数据。

