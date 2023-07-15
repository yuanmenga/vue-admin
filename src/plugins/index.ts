import { App } from 'vue'
import _ from 'lodash'
import setupTailwindcss from './tailwindcss'
import setupElementPlus from './elementui'
import setupPinia from './pinia'
export function setupPlugins(app: App) {
  setupPinia(app)
  setupTailwindcss()
  setupElementPlus(app)
  autoRegisterComponent(app)
}
// 自动注册全局组件
function autoRegisterComponent(app: App) {
  const components = import.meta.globEager('../components/ym/*.vue')
  Object.entries(components).forEach(([key, value]) => {
    //组件名字Hd+你的vue文件名字
    const componentName = `Hd${key.split('/').pop()?.split('.')[0]}`
    // console.log(componentName);
    app.component(componentName, value.default)
  })
}
