import { useTokenStore } from '@/stores/token'
import router from '@/router'
const logout = () => {
  const tokenStore = useTokenStore()
  tokenStore.clear()
  router.push({ path: '/login' })
}
export default logout
