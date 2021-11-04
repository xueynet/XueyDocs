# 获取栏目列表 API

获取栏目列表接口

使用`GET`发起请求，请求地址为`/api/v1/stl/channels`

```
GET /api/v1/stl/channels HTTP/1.1
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

`/api/v1/stl/channels`的其他参数与`<stl:channels>`标签一致。

### 返回

| 名称 | 类型 | 说明 |
| :----- | :----- | :----- |
|200 OK	|Channel 列表	|栏目列表|
|401 Unauthorized	|Error	|认证错误|
|400 BadRequest	|Error	|参数错误|

### 示例

#### 请求示例

```
GET /api/v1/stl/channels?siteId=1 HTTP/1.1
Content-Type: application/json
X-XY-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf
```

#### 返回示例

```json
{
  "value": [
    {
      "id": 33,
      "channelName": "通知公告",
      "siteId": 32,
      "contentModelPluginId": "",
      "contentRelatedPluginIds": "",
      "parentId": 32,
      "parentsPath": "32",
      "parentsCount": 1,
      "childrenCount": 0,
      "isLastNode": false,
      "indexName": "通知公告",
      "groupNameCollection": "",
      "taxis": 2,
      "addDate": "2017-09-13 10:50:23",
      "imageUrl": "@/images/link_bn.jpg",
      "content": "",
      "contentNum": 5,
      "filePath": "",
      "channelFilePathRule": "",
      "contentFilePathRule": "",
      "linkUrl": "",
      "linkType": "None",
      "channelTemplateId": 21,
      "contentTemplateId": 34,
      "keywords": "",
      "description": "",
      "attributes": {
        "isChannelAddable": true,
        "isContentAddable": true,
        "isChannelCreatable": true,
        "isContentCreatable": true,
        "isCreateChannelIfContentChanged": true,
        "createChannelIDsIfContentChanged": "",
        "contentAttributesOfDisplay": "SubTitle",
        "transType": 5,
        "transSiteId": 0,
        "transChannelIds": "",
        "transChannelNames": "",
        "transIsAutomatic": false,
        "transDoneType": 0,
        "isPreviewContents": false,
        "defaultTaxisType": "OrderByTaxisDesc"
      }
    },
    {
      "id": 34,
      "channelName": "特别报道",
      "siteId": 32,
      "contentModelPluginId": "",
      "contentRelatedPluginIds": "",
      "parentId": 32,
      "parentsPath": "32",
      "parentsCount": 1,
      "childrenCount": 0,
      "isLastNode": false,
      "indexName": "特别报道",
      "groupNameCollection": "m_sitemap",
      "taxis": 3,
      "addDate": "2017-09-13 10:50:24",
      "imageUrl": "@/images/link_bn.jpg",
      "content": "",
      "contentNum": 38,
      "filePath": "",
      "channelFilePathRule": "",
      "contentFilePathRule": "",
      "linkUrl": "",
      "linkType": "None",
      "channelTemplateId": 21,
      "contentTemplateId": 22,
      "keywords": "",
      "description": "",
      "attributes": {
        "isChannelAddable": true,
        "isContentAddable": true,
        "isChannelCreatable": true,
        "isContentCreatable": true,
        "isCreateChannelIfContentChanged": true,
        "createChannelIDsIfContentChanged": "",
        "contentAttributesOfDisplay": "LastEditDate",
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
  ]
}
```