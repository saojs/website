# Tesing Generators

You can test your generators with your testing framework of choice, like [AVA](https://ava.li) we are going to use here.

Before writing actual tests, you need to install `sao` and your testing framework of choice in the generator as dev dependencies, here we are going to use [AVA](https://ava.li) for unit testing:

```bash
cd my-generator
yarn add sao ava --dev
```

Now populate `test/test.js` with following contents:

```js
const test = require('ava')
const sao = require('sao')

const generator = path.join(__dirname)

test('defaults', async t => {
	// In unit tests we skip prompts and use mocked answers instead
	// If not provided we will use the default value of the prompt
	const mockPromptAnswers = { useRouter: true }
	const stream = await sao.mock({ generator }, mockPromptAnswers)
	// Check if `router.js` is in the generated files
	t.true(stream.fileList.has('router.js'))
})
```

Finally type `yarn ava` to run the tests.

## `sao.mock(input, answers?)` references

### input

#### input.generator

- Type: `string`

The path to the generator.

### answers

- Type: `Object`

Mocked prompt answers.

## `stream` references

### stream.fileList

- Type: `string[]`

A list of generated files.

### stream.readFile(filepath)

- Type: `(path: string) => Promise<string>`

Read the contents of specific file in the output directory.