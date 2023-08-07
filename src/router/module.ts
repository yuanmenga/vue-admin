// import userApi, { User } from "@/api/userApi";
import { CacheEnum } from "@/enum/CacheEnum";
import utils from "@/utils";
import { RouteRecordRaw } from "vue-router";
function getModuleRoute() {
  const moduleFile = import.meta.glob("./module/**/*.ts", { eager: true });
  const routes: RouteRecordRaw[] = [];
  Object.keys(moduleFile).forEach((key) => {
    console.log(moduleFile[key]);

    routes.push((moduleFile[key] as any).default);
  });
  console.log(routes);
  return routes;
}

function getinfo() {
  if (utils.store.get(CacheEnum.TOKEN)) {
    return {
      permissions: ["qw", "error"],
    };
  }
  return {
    permissions: ["qw", "error"],
  };
}
let routes: RouteRecordRaw[] = getModuleRoute();
function autoload() {
  let user = getinfo();
  console.log(user, 1);
  routes = routes.map((route) => {
    route.children = route.children?.filter((r) => {
      const permission = r.meta?.permission;
      return permission ? user.permissions?.includes(permission) : true;
    });
    return route;
  });
  return routes;
}
export default autoload;
