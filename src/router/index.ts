import { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import autoRoutes from "./autoload";
import routes from "./routes";
import guard from "./guard";
const router = createRouter({
  history: createWebHistory(), //路由有两种模式：hash模式和普通模式
  //具体的路由
  routes: [...routes, ...autoRoutes],
});
//具名导出
export function setupRouter(app: App) {
  guard(router);
  app.use(router); //注册路由
}
export default router; //默认导出
