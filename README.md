
## 文档
场照

## 基本

默认使用 package.json 中的 `name` 字段作为命令名，可以在 bin 中为其起别名，此项目中即 `ql` 作为命令名


## 注意事项
 
cli 启动文件头需要表明出 node 环境
```js
#! /usr/bin/env node
```

[clack 新版本已经迁移到 ESM ，需要指点版本到 4.1.2 及其以下](https://stackoverflow.com/questions/70309135/chalk-error-err-require-esm-require-of-es-module)
[ora 新版本也迁移到 ESM ，需要指定版本值 5.4.1 及其以下](https://github.com/sindresorhus/ora/commits?author=sindresorhus)


