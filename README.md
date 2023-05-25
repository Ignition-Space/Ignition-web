<!-- 项目logo -->
<br />
<div align="center" id="top">
  <a href="https://github.com/moyu-developer/moyu-caster-fiber">
    
  </a>

  <h2 align="center">名字先占个坑</h2>

  <p align="center">
    从零开始构建通用型低代码应用平台。【上车指南】
    <br />
    <a href=""><strong>浏览文档 »</strong></a>
    <br />
    <br />
    <a href="">示例地址</a>
    ·
    <a href="">交流专区</a>
    ·
    <a href="">教程地址</a>
  </p>
</div>

## Huos

Huos定位是一款通用型的底代码平台，它涵盖了从可视化搭建到发布部署的整个过程，提供安全地部署和共享的开放体验。

...写作中  ✍️

### 架构设计

...写作中  ✍️

## 上车指南

```shell
# 拉取项目代码
git clone https://github.com/Ignition-Space/Ignition-web.git

# 进入工程
cd ./Ignition-web

# 安装依赖, 必须使用pnpm
pnpm install

# 构建编辑器依赖
pnpm run build:editor

# 启动编辑器
cd ./apps/editor && pnpm run start

# 当控制台出现如下界面，代表着安装成功

> @lgnition-web/editor@1.0.0 start /Users/wangly19/Desktop/开源项目/低代码/Ignition-web/apps/editor
> max dev

info  - Umi v4.0.64
info  - Preparing...
        ╔════════════════════════════════════════════════════╗
        ║ App listening at:                                  ║
        ║  >   Local: http://localhost:5101                  ║
ready - ║  > Network: http://192.168.1.103:5101              ║
        ║                                                    ║
        ║ Now you can open browser with the above addresses↑ ║
        ╚════════════════════════════════════════════════════╝
event - [Webpack] Compiled in 7375 ms (5433 modules)

```


## 教程

对于项目而言，不仅仅只是一个低代码平台，同样也是一个产品的开发实践。

如果有想学习其中思想的同学可以购买以下小册来配合代码食用，随着后续章节的更新，相应的代码也会同步的进行更新。

[【从 0 打造通用型低代码产品】](https://juejin.cn/book/6918979822425210891) 大约更新会在60章节+的样子，它会记录我们从0到1开发一个产品实践的过程，在这个过程中也会借助前端技术来做一些有趣的东西。