const routes = [
  {
    path: "/",
    component: () => import("@/view/auth/login.vue"),
    children: [
      { path: "users", component: () => import("@/view/admin/home.vue") },
    ],
  },
  {
    path: "/home",
    component: () => import("@/view/home.vue"),
  },
];
export default routes;
