import { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import autoRoutes from "./autoload";
import routes from "./routes";
const route = createRouter({
  history: createWebHistory(), //路由有两种模式：hash模式和普通模式
  //具体的路由
  routes: [...routes, ...autoRoutes],
});
//具名导出
export function setupRouter(app: App) {
  app.use(route); //注册路由
}
export default route; //默认导出
