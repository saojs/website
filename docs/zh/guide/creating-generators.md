# 创建生成器

SAO提供了一个专门用来创建新生成器的生成器：

```bash
sao generator sao-sample
# 请把 `sao-sample` 替换为你想创建的生成器名称
```

## 目录结构

基础的SAO项目:

```bash
.
├── LICENSE
├── README.md
├── circle.yml
├── package.json
├── saofile.js
├── template
│   ├── LICENSE
│   ├── README.md
│   └── gitignore
├── test
│   └── test.js
└── yarn.lock # Or package-lock.json if you don't have Yarn on your machine
```

📝 __saofile.js__:

```js
const superb = require('superb')

module.exports = {
  prompts() {
    return [
      {
        name: 'name',
        message: 'What is the name of the new project',
        default: this.outFolder,
        filter: val => val.toLowerCase()
      },
      {
        name: 'description',
        message: 'How would you descripe the new project',
        default: `my ${superb()} project`
      },
      {
        name: 'username',
        message: 'What is your GitHub username',
        default: this.gitUser.username || this.gitUser.name,
        filter: val => val.toLowerCase(),
        store: true
      },
      {
        name: 'email',
        message: 'What is your email?',
        default: this.gitUser.email,
        store: true
      },
      {
        message: 'The URL of your website',
        default({ username }) {
          return `github.com/${username}`
        },
        store: true
      }
    ]
  },
  actions: [
    {
      type: 'add',
      // 拷贝所有 `template` 文件夹下的文件到输出目录
      files: '**'
    },
    {
      type: 'move',
      patterns: {
        gitignore: '.gitignore'
      }
    }
  ],
  async completed() {
    this.gitInit()
    await this.npmInstall()
    this.showProjectTips()
  }
}
```

- `prompts`: 与用户进行交互的命令行弹窗。
- `actions`: 定义一系列对文件系统的操作。
- `completed`: 当所有操作结束后，唤起这个异步函数。

现在，你可以运行生成器去创建新项目了：

```bash
sao ../sao-sample new-project
```

假如在新的**生成器**中找不到 `saofile.js` ，SAO将使用 [默认文件](https://github.com/saojs/sao/blob/master/lib/saofile.fallback.js) ，直接将所有文件原封不动导出到输出目录。

## 生成器实例

 [生成器实例](../generator-instance.md) 将作为模块被导出。如果你想访问**生成器实例**，可以运用函数形式的`actions`和`prompts`。 在函数内，通过`this`可以访问到**生成器实例** :

```js
module.exports = {
  prompts() {
    return [
      {
        name: 'author',
        message: 'What is your name',
        // 使用 `git config --global user.name` 所输出的名字作为作者名
        default: this.gitUser.name
      }
    ]
  },
  // ...
}
```

想知道`saofile.js`中完整的选项？ 请访问 [SAO配置文件](../saofile.md).
