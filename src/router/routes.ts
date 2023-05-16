const routes = [
  {
    path: "/",
    component: () => import("@/layout/admin.vue"),
    children: [
      { path: "users", component: () => import("@/view/admin/user.vue") },
    ],
  },
];
export default routes;
