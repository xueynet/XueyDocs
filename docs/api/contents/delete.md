# 删除内容 API

删除内容，使用DELETE发起请求，请求地址为`/api/v1/contents/{siteId}/{channelId}/{id}`

```
DELETE /api/v1/contents/{siteId}/{channelId}/{id} HTTP/1.1
```

### 请求 URI

| 参数名 | 位置 | 类型 | 必填 | 说明 |
| :----- | :----- | :----- | :----- | :----- |
|siteId	|path	|整数	|是	|站点Id|
|channelId	|path	|整数	|是	|栏目Id|
|id	|path	|整数	|是	|内容Id|
| apiKey | query | 字符串 | 否 | API 密钥，请参考身份认证 |

### 返回

| 名称 | 类型 | 说明 |
| :----- | :----- | :----- |
|200 OK	|Content	|内容|
|401 Unauthorized	|Error	|认证错误|
|404 NotFound	|Error	|资源不存在错误|
|400 BadRequest	|Error	|参数错误|

### 示例

#### 请求示例

```
DELETE /api/v1/contents/1325/1344/11001 HTTP/1.1
Content-Type: application/json
X-XY-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf
```

#### 返回示例

```json
{
  "value": {
    "id": 11001,
    "channelId": 1344,
    "siteId": 1325,
    "addUserName": "",
    "lastEditUserName": "",
    "writingUserName": "",
    "lastEditDate": "2018-08-15 11:46:17",
    "taxis": 0,
    "groupNameCollection": "",
    "tags": "",
    "sourceId": 0,
    "referenceId": 0,
    "isChecked": "False",
    "checkedLevel": 0,
    "hits": 0,
    "hitsByDay": 0,
    "hitsByWeek": 0,
    "hitsByMonth": 0,
    "lastHitsDate": "2018-08-15 11:46:17",
    "settingsXml": "{}",
    "title": "标题2",
    "isTop": "False",
    "isRecommend": "False",
    "isHot": "False",
    "isColor": "False",
    "linkUrl": "",
    "addDate": "2018-08-15 11:46:17",
    "subTitle": "",
    "imageUrl": "",
    "videoUrl": "",
    "fileUrl": "",
    "content": "内容正文2",
    "summary": "",
    "author": "",
    "source": "",
    "navigationUrl": "http://127.0.0.1/test17/news/201808/11001.html"
  }
}
```