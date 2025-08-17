import { defineStore } from 'pinia'

export const useTokenStore = defineStore(
  'token',
  () => {
    const token = ref<string | undefined>(undefined)

    const setToken = (newToken: string) => {
      token.value = newToken
    }

    const clear = () => {
      token.value = undefined
    }

    return { token, setToken, clear }
  },
  {
    persist: {
      key: '__LYSAdmin-token',
      storage: window.localStorage,
    },
  },
)
