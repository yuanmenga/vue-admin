import { RouteRecordRaw } from "vue-router";
export default {
  path: "/person",
  name: "person",
  component: () => import("@/layout/admin/index.vue"),
  meta: {
    auth: true,
    menu: {
      title: "个人中心",
      icon: "AllApplication",
      isClick: false,
    },
  },
  children: [
    {
      path: "persona",
      name: "persona",
      component: () => import("@/view/auth/person.vue"),
      meta: { menu: { title: "个人中心", isClick: false } },
    },
  ],
} as RouteRecordRaw;
