# <stl:yes> 成功模板

```html
<stl:yes></stl:yes>
```

### 说明

通过 stl:yes 标签在模板中显示成功模板

### 示例

**显示搜索结果**

下面的例子通过自定义载入中、有搜索结果以及无搜索结果模板来实现搜索页面的自定义。

```html
<stl:search>
  <stl:yes>
    <stl:pageContents scope="All" pageNum="12">
      <stl:a target="_blank"></stl:a><br />
    </stl:pageContents>
    <br />
    <stl:pageItems>
      <table cellpadding="0" cellspacing="0" width="90%" height="40" align="center">
        <tr>
          <td align="left">
            <stl:pageItem type="FirstPage" text="首页"></stl:pageItem> |
            <stl:pageItem type="PreviousPage" text="上一页"></stl:pageItem> |
            <stl:pageItem type="NextPage" text="下一页"></stl:pageItem> |
            <stl:pageItem type="LastPage" text="末页"></stl:pageItem>
          </td>
          <td align="right">
            <stl:pageItem type="CurrentPageIndex" text="当前页："></stl:pageItem>
            <stl:pageItem type="PageNavigation"></stl:pageItem>
          </td>
        </tr>
      </table>
    </stl:pageItems>
  </stl:yes>
</stl:search>
```
