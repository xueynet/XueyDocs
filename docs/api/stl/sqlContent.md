# 获取数据库值 API

获取数据库值，系统将根据参数计算出对应的数据库值

使用`GET`发起请求，请求地址为`/api/v1/stl/sqlContent`

```
GET /api/v1/stl/sqlContent HTTP/1.1
```

### 请求 URI

| 参数名 | 位置 | 类型 | 必填 | 说明 |
| :----- | :----- | :----- | :----- | :----- |
|queryString|	字符串|	是	|SQL 语句|
|type	|字符串	|否	|具体字段名|
| apiKey | 字符串 | 否 | API 密钥，请参考身份认证 |

`/api/v1/stl/sqlContent`的其他参数与`<stl:sqlContent>`标签一致。

### 返回

| 名称 | 类型 | 说明 |
| :----- | :----- | :----- |
|200 OK	|值或对象	|根据type参数的不同，返回不同的value值，如果不传type参数，将返回整个数据库对象|
|401 Unauthorized	|Error	|认证错误|
|400 BadRequest	|Error	|参数错误|

### 示例

#### 请求示例

```
GET /api/v1/stl/sqlContent?queryString=SELECT * FROM siteserver_Site HTTP/1.1
Content-Type: application/json
X-XY-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf
```

#### 返回示例

```json
{
    "value": {
        "id": 1072,
        "siteName": "test10",
        "siteDir": "test10",
        "tableName": "model_Content",
        "isRoot": "False",
        "parentId": 0,
        "taxis": 5,
        "settingsXml": "charset=utf-8&logo=@/upload/images/2018/1/20164526348.png&configuploadimageistitleimage=False&configuploadimagetitleimagewidth=300&configuploadimagetitleimageheight=&configuploadimageistitleimagelesssizenotthumb=False&configuploadimageisshowimageintexteditor=False&configuploadimageislinktooriginal=False&configuploadimageissmallimage=True&configuploadimagesmallimagewidth=500&configuploadimagesmallimageheight=&configuploadimageissmallimagelesssizenotthumb=False&ismultideployment=False&outerurl=&innerurl=&apiurl=/api&homeurl=/home&isseparatedweb=False&iscreatedoubleclick=False"
    }
}
```