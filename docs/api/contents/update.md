# 修改内容 API

修改内容，使用PUT发起请求，请求地址为`/api/v1/contents/{siteId}/{channelId}/{id}`

```
PUT /api/v1/contents/{siteId}/{channelId}/{id} HTTP/1.1
```

### 请求 URI

| 参数名 | 位置 | 类型 | 必填 | 说明 |
| :----- | :----- | :----- | :----- | :----- |
|siteId	|path	|整数	|是	|站点Id|
|channelId	|path	|整数	|是	|栏目Id|
|id	|path	|整数	|是	|内容Id|
| apiKey | query | 字符串 | 否 | API 密钥，请参考身份认证 |

### 请求 Body

| 参数名 | 类型 | 必填 | 说明 |
| :----- | :----- | :----- | :----- |
|AddUserName	|字符串	|否	|添加人|
|LastEditUserName	|字符串	|否	|修改人|
|WritingUserName	|字符串	|否	|投稿人|
|LastEditDate	|日期	|否	|修改时间|
|Taxis	|数字	|否	|排序|
|GroupNameCollection	|字符串	|否	|内容组|
|Tags	|字符串	|否	|标签|
|SourceId	|数字	|否	|来源内容Id，对应内容表的 Id 字段|
|ReferenceId	|数字	|否	|引用内容Id，对应内容表的 Id 字段|
|IsChecked	|字符串	|否	|是否终审通过通过|
|CheckedLevel	|数字	|否	|未终审通过情况下，处于第几级审核状态|
|Hits	|数字	|否	|总点击量|
|HitsByDay	|数字	|否	|日点击|
|HitsByWeek	|数字	|否	|周点击|
|HitsByMonth	|数字	|否	|月点击|
|LastHitsDate	|日期	|否	|最后点击时间|
|Title	|字符串|	是	|内容标题|
|IsTop	|字符串	|否|	是否置顶内容|
|IsRecommend	|字符串	|否	|是否推荐内容|
|IsHot	|字符串	|否	|是否热点内容|
|IsColor	|字符串	|否	|是否醒目内容|
|LinkUrl	|字符串|	否	|外部链接，设置后链接将指向此地址|
|AddDate	|日期	|否	|添加时间|
|SubTitle	|字符串	|否	|内容副标题|
|ImageUrl	|字符串	|否	|内容图片，存储图片地址|
|VideoUrl	|字符串	|否	|内容视频，存储视频地址|
|FileUrl	|字符串	|否	|内容附件，存储附件地址|
|Content	|字符串	|否	|内容正文，以编辑器提交信息|
|Summary	|字符串	|否	|内容摘要|
|Author	|字符串|	否	|作者|
|Source	|字符串|	否	|来源|

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
PUT /api/v1/contents/1325/1344/11001 HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf

{
  "title": "标题2",
  "content": "内容正文2"
}
```

#### 返回示例

```json
{
    "value": {
        "title": "标题2",
        "content": "内容正文2",
        "siteId": 1325,
        "channelId": 1344,
        "id": 11001,
        "lastEditDate": "2018-08-15 11:46:17",
        "navigationUrl": "http://127.0.0.1/test17/news/201808/11001.html"
    }
}
```