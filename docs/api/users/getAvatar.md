# 获取用户头像 API

获取用户头像地址，使用`GET`发起请求，请求地址为`/api/v1/users/{id}/avatar`，此接口可以直接访问，无需身份验证。

```
GET /api/v1/users/{id}/avatar HTTP/1.1
```

### 请求 URI

|参数名	|位置	|类型	|必填	|说明|
| :----- | :----- | :----- | :----- | :----- |
|id	|path	|整数	|是	|用户Id|
|apiKey|	query	|字符串|	否	|API 密钥，请参考身份认证|

### 返回

| 名称 | 类型 | 说明 |
| :----- | :----- | :----- |
|200 OK	|User	|用户|
|401 Unauthorized	|Error	|认证错误|
|404 NotFound	|Error|	资源不存在错误|
|400 BadRequest	|Error	|参数错误|

### 示例

#### 请求示例

```
GET /api/v1/users/1/avatar HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf
```

#### 返回示例

```json
{
  "value": "/sitefiles/users/1/avatar.png"
}
```