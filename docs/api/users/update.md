# 修改用户 API

修改用户属性，使用`PUT`发起请求，请求地址为`/api/v1/users/{id}`

```
PUT /api/v1/users/{id} HTTP/1.1
```

### 请求 URI

|参数名	|位置	|类型	|必填	|说明|
| :----- | :----- | :----- | :----- | :----- |
|id	|path	|整数	|是	|用户 Id|
|apiKey|	query	|字符串|	否	|API 密钥，请参考身份认证|

### 请求 Body

|参数名	|类型	|必填	|说明|
| :----- | :----- | :----- | :----- |
|UserName	|VarChar	|255	|管理员账号|
|Password	|VarChar	|255	|管理员密码|
|PasswordFormat	|VarChar|	50	|密码加密格式，有Clear、Encrypt及Hash三种，分别代表不加密、可逆加密以及不可逆加密。|
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

### 返回

| 名称 | 类型 | 说明 |
| :----- | :----- | :----- |
|200 OK	|User	|用户|
|401 Unauthorized	|Error	|认证错误|
|404 NotFound	|Error|	资源不存在错误|
|400 BadRequest	|Error	|参数错误|

### 示例

#### 请求示例

```
PUT /api/v1/users/1 HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf

{
  "userName": "demo2"
}
```

#### 返回示例

```json
{
  "value": {
    "id": 1,
    "userName": "demo2",
    "password": "3CPlhZ8UAus=",
    "passwordFormat": "Encrypted",
    "passwordSalt": "VohMFwNz4s006ZytezfUxg==",
    "createDate": "2018-06-17 14:18:45",
    "lastResetPasswordDate": "2018-06-17 14:18:45",
    "lastActivityDate": "2018-06-17 14:18:45",
    "countOfLogin": 0,
    "countOfFailedLogin": 0,
    "countOfWriting": 0,
    "isChecked": true,
    "isLockedOut": false,
    "displayName": "演示",
    "email": "demo@sample.com",
    "mobile": "13888888888",
    "avatarUrl": "",
    "organization": "",
    "department": "",
    "position": "",
    "gender": "",
    "birthday": "",
    "education": "",
    "graduation": "",
    "address": "",
    "weiXin": "",
    "qq": "",
    "weiBo": "",
    "interests": "",
    "signature": ""
  }
}
```