import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/styles/dark/css-vars.css'
import '@/styles/light/css-vars.css'

import '@/styles/style.css'

import { i18n } from '@/stores/i18n'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(i18n)

import LYSPage from '@/components/layout/LYSPage.vue'
app.component(LYSPage.name!, LYSPage)

app.mount('#app')
