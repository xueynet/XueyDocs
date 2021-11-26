# URL 对外服务

插件最终需要以 URL 路径的形式对外提供服务，可以是简单的静态地址、Razor风格的cshtml文件以及RESTful 风格的Controller地址，根据实际需要可以灵活选择。

我们以 XYCMS 分享插件 (opens new window)为例说明如何配置及使用URL 对外服务，下载分享插件源码并使用 Visual Studio 打开项目，我们会发现如下结构：

![2](/assets/img/plugin/demo/urlServices-01.png)

红框1 区域在项目根目录的 wwwroot 文件夹下，通常为 .css、.js、.png 或者 .html 等静态资源文件，对外提供静态资源访问，资源文件的最终访问路径与文件在 wwwroot 文件夹下的结构一致，例如项目中 index.js 文件的访问地址为 /assets/share/index.js。

红框2 区域在项目根目录的 Pages 文件夹下，用于支持 ASP.NET Core 中的 Razor Pages 功能，后缀通常为 .cshtml。关于 Razor Pages 的更多信息可以参考 教程：在 ASP.NET Core 中开始使用 Razor Pages (opens new window)。

红框3 区域在项目根目录的 Controllers 文件夹下，用于支持 ASP.NET Core 中的 Web API 功能。关于 Web API 的更多信息可以参考 使用 ASP.NET Core 创建 Web API (opens new window)。

## 静态资源访问

XYCMS 分享插件 (opens new window)通过 <stl:share> 实现前台页面分享功能，最终在前台页面生成如下所示的小图标，点击图标将实现分享：

![2](/assets/img/plugin/demo/urlServices-02.png)

由于前台页面需要展示图标并通过js实现分享功能，我们需要暴露静态资源文件并提供给外部访问，所以我们将资源文件统一放置到 /wwwroot/assets/share 文件夹下。

最终插件资源文件的访问地址将以 /assets/share/ 为URL地址前缀。之所以以此路径为前缀是为了避免与网站或其他插件的资源文件地址冲突，实际上，我们可以将静态资源文件放置在 wwwroot 文件夹下的任意路径之下。

## Razor Pages 页面

XYCMS 插件的 Razor Pages 页面开发与 ASP.NET Core 中的 Razor Pages 页面开发并无区别，XYCMS 系统启动时将自动启用各个插件的 Razor Pages 页面支持。

关于 Razor Pages 的更多信息可以参考 教程：在 ASP.NET Core 中开始使用 Razor Pages (opens new window)。

以 XYCMS 分享插件 (opens new window)为例，我们需要在后台提供插件设置页面，如下图：

![2](/assets/img/plugin/demo/urlServices-03.png)

为了与 XYCMS 系统界面风格保持一致，我们复用了 XYCMS 的基础Layout布局：

``` html
@{ Layout = "_Layout"; }
```

以下是插件 Pages/ss-admin/share/Index.cshtml 文件的源代码，此页面访问路径为 /ss-admin/share/：

``` html
@page
@{ Layout = "_Layout"; }

<el-tabs type="border-card">
  <el-tab-pane label="页面分享设置">

    <el-alert type="info">
      页面分享标签：<strong>&lt;stl:share&gt;&lt;/stl:share&gt;</strong>
    </el-alert>

    <div style="height: 10px"></div>

    <el-form size="small" ref="settingsForm" label-width="260px" status-icon :model="settingsForm">
      <el-form-item label="默认页面标题" prop="defaultTitle" :rules="{ required: true, message: '请输入默认页面标题' }">
        <el-input v-model="settingsForm.defaultTitle" placeholder="请输入默认页面标题"></el-input>
        <div class="tips">当分享插件未获取到页面标题时将使用默认页面标题</div>
      </el-form-item>
      <el-form-item label="默认封面图片" prop="defaultImageUrl" :rules="{ required: true, message: '请输入图片地址或点击上方按钮上传' }">
        <el-button-group>
          <el-button size="mini" type="info" icon="el-icon-upload2" plain v-on:click="btnLayerClick({title: '上传图片', name: 'formLayerImageUpload', attributeName: 'defaultImageUrl', no: 0})">
            上传
          </el-button>
          <el-button size="mini" type="info" icon="el-icon-folder-opened" plain v-on:click="btnLayerClick({title: '选择图片素材', name: 'materialLayerImageSelect', attributeName: 'defaultImageUrl', no: 0, full: true})">
            选择
          </el-button>
          <el-button size="mini" type="info" icon="el-icon-view" plain :disabled="settingsForm.defaultImageUrl ? false : true" v-on:click="btnPreviewClick('defaultImageUrl', 0)">
            预览
          </el-button>
        </el-button-group>
        <el-input
          v-model="settingsForm.defaultImageUrl"
          placeholder="请输入图片地址或点击上方按钮上传">
        </el-input>
        <div class="tips">当分享插件未获取到封面图片时将使用默认封面图片</div>
      </el-form-item>
      <el-form-item label="默认页面介绍" prop="defaultDescription" :rules="{ required: true, message: '请输入默认页面介绍' }">
        <el-input v-model="settingsForm.defaultDescription" type="textarea" :rows="5" placeholder="请输入默认页面介绍"></el-input>
        <div class="tips">当分享插件未获取到页面介绍时将使用默认页面介绍</div>
      </el-form-item>
    </el-form>

    <el-divider></el-divider>
    <div style="height: 10px"></div>

    <el-row>
      <el-col :span="24" align="center">
        <el-button type="primary" v-on:click="btnSettingsSubmitClick" size="small">保 存</el-button>
      </el-col>
    </el-row>
  </el-tab-pane>
  <el-tab-pane label="微信分享设置">

    <el-alert v-if="mpResult && mpResult.success" type="success" title="微信公众号设置保存成功！"></el-alert>
    <el-alert v-else-if="mpResult && !mpResult.success" type="error" :title="mpResult.errorMessage" ></el-alert>

    <div style="height: 10px"></div>

    <el-form size="small" ref="wxShareForm" label-width="260px" status-icon :model="wxShareForm">
      <el-form-item label="是否启用微信分享">
        <el-radio v-model="wxShareForm.isWxShare" :label="true">启用</el-radio>
        <el-radio v-model="wxShareForm.isWxShare" :label="false">不启用</el-radio>
        <div class="tips">启用微信分享后，微信转发或分享时将显示完整的标题、封面及介绍</div>
      </el-form-item>
      <el-form-item v-if="wxShareForm.isWxShare" label="AppId" prop="mpAppId" :rules="{ required: true, message: '请输入AppId' }">
        <el-input v-model="wxShareForm.mpAppId" placeholder="请输入AppId"></el-input>
        <div class="tips">请进入微信公众平台，获取AppId</div>
      </el-form-item>
      <el-form-item v-if="wxShareForm.isWxShare" label="AppSecret" prop="mpAppSecret" :rules="{ required: true, message: '请输入AppSecret' }">
        <el-input v-model="wxShareForm.mpAppSecret" placeholder="请输入AppSecret"></el-input>
        <div class="tips">请进入微信公众平台，获取AppSecret</div>
      </el-form-item>
    </el-form>

    <template v-if="wxShareForm.isWxShare">
      <div style="height: 10px"></div>
      <el-alert type="info">
        请进入微信公众平台，进入<strong>开发 -> 基本配置 -> IP白名单</strong>，将以下信息填入并启用。
      </el-alert>
      <div style="height: 10px"></div>

      <el-form size="small" label-width="260px" status-icon>
        <el-form-item label="IP白名单">
          {{ ipAddress }}
        </el-form-item>
      </el-form>
    </template>

    <el-divider></el-divider>
    <div style="height: 10px"></div>

    <el-row>
      <el-col :span="24" align="center">
        <el-button type="primary" v-on:click="btnWxShareSubmitClick" size="small">保 存</el-button>
      </el-col>
    </el-row>
  </el-tab-pane>
</el-tabs>

@section Scripts{
  <script src="/assets/share/index.js" type="text/javascript"></script>
}
```

## Web API 服务

XYCMS 插件的 Web API 开发与 ASP.NET Core 中的 Web API 开发同样无区别，XYCMS 系统启动时将自动启用各个插件的 Web API 功能支持。

关于 Web API 的更多信息可以参考 使用 ASP.NET Core 创建 Web API (opens new window)。

以 XYCMS 分享插件 (opens new window)的 PingController 为例，访问 /api/share/ping 地址获取结果 pong 以确认插件在正常运行：

``` C#
using Microsoft.AspNetCore.Mvc;

namespace XYCMS.Share.Controllers
{
    [Route("api/share/ping")]
    public class PingController : ControllerBase
    {
        private const string Route = "";

        [HttpGet, Route(Route)]
        public string Get()
        {
            return "pong";
        }
    }
}
```

以 XYCMS 分享插件 (opens new window)的 WxController 为例，访问地址 /api/share/wx?siteId=<站点Id>&url=<url地址> 将获取到 JSON 格式的页面分享信息：

``` C#
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using XYCMS.Services;
using XYCMS.Share.Abstractions;

namespace XYCMS.Share.Controllers
{
    [Route("api/share/wx")]
    public partial class WxController : ControllerBase
    {
        private const string Route = "";

        private readonly IWxManager _wxManager;
        private readonly IShareManager _shareManager;

        public WxController(IWxManager wxManager, IShareManager shareManager)
        {
            _wxManager = wxManager;
            _shareManager = shareManager;
        }

        public class GetRequest
        {
            public int SiteId { get; set; }
            public string Url { get; set; }
        }

        public class GetResult
        {
            public bool Success { get; set; }
            public string ErrorMessage { get; set; }
            public string AppId { get; set; }
            public string Timestamp { get; set; }
            public string NonceStr { get; set; }
            public string Signature { get; set; }
        }

        [HttpGet, Route(Route)]
        public async Task<ActionResult<GetResult>> Get([FromQuery] GetRequest request)
        {
            var success = false;
            var errorMessage = string.Empty;
            var appId = string.Empty;
            var timestamp = string.Empty;
            var nonceStr = string.Empty;
            var signature = string.Empty;

            var settings = await _shareManager.GetSettingsAsync(request.SiteId);
            if (settings.IsWxShare)
            {
                string ticket;
                (success, ticket, errorMessage) = await _wxManager.GetJsApiTicketAsync(settings.MpAppId, settings.MpAppSecret);
                if (success)
                {
                    appId = settings.MpAppId;
                    timestamp = _wxManager.GetTimestamp();
                    nonceStr = _wxManager.GetNonceStr();
                    signature = _wxManager.GetJsApiSignature(ticket, nonceStr, timestamp, request.Url);
                }
            }

            return new GetResult
            {
                Success = success,
                ErrorMessage = errorMessage,
                AppId = appId,
                Timestamp = timestamp,
                NonceStr = nonceStr,
                Signature = signature
            };
        }
    }
}
```

在 Web API 中，我们可以使用预先注入的 XYCMS API，更多用法我们将在 XYCMS API 章节中进行详细说明。