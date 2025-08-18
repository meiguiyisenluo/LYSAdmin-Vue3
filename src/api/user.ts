import service from '@/api/api'

// 用户列表接口
export const getUserList = () => {
  return service({
    url: '/user/list',
    method: 'get',
  })
}

// 更新用户信息接口
export const updateUser = (
  id: number,
  data: { nickname?: string; email?: string; avatar?: string },
) => {
  return service({
    url: '/user/update/' + id,
    method: 'post',
    data,
  })
}
