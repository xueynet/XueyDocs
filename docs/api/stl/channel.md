# 获取栏目值 API

获取栏目值，系统将根据参数计算出对应的栏目值

使用`GET`发起请求，请求地址为`/api/v1/stl/channel`

```
GET /api/v1/stl/channel HTTP/1.1
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

`/api/v1/stl/channel`的其他参数与`<stl:channel>`标签一致。

### 返回

| 名称 | 类型 | 说明 |
| :----- | :----- | :----- |
|200 OK	|Channel	|栏目|
|401 Unauthorized	|Error	|认证错误|
|400 BadRequest	|Error	|参数错误|

### 示例

#### 请求示例

```
GET /api/v1/stl/channel?siteId=1 HTTP/1.1
Content-Type: application/json
X-XY-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf
```

#### 返回示例

```json
{
  "value": {
    "id": 1,
    "channelName": "首页",
    "siteId": 1,
    "contentModelPluginId": "",
    "contentRelatedPluginIds": "",
    "parentId": 0,
    "parentsPath": "",
    "parentsCount": 0,
    "childrenCount": 66,
    "isLastNode": false,
    "indexName": "首页",
    "groupNameCollection": "",
    "taxis": 1,
    "addDate": "2018-02-27 14:48:50",
    "imageUrl": "",
    "content": "",
    "contentNum": 0,
    "filePath": "",
    "channelFilePathRule": "",
    "contentFilePathRule": "",
    "linkUrl": "",
    "linkType": "None",
    "channelTemplateId": 0,
    "contentTemplateId": 0,
    "keywords": "",
    "description": "",
    "additional": {
      "isChannelAddable": true,
      "isContentAddable": true,
      "isChannelCreatable": true,
      "isContentCreatable": true,
      "isCreateChannelIfContentChanged": true,
      "createChannelIDsIfContentChanged": "",
      "contentAttributesOfDisplay": "",
      "transType": 5,
      "transSiteId": 0,
      "transChannelIds": "",
      "transChannelNames": "",
      "transIsAutomatic": false,
      "transDoneType": 0,
      "isPreviewContents": false,
      "defaultTaxisType": "OrderByTaxisDesc"
    },
    "attributes": {
      "isChannelAddable": true,
      "isContentAddable": true,
      "isChannelCreatable": true,
      "isContentCreatable": true,
      "isCreateChannelIfContentChanged": true,
      "createChannelIDsIfContentChanged": "",
      "contentAttributesOfDisplay": "",
      "transType": 5,
      "transSiteId": 0,
      "transChannelIds": "",
      "transChannelNames": "",
      "transIsAutomatic": false,
      "transDoneType": 0,
      "isPreviewContents": false,
      "defaultTaxisType": "OrderByTaxisDesc"
    }
  }
}
```