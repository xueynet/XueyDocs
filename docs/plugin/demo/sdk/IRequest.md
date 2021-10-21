# IRequest interface

访问插件时的认证请求。

``` c#
public interface IRequest
```

## Members

| name | description |
| :----- | :----- |
|AdminId { get; }	|如果管理员已登录，则返回登录管理员的Id；否则返回 0。|
|AdminName { get; }	|如果管理员已登录，则返回登录管理员的用户名；否则返回空。|
|AdminPermissions { get; }	||
|IsAdminLoggin { get; }	|判断管理员是否登录。|
|IsApiAuthenticated { get; }	|是否针对此插件的REST Api访问包含Api认证Token。|
|IsApiAuthorized { get; }	|是否针对当前插件的REST Api访问包含Api认证Token且此Token拥有当前插件的授权。|
|IsUserLoggin { get; }	|判断用户是否登录。|
|UserId { get; }	|如果用户已登录，则返回登录用户的Id；否则返回 0。|
|UserName { get; }	|如果用户已登录，则返回登录用户的用户名；否则返回空。|
|UserPermissions { get; }	||
|AdminLogin(…)	|管理员登录，调用此方法后系统将计算此管理员的Token并存储在cookie中，同时此方法将返回管理员Token，用于REST Api以及其他场景中。|
|AdminLogout()	|管理员退出登录，调用此方法后系统将清除登录cookie。|
|GetCookie(…)	|获取cookie。|
|GetPostBool(…)	|获取JSON方式提交的Body中的指定键的值并转换为布尔值。|
|GetPostDecimal(…)	|获取JSON方式提交的Body中的指定键的值并转换为小数。|
|GetPostInt(…)	|获取JSON方式提交的Body中的指定键的值并转换为整数。|
|GetPostObject(…)	|获取JSON方式提交的Body中的指定键的值并转换为对应的类型。|
|GetPostString(…)	|获取JSON方式提交的Body中的指定键的值。|
|GetQueryBool(…)	|获取访问地址中的指定查询字符串并转换为布尔值。|
|GetQueryDecimal(…)	|获取访问地址中的指定查询字符串并转换为小数。|
|GetQueryInt(…)	|获取访问地址中的指定查询字符串并转换为整数。|
|GetQueryString(…)	|获取访问地址中的指定查询字符串。|
|IsCookieExists(…)	|判断指定的cookie是否存在。|
|IsPostExists(…)	|JSON方式提交的Body中是否包含指定的键/值对。|
|IsQueryExists(…)	|访问地址是否包含指定的查询字符串。|
|SetCookie(…)	|设置cookie。 此cookie将随着浏览器的关闭而删除。 (2 methods)|
|UserLogin(…)	|用户登录，调用此方法后系统将计算此用户的Token并存储在cookie中，同时此方法将返回用户Token，用于REST Api以及其他场景中。|
|UserLogout()	|用户退出登录，调用此方法后系统将清除登录cookie。|

