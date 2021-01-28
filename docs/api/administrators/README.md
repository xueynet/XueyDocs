# 字段说明

### Administrator 管理员对象

管理员

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id	|Integer|		|自增长主键|
|UserName	|VarChar	|255	|管理员账号|
|Password	|VarChar	|255	|管理员密码|
|PasswordFormat	|VarChar|	50	|密码加密格式，有Clear、Encrypt及Hash三种，分别代表不加密、可逆加密以及不可逆加密。|
|PasswordSalt	|VarChar	|128	|密钥，当 PasswordFormat 为Encrypt时使用的加密密钥|
|CreationDate	|DateTime	|	|创建时间|
|LastActivityDate	|DateTime	|	|最后活动时间|
|CountOfLogin	|Integer|		|登录次数|
|CountOfFailedLogin|	Integer	|	|连续登录失败次数|
|CreatorUserName	|VarChar	|255	|管理员创建者|
|IsLockedOut	|VarChar	|18	|是否被锁定|
|SiteIdCollection	|VarChar|	50	|拥有管理权限的站点 Id 列表|
|SiteId	|Integer|		|最后一次管理的站点 Id|
|DepartmentId	|Integer|		|所属部门 Id|
|AreaId	|Integer|		|所在区域 Id|
|DisplayName	|VarChar	|50	|管理员显示名称|
|Email	|VarChar	|50|	电子邮箱|
|Mobile	|VarChar	|20	|手机号码|
