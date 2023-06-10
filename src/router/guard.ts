import { cacheEnum } from "@/enum/cacheEnum";
import { userStore } from "@/store/useStore";

import util from "@/utils";
import { RouteLocationNormalized, Router } from "vue-router";
//路由守卫
class Guard {
  constructor(private router: Router) {}
  public run() {
    this.router.beforeEach(this.beforeEach.bind(this));
  }
  private async beforeEach(
    to: RouteLocationNormalized,
    form: RouteLocationNormalized
  ) {
    //to包括目标路由以及它包括的子路由
    if (this.isLogin(to) === false) return { name: "login" };
    // if (this.isGuest(to) === false) return form;
    //每次跳转路由前请求用户信息
    await this.getUserInfo();
  }
  //获取token
  private token() {
    return util.store.get(cacheEnum.TOKEN)?.token;
  }

  //登录用户访问
  private isLogin(route: RouteLocationNormalized) {
    const state = Boolean(
      !route.meta.auth || (route.meta.auth && this.token())
    );
    if (state === false) {
      util.store.set(cacheEnum.HISTORY_ROUTER, route.name);
    }
    return state;
  }
  //游客访问
  // private isGuest(route: RouteLocationNormalized) {
  //   return Boolean(!route.meta.guest || (route.meta.guest && !this.token()));
  // }
  //获取用户信息
  private getUserInfo() {
    if (this.token()) {
      return userStore().getUserInfo();
    }
  }
}
export default (router: Router) => {
  new Guard(router).run();
};
