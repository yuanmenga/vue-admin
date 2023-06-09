import { RouteLocationNormalized } from "vue-router";
import { defineStore } from "pinia";
import router from "@/router";
import { Menu, Imenu } from "#/menu";
import utils from "@/utils";
import { cacheEnum } from "@/enum/cacheEnum";
export const menuStore = defineStore("router", {
  state: () => {
    return {
      menus: [] as Menu[],
      historyMenu: [] as Menu[],
    };
  },
  actions: {
    init() {
      this.getMenuByRouter();
    },
    addHistoryMenu(router: RouteLocationNormalized) {
      if (!router.meta.menu) return;
      const menu: Menu = { ...router.meta.menu, name: router.name as string };
      const isHas = this.historyMenu.some((menu) => menu.name === router.name);
      if (!isHas) this.historyMenu.push(menu);
      if (this.historyMenu.length > 10) {
        this.historyMenu.pop();
      }
      utils.store.set(cacheEnum.HISTORY, this.historyMenu);
    },
    getMenuByRouter() {
      const routesAll = router.getRoutes(); //获取路由地址
      //对路由进行过滤处理
      const routes = routesAll
        .filter((route) => route.meta.menu && route.children.length)
        .map((route) => {
          let menu: Menu = { ...route.meta?.menu, name: route.name as string }; //拿到父路由的menu
          menu.children = route.children //拿到子路由的menu
            .filter((route) => route.meta?.menu)
            .map((route) => {
              return { ...route.meta?.menu, name: route.name } as Imenu;
            });
          return menu;
        });
      this.menus = routes;
      console.log(this.menus);
    },
  },
});
