import { RouteRecordRaw } from "vue-router";
export default {
  path: "/admin",
  name: "admin",
  //路由重定向
  redirect: "/admin/home",
  component: () => import("@/layout/admin.vue"),
  meta: {
    auth: true,
    menu: {
      title: "首页",
      icon: "fas fa-robot",
      isClick: true,
    },
  },
  children: [
    {
      path: "home",
      name: "admin.home",
      component: () => import("@/view/admin/hd/home.vue"),
      meta: {
        menu: {
          title: "主页面",
          isClick: true,
        },
      },
    },
  ],
} as RouteRecordRaw;
