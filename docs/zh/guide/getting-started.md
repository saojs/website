# 新手入门

## 安装

SAO是一个javascript命令行工具，你可以通过npm安装：

```bash
npm i -g sao
```

当然，更多时候我们使用Yarn进行安装：

```bash
yarn global add sao
```

全局安装SAO之后，在终端输入`sao`命令，将会打印出使用说明。

## 使用**生成器**

```bash
sao nm my-project
```

使用这个命令，SAO将安装一个**生成器**(在示例中使用的是[sao-nm](https://npm.im/sao-nm)包)，并根据**生成器**将文件目录生成在`my-project`文件夹下。

如果你需要在当前文件夹下生成文件目录，只需要输入`sao nm`

生成器可以是以下几种形式：

- __本地文件夹__, e.g. `sao ./path/to/my-generator`
- __NPM包__, e.g. `sao react` 将下载npm包 `sao-react`.
  - 如果npm包不符合 `sao-*` 的命名格式, 只需要添加前缀即可 `sao npm:foo`, SAO将直接调用 `foo` 包来替代 `sao-foo`.
- __Git仓库__, e.g. `sao egoist/sao-nm` 将使用GitHub项目 `github.com/egoist/sao-nm`, 你可以添加前缀来调用其它的Git服务商:
  - `gitlab:` 采用GitLab服务.
  - `bitbucket:` 采用BitBucket服务.

### 版本控制

使用NPM包时，可以指定**生成器**的版本号：

```bash
sao nm@1
sao nm@0.2
```

这和使用 `npm install` 命令有异曲同工之妙。

使用Git仓库时，你可以采用指定的标签或分支下的**生成器**。

```bash
sao nm#dev
sao nm#v1.0.0
```

### **子生成器**

一个生成器下可能还有子生成器，例如：

```bash
sao nm:donate
```

在 `:` 号后面的即时一个名叫`donate`的**子生成器**, 当你运行这行代码时，SAO将调用一个子生成器，作用是运行 `postinstall` 脚本，并在 `package.json` 中显示捐助网址.

::: 警告
子生成器必须在已创建的项目中运行，也就是说，它的输出目录永远都是当前的工作目录。
:::

### 升级**生成器**缓存

当你运行过一次**生成器**之后， `~/.sao` 文件夹下将创建它的缓存副本. 如果你想升级它到最新版本,请在命令中加入 `--update` 或 `-u`。
