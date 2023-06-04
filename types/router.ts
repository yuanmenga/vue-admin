import "vue-router";

declare module "vue-router" {
  //路由原信息的接口
  interface RouteMeta {
    auth?: boolean;
    title?: string;
    icon?: string;
    //是否在菜单栏展示
    show?: boolean;
  }
}
