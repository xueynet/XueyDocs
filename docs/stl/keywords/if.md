# <stl:if> 条件判断

```html
<stl:if
    type="测试类型"
    op="测试操作"
    value="测试值"
    context="所处上下文">
</stl:if>
```

### 说明

通过 `stl:if` 标签在模板中根据条件判断显示内容

`stl:if` 通常作为显示的判断条件，如果条件满足则显示，条件不满足则不显示。

`stl:if` 标签内可以嵌入任意代码，当条件满足时将显示嵌入的代码。如果需要根据测试是否成功显示不同的结果，需要使用子标签 `<stl:yes>` 和 `<stl:no>` ，测试条件成功时将显示 `<stl:yes>` 中的内容，测试条件失败时将显示 `<stl:no>` 中的内容。

type 属性指定测试类型，如测试栏目名称、模板名称、当前栏目是否属于指定栏目级别等。

如果需要判断自定义内容属性"XYZ"，也可以将type 设置为" XYZ"，系统将根据上下文判断栏目或内容的字段"XYZ"的值。

op 属性为测试操作，如是否值等于、不等于、大于、小于、属于等。

value 属性指定测试值，如op="Equals" value="123"（判断指定条件的值是否等于123）。

如果type为"AddDate"或"LastEditDate"，value可以采用时间段格式"数字+日期符号"，如"1y"、"3m"或"10d"，分别代表一年、三个月及十天内添加或编辑的内容。

`<stl:if>` 标签对应的实体为`{stl:if}`。

### 子标签

下表显示此标签所有的子标签。

| 子标签 | 说明 |
|:------|:-----|
| stl:yes | 测试成功显示模板，可以省略 |
| stl:no | 测试失败显示模板，可以省略 |

### 属性

| 属性 | 说明 |
|:------|:-----|
| type | 测试类型 |
| op | 测试操作 |
| value | 测试值 |
| context | 所处上下文 |

**type - 测试类型**

设置用于 if 测试的类型。

* "IsUserLoggin" 用户是否已登录
* "IsAdministratorLoggin" 管理员是否已登录
* "IsUserOrAdministratorLoggin" 用户或管理员是否已登录
* "UserGroup" 用户组
* "ChannelName" 栏目名称
* "ChannelIndex" 栏目索引
* "TemplateName" 模板名称
* "TemplateType" 模板类型，可能的 value 值：
    * "IndexPageTemplate" 首页模板
    * "ChannelTemplate" 栏目模板
    * "ContentTemplate" 内容模板
    * "FileTemplate" 单页模板
* "TopLevel" 栏目级别
* "UpChannel" 上级栏目
* "UpChannelOrSelf" 当前栏目或上级栏目
* "GroupChannel" 栏目组名称
* "GroupContent" 内容组名称
* "IsTop" 内容属性为置顶
* "IsRecommend" 内容属性为推荐
* "IsHot" 内容属性为热点
* "IsColor" 内容属性为醒目
* "CountOfContents" 内容数
* "CountOfImageContents" 图片内容数
* "CountOfChannels" 子栏目数
* "AddDate" 添加时间
* "LastEditDate" 最后编辑时间（仅用于判断内容）
* "ItemIndex" 当前项序号
* "OddItem" 是否为奇数项
* "自定义字符串" 栏目或内容的字段名称

**op - 测试操作**

设置用于 if 测试的比较操作。

* "Empty" 值为空
* "NotEmpty" 值不为空
* "Equals" 值等于
* "NotEquals" 值不等于
* "GreatThan" 值大于
* "LessThan" 值小于
* "In" 值属于
* "NotIn" 值不属于

**value - 测试值**

设置用于 if 测试的比较值。

**context - 所处上下文**

* "Content" 内容
* "Channel" 栏目
* "SqlContent" 获取数据库数据

### 示例

**判断值是否为空**

下面的例子判断内容副标题是否为空，如果不为空将显示带有副标题的行。

```html
<stl:if type="SubTitle" op="NotEmpty">
  <strong>副标题：</strong><stl:content type="SubTitle"></stl:content>
</stl:if>
```

**判断当前栏目名称**

```html
<stl:if type="ChannelName" op="In" value="栏目1,栏目2">
  <stl:yes> <p>true</p> </stl:yes>
  <stl:no> <p>false</p> </stl:no>
</stl:if>
```

**根据模板类型显示不同内容**

下面的例子判断当前模板是不是内容模板。

```html
<stl:if type="TemplateType" op="Equals" value="ContentTemplate">
  <stl:yes>
      这是内容页面
  </stl:yes>
  <stl:no>
      这不是内容页面
  </stl:no>
</stl:if>
```

**根据模板名称显示不同内容**

下面的例子根据当前模板的模板名称显示不同的内容

```html
<stl:if type="TemplateName" op="Equals" value="系统首页模板">
  <stl:yes>
      <li><A href="/" class="current">首 页</A></li>
  </stl:yes>
  <stl:no>
      <li>我不是首页</li>
  </stl:no>
</stl:if>
```

**突出显示10天内更新的内容**

下面的例子显示整个站点中最新更新的 20 篇内容，并突出显示 10 天内更新的内容。

```html
<stl:contents topLevel="0" totalNum="20" order="LastEditDate" scope="All">
  <stl:if type="LastEditDate" op="LessThan" value="10d">
      <stl:yes>
          <li><stl:a target="_blank" style="color:#F00;"></stl:a></li>
      </stl:yes>
      <stl:no>
          <li><stl:a target="_blank"></stl:a></li>
      </stl:no>
  </stl:if>
</stl:contents>
```

**判断用户是否登录**

下面的例子根据用户是否登录显示不同的内容

```html
<stl:if type="IsUserLoggin">
    <stl:yes>
        欢迎"{user.displayName}"
        <stl:a href="{stl.HomeUrl}">用户中心</stl:a>
        <stl:a href="{stl.LogoutUrl}">退出</stl:a>
    </stl:yes>
    <stl:no>
        <stl:a href="{stl.LoginUrl}">登陆</stl:a>
        <stl:a href="{stl.RegisterUrl}">注册</stl:a>
    </stl:no>
</stl:if>
```
