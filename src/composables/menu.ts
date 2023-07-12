// import { RouteLocationNormalized } from "vue-router";
// import { Imenu, Menu } from "#/menu";
// import { cacheEnum } from "@/enum/cacheEnum";
// import router from "@/router";
// import utils from "@/utils";
// import { reactive } from "vue";
// console.log(router, 12);

// class Menus {
//   public menu = reactive<Menu[]>([]);
//   public historyMenu = reactive<Imenu[]>([]);
//   constructor() {
//     this.menu = this.getMenuByRouter();
//     this.historyMenu = utils.store.get(cacheEnum.HISTORY_MENU) ?? [];
//   }
//   //根据路由获取菜单
//   getMenuByRouter(): Menu[] {
//     const routesAll = router.getRoutes(); //获取路由地址
//     //对路由进行过滤处理
//     const routes = routesAll
//       .filter((route) => route.meta.menu && route.children.length)
//       .map((route) => {
//         let menu: Menu = { ...route.meta?.menu, name: route.name as string }; //拿到父路由的menu
//         menu.children = route.children //拿到子路由的menu
//           .filter((route) => route.meta?.menu)
//           .map((route) => {
//             return { ...route.meta?.menu, name: route.name } as Imenu;
//           });
//         return menu;
//       })
//       .filter((menu) => menu.children?.length) as Menu[];
//     console.log(routes, 1243);

//     return routes;
//   }
//   //获取历史菜单
//   addHistoryMenu(router: RouteLocationNormalized) {
//     if (!router.meta.menu) return;
//     const menu: Imenu = { ...router.meta.menu, name: router.name as string };
//     const isHas = this.historyMenu.some((route) => menu.name === route.name);
//     if (!isHas) this.historyMenu.unshift(menu);
//     if (this.historyMenu.length > 10) {
//       this.historyMenu.pop();
//     }
//     utils.store.set(cacheEnum.HISTORY_MENU, this.historyMenu);
//   }
//   removeHistoryMenu(menu: Imenu) {
//     const index = this.historyMenu.indexOf(menu);
//     this.historyMenu.splice(index, 1);
//   }
// }
// export default new Menus();
