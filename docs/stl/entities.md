# STL实体

STL实体包裹在开始和结束大括号 {} 中，属性用空格隔开，无法包含其他标签作为子标签；例如

```js
{stl:a channelIndex="首页"}
```

STL实体通常解析为 JSON 对象或者纯文字。

一般来说，大部分功能都可以通过STL元素来实现，但是有些情况下STL元素不适合：

* 需要在属性中设置数据
* 需要在 JavaScript 代码中设置数据

由于STL元素最终将解析为 HTML 标签，将 HTML 标签放到 HTML 属性中或者 JavaScript 代码中都将引起混乱，所以一般这两种情况下需要使用STL实体。

STL实体的属性可以使用英文双引号、英文单引号或者无标识，例如以下三种写法均为正确写法：

```js
{stl:content type="title"}
```

```js
{stl:content type='title'}
```

```js
{stl:content type=title}
```

### STL实体简写

为了方便，STL实体可以使用简写方式，简写方式不需要包含前缀 stl:，且无法设置属性。

##### {stl.xyz}
{stl:value type='xyz'} 的简写。

{stl.} 代表 {stl:value} 元素的简写，{stl:value type=siteUrl} 等价于{stl.siteUrl}。

##### {channel.xyz}
{stl:channel type='xyz'} 的简写。

{channel.} 代表 {stl:channel} 元素的简写，{stl:channel type=title} 等价于{channel.title}。

##### {content.xyz}
{stl:content type='xyz'} 的简写。

{content.} 代表 {stl:content} 元素的简写，{stl:content type=title} 等价于{content.title}。

##### {sql.xyz}
{stl:sqlContent type='xyz'} 的简写。

{sql.} 代表 {stl:sqlContent} 元素的简写，{stl:sqlContent type=xyz} 等价于{sql.xyz}。

### 在属性中使用实体

通常在 HTML 属性或者STL属性中获取数据通常使用实体标签，例如：

```html
<img alt="{stl:content type='summary'}" />
```

或者

```html
<stl:a title="{stl:content type='title'}"></stl:a>
```

### 在 JavaScript 代码中使用实体

JS 代码处理的对象主要是不带格式的纯数据，所以使用STL实体返回纯文本或者JSON对象非常关键，例如：

```js
<script type="text/javascript">
var arr = {stl:contents};
<script>
```

解析后的代码为：

```js
<script type="text/javascript">
var arr = [
  {
    id: 10935,
    channelId: 1746,
    siteId: 1739,
    addUserName: "admin",
    lastEditUserName: "admin",
    writingUserName: "",
    lastEditDate: "2018-06-13 12:27:00",
    taxis: 6,
    groupNameCollection: "",
    tags: "",
    sourceId: 0,
    referenceId: 0,
    isChecked: "True",
    checkedLevel: 1,
    hits: 28,
    hitsByDay: 1,
    hitsByWeek: 28,
    hitsByMonth: 28,
    lastHitsDate: "2018-06-14 00:00:00",
    settingsXml:
      "titleformatstring=False_False_False_&translatecontenttype=Copy",
    title: "第九届国际发明展览会集团荣获 “发明创业&#8226;项目奖”",
    isTop: "False",
    isRecommend: "False",
    isHot: "False",
    isColor: "False",
    linkUrl: "",
    addDate: "2015-09-30 13:52:00",
    subTitle: "",
    imageUrl: "",
    videoUrl: "",
    fileUrl: "",
    content:
      "<div>近日，第九届国际发明展览会在昆山国际会展中心圆满落幕。作为我国发明创新领域对外开放的重要窗口、创新思想交流和发明成果产业化的重要平台，国际发明展览会自1988年创办以来，在国内外发明界、产业界产生了广泛影响。在上千个参展的创新发明项目中，集团荣获三项“发明创业•项目奖”。</div><div>电梯研发部<br/>一种用于高速电梯钢丝绳补偿及涨紧装置<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 本发明研究轿厢、对重各使用一部分缓冲器时的布置情况，并确保电梯运行过程中补偿绳不对轿厢及对重产生偏载力。高速电梯钢丝绳补偿及涨紧装置的研发对整个曳引式电梯市场补偿绳系统设计具有重大意义。按照国家质检要求，2m/s以上的曳引式电梯均应安装此产品，故钢丝绳补偿及涨紧装置具有较大的市场，能够产生一定的生产效益和社会效益。</div><div>扶梯研发部<br/>一种具有安全隔离控制柜的自动扶梯<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 本发明目的在于解决自动扶梯的客户电源布置不合理的问题，提供一种采用客户电源与控制柜一体式布置，内部隔离技术的安全隔离型主控制柜的自动扶梯。本项目在2009年初设计完成，同年首次使用在“辽宁省沈阳市鞍山西柳中国商贸城”项目上，完成了本系统的初次试验并取得成功。同年申请发明专利。现在依然成功的应用在我司所有项目共计2055台自动扶梯上，并取得“零”触电事故的安全效果。该发明有效地提高了企业在行业内的竞争优势，也符合国家对安全扶梯的倡导，具有积极推广的意义。</div><div>车库研发部<br/>多台共柱安装的双层倾斜式停车装置（停车宝）<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 本项目的研究主要降低了对建筑空间层高和柱网间距的要求，实现了在较低的空间内双层停车，实现了多车位连续、多台共柱安装，大大提升了停车空间利用率。俯仰式简易升降布置灵活，规模大到上百车位，小到几个车位，外观漂亮、结构简单。<br/>实用性：<br/>1、此产品能广泛应用在层高仅为2800mm的空间，比原3600mm的层高要求降低了800mm，应用范围更广；<br/>2、此产品多台共柱，减少了并排安装时立柱之间预留空间的需求，相同空间可增加更多停车位，提高停车空间利用率。</div><p><br/></p>",
    summary: "",
    author: "",
    source: "",
    titleformatstring: "False_False_False_",
    translatecontenttype: "Copy",
    navigationUrl: "/test19/contents/1746/10935.html"
  },
  ...
];
<script>
```

### STL标签转换为STL实体

大部分STL元素均有对应的STL实体，将元素的尖括号替换为大括号，去掉闭合标签即为对应实体，实体中属性采用双引号、单引号或者不带引号均可。如内容值元素：

```html
<stl:content type="Title" wordNum="20"></stl:content>
```

对应实体为

```html
{stl:content type='Title' wordNum='20'}
```
