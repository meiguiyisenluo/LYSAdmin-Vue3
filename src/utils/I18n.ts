import { computed, ref } from 'vue'

import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

export type Lang = 'zh-cn' | 'en'
export const language = ref<Lang>('zh-cn')
export const locale = computed(() => {
  const mapObj: Record<Lang, zhCn | en> = {
    'zh-cn': zhCn,
    en: en,
  }
  return mapObj[language.value]
})
export const setLanguage = (lang: Lang) => {
  language.value = lang
}
