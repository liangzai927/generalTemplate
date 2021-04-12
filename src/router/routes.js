const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    component: () => import('../views/index.vue'),
    meta: { title: '首页' },
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/login.vue')
  },
  {
    path: '*',
    component: () => import('../views/404.vue')
  }
]
export default routes