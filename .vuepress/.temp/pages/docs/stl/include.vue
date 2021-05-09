<template><h1 id="包含文件"><a class="header-anchor" href="#包含文件">#</a> 包含文件</h1>
<p>包含文件用于创建可在多个页面重复使用的页眉、页脚或元素。</p>
<p><code>&lt;stl:include&gt;</code> 标签会获取指定文件中存在的所有文本/代码/标记，并复制到使用 include 语句的文件中。</p>
<p>包含文件很有用，如果你需要在网站的多张页面上引用相同的 STL、HTML 或文本的话。</p>
<p>包含文件省去了大量的工作，这意味着你可以为所有页面创建标准页头、页脚或者菜单文件。然后，在页头需要更新时，你只需更新这个页头包含文件即可。</p>
<p>需要注意的是，一旦包含文件中的内容更改了，需要生成所有页面才能将变化体现到网站中。</p>
<h5 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h5>
<p>假设我们有一个名为 &quot;footer.html&quot; 的标准的页脚文件，存放在站点根目录下的 include 文件夹中，就像这样：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Copyright © 2020-2025 {stl.siteName}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如需在模板中引用这个页脚文件，请使用 include 语句：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>欢迎访问我们的首页！<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>一段文本。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>一段文本。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>include</span> <span class="token attr-name">file</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/include/footer.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>include</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></template>