---
sidebar: auto
---

# API

```js
const sao = require('sao')

// Create SAO instance
const app = sao(options)
```

## Options

| Option key | Option Value | Description |
| ---------- | ------------ |
| generator | String: generator name | Example: full path to local directory with a `saofile.js`
| outDir | String: full path to scaffold the project into |


## Instance Methods

| Method name | Description |
| ---------- | ------------ |
| Promise: run() | Run the generator scaffold. Example: `sao(options).run()`


## Instance Properties

[TODO]

## Example

### Standalone CLI

Invoke Sao from a standalone CLI project:

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

Example project: https://github.com/egoist/poi/blob/master/create-poi-app/bin/cli.js
