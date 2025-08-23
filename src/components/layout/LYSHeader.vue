<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n({
  messages: {
    en: {
      loginOutButtonText: 'Logout',
    },
    'zh-cn': {
      loginOutButtonText: '登出',
    },
  },
})

import useLogin from '@/hooks/useLogin'
const { logout } = useLogin()
import { useUserStore } from '@/stores/user'
const { user } = useUserStore()

import LanguageDropdown from '@/components/LanguageDropdown.vue'
import ThemeSwitch from '@/components/ThemeSwitch.vue'
</script>

<template>
  <div class="header">
    <LanguageDropdown />

    <el-divider direction="vertical" />

    <ThemeSwitch />

    <el-divider direction="vertical" />

    <div>{{ user.nickname || user.username }}</div>

    <el-divider direction="vertical" />

    <ElButton type="warning" @click="logout" text>{{ t('loginOutButtonText') }}</ElButton>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
