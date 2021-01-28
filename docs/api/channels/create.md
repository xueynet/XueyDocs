# 新增栏目 API

新增栏目，使用POST发起请求，请求地址为`/api/v1/channels/{siteId}`

```
POST /api/v1/channels/{siteId} HTTP/1.1
```

### 请求 URI

| 参数名 | 位置 | 类型 | 必填 | 说明 |
| :----- | :----- | :----- | :----- | :----- |
|siteId	|path	|整数	|是	|站点Id|
| apiKey | query | 字符串 | 否 | API 密钥，请参考身份认证 |

### 请求 Body

| 参数名 | 类型 | 必填 | 说明 |
| :----- | :----- | :----- | :----- |
|ParentId	|整数	|否	|父栏目 Id|
|ChannelName	|字符串|	是|	栏目名称|
|IndexName	|字符串|	否	|栏目索引|
|FilePath	|字符串	|否	|生成页面地址|
|ChannelFilePathRule	|字符串	|否	|下级栏目的页面命名规则|
|ContentFilePathRule	|字符串|	否	|栏目下内容的页面命名规则|
|GroupNameCollection	|字符串	|否|	栏目组|
|ImageUrl	|字符串	|否	|栏目图片，存储图片地址|
|Content	|字符串|	否	|栏目正文，以编辑器提交信息|
|Keywords	|字符串	|否	|关键字列表，各关键词间用英文逗号“,”分割|
|Description	|字符串	|否	|页面描述|
|LinkUrl	|字符串	|否	|外部链接，设置后链接将指向此地址|
|LinkType	|字符串|	否	|链接类型，设置此栏目的链接与子栏目及内容的关系|
|ChannelTemplateId	|整数|	否	|栏目模板 Id|
|ContentTemplateId	|整数|	否	|内容模板 Id|

### 返回

| 名称 | 类型 | 说明 |
| :----- | :----- | :----- |
|200 OK	|Channel	|内容|
|401 Unauthorized	|Error	|认证错误|
|404 NotFound	|Error	|资源不存在错误|
|400 BadRequest	|Error	|参数错误|

### 示例 1

以下请求将在站点首页下创建新栏目。

```
POST /api/v1/channels/1476 HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf

{
  "channelName": "栏目标题"
}
```

### 示例 2

以下请求将在站点指定栏目下创建新栏目，同时设置栏目索引。

```
POST /api/v1/channels/1476 HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf

{
  "parentId": 1481,
  "channelName": "栏目标题",
  "channelIndex": "栏目索引"
}
```