<template><h1 id="老版本升级"><a class="header-anchor" href="#老版本升级">#</a> 老版本升级</h1>
<p>可以通过 XYCMS CLI 命令行将老版本系统升级至最新版本。</p>
<p>升级命令当前支持的版本包括：</p>
<ul>
<li><code>XYCMS 3.6</code> 版本（3.6、3.6.1、3.6.2、3.6.3、3.6.4）升级至最新版本</li>
<li><code>XYCMS 4.0</code> 版本升级至最新版本</li>
<li><code>XYCMS 4.1</code> 版本升级至最新版本</li>
<li><code>XYCMS 5.0</code> 版本升级至最新版本</li>
<li><code>XYCMS 6.x</code> 版本升级至最新版本</li>
</ul>
<p>所有版本的升级方式基本一致，下面我们以XYCMS 6.15 版本为例说明升级命令的使用方式。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>XYCMS 7.0 及之后的版本升级请参考：升级 XYCMS。</p>
</div>
<h3 id="第一步-下载-xycms-最新版本"><a class="header-anchor" href="#第一步-下载-xycms-最新版本">#</a> 第一步：下载 XYCMS 最新版本</h3>
<p><img src="/assets/img/cli/advanced/01.png" alt="01"></p>
<h3 id="第二步-运行数据库备份命令"><a class="header-anchor" href="#第二步-运行数据库备份命令">#</a> 第二步：运行数据库备份命令</h3>
<p><img src="/assets/img/cli/advanced/02.png" alt="02"></p>
<p>打开Web.config，可以看到当前系统使用的数据库信息：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">&lt;</span>add <span class="token assign-left variable">key</span><span class="token operator">=</span><span class="token string">"DatabaseType"</span> <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token string">"SqlServer"</span> /<span class="token operator">></span>
<span class="token operator">&lt;</span>add <span class="token assign-left variable">key</span><span class="token operator">=</span><span class="token string">"ConnectionString"</span> <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token string">"Server=(local);Uid=sa;Pwd=123456;Database=cms6;"</span> /<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>在命令行中进入新版本文件夹，运行数据备份命令，将老版本数据库信息作为参数输入，将老版本数据库数据备份至backup文件夹：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>xycms data backup -d backup -t SqlServer -c <span class="token string">"Server=(local);Uid=sa;Pwd=123456;Database=cms6;"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>其中 <code>-d</code> 用于指定数据库备份到的文件夹名称，<code>-t</code> 用于指定需要备份的数据库类型，<code>-c</code> 用于指定需要备份的数据库链接字符串。</p>
<h3 id="第三步-运行系统升级命令"><a class="header-anchor" href="#第三步-运行系统升级命令">#</a> 第三步：运行系统升级命令</h3>
<p>接下来我们需要使用系统升级命令 <code>xycms data update</code> 将老版本数据结构以及数据转换为新版本的数据结构及数据。</p>
<p>升级命令将把备份文件中存储的数据结构改为最新版本的数据结构，升级完成后将生成新的文件夹 <strong>update</strong>，用于恢复命令使用。</p>
<p>将命令行切换到系统根目录，运行升级命令并指定backup文件夹：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>xycms data update -d backup
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>注意，系统升级命令仅实现将备份数据文件转换为新的数据文件，命令不会对数据库进行操作。</p>
<p>系统升级命令执行完毕后，系统根目录将出现一个名为update的文件夹，此文件夹中存储了升级之后的数据文件。</p>
<h3 id="第四步-恢复数据"><a class="header-anchor" href="#第四步-恢复数据">#</a> 第四步：恢复数据</h3>
<p>通过备份以及升级命令，我们已将新版本系统所需要的数据准备好了，接下来我们需要为新版本准备运行环境。</p>
<p>我们进入新版本文件夹，找到 <code>xycms.json</code> 文件，将数据库信息存放进去：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"Database"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"Type"</span><span class="token operator">:</span> <span class="token string">"SqlServer"</span><span class="token punctuation">,</span>
    <span class="token property">"ConnectionString"</span><span class="token operator">:</span> <span class="token string">"Server=(local);Uid=sa;Pwd=123456;Database=cms6;"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>我们需要使用数据库恢复命令 <code>xycms data restore</code> 将老版本的数据恢复至新版本中。</p>
<p>将命令行切换到新版本系统的根目录，运行恢复命令（注意，恢复命令需要指定-d 参数，从 update 文件夹中恢复）：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>xycms data restore -d update
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>可以看到命令将逐个核对数据并将数据插入至新版本数据库中。</p>
<p>命令完成后，便可以打开浏览器访问新系统后台了，老版本的数据已经转移到了新版本。</p>
<p>最后，将老版本系统文件夹中的站点文件复制到新版本系统文件夹中，切换域名，完成版本升级。</p>
</template>