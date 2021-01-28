# 获取数据库列表 API

获取数据库列表接口

使用`GET`发起请求，请求地址为`/api/v1/stl/sqlContents`

```
GET /api/v1/stl/sqlContents HTTP/1.1
```

### 请求 URI

| 参数名 | 位置 | 类型 | 必填 | 说明 |
| :----- | :----- | :----- | :----- | :----- |
|queryString	|字符串	|是	|SQL 语句|
| apiKey | 字符串 | 否 | API 密钥，请参考身份认证 |

`/api/v1/stl/sqlContents`的其他参数与`<stl:sqlContents>`标签一致。

### 返回

| 名称 | 类型 | 说明 |
| :----- | :----- | :----- |
|200 OK	|对象列表	|返回数据库对象列表|
|401 Unauthorized	|Error	|认证错误|
|400 BadRequest	|Error	|参数错误|

### 示例

#### 请求示例

```
GET /api/v1/stl/sqlContents?queryString=SELECT * FROM siteserver_Site HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf
```

#### 返回示例

```json
{
    "value": [
        {
            "id": 1116,
            "siteName": "我的站点",
            "siteDir": "test2",
            "tableName": "model_Content",
            "isRoot": "False",
            "parentId": 0,
            "taxis": 7,
            "settingsXml": "charset=utf-8&configexporttype=ContentExcel&configexportperiods=0&configexportdisplayattributes=Id,Title,LinkUrl,AddDate,Hits,GroupNameCollection,Tags,FreeReadings,FullReadingPrice,PaidReadings,PaperPrice,SubTitle,ImageUrl,VideoUrl,FileUrl,Content,Summary,Author,Source&configexportischecked=All&apiurl=/api&homeurl=/home&ismultideployment=False&iscreatedoubleclick=True&siteurl=/Magazine&outersiteurl=/Magazine&innersiteurl=/Magazine&outerapiurl=/api&innerapiurl=/api&pagesize=3&configselectimagecurrenturl=upload/images&configuploadimageistitleimage=False&configuploadimagetitleimagewidth=152&configuploadimagetitleimageheight=109&configuploadimageistitleimagelesssizenotthumb=False&configuploadimageisshowimageintexteditor=False&configuploadimageislinktooriginal=False&configuploadimageissmallimage=False&configuploadimagesmallimagewidth=500&configuploadimagesmallimageheight=&configuploadimageissmallimagelesssizenotthumb=False&isseparatedweb=False&separatedweburl=http://web.chinacampus.org&issaveimageintexteditor=True&isautopageintexteditor=False&autopagewordnum=1500&iscontenttitlebreakline=False&lisautocheckkeywords=False&ischeckcontentlevel=False"
        },
        {
            "id": 1288,
            "siteName": "cc",
            "siteDir": "cc",
            "tableName": "model_Content",
            "isRoot": "False",
            "parentId": 1219,
            "taxis": 9,
            "settingsXml": "ischeckcontentlevel=False&charset=utf-8"
        },
        {
            "id": 1292,
            "siteName": "test11",
            "siteDir": "test11",
            "tableName": "model_Content",
            "isRoot": "False",
            "parentId": 0,
            "taxis": 10,
            "settingsXml": "charset=utf-8&configuploadimageistitleimage=True&configuploadimagetitleimagewidth=300&configuploadimagetitleimageheight=&configuploadimageistitleimagelesssizenotthumb=False&configuploadimageisshowimageintexteditor=True&configuploadimageislinktooriginal=False&configuploadimageissmallimage=True&configuploadimagesmallimagewidth=500&configuploadimagesmallimageheight=&configuploadimageissmallimagelesssizenotthumb=False&mingzi=SiteServer&gongsi=CMS&apiurl=/api&homeurl=/home&ismultideployment=False&iscreatedoubleclick=False&outerurl=&innerurl=&isseparatedweb=False"
        }
    ]
}
```