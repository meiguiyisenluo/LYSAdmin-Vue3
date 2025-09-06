<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n({
  messages: {
    en: {
      weidengluText: 'Login',

      loginOutButtonText: 'Logout',
    },
    'zh-cn': {
      weidengluText: '登录',

      loginOutButtonText: '登出',
    },
  },
})

import { UserFilled } from '@element-plus/icons-vue'

import { useRouter } from 'vue-router'
const router = useRouter()

import useLogin from '@/hooks/useLogin'
const { logout, isLogin } = useLogin()
import { toRefs } from 'vue'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const { user } = toRefs(userStore)

import LanguageDropdown from '@/components/LanguageDropdown.vue'
import ThemeSwitch from '@/components/ThemeSwitch.vue'
</script>

<template>
  <div class="header">
    <h1>LYS-Admin</h1>

    <LanguageDropdown />

    <el-divider direction="vertical" />

    <ThemeSwitch />

    <el-divider direction="vertical" />

    <el-dropdown v-if="isLogin">
      <el-avatar v-if="user.avatar" :size="30" :src="user.avatar"> </el-avatar>
      <el-avatar v-else-if="user.nickname" :size="30">
        {{ user.nickname.length > 3 ? user.nickname[0] : user.nickname }}
      </el-avatar>
      <el-avatar v-else :size="30" :icon="UserFilled"> </el-avatar>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="$router.push('/userInfo')"> 个人信息 </el-dropdown-item>
          <el-dropdown-item divided>
            <ElButton type="warning" @click="logout" text>{{ t('loginOutButtonText') }}</ElButton>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-button v-else type="primary" text @click="router.push('/login')">{{
      t('weidengluText')
    }}</el-button>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  h1 {
    width: 12rem;
    text-align: center;
    margin-right: auto;
  }
}
</style>
