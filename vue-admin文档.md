# 脚手架文档

## 创建项目

- 使用 vite 构建基于 vue-ts 模板的项目 vue-admin

```
yarn create vite vue-admin --template vue-ts
```

- 安装依赖包

  package.json文件

```
{
  "name": "vue-admin",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@icon-park/vue-next": "^1.3.6",
    "@toast-ui/editor": "^3.1.3",
    "@types/prosemirror-commands": "^1.0.4",
    "@types/prosemirror-model": "^1.16.1",
    "@types/prosemirror-state": "^1.2.8",
    "@types/prosemirror-view": "^1.23.1",
    "@types/ws": "^8.5.3",
    "@vee-validate/i18n": "^4.5.7",
    "@vee-validate/rules": "^4.5.7",
    "@wangeditor/editor": "^5.0.1",
    "@wangeditor/editor-for-vue": "^5.1.10",
    "animate.css": "^4.1.1",
    "axios": "^0.24.0",
    "echarts": "^5.3.2",
    "element-plus": "^1.3.0-beta.1",
    "gsap": "^3.9.1",
    "lodash": "^4.17.21",
    "mockjs": "^1.1.0",
    "pinia": "^2.0.9",
    "vee-validate": "^4.5.7",
    "vue": "^3.2.25",
    "vue-router": "4",
    "wangeditor": "^4.7.12",
    "ws": "^8.5.0",
    "yup": "^0.32.11"
  },
  "devDependencies": {
    "@types/lodash": "^4.14.178",
    "@vitejs/plugin-vue": "^2.0.0",
    "autoprefixer": "^10.4.0",
    "path": "^0.12.7",
    "postcss": "^8.4.5",
    "rollup-plugin-visualizer": "^5.5.4",
    "sass": "^1.45.1",
    "tailwindcss": "^3.0.7",
    "typescript": "^4.4.4",
    "unplugin-auto-import": "^0.5.11",
    "unplugin-vue-components": "^0.17.13",
    "vite": "^2.7.2",
    "vite-plugin-mock": "^2.9.6",
    "vue-tsc": "^0.29.8",
    "webpack": "^5.66.0"
  }
}
```

## 配置路由、布局页面

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

- 定义路径别名

https://blog.csdn.net/qq_45064834/article/details/126860182

```typescript
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //路由别名定义
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
});
```

- 自动注册路由

```typescript
//利用vite的内置方法globEager来获取layout和view的所有文件
import { RouteRecordRaw } from "vue-router";
const layout = import.meta.globEager("../layout/*.vue");
const view = import.meta.globEager("../view/**/*.vue");
```

- 自定义路由路径

```typescript
<script setup lang="ts"></script>
<script>
//自定义路由
export default {
  route: { path: "/user" },
};
</script>
```

## vite配置

- .env文件
- 插件配置（plugins）
- 类型声明文件（types）

在进行插件安装时最好看官网，插件的版本不一样会有一些代码的写法不同。

mockjs（https://github.com/vbenjs/vite-plugin-mock/blob/main/README.zh_CN.md）

tailwindcss（https://tailwindcss.com/docs/guides/vite#vue）

