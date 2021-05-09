<template><h1 id="安装与设置"><a class="header-anchor" href="#安装与设置">#</a> 安装与设置</h1>
<p>XYCMS 命令行包含在 XYCMS 系统中，随 XYCMS 系统一同发布，下载 XYCMS 系统并解压后，将在根目录找到可执行文件 <code>xycms</code>，Windows 系统下为 <code>xycms.exe</code>，Linux 及 MacOs 下为 <code>xycms</code>。</p>
<h3 id="_1、获取-xycms-命令行"><a class="header-anchor" href="#_1、获取-xycms-命令行">#</a> 1、获取 XYCMS 命令行</h3>
<p>进入 XYCMS 官网，下载最新版本的 XYCMS 系统，下载后解压将在目录下找到文件名为 xycms 的可执行文件，这个文件即为 XYCMS Cli 命令行。</p>
<h3 id="_2、运行-xycms-cli-命令行"><a class="header-anchor" href="#_2、运行-xycms-cli-命令行">#</a> 2、运行 XYCMS Cli 命令行</h3>
<p>XYCMS Cli 命令行需要通过命令行执行，可以使用cmd命令、Windows PowerShell或者bash shell等命令行工具，下面介绍如何通过cmd运行命令行。</p>
<p>下面以 Windows 操作系统为例，介绍如何运行 XYCMS Cli 命令行。</p>
<p>在Windows中打开运行弹出框输入cmd命令：</p>
<p><img src="/assets/img/cli/introduction/01.png" alt="01"></p>
<p>或者通过开始菜单找到cmd.exe：</p>
<p><img src="/assets/img/cli/introduction/02.png" alt="02"></p>
<p>进入命令行界面后进入 XYCMS 系统所在的文件夹，然后输入 <code>xycms status</code> 命令，界面将显示版本信息：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>E:<span class="token punctuation">\</span>xycms<span class="token operator">></span> xycms status
Cli version: <span class="token number">7.0</span>.0
Cli location: E:<span class="token punctuation">\</span>xycms<span class="token punctuation">\</span>XYCMS.Cli.dll
Work location: E:<span class="token punctuation">\</span>xycms
Database type: SQLite
Database connection string: Data <span class="token assign-left variable">Source</span><span class="token operator">=</span>E:<span class="token punctuation">\</span>xycms<span class="token punctuation">\</span>database.sqlite<span class="token punctuation">;</span><span class="token assign-left variable">Version</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
PluginId: xycms.advertisement, Version: <span class="token number">1.0</span>.1
PluginId: xycms.block, Version: <span class="token number">1.0</span>.0
PluginId: xycms.database, Version: <span class="token number">1.0</span>.0
PluginId: xycms.document, Version: <span class="token number">1.0</span>.0
PluginId: xycms.form, Version: <span class="token number">1.0</span>.0
PluginId: xycms.gather, Version: <span class="token number">1.0</span>.0
PluginId: xycms.gov_public, Version: <span class="token number">1.0</span>.0
PluginId: xycms.hits, Version: <span class="token number">1.0</span>.4
PluginId: xycms.photos, Version: <span class="token number">1.0</span>.0
PluginId: xycms.restriction, Version: <span class="token number">1.0</span>.0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>现在你可以开始通过 XYCMS Cli 命令行实现备份、恢复、升级等功能了。</p>
<h3 id="_3、设置环境变量"><a class="header-anchor" href="#_3、设置环境变量">#</a> 3、设置环境变量</h3>
<p>如果希望在任何文件夹中运行 XYCMS Cli 命令行，可以通过设置环境变量来实现，这也是我们推荐的用法，能够随时运行 XYCMS 命令。</p>
<p>下面以 Windows 操作系统为例，介绍如何设置环境变量。</p>
<p>首先右键我的电脑，在弹出菜单中选择属性，弹出系统界面，在系统界面中点击高级系统设置，弹出高级选项卡：</p>
<p><img src="/assets/img/cli/introduction/04.png" alt="04"></p>
<p>点击环境变量按钮，在弹出的对话框中编辑Path变量，添加 xycms.exe 文件所在的文件夹地址：</p>
<p><img src="/assets/img/cli/introduction/05.png" alt="05"></p>
<p>点击确定后重新打开命令行界面便能够在任意文件夹运行 xycms 命令了。</p>
</template>