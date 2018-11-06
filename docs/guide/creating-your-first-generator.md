# Creating Your First Generator

A generator instance is created from a `saofile.js`, let's make one now:

```bash
mkdir sample-generator
cd sample-generator
vim saofile.js
# or edit it with your editor of choice
```

You can use `saofile.js` to ask user questions in order to generate / move / modify files.

📝 __saofile.js__:

```js{8-13}
module.exports = {
  prompts: [
    {
      name: 'author',
      message: 'What is your name'
    }
  ],
  actions: [
    {
      type: 'add',
      files: '**'
    }
  ]
}
```

Note the highlighted lines, they will make SAO generate files from `./sample-generator/template/**` to the target directory. These files will also be rendered by [`ejs`](http://ejs.co/) using the answers of `prompts`.

You can now run this local generator to create a new project:

```bash
sao ./sample-generator new-project
```

## Access Generator Instance

A [generator instance](../generator-instance.md) will be created from exported object, if you want to access the instance you can use `actions` `prompts` as `function`:

```js
const pokemon = require('pokemon')

module.exports = {
  prompts() {
    return [
      {
        name: 'author',
        message: 'What is your name',
        // Use the value of `git config --global user.name` as the default value
        default: this.gitUser.name
      }
    ]
  },
  // ...
}
```

---

For a complete list of options in `saofile.js`, please check out [the config references](./saofile.md).
