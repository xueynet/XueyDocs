# 获取栏目 API

获取栏目，使用GET发起请求，请求地址为`/api/v1/channels/{siteId}/{channelId}`

```
GET /api/v1/channels/{siteId}/{channelId} HTTP/1.1
```

### 请求 URI

| 参数名 | 位置 | 类型 | 必填 | 说明 |
| :----- | :----- | :----- | :----- | :----- |
|siteId	|path	|整数	|是	|站点Id|
|channelId	|path	|整数	|是	|栏目Id|
| apiKey | query | 字符串 | 否 | API 密钥，请参考身份认证 |

### 返回 Body

| 名称 | 类型 | 说明 |
| :----- | :----- | :----- |
|200 OK	|Channel	|内容|
|401 Unauthorized	|Error	|认证错误|
|404 NotFound	|Error	|资源不存在错误|
|400 BadRequest	|Error	|参数错误|

### 示例

#### 请求示例

以下请求将返回站点Id为1476，栏目Id为1477的栏目。

```
GET /api/v1/channels/1476/1477 HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf
```

#### 返回示例

```json
{
  "value": {
    "id": 1477,
    "channelName": "关于我们",
    "siteId": 1476,
    "contentModelPluginId": "",
    "contentRelatedPluginIds": "",
    "parentId": 1476,
    "parentsPath": "1476",
    "parentsCount": 1,
    "childrenCount": 1,
    "lastNode": false,
    "isLastNode": false,
    "indexName": "关于我们",
    "groupNameCollection": "not,nav",
    "taxis": 2,
    "addDate": "2020-05-28 18:04:39",
    "imageUrl": "/test24/upload/images/2017/9/t_281545114.png",
    "content": "",
    "filePath": "",
    "channelFilePathRule": "",
    "contentFilePathRule": "",
    "linkUrl": "",
    "linkType": "LinkToFirstChannel",
    "channelTemplateId": 362,
    "contentTemplateId": 360,
    "keywords": "",
    "description": "",
    "children": [
      {
        "id": 1478,
        "channelName": "公司简介",
        "siteId": 1476,
        "contentModelPluginId": "",
        "contentRelatedPluginIds": "",
        "parentId": 1477,
        "parentsPath": "1476,1477",
        "parentsCount": 2,
        "childrenCount": 0,
        "lastNode": false,
        "isLastNode": true,
        "indexName": "公司简介",
        "groupNameCollection": "not",
        "taxis": 3,
        "addDate": "2020-05-28 18:04:40",
        "imageUrl": "",
        "content": "",
        "filePath": "",
        "channelFilePathRule": "",
        "contentFilePathRule": "",
        "linkUrl": "",
        "linkType": "None",
        "channelTemplateId": 362,
        "contentTemplateId": 360,
        "keywords": "",
        "description": "",
        "children": [],
        "navigationUrl": "/test24/channels/1478.html"
      }
    ],
    "navigationUrl": "/test24/channels/1478.html"
  }
}
```