<template><h1 id="拆分内容表"><a class="header-anchor" href="#拆分内容表">#</a> 拆分内容表</h1>
<p>我们推荐为每一个站点设置单独的内容表，这样做能够使每一张内容表的数据不至于太大，影响系统性能。</p>
<p>由于各种原因，可能系统内所有站点的内容表是同一个内容表，表的数据量已经达到影响系统性能的程度，这时我们应该考虑使用 SiteServer CLI 命令行拆分内容表，使每一个站点拥有独立的内容表。</p>
<h3 id="第一步-运行数据库备份命令"><a class="header-anchor" href="#第一步-运行数据库备份命令">#</a> 第一步：运行数据库备份命令</h3>
<p>首先使用数据库备份命令 <code>xycms backup</code> 将系统数据库备份至文件夹中。</p>
<p>将命令行切换到 XYCMS 所在文件夹，运行备份命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>xycms backup -d backup
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="第二步-运行系统升级命令"><a class="header-anchor" href="#第二步-运行系统升级命令">#</a> 第二步：运行系统升级命令</h3>
<p>然后我们需要使用系统升级命令 <code>xycms update</code> 并指定 <code>--content-split</code> 拆分内容表参数：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>xycms update -d backup --content-split
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="第三步-创建新数据库"><a class="header-anchor" href="#第三步-创建新数据库">#</a> 第三步：创建新数据库</h3>
<p>接下来，我们创建一个空的数据库（新数据库类型可以与之前的数据库类型不一致），在此，我们新建了一个名为<code>cms_new</code>的数据库。</p>
<p>修改Web.config文件，将数据库信息存放进去：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;add key=&quot;DatabaseType&quot; value=&quot;SqlServer&quot; /&gt;
&lt;add key=&quot;ConnectionString&quot; value=&quot;Server=(local);Uid=sa;Pwd=123456;Database=cms_new;&quot; /&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="第四步-恢复数据"><a class="header-anchor" href="#第四步-恢复数据">#</a> 第四步：恢复数据</h3>
<p>我们需要使用数据库恢复命令 <code>xycms resore</code> 将已拆分内容表的数据恢复至新数据库中。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>xycms restore -d update
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>至此，数据库拆分内容表工作完成，可以将老的数据库备份后删除。</p>
</template>