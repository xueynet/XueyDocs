# 用户登录 API

用户登录，使用`POST`发起请求，请求地址为`/api/v1/users/actions/login`，此接口可以直接访问，无需身份验证。

```
POST /api/v1/users/actions/login HTTP/1.1
```

### 请求 URI

|参数名	|位置	|类型	|必填	|说明|
| :----- | :----- | :----- | :----- | :----- |
|account	|字符串	|是	|用户账号，可以是用户名、邮箱或者手机号|
|password	|字符串	|是	|用户密码，需要 MD5 加密后传输|

### 返回

| 名称 | 类型 | 说明 |
| :----- | :----- | :----- |
|200 OK	|User，AccessToken， ExpiresAt	|用户，用户登录 Token，过期时间|
|401 Unauthorized	|Error	|认证错误|
|400 BadRequest	|Error	|参数错误|

### 示例

#### 请求示例

```
POST /api/v1/users/actions/login HTTP/1.1
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
    "userName": "demo",
    "password": "nOC/NuzOXrX95ZVeeluoeg==",
    "passwordFormat": "Encrypted",
    "passwordSalt": "ymeDeiU/CPzislPYxsx1MQ==",
    "createDate": "2018-06-17 16:42:03",
    "lastResetPasswordDate": "2018-06-18 09:51:37",
    "lastActivityDate": "2018-06-19 08:17:54",
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
  },
  "accessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VyTmFtZSI6ImRlbW8iLCJBZGREYXRlIjoiXC9EYXRlKDE1MjkzNjc0NzQxNjUpXC8ifQ.1Ka9OgcwEseeo2igDuPxdk_H7Mb1trzOxEVwj_VEJZc",
  "expiresAt": "2020-03-12 14:22:13"
}
```