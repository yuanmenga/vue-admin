import { RouteRecordRaw } from "vue-router";
export default {
  path: "/error",
  component: () => import("@/layout/error.vue"),
  meta: { auth: false, title: "错误页面", icon: "fas fa-robot", show: true },
  children: [
    {
      path: "403",
      name: "error.403",
      component: () => import("@/view/error/403.vue"),
      meta: { title: "403", icon: "fas fa-robot", show: true },
    },
    {
      path: "404",
      name: "error.404",
      component: () => import("@/view/error/404.vue"),
      meta: { title: "404", icon: "fas fa-robot", show: true },
    },
    {
      path: "500",
      name: "error.500",
      component: () => import("@/view/error/500.vue"),
      meta: { title: "500", icon: "fas fa-robot", show: true },
    },
  ],
} as RouteRecordRaw;
