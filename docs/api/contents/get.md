# 获取内容 API

获取内容，使用GET发起请求，请求地址为`/api/v1/contents/{siteId}/{channelId}/{id}`

```
GET /api/v1/contents/{siteId}/{channelId}/{id} HTTP/1.1
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
GET /api/v1/contents/1767/1776/11000 HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf
```

#### 返回示例

```json
{
  "value": {
    "id": 11000,
    "channelId": 1776,
    "siteId": 1767,
    "addUserName": "admin",
    "lastEditUserName": "admin",
    "writingUserName": "",
    "lastEditDate": "2018-07-11 11:18:39",
    "taxis": 3,
    "groupNameCollection": "",
    "tags": "",
    "sourceId": 0,
    "referenceId": 0,
    "isChecked": "True",
    "checkedLevel": 0,
    "hits": 0,
    "hitsByDay": 0,
    "hitsByWeek": 0,
    "hitsByMonth": 0,
    "lastHitsDate": "2018-01-20 13:48:00",
    "settingsXml": "{\"titleformatstring\":\"False_False_False_\",\"check_isadmin\":\"True\",\"check_username\":\"siteserver\",\"check_checkdate\":\"2018-01-20 13:48\"}",
    "title": "简化租房流程，公寓租赁网站 Apartment List 获C轮5000万美元融资",
    "isTop": "False",
    "isRecommend": "False",
    "isHot": "False",
    "isColor": "False",
    "linkUrl": "",
    "addDate": "2018-01-20 13:47:46",
    "subTitle": "",
    "imageUrl": "",
    "videoUrl": "",
    "fileUrl": "",
    "content": "<p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; word-wrap: break-word; color: rgb(61, 70, 77); font-family: &quot;PingFang SC&quot;, &quot;Lantinghei SC&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Microsoft YaHei&quot;, &quot;\\\\5FAE软雅黑&quot;, STHeitiSC-Light, simsun, &quot;\\\\5B8B体&quot;, &quot;WenQuanYi Zen Hei&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; white-space: normal; background-color: rgb(255, 255, 255);\"><span style=\"box-sizing: border-box; font-weight: 600;\">36氪获悉，公寓租赁网站「Apartment List」近日C轮获5000万美元融资，由Passport Capital领投，Allen &amp; Company LLC、Canaan Partners、Matrix Partners、Industry Ventures、Quantum Partners LP、Tenaya Capital和WTI联合投资。</span>此前，36氪也对这家公司进行过<a href=\"http://36kr.com/p/5055809.html\" target=\"_blank\" style=\"box-sizing: border-box; background-color: transparent; text-decoration-line: none; color: rgb(61, 70, 77); transition: all 0.2s ease; border-style: solid; border-width: 0px 0px 1px; border-color: rgb(153, 153, 153); padding: 0px 0px 1px; word-wrap: break-word;\">报道</a>。</p><p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; word-wrap: break-word; color: rgb(61, 70, 77); font-family: &quot;PingFang SC&quot;, &quot;Lantinghei SC&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Microsoft YaHei&quot;, &quot;\\\\5FAE软雅黑&quot;, STHeitiSC-Light, simsun, &quot;\\\\5B8B体&quot;, &quot;WenQuanYi Zen Hei&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; white-space: normal; background-color: rgb(255, 255, 255);\">Apartment List成立于2011年，位于加州旧金山，由约翰·科布斯（John Kobs）创立。它为租户提供一个跨平台的app，将租户和全美国的出租房源连接起来，利用多种类型的问题、手动筛选器和可视化地图及图像为用户选择合适的房源。Apartment List的业务不仅仅局限于公寓搜索，还涉及后期的相关业务，包括租赁合同签订和每月租金支付等。</p><p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; word-wrap: break-word; color: rgb(61, 70, 77); font-family: &quot;PingFang SC&quot;, &quot;Lantinghei SC&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Microsoft YaHei&quot;, &quot;\\\\5FAE软雅黑&quot;, STHeitiSC-Light, simsun, &quot;\\\\5B8B体&quot;, &quot;WenQuanYi Zen Hei&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; white-space: normal; background-color: rgb(255, 255, 255);\">据<a href=\"http://www.nmhc.org/Content.aspx?id=4708#large_cities\" target=\"_blank\" style=\"box-sizing: border-box; background-color: transparent; text-decoration-line: none; color: rgb(61, 70, 77); transition: all 0.2s ease; border-style: solid; border-width: 0px 0px 1px; border-color: rgb(153, 153, 153); padding: 0px 0px 1px; word-wrap: break-word;\">美国国家共享住房委员会</a>（National Multifamily Housing Council）估计，目前美国大约有4300万户家庭，37%是租户。在房源紧张的大城市，共享住房是家庭租赁的重要选择。因此，租赁网站的竞争十分激烈，而Apartment List成为一直站稳脚跟的公司之一。</p><p><br/></p>",
    "summary": "科布斯表示，“我们是唯一一个这么收费的公司。”",
    "author": "",
    "source": "",
    "titleformatstring": "False_False_False_",
    "check_isadmin": "True",
    "check_username": "siteserver",
    "check_checkdate": "2018-01-20 13:48",
    "navigationUrl": "/test16/contents/1776/11000.html"
  }
}
```