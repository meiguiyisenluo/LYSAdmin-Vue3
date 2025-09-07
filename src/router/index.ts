import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import useLogin from '@/hooks/useLogin'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: defineAsyncComponent(() => import('@/views/Login/IndexView.vue')),
    },
    {
      path: '/userInfo',
      name: 'UserInfo',
      component: defineAsyncComponent(() => import('@/views/UserInfo/IndexView.vue')),
      meta: {
        needLogin: true,
      },
    },
    {
      path: '/*',
      name: 'LYSLayout',
      component: defineAsyncComponent(() => import('@/components/layout/LYSLayout.vue')),
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
          component: defineAsyncComponent(() => import('@/views/Home/IndexView.vue')),
        },
        {
          path: '/userManage',
          name: 'UserManage',
          component: defineAsyncComponent(() => import('@/views/UserManage/Index.vue')),
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
