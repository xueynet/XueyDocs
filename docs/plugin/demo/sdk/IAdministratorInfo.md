# IAdministratorInfo interface

管理员实体接口。 对应数据库中的xycms_Administrator表。

``` c#
public interface IAdministratorInfo
```

## Members

| name | description |
| :----- | :----- |
|AreaId { get; set; }	|所在区域Id，对应 xycms_Area 表的 Id 字段。|
|CountOfFailedLogin { get; set; }	|连续登录失败次数。|
|CountOfLogin { get; set; }	|登录次数。|
|CreationDate { get; set; }	|创建时间。|
|CreatorUserName { get; set; }	|管理员创建者。|
|DepartmentId { get; set; }	|所属部门Id，对应 xycms_Department 表的 Id 字段。|
|DisplayName { get; set; }	|管理员显示名称。|
|Email { get; set; }	|电子邮箱，具有唯一性，可作为登录账号使用。|
|Id { get; set; }	|自增长主键。|
|IsLockedOut { get; set; }	|是否被锁定。|
|LastActivityDate { get; set; }	|最后活动时间。|
|Mobile { get; set; }	|手机号码，具有唯一性，可作为登录账号使用。|
|SiteId { get; set; }	|最后一次管理的站点Id。|
|SiteIdCollection { get; set; }	|拥有管理权限的站点Id列表。|
|UserName { get; set; }	|管理员账号，具有唯一性。|

