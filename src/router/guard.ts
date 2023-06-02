import util from "@/utils";
import { RouteLocationNormalized, Router } from "vue-router";

//路由守卫
class Guard {
  constructor(private router: Router) {}
  public run() {
    this.router.beforeEach((to, form) => {
      //to包括目标路由以及它包括的子路由
      const token = util.store.get("token")?.token;
      if (this.isLogin(to, token) === false) return { name: "auth.login" };
    });
  }
  //通过meta和token判断是否需要跳转登录页
  private isLogin(to: RouteLocationNormalized, token: any): boolean {
    return Boolean(!to.meta.auth || (to.meta.auth && token));
  }
}
export default (router: Router) => {
  new Guard(router).run();
};
