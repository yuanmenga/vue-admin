import { RouteRecordRaw } from 'vue-router'
export default {
  path: '/error',
  name: 'error',
  redirect: '/error/403',
  component: () => import('@/layout/admin/index.vue'),
  meta: {
    auth: true,
    menu: {
      title: '错误页面',
      icon: 'fas fa-robot',
      isClick: false,
    },
  },
  children: [
    {
      path: '403',
      name: 'error.403',
      component: () => import('@/view/error/403.vue'),
      meta: { menu: { title: '403', isClick: false } },
    },
    {
      path: '404',
      name: 'error.404',
      component: () => import('@/view/error/404.vue'),
      meta: { menu: { title: '404', isClick: false } },
    },
    {
      path: '500',
      name: 'error.500',
      component: () => import('@/view/error/500.vue'),
      meta: { menu: { title: '405', isClick: false } },
    },
  ],
} as RouteRecordRaw
