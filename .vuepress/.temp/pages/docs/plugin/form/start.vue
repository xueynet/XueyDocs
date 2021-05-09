<template><h1 id="开始使用"><a class="header-anchor" href="#开始使用">#</a> 开始使用</h1>
<p>让我们从创建表单并在页面上显示表单开始，本教程通过示例说明如何创建并在页面上显示表单。</p>
<h3 id="创建表单"><a class="header-anchor" href="#创建表单">#</a> 创建表单</h3>
<p>首先，在 XYCMS 管理界面中打开 表单 -&gt; 表单管理 菜单，点击 新增表单 按钮：</p>
<p><img src="/assets/img/plugin/form/02.png" alt="2"></p>
<p>输入表单名称，如联系我们，点击确定创建表单，新创建的表单默认将包含姓名、手机、邮箱以及留言字段。</p>
<h3 id="预览表单"><a class="header-anchor" href="#预览表单">#</a> 预览表单</h3>
<p>创建完毕后，进入 表单 -&gt; 表单模板 菜单：</p>
<p><img src="/assets/img/plugin/form/03.png" alt="3"></p>
<p>在预览下拉框中选择我们新创建的联系我们表单，系统将弹出表单预览窗口：</p>
<p><img src="/assets/img/plugin/form/04.png" alt="4"></p>
<p>在此，我们输入测试数据，点击提交完成表单填写。</p>
<h3 id="查看数据"><a class="header-anchor" href="#查看数据">#</a> 查看数据</h3>
<p>再此进入 表单 -&gt; 表单管理 菜单，点击联系我们表单，进入联系我们表单管理界面：</p>
<p><img src="/assets/img/plugin/form/05.png" alt="5"></p>
<p>可以看到，在数据列表界面中，我们提交的测试数据已经显示在列表中了，说明数据已经提交成功。</p>
<h3 id="显示表单"><a class="header-anchor" href="#显示表单">#</a> 显示表单</h3>
<p>最后，我们需要将表单显示在前台页面中，让访问者能够提交数据。</p>
<p>通常的做法是为每一个表单单独创建单页模板，用来显示表单提交界面。</p>
<p>进入 显示管理 -&gt; 模板管理 菜单，进入模板管理界面，在最下方点击 新增单页模板 按钮，进入单页模板新增界面：</p>
<p><img src="/assets/img/plugin/form/06.png" alt="6"></p>
<p>我们为单页模板设置模板名称及生成文件名，并添加如下代码：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>联系我们<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>form</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>联系我们<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>form</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>其中 <code>&lt;stl:form&gt;</code> 标签用于显示表单提交界面，<code>name</code> 属性指定表单名称，<code>type</code> 属性指定表单提交样式。</p>
<p>保存模板后，访问单页模板页面，如：<code>/form/contact-us.html</code>，我们将看到页面中显示联系我们表单了。</p>
</template>