# 获取内容值 API

获取内容值，系统将根据参数计算出对应的内容值

使用`GET`发起请求，请求地址为`/api/v1/stl/content`

```
GET /api/v1/stl/content HTTP/1.1
```

### 请求 URI

| 参数名 | 位置 | 类型 | 必填 | 说明 |
| :----- | :----- | :----- | :----- | :----- |
|siteId	|字符串|	否	|站点Id|
|siteDir|	字符串|	否	|站点文件夹|
|channelId|	字符串|	否	|栏目Id|
|channelIndex|	字符串|	否	|栏目索引|
|channelName	|字符串|	否	|栏目名称|
| apiKey | 字符串 | 否 | API 密钥，请参考身份认证 |

`/api/v1/stl/content`的其他参数与`<stl:content>`标签一致。

### 返回

| 名称 | 类型 | 说明 |
| :----- | :----- | :----- |
|200 OK	|Content	|内容|
|401 Unauthorized	|Error	|认证错误|
|400 BadRequest	|Error	|参数错误|

### 示例

#### 请求示例

```
GET /api/v1/stl/content?siteId=1&channelId=134&contentId=1525 HTTP/1.1
Content-Type: application/json
X-XY-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf
```

#### 返回示例

```json
{
  "value": {
    "id": 1525,
    "channelId": 134,
    "siteId": 1,
    "addUserName": "admin",
    "lastEditUserName": "admin",
    "writingUserName": "",
    "lastEditDate": "2018-05-21 10:13:00",
    "taxis": 2000000001,
    "groupNameCollection": "",
    "tags": "",
    "sourceId": 0,
    "referenceId": 0,
    "isChecked": true,
    "checkedLevel": 0,
    "hits": 40,
    "hitsByDay": 1,
    "hitsByWeek": 5,
    "hitsByMonth": 40,
    "lastHitsDate": "2018-05-23 00:00:00",
    "title": "雪山深处， 永远热泪盈眶的年轻",
    "isTop": true,
    "isRecommend": true,
    "isHot": true,
    "isColor": true,
    "addDate": "2018-02-23 10:32:00",
    "linkUrl": "",
    "settingsXml": "comments=0&photos=0&freereadings=&paidreadings=&fullreadingprice=&paperprice=&titleformatstring=False_False_False_&check_isadmin=True&check_username=admin&check_checkdate=2018-05-21 10:13&check_reasons="
  }
}
```