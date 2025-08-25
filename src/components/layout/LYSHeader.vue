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

    <el-dropdown>
      <span>
        {{ user.nickname || user.username }}
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="$router.push('/userInfo')"> 个人信息 </el-dropdown-item>
          <el-dropdown-item divided>
            <ElButton type="warning" @click="logout" text>{{ t('loginOutButtonText') }}</ElButton>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
