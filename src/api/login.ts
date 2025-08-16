import service from '@/api/api'

// 登录接口
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
