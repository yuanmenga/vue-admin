import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import moduleRoutes from './module'
import guard from './guard'
console.log(...moduleRoutes)
const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...moduleRoutes],
})

export function setupRouter(app: App) {
  guard(router)
  app.use(router)
}
export default router
