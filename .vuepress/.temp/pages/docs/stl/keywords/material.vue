<template><h1 id="stl-material-获取素材"><a class="header-anchor" href="#stl-material-获取素材">#</a> <a href="stl:material">stl:material</a> 获取素材</h1>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>material</span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>类型<span class="token punctuation">"</span></span>
    <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>素材标题<span class="token punctuation">"</span></span>
    <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>素材Id<span class="token punctuation">"</span></span>
    <span class="token attr-name">startIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>字符开始位置<span class="token punctuation">"</span></span>
    <span class="token attr-name">length</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>指定字符长度<span class="token punctuation">"</span></span>
    <span class="token attr-name">wordNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示字符的数目<span class="token punctuation">"</span></span>
    <span class="token attr-name">ellipsis</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>文字超出部分显示的文字<span class="token punctuation">"</span></span>
    <span class="token attr-name">replace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>需要被替换的文字<span class="token punctuation">"</span></span>
    <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>替换文字<span class="token punctuation">"</span></span>
    <span class="token attr-name">isClearTags</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>清除标签<span class="token punctuation">"</span></span>
    <span class="token attr-name">isReturnToBr</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>回车改为换行<span class="token punctuation">"</span></span>
    <span class="token attr-name">isLower</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>转换为小写<span class="token punctuation">"</span></span>
    <span class="token attr-name">isUpper</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>转换为大写<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>material</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="说明"><a class="header-anchor" href="#说明">#</a> 说明</h3>
<p>通过 <code>stl:material</code> 标签在模板中获取素材。</p>
<p><code>&lt;stl:material&gt;</code> 标签对应的实体为<code>{stl:material}</code>。</p>
<h3 id="属性"><a class="header-anchor" href="#属性">#</a> 属性</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">type</td>
<td style="text-align:left">类型</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">素材标题</td>
</tr>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">素材Id</td>
</tr>
<tr>
<td style="text-align:left">startIndex</td>
<td style="text-align:left">字符开始位置</td>
</tr>
<tr>
<td style="text-align:left">length</td>
<td style="text-align:left">指定字符长度</td>
</tr>
<tr>
<td style="text-align:left">wordNum</td>
<td style="text-align:left">显示字符的数目</td>
</tr>
<tr>
<td style="text-align:left">ellipsis</td>
<td style="text-align:left">文字超出部分显示的文字</td>
</tr>
<tr>
<td style="text-align:left">replace</td>
<td style="text-align:left">需要被替换的文字</td>
</tr>
<tr>
<td style="text-align:left">to</td>
<td style="text-align:left">替换文字</td>
</tr>
<tr>
<td style="text-align:left">isClearTags</td>
<td style="text-align:left">清除标签</td>
</tr>
<tr>
<td style="text-align:left">isReturnToBr</td>
<td style="text-align:left">回车改为换行</td>
</tr>
<tr>
<td style="text-align:left">isLower</td>
<td style="text-align:left">转换为小写</td>
</tr>
<tr>
<td style="text-align:left">isUpper</td>
<td style="text-align:left">转换为大写</td>
</tr>
</tbody>
</table>
<p><strong>type - 类型</strong></p>
<p>设置需要显示的素材类型。</p>
<ul>
<li>&quot;Article&quot; 图文素材。</li>
<li>&quot;Image&quot; 图片素材。</li>
<li>&quot;Audio&quot; 音频素材。</li>
<li>&quot;Video&quot; 视频素材。</li>
<li>&quot;File&quot; 文件素材。</li>
</ul>
<p><strong>name - 素材标题</strong></p>
<p>设置需要显示的素材标题，系统将查到并显示指定标题的素材。</p>
<p><strong>id - 素材Id</strong></p>
<p>设置需要显示的素材Id，系统将查到并显示指定Id的素材。</p>
<p><strong>startIndex - 字符开始位置</strong></p>
<p>设置文字开始显示的位置，默认值为 0，代表从头显示。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>startIndex 不区分中英文，汉字、英文字母、空格及符号均认为是一个字符。</p>
</div>
<p><strong>length - 指定字符长度</strong></p>
<p>设置显示文字的字数，超出部分将用 ellipsis 属性设置的值替代。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>length 不区分中英文，汉字、英文字母、空格及符号均认为是一个字符。</p>
</div>
<p><strong>wordNum - 显示字符的数目</strong></p>
<p>设置显示文字的字数，超出部分将用 ellipsis 属性设置的值替代。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>wordNum 区分中英文，中文汉字算作一个字符，两个英文字母才算作一个字符。由于在 Web 页面中，两个英文字母的宽度等于一个汉字，所以我们通常使用 wordNum 属性来设置文本的显示数量。</p>
</div>
<p><strong>ellipsis - 文字超出部分显示的文字</strong></p>
<p>设置了 wordNum 属性或者 length 属性时，当文字超出了指定的字数后，超出部分将用 ellipsis 属性设置的值来替代。</p>
<p>ellipsis 的默认值为 ...，你也可以设置空值（ellipsis=&quot;&quot;）来让超出部分不使用符号替换。</p>
<p><strong>replace - 需要被替换的文字</strong></p>
<p>如果需要将文字中的一部分替换为另一部分，可以使用 replace 属性和 to 属性。</p>
<p><strong>to - 替换文字</strong></p>
<p>to 代表替换后的文字。</p>
<p><strong>isClearTags - 清除标签</strong></p>
<p>设置是否清除 HTML 标签，仅显示纯文本。</p>
<p>在后台内容编辑器中录入的数据通常会带有大量的 HTML 标签，如果我们只希望显示文字本身，需要使用 isClearTags 属性。</p>
<ul>
<li>&quot;true&quot; 清除 HTML 标签。</li>
<li>&quot;false&quot; 不清除 HTML 标签。此值是默认的，如果没有指定属性的话。</li>
</ul>
<p><strong>isReturnToBr - 回车改为换行</strong></p>
<p>设置是否将回车换行符号替换为 HTML <code>&lt;br&gt;</code>换行标签。</p>
<p>由于 HTML 中的换行在页面中显示为空格，所以如果需要显示后台 TextArea 文本框录入的换行时，需要使用 isReturnToBr 属性。</p>
<ul>
<li>&quot;true&quot; 替换回车符。</li>
<li>&quot;false&quot; 不替换回车符。此值是默认的，如果没有指定属性的话。</li>
</ul>
<p><strong>isLower - 转换为小写</strong></p>
<p>设置是否将文本中的所有英文字母转换为小写字母。</p>
<ul>
<li>&quot;true&quot; 转换为小写。</li>
<li>&quot;false&quot; 不转换为小写。此值是默认的，如果没有指定属性的话。</li>
</ul>
<p><strong>isUpper - 转换为大写</strong></p>
<p>设置是否将文本中的所有英文字母转换为大写字母。</p>
<ul>
<li>&quot;true&quot; 转换为大写。</li>
<li>&quot;false&quot; 不转换为大写。此值是默认的，如果没有指定属性的话。</li>
</ul>
</template>