import { createRouter, createWebHistory } from 'vue-router'
import useLogin from '@/hooks/useLogin'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      children: [
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/views/Login/IndexView.vue'),
        },
        {
          path: '/userInfo',
          name: 'UserInfo',
          component: () => import('@/views/UserInfo/IndexView.vue'),
          meta: {
            needLogin: true,
          },
        },
        {
          path: '*',
          name: 'LYSLayout',
          component: () => import('@/components/layout/LYSLayout.vue'),
          meta: {
            needLogin: true,
          },
          children: [
            {
              path: '/',
              redirect: '/home',
            },
            {
              path: '/home',
              name: 'Home',
              component: () => import('@/views/Home/IndexView.vue'),
            },
            {
              path: '/userManage',
              name: 'UserManage',
              component: () => import('@/views/UserManage/Index.vue'),
            },
          ],
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  const { isLogin, logout } = useLogin()
  if (to.meta.needLogin && !isLogin) {
    logout()
  }
  next()
})

export default router
