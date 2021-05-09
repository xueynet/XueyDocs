<template><h1 id="stl-元素"><a class="header-anchor" href="#stl-元素">#</a> STL 元素</h1>
<p>STL 元素包裹在开始和结束尖括号 <code>&lt;&gt;</code> 中，属性用空格隔开，可以包含其他标签作为子标签，例如：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span> <span class="token attr-name">channelIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>首页<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>链接<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>STL 元素之间可以相互嵌套；例如</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span> <span class="token attr-name">channelIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>首页<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>content</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>content</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>STL 元素最终将解析为 HTML 标签或者纯文字。</p>
<h3 id="栏目标签"><a class="header-anchor" href="#栏目标签">#</a> 栏目标签</h3>
<p>内容标签包含获取内容列表以及内容属性相关的标签。</p>
<table>
<thead>
<tr>
<th style="text-align:left">STL元素</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>stl:channel</code> 获取栏目值</td>
<td style="text-align:left">通过 stl:channel 标签在模板中显示指定栏目的属性值</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:channels</code> 栏目列表</td>
<td style="text-align:left">通过 stl:channels 标签在模板中显示栏目列表</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:pageChannels</code> 分页栏目列表</td>
<td style="text-align:left">通过 stl:pageChannels 标签在模板中显示分页栏目列表</td>
</tr>
</tbody>
</table>
<h3 id="内容标签"><a class="header-anchor" href="#内容标签">#</a> 内容标签</h3>
<p>内容标签包含获取内容列表以及内容属性相关的标签。</p>
<table>
<thead>
<tr>
<th style="text-align:left">STL元素</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>stl:content</code> 获取内容值</td>
<td style="text-align:left">通过 stl:content 标签在模板中显示指定内容的属性值</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:contents</code> 内容列表</td>
<td style="text-align:left">通过 stl:contents 标签在模板中显示内容列表</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:pageContents</code> 分页内容列表</td>
<td style="text-align:left">通过 stl:pageContents 标签在模板中显示分页内容列表</td>
</tr>
</tbody>
</table>
<h3 id="导航标签"><a class="header-anchor" href="#导航标签">#</a> 导航标签</h3>
<p>导航标签（面包屑导航）包含所有与页面导航相关的标签，包括链接、当前位置、导航、以及下拉菜单等。</p>
<table>
<thead>
<tr>
<th style="text-align:left">STL元素</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>stl:a</code> 获取链接</td>
<td style="text-align:left">通过 stl:a 标签在模板中创建链接，系统将根据所处上下文计算链接地址</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:location</code> 当前位置</td>
<td style="text-align:left">通过 stl:location 标签在模板中插入页面的当前位置</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:navigation</code> 显示导航</td>
<td style="text-align:left">通过 stl:navigation 标签在模板中显示链接导航</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:tree</code> 树状导航</td>
<td style="text-align:left">通过 stl:tree 标签在模板中显示树状导航</td>
</tr>
</tbody>
</table>
<h3 id="图片及多媒体标签"><a class="header-anchor" href="#图片及多媒体标签">#</a> 图片及多媒体标签</h3>
<p>图片标签包含所有涉及到显示图片以及组织图片显示样式的相关标签。</p>
<table>
<thead>
<tr>
<th style="text-align:left">STL元素</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>stl:image</code> 显示图片</td>
<td style="text-align:left">通过 stl:image 标签在模板中显示栏目或内容的图片</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:file</code> 文件下载链接</td>
<td style="text-align:left">通过 stl:file 标签在模板中显示文件下载链接</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:video</code> 播放视频</td>
<td style="text-align:left">通过 stl:video 标签在模板中显示视频播放器</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:audio</code> 播放音频</td>
<td style="text-align:left">通过 stl:audio 标签在模板中显示并播放音频文件</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:flash</code> 显示 Flash</td>
<td style="text-align:left">通过 stl:flash 标签在模板中获取并显示栏目或内容的 Flash</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:player</code> 播放视频</td>
<td style="text-align:left">通过 stl:player 标签在模板中播放视频</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:focusViewer</code> 轮播图</td>
<td style="text-align:left">通过 stl:focusViewer 标签在模板中显示轮播图</td>
</tr>
</tbody>
</table>
<h3 id="判断标签"><a class="header-anchor" href="#判断标签">#</a> 判断标签</h3>
<p>判断标签用于根据条件判断显示内容，包含通用的 if 标签以及用于列表的 itemTemplate 标签。</p>
<table>
<thead>
<tr>
<th style="text-align:left">STL元素</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>stl:if</code> 条件判断</td>
<td style="text-align:left">通过 stl:if 标签在模板中根据条件判断显示内容</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:itemTemplate</code> 列表项</td>
<td style="text-align:left">通过 stl:itemTemplate 标签在模板中控制列表中每一项的显示内容及样式</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:loading</code> 载入模板</td>
<td style="text-align:left">通过 stl:loading 标签在模板中创建载入中显示的内容</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:yes</code> 成功模板</td>
<td style="text-align:left">通过 stl:yes 标签在模板中显示成功模板</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:no</code> 失败模板</td>
<td style="text-align:left">通过 stl:no 标签在模板中显示失败模板</td>
</tr>
</tbody>
</table>
<h3 id="分页标签"><a class="header-anchor" href="#分页标签">#</a> 分页标签</h3>
<p>分页标签包含所有涉及分页时所需要用到的标签，包括分页元素、栏目分页列表、内容分页列表等。</p>
<table>
<thead>
<tr>
<th style="text-align:left">STL元素</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>stl:pageItems</code> 分页项容器</td>
<td style="text-align:left">通过 stl:pageItems 标签在模板中插入分页项的容器，当不需要分页时容器内的内容不显示</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:pageItem</code> 分页项</td>
<td style="text-align:left">通过 stl:pageItem 标签在模板中显示分页项（上一页、下一页、当前页、页跳转、页导航等）</td>
</tr>
</tbody>
</table>
<h3 id="数据库标签"><a class="header-anchor" href="#数据库标签">#</a> 数据库标签</h3>
<p>数据库标签用于获取指定数据库信息，包括显示列表以及获取值所需要的标签。</p>
<table>
<thead>
<tr>
<th style="text-align:left">STL元素</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>stl:sqlContents</code> 数据库列表</td>
<td style="text-align:left">通过 stl:sqlContents 标签在模板中显示数据库列表</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:sqlContent</code> 数据库值</td>
<td style="text-align:left">通过 stl:sqlContent 标签在模板中显示数据库值</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:queryString</code> SQL 查询语句</td>
<td style="text-align:left">通过 stl:queryString 标签在模板中定义 SQL 查询语句</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:pageSqlContents</code> 分页数据库列表</td>
<td style="text-align:left">通过 stl:pageSqlContents 标签在模板中显示能够分页的数据库列表</td>
</tr>
</tbody>
</table>
<h3 id="站点标签"><a class="header-anchor" href="#站点标签">#</a> 站点标签</h3>
<p>站点标签包含获取网站列表以及网站属性相关的标签。</p>
<table>
<thead>
<tr>
<th style="text-align:left">STL元素</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>stl:value</code> 获取值</td>
<td style="text-align:left">通过 stl:value 标签在模板中获取值</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:sites</code> 站点列表</td>
<td style="text-align:left">通过 stl:sites 标签在模板中显示站点列表</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:site</code> 获取站点值</td>
<td style="text-align:left">通过 stl:site 标签在模板中显示站点值</td>
</tr>
</tbody>
</table>
<h3 id="其他标签"><a class="header-anchor" href="#其他标签">#</a> 其他标签</h3>
<p>其他常用的 STL 标签。</p>
<table>
<thead>
<tr>
<th style="text-align:left">STL元素</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>stl:action</code> 执行动作</td>
<td style="text-align:left">通过 stl:action 标签在模板中创建链接，点击链接后将执行相应的动作</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:container</code> 容器</td>
<td style="text-align:left">通过 stl:container 标签在模板中定义容器，切换上下文</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:count</code> 显示数值</td>
<td style="text-align:left">通过 stl:count 标签在模板中显示统计数字</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:dynamic</code> 动态显示</td>
<td style="text-align:left">通过 stl:dynamic 标签在模板中实现动态显示功能</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:each</code> 列表项循环</td>
<td style="text-align:left">通过 stl:each 标签在模板中遍历指定的列表项</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:include</code> 包含文件</td>
<td style="text-align:left">通过 stl:include 标签在模板中包含另一个文件，作为模板的一部分</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:marquee</code> 无间隙滚动</td>
<td style="text-align:left">通过 stl:marquee 标签在模板中创建一个能够无间隙滚动的内容块</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:printer</code> 打印</td>
<td style="text-align:left">通过 stl:printer 标签在模板中实现打印功能</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:rss</code> Rss 订阅</td>
<td style="text-align:left">通过 stl:rss 标签在模板中生成 Rss 阅读器能够浏览的 Rss 订阅</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:search</code> 搜索</td>
<td style="text-align:left">通过 stl:search 标签在模板中显示搜索结果</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:select</code> 下拉列表</td>
<td style="text-align:left">通过 stl:select 标签在模板中显示栏目或内容下拉列表</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:tabs</code> 页签切换</td>
<td style="text-align:left">通过 stl:tabs 标签在模板中显示页签切换</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:tags</code> 标签</td>
<td style="text-align:left">通过 stl:tags 标签在模板中显示内容标签</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:zoom</code> 文字缩放</td>
<td style="text-align:left">通过 stl:zoom 标签在模板中实现文字缩放功能</td>
</tr>
</tbody>
</table>
</template>

<style>
table th:first-of-type {
    width: 40%;
}
table th:nth-of-type(2) {
    width: 60%;
}
</style>
