import { RouteRecordRaw } from "vue-router";
export default {
  path: "/admin",
  name: "admin",
  component: () => import("@/layout/admin.vue"),
  children: [
    {
      path: "home",
      name: "admin.home",
      component: () => import("@/view/admin/hd/home.vue"),
    },
  ],
} as RouteRecordRaw;
