# Ping 可用性 API

Ping用于确定 API 是否可以访问，使用`GET`发起请求，请求地址为`/api/v1/ping`，此接口可以直接访问，无需身份验证。

```
GET /api/v1/ping HTTP/1.1
```

### 返回

| 名称 | 类型 | 说明 |
| :----- | :----- | :----- |
|200 OK	|字符串	|REST API处于正常状态将返回字符串pong|

### 示例

#### 请求示例

```
GET /api/v1/ping HTTP/1.1
```

#### 返回示例

```
pong
```