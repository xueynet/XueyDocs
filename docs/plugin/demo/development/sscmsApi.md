# 调用 XYCMS API

XYCMS API 是 XYCMS 系统的底层 API，包含了 XYCMS 系统的核心接口与对象，XYCMS 系统本身即是基于 XYCMS API开发而来，NuGet 托管地址：https://www.nuget.org/packages/XYCMS (opens new window)。

XYCMS API 的详细参考手册请访问 XYCMS API 参考 章节。

在此，我们以 XYCMS 评论插件 (opens new window)为例说明在不同的环境下如何调用 XYCMS API。

## Startup 初始化

插件必须继承 IPluginExtension 接口或者 IPluginConfigureServices、IPluginConfigure 等继承自 IPluginExtension 接口的接口。

我们通常使用 Startup.cs 文件作为插件的入口，继承以上接口中的一个，表明此项目是 XYCMS 系统插件。

例如 XYCMS 评论插件 (opens new window)项目的 Startup.cs 文件：

``` C#
using Microsoft.Extensions.DependencyInjection;
using XYCMS.Comments.Abstractions;
using XYCMS.Comments.Core;
using XYCMS.Plugins;

namespace XYCMS.Comments
{
    public class Startup : IPluginConfigureServices
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<ISettingsRepository, SettingsRepository>();
            services.AddScoped<ICommentRepository, CommentRepository>();
            services.AddScoped<ICommentManager, CommentManager>();
        }
    }
}
```

可以看到在 Startup 类继承了 IPluginConfigureServices 接口，并实现了 IPluginConfigureServices 接口的 ConfigureServices 方法。

ConfigureServices 方法用于配置依赖注入以在运行时根据依赖关系创建对象，用途与 ASP.NET Core 中的 ConfigureServices 用途一致，可以参考 ASP.NET Core 依赖注入 (opens new window)。

在以上示例中，我们注入了 ISettingsRepository、ICommentRepository 数据库操作接口以及 ICommentManager 评论服务接口。

## 插件 Repositories 数据库操作

在数据库操作代码中调用 XYCMS API 请参考 数据库操作。

## 插件 Services 服务

我们以 XYCMS 评论插件 (opens new window)的 CommentManager 类为例，说明如何在服务代码中调用 XYCMS API。

``` C#
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using XYCMS.Comments.Abstractions;
using XYCMS.Comments.Models;
using XYCMS.Comments.Utils;
using XYCMS.Models;
using XYCMS.Repositories;
using XYCMS.Services;
using XYCMS.Utils;

namespace XYCMS.Comments.Core
{
    public class CommentManager : ICommentManager
    {
        public const string PluginId = "xycms.comments";
        public const string PermissionsManage = "comments_manage";
        public const string PermissionsSettings = "comments_settings";
        public const string PermissionsTemplates = "comments_templates";

        private readonly ICacheManager _cacheManager;
        private readonly IPathManager _pathManager;
        private readonly IPluginManager _pluginManager;
        private readonly ISmsManager _smsManager;
        private readonly IMailManager _mailManager;
        private readonly ISettingsRepository _settingsRepository;
        private readonly ITableStyleRepository _tableStyleRepository;
        private readonly IContentRepository _contentRepository;
        private readonly ICommentRepository _commentRepository;

        public CommentManager(ICacheManager cacheManager, IPathManager pathManager, IPluginManager pluginManager, ISmsManager smsManager, IMailManager mailManager, ITableStyleRepository tableStyleRepository, IContentRepository contentRepository, ISettingsRepository settingsRepository, ICommentRepository commentRepository)
        {
            _cacheManager = cacheManager;
            _pathManager = pathManager;
            _pluginManager = pluginManager;
            _smsManager = smsManager;
            _mailManager = mailManager;
            _tableStyleRepository = tableStyleRepository;
            _contentRepository = contentRepository;
            _settingsRepository = settingsRepository;
            _commentRepository = commentRepository;
        }

        ......

        public async Task DeleteAsync(int siteId)
        {
            if (siteId <= 0) return;

            var relatedIdentities = new List<int> {siteId};

            await _tableStyleRepository.DeleteAllAsync(CommentUtils.TableName, relatedIdentities);
            await _commentRepository.DeleteBySiteIdAsync(siteId);
            await _settingsRepository.DeleteAsync(siteId);
        }

        ......

        public string GetTemplateHtml(TemplateInfo templateInfo)
        {
            var directoryPath = GetTemplatesDirectoryPath();
            var htmlPath = PathUtils.Combine(directoryPath, templateInfo.Name, templateInfo.Main);
            return _pathManager.GetContentByFilePath(htmlPath);
        }

        ......
    }
}
```

可以看到，我们在 CommentManager 类构造器中通过依赖注入引入了 XYCMS API 中的 ICacheManager、IPathManager、IPluginManager、ISmsManager、IMailManager、ITableStyleRepository、IContentRepository 服务，同时我们引入在了 Startup 类中注入的 ISettingsRepository 以及 ICommentRepository 数据库操作接口。

我们在 DeleteAsync 方法中调用了 XYCMS API ITableStyleRepository 接口的 DeleteAllAsync 方法，在 GetTemplateHtml 方法中调用了 XYCMS API IPathManager 接口的 GetContentByFilePath 方法。

同时我们在 GetTemplateHtml 方法中调用了 XYCMS API 静态类 PathUtils 的 Combine 方法。

## 插件 Web API 控制器

最后，我们以 XYCMS 评论插件 (opens new window)的 CommentsController 类为例，说明如何在Web API 控制器代码中调用 XYCMS API。

``` C#
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using XYCMS.Comments.Abstractions;
using XYCMS.Comments.Core;
using XYCMS.Comments.Models;
using XYCMS.Repositories;
using XYCMS.Services;

namespace XYCMS.Comments.Controllers
{
    [Route("api/comments")]
    public partial class CommentsController : ControllerBase
    {
        private readonly IAuthManager _authManager;
        private readonly IUserRepository _userRepository;
        private readonly ILogRepository _logRepository;
        private readonly ISiteRepository _siteRepository;
        private readonly ICommentManager _commentManager;
        private readonly ICommentRepository _commentRepository;

        public CommentsController(IAuthManager authManager, IUserRepository userRepository, ILogRepository logRepository, ISiteRepository siteRepository, ICommentManager commentManager, ICommentRepository commentRepository)
        {
            _authManager = authManager;
            _userRepository = userRepository;
            _logRepository = logRepository;
            _siteRepository = siteRepository;
            _commentManager = commentManager;
            _commentRepository = commentRepository;
        }

        ......

        [HttpGet, Route("")]
        public async Task<ActionResult<GetResult>> List([FromQuery] ListRequest request)
        {
            var settings = await _commentManager.GetSettingsAsync(request.SiteId);

            List<Comment> list = null;
            var total = 0;
            var pageSize = settings.PageSize;

            if (request.Page > 0)
            {
                List<Comment> items;
                (total, items) = await _commentRepository.GetCommentsAsync(request.SiteId, request.ChannelId, request.ContentId, CommentStatus.Approved, null, request.Page, pageSize);
                list = new List<Comment>();
                foreach (var item in items)
                {
                    var comment = item.Clone<Comment>();
                    var user = new User();
                    if (comment.UserId > 0)
                    {
                        user = await _userRepository.GetByUserIdAsync(comment.UserId);
                    }
                    comment.Set("user", user);
                    list.Add(comment);
                }
            }

            return new GetResult
            {
                IsSubmitDisabled = settings.IsSubmitDisabled,
                IsCaptcha = settings.IsCaptcha,
                IsApprovedByDefault = settings.IsApprovedByDefault,
                Items = list,
                Total = total,
                PageSize = pageSize
            };
        }

        [HttpPost, Route("")]
        public async Task<ActionResult<SubmitResult>> Submit([FromBody] Comment request)
        {
            var site = await _siteRepository.GetAsync(request.SiteId);
            var settings = await _commentManager.GetSettingsAsync(request.SiteId);
            if (settings.IsSubmitDisabled)
            {
                return this.Error("对不起，评论已被禁用");
            }

            request.UserId = _authManager.UserId;
            request.Status = settings.IsApprovedByDefault ? CommentStatus.Approved : CommentStatus.Pending;
            request.IpAddress = PageUtils.GetIpAddress(Request);

            request.Id = await _commentRepository.InsertAsync(request);
            await _commentManager.SendNotifyAsync(site, settings, request);

            List<Comment> list = null;
            var total = 0;
            if (settings.IsApprovedByDefault)
            {
                List<Comment> items;
                (total, items) = await _commentRepository.GetCommentsAsync(request.SiteId, request.ChannelId, request.ContentId, CommentStatus.Approved, null, 1, settings.PageSize);
                list = new List<Comment>();
                foreach (var item in items)
                {
                    var comment = item.Clone<Comment>();
                    var user = new User();
                    if (comment.UserId > 0)
                    {
                        user = await _userRepository.GetByUserIdAsync(comment.UserId);
                    }
                    comment.Set("user", user);
                    list.Add(comment);
                }
            }

            if (_authManager.IsUser)
            {
                var user = await _authManager.GetUserAsync();
                await _logRepository.AddUserLogAsync(user, PageUtils.GetIpAddress(Request), "发表评论");
            }

            return new SubmitResult
            {
                Items = list,
                Total = total
            };
        }
    }
}
```

可以看到，我们在 CommentsController 类构造器中通过依赖注入引入了 XYCMS API 中的 IAuthManager、IUserRepository、ILogRepository、ISiteRepository 服务，同时我们引入在了 Startup 类中注入的 ICommentManager 服务接口以及 ICommentRepository 数据库操作接口。

我们在 List 方法中调用了 XYCMS API IUserRepository 接口的 GetByUserIdAsync 方法，在 Submit 方法中调用了 XYCMS API ISiteRepository 接口的 GetAsync 方法等。