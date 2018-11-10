---
sidebar: auto
---

# SAO File

::: tip
Make sure you have read the guide for [creating generators](./guide/creating-your-first-generator.md) first!
:::

SAO file, i.e. `saofile.js` lies in the root directory of a generator, it's used to create a generator instance which defines how to generate a new project.

## Prompts

__Type__: `Prompt[]` | `(this: Generator) => Prompt[] | Promise<Prompt[]>`

`prompts` is a list of questions you want the user to answer.

All prompt types in [Inquirer.js](https://github.com/SBoudrias/Inquirer.js#question) are supported here. There are a few differences in the prompt options though:

### `when`

The `when` property in each prompt can __also__ be a string which will be evaluated in the context of `answers`.

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

Basically it's equivalent to `when: answers => answers.useBundler`.

### `store`

- __Type__: `boolean`
- __Default__: `false`

This is a property only for SAO, it is used to store user inputs so that SAO can use stored value as default value the next time. Note that different version of a generator stores the inputs in different places.

### `default`

When `default` is a string, you can use `{propName}` to access properties on [Generator Instance](./generator-instance.md). e.g. Use `default: '{gitUser.name}'` to set the default value to the name of the git user. If you want to disable interpolations here, use double back-slash: `\\{gitUser.name}`.

## Actions

__Type__: `Action[]` | `(this: Generator) => Action[] | Promise<Action[]>`

`actions` is used to manipulate files. There're 4 kinds of actions which share following options:

- __type__: Action type
- __when__: Similar to `prompts`'s [`when`](#when).

### `type: 'add'`

Add files from `template` directory to target directory.

```js
actions: [
  {
    type: 'add',
    files: '**'
  }
]
```

- __files__: One or more glob patterns, files are resolved relative to [`templateDir`](#templatedir).
- __transform__: Enable/Disable transformer.
  - __Default__: `true`
- __transformInclude__: One or more glob patterns, transform specific files with the transformer.
- __transformExclude__: One or more glob patterns, __DON'T__ transform specific files with the transformer.

### `type: 'modify'`

Modify files in target directory.

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

- __files__: One or more glob patterns.
- __handler__: The function we use to get new file contents. For `.json` we automatically parse and stringify it. Otherwise you will recieve raw string.

### `type: 'move'`

Move files in target directory.

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

- __patterns__: Each entry can be a glob pattern which is supposed to matches __zero or one__ file in target directory.

### `type: 'remove'`

Remove files in target directory.

```js
actions: [
  {
    type: 'remove',
    files: '**/*.ts',
    when: '!useTypescript'
  }
]
```

- __files__: One or more glob patterns to match the files that should be removed.

## templateDir

- __Type__: `string`
- __Default__: `template`

The working directory for file action: `add`.

## Hooks

### `prepare`

__Type__: (this: Generator) => Prompt<void> | void`

Executed before prompts and actions, you can throw an error here to exit the process:

```js
module.exports = {
  // A generator that requires package.json in output directory
  async prepare() {
    const hasPkg = await this.fs.pathExists(this.resolve('package.json'))
    if (!hasPkg) {
      throw this.createError('Missing package.json')
      // You can also throw new Error('...') directly
      // While `this.createError` will only display error message without stack trace.
    }
  }
}
```

### `completed`

__Type__: (this: Generator) => Prompt<void> | void`

Executed when all actions are completed.

```js
module.exports = {
  async completed() {
    this.gitInit()
    await this.npmInstall()
    this.showCompleteTips()
  }
}
```
