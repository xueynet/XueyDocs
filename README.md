# XueyDocs
文档

当前脚手脚使用：vuepress@next

### npm下安装yarn

1. 安装yarn

```
npm install -g yarn --registry=https://registry.npm.taobao.org
```

2. 配置源

```
yarn config set registry https://registry.npm.taobao.org -g
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
```

# 开始制作
yarn docs:dev

# 构建静态文件
yarn docs:build

# 更新引用组件包
yarn upgrade