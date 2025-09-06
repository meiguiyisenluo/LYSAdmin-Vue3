import service from '@/api/api'
import type { AxiosResponse } from 'axios'

// 用户列表接口
export const getUserList = () => {
  return service({
    url: '/user/list',
    method: 'get',
  })
}

// 更新用户信息接口
import { type User } from '@/stores/user'
export const updateUser = (
  id: number,
  data: Partial<Pick<User, 'avatar' | 'email' | 'nickname'>>,
): Promise<AxiosResponse<User>> => {
  return service({
    url: '/user/update/' + id,
    method: 'post',
    data,
  })
}
