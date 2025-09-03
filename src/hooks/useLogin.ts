import { useTokenStore } from '@/stores/token'
import { useUserStore } from '@/stores/user'
import type { User } from '@/stores/user'
import router from '@/router'
import { computed } from 'vue'

const useLogin = () => {
  const tokenStore = useTokenStore()
  const userStore = useUserStore()
  const isLogin = computed(() => !!tokenStore.token)
  const login = (token: string, user: User) => {
    tokenStore.setToken(token)
    userStore.setUser(user)
  }
  const logout = () => {
    tokenStore.clear()
    router.push({ path: '/login' })
  }
  return { isLogin, login, logout }
}
export default useLogin
