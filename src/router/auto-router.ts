import { RouteRecordRaw } from "vue-router";
import util from "@/utils";
// import 自动引入
const layouts = import.meta.globEager("../layouts/*.vue"); //获取所有布局
const views = import.meta.globEager("../views/**/*.vue"); //获取所有子路由
//获取全部路由
function getAllRouter() {
  const layoutRouters = [] as RouteRecordRaw[];
  Object.entries(layouts).forEach(([file, module]) => {
    const route = getRouterModule(file, module);
    route.children = getChildRouter(route);
    layoutRouters.push(route);
  });
  return layoutRouters;
}
//获取子路由
function getChildRouter(layoutRouters: RouteRecordRaw) {
  const routers: RouteRecordRaw[] = [];
  Object.entries(views).forEach(([file, module]) => {
    if (file.includes(`../views/${layoutRouters.name as string}`)) {
      const name = file.split("/").pop()?.split(".")[0];
      const route = getRouterModule(file, module);
      route.path =
        route.component.route?.path ??
        `/${layoutRouters.name as string}/${name}`;
      routers.push(route);
    }
  });
  return routers;
}
//生成路由方法
function getRouterModule(file: string, module: any) {
  const name = file.split("/").pop()?.split(".")[0];
  const component = module.default;
  const route = {
    path: `/${name}`,
    name,
    component,
  } as RouteRecordRaw;
  return Object.assign(route);
}

const routes = util.env.VITE_ROUTER_AUTOLOAD
  ? getAllRouter()
  : ([] as RouteRecordRaw[]);

console.log(util.env.VITE_ROUTER_AUTOLOAD);
export default routes;
