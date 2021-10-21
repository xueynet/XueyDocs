# IAdminApi interface

管理员及权限Api接口

``` c#
public interface IAdminApi
```

## Members

| name | description |
| :----- | :----- |
|GetAccessToken(…)	|获取Access Token字符串。|
|GetAdminInfoByAccount(…)	|通过管理员账号获取用户对象实例。|
|GetAdminInfoByEmail(…)	|通过管理员邮箱获取管理员对象实例。|
|GetAdminInfoByMobile(…)	|通过管理员手机获取管理员对象实例。|
|GetAdminInfoByUserId(…)	|通过管理员Id获取管理员对象实例。|
|GetAdminInfoByUserName(…)	|通过用户名获取管理员对象实例。|
|IsEmailExists(…)	|判断管理员邮箱是否存在。|
|IsMobileExists(…)	|判断管理员手机是否存在。|
|IsUserNameExists(…)	|判断用户名是否存在。|
|ParseAccessToken(…)	|解析Access Token字符串。|

