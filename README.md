<!--
 * @LastEditors: Mark
 * @Description: none
 * @Author: Mark
 * @Date: 2019-05-14 14:47:31
 * @LastEditTime: 2019-05-14 17:11:57
 -->

# one-react-ts-web 项目说明

脚手架仓库地址 <https://github.com/facebook/create-react-app>

官方文档 <https://facebook.github.io/create-react-app/>

TypeScript 文档  <https://zhongsp.gitbooks.io/typescript-handbook/content/>

## 运行方式

```bash
#更新和安装依赖
npm install

#本地查看与开发
npm run start

#生产环境打包发布
npm run build

#打包之后的本地测试
npm run local-serve

```

## 项目 ESlint 风格指南 , 以及 `VSCode` 编辑器配置建议

### VSCode 插件

- ESlint

### settings.json 设置

```json
{
  "editor.formatOnSave": true,
  "editor.formatOnType": true,
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "html",
    "javascript",
    "javascriptreact",
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    }
  ],
}

```

## 状态管理和页面通信

## 客户端本地存储

## 实用工具库

## style

## js 模块引用的路径别名配置 `Webpack alias`
