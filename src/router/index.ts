import { createRouter, createWebHistory } from 'vue-router'
import useLogin from '@/hooks/useLogin'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home/IndexView.vue'),
      meta: {
        needLogin: true,
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login/IndexView.vue'),
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
