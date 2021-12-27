# Creating Generators

SAO provides a generator for creating a new generator:

```bash
sao generator sao-sample
# Make sure to replace `sao-sample` with your desired generator name
```

## Folder Structure

The basic folder structure is as follows:

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
        message: 'How would you describe the new project',
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
      // Copy and transform all files in `template` folder into output directory
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

- `prompts`: CLI prompts to retrieve answers from current user.
- `actions`: A series of actions to manipulate files.
- `completed`: A function that will be invoked when the whole process is finished.

Now you can run the generator to generate a new project:

```bash
sao ../sao-sample new-project
```

Note that if no `saofile.js` was found in the generator, SAO will use a [default one](https://github.com/saojs/sao/blob/master/lib/saofile.fallback.js) which would simply copy all files into output directory.

## Access Generator Instance

A [generator instance](../generator-instance.md) will be created from exported object, if you want to access the instance you can use `actions` `prompts` as `function`, the generator instance will be available as `this` in the function:

```js
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

For a complete list of options in `saofile.js`, please check out [SAO File References](../saofile.md).
