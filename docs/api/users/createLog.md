# 新增用户操作日志 API

新增用户操作日志，使用`POST`发起请求，请求地址为`/api/v1/users/{id}/logs`

```
POST /api/v1/users/{id}/logs HTTP/1.1
```

### 请求 URI

|参数名	|位置	|类型	|必填	|说明|
| :----- | :----- | :----- | :----- | :----- |
|id	|path	|整数|	是|	用户 Id|
|apiKey|	query	|字符串|	否	|API 密钥，请参考身份认证|

### 请求 Body

| 参数名 | 类型 | 必填 | 说明 |
| :----- | :----- | :----- | :----- |
|action	|字符串	|是	|动作|
|summary	|字符串	|是	|描述|


### 返回

| 名称 | 类型 | 说明 |
| :----- | :----- | :----- |
|200 OK	|UserLog	|用户操作日志|
|401 Unauthorized	|Error	|认证错误|
|404 NotFound	|Error|	用户 Id 不存在错误|
|400 BadRequest	|Error	|参数错误|

### 示例

#### 请求示例

```
POST /api/v1/users/1/logs HTTP/1.1
Content-Type: application/json
X-XY-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf

{
  "action": "访问页面",
  "summary": "页面地址：http://sample.com"
}
```

#### 返回示例

```json
{
  "value": {
    "id": 1,
    "userName": "demo",
    "ipAddress": "localhost",
    "addDate": "2018-06-18 10:03:10",
    "action": "访问页面",
    "summary": "页面地址：http://sample.com"
  }
}
```