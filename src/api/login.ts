import service from '@/api/api'

// 注册接口
export const register = (data: {
  username: string
  password: string
  nickname: string
  email: string
}) => {
  return service({
    url: '/user/register',
    method: 'post',
    data,
  })
}

// 登录接口
export const login = (data: { username: string; password: string }) => {
  return service({
    url: '/user/login',
    method: 'post',
    data,
  })
}
