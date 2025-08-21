import { createRouter, createWebHistory } from 'vue-router'
import useLogin from '@/hooks/useLogin'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login/IndexView.vue'),
    },
    {
      path: '/',
      redirect: '/home',
      name: 'LYSLayout',
      component: () => import('@/components/layout/LYSLayout.vue'),
      meta: {
        needLogin: true,
      },
      children: [
        {
          path: '/home',
          name: 'Home',
          component: () => import('@/views/Home/IndexView.vue'),
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
