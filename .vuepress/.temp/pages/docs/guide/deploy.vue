<template><h1 id="部署"><a class="header-anchor" href="#部署">#</a> 部署</h1>
<p>本机运行 XYCMS 系统可以通过双击 xycms.exe 可执行文件（Windows 系统）或者命令行运行 xycms 执行程序（Linux 系统 及 MacOS 系统），但是如果希望在正式环境部署 XYCMS 系统，则需要额外的托管和部署操作。</p>
<p>一般而言，向托管环境部署 XYCMS 系统需执行以下操作：</p>
<ul>
<li>发布到文件夹，将 XYCMS 系统部署到托管服务器上的文件夹。</li>
<li>设置反向代理，反向代理在收到请求时启动应用，并在应用发生故障或服务器重启后重新启动应用，同时将请求转发到应用。</li>
</ul>
<h3 id="发布到文件夹"><a class="header-anchor" href="#发布到文件夹">#</a> 发布到文件夹</h3>
<p>.NET Core 应用可以发布为“独立式部署”，也可以发布为“依赖框架的部署”，XYCMS 系统采用的是“依赖式部署”模式，运行 XYCMS 系统需要安装 .NET Core 框架，然后将 XYCMS 系统文件夹部署至托管服务器上的文件夹即可运行，支持多个站点部署。</p>
<p>有关详细信息，请参阅 在 Linux 中运行 XYCMS 以及 在 Windows 中运行 XYCMS。</p>
<h3 id="设置反向代理"><a class="header-anchor" href="#设置反向代理">#</a> 设置反向代理</h3>
<p>XYCMS 系统是一个控制台应用，在服务器启动时必须启动该应用，并且在安装插件、卸载插件或者出现故障后必须重新启动它。</p>
<p>反向代理服务器接收来自网络的 HTTP 请求，并将这些请求转发到 XYCMS。</p>
<p>XYCMS 直接与 Internet 通信，不使用反向代理服务器：</p>
<p><img src="/assets/img/guide/xycms-to-internet.png" alt="不使用反向代理"></p>
<p>XYCMS 通过反向代理服务器（如 IIS、Nginx 或 Apache）间接与 Internet 进行通信：</p>
<p><img src="/assets/img/guide/xycms-to-proxy-to-internet.png" alt="使用反向代理"></p>
<p>使用反向代理，还能获得以下优势：</p>
<ul>
<li>可以限制所承载的应用中的公开的公共外围应用。</li>
<li>提供额外的配置和防护层。</li>
<li>可以更好地与现有基础结构集成。</li>
<li>简化了负载均衡和安全通信 (HTTPS) 配置。 仅反向代理服务器需要 X.509 证书，并且该服务器可使用普通 HTTP 在内部网络上与应用服务器通信。</li>
</ul>
<p>::: notice
正式环境下部署 XYCMS 必须采用反向代理。
:::</p>
<p>用于 XYCMS 系统的最常见的反向代理是：</p>
<ul>
<li>Linux
<ul>
<li>Nginx</li>
<li>Apache</li>
</ul>
</li>
<li>Windows
<ul>
<li>IIS</li>
</ul>
</li>
</ul>
<h3 id="linux-nginx"><a class="header-anchor" href="#linux-nginx">#</a> Linux + Nginx</h3>
<p>本节知识：如何在 CentOS 上将 Nginx 设置为反向代理服务器，以将 HTTP 流量重定向到 XYCMS 系统。Ubuntu 以及其他版本的 Linux 操作系统的部署流程与本文类似。</p>
<h3 id="linux-apache"><a class="header-anchor" href="#linux-apache">#</a> Linux + Apache</h3>
<p>内容待完善</p>
<h3 id="windows-iis"><a class="header-anchor" href="#windows-iis">#</a> Windows + IIS</h3>
<p>内容待完善</p>
</template>