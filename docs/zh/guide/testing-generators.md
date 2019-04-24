# 测试生成器

您可以选择自己习惯的测试框架来测试SAO生成器, 例如[AVA](https://ava.li)。

在测试之前，你需要确保已经将`sao`和你的测试框架`ava`安装到了devDependencies中。

```bash
cd my-generator
yarn add sao ava --dev
```

在`test/test.js` 中写入以下内容：

```js
const test = require('ava')
const sao = require('sao')

const generator = path.join(__dirname)

test('defaults', async t => {
	// 在单元测试中，我们用mock对象代替实际的弹窗。
	// 如果不提供mock对象，将使用默认选项进行替代。
	const mockPromptAnswers = { useRouter: true }
	const stream = await sao.mock({ generator }, mockPromptAnswers)
	// Check if `router.js` is in the generated files
	t.true(stream.fileList.includes('router.js'))
})
```

最后，运行 `yarn ava` 来跑一下测试。

## `sao.mock(input, answers?)`

### input

#### input.generator

- Type: `string`

生成器路径。

### answers

- Type: `Object`

Mock的弹窗选项。

## `stream`

### stream.fileList

- Type: `string[]`

生成的文件名数组。

### stream.readFile(filepath)

- Type: `(path: string) => Promise<string>`

读取指定的输出文件中的内容。
