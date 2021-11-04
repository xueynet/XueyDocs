# 获取内容列表 API

获取内容列表使用 `POST` 发起请求，请求地址为 `/api/v1/contents`，系统将根据 POST Body 传递过来的筛选参数获取到内容列表并返回。

```
POST /api/v1/contents HTTP/1.1
```

### 请求 URI

| 参数名 | 位置 | 类型 | 必填 | 说明 |
| :----- | :----- | :----- | :----- | :----- |
| apiKey | query | 字符串 | 否 | API 密钥，请参考身份认证 |

### 请求 Body

筛选参数通过 POST Body 传递给 API，可以设置复杂的查询条件，通过类似 SQL 的方式对内容进行筛选，从而获取出需要的内容集合。

向 API 提交的筛选参数说明：

| 参数名 | 说明 | 必填项 | JSON 类型 | 备注 |
| :----- | :----- | :----- | :----- | :----- |
|siteId	|站点 Id	|必填	|数字	|指定需要获取内容的所属站点|
|channelId	|栏目 Id|		|数字	|指定需要获取内容的所属栏目，如果不设置，系统将从整个站点获取内容|
|checked	|审核状态|		|布尔值	|指定返回内容的审核状态，true 代表返回已审核内容，false 代表返回待审核内容，如果不设置，系统将返回全部内容|
|top	|置顶状态|		|布尔值	|指定返回内容的置顶状态，true 代表返回已审核内容，false 代表返回待审核内容，如果不设置，系统将返回全部内容|
|recommend	|推荐状态|		|布尔值	|指定返回内容的推荐状态，true 代表返回推荐内容，false 代表返回非推荐内容，如果不设置，系统将返回全部内容|
|color	|醒目状态|		|布尔值	|指定返回内容的醒目状态，true 代表返回醒目内容，false 代表返回非醒目内容，如果不设置，系统将返回全部内容|
|hot	|热点状态|		|布尔值	|指定返回内容的热点状态，true 代表返回热点内容，false 代表返回非热点内容，如果不设置，系统将返回全部内容|
|groupNames	|内容组|		|字符串数组	|设置内容组后，系统将返回包含在任一内容组中的内容集合|
|tagNames	|标签|		|字符串数组	|设置标签后，系统将返回包含在任一标签中的内容集合|
|wheres	|筛选规则|		|Where 对象数组	|内容筛选规则，代表筛选条件，系统将返回满足所有筛选规则的内容集合|
|orders	|排序规则|		|Order 对象数组	|内容排序规则，系统将按指定的排序规则返回内容集合|
|page	|页数|		|数字	|需要获取第几页的数据|
|perPage	|每页包含的内容数|		|数字	|设置每页将返回的内容数|

### Where 对象

可以向内容列表 API 传递 Where 对象数组，用于指定内容筛选条件，系统将返回满足所有 Where 条件的内容集合。

Where 对象说明：

| 参数名 | 说明 | 必填项 | JSON 类型 | 备注 |
| :----- | :----- | :----- | :----- | :----- |
|column	|内容字段	|必填	|字符串	|可以是内容实体Content中存在的任意字段|
|operator	|操作符|		|字符串	|指定对比操作符，参考 Where Operator 类型|
|value	|值	|必填	|字符串	|条件对比值|

### Where Operator 类型

Where 对象可以设置多种对比操作，如常见的等于、不等于、大于、小于以及 like 模糊查询条件。

Where Operator 类型说明：

| operator | 说明 | 备注 |
| :----- | :----- | :----- |
|=	|等于|	|
|!=	|不等于|	|
|>	|大于|	|
|>=	|大于或等于	||
|<	|小于	||
|<=	|小于或等于	||
|In	|包含	|使用英文逗号 , 分割|
|NotIn	|不包含	|使用英文逗号 , 分割|
|Like	|Like 查询	|与 SQL 一致，需要在值中包含百分号 %，代表模糊查询|
|NotLike	|非 Like 查询	|与 SQL 一致，需要在值中包含百分号 %，代表模糊查询|

### Order 对象

可以向内容列表 API 传递 Order 对象数组，用于指定内容排序规则，系统将按指定的排序规则返回内容集合。

Order 对象说明：

| 参数名 | 说明 | 必填项 | JSON 类型 | 备注 |
| :----- | :----- | :----- | :----- | :----- |
|column	|内容字段|	必填	|字符串	|可以是内容实体Content中存在的任意字段|
|desc	|倒叙|	必填	|布尔值	|指定排序规则，true 代表倒叙，false 代表正序|

### 返回 Body

| 参数名 | 说明 | 备注 |
| :----- | :----- | :----- |
|totalCount	|总项	|符合查询条件的内容总数|
|contents	|内容列表	|Content 列表|

### 示例 1

以下请求将返回站点Id为1的已审核内容，每页显示30条，返回第一页。

```
POST /api/v1/contents HTTP/1.1
Content-Type: application/json
X-XY-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf

{
  "siteId": 1,
  "checked": true,
  "page": 1,
  "perPage": 30
}
```

### 示例 2

搜索内容作者等于“张三”的所有内容并返回结果。

```
POST /api/v1/contents HTTP/1.1
Content-Type: application/json
X-XY-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf

{
  "siteId": 1,
  "wheres": [
      {
          "column": "Author",
          "operator": "=",
          "value": "张三"
      }
  ]
  "page": 1,
  "perPage": 30
}
```

### 示例 3

搜索栏目Id为10的所有已审核内容。

```
POST /api/v1/contents HTTP/1.1
Content-Type: application/json
X-XY-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf

{
  "siteId": 1,
  "channelId": 10,
  "checked": true,
  "page": 1,
  "perPage": 30
}
```

### 示例 4

按最后编辑时间的倒序排序并返回结果。

```
POST /api/v1/contents HTTP/1.1
Content-Type: application/json
X-XY-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf

{
  "siteId": 1,
  "checked": true,
  "orders": [
      {
          "column": "LastEditDate",
          "desc": true,
      }
  ]
  "page": 1,
  "perPage": 30
}
```

### 示例 5

搜索内容标题包含“中国”的所有内容并返回结果。

```
POST /api/v1/contents HTTP/1.1
Content-Type: application/json
X-XY-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf

{
  "siteId": 1,
  "wheres": [
      {
          "column": "Title",
          "operator": "Like",
          "value": "%中国%"
      }
  ]
  "page": 1,
  "perPage": 30
}
```