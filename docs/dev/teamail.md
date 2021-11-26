# 茶舍需求文档

## 概念

### 产品介绍

|名词|内容|
|:------------:|:-------|
| 产品名称  |    茶舍+    |
| 产品slogan |  用互联网管理茶舍     |
| 产品定位  |   年青人的茶舍    |
| 产品描述  |  智能茶舍，茶饮服务     |
| 关键词    |  茶舍、茶室、约茶     |
| 目标人群  |   年青人、爱茶一族、茶行业人士    |
| 使用场景  |    茶坊、茶舍、茶室、共享茶屋   |

## 产品结构

### 界面结构

![界面结构](/assets/img/dev/20211026115357.png)

待完善

### 功能结构

![功能结构](/assets/img/dev/20211026120505.png)

待完善

## 业务流程

建议将流程统一整理，便于需求分析时查阅，这里做超链接跳转至功能性需求使用的详情流程

## 全局说明

### 名词术语

| 名称 | 说明 |
|:----:|:----:|
|||
|||
|||
|||

### 权限

### 规范化

* 时间

* 距离

* 重量

### 异常

* 网络异常呈现

* 登录状态异常

## 功能性需求（OA协同）

* 需求管理池

* 需求清单

## 非功能性需求

非功能性需求，是比较容易忽视的部分，往往和性能、安全挂钩，影响着产品的稳定性与安全性。

以下仅仅是例子，具体方案需要根据业务情况和产品特性与相关人员深入沟通。

1. 性能需求

* 响应时间：系统对请求做出响应的时间。例如系统处理一个HTTP请求需要200ms，这个200ms就是系统的响应时间。
* 并发用户数：同时承载正常使用系统功能的用户数量。
* 与性能相关的数据指标还有QPS（每秒响应请求数）、TPS（每秒处理的事务数）等。

性能需求这部分仅仅是举个例子，具体情况和数据方案，需要和相关人员深入沟通。

| 模块 | 响应时间 | 并发数 |
|:----:|:-------:|:------:|
|||
|||
|||
|||

2. 可用性需求

* 避免用户高频点击无反馈的情况。
* 为用户提供反馈渠道。
* 保持文案与组件的一致性。

3. 数据统计需求

产品初期需要一定基础的数据提供支持，因此，除了小程序官方数据统计平台，再接入第三方统计平台，统计以下事件的数据及路径转化率。