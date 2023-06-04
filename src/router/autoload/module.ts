import { RouteRecordRaw } from "vue-router";
//根据module的文件进行注册路由
export default () => {
  const routes: RouteRecordRaw[] = [];
  const moduleFile = import.meta.globEager("../module/**/*.ts");
  Object.keys(moduleFile).forEach((key) => {
    routes.push(moduleFile[key].default);
  });
  return routes;
};
