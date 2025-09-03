import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSettingStore = defineStore(
  'setting',
  () => {
    const menu_collapse = ref<boolean>(false)
    const set_menu_collapse = (val: boolean) => {
      menu_collapse.value = val
    }

    return { menu_collapse, set_menu_collapse }
  },
  {
    persist: {
      key: '__LYSAdmin-setting',
      storage: window.localStorage,
    },
  },
)
