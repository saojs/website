# 让大家一起使用你的生成器！

想让大家一起使用你的生成器，你可以把你的生成器文件夹上传到GitHub等服务商。

当然，我强烈建议你采用`sao-*`命名格式。

而且，发布在npm上是最佳选择。你可以这样书写`package.json`文件：

📝 __package.json__:

```json
{
  "name": "sao-foo",
  "files": [
    "saofile.js",
    "template"
  ],
  "keywords": [
    "sao-generator",
    "sao",
    "scaffolding"
  ]
}
```
