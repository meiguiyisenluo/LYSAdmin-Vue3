import { computed, ref } from 'vue'

import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

export type Lang = 'zh-cn' | 'en'
export const language = ref<Lang>('zh-cn')
export const mapObj: Record<Lang, typeof zhCn | typeof en> = {
  'zh-cn': zhCn,
  en: en,
}
export const locale = computed(() => mapObj[language.value])
export const setLanguage = (lang: Lang) => {
  language.value = lang
}
