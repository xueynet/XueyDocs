# 获取管理员列表 API

获取管理员列表，使用GET发起请求，请求地址为`/api/v1/administrators`

```
GET /api/v1/administrators HTTP/1.1
```

### 请求 URI

|参数名	|位置	|类型	|必填	|说明|
| :----- | :----- | :----- | :----- | :----- |
|apiKey|	query	|字符串|	否	|API 密钥，请参考身份认证|

### 返回

| 名称 | 类型 | 说明 |
| :----- | :----- | :----- |
|200 OK	|Administrator列表	|管理员列表|
|401 Unauthorized	|Error	|认证错误|

### 示例

#### 请求示例

```
GET /api/v1/administrators HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf
```

#### 返回示例

```json
{
  "value": [
    {
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
    {
        "id": 2,
        "userName": "test1",
        "password": "Kn580ZFQAPI=",
        "passwordFormat": "Encrypted",
        "passwordSalt": "3D7VAcdEN3UJ2OWbbT3WvA==",
        "creationDate": "2018-02-27 11:49:11",
        "lastActivityDate": "2018-06-06 08:10:13",
        "countOfLogin": 11,
        "countOfFailedLogin": 0,
        "creatorUserName": "admin",
        "isLockedOut": false,
        "siteIdCollection": "",
        "siteId": 1072,
        "departmentId": 0,
        "areaId": 0,
        "displayName": "测试1",
        "email": "test1@tst.com",
        "mobile": ""
    },
    {
        "id": 3,
        "userName": "site1",
        "password": "Rg/1cPbsW8k=",
        "passwordFormat": "Encrypted",
        "passwordSalt": "N0lz/kw8TQ3SrQiFdu4/PA==",
        "creationDate": "2018-05-27 23:56:23",
        "lastActivityDate": "2018-05-27 23:57:03",
        "countOfLogin": 1,
        "countOfFailedLogin": 0,
        "creatorUserName": "admin",
        "isLockedOut": false,
        "siteIdCollection": "",
        "siteId": 1072,
        "departmentId": 0,
        "areaId": 0,
        "displayName": "site1",
        "email": "",
        "mobile": ""
    }
  ]
}
```