<template><h1 id="目录结构"><a class="header-anchor" href="#目录结构">#</a> 目录结构</h1>
<h3 id="系统目录结构"><a class="header-anchor" href="#系统目录结构">#</a> 系统目录结构</h3>
<p>站群系统遵循 “约定优于配置” 的原则，系统安装后的目录结构如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>.
├── logs (运行日志目录)
├── assets (后台资源文件目录)
├── wwwroot (网站对外访问目录)
│   ├── SiteFiles (站群公用文件)
│   │   ├── Administrators (管理员文件夹)
│   │   ├── Users (用户文件夹)
│   │   ├── SiteTemplates (站点模板)
│   │   ├── TemporaryFiles (临时文件)
│   │   └── database.sqlite (本地数据库，可选)
│   │ 
│   ├── ** (子站点文件夹)
│   └── index.html (默认页)
│ 
├── `appsettings.json` (.NET Core APP 配置文件)
├── `xycms.exe` (XYCMS 主程序)
├── `xycms.json` (XYCMS 配置文件)
└── `web.config` (非IIS部署可以删除)

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ul>
<li><code>logs</code>: 运行日志目录，系统运行日志，可以通过appsettings.json进行配置。</li>
<li><code>assets</code>: 后台运行需要的资源文件，如css、js等，其中包含menus文件夹，用于存储后台权限与菜单配置。</li>
<li><code>wwwroot</code>: 静态资源目录，如果存在主站将作为主站的文件夹，所有位于此文件夹内的文件均可被公开访问。</li>
<li><code>wwwroot/SiteFiles</code>: 用于存放站群公用文件，如管理员头像、站点模板文件等。</li>
<li><code>wwwroot/**</code>: 其中**代表特定的文件夹，如果在 XYCMS 中创建站点（非主站），系统将存放站点文件于指定的文件夹中。</li>
<li><code>wwwroot/index.html</code>: 系统默认使用 index.html 文件作为默认页面。</li>
<li><code>*.dll</code>: .NET Core类库。</li>
<li><code>appsettings.json</code>: .NET Core APP 配置文件。</li>
<li><code>xycms.exe</code>: XYCMS 主程序，运行此文件即可启动 XYCMS 系统。</li>
<li><code>xycms.json</code>: XYCMS 配置文件，用于存放数据库连接字符串、缓存连接字符串等关键信息。</li>
<li><code>web.config</code>: Windows操作系统下IIS部署使用，非IIS部署可以删除。</li>
</ul>
<h3 id="站点目录结构"><a class="header-anchor" href="#站点目录结构">#</a> 站点目录结构</h3>
<p>XYCMS 是一个站群 CMS 系统，能够创建任意数量的站点，每个站点在系统根目录的 wwwroot 文件夹中均有一个对应的目录结构：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>.
└── siteDir (站点目录)
    ├── Template (站点模板)
    │   └── Content (站点内容模板)
    │ 
    ├── T_系统首页模板.html (站点首页模板)
    └── index.html (站点首页)

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul>
<li><code>siteDir</code>: 站点目录，由系统在新增站点时创建，如果站点为主站，站点目录为 wwwroot，否则站点目录为 wwwroot 目录的下级文件夹。</li>
<li><code>Template</code>: 用于存放除首页模板之外的其他模板。</li>
<li><code>Template/Content</code>: 用于存放站点内容模板。</li>
<li><code>T_系统首页模板.html</code>: 站点首页模板，系统将通过站点首页模板生成 index.html 文件。</li>
<li><code>index.html</code>: 站点首页文件。</li>
</ul>
</template>