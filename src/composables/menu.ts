import { RouteLocationNormalized } from "vue-router";
import { IMenu, Menu } from "#/menu";
import { CacheEnum } from "@/enum/CacheEnum";
import router from "@/router";
import utils from "@/utils";
import { ref } from "vue";

class Menus {
  public menu = ref<Menu[]>([]);
  public historyMenu = ref<IMenu[]>([]);
  public close = ref(false);
  constructor() {
    this.menu.value = this.getMenuByRouter();
    this.historyMenu.value = utils.store.get(CacheEnum.HISTORY_MENU) ?? [];
  }
  //根据路由获取菜单
  getMenuByRouter(): Menu[] {
    const routesAll = router.getRoutes(); //获取路由地址
    //对路由进行过滤处理
    const routes = routesAll
      .filter((route) => route.meta.menu && route.children.length)
      .map((route) => {
        let menu: Menu = { ...route.meta?.menu, name: route.name as string }; //拿到父路由的menu
        menu.children = route.children //拿到子路由的menu
          .filter((route) => route.meta?.menu)
          .map((route) => {
            return { ...route.meta?.menu, name: route.name } as IMenu;
          });
        return menu;
      })
      .filter((menu) => menu.children?.length) as Menu[];
    console.log(routes, 1243);

    return routes;
  }
  //获取历史菜单
  addHistoryMenu(router: RouteLocationNormalized) {
    if (!router.meta.menu) return;
    const menu: IMenu = { ...router.meta.menu, name: router.name as string };
    const isHas = this.historyMenu.value.some(
      (route) => menu.name === route.name
    );
    if (!isHas) this.historyMenu.value.unshift(menu);
    if (this.historyMenu.value.length > 10) {
      this.historyMenu.value.pop();
    }
    utils.store.set(CacheEnum.HISTORY_MENU, this.historyMenu.value);
  }
  //删除历史菜单
  removeHistoryMenu(menu: IMenu) {
    const index = this.historyMenu.value.indexOf(menu);
    this.historyMenu.value.splice(index, 1);
    utils.store.set(CacheEnum.HISTORY_MENU, this.historyMenu.value);
    if (this.historyMenu.value.length != 0) {
      if (this.historyMenu.value.length === 1)
        router.push({ name: this.historyMenu.value[0].name });

      if (this.historyMenu.value[index + 1])
        router.push({ name: this.historyMenu.value[index].name });

      if (!this.historyMenu.value[index])
        router.push({ name: this.historyMenu.value[index - 1].name });
    }
  }
  //改变菜单状态
  changeMenuState(menu: Menu) {
    if (menu.isClick) {
      menu.isClick = false;
    } else {
      this.menu.value.forEach((menu) => {
        menu.isClick = false;
        menu.children?.forEach((cmeun) => {
          cmeun.isClick = false;
        });
      });
      menu.isClick = true;
    }
  }
  //改变子菜单状态
  changeIMenuState(cmenu: IMenu) {
    this.menu.value.forEach((menu) => {
      menu.children?.forEach((cmeun) => {
        cmeun.isClick = false;
      });
    });
    cmenu.isClick = true;
    router.push({ name: cmenu.name });
  }
  //改变菜单状态
  toggleState() {
    this.close.value = !this.close.value;
    console.log(this.close.value);

    // store.set(CacheEnum.MENU_IS_CLOSE, this.close.value);
  }
}
export default new Menus();
