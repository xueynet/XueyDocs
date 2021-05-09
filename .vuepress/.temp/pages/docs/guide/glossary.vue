<template><h1 id="术语"><a class="header-anchor" href="#术语">#</a> 术语</h1>
<p>您可能会在文档中碰到一些陌生的概念，本节列出了文档中常见的术语，方便查阅、学习、开发之用</p>
<h3 id="站点-site"><a class="header-anchor" href="#站点-site">#</a> 站点（Site）</h3>
<p>站点，即网站，在 XYCMS 中，一个站点就是一个网站，其中包括首页、栏目、内容、模板、图片、CSS样式、JS脚本以及最终生成的静态页面等。</p>
<p>XYCMS 是一套站群管理系统，即多个站点可以在后台进行统一管理。统一管理并不是简单地把多个网站放在一个后台，而是需要将不同站点分设不同管理权限的管理员，每个站点既独立又统一。</p>
<p><img src="/assets/img/guide/site-structure.png" alt="alt 站点"></p>
<p>系统将为每个站点创建一个文件夹，用于存放站点文件，站点可以通过统一的域名对外提供访问，也可以为每个站点设置独立的访问域名。</p>
<h3 id="栏目-channel"><a class="header-anchor" href="#栏目-channel">#</a> 栏目（Channel）</h3>
<p>栏目也叫频道或者导航，XYCMS 通过栏目来组织与管理内容，在后台添加内容时候，必须将内容添加在某个具体的栏目下。通过栏目，系统能够将一个网站的内容进行分类管理以及管理员权限设置。</p>
<p>如果把一个网站比作一颗枝繁叶茂的大树的话，网站的栏目就是大树的枝干，网站的内容就是枝干上的树叶。可见，网站的栏目就是网站骨架，我们通常把整个网站的所有栏目称为“栏目架构”。如下图所示：</p>
<p><img src="/assets/img/guide/channel-structure.png" alt="alt 栏目"></p>
<p>网站栏目可以分成父栏目、子栏目，如果有需要的话，还可以一级一级的往下分，每个栏目都可以建自己的下级栏目。在 XYCMS 中，“首页”是最高级别的栏目，可以在“首页”栏目下面建立无限级数的栏目。</p>
<p><img src="/assets/img/guide/channel.jpg" alt="alt 首页栏目"></p>
<h3 id="内容-content"><a class="header-anchor" href="#内容-content">#</a> 内容（Content）</h3>
<p>内容是一切可结构化的数据，包括文章、新闻、商品、广告、招聘等等，在 XYCMS 均称之为内容。</p>
<p><img src="/assets/img/guide/content.jpg" alt="alt 内容"></p>
<p>XYCMS 的内容与显示分离，也就是说内容的管理与内容的展现样式相互独立、互不影响，增加及修改内容的时候不需要考虑样式，同样的，增加及修改模板的时候不需要考虑内容，所以，负责内容维护的只负责内容本身，负责样式维护的只负责样式本身。</p>
<h3 id="模板-template"><a class="header-anchor" href="#模板-template">#</a> 模板（Template）</h3>
<p>模板，就是负责把CMS后台管理的内容按一定的表现形式组织起来形成前台页面的一种技术。按一定的表现形式组织起来，这就是模板的内容，模板决定后台内容显示到前台页面后的效果。既然页面一般分成网站首页、栏目页、内容页以及单页，同理模板也就对应分别有首页模板、栏目模板、内容模板以及单页模板。</p>
<h5 id="模板的作用"><a class="header-anchor" href="#模板的作用">#</a> 模板的作用</h5>
<p>模板的作用主要有：</p>
<ul>
<li>决定前台页面显示哪些后台数据；</li>
<li>决定前台页面的风格、样式等表现形式；</li>
<li>多条内容采用相同的模板可以产生表现形式类似的多个静态页面，如果需要调整页面的表形形式，只需要统一调整模板即可。</li>
</ul>
<p>以内容模板为例，假设后台一个栏目下有两篇内容，如下图所示：</p>
<p><img src="/assets/img/guide/template-content.jpg" alt="alt 内容模板"></p>
<p>这两篇内容使用了一个相同的内容模板，最后产生的两个前台页面分别如下两图：</p>
<p><img src="/assets/img/guide/template-page1.jpg" alt="alt 内容模板"></p>
<p><img src="/assets/img/guide/template-page2.jpg" alt="alt 内容模板"></p>
<p>以上两个前台内容页面，除了文章的标题和文章内容不同之外，其他信息都是一样的。这就是模板的作用，把后台的内容以一定的表现形式组织起来从而形成前台页面。</p>
<h5 id="嵌套好的模板"><a class="header-anchor" href="#嵌套好的模板">#</a> 嵌套好的模板</h5>
<p>嵌套好的模板和静态页面（Html)并无差别，就是在Html中夹杂着STL标签语言。如下图所示：</p>
<p><img src="/assets/img/guide/template-editor.jpg" alt="alt 内容模板"></p>
<h3 id="stl-语言"><a class="header-anchor" href="#stl-语言">#</a> STL 语言</h3>
<p>STL 语言全称为 XYCMS 模版标签语言（Site Template Language），XYCMS 解析引擎将负责把 STL 语言对应的标记转换为 HTML 标签。</p>
<p>STL 语言能够在不需要程序开发人员的前提下，灵活调取 XYCMS 后台管理的各种数据，并解析成HTML，最终生成对应的静态页面文件。</p>
<p>STL 语言是 XYCMS 系统的专用语言，和 HTML 语言一样，STL 语言也是一种标准通用标记语言（SGML），采用与HTML 语言一致的语法和规则。</p>
<p>STL 模版语言并不复杂，但功能强大，其主要特点如下：</p>
<ul>
<li>简易： STL 语言版本升级采用超集方式，从而更加灵活方便。</li>
<li>可扩展： STL 语言的广泛应用带来了加强功能，增加标识符等要求，STL 语言采取子类元素的方式，为系统扩展带来保证。</li>
<li>易学： 和 HTML 语言规则保持一致确保了STL 语言易于学习，便于使用。</li>
</ul>
<h3 id="页面-page"><a class="header-anchor" href="#页面-page">#</a> 页面（Page）</h3>
<p>页面又叫静态页面，是 XYCMS 系统通过模板生成并提供给用户访问的网页。页面一般分成网站首页、栏目页、内容页以及功能页（功能页也叫单页，如搜索、登录、问卷调查、表单提交等都属于功能页）。</p>
<h5 id="首页"><a class="header-anchor" href="#首页">#</a> 首页</h5>
<p>首页，就是我们打开一个网站的时候，看到的第一个页面（有些网站会有一个过渡页，展示完之后才会进入首页）。下图展示的是一个典型的网站首页：</p>
<p><img src="/assets/img/guide/page-index.png" alt="alt 首页"></p>
<h5 id="栏目页"><a class="header-anchor" href="#栏目页">#</a> 栏目页</h5>
<p>当点击某个具体的栏目，进入的就是栏目页。下图所示的就是一个典型的新闻栏目列表页：</p>
<p><img src="/assets/img/guide/page-channel.png" alt="alt 栏目页"></p>
<h5 id="内容页"><a class="header-anchor" href="#内容页">#</a> 内容页</h5>
<p>当点击某个具体的内容，进入的就是内容页。下图所示的就是一个典型的新闻内容页：</p>
<p><img src="/assets/img/guide/page-content.png" alt="alt 栏目页"></p>
<h5 id="单页-功能页"><a class="header-anchor" href="#单页-功能页">#</a> 单页（功能页）</h5>
<p>除了首页、栏目页、内容页之外，XYCMS 中还有一个特殊的页面概念，叫“单页”，这种页面通常是为了实现某一个具体的功能，比如搜索、问卷调查、表单提交、用户登录和注册等，所以又称之为功能页。这些页面和任何一个具体栏目都没有关系。下图展示的一个用户注册页面就是一个典型的单页（或功能页）：</p>
<p><img src="/assets/img/guide/page-register.png" alt="alt 栏目页"></p>
<h3 id="插件-plugin"><a class="header-anchor" href="#插件-plugin">#</a> 插件（Plugin）</h3>
<p>XYCMS 插件是扩展 XYCMS 产品核心功能的代码包，XYCMS 插件由.NET代码和其他文件(如图片、CSS和JavaScript等)组成。 通过制作你自己的插件，你可以扩展 XYCMS，在 XYCMS 已经提供的功能基础上构建额外的功能。</p>
<p>XYCMS 并非仅仅是一个简单的网站管理平台，同时也是一个功能极其强大并且有着无限扩展能力的 CMS 内容管理平台。XYCMS 的无限扩展能力正是通过插件机制来实现的。借助于 XYCMS 的模板和插件机制，你几乎可以把 XYCMS 配置成任何类型的站点。</p>
<p>因为插件的所有的功能都是通过灵活的模块和自定义配置开发出来的，可以说，通过插件你可以实现任何你希望在站点中实现的功能，插件的唯一限制就是你的想象力，插件的可能性是无限的！</p>
<p>例如，你可以编写一个插件来控制对应栏目的内容模型，采用自定义的字段提交并显示内容文章；或者，你可以编写一个插件，创建一个带有短信通知、支持第三方支付的全功能票务系统。</p>
</template>