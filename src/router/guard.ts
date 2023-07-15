import { CacheEnum } from '@/enum/CacheEnum'
import util from '@/utils'
import userStore from '@/store/userStore'
import { RouteLocationNormalized, Router } from 'vue-router'
//路由守卫
class Guard {
  constructor(private router: Router) {}
  public run() {
    this.router.beforeEach(this.beforeEach.bind(this))
  }
  //路由前置守卫
  private async beforeEach(to: RouteLocationNormalized, form: RouteLocationNormalized) {
    //验证跳转的路由是否需要登录权限和游客权限
    if (to.meta.auth && !this.token()) {
      util.store.set(CacheEnum.HISTORY_ROUTER, to.name)
      return { name: 'login' }
    }
    // if (to.meta.guest && this.token()) return form;
    //每次跳转路由前请求用户信息
    // await this.getUserInfo()
  }
  private token() {
    return util.store.get(CacheEnum.TOKEN)?.token
  }
  // private getUserInfo() {
  //   if (this.token()) {
  //     return userStore().getUserInfo()
  //   }
  // }
}
export default (router: Router) => {
  new Guard(router).run()
}
