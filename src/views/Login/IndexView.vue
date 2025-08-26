<template>
  <div class="config">
    <LanguageDropdown />
    <ThemeSwitch />
  </div>
  <el-tabs v-model="activeName" class="login-tabs">
    <el-tab-pane :label="t('label.WXLogin')" name="WXLogin">
      <WXLoginView @loginSuccess="loginSuccess" />
    </el-tab-pane>
    <el-tab-pane :label="t('label.login')" name="Login">
      <LoginView @loginSuccess="loginSuccess" />
    </el-tab-pane>
    <el-tab-pane :label="t('label.register')" name="Register">
      <RegisterView @registerSuccess="activeName = 'Login'" />
    </el-tab-pane>
  </el-tabs>
  <LYSFooter class="footer" />
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n({
  messages: {
    en: {
      label: {
        login: 'Login',
        register: 'Register',
        WXLogin: 'WXLogin',
      },
    },
    'zh-cn': {
      label: {
        login: '登录',
        register: '注册',
        WXLogin: '微信登录',
      },
    },
  },
})

import { ref } from 'vue'

import LYSFooter from '@/components/layout/LYSFooter.vue'
import LanguageDropdown from '@/components/LanguageDropdown.vue'
import ThemeSwitch from '@/components/ThemeSwitch.vue'

import LoginView from './LoginView.vue'
import WXLoginView from './WXLoginView.vue'
import RegisterView from './RegisterView.vue'
import router from '@/router'
const activeName = ref('Login')
import type { User } from '@/stores/user'

import useLogin from '@/hooks/useLogin'
const { login } = useLogin()

const loginSuccess = (user: User, token: string) => {
  login(token, user)

  router.push({ path: '/' })
}
</script>

<style scoped>
.config {
  position: fixed;
  right: 0;
  top: 0;
  padding: 1rem;
  display: flex;
  align-items: center;
  .theme-switch {
    margin-left: 1rem;
  }
}
.login-tabs {
  width: 25rem;
  height: 25rem;
  position: fixed;
  inset: 0;
  margin: auto;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  border-radius: 0.625rem;
  &:deep() .el-tabs__content {
    padding: 1rem;
    overflow-y: auto;
  }

  &:deep() .el-tabs__nav-wrap {
    padding-left: 1rem;
  }
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 3.9rem;
}
</style>
