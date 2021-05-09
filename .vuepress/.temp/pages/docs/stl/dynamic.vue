<template><h1 id="动态显示"><a class="header-anchor" href="#动态显示">#</a> 动态显示</h1>
<p>默认系统是通过生成全静态页面来显示内容的，这样的好处有很多，比如加载速度快、安全性高、服务器负载小、便于 SEO 优化等等。</p>
<p>但是有些情况下，我们希望能够实时显示数据，而不是每次需要生成页面后才能显示最新的数据，这种情况下我们就需要采用动态显示方式显示内容了。</p>
<p>我们可以通过属性来切换动态显示，也可以通过动态标签来切换动态显示，下面分别进行说明。</p>
<h3 id="通过属性切换动态显示"><a class="header-anchor" href="#通过属性切换动态显示">#</a> 通过属性切换动态显示</h3>
<p>大部分标签都拥有 isDynamic 属性，用于设置是否将此标签动态显示。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>contents</span> <span class="token attr-name">isDynamic</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>contents</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="通过元素切换动态显示"><a class="header-anchor" href="#通过元素切换动态显示">#</a> 通过元素切换动态显示</h3>
<p>如果需要动态显示的标签比较多，可以使用 <code>&lt;stl:dynamic&gt;</code>将这些代码嵌套进来实现动态显示。请参考：<code>&lt;stl:dynamic&gt;</code> 容器元素。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>dynamic</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>contents</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>contents</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>dynamic</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="脚本事件"><a class="header-anchor" href="#脚本事件">#</a> 脚本事件</h3>
<p>Js 脚本事件只能通过定义 <code>&lt;stl:dynamic&gt;</code> 元素的属性来支持。</p>
<p><code>&lt;stl:dynamic&gt;</code> 标签是由 Ajax 来实现的，页面通过 Js 发起动态请求，服务器返回请求结果并显示在页面中。</p>
<p>动态内容由于通过 Ajax 加载，会有一定的延迟，我们可以通过定义 Ajax 事件来进行精确控制。</p>
<p>请参考：Js 脚本事件。</p>
</template>