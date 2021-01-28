# 管理员登录 API

注册新管理员，使用`POST`发起请求，请求地址为`/api/v1/administrators/actions/login`，此接口可以直接访问，无需通过身份验证。

```
POST /api/v1/administrators/actions/login HTTP/1.1
```

### 请求 URI

|参数名	|位置	|类型	|必填	|说明|
| :----- | :----- | :----- | :----- | :----- |
|account	|字符串	|是	|管理员账号，可以是管理员名、邮箱或者手机号|
|password	|字符串	|是	|管理员密码，需要 MD5 加密后传输|

### 返回

| 名称 | 类型 | 说明 |
| :----- | :----- | :----- |
|200 OK	|Administrator	|管理员|
|401 Unauthorized	|Error	|认证错误|
|400 BadRequest	|Error	|参数错误|

### 示例

#### 请求示例

```
POST /api/v1/administrators/actions/login HTTP/1.1
Content-Type: application/json

{
  "account": "demo",
  "password": "7d683abba984a7804078471700c39fb9"
}
```

#### 返回示例

```json
{
  "value": {
    "id": 1,
    "userName": "admin",
    "password": "oMT9l/vib+qpD6yV5NJwdw==",
    "passwordFormat": "Encrypted",
    "passwordSalt": "tKHgfZWkSRSbT6GKYyaoNA==",
    "creationDate": "2018-01-23 13:31:43",
    "lastActivityDate": "2018-06-29 14:29:16",
    "countOfLogin": 87,
    "countOfFailedLogin": 0,
    "creatorUserName": "",
    "isLockedOut": false,
    "siteIdCollection": "",
    "siteId": 1325,
    "departmentId": 0,
    "areaId": 0,
    "displayName": "admin2",
    "email": "admin@corp.com",
    "mobile": ""
  },
  "accessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJBZG1pbmlzdHJhdG9yTmFtZSI6ImFkbWluIiwiQWRkRGF0ZSI6IlwvRGF0ZSgxNTMwMzMzNDQxMDA0KVwvIn0.ESBKKb4YcOqLoPn0Y_aeVoZYDINZ_7xSwQr0bwnct7I"
}
```