# IUserInfo interface

用户实体接口。

``` c#
public interface IUserInfo : IAttributes
```

## Members

| name | description |
| :----- | :----- |
|AvatarUrl { get; set; }	|头像图片路径。|
|Bio { get; set; }	|简介。|
|Birthday { get; set; }	|出生日期。|
|CountOfFailedLogin { get; set; }	|连续登录失败次数。|
|CountOfLogin { get; set; }	|登录次数。|
|CreateDate { get; set; }	|创建时间。|
|DisplayName { get; set; }	|姓名。|
|Email { get; set; }	|邮箱。|
|Gender { get; set; }	|性别。|
|GroupId { get; set; }	|用户组Id。|
|Id { get; set; }	|用户Id。|
|IsChecked { get; set; }	|是否已审核用户。|
|IsLockedOut { get; set; }	|是否被锁定。|
|LastActivityDate { get; set; }	|最后活动时间。|
|LastResetPasswordDate { get; set; }	|最后一次重设密码时间。|
|Mobile { get; set; }	|手机号。|
|Password { get; set; }	|创建时间。|
|PasswordFormat { get; set; }	|创建时间。|
|PasswordSalt { get; set; }	|创建时间。|
|Qq { get; set; }	|QQ。|
|SettingsXml { get; set; }	|附加字段。|
|UserName { get; set; }	|用户名。|
|WeiBo { get; set; }	|微博。|
|WeiXin { get; set; }	|微信。|

