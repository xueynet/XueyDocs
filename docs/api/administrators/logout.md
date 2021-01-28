# 管理员退出登录 API

退出登录，使用`POST`发起请求，请求地址为`/api/v1/administrators/actions/logout`，此接口可以直接访问，无需身份验证。

```
POST /api/v1/administrators/actions/logout HTTP/1.1
```

### 返回

| 名称 | 类型 | 说明 |
| :----- | :----- | :----- |
|200 OK	|Administrator	|管理员|
|401 Unauthorized	|Error	|认证错误|
|400 BadRequest	|Error	|参数错误|

### 示例

#### 请求示例

```
POST /api/v1/administrators/actions/logout HTTP/1.1
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
    "lastActivityDate": "2018-06-30 14:41:01",
    "countOfLogin": 89,
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
  }
}
```