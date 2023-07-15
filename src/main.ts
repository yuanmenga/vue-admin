import { createApp } from 'vue'
import App from './App.vue'
import '@/style/global.scss'
import router, { setupRouter } from './router'
import { setupPlugins } from './plugins'

async function bootstrap() {
  const app = createApp(App)
  setupRouter(app) //注册路由
  setupPlugins(app) //注册插件
  await router.isReady() //路由全部加载完毕再挂载组件
  app.mount('#app')
}
bootstrap() //创建Vue实例
