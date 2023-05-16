//自动注册的格式
// {
//   path: "/";
//   component: {
//   }
//   children: [];

import { RouteRecordRaw } from "vue-router";
const layout = import.meta.globEager("../layout/*.vue");
const view = import.meta.globEager("../view/**/*.vue");
//获取布局路由
function getRoute() {
  const layoutRoutes = [] as RouteRecordRaw[];
  Object.entries(layout).forEach(([file, module]) => {
    const route = getRouteByModule(file, module);
    route.children = getChildrenRoute(route);
    layoutRoutes.push(route);
  });
  console.log(layoutRoutes);

  return layoutRoutes;
}
//获取布局路由子路由
function getChildrenRoute(route: RouteRecordRaw): RouteRecordRaw[] {
  const routesView = [] as RouteRecordRaw[];
  Object.entries(view).forEach(([file, module]) => {
    if (file.includes(`../view/${route.name as string}`)) {
      const view = getRouteByModule(file, module);
      view.path = module.default?.route
        ? `${view.path}`
        : `${route.path}${view.path}`;
      view.name = `${route.name as string}-${view.name as string}`;
      routesView.push(view);
    }
  });
  return routesView;
}
//路由方法
function getRouteByModule(
  file: string,
  module: {
    [key: string]: any;
  }
) {
  const name = file.split("/").pop()?.split(".")[0];
  const route: RouteRecordRaw = {
    path: `/${name}`,
    name,
    component: module.default,
  };

  return Object.assign(route, module.default?.route);
}

const autoRoutes = getRoute();
export default autoRoutes;
