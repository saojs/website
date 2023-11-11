# 简介

## SAO，究竟是什么?

SAO使你能够通过指定的[生成器](https://github.com/saojs/awesome-sao)来快速启动新项目。

当然，也可以轻松制作自己的**生成器**，以生成你自定义的新项目。

## 为什么不使用Yeoman？

[Yeoman](http://yeoman.io/)是一个非常棒的项目，除了书写Yeoman生成器非常费劲以外，没有任何缺点。

所以，我创建了SAO来简化书写**生成器**的流程。

## 快速入门SAO

我写了一个专门用来创建新的node模块的**SAO生成器**，

你可以点击[sao-nm](https://npm.im/sao-nm)访问npm主页；

或点击[http://github.com/saojs/sao-nm](http://github.com/saojs/sao-nm)访问GitHub主页。

```bash
sao nm my-node-module
```
在命令行下运行这条命令，SAO将执行以下步骤：

1. 首先，SAO将优先使用`sao-nm`的本地缓存

2. 如果没有找到缓存，就从npm上寻找到`sao-nm`包并下载。

3. 在`my-node-modules`文件夹下，SAO将根据*生成器*中的`saofile.js`来创建新项目。

当然，GitHub上也能找到`sao-nm`的项目，所以你可以这样使用GitHub上的生成器：

```bash
sao saojs/sao-nm my-node-module
```
