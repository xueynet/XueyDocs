<template><h1 id="加密解密数据库连接字符串"><a class="header-anchor" href="#加密解密数据库连接字符串">#</a> 加密解密数据库连接字符串</h1>
<p>可以通过显示版本命令 <code>xycms version</code> 同时显示非加密数据库连接字符串以及加密数据库连接字符串。</p>
<p>在XYCMS 系统根目录运行版本命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>PS C:<span class="token punctuation">\</span>Windows<span class="token punctuation">\</span>system3<span class="token operator"><span class="token file-descriptor important">2</span>></span> <span class="token builtin class-name">cd</span> C:<span class="token punctuation">\</span>github<span class="token punctuation">\</span>cms<span class="token punctuation">\</span>cms-staging<span class="token punctuation">\</span>SiteServer.Web
PS C:<span class="token punctuation">\</span>github<span class="token punctuation">\</span>cms<span class="token punctuation">\</span>cms-staging<span class="token punctuation">\</span>SiteServer.Web<span class="token operator">></span> xycms version
欢迎使用 SiteServer Cli 命令行工具

SiteServer CLI 版本号: <span class="token number">6.9</span>.0
当前文件夹: C:<span class="token punctuation">\</span>github<span class="token punctuation">\</span>cms<span class="token punctuation">\</span>cms-staging<span class="token punctuation">\</span>SiteServer.Web

SitServer CMS Version: <span class="token number">6.9</span>.3-beta
数据库类型: SqlServer
连接字符串: <span class="token assign-left variable">Server</span><span class="token operator">=</span><span class="token punctuation">(</span>local<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token assign-left variable">Uid</span><span class="token operator">=</span>sa<span class="token punctuation">;</span><span class="token assign-left variable">Pwd</span><span class="token operator">=</span><span class="token number">123456</span><span class="token punctuation">;</span><span class="token assign-left variable">Database</span><span class="token operator">=</span>cms<span class="token punctuation">;</span>
连接字符串（加密）: 5TRGlFvX5U5gzX2Vi0sYmORh9DMNnA1MnHncFj259dJRN9l1tqf6dM30add0Zpd88Ni7bmNUsJ3G93HSJxIFoXqj0slash0Q0equals00equals00secret0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>如果Web.config中数据库连接字符串是加密的，可以通过此命令找回数据库连接字符串；如果Web.config中数据库连接字符串是非加密的，可以通过此命令获取加密连接字符串并设置到Web.config中。</p>
</template>