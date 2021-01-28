# 修改管理员密码 API

修改管理员密码，使用`POST`发起请求，请求地址为`/api/v1/administrators/actions/resetPassword`

```
POST /api/v1/administrators/actions/resetPassword HTTP/1.1
```

### 请求 URI

|参数名	|位置	|类型	|必填	|说明|
| :----- | :----- | :----- | :----- | :----- |
|apiKey|	query|	字符串|	否	|API 密钥，请参考身份认证|

### 请求 Body

|参数名	||类型	|必填	|说明|
| :----- | :----- | :----- | :----- |
|account	|字符串	|是	|管理员账号，可以是管理员名、邮箱或者手机号|
|password	|字符串	|是	|管理员老密码，需要 MD5 加密后传输|
|newPassword|	字符串|	是	|管理员新密码，无需 MD5 加密，直接传输密码明文|

### 返回

| 名称 | 类型 | 说明 |
| :----- | :----- | :----- |
|200 OK	|Administrator	|管理员|
|401 Unauthorized	|Error	|认证错误|
|400 BadRequest	|Error	|参数错误|

### 示例

#### 请求示例

```
POST /api/v1/administrators/actions/resetPassword HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf

{
  "account": "test5",
  "password": "e2e31a427d2e8c4851b53f7eeb9fff95",
  "newPassword": "password888"
}
```

#### 返回示例

```json
{
  "value": {
    "id": 8,
    "userName": "test5",
    "password": "QKM+K0BvMtA+LMJy81jtJg==",
    "passwordFormat": "Encrypted",
    "passwordSalt": "69yjEhvbvUmJf+7rl6oH7w==",
    "creationDate": "2018-06-30 12:26:54",
    "lastActivityDate": "2018-06-30 12:26:54",
    "countOfLogin": 0,
    "countOfFailedLogin": 0,
    "creatorUserName": "",
    "isLockedOut": false,
    "siteIdCollection": "",
    "siteId": 0,
    "departmentId": 0,
    "areaId": 0,
    "displayName": "演示",
    "email": "test5@sample.com",
    "mobile": "13599999989"
  }
}
```