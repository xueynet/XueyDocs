# 获取用户列表 API

获取用户列表，使用`GET`发起请求，请求地址为`/api/v1/users`

```
GET /api/v1/users HTTP/1.1
```

### 请求 URI

|参数名	|位置	|类型	|必填	|说明|
| :----- | :----- | :----- | :----- | :----- |
|apiKey|	query	|字符串|	否	|API 密钥，请参考身份认证|

### 返回

| 名称 | 类型 | 说明 |
| :----- | :----- | :----- |
|200 OK	|User 列表	|用户列表|
|401 Unauthorized	|Error	|认证错误|

### 示例

#### 请求示例

```
GET /api/v1/users HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf
```

#### 返回示例

```json
{
  "value": [
    {
      "id": 1,
      "userName": "test",
      "password": "lv1rrYR9puM=",
      "passwordFormat": "Encrypted",
      "passwordSalt": "jfIlKnu47L+Sbj0bgQ63pw==",
      "createDate": "2018-02-05 08:31:22",
      "lastResetPasswordDate": "2018-05-30 09:14:54",
      "lastActivityDate": "2018-05-30 09:15:04",
      "countOfLogin": 16,
      "countOfFailedLogin": 0,
      "countOfWriting": 0,
      "isChecked": true,
      "isLockedOut": false,
      "displayName": "testxx",
      "email": "dd@dd.com",
      "mobile": "13333333333",
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
    {
      "id": 2,
      "userName": "dd",
      "password": "2jHR55FWosc=",
      "passwordFormat": "Encrypted",
      "passwordSalt": "OOYSJw70PD761TYwgjxxmQ==",
      "createDate": "2018-02-05 09:26:23",
      "lastResetPasswordDate": "1754-01-01 00:00:00",
      "lastActivityDate": "2018-02-05 09:45:27",
      "countOfLogin": 2,
      "countOfFailedLogin": 0,
      "countOfWriting": 0,
      "isChecked": true,
      "isLockedOut": false,
      "displayName": "ddd",
      "email": "dd@dd.co",
      "mobile": "13999999999",
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
  ]
}
```