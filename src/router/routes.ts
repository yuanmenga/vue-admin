import { RouteRecordRaw } from "vue-router";
// 基础路由
const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("@/view/auth/login.vue"),
    meta: {
      guest: true,
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/view/auth/register.vue"),
  },
  {
    path: "/:any(.*)",
    name: "notFound",
    component: () => import("@/view/error/404.vue"),
  },
] as RouteRecordRaw[];
export default routes;
