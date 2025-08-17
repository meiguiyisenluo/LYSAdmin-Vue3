import service from '@/api/api'

// 用户列表接口
export const getUserList = () => {
  return service({
    url: '/user/list',
    method: 'get',
  })
}
