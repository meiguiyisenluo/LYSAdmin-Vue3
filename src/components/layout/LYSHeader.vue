<script setup lang="ts">
import { language, mapObj, setLanguage } from '@/utils/I18n'

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
        {{ language }}
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="item in Object.keys(mapObj)" :key="item" :command="item">{{
            item
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
  .language-selector {
    width: 6.25rem;
  }
}
</style>
