import axios from 'axios'
import type { AxiosResponse } from 'axios'
import { useTokenStore } from '@/stores/token'

import useLogin from '@/hooks/useLogin'
const { logout } = useLogin()

const service = axios.create({
  baseURL: '/api',
  timeout: 5000,
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    if (!['/user/login', '/user/register'].includes(config.url!)) {
      const tokenStore = useTokenStore()
      config.headers['Lys-Token'] = tokenStore.token
    }
    return config
  },
  (error) => Promise.reject(error),
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.error('未授权，请重新登录')
          logout()
          break
        case 404:
          console.error('资源不存在')
          break
        default:
          console.error('请求失败')
      }
    } else {
      console.error('网络错误或配置错误')
    }
    return Promise.reject(error.response)
  },
)

export default service
