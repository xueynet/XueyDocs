<template><h1 id="介绍"><a class="header-anchor" href="#介绍">#</a> 介绍</h1>
<p>XYCMS 命令行工具（XYCMS CLI）是系统根目录下的一个可执行文件（Windows 系统下为 <code>xycms.exe</code>，Linux 及 MacOs 下为 <code>xycms</code>），通过命令行执行。</p>
<p>要使用命令行工具，请打开命令窗口或 bash shell，然后运行 xycms，后面跟着命令和适当的选项，如 xycms status（查看命令行状态）:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>xycms status
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>运行状态命令后，命令终端将显示命令行的版本，xycms 执行文件所在位置以及当前文件夹信息：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Cli version: <span class="token number">7.0</span>.0
Cli location: D:<span class="token punctuation">\</span>xycms<span class="token punctuation">\</span>XYCMS.Cli.dll
Work location: D:<span class="token punctuation">\</span>xycms
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>XYCMS 命令行能够执行很多功能，如一键备份、一键还原、老版本升级、定时运行以及切换系统至不同类型的数据库等。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>此文档反映了 XYCMS CLI 命令行的最新版本。</p>
</div>
<h3 id="命令列表"><a class="header-anchor" href="#命令列表">#</a> 命令列表</h3>
<table>
<thead>
<tr>
<th style="text-align:left">命令</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">data backup</td>
<td style="text-align:left">数据库备份命令，用于备份数据库结构以及数据至指定文件夹中</td>
</tr>
<tr>
<td style="text-align:left">data restore</td>
<td style="text-align:left">数据库恢复命令，用于从备份文件中恢复数据结构及数据至指定数据库</td>
</tr>
<tr>
<td style="text-align:left">data sync</td>
<td style="text-align:left">数据库同步命令，用于将备份数据同步至指定数据库</td>
</tr>
<tr>
<td style="text-align:left">data update</td>
<td style="text-align:left">数据库升级命令，用于将备份的数据库更新至适合 XYCMS 最新版本使用的数据结构</td>
</tr>
<tr>
<td style="text-align:left">install download</td>
<td style="text-align:left">系统安装包下载命令，下载 XYCMS 系统最新版本至文件夹中</td>
</tr>
<tr>
<td style="text-align:left">install xycms</td>
<td style="text-align:left">系统安装命令，用于安装 XYCMS 系统至指定数据库</td>
</tr>
<tr>
<td style="text-align:left">login</td>
<td style="text-align:left">登录命令，XYCMS 官网用户登录</td>
</tr>
<tr>
<td style="text-align:left">logout</td>
<td style="text-align:left">退出登录命令，XYCMS 官网用户退出登录</td>
</tr>
<tr>
<td style="text-align:left">plugin new</td>
<td style="text-align:left">插件创建命令，此命令将根据指定参数生成插件配置文件</td>
</tr>
<tr>
<td style="text-align:left">plugin package</td>
<td style="text-align:left">插件打包命令，将插件打包为 zip 压缩包</td>
</tr>
<tr>
<td style="text-align:left">plugin publish</td>
<td style="text-align:left">插件发布命令，发布插件至 XYCMS 官方插件库</td>
</tr>
<tr>
<td style="text-align:left">plugin search</td>
<td style="text-align:left">插件搜索命令，根据关键词搜索 XYCMS 官方插件</td>
</tr>
<tr>
<td style="text-align:left">plugin show</td>
<td style="text-align:left">插件展示命令，查询指定插件的详细信息</td>
</tr>
<tr>
<td style="text-align:left">plugin unpublish</td>
<td style="text-align:left">插件下架命令，从 XYCMS 官方插件库下架插件</td>
</tr>
<tr>
<td style="text-align:left">register</td>
<td style="text-align:left">注册命令，XYCMS 官网用户注册</td>
</tr>
<tr>
<td style="text-align:left">run</td>
<td style="text-align:left">系统运行命令，直接运行当前目录的 XYCMS 系统</td>
</tr>
<tr>
<td style="text-align:left">status</td>
<td style="text-align:left">查看当前状态命令，查看命令行状态及当前文件夹</td>
</tr>
<tr>
<td style="text-align:left">update</td>
<td style="text-align:left">系统升级命令，用于升级 XYCMS 系统至最新版本</td>
</tr>
</tbody>
</table>
<h3 id="命令参数"><a class="header-anchor" href="#命令参数">#</a> 命令参数</h3>
<p>可以在命令中带参数 <code>--help</code> 或者 <code>-h</code> 以显示此命令的使用说明，如 <code>xycms register -h</code>，使用<code>xycms -h</code>能够获取所有命令的使用说明。</p>
<p>命令通常还包括其他参数，请参考命令详细说明。</p>
</template>