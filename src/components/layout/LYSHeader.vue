<script setup lang="ts">
import { useI18nStore, languages } from '@/stores/I18n'
import type { Lang } from '@/stores/I18n'
const i18nStore = useI18nStore()
import { useI18n } from 'vue-i18n'
const { locale } = useI18n({ useScope: 'global' })
locale.value = i18nStore.language.value
const setLanguage = (command: Lang) => {
  locale.value = command.value
  i18nStore.setLanguage(command)
}

import { useDark } from '@vueuse/core'
const isDark = useDark()

import { Sunny, Moon } from '@element-plus/icons-vue'

import useLogin from '@/hooks/useLogin'
const { logout } = useLogin()
import { useUserStore } from '@/stores/user'
const { user } = useUserStore()
</script>

<template>
  <div class="header">
    <el-dropdown @command="setLanguage">
      <span>
        {{ i18nStore.language.name }}
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="item in languages" :key="item.value" :command="item">{{
            item.name
          }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <el-divider direction="vertical" />

    <el-switch
      class="theme-switch"
      v-model="isDark"
      :active-action-icon="Moon"
      :inactive-action-icon="Sunny"
    />

    <el-divider direction="vertical" />

    <div>{{ user.nickname || user.username }}</div>

    <el-divider direction="vertical" />

    <ElButton type="warning" @click="logout" text>logout</ElButton>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .theme-switch {
    --el-switch-on-color: #272a2f;
    --el-switch-off-color: #eff0f3;
    --el-switch-border-color: #c2c2c4;
  }
}
</style>
