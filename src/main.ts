import { createApp } from 'vue'
import App from './App.vue'
import { setupPlugins } from './plugins'
import router, { setupRouter } from './router'
import '@/style/global.scss'
async function bootstrap() {
  const app = createApp(App)
  setupPlugins(app) //注册插件
  setupRouter(app) //注册路由
  await router.isReady() //路由全部加载完毕再挂载组件
  app.mount('#app')
}

bootstrap()
