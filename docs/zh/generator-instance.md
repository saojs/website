---
sidebar: auto
---

# 生成器实例

你可以通过 `this`访问生成器实例。

## 属性

### answers

- Type: `{[k:string]: any} | undefined`

弹窗问询的结果。

### gitUser

- Type: `{name?: string, username?: string, email?: string}`

git用户信息。

### outDir

- Type: `string`

输出目录的绝对路径。

### outFolder

- Type: `string`

输出目录的名称。

### npmClient

- Type: `'npm' | 'yarn'`

管理工具是npm还是yarn。

### fs

- Type: [fs-extra](https://github.com/jprichardson/node-fs-extra)

### logger

- Type: [Logger](https://github.com/saojs/sao/blob/master/lib/logger.js)

### spinner

- Type: [Ora](https://github.com/sindresorhus/ora)

### chalk

- Type: [Chalk](https://github.com/chalk/chalk)

## 方法

### gitInit

- Type: `() => void`

 同步运行`git init` 命令。

### npmInstall

- Type: `NpmInstall`

运用`npm` 或 `yarn` 来在输出目录下安装包依赖。

```ts
function npmInstall(opts?: InstallOpts): Promise<void>

interface InstallOpts {
  /* 安装的包名称，如果省略了，它将自动安装 `package.json`中的依赖。 */
  packages?: string[]
  /* 安装包作为devDependencies，默认为false
  saveDev?: boolean
}
```

### showProjectTips

- Type: `() => void`

显示创建成功的信息。
