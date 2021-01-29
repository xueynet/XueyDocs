# <stl:pdf> PDF 展示

```html
<stl:pdf
  type="指定存储PDF文件的字段"
  no="显示字段的顺序"
  src="PDF文件地址"
  fallbackLink="浏览器不支持时显示"
  forceIframe="使用iframe显示PDF"
  height="显示高度"
  page="默认显示指定页"
  width="显示宽度"
  full="整屏显示">
</stl:pdf>
```

::: warning
`<stl:pdf>` 标签需要使用 XYCMS 7.0.1 及以上版本。
:::

### 说明

通过 `stl:pdf` 标签将 PDF 文件嵌入到 HTML 文档中。

`stl:pdf `标签底层采用 [PDFObject](https://pdfobject.com/)

### 属性

| 属性 | 说明 |
|:------|:-----|
| type | 指定存储 PDF 文件的字段 |
| no | 显示字段的顺序 |
| src | PDF 文件地址 |
| fallbackLink | 浏览器不支持时显示 |
| forceIframe | 使用 iframe 显示 PDF |
| height | 显示高度 |
| page | 默认显示指定页 |
| width | 显示宽度 |
| full | 整屏显示 |

**type - 指定存储 PDF 文件的字段**

指定存储 PDF 文件的字段，可以是自定义的附件字段，默认为 FileUrl。

**no - 显示字段的顺序**

显示字段存储的第几个PDF文件，默认为 1。

**src - PDF 文件地址**

可以用"@"开头表示当前网站根目录，用"~"开头表示系统根目录，不设置代表使用内容附件字段作为PDF文件地址。

src属性与type属性通常只会使用其一，如果设置了src的同时设置了type属性，标签将优先使用src属性的值作为PDF文件地址。

**fallbackLink - 浏览器不支持时显示**

当浏览器不支持嵌入式PDF时，在此输入的任何字符串都将插入到目标元素中。

**forceIframe - 使用 iframe 显示 PDF**

如果将此布尔值设置为true，并且浏览器支持PDF嵌入，则标签会使用`<iframe>`而不是`<embed>`显示PDF。

**height - 显示高度**

显示PDF窗口的高度，如果未指定，标签将默认为100％。

height是标准CSS，支持所有单位，包括px，％，em和rem。

**page - 默认显示指定页**

如果浏览器支持，在此输入的任何数字都将使PDF打开到指定的页码。如果未指定，PDF将在第1页上打开。

**width - 显示宽度**

显示PDF窗口的宽度，如果未指定，标签将默认为100％。

width是标准CSS，支持所有单位，包括px，％，em和rem。

**full - 整屏显示**

如果将此布尔值设置为true，PDF将在整个页面中显示，页面中原有的内容将无法显示。

### 示例

**在页面中显示指定PDF地址**

下面的例子指定显示的PDF地址并设置显示宽度与高度：

```html
<stl:pdf src="@/upload/files/2020/10/8b66b20e22ee0f0c.pdf" height="500px" width="100%"></stl:pdf>
```

**指定附件字段为PDF地址**

下面的例子在内容模板中通过附件字段获取PDF地址并显示：

```html
<stl:pdf type="fileUrl" height="500px" width="100%"></stl:pdf>
```

**在页面中全屏显示PDF**

下面的例子在内容模板中通过附件字段获取PDF地址并显示：

```html
<stl:pdf src="@/upload/files/2020/10/8b66b20e22ee0f0c.pdf" full="true"></stl:pdf>
```
