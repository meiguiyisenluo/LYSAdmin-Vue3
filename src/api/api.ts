import axios from 'axios'
import type { AxiosResponse } from 'axios'

const service = axios.create({
  baseURL: '/api',
  timeout: 5000,
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => Promise.reject(error),
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.error('未授权，请重新登录')
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
    return Promise.reject(error)
  },
)

export default service
