import { RouteRecordRaw } from "vue-router";
// 基础路由，必须有的路由
const routes = [
  {
    path: "/",
    name: "login",
    meta: {
      guest: true,
    },
    component: () => import("@/view/auth/login.vue"),
  },
  {
    path: "/:any(.*)",
    name: "notFound",
    component: () => import("@/view/error/404.vue"),
  },
] as RouteRecordRaw[];
export default routes;
