# 医院量化积分平台

## 项目搭建

### 创建项目

- 使用 vite 构建基于 vue-ts 模板的项目 vue-admin

```
yarn create vite vue-admin --template vue-ts

yarn add mockjs  yarn add vite-plugin-mock -D
yarn add lodash lodash类型声明yarn add @types/lodash -D
yarn add path -D   path类型声明yarn add @types/node -D

yarn add vue-router@4
yarn add axios
yarn add pinia
yarn add @icon-park/vue-next
yarn add tailwindcss postcss autoprefixer -D
yarn add echarts  yarn add @types/echarts
yarn add sass -D
yarn add element-plus

yarn add animate.css
yarn add gsap
yarn add unplugin-auto-import -D yarn add unplugin-vue-components -D
yarn add rollup-plugin-visualizer -D
yarn add webpack -D
```

- 安装依赖包

  package.json 文件

```
{
  "name": "vue-admin",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite --port 8000",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@icon-park/vue-next": "^1.4.2",
    "@types/echarts": "^4.9.18",
    "@types/prosemirror-commands": "^1.0.4",
    "@types/prosemirror-model": "^1.16.1",
    "@types/prosemirror-state": "^1.2.8",
    "@types/prosemirror-view": "^1.23.1",
    "axios": "^0.24.0",
    "echarts": "^5.4.2",
    "element-plus": "^1.3.0-beta.1",
    "lodash": "^4.17.21",
    "mockjs": "^1.1.0",
    "pinia": "^2.0.9",
    "vue": "^3.2.25",
    "vue-router": "4"
  },
  "devDependencies": {
    "@types/lodash": "^4.14.178",
    "@types/node": "^20.1.4",
    "@vitejs/plugin-vue": "^2.0.0",
    "autoprefixer": "^10.4.14",
    "path": "^0.12.7",
    "postcss": "^8.4.23",
    "rollup-plugin-visualizer": "^5.5.4",
    "sass": "^1.45.1",
    "tailwindcss": "^3.0.7",
    "typescript": "^4.4.4",
    "unplugin-auto-import": "^0.16.6",
    "unplugin-vue-components": "^0.25.1",
    "vite": "^2.7.2",
    "vite-plugin-mock": "^2.9.6",
    "vue-tsc": "^0.29.8",
    "webpack": "^5.66.0"
  }
}

```

### vite.config.ts 配置

### 路由

```typescript
import { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";

const route = createRouter({
  history: createWebHistory(), //路由有两种模式：hash模式和普通模式
  //具体的路由
  routes: [
    {
      path: "/",
      component: () => import("../layout/admin.vue"),
      children: [
        { path: "admin", component: () => import("../view/Home.vue") },
      ],
    },
    {
      path: "/user",
      component: () => import("../layout/user.vue"),
      children: [{ path: "user", component: () => import("../view/User.vue") }],
    },
  ],
});
//具名导出
export function setupRouter(app: App) {
  app.use(route); //注册路由
}
export default route; //默认导出
```

### 插件配置

- .env 文件
- 插件配置（plugins）
- 类型声明文件（types）
- 封装 axios
- 引入 taiwindcss（注意：使用 taiwindcss 需要安装 vscode 的 taiwindcss 插件）
- vee-validate 与 yup（正常情况下我们会用组件库的表单验证，但是如果我们想自己写表单，还想有验证规则可以使用外部组件库，通过组件或者 api 的方式）

在进行插件安装时最好看官网，插件的版本不一样会有一些代码的写法不同。

mockjs（https://github.com/vbenjs/vite-plugin-mock/blob/main/README.zh_CN.md）

tailwindcss（https://tailwindcss.com/docs/guides/vite#vue）

vee-validate 与 yup（https://doc.houdunren.com/%E6%8F%92%E4%BB%B6%E6%89%A9%E5%B1%95/%E5%89%8D%E7%AB%AF%E6%89%A9%E5%B1%95/7%20vee-validate%E4%B8%8Eyup.html#vee-validate）

## 业务相关

main.ts 入口文件---》加载项目所需插件-----》加载项目路由（等待路由全部加载完毕后在挂载组件）----》挂载根组件到#app 上

加载项目所需插件包括（axios、pinia、图标库、TainwindCss、echarts、Element Plus 等）

加载项目路由分成两部分：基础路由、根据模块注册的路由
在根据模块获取路由时，先获取到全部的路由，在判断是不是有 toekn,有 token 就发送申请用户信息的请求，然后根据用户的角色判断渲染哪些路由，过滤掉没有权限的路由

注册全局组件：
可以自己写一个注册函数在组件加载的时候进行全局注册
也可以引入插件按需加载---系统自动为我们 import,直接使用即可

axios 如何封装

性能优化:使用国外的 CDN 可能会加载更慢，但是 CDN 可以减少文件体积
