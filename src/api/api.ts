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
    let message = undefined
    if (error.response) {
      switch (error.response.status) {
        case 401:
          message = '未授权，请重新登录'
          logout()
          break
        case 403:
          message = '授权已过期'
          logout()
          break
        case 404:
          message = '资源不存在'

          break
        default:
          message = '请求失败'
      }
    } else {
      message = '网络错误或配置错误'
    }

    if (message) {
      ElNotification({
        title: 'Network Error' + error.response.status,
        message,
        type: 'error',
      })
    }

    return Promise.reject(error.response)
  },
)

export default service
