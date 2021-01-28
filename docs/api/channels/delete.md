# 删除栏目 API

删除栏目，使用DELETE发起请求，请求地址为`/api/v1/channels/{siteId}/{channelId}`

```
DELETE /api/v1/channels/{siteId}/{channelId} HTTP/1.1
```

### 请求 URI

| 参数名 | 位置 | 类型 | 必填 | 说明 |
| :----- | :----- | :----- | :----- | :----- |
|siteId	|path	|整数	|是	|站点Id|
|channelId	|path	|整数	|是	|栏目Id|
| apiKey | query | 字符串 | 否 | API 密钥，请参考身份认证 |

### 返回

| 名称 | 类型 | 说明 |
| :----- | :----- | :----- |
|200 OK	|Channel	|内容|
|401 Unauthorized	|Error	|认证错误|
|404 NotFound	|Error	|资源不存在错误|
|400 BadRequest	|Error	|参数错误|

### 示例

以下请求将删除栏目。

```
DELETE /api/v1/channels/1476/1481 HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf
```