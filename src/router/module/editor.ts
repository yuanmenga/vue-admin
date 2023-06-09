import { RouteRecordRaw } from "vue-router";
export default {
  path: "/editor",
  name: "editor",
  component: () => import("@/layout/admin.vue"),
  meta: {
    auth: true,
    menu: {
      title: "编辑器",
      icon: "fas fa-robot",
      isClick: true,
    },
  },
  children: [
    {
      path: "base",
      name: "editor.base",
      component: () => import("@/view/editor/base.vue"),
      meta: {
        menu: {
          title: "基础编辑器",
          isClick: false,
        },
      },
    },
    {
      path: "markdown",
      name: "editor.markdown",
      component: () => import("@/view/editor/markdown.vue"),
      meta: {
        menu: {
          title: "markdown",
          isClick: false,
        },
      },
    },
  ],
} as RouteRecordRaw;
