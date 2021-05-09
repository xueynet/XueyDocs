<template><h1 id="内容解析"><a class="header-anchor" href="#内容解析">#</a> 内容解析</h1>
<h3 id="解析文字"><a class="header-anchor" href="#解析文字">#</a> 解析文字</h3>
<p>当模板中需要使用<code>&lt;stl:content&gt;</code>、<code>&lt;stl:channel&gt;</code>、<code>&lt;stl:value&gt;</code>等标签解析文字时，我们可以通过属性来控制文字解析的格式。</p>
<p><strong>wordNum 文字字数</strong></p>
<p>设置解析文字的字数，超出部分将用 ellipsis 属性设置的值替代。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>wordNum 区分中英文，中文汉字算作一个字符，两个英文字母才算作一个字符。</p>
</div>
<p>由于在 Web 页面中，两个英文字母的宽度等于一个汉字，所以我们通常使用 wordNum 属性来设置文本的解析数量。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>content</span> <span class="token attr-name">wordNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>content</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>startIndex 文字开始位置</strong></p>
<p>设置文字开始解析的位置，默认值为 0，代表从头解析。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>startIndex 不区分中英文，汉字、英文字母、空格及符号均认为是一个字符。</p>
</div>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>content</span> <span class="token attr-name">startIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>content</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>length 文字字数</strong></p>
<p>设置解析文字的字数，超出部分将用 ellipsis 属性设置的值替代。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>length 不区分中英文，汉字、英文字母、空格及符号均认为是一个字符。</p>
</div>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>content</span> <span class="token attr-name">length</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>content</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>ellipsis 省略符号</strong></p>
<p>设置了 wordNum 属性或者 length 属性时，当文字超出了指定的字数后，超出部分将用 ellipsis 属性设置的值来替代。</p>
<p>ellipsis 的默认值为 ...，你也可以设置空值（ellipsis=&quot;&quot;）来让超出部分不使用符号替换。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>content</span> <span class="token attr-name">wordNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">ellipsis</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span> -- end --<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>content</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>replace 替换前文字</strong></p>
<p>如果需要将文字中的一部分替换为另一部分，可以使用 replace 属性和 to 属性。</p>
<p>replace 代表需要替换的文字，支持纯文本、列表和正则表达式三种写法。</p>
<p><strong>使用纯文本替换</strong></p>
<p>纯文本替换直接输入替换前文字和替换后文字即可：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>content</span> <span class="token attr-name">replace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>他<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>她<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>content</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>使用列表替换</strong></p>
<p>列表替换适合多个文本替换的情况，将需要替换的文字用英文逗号（,）隔开：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>content</span> <span class="token attr-name">replace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>他,她<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>he,she<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>content</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果多个文本都替换为一个文本，to 属性可以不使用逗号隔开：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>content</span> <span class="token attr-name">replace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>他,她<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>who<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>content</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>使用正则表达式替换</strong></p>
<p>正则表达式替换需要将 replace 前后添加“/”符号，“/”符号之间的文字为替换需要使用的正则表达式：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>content</span> <span class="token attr-name">replace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/(Mr\\.? |Mrs\\.? |Miss |Ms\\.? )/<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>content</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>to 替换后文字</strong></p>
<p>to 代表替换后的文字</p>
<p><strong>isClearTags 是否清除 HTML 标签</strong></p>
<p>设置是否清除 HTML 标签，仅解析纯文本。</p>
<p>在后台内容编辑器中录入的数据通常会带有大量的 HTML 标签，如果我们只希望解析文字本身，需要使用 isClearTags 属性。</p>
<ul>
<li>&quot;true&quot; 清除 HTML 标签。</li>
<li>&quot;false&quot; 不清除 HTML 标签。此值是默认的，如果没有指定属性的话。</li>
</ul>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>content</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span> <span class="token attr-name">isClearTags</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>content</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>isReturnToBr 是否转换换行符</strong></p>
<p>设置是否将回车换行符号替换为 HTML <br>换行标签。</p>
<p>由于 HTML 中的换行在页面中解析为空格，所以如果需要解析后台 TextArea 文本框录入的换行时，需要使用 isReturnToBr 属性。</p>
<ul>
<li>&quot;true&quot; 替换回车符。</li>
<li>&quot;false&quot; 不替换回车符。此值是默认的，如果没有指定属性的话。</li>
</ul>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>content</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>summary<span class="token punctuation">"</span></span> <span class="token attr-name">isReturnToBr</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>content</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>isLower 是否转换为小写</strong></p>
<p>设置是否将文本中的所有英文字母转换为小写字母。</p>
<ul>
<li>&quot;true&quot; 转换为小写。</li>
<li>&quot;false&quot; 不转换为小写。此值是默认的，如果没有指定属性的话。</li>
</ul>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>content</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">isLower</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>content</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>isUpper 是否转换为大写</strong></p>
<p>设置是否将文本中的所有英文字母转换为大写字母。</p>
<ul>
<li>&quot;true&quot; 转换为大写。</li>
<li>&quot;false&quot; 不转换为大写。此值是默认的，如果没有指定属性的话。</li>
</ul>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>content</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">isUpper</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>content</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>leftText 文字前缀</strong></p>
<p>解析在文字之前的文字，系统会判断文字是否为空，如果文字为空，文字前缀也将不解析。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>content</span> <span class="token attr-name">leftText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题：<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>content</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>rightText 文字后缀</strong></p>
<p>解析在文字之后的文字，系统会判断文字是否为空，如果文字为空，文字后缀也将不解析。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>content</span> <span class="token attr-name">leftText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>【<span class="token punctuation">"</span></span> <span class="token attr-name">rightText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>】<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>content</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="解析日期"><a class="header-anchor" href="#解析日期">#</a> 解析日期</h3>
<p>当需要解析日期型的字段值时，通常通过 formatString 属性来设置日期格式，具体格式如下：</p>
<table>
<thead>
<tr>
<th style="text-align:left">符号</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">d</td>
<td style="text-align:left">月中的某一天。一位数的日期没有前导零。</td>
</tr>
<tr>
<td style="text-align:left">dd</td>
<td style="text-align:left">月中的某一天。一位数的日期有一个前导零。</td>
</tr>
<tr>
<td style="text-align:left">ddd</td>
<td style="text-align:left">周中某天的缩写名称，在 AbbreviatedDayNames 中定义。</td>
</tr>
<tr>
<td style="text-align:left">dddd</td>
<td style="text-align:left">周中某天的完整名称，在 DayNames 中定义。</td>
</tr>
<tr>
<td style="text-align:left">M</td>
<td style="text-align:left">月份数字。一位数的月份没有前导零。</td>
</tr>
<tr>
<td style="text-align:left">MM</td>
<td style="text-align:left">月份数字。一位数的月份有一个前导零。</td>
</tr>
<tr>
<td style="text-align:left">MMM</td>
<td style="text-align:left">月份的缩写名称，在 AbbreviatedMonthNames 中定义。</td>
</tr>
<tr>
<td style="text-align:left">MMMM</td>
<td style="text-align:left">月份的完整名称，在 MonthNames 中定义。</td>
</tr>
<tr>
<td style="text-align:left">y</td>
<td style="text-align:left">不包含纪元的年份。如果不包含纪元的年份小于 10，则解析不具有前导零的年份。</td>
</tr>
<tr>
<td style="text-align:left">yy</td>
<td style="text-align:left">不包含纪元的年份。如果不包含纪元的年份小于 10，则解析具有前导零的年份。</td>
</tr>
<tr>
<td style="text-align:left">yyyy</td>
<td style="text-align:left">包括纪元的四位数的年份。</td>
</tr>
<tr>
<td style="text-align:left">gg</td>
<td style="text-align:left">时期或纪元。如果要设置格式的日期不具有关联的时期或纪元字符串，则忽略该模式。</td>
</tr>
<tr>
<td style="text-align:left">h</td>
<td style="text-align:left">12小时制的小时。一位数的小时数没有前导零。</td>
</tr>
<tr>
<td style="text-align:left">hh</td>
<td style="text-align:left">12小时制的小时。一位数的小时数有前导零。</td>
</tr>
<tr>
<td style="text-align:left">H</td>
<td style="text-align:left">24小时制的小时。一位数的小时数没有前导零。</td>
</tr>
<tr>
<td style="text-align:left">HH</td>
<td style="text-align:left">24小时制的小时。一位数的小时数有前导零。</td>
</tr>
<tr>
<td style="text-align:left">m</td>
<td style="text-align:left">分钟，一位数的分钟数没有前导零。</td>
</tr>
<tr>
<td style="text-align:left">mm</td>
<td style="text-align:left">分钟，一位数的分钟数有一个前导零。</td>
</tr>
<tr>
<td style="text-align:left">s</td>
<td style="text-align:left">秒，一位数的秒数没有前导零。</td>
</tr>
<tr>
<td style="text-align:left">ss</td>
<td style="text-align:left">秒，一位数的秒数有一个前导零。</td>
</tr>
<tr>
<td style="text-align:left">f</td>
<td style="text-align:left">秒的小数精度为一位。其余数字被截断。</td>
</tr>
<tr>
<td style="text-align:left">ff</td>
<td style="text-align:left">秒的小数精度为两位。其余数字被截断。</td>
</tr>
<tr>
<td style="text-align:left">fff</td>
<td style="text-align:left">秒的小数精度为三位。其余数字被截断。</td>
</tr>
<tr>
<td style="text-align:left">ffff</td>
<td style="text-align:left">秒的小数精度为四位。其余数字被截断。</td>
</tr>
<tr>
<td style="text-align:left">fffff</td>
<td style="text-align:left">秒的小数精度为五位。其余数字被截断。</td>
</tr>
<tr>
<td style="text-align:left">ffffff</td>
<td style="text-align:left">秒的小数精度为六位。其余数字被截断。</td>
</tr>
<tr>
<td style="text-align:left">fffffff</td>
<td style="text-align:left">秒的小数精度为七位。其余数字被截断。</td>
</tr>
<tr>
<td style="text-align:left">t</td>
<td style="text-align:left">在AMDesignator或PMDesignator中定义的AM/PM指示项的第一个字符（如果存在）。</td>
</tr>
<tr>
<td style="text-align:left">tt</td>
<td style="text-align:left">在AMDesignator或PMDesignator中定义的AM/PM指示项（如果存在）。</td>
</tr>
<tr>
<td style="text-align:left">z</td>
<td style="text-align:left">时区偏移量（“+”或“-”后面仅跟小时）。一位数的小时数没有前导零。例如，太平洋标准时间是“-8”。</td>
</tr>
<tr>
<td style="text-align:left">zz</td>
<td style="text-align:left">时区偏移量（“+”或“-”后面仅跟小时）。一位数的小时数有前导零。例如，太平洋标准时间是“-08”。</td>
</tr>
<tr>
<td style="text-align:left">zzz</td>
<td style="text-align:left">完整时区偏移量（“+”或“-”后面跟有小时和分钟）。一位数的小时数和分钟数有前导零。例如，太平洋标准时间是“-08:00”。</td>
</tr>
<tr>
<td style="text-align:left">:</td>
<td style="text-align:left">在TimeSeparator中定义的默认时间分隔符。</td>
</tr>
<tr>
<td style="text-align:left">/</td>
<td style="text-align:left">在DateSeparator中定义的默认日期分隔符。</td>
</tr>
<tr>
<td style="text-align:left">%c</td>
<td style="text-align:left">其中c是格式模式（如果单独使用）。如果格式模式与原义字符或其他格式模式合并，则可以省略“%”字符。</td>
</tr>
<tr>
<td style="text-align:left">c</td>
<td style="text-align:left">其中c是任意字符。照原义解析字符。若要解析反斜杠字符，请使用“\”。</td>
</tr>
</tbody>
</table>
<h5 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h5>
<p>下面的例子在页面中解析内容的添加时间，并按照&quot;yyyy-MM-dd&quot;格式解析。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>content</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>AddDate<span class="token punctuation">"</span></span> <span class="token attr-name">formatString</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yyyy-MM-dd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>content</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>解析后的 HTML 代码：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code>2021-01-27
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>