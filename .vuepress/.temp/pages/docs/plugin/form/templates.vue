<template><h1 id="自定义表单模板"><a class="header-anchor" href="#自定义表单模板">#</a> 自定义表单模板</h1>
<p>表单插件自带两个表单模板：用于表单提交的 <code>submit1</code> 模板，以及用于显示表单数据列表的 <code>list1</code> 模板。</p>
<p>表单模板作为文件夹存储在表单插件中，可以进入 XYCMS 系统根目录下的 <code>plugins\xycms.form\wwwroot\assets\form\templates</code> 目录，可以看到 <code>submit1</code> 以及 <code>list1</code> 两个子目录。</p>
<p>通常不建议编辑默认模板，因为插件升级的时候会覆盖默认模板，使编辑后的模板失效。</p>
<h3 id="创建自定义模板"><a class="header-anchor" href="#创建自定义模板">#</a> 创建自定义模板</h3>
<p>在 XYCMS 管理界面中打开 表单 -&gt; 表单模板 -&gt; 表单提交模板，点击默认模板submit1的代码编辑：</p>
<p><img src="/assets/img/plugin/form/10.png" alt="10"></p>
<p>编辑完成后点击保存，系统将弹出克隆模板窗口：</p>
<p><img src="/assets/img/plugin/form/11.png" alt="11"></p>
<p>输入模板文件夹名称，点击确定保存模板，系统将在插件模板目录下创建自定义模板文件夹。</p>
<p>对自定义模板的编辑操作将不会再次出现克隆模板窗口，可以随意进行更改。</p>
<h3 id="使用自定义模板"><a class="header-anchor" href="#使用自定义模板">#</a> 使用自定义模板</h3>
<p>自定义模板完成后，可以通过预览功能查看自定义模板的显示样式，确定无误后，需要通过标签将自定义模板表单显示到前台页面中。</p>
<p>插件使用 <code>&lt;stl:form name=&quot;表单名称&quot; type=&quot;模板文件夹&quot;&gt;&lt;/stl:form&gt;</code> 标签显示表单提交或者列表界面，其中 <code>name</code> 代表表单名称，<code>type</code> 即自定义模板的文件夹名称。</p>
<p>示例：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>form</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>联系我们<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>编辑好模板后，重新生成页面，就可以在前台页面中看到效果了。</p>
</template>