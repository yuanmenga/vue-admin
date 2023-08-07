import { RouteRecordRaw } from "vue-router";
export default {
  path: "/permisson",
  name: "permisson",
  component: () => import("@/layout/admin/index.vue"),
  meta: {
    auth: true,
    menu: {
      title: "权限管理",
      icon: "AllApplication",
      isClick: false,
    },
  },
  children: [
    {
      path: "api",
      name: "api",
      component: () => import("@/view/Permission/api.vue"),
      meta: { menu: { title: "api管理", isClick: false } },
    },
    {
      path: "authority",
      name: "authority",
      component: () => import("@/view/Permission/authority.vue"),
      meta: { menu: { title: "角色管理", isClick: false } },
    },
    {
      path: "user",
      name: "user",
      component: () => import("@/view/Permission/user.vue"),
      meta: { menu: { title: "用户管理", isClick: false } },
    },
  ],
} as RouteRecordRaw;
