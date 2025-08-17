import { defineStore } from 'pinia'

export interface User {
  id: number
  username: string
  role: string
  nickname: string | null
  email: string
  createdAt: string
  updatedAt: string
  deletedAt: string | null
}

export const useUserStore = defineStore(
  'user',
  () => {
    const user = ref<User>({
      id: 9,
      username: '15914203799',
      role: 'user',
      nickname: null,
      email: '1402175410@qq.com',
      createdAt: '2025-08-17T01:37:16.000Z',
      updatedAt: '2025-08-17T01:37:16.000Z',
      deletedAt: null,
    })

    const setUser = (newUser: User) => {
      user.value = { ...user.value, ...newUser }
    }

    return { user, setUser }
  },
  {
    persist: {
      key: '__LYSAdmin-user',
      storage: window.localStorage,
    },
  },
)
