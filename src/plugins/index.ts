import { App } from "vue";
import _ from "lodash";
import setupPinia from "./pinia";
import setupTailwindcss from "./tailwindcss";
import setupIconPack from "./icon-pack";

// import setupElementPlus from './elementui'

export default function setupPlugins(app: App) {
  setupPinia(app);
  setupTailwindcss();
  setupIconPack(app);
  // setupElementPlus(app)
  // autoRegisterComponent(app) //自定义的自动注册全局组件---弃用
}
// // 自动注册全局组件
// function autoRegisterComponent(app: App) {
//   const components = import.meta.glob('../components/ym/*.vue', { eager: true })
//   Object.entries(components).forEach(([key, value]) => {
//     //组件名字Hd+你的vue文件名字
//     const componentName = `Hd${key.split('/').pop()?.split('.')[0]}`
//     // console.log(componentName);
//     app.component(componentName, value.default)
//   })
// }
