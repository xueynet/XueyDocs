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
