import { RouteRecordRaw } from 'vue-router'
export default {
  path: '/admin',
  name: 'admin',
  //路由重定向
  redirect: '/admin/home',
  component: () => import('@/layout/admin/index.vue'),
  meta: {
    auth: true,
    menu: {
      title: '控制台',
      icon: 'DashboardOne',
      isClick: true,
    },
  },
  children: [
    {
      path: 'home',
      name: 'admin.home',
      component: () => import('@/view/admin/home.vue'),
      meta: {
        auth: true,
        menu: {
          title: '首页',
          icon: 'AllApplication',
          isClick: true,
        },
      },
    },
  ],
} as RouteRecordRaw
