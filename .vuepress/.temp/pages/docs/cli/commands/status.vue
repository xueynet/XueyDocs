<template><h1 id="status-查看当前状态命令"><a class="header-anchor" href="#status-查看当前状态命令">#</a> status 查看当前状态命令</h1>
<p>查看当前版本命令，用于查看 SiteServer CLI/XYCMS 版本以及数据库信息。</p>
<h3 id="用法"><a class="header-anchor" href="#用法">#</a> 用法</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>xycms status
    -h, --help
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="选项"><a class="header-anchor" href="#选项">#</a> 选项</h3>
<table>
<thead>
<tr>
<th style="text-align:left">选项</th>
<th style="text-align:left">简写</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">--help</td>
<td style="text-align:left">-h</td>
<td style="text-align:left">命令说明</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>如果当前目录为 XYCMS 根目录或者命令使用 <strong>--config-file</strong> 指定配置文件 Web.config，版本命令除显示 SiteServer CLI 版本信息，还将显示对应的 XYCMS 系统版本以及数据库连接字符串信息。</p>
</div>
<h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<h4 id="基本使用"><a class="header-anchor" href="#基本使用">#</a> 基本使用</h4>
<p>在非 XYCMS 系统根目录运行版本命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>PS C:<span class="token punctuation">\</span>Windows<span class="token punctuation">\</span>system3<span class="token operator"><span class="token file-descriptor important">2</span>></span> xycms version
欢迎使用 SiteServer Cli 命令行工具

SiteServer CLI 版本号: <span class="token number">6.9</span>.0
当前文件夹: C:<span class="token punctuation">\</span>Windows<span class="token punctuation">\</span>system32
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>在XYCMS 系统根目录运行版本命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>PS C:<span class="token punctuation">\</span>Windows<span class="token punctuation">\</span>system3<span class="token operator"><span class="token file-descriptor important">2</span>></span> <span class="token builtin class-name">cd</span> C:<span class="token punctuation">\</span>github<span class="token punctuation">\</span>cms<span class="token punctuation">\</span>cms-staging<span class="token punctuation">\</span>SiteServer.Web
PS C:<span class="token punctuation">\</span>github<span class="token punctuation">\</span>cms<span class="token punctuation">\</span>cms-staging<span class="token punctuation">\</span>SiteServer.Web<span class="token operator">></span> xycms version
欢迎使用 SiteServer Cli 命令行工具

SiteServer CLI 版本号: <span class="token number">6.9</span>.0
当前文件夹: C:<span class="token punctuation">\</span>github<span class="token punctuation">\</span>cms<span class="token punctuation">\</span>cms-staging<span class="token punctuation">\</span>SiteServer.Web

SitServer CMS Version: <span class="token number">6.9</span>.3-beta
数据库类型: SqlServer
连接字符串: <span class="token assign-left variable">Server</span><span class="token operator">=</span><span class="token punctuation">(</span>local<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token assign-left variable">Uid</span><span class="token operator">=</span>sa<span class="token punctuation">;</span><span class="token assign-left variable">Pwd</span><span class="token operator">=</span><span class="token number">123456</span><span class="token punctuation">;</span><span class="token assign-left variable">Database</span><span class="token operator">=</span>cms<span class="token punctuation">;</span>
连接字符串（加密）: 5TRGlFvX5U5gzX2Vi0sYmORh9DMNnA1MnHncFj259dJRN9l1tqf6dM30add0Zpd88Ni7bmNUsJ3G93HSJxIFoXqj0slash0Q0equals00equals00secret0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>可以通过版本命令同时显示非加密数据库连接字符串以及加密数据库连接字符串。</p>
</div>
</template>