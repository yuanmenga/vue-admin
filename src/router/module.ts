import userApi, { User } from '@/api/userApi'
import { CacheEnum } from '@/enum/CacheEnum'
import utils from '@/utils'
import { RouteRecordRaw, Router } from 'vue-router'
function getModuleRoute() {
  const moduleFile = import.meta.globEager('./module/**/*.ts')
  const routes: RouteRecordRaw[] = []
  Object.keys(moduleFile).forEach((key) => {
    routes.push(moduleFile[key].default)
  })
  return routes
}
let routes: RouteRecordRaw[] = getModuleRoute()
async function autoload() {
  let user: User
  if (utils.store.get(CacheEnum.TOKEN)) {
    const res = await userApi.info()
    user = res.data as User
  }
  routes = routes.map((route) => {
    route.children = route.children?.filter((r) => {
      const permission = r.meta?.permission
      return permission ? user.permissions?.includes(permission) : true
    })
    return route
  })
  return routes
}
export default autoload
