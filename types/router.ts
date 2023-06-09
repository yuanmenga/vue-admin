import "vue-router";
import { Menu } from "#/menu";
declare module "vue-router" {
  //路由原信息的接口
  interface RouteMeta {
    //判断是否为登录用户
    auth?: boolean;
    //判断是否为游客
    guest?: boolean;
    menu?: Menu;
    //访问权限
    permission?: string[];
  }
}
