# 自定义 STL 标签

STL 标签是 XYCMS 模板解析并生成静态页面的核心，通过添加自定义 STL 标签，我们将可以实现自己的专属标签，方便模板调用。

我们以 XYCMS 二维码显示插件 (opens new window)作为示例来说明如何实现自定义标签。

二维码插件使用 stl:qrCode 标签生成二维码，可以设置url 属性指定二维码地址，size 属性指定二维码图片尺寸，标签使用代码如下：

``` html
<stl:qrCode url="https://xycms.com" size="128"></stl:qrCode>
```

为了实现自定义 STL 标签，我们需要继承 IPluginParseAsync 接口并实现 ParseAsync 方法，此方法的返回值为字符串，此字符串即自定义标签解析后的值。

我们以 XYCMS 二维码显示插件 (opens new window)的 StlQRCode (opens new window)类作为示例说明如何自定义 STL 标签：

``` C#
using System.Threading.Tasks;
using XYCMS.Parse;
using XYCMS.Plugins;
using XYCMS.Repositories;
using XYCMS.Services;
using XYCMS.Utils;

namespace XYCMS.QRCode
{
    public class StlQRCode : IPluginParseAsync
    {
        private const string AttributeUrl = "url";
        private const string AttributeSize = "size";

        private readonly IPathManager _pathManager;
        private readonly ISiteRepository _siteRepository;

        public StlQRCode(IPathManager pathManager, ISiteRepository siteRepository)
        {
            _pathManager = pathManager;
            _siteRepository = siteRepository;
        }

        public string ElementName => "stl:qrcode";

        public async Task<string> ParseAsync(IParseStlContext context)
        {
            var url = string.Empty;
            var size = 0;

            foreach (var name in context.StlAttributes.AllKeys)
            {
                var value = context.StlAttributes[name];

                if (StringUtils.EqualsIgnoreCase(name, AttributeUrl))
                {
                    url = await context.ParseAsync(value);
                }
                else if (StringUtils.EqualsIgnoreCase(name, AttributeSize))
                {
                    size = TranslateUtils.ToInt(value);
                }
            }

            url = string.IsNullOrEmpty(url) ? "location.href" : $"'{url}'";

            var guid = StringUtils.Guid();
            var site = await _siteRepository.GetAsync(context.SiteId);
            var libUrl = _pathManager.GetApiHostUrl(site, "/assets/qrcode/qrcode.min.js");

            return size == 0
                ? $@"
<div class=""qrcode"" id=""{guid}""></div>
<script type=""text/javascript"" src=""{libUrl}""></script>
<script type=""text/javascript"">
new QRCode(document.getElementById('{guid}'), {url});
</script>
"
                : $@"
<div class=""qrcode"" id=""{guid}""></div>
<script type=""text/javascript"" src=""{libUrl}""></script>
<script type=""text/javascript"">
new QRCode(document.getElementById('{guid}'), {{
    text: {url},
	width: {size},
	height: {size}
}});
</script>
";
        }
    }
}
```

首先，我们在类的构造函数中注入了需要使用的接口，接下来我们通过实现 ElementName 属性定义了自定义 STL 标签的名称 stl:qrcode。

在 ParseAsync 方法中，我们通过方法传递的参数 IParseStlContext context 获取了标签所处环境的上下文，IParseStlContext 接口能够获得当前站点、栏目以及内容的信息，同时还能获取标签的属性、嵌套的内部标签等信息。

最后，我们组合各类信息，返回字符串，最终 stl:qrcode 标签解析的结果将是我们在此方法中返回的字符串值。
