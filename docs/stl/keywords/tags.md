# <stl:tags> 标签

```html
<stl:tags
    tagLevel="标签级别"
    totalNum="显示标签数目"
    isOrderByCount="是否按引用次数排序"
    theme="主题样式"
    context="所处上下文">
</stl:tags>
```

### 说明

通过 `stl:tags` 标签在模板中显示内容标签。

`stl:tags` 标签用于在页面中显示标签，标签的排列顺序依照字典排序，按照热门程度确定字体的大小和颜色。

标签有三个重要属性：标签名、标签使用次数、标签级别（热门程度）。通常标签显示的字体大小和颜色由标签级别决定，标签级别由系统通过标签的使用次数计算而来。

`<stl:tags>` 标签能够包含代码，用于控制每一条标签的显示样式。在`<stl:tags>`内部可以嵌入任何HTML代码和STL代码，除此以外还能够嵌入以下三种实体：标签名、标签使用次数、标签级别（热门程度）。其中标签名使用`{Tag.Name}`表示，标签使用次数使用`{Tag.Count}`表示，标签级别使用`{Tag.Level}`表示。

如果`<stl:tags>` 标签内部不包含代码，系统将采用默认的显示样式显示标签。

如果 `<stl:tags>` 标签置于内容模板中，系统将仅显示当前内容包含的标签，如果希望在内容模板中显示站点内的所有标签，需要设置 context （上下文）属性为 "Channel"。

属性 tagLevel 用于控制显示标签的级别，默认显示所有级别的标签。标签分为四个级别，代表有百分之多少的内容引用了此标签：

级别一的标签引用百分比为0%—20% 级别二的标签引用百分比为20%—50% 级别三的标签引用百分比为50%—70% 级别四的标签引用百分比为70%—100% 属性 totalNum 控制显示标签数量。

`<stl:tags>` 标签对应的实体为`{stl:tags}`。

### 属性

| 属性 | 说明 |
|:------|:-----|
| tagLevel | 标签级别 |
| totalNum | 显示标签数目 |
| isOrderByCount | 是否按引用次数排序 |
| theme | 主题样式 |
| context | 所处上下文 |

**tagLevel - 标签级别**

标签的级别，页面将显示等于或大于此级别的标签。

**totalNum - 显示标签数目**

显示标签数目

**isOrderByCount - 是否按引用次数排序**

是否按引用次数排序

"true" 是
"false" 否

**theme - 主题样式**

显示的主题样式

"Default" 默认样式
"Style1" 样式一
"Style2" 样式二

**context - 所处上下文**

所处上下文

"Content" 仅显示当前内容包含的标签
"Channel" 显示站点内所有标签

### 示例

**默认方式显示标签**

下面的例子显示站点内的所有标签，显示数量为 30。

```html
<stl:tags context="Channel" totalNum="30"></stl:tags>
```

**自定义标签显示样式**

下面的例子采用自定义的方式显示标签。

```html
<div class="mod">
  <div class="mBody">
  <div class="tagHead">标签列表</div>
    <ul class="tagCloud">
      <stl:tags context="Channel" totalNum="30">
        <li class="tag_popularity_{Tag.Level}">
          <stl:a target="_blank" href="/utils/tags.html?tagName={Tag.Name}">{Tag.Name}</stl:a>
        </li>
      </stl:tags>
    </ul>
  </div>
</div>
```
