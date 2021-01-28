# 删除管理员 API

删除管理员，使用DELETE发起请求，请求地址为`/api/v1/administrators/{id}`

```
DELETE /api/v1/administrators/{id} HTTP/1.1
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
DELETE /api/v1/administrators/1 HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf
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