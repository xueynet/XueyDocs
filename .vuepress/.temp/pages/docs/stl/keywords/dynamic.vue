<template><h1 id="stl-dynamic-动态显示"><a class="header-anchor" href="#stl-dynamic-动态显示">#</a> <a href="stl:dynamic">stl:dynamic</a> 动态显示</h1>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>dynamic</span>
    <span class="token attr-name">context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>所处上下文<span class="token punctuation">"</span></span>
    <span class="token attr-name">inline</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>是否在行内显示<span class="token punctuation">"</span></span>
    <span class="token attr-name">onBeforeSend</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>动态请求发送前执行的JS代码<span class="token punctuation">"</span></span>
    <span class="token attr-name">onSuccess</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>动态请求成功后执行的JS代码<span class="token punctuation">"</span></span>
    <span class="token attr-name">onComplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>动态请求结束后执行的JS代码<span class="token punctuation">"</span></span>
    <span class="token attr-name">onError</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>动态请求失败后执行的JS代码<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>dynamic</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="说明"><a class="header-anchor" href="#说明">#</a> 说明</h3>
<p>通过 <code>stl:dynamic</code> 标签在模板中实现动态显示功能</p>
<p><code>&lt;stl:dynamic&gt;</code> 使用 AJAX 技术使页面中部分区域能够及时反应出变化内容，而不必生成页面后才能显示。</p>
<p><code>&lt;stl:dynamic&gt;</code> 标签用于需要即时反应出变化的页面区域，可以将任何代码放置在 <code>&lt;stl:dynamic&gt;</code> 中，页面将显示出最新的内容。</p>
<p>大部分 STL 标签拥有 <code>isDynamic</code> 属性，如：<code>&lt;stl:contents isDynamic=&quot;true&quot;&gt;&lt;/stl:contents&gt;</code>。设置此属性的结果与以下代码一致：<code>&lt;stl:dynamic&gt;&lt;stl:contents&gt;&lt;/stl:contents&gt;&lt;stl:dynamic&gt;</code></p>
<p><code>&lt;stl:dynamic&gt;</code> 中可以包含任何 STL 标签或 HTML 标签。</p>
<h3 id="js脚本事件"><a class="header-anchor" href="#js脚本事件">#</a> Js脚本事件</h3>
<p><code>&lt;stl:dynamic&gt;</code> 标签是由Ajax来实现的，页面通过Js发起动态请求，服务器返回请求结果并显示在页面中。</p>
<p>动态内容由于通过Ajax加载，会有一定的延迟，我们可以通过定义Ajax事件来进行精确控制。</p>
<p>这是Ajax事件的完整列表，以及它们被触发的顺序。每个动态请求都会触发事件。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Js脚本事件可以是一段可运行的Js代码，也可以是一个Js函数，如果是函数，请在函数名后加()以确保函数能够运行。</p>
</div>
<p><strong>onBeforeSend</strong></p>
<p>这个事件是在Ajax请求启动之前触发的，它允许你再动态访问之前进行预处理操作。</p>
<p>在此事件中可以直接调用以下参数：</p>
<ul>
<li>containerId：动态加载完毕后将更新的HTML 元素的Id</li>
</ul>
<p><strong>onSuccess</strong></p>
<p>此事件仅在请求成功时调用(服务器没有错误，数据没有错误)。</p>
<p>在此事件执行完毕后，页面才会更新数据，可以通过 onSuccess 事件对返回的数据进行调整。</p>
<p>在此事件中可以直接调用以下参数：</p>
<ul>
<li>containerId：动态加载完毕后将更新的HTML 元素的Id</li>
<li>data：返回的结果数据</li>
<li>status：返回的 HTTP 状态码</li>
</ul>
<p><strong>onError</strong></p>
<p>此事件仅在请求发生错误时调用(对于请求，永远不能同时有错误和成功回调)。</p>
<p>在此事件中可以直接调用以下参数：</p>
<ul>
<li>containerId：动态加载完毕后将更新的HTML 元素的Id</li>
<li>err：错误信息</li>
<li>status：返回的 HTTP 状态码</li>
</ul>
<p><strong>onComplete</strong></p>
<p>不管请求是否成功，都会调用此事件。这个事件是最后触发的，可以通过 onComplete 事件对已更新的页面元素进行调整。</p>
<ul>
<li>containerId：动态加载完毕后将更新的HTML 元素的Id</li>
<li>err：错误信息</li>
<li>data：返回的结果数据</li>
<li>status：返回的 HTTP 状态码</li>
</ul>
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
<td style="text-align:left">context</td>
<td style="text-align:left">所处上下文</td>
</tr>
<tr>
<td style="text-align:left">inline</td>
<td style="text-align:left">是否在行内显示</td>
</tr>
<tr>
<td style="text-align:left">onBeforeSend</td>
<td style="text-align:left">请求前触发事件</td>
</tr>
<tr>
<td style="text-align:left">onSuccess</td>
<td style="text-align:left">请求成功后触发事件</td>
</tr>
<tr>
<td style="text-align:left">onComplete</td>
<td style="text-align:left">请求结束后触发事件</td>
</tr>
<tr>
<td style="text-align:left">onError</td>
<td style="text-align:left">请求失败后触发事件</td>
</tr>
</tbody>
</table>
<p><strong>context - 所处上下文</strong></p>
<p>所处上下文</p>
<ul>
<li>&quot;Content&quot; 内容</li>
<li>&quot;Channel&quot; 栏目</li>
<li>&quot;SqlContent&quot; 获取数据库数据</li>
</ul>
<p><strong>inline - 是否在行内显示</strong></p>
<p>设置动态内容是否在行内显示，默认为false。</p>
<ul>
<li>&quot;true&quot; 动态内容在行内显示</li>
<li>&quot;false&quot; 动态内容另起一行显示</li>
</ul>
<p><strong>onBeforeSend - 请求前触发事件</strong></p>
<p>这个事件是在 Ajax 请求启动之前触发的，它允许你再动态访问之前进行预处理操作。</p>
<p>在此事件中可以直接调用以下参数：</p>
<ul>
<li>containerId：动态加载完毕后将更新的 HTML 元素的 Id</li>
</ul>
<p><strong>onSuccess - 请求成功后触发事件</strong></p>
<p>此事件仅在请求成功时调用(服务器没有错误，数据没有错误)。</p>
<p>在此事件执行完毕后，页面才会更新数据，可以通过 onSuccess 事件对返回的数据进行调整。</p>
<p>在此事件中可以直接调用以下参数：</p>
<ul>
<li>containerId：动态加载完毕后将更新的 HTML 元素的 Id</li>
<li>data：返回的结果数据</li>
<li>status：返回的 HTTP 状态码</li>
</ul>
<p><strong>onComplete - 请求结束后触发事件</strong></p>
<p>不管请求是否成功，都会调用此事件。这个事件是最后触发的，可以通过 onComplete 事件对已更新的页面元素进行调整。</p>
<ul>
<li>containerId：动态加载完毕后将更新的 HTML 元素的 Id</li>
<li>err：错误信息</li>
<li>data：返回的结果数据</li>
<li>status：返回的 HTTP 状态码</li>
</ul>
<p><strong>onError - 请求失败后触发事件</strong></p>
<p>此事件仅在请求发生错误时调用(对于请求，永远不能同时有错误和成功回调)。</p>
<p>在此事件中可以直接调用以下参数：</p>
<ul>
<li>containerId：动态加载完毕后将更新的 HTML 元素的 Id</li>
<li>err：错误信息</li>
<li>status：返回的 HTTP 状态码</li>
</ul>
<h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<p><strong>显示当前栏目的内容数</strong></p>
<p>下面的例子实现页面的简体/繁体转换功能，如果希望所有页面均实现转换，需要把代码放到所有模板中（通常放到头部包含文件）。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>dynamic</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>count</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Contents<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>count</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>dynamic</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>显示栏目&quot;新闻&quot;的内容列表</strong></p>
<p>下面例子在页面中显示&quot;新闻&quot;栏目的前 10 篇内容列表。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>dynamic</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>contents</span> <span class="token attr-name">channelIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>新闻<span class="token punctuation">"</span></span> <span class="token attr-name">totalNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>contents</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>dynamic</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></template>