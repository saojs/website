---
sidebar: auto
---

# Generator Instance

You can access generator instance in SAO File via `this`.

## Properties

### answers

- Type: `{[k:string]: any} | undefined`

The answers of prompts. when you access it in `prompts`, it will be `undefined`.

### gitUser

- Type: `{name?: string, username?: string, email?: string}`

The global configuration of the git user.

### outDir

- Type: `string`

The absolute path to output directory.

### outFolder

- Type: `string`

The folder name of output directory.

### npmClient

- Type: `'npm' | 'yarn'`

The npm client.

### fs

- Type: [fs-extra](https://github.com/jprichardson/node-fs-extra)

### logger

- Type: [Logger](https://github.com/saojs/sao/blob/master/lib/logger.js)

### spinner

- Type: [Ora](https://github.com/sindresorhus/ora)

### chalk

- Type: [Chalk](https://github.com/chalk/chalk)

## Methods

### gitInit

- Type: `() => void`

Run `git init` synchonously in output directory.

### npmInstall

- Type: `NpmInstall`

Use `npm` or `yarn` to install packages in output directory.

```ts
function npmInstall(opts?: InstallOpts): Promise<void>

interface InstallOpts {
  /* The packages to install, if omited, it will install packages in `package.json` */
  packages?: string[]
  /* Install packages as devDependencies, false by default */
  saveDev?: boolean
}
```

### showProjectTips

- Type: `() => void`

Display a message for successful project creation.