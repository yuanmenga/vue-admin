import { RouteRecordRaw } from 'vue-router'
//根据module文件夹进行注册路由
const getModuleRoute = () => {
  const routes: RouteRecordRaw[] = []
  const moduleFile = import.meta.globEager('./module/**/*.ts')
  Object.keys(moduleFile).forEach((key) => {
    routes.push(moduleFile[key].default)
  })
  return routes
}
let routes: RouteRecordRaw[] = getModuleRoute()

export default routes
