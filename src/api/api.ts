import axios from 'axios'
import type { AxiosResponse } from 'axios'
import { useTokenStore } from '@/stores/token'
import { ElNotification } from 'element-plus'

import useLogin from '@/hooks/useLogin'
const { logout } = useLogin()

import { i18n, language } from '@/stores/i18n'

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
    config.headers['Lys-Language'] = language.value.value
    return config
  },
  (error) => Promise.reject(error),
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(response)
    response.headers['lys-message'] = decodeURIComponent(response.headers['lys-message'])
    return response
  },
  (error) => {
    let message = undefined
    if (error.response) {
      error.response.headers['lys-message'] = decodeURIComponent(
        error.response.headers['lys-message'],
      )

      const key = 'network.error.' + error.response.status
      message = i18n.global.t(key)
      message = message === key ? i18n.global.t('network.error.default') : message
      switch (error.response.status) {
        case 401:
        case 403:
          logout()
          break
        default:
          break
      }
    } else {
      message = i18n.global.t('network.error.noResponse')
    }

    if (message) {
      ElNotification({
        title: i18n.global.t('network.error.title') + error.response.status,
        message,
        type: 'error',
      })
    }

    return Promise.reject(error.response)
  },
)

export default service
