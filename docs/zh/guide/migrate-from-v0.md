# 从v0迁移到当前版本

普通用户直接删除掉sao文件就可以使用v1版本了： `rm -rf ~/.sao` 

不过对于模板文件作者，请注意以下改动：

1. 模板文件现在改版成了生成器，你需要把生成器以 `sao-*` 的格式发布在NPM。
2. 生成器现在使用 `saofile.js`，而不是 `sao.js` 来控制文件行为。
3.  `saofile.js`还进行了以下的改变。

## Changes in saofile.js

移除了以下配置项:

- data
- filters
- skipInterpolation
- enforceNewFolder
- enforceCurrentFolder
- move
- template
- templateOptions
- post

增加了新的配置项:

- prompts
- transformer
- transformerOptions
- actions
- completed
- generators
- prepare
