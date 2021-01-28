# <stl:flash> 显示Flash

```html
<stl:flash
    channelIndex="栏目索引"
    channelName="栏目名称"
    parent="显示父栏目"
    upLevel="上级栏目的级别"
    topLevel="从首页向下的栏目级别"
    type="指定存储flash文件的字段"
    src="显示的flash地址"
    altSrc="备选flash文件地址"
    width="宽度"
    height="高度">
</stl:flash>
```

### 说明

通过 `stl:flash` 标签在模板中获取并显示栏目或内容的Flash

`stl:flash` 标签的地址取自栏目或内容的图片地址，当图片地址为SWF结尾的flash文件时显示此标签，否则自动转成 `<stl:image>` 标签。

标签 在栏目模版中默认显示此栏目的flash，在内容模版中默认显示此内容的flash。

`stl:flash` 标签能够作为 `<stl:channels>` 等标签的子标签，当作为 的子标签使用时将显示栏目的flash。 `stl:flash` 标签能够作为 `<stl:contents>` 等标签的子标签，当作为 的子标签使用时将显示内容的flash。

`<stl:flash>` 标签对应的实体为`{stl:flash}`。

### 属性

| 属性 | 说明 |
|:-----|:----|
| channelIndex | 栏目索引 |
| channelName | 栏目名称 |
| parent | 显示父栏目 |
| upLevel | 上级栏目的级别 |
| topLevel | 从首页向下的栏目级别 |
| type | 指定存储flash文件的字段 |
| src | 显示的flash文件地址 |
| altSrc | 备选flash文件地址 |
| width | 宽度 |
| height | 高度 |

**channelIndex - 栏目索引**

栏目索引

**channelName - 栏目名称**

栏目名称

**parent - 显示父栏目**

是否显示父栏目的 flash。此属性只可属于以下可能的取值的一种。

* "true" 显示父栏目的 flash，等价于 upLevel="1"
* "false" 不显示父栏目的 flash

**upLevel - 上级栏目的级别**

显示上几级栏目的 flash，0 为本级，1 为父栏目，以此类推。

**topLevel - 从首页向下的栏目级别**

显示从首页向下某个级别栏目的 flash，0 代表网站首页，1 代表一级栏目，以此类推。

**type - 指定存储flash文件的字段**

ImageUrl 指定存储 Flash 的字段，可以是自定义字段

**src - 显示的flash文件地址**

flash 文件地址，可以用"@"开头表示当前网站根目录，用"~"开头表示系统根目录。

**altSrc - 备选flash文件地址**

指定的 flash 不存在时的显示地址，可以用"@"开头表示当前网站根目录，用"~"开头表示系统根目录。

**width - 宽度**

flash 的宽度

**height - 宽度**

flash 的高度

### 示例

**显示指定的 flash 文件**

下面的例子显示文件名称为"hot.swf"的 flash 文件。

```html
<stl:flash src="@/images/hot.swf" width="200" height="200"></stl:flash>
```

**显示指定栏目的 flash**

下面的例子显示栏目"新闻"的 flash。

```html
<stl:flash channelIndex="新闻" width="200" height="200"></stl:flash>
```
