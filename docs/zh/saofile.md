---
sidebar: auto
---

# SAO配置文件

::: 小告示
请确认你已经阅读过了 [新手入门](./guide/creating-generators.md)!
:::

SAO配置文件，即放置在根目录下的`saofile.js` ,它用来控制生成器如何生成新的文件目录。

## Prompts

__Type__: `Prompt[]` | `(this: Generator) => Prompt[] | Promise<Prompt[]>`

`prompts` 一个配置弹窗问询流程的数组。
`
所有在 [Inquirer.js](https://github.com/SBoudrias/Inquirer.js#question) 中可配置的弹窗问询选项，在这里都是可用的！ 

当然，相较于`Inquirer.js`，我们有一些小改动：

### `when`

`when` 输入string格式也可以被解析。

For example:

```js{10}
prompts: [
  {
    name: 'useBundler',
    message: 'Do you want a bundler'
  },
  {
    name: 'bundler',
    type: 'list',
    choices: ['webpack', 'parcel', 'poi'],
    when: 'useBundler'
  }
]
```

事实上，输入这个字符串相当于 `when: answers => answers.useBundler`.

### `store`

- __Type__: `boolean`
- __Default__: `false`

这是只有SAO具有的属性, 它用来告诉生成器是否需要存储下来，以备下次使用.
 
注意，v1和v0中存储在不同的位置。

### `default`

当 `default` 为string时, 你可以使用 `{propName}` 来访问[生成器实例](./generator-instance.md)上的属性。例如 `default: '{gitUser.name}'` 来设置默认值为git作者名. 

## Actions

__Type__: `Action[]` | `(this: Generator) => Action[] | Promise<Action[]>`

`actions` 用来操作文件。以下是四种操作方法。

- __type__: Action type
- __when__: Similar to `prompts`'s [`when`](#when).

### `type: 'add'`

从 `template` 中复制文件到目标文件夹

```js
actions: [
  {
    type: 'add',
    files: '**',
    filters: {
      'foo.js': '!someAnswer'
    }
  }
]
```

- __files__: 输入glob匹配模式。 请参见[`templateDir`](#templatedir).
- __transform__: 开启/关闭转换器。
  - __Default__: `true`
- __transformInclude__: 输入glob匹配模式, 指定被匹配到的文件使用转换器进行处理。
- __transformExclude__: 输入glob匹配模式, 指定__排除掉文件__不使用转换器进行处理。 
- __filters__: __排除掉文件__不拷贝到目标文件夹. 它必须输入一个对象，键名为glob匹配模式，值为boolea或者与 `answers`对应的字符串。 
- __templateData__: 参见 [templateData](#templatedata) 。
- __templateDir__: 参见 [templateDir](#templatedir) 。

### `type: 'modify'`

改写输出的目标文件。

```js
actions: [
  {
    type: 'modify',
    files: 'package.json',
    handler(data, filepath) {
      data.main = './foo.js'
      return data
    }
  }
]
```

- __files__: 输入glob匹配模式。
- __handler__: 函数将读取目标文件内容。 `.json` 会被自动解析。其它的文件只返回字符串。
### `type: 'move'`

为目标文件改名。

```js
actions: [
  {
    type: 'move',
    patterns: {
      'index-*.js': 'index.js'
    }
  }
]
```

- __patterns__: 输入glob匹配模式，可能匹配到 __0个或1个__ 目标文件。

### `type: 'remove'`

删除文件。

```js
actions: [
  {
    type: 'remove',
    files: '**/*.ts',
    when: '!useTypescript'
  }
]
```

- __files__: 输入glob匹配模式，来指字哪些文件需要被删除。

## templateDir

- __Type__: `string`
- __Default__: `template`

运行`add`操作的工作目录。

## templateData

我们将使用[EJS](https://ejs.co)来执行`add`操作. 你可以访问到的数据包括：

- `answers`: 直接访问弹窗问询到的结果，如 `<%= description %>`即访问弹窗问询到的项目描述。
- `context`: [生成器实例](./generator-instance.md). 例如 `<%= context.npmClient %>`

你可以使用以下 `templateData` 选项提供更多的数据:

```js
module.exports = {
  templateData: {
    date: new Date()
  }
}
```

之后，你可以通过 `<%= date %>` 在文件内访问它。

`templateData` 也可以是函数，可以通过`this`访问生成器实例:

```js
module.exports = {
  templateData() {
    return {
      link: `https://github.com/${this.gitUser.name}`
    }
  }
}
```

## subGenerators

你可以使用 `subGenerators` 来注册一系列的子生成器:

```js
module.exports = {
  subGenerators: [
    {
      name: 'foo',
      // 子生成器的目录地址(相对于主生成器的saofile.js),
      generator: './generators/foo'
    },
    {
      name: 'bar',
      // 或者使用npm包，如`sao-bar`
      // 也需要相对于主生成器的aofile.js
      generator: 'sao-bar'
    }
  ]
}
```

接下来，你可以这样调用子生成器

```bash
sao sample:foo
sao sample:bar
```

## Hooks

### `prepare`

__Type__:`(this: Generator) => Prompt<void> | void`

在prompts和actions之前执行。你可以抛出错误来终止执行。

```js
module.exports = {
  // 生成器检测目录文件夹是否有package.json文件
  async prepare() {
    const hasPkg = await this.fs.pathExists(this.resolve('package.json'))
    if (!hasPkg) {
      throw this.createError('Missing package.json')
      // 你也可以直接throw new Error('...')
    }
  }
}
```

### `completed`

__Type__: `(this: Generator) => Prompt<void> | void`

在全部actions执行完后调用。

```js
module.exports = {
  async completed() {
    this.gitInit()
    await this.npmInstall()
    this.showCompleteTips()
  }
}
```
