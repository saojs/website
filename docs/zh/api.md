---
sidebar: auto
---

# API

```js
const sao = require('sao')

// 创建SAO实例
const app = sao(options)
```

## 配置项

| 配置项 | 类型:值 | 描述 |
| ---------- | ------------ | ----------- |
| generator | String: 生成器名称 | 参考 [使用生成器](guide/getting-started.html#使用生成器). 例如 `npm:foo`, `egoist/sao-nm`|
| outDir | String: 输出最终文件目录的完整路径 ||


## 实例方法

| Method name | Description |
| ---------- | ------------ |
| Promise: run() | 运行脚手架。 例如: `sao(options).run()`|


## 实例属性

[TODO]

## 示例

### 本地调用SAO命令行

你可以这样本地调用SAO的命令行

`./bin/cli.js`

```js
#!/usr/bin/env node
'use strict'

const path = require('path')
const sao = require('sao')

const generator = path.resolve(__dirname, '../')
const outDir = path.resolve(process.argv[2] || '.')
sao({generator, outDir})
  .run()
  .catch(err => {
    console.trace(err)
    process.exit(1)
  })
```

示例项目: https://github.com/egoist/poi/blob/master/create-poi-app/bin/cli.js
