<template><h1 id="启用表单回复"><a class="header-anchor" href="#启用表单回复">#</a> 启用表单回复</h1>
<p>当前台用户提交的表单需要通过管理员进行回复并将数据显示到前台时，我们将需要启用表单回复功能。</p>
<h3 id="开启表单回复"><a class="header-anchor" href="#开启表单回复">#</a> 开启表单回复</h3>
<p>默认表单禁用了表单回复功能，我们需要进入表单 选项设置 界面，在表单回复选项中选择启用表单回复功能：</p>
<p><img src="/assets/img/plugin/form/reply01.png" alt="reply01.png"></p>
<h3 id="后台回复表单"><a class="header-anchor" href="#后台回复表单">#</a> 后台回复表单</h3>
<p>启用表单回复功能后切换到 <code>数据列表</code> 界面，列表右侧将显示本条数据的回复状态，同时显示列中将新增可选项 <code>回复时间</code> 以及 <code>回复内容</code>。</p>
<p><img src="/assets/img/plugin/form/reply02.png" alt="reply02.png"></p>
<p>点击表单数据右侧的 回复 链接，系统将弹出回复界面：</p>
<p><img src="/assets/img/plugin/form/reply03.png" alt="reply03.png"></p>
<p>在回复界面中输入内容即可完成内容回复。</p>
<h3 id="前台显示已回复列表"><a class="header-anchor" href="#前台显示已回复列表">#</a> 前台显示已回复列表</h3>
<p>接下来我们要做的就是在前台页面显示已回复的表单数据。</p>
<p>进入 <code>表单</code> -&gt; <code>表单模板</code> 界面，切换至 <code>数据显示模板</code></p>
<p><img src="/assets/img/plugin/form/reply04.png" alt="reply04.png"></p>
<p>在预览下拉框中选择表单，系统将弹出数据显示预览窗口：</p>
<p><img src="/assets/img/plugin/form/reply05.png" alt="reply05.png"></p>
<p>可以看到，只有已回复的数据才会显示在数据列表中。</p>
<p>最后，我们需要将数据列表显示在前台页面中，通常的做法是单独创建一个单页模板，用来显示表单列表界面。</p>
<p>我们为单页模板设置模板名称及生成文件名，并添加如下代码：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>联系我们<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>form</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>联系我们<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>form</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>其中 <code>name</code> 属性指定表单名称，<code>type</code> 属性指定表单显示样式。</p>
<p>保存模板后，访问单页模板页面，我们将看到页面中显示已回复表单数据了。</p>
</template>