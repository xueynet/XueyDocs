# 用户退出登录 API

退出登录，使用`POST`发起请求，请求地址为`/api/v1/users/actions/logout`，此接口可以直接访问，无需身份验证。

```
POST /api/v1/users/actions/logout HTTP/1.1
```

### 返回

| 名称 | 类型 | 说明 |
| :----- | :----- | :----- |
|200 OK	|User	|用户|
|401 Unauthorized	|Error	|认证错误|
|400 BadRequest	|Error	|参数错误|

### 示例

#### 请求示例

```
POST /api/v1/users/actions/logout HTTP/1.1
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
    }
}
```