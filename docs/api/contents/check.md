# 审核内容 API

审核内容使用POST发起请求，请求地址为`/api/v1/contents/actions/check`

```
POST /api/v1/contents/actions/check HTTP/1.1
```

### 请求 Body

| 参数名 | 说明 | 必填项 | JSON 类型 | 备注 |
| :----- | :----- | :----- | :----- | :----- |
|siteId	|站点 Id	|必填	|数字	|指定需要审核内容的所属站点|
|contents	|审核内容 Id	|必填	|ChannelContentId 对象数组	|内容审核数组，系统将把审核数组中包含的内容设置为已审核|
|reasons	|审核理由|		|字符串	|审核理由，可选填|

### ChannelContentId 对象

可以向内容审核 API 传递 ChannelContentId 对象数组，用于指定内容审核条件，系统将把审核条件中包含的内容设置为已审核。

ChannelContentId 对象说明：

| 参数名 | 说明 | 必填项 | JSON 类型 | 备注 |
| :----- | :----- | :----- | :----- | :----- |
|channelId	|栏目 Id	|必填	|数字|	内容所属的栏目 Id 值|
|id	|内容 Id	|必填	|数字	|内容的 Id 值|

### 返回 Body

| 参数名 | 说明 | 备注 |
| :----- | :----- | :----- |
|contents|	|内容列表|	Content 列表，代表已审核的内容数组|

### 示例

以下请求将审核站点Id为1，栏目Id为10的两条内容。

```
POST /api/v1/contents/actions/check HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf

{
  "siteId": 1,
  "contents": [
      {
          "channelId": 10,
          "id": 192
      },
      {
          "channelId": 10,
          "id": 193
      }
  ],
  "reasons": "终审通过"
}
```