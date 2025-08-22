import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import { createI18n } from 'vue-i18n'
import zhCn from '@/lang/zh-cn'
import en from '@/lang/en'
export const i18n = createI18n({
  legacy: false,
  messages: {
    en,
    'zh-cn': zhCn,
  },
})

import el_zhCn from 'element-plus/es/locale/lang/zh-cn'
import el_en from 'element-plus/es/locale/lang/en'

export const languages = [
  { name: '中文', value: 'zh-cn' },
  { name: 'English', value: 'en' },
]
export type Lang = (typeof languages)[number]
export type LangIndex = (typeof languages)[number]['value']

const elMapObj: Record<LangIndex, typeof el_zhCn> = {
  'zh-cn': el_zhCn,
  en: el_en,
}

export const useI18nStore = defineStore(
  'i18n',
  () => {
    const language = ref<Lang>({ ...languages[0] })
    const setLanguage = (lang: Lang) => {
      language.value = lang
    }

    const elLocale = computed(() => elMapObj[language.value.value])
    
    return { language, setLanguage, elLocale }
  },
  {
    persist: {
      key: '__LYSAdmin-i18n',
      storage: window.localStorage,
    },
  },
)
