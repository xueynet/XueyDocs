<template><h1 id="插件的使用"><a class="header-anchor" href="#插件的使用">#</a> 插件的使用</h1>
<h3 id="开启多图上传"><a class="header-anchor" href="#开启多图上传">#</a> 开启多图上传</h3>
<p>内容相册插件安装好之后，需要进入 <code>内容相册 -&gt; 内容图片设置</code> 菜单，设置启用插件的栏目：</p>
<p><img src="/assets/img/plugin/photos/02.png" alt="02"></p>
<p>勾选栏目后点击确定，设置成功后进入 <code>信息管理 -&gt; 内容管理</code> 菜单，点击相应栏目进入内容管理界面：</p>
<p><img src="/assets/img/plugin/photos/03.png" alt="03"></p>
<p>可以看到，在内容列表的右侧，出现了 <code>内容相册</code> 链接，点击链接进入内容相册管理界面：</p>
<p><img src="/assets/img/plugin/photos/04.png" alt="04"></p>
<p>点击 <strong>点击上传</strong> 按钮，可以批量选择图片进行上传。</p>
<p><img src="/assets/img/plugin/photos/05.png" alt="05"></p>
<p>上传完毕后可能对图片进行排序、删除操作，同时插件支持对图片设置图片说明文字。</p>
<h3 id="stl-photo-标签"><a class="header-anchor" href="#stl-photo-标签">#</a> <code>&lt;stl:photo&gt;</code> 标签</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">可能的取值</th>
<th style="text-align:left">简介</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left">显示内容属性的类型</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">Id</td>
<td style="text-align:left">图片ID</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">SmallUrl</td>
<td style="text-align:left">显示缩略图</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">MiddleUrl</td>
<td style="text-align:left">显示小图</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">LargeUrl</td>
<td style="text-align:left">显示原图</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">ItemIndex</td>
<td style="text-align:left">图片序号</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">Description</td>
<td style="text-align:left">图片描述</td>
</tr>
</tbody>
</table>
<p><code>&lt;stl:photos&gt;</code> 标签用于遍历图片，例如将以下代码放至内容模板中：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>photos</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>photo</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>SmallUrl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>photo</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>photos</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="stl-slide-标签"><a class="header-anchor" href="#stl-slide-标签">#</a> <code>&lt;stl:slide&gt;</code> 标签</h3>
<p><code>&lt;stl:slide&gt;</code> 标签用于幻灯片播放：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>slide</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>slide</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>