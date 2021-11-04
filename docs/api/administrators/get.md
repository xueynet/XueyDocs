# 获取管理员 API

获取管理员，使用GET发起请求，请求地址为`/api/v1/administrators/{id}`

```
GET /api/v1/administrators/{id} HTTP/1.1
```

### 请求 URI

|参数名	|位置	|类型	|必填	|说明|
| :----- | :----- | :----- | :----- | :----- |
|id	|path	|整数	|是	|管理员 Id|
|apiKey|	query	|字符串|	否	|API 密钥，请参考身份认证|

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
GET /api/v1/administrators/1 HTTP/1.1
Content-Type: application/json
X-XY-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf
```

#### 返回示例

```json
{
  "value": {
    "id": 8,
    "userName": "test5",
    "password": "v8WaUwDj3vE=",
    "passwordFormat": "Encrypted",
    "passwordSalt": "obD8YzQr7PQeLag/3iQSzw==",
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