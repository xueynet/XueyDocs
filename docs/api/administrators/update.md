# 修改管理员 API

修改管理员属性，使用PUT发起请求，请求地址为`/api/v1/administrators/{id}`

```
PUT /api/v1/administrators/{id} HTTP/1.1
```

### 请求 URI

|参数名	|位置	|类型	|必填	|说明|
| :----- | :----- | :----- | :----- | :----- |
|id	|path	|整数	|是	|管理员 Id|
|apiKey|	query	|字符串|	否	|API 密钥，请参考身份认证|

### 请求 Body

| 参数名 | 类型 | 必填 | 说明 |
| :----- | :----- | :----- | :----- |
|userName	|字符串|	是	|管理员账号|
|password	|字符串	|是	|管理员密码|
|passwordFormat	|字符串	|否	|密码加密格式，有Clear及Encrypt两种，分别代表不加密以及可逆加密。|
|CreationDate	|日期	|否	|创建日期|
|LastActivityDate	|日期	|否	|最后活动时间|
|CountOfLogin	|数字|	否	|登录次数|
|CreatorUserName	|字符串	|否	|创建者|
|isLockedOut	|字符串	|否	|是否被锁定|
|departmentId	|数字	|否	|管理员所属部门 Id|
|areaId	|数字	|否	|管理员所属区域 Id|
|displayName	|字符串|	否	|管理员姓名|
|email	|字符串	|否	|邮箱|
|mobile	|字符串	|否	|手机号|

### 返回

| 名称 | 类型 | 说明 |
| :----- | :----- | :----- |
|200 OK	|Administrator	|管理员|
|401 Unauthorized	|Error	|认证错误|
|404 NotFound	|Error|	资源不存在错误|
|400 BadRequest	|Error	|参数错误|

### 示例

#### 请求示例

```
PUT /api/v1/administrators/1 HTTP/1.1
Content-Type: application/json
X-XY-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf

{
  "userName": "demo2"
}
```

#### 返回示例

```json
{
  "value": {
    "id": 7,
    "userName": "demo2",
    "password": "xv+60l2H7TE=",
    "passwordFormat": "Encrypted",
    "passwordSalt": "PjWkOQmRT/KSKgz5LLnWrQ==",
    "creationDate": "2018-06-29 18:22:51",
    "lastActivityDate": "2018-06-29 18:22:51",
    "countOfLogin": 0,
    "countOfFailedLogin": 0,
    "creatorUserName": "",
    "isLockedOut": false,
    "siteIdCollection": "",
    "siteId": 0,
    "departmentId": 0,
    "areaId": 0,
    "displayName": "demo2",
    "email": "test5@sample.com",
    "mobile": "13599999989"
  }
}
```