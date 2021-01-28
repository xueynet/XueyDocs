# 字段说明

### User 用户对象

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id	|Integer|		|自增长主键|
|UserName	|VarChar	|255	|管理员账号|
|Password	|VarChar	|255	|管理员密码|
|PasswordFormat	|VarChar|	50	|密码加密格式，有Clear、Encrypt及Hash三种，分别代表不加密、可逆加密以及不可逆加密。|
|PasswordSalt	|VarChar	|128	|密钥，当 PasswordFormat 为Encrypt时使用的加密密钥|
|CreationDate	|DateTime	|	|创建时间|
|LastResetPasswordDate	|DateTime|		|最后一次重设密码时间|
|LastActivityDate	|DateTime	|	|最后活动时间|
|CountOfLogin	|Integer|		|登录次数|
|CountOfFailedLogin|	Integer	|	|连续登录失败次数|
|CountOfWriting	|Integer|		|投稿次数|
|IsChecked	|VarChar|	18	|是否已审核用户|
|IsLockedOut	|VarChar	|18	|是否被锁定|
|DisplayName	|VarChar	|255|	用户姓名|
|Email	|VarChar	|255	|邮箱|
|Mobile	|VarChar	|20	|手机号|
|AvatarUrl	|VarChar	|200	|头像图片路径|
|Organization	|VarChar	|255	|组织|
|Department	|VarChar	|255	|部门|
|Position	|VarChar|	255	|职位|
|Gender	|VarChar	|50	|性别|
|Birthday	|VarChar	|50	|出生日期|
|Education|	VarChar	|255	|毕业院校|
|Graduation	|VarChar|	255	|学历|
|Address	|VarChar|	255|	地址|
|WeiXin	|VarChar	|255	|微信|
|Qq	|VarChar	|50	|QQ|
|WeiBo	|VarChar|	255	|微博|
|Interests	|VarChar|	255	|兴趣|
|Signature|	VarChar|	255|	签名|

### UserLog 用户日志对象

用户操作日志

| 字段 | 数据类型 | 数据大小 | 说明 |
| :----- | :----- | :----- | :----- |
|Id	|Integer|		|自增长主键|
|UserName|	VarChar	|255|	用户账号|
|IpAddress|	VarChar	|50	|Ip 地址|
|AddDate	|DateTime|		|添加时间|
|Action	|VarChar	|255	|动作|
|Summary	|VarChar	|255	|描述|

