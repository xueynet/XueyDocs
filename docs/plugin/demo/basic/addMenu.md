# 添加插件菜单

插件菜单分为三种：系统菜单、站点菜单以及内容菜单，分别显示在 XYCMS 管理后台的头部、左侧以及内容列表中。

参考 Menu。

## 添加系统菜单

系统菜单位于系统头部的插件管理下拉菜单中。

``` c#
public IService AddSystemMenu(Menu menu)
```

下面的例子显示如何添加系统菜单。
``` c#
public class Main : PluginBase
{
    public override void Startup(IService service)
    {
        service.AddSystemMenu(new Menu
        {
            Text = "插件菜单",
            Href = "page.html"
        });
    }
}
```

下面的例子显示如何添加带有下级菜单的系统菜单。

``` c#
public class Main : PluginBase
{
    public override void Startup(IService service)
    {
        service.AddSystemMenu(new Menu
        {
            Text = "插件菜单",
            Href = "page.html",
            Menus = new List<Menu>
            {
                new Menu
                {
                    Text = "下级菜单1",
                    Href = "page1.html"
                },
                new Menu
                {
                    Text = "下级菜单1",
                    Href = "page2.html"
                }
            }
        });
    }
}
```

## 添加站点菜单

站点菜单位于系统左侧的站点插件中。

``` c#
public IService AddSiteMenu(Func<int, Menu> siteMenuFunc)
```

下面的例子显示如何添加站点菜单。

``` svg
public class Main : PluginBase
{
    public override void Startup(IService service)
    {
        service.AddSiteMenu(siteId => new Menu
        {
            Text = "站点菜单",
            Href = "page.html"
        });
    }
}
```