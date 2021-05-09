<template><h1 id="stl-user-显示用户信息"><a class="header-anchor" href="#stl-user-显示用户信息">#</a> <a href="stl:user">stl:user</a> 显示用户信息</h1>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>user</span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>用户属性名称<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>user</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="说明"><a class="header-anchor" href="#说明">#</a> 说明</h3>
<p>通过 <code>stl:user</code> 标签在模板中显示用户信息。</p>
<p><code>&lt;stl:user&gt;</code> 标签可以使用简写 <code>{user.}</code>。</p>
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
<td style="text-align:left">用户属性名称</td>
</tr>
</tbody>
</table>
<p><strong>type - 用户属性名称</strong></p>
<p>用户属性名称，可以使用以下值：</p>
<ul>
<li>&quot;id&quot; 用户Id</li>
<li>&quot;userName&quot; 用户账号</li>
<li>&quot;createdDate&quot; 用户注册时间</li>
<li>&quot;lastActivityDate&quot; 用户最后活跃时间</li>
<li>&quot;countOfLogin&quot; 用户登录次数</li>
<li>&quot;displayName&quot; 用户显示名称</li>
<li>&quot;email&quot; 用户邮箱</li>
<li>&quot;mobile&quot; 用户手机号码</li>
<li>&quot;avatarUrl&quot; 用户头像</li>
<li>&quot;自定义&quot; 获取自定义的用户字段值</li>
</ul>
</template>